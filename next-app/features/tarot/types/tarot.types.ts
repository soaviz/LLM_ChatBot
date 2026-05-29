export type TarotArcana = 'major' | 'minor'

export type TarotSuit = 'wands' | 'cups' | 'swords' | 'pentacles'

export type TarotOrientation = 'upright' | 'reversed'

export type TarotCategory = 'daily' | 'love' | 'career' | 'advice' | 'creative'

export type TarotReadingPosition = 'single' | 'past' | 'present' | 'future' | 'situation' | 'challenge' | 'guidance'

export type TarotAccessLevel = 'free_daily' | 'free_first_chat' | 'locked' | 'credit' | 'plus' | 'mystic'

export type SubscriptionTier = 'free' | 'plus' | 'mystic'

export type TarotDeckMode = 'majorOnly' | 'fullDeck'

export type TarotChatRole = 'user' | 'assistant' | 'system'

export interface TarotOrientationText {
  readonly upright: string
  readonly reversed: string
}

export interface TarotOrientationList {
  readonly upright: readonly string[]
  readonly reversed: readonly string[]
}

export type TarotMeaningByCategory = Record<Exclude<TarotCategory, 'creative'>, TarotOrientationText>

export interface TarotCard {
  readonly id: string
  readonly nameKo: string
  readonly nameEn: string
  readonly number: number | string
  readonly arcana: TarotArcana
  readonly suit?: TarotSuit
  readonly imageUrl?: string
  readonly keywords: TarotOrientationList
  readonly meanings: TarotMeaningByCategory
  readonly fortune: TarotOrientationText
  readonly action: TarotOrientationText
  readonly contentSeed: TarotOrientationText
}

export interface TarotActiveDeck {
  readonly mode: TarotDeckMode
  readonly cards: readonly TarotCard[]
}

export interface DailyFortune {
  readonly id?: string
  readonly userId: string
  readonly readingDate: string
  readonly category: TarotCategory
  readonly cardId: string
  readonly orientation: TarotOrientation
  readonly shortMessage: string
  readonly actionMessage: string
  readonly contentSeed: string
  readonly createdAt?: string
}

export interface TarotChatSession {
  readonly id: string
  readonly userId: string
  readonly dailyFortuneId?: string
  readonly category: TarotCategory
  readonly title?: string
  readonly initialQuestion?: string
  readonly accessLevel: TarotAccessLevel
  readonly subscriptionTier: SubscriptionTier
  readonly isPremium: boolean
  readonly createdAt: string
  readonly updatedAt: string
}

export interface TarotChatMessage {
  readonly id?: string
  readonly sessionId?: string
  readonly userId?: string
  readonly role: TarotChatRole
  readonly content: string
  readonly tokenCount?: number
  readonly createdAt?: string
}

export interface TarotReading {
  readonly card: TarotCard
  readonly category: TarotCategory
  readonly position: TarotReadingPosition
  readonly orientation: TarotOrientation
  readonly message: string
  readonly fortune: string
  readonly action: string
  readonly contentSeed: string
  readonly date: string
}

export interface TarotDailyFortuneResult {
  readonly id: string
  readonly readingDate: string
  readonly category: TarotCategory
  readonly card: {
    readonly id: string
    readonly nameKo: string
    readonly nameEn: string
    readonly number: number | string
    readonly imageUrl?: string
    readonly orientation: TarotOrientation
    readonly keywords: readonly string[]
    readonly fortune: string
    readonly action: string
    readonly contentSeed: string
  }
  readonly isNew: boolean
  readonly canAskFreeQuestion: boolean
  readonly streakCount?: number
  readonly rewardMessage?: string
  readonly monthlyInsightUnlocked?: boolean
}

export interface TarotAccessInput {
  readonly freeMessagesUsed: number
  readonly freeMessageLimit: number
  readonly creditBalance: number
  readonly subscriptionTier: SubscriptionTier
}

export interface TarotAccessResult {
  readonly allowed: boolean
  readonly level: TarotAccessLevel
  readonly remaining: number
}
