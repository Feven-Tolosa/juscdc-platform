'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Bethelhem Girma',
    role: 'Software Engineering Student',
    image: '/testimonials/student-1.jpg',
    quote:
      'JUSCDC helped me build confidence, leadership skills, and meaningful professional connections that transformed my university experience.',
  },
  {
    name: 'Nathan Bekele',
    role: 'Business & Economics Student',
    image: '/testimonials/student-2.jpg',
    quote:
      'Through JUSCDC programs and workshops, I improved my communication and networking skills while gaining practical career exposure.',
  },
  {
    name: 'Rahel Tadesse',
    role: 'Engineering Student',
    image: '/testimonials/student-3.jpg',
    quote:
      'The mentorship and collaborative environment at JUSCDC motivated me to pursue bigger goals and become more career-focused.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className='relative overflow-hidden bg-[#f8fafc] py-24'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mx-auto mb-20 max-w-3xl text-center'
        >
          <div className='mb-4 inline-flex items-center rounded-full bg-[#112662]/10 px-4 py-2 text-sm font-semibold text-[#112662]'>
            Student Testimonials
          </div>

          <h2 className='text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl'>
            What Students Say About{' '}
            <span className='bg-gradient-to-r from-[#112662] to-yellow-500 bg-clip-text text-transparent'>
              JUSCDC
            </span>
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Hear from students whose leadership, professional growth, and
            university experience were positively impacted through JUSCDC.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid gap-8 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className='group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl'
            >
              {/* Hover Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#112662]/0 via-[#112662]/0 to-yellow-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

              {/* Quote Icon */}
              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#112662]/10 text-[#112662]'>
                <Quote className='h-7 w-7' />
              </div>

              {/* Stars */}
              <div className='mb-6 flex items-center gap-1'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='h-5 w-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              {/* Quote */}
              <p className='relative leading-8 text-slate-600'>
                “{testimonial.quote}”
              </p>

              {/* User */}
              <div className='relative mt-8 flex items-center gap-4'>
                <div className='relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white shadow-lg'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className='object-cover'
                  />
                </div>

                <div>
                  <h3 className='text-lg font-bold text-slate-900'>
                    {testimonial.name}
                  </h3>

                  <p className='text-sm text-slate-500'>{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[40px] bg-gradient-to-bl from-yellow-400/10 to-transparent' />
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0f172a] via-[#112662] to-[#0f172a] p-10 text-center text-white shadow-2xl'
        >
          <h3 className='text-3xl font-extrabold md:text-5xl'>
            Empowering Students Beyond the Classroom
          </h3>

          <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300'>
            JUSCDC continues to create opportunities for students to grow
            professionally, lead confidently, and prepare for impactful futures.
          </p>

          {/* Stats */}
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl'>
              <h4 className='text-4xl font-extrabold text-yellow-400'>500+</h4>

              <p className='mt-3 text-slate-300'>Active Members</p>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl'>
              <h4 className='text-4xl font-extrabold text-yellow-400'>20+</h4>

              <p className='mt-3 text-slate-300'>Programs Conducted</p>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl'>
              <h4 className='text-4xl font-extrabold text-yellow-400'>95%</h4>

              <p className='mt-3 text-slate-300'>Positive Feedback</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
