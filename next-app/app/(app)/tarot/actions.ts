'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { majorArcana } from '@/features/tarot/data/majorArcana'
import { getTodayKST } from '@/features/tarot/lib/getTodayKST'
import {
  buildTarotChatPrompts,
  type TarotPromptRecentMessage,
} from '@/features/tarot/lib/tarotPromptBuilder'
import type {
  TarotCard,
  TarotCategory,
  TarotChatMessage,
  TarotDailyFortuneResult,
  TarotOrientation,
  SubscriptionTier,
} from '@/features/tarot/types/tarot.types'

const FREE_TAROT_CHAT_LIMIT = 1

type OpenDailyFortuneResponse =
  | { status: 'ok'; fortune: TarotDailyFortuneResult }
  | { status: 'unauthenticated' }
  | { status: 'error'; message: string }

type CreateTarotChatSessionResponse =
  | { status: 'ok'; sessionId: string }
  | { status: 'unauthenticated' }
  | { status: 'error'; message: string }

export type TarotChatContext = {
  readonly sessionId: string
  readonly dailyFortuneId: string | null
  readonly category: TarotCategory
  readonly title: string | null
  readonly card: TarotDailyFortuneResult['card'] | null
  readonly messages: readonly TarotChatMessage[]
  readonly access: {
    readonly allowed: boolean
    readonly reason: 'free_first_chat' | 'credit' | 'plus' | 'mystic' | 'locked'
    readonly remaining: number
  }
}

type LoadTarotChatSessionResponse =
  | { status: 'ok'; chat: TarotChatContext }
  | { status: 'unauthenticated' }
  | { status: 'not_found' }
  | { status: 'error'; message: string }

type SendTarotChatMessageResponse =
  | { status: 'ok'; messages: readonly TarotChatMessage[]; access: TarotChatContext['access'] }
  | { status: 'paywall'; access: TarotChatContext['access'] }
  | { status: 'unauthenticated' }
  | { status: 'error'; message: string }

export async function openDailyFortune(
  category: TarotCategory = 'daily',
): Promise<OpenDailyFortuneResponse> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { status: 'unauthenticated' }
  }

  const readingDate = getTodayKST()

  const { data: existing, error: existingError } = await supabase
    .from('tarot_daily_fortunes')
    .select('*')
    .eq('user_id', user.id)
    .eq('reading_date', readingDate)
    .maybeSingle()

  if (existingError) {
    return { status: 'error', message: existingError.message }
  }

  if (existing) {
    await recordFortuneOpenedEvent(user.id, existing.id, false)
    return {
      status: 'ok',
      fortune: await mapDailyFortuneRow({
        userId: user.id,
        row: existing,
        isNew: false,
        reward: await getTarotRewardState(user.id),
      }),
    }
  }

  const card = pickRandomCard()
  const orientation = pickRandomOrientation()
  const fortune = card.fortune[orientation]
  const action = card.action[orientation]
  const contentSeed = card.contentSeed[orientation]

  const { data: inserted, error: insertError } = await supabase
    .from('tarot_daily_fortunes')
    .insert({
      user_id: user.id,
      reading_date: readingDate,
      category,
      card_id: card.id,
      orientation,
      short_message: fortune,
      action_message: action,
      content_seed: contentSeed,
    })
    .select('*')
    .single()

  if (insertError) {
    const { data: retryExisting } = await supabase
      .from('tarot_daily_fortunes')
      .select('*')
      .eq('user_id', user.id)
      .eq('reading_date', readingDate)
      .maybeSingle()

    if (retryExisting) {
      return {
        status: 'ok',
        fortune: await mapDailyFortuneRow({
          userId: user.id,
          row: retryExisting,
          isNew: false,
          reward: await getTarotRewardState(user.id),
        }),
      }
    }

    return { status: 'error', message: insertError.message }
  }

  const reward = await updateTarotRewardState(user.id, readingDate)

  await recordFortuneOpenedEvent(user.id, inserted.id, true)
  revalidatePath('/tarot')

  return {
    status: 'ok',
    fortune: await mapDailyFortuneRow({
      userId: user.id,
      row: inserted,
      isNew: true,
      reward,
    }),
  }
}

