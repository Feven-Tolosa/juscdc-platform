'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { Member } from './types'

interface MemberModalProps {
  member: Member | null
  onClose: () => void
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  if (!member) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md'>
      <div className='relative w-full max-w-2xl overflow-hidden rounded-[36px] bg-white shadow-2xl'>
        <button
          onClick={onClose}
          className='absolute right-5 top-5 z-20 rounded-full bg-black/10 p-3'
        >
          <X className='h-5 w-5' />
        </button>

        <div className='relative h-96'>
          <Image
            src={member.image}
            alt={member.name}
            fill
            className='object-cover'
          />
        </div>

        <div className='p-8'>
          <h2 className='text-4xl font-bold text-slate-900'>{member.name}</h2>

          <p className='mt-2 text-[#1e3a8a]'>{member.role}</p>

          <p className='mt-6 leading-8 text-slate-600'>{member.bio}</p>
        </div>
      </div>
    </div>
  )
}
