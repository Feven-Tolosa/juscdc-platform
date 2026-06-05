'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  Briefcase,
  Rocket,
  Network,
  Award,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Leadership Experience',
    description:
      'Develop confidence, teamwork, communication, and leadership skills through real-world club activities.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description:
      'Access workshops, mentorships, internships, and career development programs tailored for students.',
  },
  {
    icon: Network,
    title: 'Professional Networking',
    description:
      'Connect with industry experts, organizations, alumni, and ambitious students across campuses.',
  },
  {
    icon: Rocket,
    title: 'Innovation & Growth',
    description:
      'Participate in impactful projects, innovation challenges, and collaborative learning experiences.',
  },
  {
    icon: Award,
    title: 'Certificates & Recognition',
    description:
      'Earn certificates, achievements, and recognition that strengthen your professional portfolio.',
  },
  {
    icon: GraduationCap,
    title: 'Future Readiness',
    description:
      'Prepare yourself for the modern workplace with practical skills and professional exposure.',
  },
]

export default function WhyJoinSection() {
  return (
    <section className='relative overflow-hidden bg-[#0f172a] py-24 text-white'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl' />

      {/* Grid Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mx-auto mb-20 max-w-3xl text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300'>
            <Sparkles className='h-4 w-4' />
            Why Students Choose JUSCDC
          </div>

          <h2 className='text-4xl font-extrabold tracking-tight md:text-5xl'>
            Why Join{' '}
            <span className='bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>
              JUSCDC?
            </span>
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-300'>
            JUSCDC is more than a student club — it is a platform for
            leadership, innovation, networking, and career growth designed to
            empower students for the future.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className='group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/20 hover:bg-white/10 hover:shadow-2xl'
              >
                {/* Hover Glow */}
                <div className='absolute inset-0 bg-linear-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                {/* Icon */}
                <div className='relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-yellow-500 text-slate-900 shadow-lg transition-transform duration-500 group-hover:scale-110'>
                  <Icon className='h-8 w-8' />
                </div>

                {/* Title */}
                <h3 className='relative text-2xl font-bold'>{benefit.title}</h3>

                {/* Description */}
                <p className='relative mt-5 leading-8 text-slate-300'>
                  {benefit.description}
                </p>

                {/* Decorative Corner */}
                <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[40px] bg-linear-to-bl from-yellow-400/10 to-transparent' />
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
          className='relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-r from-[#112662] via-[#2563eb] to-[#112662] p-10 text-center shadow-2xl'
        >
          {/* Glow */}
          <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl' />
          <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl' />

          <div className='relative'>
            <h3 className='text-3xl font-extrabold md:text-5xl'>
              Become Part of the Future
            </h3>

            <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200'>
              Join a community of ambitious students committed to leadership,
              innovation, and professional excellence across Jimma University.
            </p>

            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link
                href='/profile'
                className='group inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300'
              >
                Join JUSCDC
                <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>

              <Link
                href='/programs'
                className='rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20'
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