export async function createTarotChatSession(
  dailyFortuneId: string,
): Promise<CreateTarotChatSessionResponse> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { status: 'unauthenticated' }
  }

  const { data: fortune, error: fortuneError } = await supabase
    .from('tarot_daily_fortunes')
    .select('*')
    .eq('id', dailyFortuneId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (fortuneError) {
    return { status: 'error', message: fortuneError.message }
  }

  if (!fortune) {
    return { status: 'error', message: '오늘의 타로 결과를 찾을 수 없어요.' }
  }

  const card = majorArcana.find(item => item.id === fortune.card_id) ?? majorArcana[0]
  const category = normalizeCategory(fortune.category)
  const orientation: TarotOrientation = fortune.orientation === 'reversed' ? 'reversed' : 'upright'
  const guideMessage = buildInitialGuideMessage(card.nameKo)

  const { data: session, error: sessionError } = await supabase
    .from('tarot_chat_sessions')
    .insert({
      user_id: user.id,
      daily_fortune_id: fortune.id,
      category,
      title: `오늘의 카드: ${card.nameKo}`,
      initial_question: null,
      is_premium: false,
    })
    .select('id')
    .single()

  if (sessionError) {
    return { status: 'error', message: sessionError.message }
  }

  const { error: messageError } = await supabase.from('tarot_chat_messages').insert({
    session_id: session.id,
    user_id: user.id,
    role: 'assistant',
    content: guideMessage,
    token_count: estimateTokenCount(guideMessage),
  })

  if (messageError) {
    return { status: 'error', message: messageError.message }
  }

  await supabase.from('tarot_reading_analytics').insert({
    user_id: user.id,
    event_name: 'tarot_chat_session_created',
    event_payload: {
      session_id: session.id,
      daily_fortune_id: fortune.id,
      card_id: card.id,
      orientation,
    },
  })

  return { status: 'ok', sessionId: session.id }
}

export async function loadTarotChatSession(
  sessionId: string | null,
): Promise<LoadTarotChatSessionResponse> {
  if (!sessionId) {
    return { status: 'not_found' }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { status: 'unauthenticated' }
  }

  const { data: session, error: sessionError } = await supabase
    .from('tarot_chat_sessions')
    .select('*')
    .eq('id', sessionId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (sessionError) {
    return { status: 'error', message: sessionError.message }
  }

  if (!session) {
    return { status: 'not_found' }
  }

  const [fortuneResult, messagesResult] = await Promise.all([
    session.daily_fortune_id
      ? supabase
          .from('tarot_daily_fortunes')
          .select('*')
          .eq('id', session.daily_fortune_id)
          .eq('user_id', user.id)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null }),
    supabase
      .from('tarot_chat_messages')
      .select('*')
      .eq('session_id', session.id)
      .eq('user_id', user.id)
      .order('created_at', { ascending: true }),
  ])

  if (fortuneResult.error) {
    return { status: 'error', message: fortuneResult.error.message }
  }

  if (messagesResult.error) {
    return { status: 'error', message: messagesResult.error.message }
  }

  const access = await getChatAccess(user.id)
  const card = fortuneResult.data ? mapCardFromFortuneRow(fortuneResult.data) : null

  return {
    status: 'ok',
    chat: {
      sessionId: session.id,
      dailyFortuneId: session.daily_fortune_id,
      category: normalizeCategory(session.category),
      title: session.title,
      card,
      messages: (messagesResult.data ?? []).map(mapChatMessageRow),
      access,
    },
  }
}

