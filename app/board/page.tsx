import BoardTabs from '@/components/board/BoardTabs'

export default function BoardPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 to-black text-white py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-16'>
          Executive Board
        </h1>

        {/* ✅ ONLY CLIENT COMPONENT HERE */}
        <BoardTabs />
      </div>
    </div>
  )
}
