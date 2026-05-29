import type { TarotChatMessage } from '@/features/tarot/types/tarot.types'

interface TarotChatEntryProps {
  readonly message: TarotChatMessage
}

export function TarotChatEntry({ message }: TarotChatEntryProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`tarot-chat-entry flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser ? 'bg-violet-500 text-white' : 'border border-white/10 bg-white/[0.04] text-white/70'
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}