export async function sendTarotChatMessage({
  sessionId,
  content,
}: {
  readonly sessionId: string
  readonly content: string
}): Promise<SendTarotChatMessageResponse> {
  const question = content.trim()
  if (!question) {
    return { status: 'error', message: '질문을 입력해줘.' }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { status: 'unauthenticated' }
  }

  const { data: session, error: sessionError } = await supabase
    .from('tarot_chat_sessions')
    .select('*')
    .eq('id', sessionId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (sessionError) {
    return { status: 'error', message: sessionError.message }
  }

  if (!session) {
    return { status: 'error', message: '채팅 세션을 찾을 수 없어요.' }
  }

  const access = await getChatAccess(user.id)
  if (!access.allowed) {
    return { status: 'paywall', access }
  }

  const fortune = session.daily_fortune_id
    ? await supabase
        .from('tarot_daily_fortunes')
        .select('*')
        .eq('id', session.daily_fortune_id)
        .eq('user_id', user.id)
        .maybeSingle()
    : { data: null, error: null }

  if (fortune.error) {
    return { status: 'error', message: fortune.error.message }
  }

  const cardContext = fortune.data ? mapCardFromFortuneRow(fortune.data) : null
  const { data: recentMessageRows, error: recentMessagesError } = await supabase
    .from('tarot_chat_messages')
    .select('role, content, created_at')
    .eq('session_id', session.id)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(6)

  if (recentMessagesError) {
    return { status: 'error', message: recentMessagesError.message }
  }

  const recentMessages = (recentMessageRows ?? [])
    .slice()
    .reverse()
    .flatMap<TarotPromptRecentMessage>(message => {
      if (message.role !== 'user' && message.role !== 'assistant') {
        return []
      }

      return [{ role: message.role, content: message.content }]
    })
  const promptBundle = cardContext
    ? buildTarotChatPrompts({
        category: normalizeCategory(session.category),
        cardNameKo: cardContext.nameKo,
        cardNameEn: cardContext.nameEn,
        orientation: cardContext.orientation,
        keywords: cardContext.keywords,
        fortune: cardContext.fortune,
        action: cardContext.action,
        contentSeed: cardContext.contentSeed,
        userQuestion: question,
        recentMessages,
      })
    : null
  const answer = buildTarotChatAnswer({
    card: cardContext,
    question,
  })

  const { error: userMessageError } = await supabase.from('tarot_chat_messages').insert({
    session_id: session.id,
    user_id: user.id,
    role: 'user',
    content: question,
    token_count: estimateTokenCount(question),
  })

  if (userMessageError) {
    return { status: 'error', message: userMessageError.message }
  }

  const { error: assistantMessageError } = await supabase.from('tarot_chat_messages').insert({
    session_id: session.id,
    user_id: user.id,
    role: 'assistant',
    content: answer,
    token_count: estimateTokenCount(answer),
  })

  if (assistantMessageError) {
    return { status: 'error', message: assistantMessageError.message }
  }

  await consumeChatAccess(user.id, access.reason)
  await supabase
    .from('tarot_chat_sessions')
    .update({
      initial_question: session.initial_question ?? question,
      updated_at: new Date().toISOString(),
    })
    .eq('id', session.id)
    .eq('user_id', user.id)

  await supabase.from('tarot_reading_analytics').insert({
    user_id: user.id,
    event_name: 'tarot_chat_message_sent',
    event_payload: {
      session_id: session.id,
      daily_fortune_id: session.daily_fortune_id,
      access_level: access.reason,
      prompt_ready: Boolean(promptBundle),
      prompt_user_length: promptBundle?.userPrompt.length ?? 0,
    },
  })

  const loaded = await loadTarotChatSession(session.id)
  if (loaded.status !== 'ok') {
    return { status: 'error', message: '메시지를 저장했지만 새로고침이 필요해요.' }
  }

  revalidatePath('/tarot/chat')

  return {
    status: 'ok',
    messages: loaded.chat.messages,
    access: loaded.chat.access,
  }
}

function pickRandomCard(): TarotCard {
  return majorArcana[crypto.getRandomValues(new Uint32Array(1))[0] % majorArcana.length]
}

function pickRandomOrientation(): TarotOrientation {
  return crypto.getRandomValues(new Uint32Array(1))[0] % 2 === 0 ? 'upright' : 'reversed'
}

async function mapDailyFortuneRow({
  userId,
  row,
  isNew,
  reward,
}: {
  readonly userId: string
  readonly row: {
    readonly id: string
    readonly reading_date: string
    readonly category: string
    readonly card_id: string
    readonly orientation: string
    readonly short_message: string | null
    readonly action_message: string | null
    readonly content_seed: string | null
  }
  readonly isNew: boolean
  readonly reward?: TarotRewardState
}): Promise<TarotDailyFortuneResult> {
  const card = majorArcana.find(item => item.id === row.card_id) ?? majorArcana[0]
  const orientation: TarotOrientation = row.orientation === 'reversed' ? 'reversed' : 'upright'
  const category = normalizeCategory(row.category)
  const usage = await getUsageState(userId)

  return {
    id: row.id,
    readingDate: row.reading_date,
    category,
    card: {
      id: card.id,
      nameKo: card.nameKo,
      nameEn: card.nameEn,
      number: card.number,
      imageUrl: card.imageUrl,
      orientation,
      keywords: card.keywords[orientation],
      fortune: row.short_message ?? card.fortune[orientation],
      action: row.action_message ?? card.action[orientation],
      contentSeed: row.content_seed ?? card.contentSeed[orientation],
    },
    isNew,
    canAskFreeQuestion: usage.freeChatCount < FREE_TAROT_CHAT_LIMIT,
    streakCount: reward?.streakCount,
    rewardMessage: reward?.rewardMessage,
    monthlyInsightUnlocked: reward?.monthlyInsightUnlocked,
  }
}

type TarotRewardState = {
  readonly streakCount: number
  readonly rewardMessage: string
  readonly monthlyInsightUnlocked: boolean
}

async function getTarotRewardState(userId: string): Promise<TarotRewardState> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_usage_limits')
    .select('streak_count, monthly_insight_unlocked')
    .eq('user_id', userId)
    .maybeSingle()

  return {
    streakCount: data?.streak_count ?? 0,
    rewardMessage: '',
    monthlyInsightUnlocked: data?.monthly_insight_unlocked ?? false,
  }
}

