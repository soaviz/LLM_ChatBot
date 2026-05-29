import { getActiveDeck } from '@/features/tarot/data/activeDeck'
import { getTodayKST } from '@/features/tarot/lib/getTodayKST'
import type {
  TarotCard,
  TarotCategory,
  TarotDeckMode,
  TarotOrientation,
} from '@/features/tarot/types/tarot.types'

interface DrawDailyCardInput {
  readonly mode?: TarotDeckMode
  readonly category?: TarotCategory
  readonly now?: Date
  readonly userSeed?: string
}

interface DrawDailyCardResult {
  readonly date: string
  readonly card: TarotCard
  readonly orientation: TarotOrientation
  readonly category: TarotCategory
}

export function drawDailyCard({
  mode = 'majorOnly',
  category = 'daily',
  now = new Date(),
  userSeed = 'guest',
}: DrawDailyCardInput = {}): DrawDailyCardResult {
  const date = getTodayKST(now)
  const deck = getActiveDeck(mode)

  if (deck.cards.length === 0) {
    throw new Error('Tarot deck is empty.')
  }

  const hash = hashSeed(`${date}:${userSeed}:${mode}:${category}`)
  const card = deck.cards[hash % deck.cards.length]
  const orientation: TarotOrientation = hash % 7 === 0 ? 'reversed' : 'upright'

  return { date, card, orientation, category }
}

function hashSeed(value: string): number {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}
