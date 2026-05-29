'use client'

import { useState, useTransition } from 'react'
import type { TarotChatContext } from '@/app/(app)/tarot/actions'
import { TarotChatEntry } from '@/features/tarot/components/TarotChatEntry'
import { TarotPaywall } from '@/features/tarot/components/TarotPaywall'
import type { TarotChatMessage } from '@/features/tarot/types/tarot.types'

interface TarotChatPanelProps {
  readonly initialChat: TarotChatContext
}

const quickQuestions = [
  '오늘 조심할 점',
  '지금 하는 일의 흐름',
  '인간관계/연애 흐름',
  '지금 나에게 필요한 조언',
  '직접 질문하기',
] as const

type TarotChatApiResponse =
  | {
      readonly ok: true
      readonly message: string
      readonly accessLevel: 'free_first_chat' | 'credit' | 'plus' | 'mystic'
      readonly remainingFreeQuestions: number
      readonly remainingCredits: number
    }
  | {
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

export function TarotChatPanel({ initialChat }: TarotChatPanelProps) {
  const [messages, setMessages] = useState<readonly TarotChatMessage[]>(initialChat.messages)
  const [access, setAccess] = useState(initialChat.access)
  const [question, setQuestion] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [paywallDismissed, setPaywallDismissed] = useState(false)
  const [isPending, startTransition] = useTransition()

  function submitQuestion(nextQuestion: string) {
    const trimmed = nextQuestion.trim()
    if (!trimmed || isPending) {
      return
    }

    setError(null)
    setPaywallDismissed(false)

    if (!access.allowed) {
      return
    }

    startTransition(async () => {
      const response = await fetch('/api/tarot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: initialChat.sessionId,
          userQuestion: trimmed,
        }),
      })
      const result = (await response.json()) as TarotChatApiResponse

      if (result.ok) {
        setMessages(currentMessages => [
          ...currentMessages,
          {
            role: 'user',
            content: trimmed,
          },
          {
            role: 'assistant',
            content: result.message,
          },
        ])
        setAccess({
          allowed: result.remainingFreeQuestions > 0 || result.remainingCredits > 0 || result.accessLevel === 'plus' || result.accessLevel === 'mystic',
          reason: result.remainingFreeQuestions > 0 ? 'free_first_chat' : result.accessLevel,
          remaining:
            result.accessLevel === 'plus' || result.accessLevel === 'mystic'
              ? Number.POSITIVE_INFINITY
              : Math.max(result.remainingFreeQuestions, result.remainingCredits),
        })
        setQuestion('')
        return
      }

      if (result.reason === 'PAYWALL_REQUIRED') {
        setAccess({
          allowed: false,
          reason: 'locked',
          remaining: 0,
        })
        setError(null)
        return
      }

      if (result.reason === 'AUTH_REQUIRED') {
        setError('로그인이 필요해요.')
        return
      }

      setError(result.message)
    })
  }

  return (
    <section className="mx-auto grid min-h-[calc(100dvh-96px)] w-full max-w-3xl grid-rows-[auto_1fr_auto] gap-4 p-5">
      <header className="rounded-3xl border border-violet-200/15 bg-[linear-gradient(135deg,rgba(91,33,182,0.32),rgba(190,24,93,0.18))] p-5 shadow-2xl shadow-violet-950/30">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-100/50">
          Tarot · 1:1 Reading
        </p>
        <h1 className="mt-2 text-2xl font-black text-white">{initialChat.title ?? '타로 채팅'}</h1>
        {initialChat.card ? (
          <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-white">{initialChat.card.nameKo}</p>
                <p className="mt-1 text-xs text-white/40">{initialChat.card.nameEn}</p>
              </div>
              <span className="rounded-full border border-fuchsia-200/20 px-3 py-1 text-xs font-bold text-fuchsia-100/80">
                {initialChat.card.orientation === 'upright' ? '정방향' : '역방향'}
              </span>
            </div>
            <p className="text-sm leading-6 text-white/60">{initialChat.card.fortune}</p>
          </div>
        ) : null}
      </header>

      <div className="min-h-0 overflow-y-auto rounded-3xl border border-white/10 bg-[#08050f] p-4">
        <div className="grid gap-3">
          {messages.map((message, index) => (
            <TarotChatEntry key={message.id ?? `${message.role}-${index}`} message={message} />
          ))}
          {isPending ? (
            <div className="text-sm text-white/35">카드의 흐름을 정리하는 중...</div>
          ) : null}
        </div>
      </div>

      <footer className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map(item => (
            <button
              key={item}
              type="button"
              onClick={() => {
                if (item === '직접 질문하기') {
                  setQuestion('')
                  return
                }
                submitQuestion(item)
              }}
              disabled={isPending || !access.allowed}
              className="rounded-full border border-violet-200/20 bg-violet-200/[0.06] px-3 py-2 text-xs font-bold text-violet-50/75 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {item}
            </button>
          ))}
        </div>

        {!access.allowed && !paywallDismissed ? (
          <TarotPaywall
            accessReason="free_chat_used"
            cardName={initialChat.card?.nameKo}
            category={initialChat.category}
            onDismiss={() => setPaywallDismissed(true)}
          />
        ) : null}

        {error ? (
          <p className="rounded-2xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-100">
            {error}
          </p>
        ) : null}

        <form
          className="flex gap-2"
          onSubmit={event => {
            event.preventDefault()
            submitQuestion(question)
          }}
        >
          <input
            value={question}
            onChange={event => setQuestion(event.target.value)}
            disabled={isPending || !access.allowed}
            placeholder={access.allowed ? '궁금한 점을 입력해줘' : '무료 질문을 모두 사용했어요'}
            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-fuchsia-200/40 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending || !question.trim() || !access.allowed}
            className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            전송
          </button>
        </form>
      </footer>
    </section>
  )
}
