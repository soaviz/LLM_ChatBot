import type {
  TarotCard,
  TarotCategory,
  TarotOrientation,
  TarotReading,
} from '@/features/tarot/types/tarot.types'

interface BuildTarotReadingInput {
  readonly card: TarotCard
  readonly category: TarotCategory
  readonly orientation: TarotOrientation
  readonly date: string
}

export function buildTarotReading({
  card,
  category,
  orientation,
  date,
}: BuildTarotReadingInput): TarotReading {
  const meaningCategory = category === 'creative' ? 'advice' : category
  const meaningMessage = card.meanings[meaningCategory][orientation]

  return {
    card,
    category,
    position: 'single',
    orientation,
    date,
    message: meaningMessage,
    fortune: card.fortune[orientation],
    action: card.action[orientation],
    contentSeed: card.contentSeed[orientation],
  }
}
