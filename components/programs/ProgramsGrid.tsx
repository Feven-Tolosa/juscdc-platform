'use client'

import { useEffect, useState } from 'react'

import ProgramCard from './ProgramCard'

import { Program } from './types'
import { supabase } from '@/lib/supabase/supabaseClient'

export default function ProgramsGrid() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPrograms()
  }, [])
  async function fetchPrograms() {
    setLoading(true)

    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setPrograms(data || [])
    }

    setLoading(false)
  }

  return (
    <section className='mx-auto max-w-7xl px-6 py-24 lg:px-12'>
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-extrabold text-slate-900'>
          Featured Programs
        </h2>

        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600'>
          Discover impactful leadership and career development opportunities
          designed for Jimma University students.
        </p>
      </div>

      {loading ? (
        <div className='py-20 text-center text-lg font-medium'>
          Loading programs...
        </div>
      ) : programs.length === 0 ? (
        <div className='py-20 text-center text-slate-500'>
          No programs available yet.
        </div>
      ) : (
        <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      )}
    </section>
  )
}
