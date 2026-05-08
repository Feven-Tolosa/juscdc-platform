'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, GraduationCap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#112662] to-[#0f172a] text-white'>
      {/* Background Glow */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-yellow-400 blur-3xl' />
        <div className='absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-950 blur-3xl' />
      </div>

      {/* Grid Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]' />

      <div className='relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-7 lg:flex-row lg:px-12'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='z-10 flex-1 text-center lg:text-left'
        >
          {/* Badge */}
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-md'>
            <GraduationCap className='h-4 w-4' />
            Jimma University Career Development Club
          </div>

          {/* Headline */}
          <h1 className='max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl'>
            Bridging the Gap Between{' '}
            <span className='bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent'>
              Education
            </span>{' '}
            and Industry.
          </h1>

          {/* Description */}
          <p className='mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg'>
            Empowering students through leadership, innovation, networking, and
            career opportunities across all Jimma University campuses.
          </p>

          {/* Buttons */}
          <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start'>
            <Link
              href='/programs'
              className='group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300'
            >
              Explore Programs
              <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>

            <Link
              href='/membership'
              className='inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20'
            >
              Join the Club
            </Link>
          </div>

          {/* Stats */}
          {/* <div className='mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
              <Users className='mb-3 h-8 w-8 text-yellow-400' />
              <h3 className='text-3xl font-bold'>500+</h3>
              <p className='mt-1 text-sm text-slate-300'>Active Members</p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
              <Briefcase className='mb-3 h-8 w-8 text-yellow-400' />
              <h3 className='text-3xl font-bold'>20+</h3>
              <p className='mt-1 text-sm text-slate-300'>Career Programs</p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md'>
              <GraduationCap className='mb-3 h-8 w-8 text-yellow-400' />
              <h3 className='text-3xl font-bold'>4</h3>
              <p className='mt-1 text-sm text-slate-300'>Campuses Connected</p>
            </div>
          </div> */}
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='relative mt-16 flex flex-1 justify-center lg:mt-0'
        >
          {/* Glow */}
          <div className='absolute h-[450px] w-[450px] rounded-full bg-yellow-400/20 blur-3xl' />

          {/* Hero Image */}
          <div className='relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl'>
            <Image
              src='/images/juscdc-hero.jpg'
              alt='JUSCDC Students'
              width={620}
              height={620}
              priority
              className='h-full w-full object-cover'
            />

            {/* Floating Card */}
            <div className='absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-lg'>
              <p className='text-sm text-slate-300'>
                “Building future leaders through collaboration, innovation, and
                real-world opportunities.”
              </p>

              <div className='mt-4 flex items-center gap-3'>
                <div className='h-12 w-12 overflow-hidden rounded-full border border-yellow-400'>
                  <Image
                    src='/images/president.jpg'
                    alt='President'
                    width={48}
                    height={48}
                    className='h-full w-full object-cover'
                  />
                </div>

                <div>
                  <h4 className='font-semibold'>JUSCDC Executive Board</h4>
                  <p className='text-sm text-slate-400'>Jimma University</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
