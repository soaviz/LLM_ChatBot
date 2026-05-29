import type { TarotCard, TarotSuit } from '@/features/tarot/types/tarot.types'

type MinorCardInput = Omit<TarotCard, 'arcana' | 'imageUrl' | 'suit'> & {
  readonly suit: TarotSuit
}

export function minorCard(input: MinorCardInput): TarotCard {
  return {
    ...input,
    arcana: 'minor',
    imageUrl: '',
  }
}
