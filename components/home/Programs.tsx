'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { supabase } from '@/lib/supabase/supabaseClient'
import RegistrationModal from '@/components/programs/RegistrationModal'
import RegistrationForm from '@/components/programs/RegistrationForm'
import { Program } from '@/components/programs/types'

export default function ProgramsSection() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [activeProgram, setActiveProgram] = useState<{
    id: string
    title: string
  } | null>(null)

  useEffect(() => {
    async function fetchPrograms() {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3) // only show 3 on the home page

      if (!error) setPrograms(data || [])
      setLoading(false)
    }

    fetchPrograms()
  }, [])

  return (
    <section className='relative overflow-hidden bg-[#f8fafc] py-24'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <div className='mb-4 inline-flex items-center rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
            Programs & Trainings
          </div>

          <h2 className='text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl'>
            Explore Our{' '}
            <span className='bg-linear-to-r from-[#112662] to-yellow-500 bg-clip-text text-transparent'>
              Career Programs
            </span>
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            JUSCDC provides impactful leadership programs, workshops, and
            professional development opportunities designed to prepare students
            for the future workplace.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className='py-20 text-center text-lg font-medium text-slate-500'>
            Loading programs...
          </div>
        )}

        {/* Empty */}
        {!loading && programs.length === 0 && (
          <div className='py-20 text-center text-slate-400'>
            No programs available yet.
          </div>
        )}

        {/* Program Cards */}
        {!loading && programs.length > 0 && (
          <div className='grid gap-8 lg:grid-cols-3'>
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl'
              >
                {/* Image */}
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={program.image || '/placeholder-program.jpg'}
                    alt={program.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent' />

                  <div className='absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg'>
                    {program.status}
                  </div>
                </div>

                {/* Content */}
                <div className='p-8'>
                  <div className='mb-4 flex items-center gap-2 text-sm text-slate-500'>
                    <CalendarDays className='h-4 w-4' />
                    {program.date ?? 'Ongoing Program'}
                  </div>

                  <h3 className='text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#112662]'>
                    {program.title}
                  </h3>

                  <p className='mt-5 leading-8 text-slate-600'>
                    {program.description}
                  </p>

                  <div className='mt-8 flex items-center gap-4'>
                    <Link
                      href={`/programs/${program.id}`}
                      className='group/btn inline-flex items-center gap-2 rounded-2xl bg-[#112662] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#172554]'
                    >
                      Learn More
                      <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                    </Link>

                    <button
                      onClick={() =>
                        setActiveProgram({
                          id: program.id,
                          title: program.title,
                        })
                      }
                      className='rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900'
                    >
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-20 rounded-[36px] bg-linear-to-r from-[#0f172a] via-[#112662] to-[#0f172a] p-10 text-center text-white shadow-2xl'
        >
          <h3 className='text-3xl font-bold md:text-4xl'>
            Ready to Build Your Future?
          </h3>

          <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300'>
            Join JUSCDC programs and gain the skills, mentorship, and
            opportunities needed to excel in your professional journey.
          </p>

          <Link
            href='/programs'
            className='group mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300'
          >
            Explore All Programs
            <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </motion.div>
      </div>

      {/* Registration Modal */}
      {activeProgram && (
        <RegistrationModal onClose={() => setActiveProgram(null)}>
          <RegistrationForm
            programId={activeProgram.id}
            programTitle={activeProgram.title}
            onClose={() => setActiveProgram(null)}
          />
        </RegistrationModal>
      )}
    </section>
  )
}
