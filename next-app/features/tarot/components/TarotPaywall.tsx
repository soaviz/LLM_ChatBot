'use client'

import { startTarotPaymentAction, type TarotPaymentProduct } from '@/features/tarot/lib/tarotPaymentActions'
import type { TarotCategory } from '@/features/tarot/types/tarot.types'

export type TarotPaywallAccessReason =
  | 'free_chat_used'
  | 'daily_reading_used'
  | 'deep_reading'
  | 'monthly_report'
  | 'locked'

interface TarotPaywallProps {
  readonly accessReason: TarotPaywallAccessReason
  readonly cardName?: string
  readonly category: TarotCategory
  readonly onDismiss?: () => void
}

const categoryLabels: Record<TarotCategory, string> = {
  daily: '오늘의 운세',
  love: '연애/관계',
  career: '일/커리어',
  advice: '조언',
  creative: '창작',
}

const reasonLabels: Record<TarotPaywallAccessReason, string> = {
  free_chat_used: '첫 무료 질문을 사용했어요',
  daily_reading_used: '오늘의 무료 리딩을 이미 열었어요',
  deep_reading: '심화 해석은 1:1 리딩에서 이어갈 수 있어요',
  monthly_report: '월간 리포트는 프리미엄 리딩에서 열려요',
  locked: '더 깊은 리딩이 잠겨 있어요',
}

const products: readonly {
  readonly id: TarotPaymentProduct
  readonly title: string
  readonly description: string
}[] = [
  {
    id: 'credit_question',
    title: 'Credit 1회 질문',
    description: '지금 뽑은 카드에 대해 한 번 더 구체적으로 물어보기',
  },
  {
    id: 'plus',
    title: 'VenuX Plus',
    description: '1:1 리딩과 추가 질문을 더 여유롭게 이어가기',
  },
  {
    id: 'mystic',
    title: 'VenuX Mystic',
    description: '심화 해석, 월간 흐름, 창작 시드까지 확장하기',
  },
]

export function TarotPaywall({ accessReason, cardName, category, onDismiss }: TarotPaywallProps) {
  function handlePayment(product: TarotPaymentProduct) {
    startTarotPaymentAction({
      product,
      cardName,
      category,
    })
  }

  return (
    <aside className="tarot-paywall overflow-hidden rounded-[28px] border border-violet-200/20 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.18),transparent_36%),linear-gradient(180deg,rgba(31,16,54,0.96),rgba(10,6,18,0.98))] p-5 shadow-2xl shadow-violet-950/30">
      <div className="mb-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-100/45">
          VenuX Tarot Gate
        </p>
        <h2 className="mt-2 text-xl font-black leading-tight text-white">
          오늘의 신호를 더 깊게 읽어볼까요?
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/58">
          무료 포춘쿠키는 오늘의 문을 열어줍니다.
          <br />
          1:1 리딩에서는 지금 당신의 질문에 맞춰 카드의 의미를 더 구체적으로 풀어드려요.
        </p>
      </div>

      <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-violet-100/45">{reasonLabels[accessReason]}</p>
            <p className="mt-1 truncate text-sm font-black text-white">
              {cardName ? `${cardName}의 흐름` : '오늘의 카드 흐름'}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-fuchsia-200/20 px-3 py-1 text-[11px] font-bold text-fuchsia-100/75">
            {categoryLabels[category]}
          </span>
        </div>
      </div>

      <div className="grid gap-2">
        <button
          type="button"
          onClick={() => handlePayment('plus')}
          className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(217,70,239,0.28)]"
        >
          1:1 리딩 계속하기
        </button>
        <button
          type="button"
          onClick={() => handlePayment('credit_question')}
          className="rounded-2xl border border-violet-200/20 bg-violet-200/[0.07] px-4 py-3 text-sm font-bold text-violet-50/85"
        >
          크레딧으로 질문하기
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-white/45"
        >
          나중에 볼게요
        </button>
      </div>

      <div className="mt-5 grid gap-2">
        {products.map(product => (
          <button
            key={product.id}
            type="button"
            onClick={() => handlePayment(product.id)}
            className="rounded-2xl border border-white/10 bg-black/20 p-3 text-left transition hover:border-violet-200/25 hover:bg-violet-200/[0.06]"
          >
            <p className="text-sm font-black text-white">{product.title}</p>
            <p className="mt-1 text-xs leading-5 text-white/45">{product.description}</p>
          </button>
        ))}
      </div>
    </aside>
  )
}
