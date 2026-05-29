import type { TarotDailyFortuneResult } from '@/features/tarot/types/tarot.types'

interface TarotResultCardProps {
  readonly fortune: TarotDailyFortuneResult
  readonly revealed: boolean
}

export function TarotResultCard({ fortune, revealed }: TarotResultCardProps) {
  if (!revealed) {
    return (
      <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-white/35">
        카드를 탭해서 오늘의 신호를 열어봐
      </p>
    )
  }

  return (
    <article className="tarot-result-card grid gap-3 text-center">
      <div className="animate-[tarotFadeUp_420ms_ease_both]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-100/40">
          {fortune.readingDate} · {fortune.card.orientation === 'upright' ? 'Upright' : 'Reversed'}
        </p>
        <h2 className="mt-2 text-2xl font-black text-white">{fortune.card.nameKo}</h2>
      </div>
      <p className="animate-[tarotFadeUp_420ms_120ms_ease_both] text-sm font-bold text-fuchsia-100/80">
        {fortune.card.keywords.join(' · ')}
      </p>
      <p className="animate-[tarotFadeUp_420ms_220ms_ease_both] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white/75">
        {fortune.card.fortune}
      </p>
      <p className="animate-[tarotFadeUp_420ms_320ms_ease_both] rounded-2xl border border-fuchsia-200/15 bg-fuchsia-200/[0.06] px-5 py-4 text-sm leading-7 text-fuchsia-50/80">
        오늘의 행동 · {fortune.card.action}
      </p>
    </article>
  )
}