async function updateTarotRewardState(userId: string, readingDate: string): Promise<TarotRewardState> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_usage_limits')
    .select('free_chat_count, credit_balance, subscription_tier, streak_count, last_opened_date, bonus_credit_claimed_date, monthly_insight_unlocked')
    .eq('user_id', userId)
    .maybeSingle()

  const previousDate = data?.last_opened_date
  const dayGap = previousDate ? diffDateDays(previousDate, readingDate) : null
  const streakCount =
    previousDate === readingDate
      ? data?.streak_count ?? 1
      : dayGap === 1
        ? (data?.streak_count ?? 0) + 1
        : 1

  const shouldGrantBonus = streakCount === 3 && data?.bonus_credit_claimed_date !== readingDate
  const monthlyInsightUnlocked = Boolean(data?.monthly_insight_unlocked || streakCount >= 7)
  const rewardMessage = [
    shouldGrantBonus ? '3일 연속 리딩 달성 · 보너스 질문권 1개 지급' : null,
    !data?.monthly_insight_unlocked && monthlyInsightUnlocked
      ? '7일 연속 리딩 달성 · 월간 인사이트 해금'
      : null,
  ]
    .filter(Boolean)
    .join('\n')

  await supabase.from('tarot_usage_limits').upsert(
    {
      user_id: userId,
      last_free_date: readingDate,
      daily_free_used: true,
      free_chat_count: data?.free_chat_count ?? 0,
      credit_balance: (data?.credit_balance ?? 0) + (shouldGrantBonus ? 1 : 0),
      subscription_tier: normalizeSubscriptionTier(data?.subscription_tier),
      streak_count: streakCount,
      last_opened_date: readingDate,
      bonus_credit_claimed_date: shouldGrantBonus ? readingDate : data?.bonus_credit_claimed_date ?? null,
      monthly_insight_unlocked: monthlyInsightUnlocked,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  )

  return { streakCount, rewardMessage, monthlyInsightUnlocked }
}

