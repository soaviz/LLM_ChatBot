import Link from 'next/link'
import { loadTarotChatSession } from '@/app/(app)/tarot/actions'
import { TarotChatPanel } from '@/features/tarot/components/TarotChatPanel'

interface TarotChatPageProps {
  readonly searchParams: Promise<{
    readonly session_id?: string
  }>
}

export default async function TarotChatPage({ searchParams }: TarotChatPageProps) {
  const params = await searchParams
  const result = await loadTarotChatSession(params.session_id ?? null)

  if (result.status === 'ok') {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.22),transparent_34%),linear-gradient(180deg,#0b0613,#07050d)] text-white">
        <TarotChatPanel initialChat={result.chat} />
      </main>
    )
  }

  const message =
    result.status === 'unauthenticated'
      ? '로그인 후 타로 채팅을 이용할 수 있어요.'
      : result.status === 'not_found'
        ? '연결된 타로 채팅 세션을 찾을 수 없어요.'
        : result.message

  return (
    <main className="grid min-h-screen place-items-center bg-[#08050f] p-6 text-white">
      <section className="w-full max-w-md rounded-3xl border border-violet-200/15 bg-white/[0.04] p-6 text-center">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-100/45">
          Tarot · Chat
        </p>
        <h1 className="mt-3 text-2xl font-black">타로 채팅을 열 수 없어요</h1>
        <p className="mt-3 text-sm leading-6 text-white/55">{message}</p>
        <Link
          href={result.status === 'unauthenticated' ? '/login' : '/tarot'}
          className="mt-5 inline-flex rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white"
        >
          {result.status === 'unauthenticated' ? '로그인하기' : '오늘의 타로로 돌아가기'}
        </Link>
      </section>
    </main>
  )
}
