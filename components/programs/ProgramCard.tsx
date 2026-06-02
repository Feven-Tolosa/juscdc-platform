'use client'

import Image from 'next/image'
import { Calendar, MapPin, Users } from 'lucide-react'

import { Program } from './types'
import RegisterButton from './RegisterButton'

interface ProgramCardProps {
  program: Program
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className='group overflow-hidden rounded-[36px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
      {/* Image */}
      <div className='relative h-72 overflow-hidden'>
        <Image
          src={program.image || '/placeholder-program.jpg'}
          alt={program.title}
          fill
          className='object-cover transition duration-700 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

        <div className='absolute left-6 top-6 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900'>
          {program.status}
        </div>
      </div>

      {/* Content */}
      <div className='p-8'>
        <div className='mb-4 inline-flex rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
          {program.category}
        </div>

        <h3 className='text-3xl font-bold text-slate-900'>{program.title}</h3>

        <p className='mt-5 leading-8 text-slate-600'>{program.description}</p>

        {/* Meta */}
        <div className='mt-8 space-y-4'>
          <div className='flex items-center gap-3 text-slate-600'>
            <Calendar className='h-5 w-5 text-[#112662]' />
            {program.date}
          </div>

          <div className='flex items-center gap-3 text-slate-600'>
            <MapPin className='h-5 w-5 text-[#112662]' />
            {program.location}
          </div>

          <div className='flex items-center gap-3 text-slate-600'>
            <Users className='h-5 w-5 text-[#112662]' />
            {program.attendees} Students
          </div>
        </div>

        {/* Buttons */}
        <div className='mt-10 flex gap-4'>
          <RegisterButton programId={program.id} programTitle={program.title} />
        </div>
      </div>
    </div>
  )
}
