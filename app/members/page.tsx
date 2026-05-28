import MemberCard from '@/components/board/MemberCard'
import { getMembers } from '@/lib/getMembers'

export default async function MembersPage() {
  const members = await getMembers()

  return (
    <main className='min-h-screen bg-slate-100 p-10'>
      <div className='mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </main>
  )
}
