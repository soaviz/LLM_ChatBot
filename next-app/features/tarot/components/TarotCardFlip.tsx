'use client'

import Image from 'next/image'

import type { TarotDailyFortuneResult } from '@/features/tarot/types/tarot.types'

interface TarotCardFlipProps {
  readonly fortune: TarotDailyFortuneResult
  readonly revealed: boolean
  readonly onReveal: () => void
}

export function TarotCardFlip({ fortune, revealed, onReveal }: TarotCardFlipProps) {
  const imageUrl = fortune.card.imageUrl

  return (
    <button
      type="button"
      aria-label={revealed ? '오늘의 타로 카드가 열렸습니다' : '오늘의 타로 카드 뒤집기'}
      aria-pressed={revealed}
      onClick={onReveal}
      className="tarot-card-flip group mx-auto block w-48 touch-manipulation rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/80"
    >
      <div className="relative aspect-[2/3] [perspective:1100px]">
        <div
          className={`absolute inset-0 rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none ${
            revealed ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <div className="absolute inset-0 grid place-items-center overflow-hidden rounded-[24px] border border-fuchsia-300/50 bg-[radial-gradient(circle_at_30%_18%,rgba(244,114,182,0.26),transparent_34%),linear-gradient(145deg,#160926,#070511)] shadow-[0_0_42px_rgba(192,132,252,0.32)] [backface-visibility:hidden]">
            <div className="absolute inset-3 rounded-[18px] border border-violet-200/15" />
            <div className="absolute left-6 top-7 h-1 w-1 rounded-full bg-white/70 shadow-[38px_22px_0_rgba(255,255,255,0.35),88px_48px_0_rgba(244,114,182,0.5),118px_14px_0_rgba(196,181,253,0.45),68px_128px_0_rgba(255,255,255,0.28)]" />
            <div className="relative text-center">
              <div className="text-4xl text-violet-100/70">✦</div>
              <div className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-fuchsia-100/55">
                VenuX Fortune
              </div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-fuchsia-200/60 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.34),transparent_32%),linear-gradient(155deg,#2a0f48,#100719_70%)] text-center shadow-[0_0_52px_rgba(217,70,239,0.28)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={`${fortune.card.nameKo} 타로 카드`}
                  fill
                  sizes="192px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,17,0.02),rgba(7,5,17,0.12)_42%,rgba(7,5,17,0.88))]" />
              </>
            ) : null}
            <div className="absolute inset-3 rounded-[18px] border border-white/10" />
            <div className="relative z-10 flex h-full flex-col items-center justify-end p-5">
              <div className="font-mono text-xs text-white/55">{fortune.card.number}</div>
              <div className="mt-2 text-2xl font-black text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                {fortune.card.nameKo}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-100/60">
                {fortune.card.nameEn}
              </div>
              <div className="mt-4 rounded-full border border-fuchsia-200/25 bg-black/35 px-3 py-1 text-xs font-bold text-fuchsia-100 backdrop-blur-sm">
                {fortune.card.orientation === 'upright' ? '정방향' : '역방향'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
