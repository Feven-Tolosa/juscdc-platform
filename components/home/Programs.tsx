'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  Users,
  Briefcase,
  GraduationCap,
} from 'lucide-react'

const programs = [
  {
    title: 'Leadership Training',
    description:
      'Empowering students with leadership, teamwork, communication, and project management skills.',
    image: '/programs/leadership.jpg',
    icon: Users,
    status: 'Open Registration',
    href: '/programs/leadership-training',
  },
  {
    title: 'JU-LEAP',
    description:
      'A career acceleration initiative connecting students with industry professionals and opportunities.',
    image: '/programs/ju-leap.jpg',
    icon: Briefcase,
    status: 'Upcoming',
    href: '/programs/ju-leap',
  },
  {
    title: 'Career Readiness Workshop',
    description:
      'CV building, interview preparation, networking, and personal branding for future professionals.',
    image: '/programs/career.jpg',
    icon: GraduationCap,
    status: 'Active',
    href: '/programs/career-readiness',
  },
]

export default function ProgramsSection() {
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
            <span className='bg-gradient-to-r from-[#112662] to-yellow-500 bg-clip-text text-transparent'>
              Career Programs
            </span>
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            JUSCDC provides impactful leadership programs, workshops, and
            professional development opportunities designed to prepare students
            for the future workplace.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className='grid gap-8 lg:grid-cols-3'>
          {programs.map((program, index) => {
            const Icon = program.icon

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className='group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl'
              >
                {/* Image */}
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

                  {/* Status */}
                  <div className='absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg'>
                    {program.status}
                  </div>

                  {/* Icon */}
                  <div className='absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xl'>
                    <Icon className='h-7 w-7' />
                  </div>
                </div>

                {/* Content */}
                <div className='p-8'>
                  {/* Date */}
                  <div className='mb-4 flex items-center gap-2 text-sm text-slate-500'>
                    <CalendarDays className='h-4 w-4' />
                    Ongoing Program
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#112662]'>
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className='mt-5 leading-8 text-slate-600'>
                    {program.description}
                  </p>

                  {/* Buttons */}
                  <div className='mt-8 flex items-center gap-4'>
                    <Link
                      href={program.href}
                      className='group/btn inline-flex items-center gap-2 rounded-2xl bg-[#112662] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#172554]'
                    >
                      Learn More
                      <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                    </Link>

                    <Link
                      href='/register'
                      className='rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900'
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-20 rounded-[36px] bg-gradient-to-r from-[#0f172a] via-[#112662] to-[#0f172a] p-10 text-center text-white shadow-2xl'
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
    </section>
  )
}
