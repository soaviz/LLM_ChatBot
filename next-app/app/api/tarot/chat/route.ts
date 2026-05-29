import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { majorArcana } from '@/features/tarot/data/majorArcana'
import {
  buildTarotChatPrompts,
  type TarotPromptRecentMessage,
} from '@/features/tarot/lib/tarotPromptBuilder'
import type {
  SubscriptionTier,
  TarotCategory,
  TarotDailyFortuneResult,
  TarotOrientation,
} from '@/features/tarot/types/tarot.types'

const FREE_TAROT_CHAT_LIMIT = 1
const TAROT_AI_TIMEOUT_MS = 20000
const TAROT_MODEL = process.env.OPENAI_TAROT_MODEL ?? 'gpt-4.1-mini'

type TarotChatAccessLevel = 'free_first_chat' | 'credit' | 'plus' | 'mystic' | 'locked'

type TarotChatApiRequest = {
  readonly session_id?: unknown
  readonly userQuestion?: unknown
}

type TarotChatApiSuccess = {
  readonly ok: true
  readonly message: string
  readonly accessLevel: Exclude<TarotChatAccessLevel, 'locked'>
  readonly remainingFreeQuestions: number
  readonly remainingCredits: number
}

type TarotChatApiBlocked = {
  readonly ok: false
  readonly reason:
    | 'AUTH_REQUIRED'
    | 'SESSION_NOT_FOUND'
    | 'INVALID_REQUEST'
    | 'PAYWALL_REQUIRED'
    | 'AI_UNAVAILABLE'
    | 'SERVER_ERROR'
  readonly message: string
}

type TarotUsageState = {
  readonly accessLevel: TarotChatAccessLevel
  readonly freeChatCount: number
  readonly creditBalance: number
  readonly subscriptionTier: SubscriptionTier
}