function diffDateDays(fromDate: string, toDate: string): number {
  const [fy, fm, fd] = fromDate.split('-').map(Number)
  const [ty, tm, td] = toDate.split('-').map(Number)
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86400000)
}

async function getUsageState(userId: string): Promise<{ readonly freeChatCount: number }> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_usage_limits')
    .select('free_chat_count')
    .eq('user_id', userId)
    .maybeSingle()

  return { freeChatCount: data?.free_chat_count ?? 0 }
}

async function getChatAccess(userId: string): Promise<TarotChatContext['access']> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_usage_limits')
    .select('free_chat_count, credit_balance, subscription_tier')
    .eq('user_id', userId)
    .maybeSingle()

  const freeChatCount = data?.free_chat_count ?? 0
  const creditBalance = data?.credit_balance ?? 0
  const subscriptionTier = normalizeSubscriptionTier(data?.subscription_tier)

  if (subscriptionTier === 'mystic') {
    return { allowed: true, reason: 'mystic', remaining: Number.POSITIVE_INFINITY }
  }

  if (subscriptionTier === 'plus') {
    return { allowed: true, reason: 'plus', remaining: Number.POSITIVE_INFINITY }
  }

  if (freeChatCount < FREE_TAROT_CHAT_LIMIT) {
    return {
      allowed: true,
      reason: 'free_first_chat',
      remaining: FREE_TAROT_CHAT_LIMIT - freeChatCount,
    }
  }

  if (creditBalance > 0) {
    return { allowed: true, reason: 'credit', remaining: creditBalance }
  }

  return { allowed: false, reason: 'locked', remaining: 0 }
}

async function consumeChatAccess(
  userId: string,
  reason: TarotChatContext['access']['reason'],
): Promise<void> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_usage_limits')
    .select('free_chat_count, credit_balance, subscription_tier')
    .eq('user_id', userId)
    .maybeSingle()

  const nextFreeChatCount =
    reason === 'free_first_chat' ? (data?.free_chat_count ?? 0) + 1 : (data?.free_chat_count ?? 0)
  const nextCreditBalance =
    reason === 'credit' ? Math.max(0, (data?.credit_balance ?? 0) - 1) : (data?.credit_balance ?? 0)

  await supabase.from('tarot_usage_limits').upsert(
    {
      user_id: userId,
      free_chat_count: nextFreeChatCount,
      credit_balance: nextCreditBalance,
      subscription_tier: normalizeSubscriptionTier(data?.subscription_tier),
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  )
}

function mapCardFromFortuneRow(row: {
  readonly id: string
  readonly reading_date: string
  readonly category: string
  readonly card_id: string
  readonly orientation: string
  readonly short_message: string | null
  readonly action_message: string | null
  readonly content_seed: string | null
}): TarotDailyFortuneResult['card'] {
  const card = majorArcana.find(item => item.id === row.card_id) ?? majorArcana[0]
  const orientation: TarotOrientation = row.orientation === 'reversed' ? 'reversed' : 'upright'

  return {
    id: card.id,
    nameKo: card.nameKo,
    nameEn: card.nameEn,
    number: card.number,
    imageUrl: card.imageUrl,
    orientation,
    keywords: card.keywords[orientation],
    fortune: row.short_message ?? card.fortune[orientation],
    action: row.action_message ?? card.action[orientation],
    contentSeed: row.content_seed ?? card.contentSeed[orientation],
  }
}

