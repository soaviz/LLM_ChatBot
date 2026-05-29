import type { TarotAccessInput, TarotAccessResult } from '@/features/tarot/types/tarot.types'

export function getTarotAccess({
  freeMessagesUsed,
  freeMessageLimit,
  creditBalance,
  subscriptionTier,
}: TarotAccessInput): TarotAccessResult {
  if (subscriptionTier === 'mystic') {
    return { allowed: true, level: 'mystic', remaining: Number.POSITIVE_INFINITY }
  }

  if (subscriptionTier === 'plus') {
    return { allowed: true, level: 'plus', remaining: Number.POSITIVE_INFINITY }
  }

  const freeRemaining = Math.max(0, freeMessageLimit - freeMessagesUsed)

  if (freeRemaining > 0) {
    return { allowed: true, level: 'free_first_chat', remaining: freeRemaining }
  }

  if (creditBalance > 0) {
    return { allowed: true, level: 'credit', remaining: creditBalance }
  }

  return { allowed: false, level: 'locked', remaining: 0 }
}
