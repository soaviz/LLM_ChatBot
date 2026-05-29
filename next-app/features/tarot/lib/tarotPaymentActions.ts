import type { TarotCategory } from '@/features/tarot/types/tarot.types'

export type TarotPaymentProduct = 'credit_question' | 'plus' | 'mystic'

export interface TarotPaymentActionInput {
  readonly product: TarotPaymentProduct
  readonly cardName?: string
  readonly category: TarotCategory
}

const productLabels: Record<TarotPaymentProduct, string> = {
  credit_question: 'Credit 1회 질문',
  plus: 'VenuX Plus',
  mystic: 'VenuX Mystic',
}

export function startTarotPaymentAction(input: TarotPaymentActionInput): void {
  const detail = {
    product: input.product,
    productLabel: productLabels[input.product],
    cardName: input.cardName ?? null,
    category: input.category,
  }

  window.dispatchEvent(new CustomEvent('venux:tarot-payment-requested', { detail }))
  console.info('[Tarot payment mock]', detail)
}
