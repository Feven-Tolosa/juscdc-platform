'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

import { Program } from './types'
import RegistrationForm from './RegistrationForm'

interface ProgramCardProps {
  program: Program
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className='group overflow-hidden rounded-[36px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
      {/* Image */}
      <div className='relative h-72 overflow-hidden'>
        <Image
          src={program.image}
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
        <div className='mb-4 inline-flex rounded-full bg-[#1e3a8a]/10 px-4 py-2 text-sm font-semibold text-[#1e3a8a]'>
          {program.category}
        </div>

        <h3 className='text-3xl font-bold text-slate-900'>{program.title}</h3>

        <p className='mt-5 leading-8 text-slate-600'>{program.description}</p>

        {/* Meta */}
        <div className='mt-8 space-y-4'>
          <div className='flex items-center gap-3 text-slate-600'>
            <Calendar className='h-5 w-5 text-[#1e3a8a]' />
            {program.date}
          </div>

          <div className='flex items-center gap-3 text-slate-600'>
            <MapPin className='h-5 w-5 text-[#1e3a8a]' />
            {program.location}
          </div>

          <div className='flex items-center gap-3 text-slate-600'>
            <Users className='h-5 w-5 text-[#1e3a8a]' />
            {program.attendees} Students
          </div>
        </div>

        {/* Features */}
        <div className='mt-8 flex flex-wrap gap-3'>
          {program.features.map((feature) => (
            <span
              key={feature}
              className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700'
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='mt-10 flex gap-4'>
          <button
            onClick={() => setShowForm(!showForm)}
            className='group/button flex-1 rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
          >
            <span className='flex items-center justify-center gap-2'>
              Internal Registration
              <ArrowRight className='h-5 w-5 transition-transform group-hover/button:translate-x-1' />
            </span>
          </button>
        </div>

        {/* Registration Form */}
        {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
      </div>
    </div>
  )
}