export async function POST(request: Request): Promise<NextResponse<TarotChatApiSuccess | TarotChatApiBlocked>> {
  const body = (await request.json().catch(() => null)) as TarotChatApiRequest | null
  const sessionId = typeof body?.session_id === 'string' ? body.session_id.trim() : ''
  const userQuestion = typeof body?.userQuestion === 'string' ? body.userQuestion.trim() : ''

  if (!sessionId || !userQuestion) {
    return blocked('INVALID_REQUEST', '질문을 다시 입력해줘.', 400)
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return blocked('AUTH_REQUIRED', '로그인이 필요해요.', 401)
  }

  const { data: session, error: sessionError } = await supabase
    .from('tarot_chat_sessions')
    .select('*')
    .eq('id', sessionId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (sessionError) {
    return blocked('SERVER_ERROR', sessionError.message, 500)
  }

  if (!session) {
    return blocked('SESSION_NOT_FOUND', '채팅 세션을 찾을 수 없어요.', 404)
  }

  const duplicate = await findRecentDuplicateAnswer(session.id, user.id, userQuestion)
  if (duplicate) {
    const usage = await getUsageState(user.id)
    return NextResponse.json({
      ok: true,
      message: duplicate,
      accessLevel: usage.accessLevel === 'locked' ? 'free_first_chat' : usage.accessLevel,
      remainingFreeQuestions: getRemainingFreeQuestions(usage.freeChatCount),
      remainingCredits: usage.creditBalance,
    })
  }

  const usage = await getUsageState(user.id)
  if (usage.accessLevel === 'locked') {
    return blocked('PAYWALL_REQUIRED', '더 깊은 리딩은 프리미엄에서 계속할 수 있어요.', 402)
  }

  const { data: fortune, error: fortuneError } = session.daily_fortune_id
    ? await supabase
        .from('tarot_daily_fortunes')
        .select('*')
        .eq('id', session.daily_fortune_id)
        .eq('user_id', user.id)
        .maybeSingle()
    : { data: null, error: null }

  if (fortuneError) {
    return blocked('SERVER_ERROR', fortuneError.message, 500)
  }

  if (!fortune) {
    return blocked('SESSION_NOT_FOUND', '오늘의 카드 정보를 찾을 수 없어요.', 404)
  }

  const card = mapCardFromFortuneRow(fortune)
  const recentMessages = await loadRecentMessages(session.id, user.id)
  if (recentMessages.status === 'error') {
    return blocked('SERVER_ERROR', recentMessages.message, 500)
  }

  const promptBundle = buildTarotChatPrompts({
    category: normalizeCategory(session.category),
    cardNameKo: card.nameKo,
    cardNameEn: card.nameEn,
    orientation: card.orientation,
    keywords: card.keywords,
    fortune: card.fortune,
    action: card.action,
    contentSeed: card.contentSeed,
    userQuestion,
    recentMessages: recentMessages.messages,
  })

  const aiResult = await callTarotModel(promptBundle.messages)
  if (aiResult.status === 'error') {
    await recordAnalytics(user.id, 'tarot_chat_message_failed', {
      session_id: session.id,
      daily_fortune_id: session.daily_fortune_id,
      reason: aiResult.message,
    })
    return blocked('AI_UNAVAILABLE', aiResult.message, 503)
  }

  const { error: userMessageError } = await supabase.from('tarot_chat_messages').insert({
    session_id: session.id,
    user_id: user.id,
    role: 'user',
    content: userQuestion,
    token_count: estimateTokenCount(userQuestion),
  })

  if (userMessageError) {
    return blocked('SERVER_ERROR', userMessageError.message, 500)
  }

  const { error: assistantMessageError } = await supabase.from('tarot_chat_messages').insert({
    session_id: session.id,
    user_id: user.id,
    role: 'assistant',
    content: aiResult.message,
    token_count: estimateTokenCount(aiResult.message),
  })

  if (assistantMessageError) {
    return blocked('SERVER_ERROR', assistantMessageError.message, 500)
  }

  const updatedUsage = await consumeUsage(user.id, usage)

  await supabase
    .from('tarot_chat_sessions')
    .update({
      initial_question: session.initial_question ?? userQuestion,
      updated_at: new Date().toISOString(),
    })
    .eq('id', session.id)
    .eq('user_id', user.id)

  await recordAnalytics(user.id, 'tarot_chat_message_sent', {
    session_id: session.id,
    daily_fortune_id: session.daily_fortune_id,
    access_level: usage.accessLevel,
    model: TAROT_MODEL,
    prompt_user_length: promptBundle.userPrompt.length,
    response_length: aiResult.message.length,
  })

  return NextResponse.json({
    ok: true,
    message: aiResult.message,
    accessLevel: usage.accessLevel,
    remainingFreeQuestions: getRemainingFreeQuestions(updatedUsage.freeChatCount),
    remainingCredits: updatedUsage.creditBalance,
  })
}

function blocked(
  reason: TarotChatApiBlocked['reason'],
  message: string,
  status: number,
): NextResponse<TarotChatApiBlocked> {
  return NextResponse.json({ ok: false, reason, message }, { status })
}

async function getUsageState(userId: string): Promise<TarotUsageState> {
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
    return { accessLevel: 'mystic', freeChatCount, creditBalance, subscriptionTier }
  }

  if (subscriptionTier === 'plus') {
    return { accessLevel: 'plus', freeChatCount, creditBalance, subscriptionTier }
  }

  if (freeChatCount < FREE_TAROT_CHAT_LIMIT) {
    return { accessLevel: 'free_first_chat', freeChatCount, creditBalance, subscriptionTier }
  }

  if (creditBalance > 0) {
    return { accessLevel: 'credit', freeChatCount, creditBalance, subscriptionTier }
  }

  return { accessLevel: 'locked', freeChatCount, creditBalance, subscriptionTier }
}

