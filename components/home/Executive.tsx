'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Send, Quote } from 'lucide-react'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'

const executives = [
  {
    name: 'Shehud Sultan',
    role: 'President',
    image: '/images/president.jpg',
    quote:
      'JUSCDC exists to empower students with leadership, innovation, and real-world opportunities that prepare them for the future.',
    bio: '3rd yr law student',
    instagram: 'https://www.instagram.com/sh.sultan/',
    linkedin: 'https://linkedin.com',
    telegram: 'https://t.me/@Sh_spw',
  },
  {
    name: 'Abdulaziz Esmael',
    role: 'Vice President',
    image: '/images/vice-president.jpg',
    quote:
      'Together we are building a strong bridge between academic excellence and professional success across all campuses.',
    bio: '5th yr medicine student',
    instagram: 'https://www.instagram.com/azi0_0/',
    linkedin: 'https://www.linkedin.com/in/abdulaziz-abdella-449374404',
    telegram: 'https://t.me/@Azi0_0',
  },
]

export default function ExecutiveWelcomeSection() {
  return (
    <section className='relative overflow-hidden bg-[#f8fafc] py-24'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <div className='mb-4 inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700'>
            Executive Leadership
          </div>

          <h2 className='text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl'>
            Welcome From Our Leadership
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Meet the visionary leaders driving JUSCDC’s mission of student
            empowerment, innovation, and career excellence.
          </p>
        </motion.div>

        {/* Executive Cards */}
        <div className='grid gap-8 lg:grid-cols-2'>
          {executives.map((executive, index) => (
            <motion.div
              key={executive.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className='group relative overflow-hidden rounded-32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
            >
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-linear-to-br from-[#112662]/5 to-yellow-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

              <div className='relative flex flex-col gap-8 md:flex-row'>
                {/* Image */}
                <div className='relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-3xl border-4 border-white shadow-xl md:mx-0'>
                  <Image
                    src={executive.image}
                    alt={executive.name}
                    sizes='50'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </div>

                {/* Content */}
                <div className='flex flex-1 flex-col justify-center'>
                  {/* Role Badge */}
                  <div className='mb-4 inline-flex w-fit rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
                    {executive.role}
                  </div>

                  {/* Name */}
                  <h3 className='text-3xl font-bold text-slate-900'>
                    {executive.name}
                  </h3>
                  <p className='text-gray-500'>{executive.bio}</p>
                  {/* Quote */}
                  <div className='relative mt-5'>
                    <Quote className='absolute -left-1 -top-2 h-8 w-8 text-yellow-400/40' />

                    <p className='pl-8 text-base leading-8 text-slate-600'>
                      {executive.quote}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className='mt-8 flex items-center gap-4'>
                    <Link
                      href={executive.instagram}
                      target='_blank'
                      className='group/social rounded-2xl border border-slate-700 text-slate-700   bg-slate-50 p-4 transition-all duration-300 hover:border-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    >
                      <SlSocialInstagram className='h-5 w-5' />
                    </Link>
                    <Link
                      href={executive.linkedin}
                      target='_blank'
                      className='group/social rounded-2xl border border-slate-700 text-slate-700   bg-slate-50 p-4 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900'
                    >
                      <SlSocialLinkedin className='h-5 w-5' />
                    </Link>

                    <Link
                      href={executive.telegram}
                      target='_blank'
                      className='group/social rounded-2xl border border-slate-700 text-slate-700   bg-slate-50 p-4 transition-all duration-300 hover:border-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    >
                      <Send className='h-5 w-5' />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[40px] bg-linear-to-bl from-yellow-400/20 to-transparent' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
