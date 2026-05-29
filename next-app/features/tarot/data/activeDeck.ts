import { majorArcana } from '@/features/tarot/data/majorArcana'
import { minorArcana } from '@/features/tarot/data/minorArcana'
import type { TarotActiveDeck, TarotCard, TarotDeckMode } from '@/features/tarot/types/tarot.types'

export const DEFAULT_TAROT_DECK_MODE: TarotDeckMode = 'majorOnly'

export function getActiveDeck(mode: TarotDeckMode = DEFAULT_TAROT_DECK_MODE): TarotActiveDeck {
  const cards: readonly TarotCard[] =
    mode === 'fullDeck' ? [...majorArcana, ...minorArcana] : majorArcana

  return { mode, cards }
}