async function consumeUsage(userId: string, usage: TarotUsageState): Promise<TarotUsageState> {
  const supabase = await createClient()
  const freeChatCount =
    usage.accessLevel === 'free_first_chat' ? usage.freeChatCount + 1 : usage.freeChatCount
  const creditBalance =
    usage.accessLevel === 'credit' ? Math.max(0, usage.creditBalance - 1) : usage.creditBalance

  await supabase.from('tarot_usage_limits').upsert(
    {
      user_id: userId,
      free_chat_count: freeChatCount,
      credit_balance: creditBalance,
      subscription_tier: usage.subscriptionTier,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  )

  return {
    ...usage,
    freeChatCount,
    creditBalance,
  }
}

async function loadRecentMessages(
  sessionId: string,
  userId: string,
): Promise<
  | { readonly status: 'ok'; readonly messages: readonly TarotPromptRecentMessage[] }
  | { readonly status: 'error'; readonly message: string }
> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('tarot_chat_messages')
    .select('role, content, created_at')
    .eq('session_id', sessionId)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(8)

  if (error) {
    return { status: 'error', message: error.message }
  }

  return {
    status: 'ok',
    messages: (data ?? [])
      .slice()
      .reverse()
      .flatMap<TarotPromptRecentMessage>(message => {
        if (message.role !== 'user' && message.role !== 'assistant') {
          return []
        }

        return [{ role: message.role, content: message.content }]
      }),
  }
}

async function findRecentDuplicateAnswer(
  sessionId: string,
  userId: string,
  userQuestion: string,
): Promise<string | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tarot_chat_messages')
    .select('role, content, created_at')
    .eq('session_id', sessionId)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(2)

  const [latest, previous] = data ?? []
  if (
    latest?.role === 'assistant' &&
    previous?.role === 'user' &&
    previous.content.trim() === userQuestion
  ) {
    const latestTime = new Date(latest.created_at).getTime()
    if (Date.now() - latestTime < 15000) {
      return latest.content
    }
  }

  return null
}

async function callTarotModel(
  messages: readonly { readonly role: string; readonly content: string }[],
): Promise<{ readonly status: 'ok'; readonly message: string } | { readonly status: 'error'; readonly message: string }> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return {
      status: 'error',
      message: 'AI API 키가 서버에 설정되지 않았어요.',
    }
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TAROT_AI_TIMEOUT_MS)

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: TAROT_MODEL,
        input: messages,
        temperature: 0.8,
        max_output_tokens: 650,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      return {
        status: 'error',
        message: 'AI 응답을 가져오지 못했어요. 잠시 후 다시 시도해줘.',
      }
    }

    const payload = (await response.json()) as {
      readonly output_text?: string
      readonly output?: readonly {
        readonly content?: readonly {
          readonly text?: string
        }[]
      }[]
    }
    const outputText =
      payload.output_text ??
      payload.output
        ?.flatMap(item => item.content ?? [])
        .map(content => content.text ?? '')
        .join('')
        .trim()

    if (!outputText) {
      return {
        status: 'error',
        message: 'AI 응답이 비어 있어요. 다시 질문해줘.',
      }
    }

    return { status: 'ok', message: outputText }
  } catch {
    return {
      status: 'error',
      message: 'AI 응답 시간이 길어졌어요. 잠시 후 다시 시도해줘.',
    }
  } finally {
    clearTimeout(timeoutId)
  }
}

async function recordAnalytics(
  userId: string,
  eventName: string,
  eventPayload: Record<string, string | number | boolean | null>,
): Promise<void> {
  const supabase = await createClient()
  await supabase.from('tarot_reading_analytics').insert({
    user_id: userId,
    event_name: eventName,
    event_payload: eventPayload,
  })
}

function mapCardFromFortuneRow(row: {
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

function getRemainingFreeQuestions(freeChatCount: number): number {
  return Math.max(0, FREE_TAROT_CHAT_LIMIT - freeChatCount)
}

function estimateTokenCount(content: string): number {
  return Math.max(1, Math.ceil(content.length / 3))
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
