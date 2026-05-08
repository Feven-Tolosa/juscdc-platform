'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const partners = [
  {
    name: 'Ethioware EdTech Initiative',
    logo: '/partners/Ethioware.jpg',
    url: 'https://ethioware.org/',
  },
  {
    name: 'The Operating Room Global (TORG)',
    logo: '/partners/TORG.png',
    url: 'https://t.me/jimmauniversitycareerdevelopment',
  },
  {
    name: 'Jimma University Economics Students Association (JUECSA)',
    logo: '/partners/Ethioware.jpg',
    url: 'https://t.me/jimmauniversitycareerdevelopment',
  },
  {
    name: 'Business Innovation center',
    logo: '/partners/business.png',
    url: 'https://t.me/jimmauniversitycareerdevelopment',
  },
  {
    name: 'Jimma University',
    logo: '/partners/ju.jpg',
    url: 'https://ju.edu.et',
  },
]

export default function PartnershipCarousel() {
  return (
    <section className='relative overflow-hidden bg-[#0f172a] py-24'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <div className='mb-4 inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300'>
            Trusted Collaborations
          </div>

          <h2 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl'>
            Our Partners & Collaborators
          </h2>

          <p className='mt-6 text-lg leading-8 text-slate-300'>
            JUSCDC proudly collaborates with organizations, institutions, and
            innovators who support student development, leadership, and career
            growth.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className='relative overflow-hidden'>
          {/* Gradient Edges */}
          <div className='absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0f172a] to-transparent' />
          <div className='absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0f172a] to-transparent' />

          {/* Scrolling Track */}
          <motion.div
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='flex w-max gap-8'
          >
            {[...partners, ...partners].map((partner, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.url}
                target='_blank'
                className='group relative flex h-40 w-72 shrink-0 items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/10 hover:shadow-2xl'
              >
                {/* Hover Glow */}
                <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                {/* External Icon */}
                <div className='absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 p-2 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100'>
                  <ExternalLink className='h-4 w-4 text-yellow-300' />
                </div>

                {/* Logo */}
                <div className='relative flex flex-col items-center justify-center'>
                  <div className='relative h-16 w-40 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110'>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className='object-contain rounded'
                    />
                  </div>

                  <p className='mt-5 text-center text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white'>
                    {partner.name}
                  </p>
                </div>

                {/* Border Glow */}
                <div className='absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/20' />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className='mt-20 grid gap-6 md:grid-cols-3 '>
          <div className='shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/20 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl '>
            <h3 className='text-4xl font-extrabold text-yellow-400'>15+</h3>
            <p className='mt-3 text-slate-300'>Strategic Partnerships</p>
          </div>

          <div className='shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/20 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl'>
            <h3 className='text-4xl font-extrabold text-yellow-400'>4</h3>
            <p className='mt-3 text-slate-300'>Campuses Connected</p>
          </div>

          <div className='shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/20 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl'>
            <h3 className='text-4xl font-extrabold text-yellow-400'>500+</h3>
            <p className='mt-3 text-slate-300'>Students Impacted</p>
          </div>
        </div>
      </div>
    </section>
  )
}
