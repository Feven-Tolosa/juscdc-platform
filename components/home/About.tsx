'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Target,
  Rocket,
  Users,
  Briefcase,
  CalendarDays,
} from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Members',
  },
  {
    icon: Briefcase,
    value: '20+',
    label: 'Programs & Trainings',
  },
  {
    icon: GraduationCap,
    value: '4',
    label: 'Campuses Connected',
  },
]

export default function AboutHistorySection() {
  return (
    <section className='relative overflow-hidden bg-white py-24'>
      {/* Background Effects */}
      <div className='absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        <div className='grid items-center gap-20 lg:grid-cols-2'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className='mb-5 inline-flex items-center gap-2 rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
              <CalendarDays className='h-4 w-4' />
              Established in 2024
            </div>

            {/* Heading */}
            <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl'>
              About{' '}
              <span className='bg-gradient-to-r from-[#112662] to-yellow-500 bg-clip-text text-transparent'>
                JUSCDC
              </span>
            </h2>

            {/* Description */}
            <p className='mt-8 text-lg leading-8 text-slate-600'>
              The Jimma University Student Career Development Club (JUSCDC) was
              founded in 2024 with a vision to bridge the gap between academic
              learning and the professional industry. Our mission is to empower
              students through leadership, innovation, mentorship, and practical
              career development opportunities.
            </p>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              JUSCDC creates a collaborative ecosystem where students from
              different campuses can grow their professional skills, build
              strong networks, and prepare for future careers in a competitive
              global environment.
            </p>

            {/* Feature Cards */}
            <div className='mt-10 grid gap-5 sm:grid-cols-2'>
              {/* Mission */}
              <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
                <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#112662]/10 text-[#112662]'>
                  <Target className='h-7 w-7' />
                </div>

                <h3 className='text-xl font-bold text-slate-900'>
                  Our Mission
                </h3>

                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  To equip students with practical skills, leadership
                  experiences, and career opportunities.
                </p>
              </div>

              {/* Vision */}
              <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
                <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/20 text-yellow-600'>
                  <Rocket className='h-7 w-7' />
                </div>

                <h3 className='text-xl font-bold text-slate-900'>Our Vision</h3>

                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  To become Ethiopia’s leading student career development and
                  innovation community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative'
          >
            {/* Main Card */}
            <div className='relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#0f172a] via-[#112662] to-[#0f172a] p-10 text-white shadow-2xl'>
              {/* Decorative Glow */}
              <div className='absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl' />
              <div className='absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl' />

              {/* Heading */}
              <div className='relative'>
                <div className='mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-md'>
                  JUSCDC Growth Journey
                </div>

                <h3 className='text-3xl font-bold leading-tight'>
                  Building Future Leaders Across Jimma University
                </h3>

                <p className='mt-6 leading-8 text-slate-300'>
                  Through leadership programs, mentorship, workshops, and
                  networking opportunities, JUSCDC is shaping the next
                  generation of innovators and professionals.
                </p>
              </div>

              {/* Timeline */}
              <div className='relative mt-12 space-y-8'>
                {/* Line */}
                <div className='absolute left-5 top-0 h-full w-[2px] bg-white/10' />

                {/* Item */}
                <div className='relative flex gap-5'>
                  <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-slate-900'>
                    1
                  </div>

                  <div>
                    <h4 className='font-semibold'>Club Establishment</h4>
                    <p className='mt-2 text-sm text-slate-300'>
                      Founded in 2024 to support student career growth and
                      leadership.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className='relative flex gap-5'>
                  <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-slate-900'>
                    2
                  </div>

                  <div>
                    <h4 className='font-semibold'>Campus Expansion</h4>
                    <p className='mt-2 text-sm text-slate-300'>
                      Expanded programs across Main, BECO, JiT, and AGRI
                      campuses.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className='relative flex gap-5'>
                  <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-slate-900'>
                    3
                  </div>

                  <div>
                    <h4 className='font-semibold'>Industry Partnerships</h4>
                    <p className='mt-2 text-sm text-slate-300'>
                      Creating collaborations with organizations and career
                      development initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className='mt-8 grid gap-5 sm:grid-cols-3 '>
              {stats.map((stat, index) => {
                const Icon = stat.icon

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className='rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                  >
                    <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#112662]/10 text-[#112662]'>
                      <Icon className='h-7 w-7' />
                    </div>

                    <h3 className='text-3xl font-bold text-slate-900'>
                      {stat.value}
                    </h3>

                    <p className='mt-2 text-sm text-slate-500'>{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
