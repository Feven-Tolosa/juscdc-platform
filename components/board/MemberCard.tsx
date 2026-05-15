import Image from 'next/image'
import { Member } from './types'

interface MemberCardProps {
  member: Member
  key: string
  onClick: () => void
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className='group overflow-hidden rounded-[30px] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl'>
      <div className='relative h-80 overflow-hidden'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className='object-cover transition duration-700 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-bold text-slate-900'>{member.name}</h3>

        <p className='mt-2 text-slate-500'>{member.role}</p>
      </div>
    </div>
  )
}
