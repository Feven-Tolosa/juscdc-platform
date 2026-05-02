import MemberCard from '@/components/board/MemberCard'

export default function BoardPage() {
  return (
    <div className='py-20 px-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-[#1e3a8a] mb-10'>
        Executive Board
      </h1>

      <div className='grid md:grid-cols-3 gap-6'>
        <MemberCard name='President Name' role='President' />
        <MemberCard name='VP Name' role='Vice President' />
        <MemberCard name='Secretary' role='General Secretary' />
      </div>
    </div>
  )
}
