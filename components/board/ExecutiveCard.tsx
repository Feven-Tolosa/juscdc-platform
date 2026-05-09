'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Send, Mail } from 'lucide-react'
import { Member } from './types'

interface ExecutiveCardProps {
  member: Member
  onOpen: (member: Member) => void
}

export default function ExecutiveCard({ member, onOpen }: ExecutiveCardProps) {
  return (
    <div className='group justify-between overflow-hidden rounded-[36px] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl'>
      <div className='relative h-96 overflow-hidden'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className='object-cover transition duration-700 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent' />

        <div className='absolute left-6 top-6 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900'>
          {member.role}
        </div>
      </div>

      <div className='p-8'>
        <h3 className='text-3xl font-bold text-slate-900'>{member.name}</h3>

        <p className='mt-4 leading-8 text-slate-600'>{member.bio}</p>

        <div className='mt-8 flex gap-4'>
          {member.linkedin && (
            <Link
              href={member.linkedin}
              target='_blank'
              className='rounded-2xl bg-slate-100 p-4 transition hover:bg-[#0A66C2] hover:text-white'
            >
              {/* <Linkedin className='h-5 w-5' /> */}
            </Link>
          )}

          {member.telegram && (
            <Link
              href={member.telegram}
              target='_blank'
              className='rounded-2xl bg-slate-100 p-4 transition hover:bg-yellow-400 hover:text-slate-900'
            >
              <Send className='h-5 w-5' />
            </Link>
          )}

          {member.instagram && (
            <Link
              href={member.instagram}
              target='_blank'
              className='rounded-2xl bg-slate-100 p-4 transition hover:bg-pink-500 hover:text-white'
            >
              {/* <Instagram className='h-5 w-5' /> */}
            </Link>
          )}

          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              className='rounded-2xl bg-slate-100 p-4 transition hover:bg-blue-500 hover:text-white'
            >
              <Mail className='h-5 w-5' />
            </Link>
          )}
        </div>

        <button
          onClick={() => onOpen(member)}
          className='mt-8 w-full rounded-2xl bg-[#112662] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
        >
          Tap to View Bio
        </button>
      </div>
    </div>
  )
}
