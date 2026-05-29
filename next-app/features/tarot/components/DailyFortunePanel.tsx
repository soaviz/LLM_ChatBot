'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { createTarotChatSession, openDailyFortune } from '@/app/(app)/tarot/actions'
import { majorArcana } from '@/features/tarot/data/majorArcana'
import { buildTarotContentKit, type TarotContentKit } from '@/features/tarot/lib/tarotContentKit'
import { getTodayKST } from '@/features/tarot/lib/getTodayKST'
import type {
  TarotCategory,
  TarotDailyFortuneResult,
  TarotOrientation,
} from '@/features/tarot/types/tarot.types'
import { TarotCardFlip } from '@/features/tarot/components/TarotCardFlip'
import { TarotResultCard } from '@/features/tarot/components/TarotResultCard'

interface DailyFortunePanelProps {
  readonly category?: TarotCategory
}

const LOCAL_STORAGE_KEY = 'venux_tarot_daily_fortune'

export function DailyFortunePanel({ category = 'daily' }: DailyFortunePanelProps) {
  const router = useRouter()
  const [fortune, setFortune] = useState<TarotDailyFortuneResult | null>(null)
  const [isLocal, setIsLocal] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [contentKit, setContentKit] = useState<TarotContentKit | null>(null)
  const [isPending, startTransition] = useTransition()
  const [isCreatingChat, startCreatingChat] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const result = await openDailyFortune(category)

      if (result.status === 'ok') {
        setFortune(result.fortune)
        setIsLocal(false)
        return
      }

      if (result.status === 'unauthenticated') {
        setFortune(getOrCreateLocalFortune(category))
        setIsLocal(true)
        return
      }

      setError(result.message)
    })
  }, [category])

  function handleAskAboutCard() {
    if (isLocal) {
      router.push('/login')
      return
    }

    if (!fortune) {
      return
    }

    startCreatingChat(async () => {
      const result = await createTarotChatSession(fortune.id)

      if (result.status === 'ok') {
        router.push(`/tarot/chat?session_id=${result.sessionId}`)
        return
      }

      if (result.status === 'unauthenticated') {
        router.push('/login')
        return
      }

      setError(result.message)
    })
  }

  return (
    <section className="tarot-daily-panel relative isolate mx-auto min-h-[calc(100dvh-96px)] w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.3),transparent_32%),linear-gradient(180deg,#0b0613,#12071f_48%,#07050d)] px-5 py-7 shadow-2xl">
      <style jsx>{`
        @keyframes tarotFadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.tarot-result-card *) {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-8 top-16 h-1 w-1 rounded-full bg-white/70 shadow-[54px_32px_0_rgba(244,114,182,0.45),180px_76px_0_rgba(196,181,253,0.45),262px_22px_0_rgba(255,255,255,0.35),110px_236px_0_rgba(244,114,182,0.28),236px_360px_0_rgba(255,255,255,0.25)]" />
      </div>

      <div className="mb-7 text-center">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-fuchsia-100/45">
          Daily Fortune Cookie Tarot
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white">오늘의 타로</h1>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/45">
          하루 한 장. 오늘의 감정과 선택을 정리하는 작은 신호.
        </p>
      </div>

      {isPending && !fortune ? (
        <div className="grid min-h-80 place-items-center text-sm text-white/45">카드를 준비하고 있어요...</div>
      ) : null}

      {error ? (
        <div className="rounded-2xl border border-red-300/20 bg-red-300/10 p-4 text-sm text-red-100">
          {error}
        </div>
      ) : null}

      {fortune ? (
        <div className="grid gap-6">
          <TarotCardFlip fortune={fortune} revealed={revealed} onReveal={() => setRevealed(true)} />
          <TarotResultCard fortune={fortune} revealed={revealed} />

          {revealed ? (
            <div className="grid animate-[tarotFadeUp_420ms_420ms_ease_both] gap-2">
              <div className="rounded-2xl border border-violet-200/15 bg-violet-200/[0.06] p-4 text-left">
                <p className="text-sm font-black text-white">
                  {fortune.isNew ? '오늘의 포춘쿠키 열림' : '오늘의 카드는 이미 열렸어요'}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/45">
                  내일 다시 새로운 카드가 도착해요 · 연속 리딩 {fortune.streakCount ?? 1}일
                </p>
                {fortune.rewardMessage ? (
                  <p className="mt-2 text-xs font-bold leading-5 text-fuchsia-100/80">
                    {fortune.rewardMessage}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={handleAskAboutCard}
                disabled={isCreatingChat}
                className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-black text-white shadow-[0_0_28px_rgba(217,70,239,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isCreatingChat ? '채팅을 여는 중...' : '이 카드에 대해 더 물어보기'}
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/70">
                오늘의 리딩 저장
              </button>
              <button
                type="button"
                onClick={() => setContentKit(buildTarotContentKit(fortune.card))}
                className="rounded-2xl border border-fuchsia-200/20 bg-fuchsia-200/[0.06] px-4 py-3 text-sm font-bold text-fuchsia-50/80"
              >
                이 감정으로 콘텐츠 만들기
              </button>
              {contentKit ? (
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-left">
                  <p className="text-sm font-black text-white">오늘의 감정 콘텐츠 시드</p>
                  <div className="mt-3 grid gap-3 text-xs leading-5 text-white/60">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-100/45">Shortform</p>
                      <ol className="mt-1 list-decimal space-y-1 pl-4">
                        {contentKit.shortformIdeas.map(idea => (
                          <li key={idea}>{idea}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-100/45">Image Prompt</p>
                      <p className="mt-1">{contentKit.imagePrompt}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-100/45">Video Prompt</p>
                      <p className="mt-1">{contentKit.videoPrompt}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-100/45">Threads / X</p>
                      <p className="mt-1">{contentKit.socialPost}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia-100/45">Moodboard</p>
                      <p className="mt-1">{contentKit.moodboardKeywords.join(' · ')}</p>
                    </div>
                  </div>
                </div>
              ) : null}
              {isLocal ? (
                <p className="pt-1 text-center text-xs leading-5 text-white/35">
                  비로그인 임시 리딩입니다. 채팅 진입 시 로그인이 필요해요.
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}

function getOrCreateLocalFortune(category: TarotCategory): TarotDailyFortuneResult {
  const readingDate = getTodayKST()
  const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY)

  if (raw) {
    try {
      const parsed = JSON.parse(raw) as TarotDailyFortuneResult
      if (parsed.readingDate === readingDate) {
        return parsed
      }
    } catch {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }

  const card = majorArcana[Math.floor(Math.random() * majorArcana.length)]
  const orientation: TarotOrientation = Math.random() > 0.5 ? 'upright' : 'reversed'
  const fortune: TarotDailyFortuneResult = {
    id: `local-${readingDate}`,
    readingDate,
    category,
    card: {
      id: card.id,
      nameKo: card.nameKo,
      nameEn: card.nameEn,
      number: card.number,
      imageUrl: card.imageUrl,
      orientation,
      keywords: card.keywords[orientation],
      fortune: card.fortune[orientation],
      action: card.action[orientation],
      contentSeed: card.contentSeed[orientation],
    },
    isNew: true,
    canAskFreeQuestion: false,
  }

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fortune))
  return fortune
}
