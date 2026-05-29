import type { TarotDailyFortuneResult } from '@/features/tarot/types/tarot.types'

export interface TarotContentKit {
  readonly shortformIdeas: readonly string[]
  readonly imagePrompt: string
  readonly videoPrompt: string
  readonly socialPost: string
  readonly moodboardKeywords: readonly string[]
}

export function buildTarotContentKit(card: TarotDailyFortuneResult['card']): TarotContentKit {
  const keywordText = card.keywords.join(', ')

  return {
    shortformIdeas: [
      `${card.nameKo}의 "${card.keywords[0] ?? '오늘의 감정'}"을 15초 루틴 영상으로 보여주기`,
      `오늘의 카드 메시지를 작업실 POV, 손 클로즈업, 한 줄 자막으로 구성하기`,
      `Mystic pixel 무드로 카드 색감과 감정 키워드를 전환하는 before/after 숏폼`,
    ],
    imagePrompt: `Mystic pixel AI creator moodboard, tarot card ${card.nameEn}, keywords: ${keywordText}, deep violet night, soft neon, emotional but practical, vertical composition`,
    videoPrompt: `9:16 short-form video. Open with a glowing tarot card named ${card.nameKo}, cut to an AI creator desk, overlay keywords "${keywordText}", end with this action: ${card.action}`,
    socialPost: `오늘의 카드는 ${card.nameKo}. ${card.fortune} 지금 필요한 건 확정된 예언보다, 내 선택을 정리하는 작은 신호.`,
    moodboardKeywords: ['mystic pixel', 'deep violet', card.nameKo, ...card.keywords, 'AI creator', 'soft neon'],
  }
}