function mapChatMessageRow(row: {
  readonly id: string
  readonly session_id: string
  readonly user_id: string
  readonly role: string
  readonly content: string
  readonly token_count: number
  readonly created_at: string
}): TarotChatMessage {
  const role = row.role === 'user' || row.role === 'assistant' || row.role === 'system' ? row.role : 'assistant'

  return {
    id: row.id,
    sessionId: row.session_id,
    userId: row.user_id,
    role,
    content: row.content,
    tokenCount: row.token_count,
    createdAt: row.created_at,
  }
}

function buildInitialGuideMessage(cardNameKo: string): string {
  return [
    `오늘 당신이 뽑은 카드는 ${cardNameKo}입니다.`,
    '이 카드는 지금의 흐름을 상징적으로 비춰주는 작은 거울이에요.',
    '무엇이 가장 궁금한가요?',
  ].join('\n')
}

function buildTarotChatAnswer({
  card,
  question,
}: {
  readonly card: TarotDailyFortuneResult['card'] | null
  readonly question: string
}): string {
  if (!card) {
    return [
      '지금 흐름',
      '지금 질문은 오늘의 흐름을 정리하려는 신호처럼 보여요.',
      '',
      '카드가 말하는 핵심',
      `“${question}”라는 질문 안에 이미 중요한 방향감이 담겨 있어요.`,
      '',
      '현실 조언',
      '결론을 정해두기보다, 지금 가장 작게 확인할 수 있는 선택 하나를 먼저 잡아보세요.',
      '',
      '오늘의 작은 행동',
      '질문을 한 문장으로 다시 적고, 오늘 바로 확인할 수 있는 첫 행동 하나를 표시해보세요.',
      '',
      '더 물어볼 수 있는 질문 2개',
      '- 내가 지금 놓치고 있는 감정은 뭐야?',
      '- 이 상황에서 가장 작게 시작할 수 있는 선택은 뭐야?',
    ].join('\n')
  }

  const orientationLabel = card.orientation === 'upright' ? '정방향' : '역방향'
  const keywordText = card.keywords.slice(0, 3).join(', ')

  return [
    '지금 흐름',
    `${card.nameKo} ${orientationLabel}은 지금 "${keywordText}"의 흐름을 비춰줘요.`,
    '',
    '카드가 말하는 핵심',
    `질문을 기준으로 보면, ${card.fortune}`,
    '',
    '현실 조언',
    '이 리딩은 정답을 대신 정해주는 신호가 아니라, 지금 선택지를 더 선명하게 보는 거울에 가까워요.',
    '',
    '오늘의 작은 행동',
    card.action,
    '',
    '더 물어볼 수 있는 질문 2개',
    '- 이 흐름에서 내가 먼저 정리해야 할 감정은 뭐야?',
    '- 지금 선택지 중 가장 부담이 작은 다음 행동은 뭐야?',
  ].join('\n')
}

function estimateTokenCount(content: string): number {
  return Math.max(1, Math.ceil(content.length / 3))
}

async function recordFortuneOpenedEvent(
  userId: string,
  fortuneId: string,
  isNew: boolean,
): Promise<void> {
  const supabase = await createClient()
  await supabase.from('tarot_reading_analytics').insert({
    user_id: userId,
    event_name: 'fortune_opened',
    event_payload: { daily_fortune_id: fortuneId, is_new: isNew },
  })
}

function normalizeCategory(category: string): TarotCategory {
  if (
    category === 'daily' ||
    category === 'love' ||
    category === 'career' ||
    category === 'advice' ||
    category === 'creative'
  ) {
    return category
  }

  return 'daily'
}

function normalizeSubscriptionTier(tier: string | null | undefined): SubscriptionTier {
  if (tier === 'plus' || tier === 'mystic') {
    return tier
  }

  return 'free'
}
