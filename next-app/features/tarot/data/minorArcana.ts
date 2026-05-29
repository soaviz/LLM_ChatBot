import { cupsMinor } from '@/features/tarot/data/minor/cups'
import { pentaclesMinor } from '@/features/tarot/data/minor/pentacles'
import { swordsMinor } from '@/features/tarot/data/minor/swords'
import { wandsMinor } from '@/features/tarot/data/minor/wands'
import type { TarotCard } from '@/features/tarot/types/tarot.types'

/** Minor Arcana 56장 — 완드·컵·소드·펜타클 각 14장 */
export const minorArcana = [
  ...wandsMinor,
  ...cupsMinor,
  ...swordsMinor,
  ...pentaclesMinor,
] as const satisfies readonly TarotCard[]
