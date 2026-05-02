'use client'

import { motion } from 'framer-motion'

function ExecutiveCard({ name, role }: { name: string; role: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className='backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-lg'
    >
      <div className='w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4' />

      <h3 className='font-bold text-lg text-center'>{name}</h3>
      <p className='text-sm text-center text-gray-300'>{role}</p>

      <p className='mt-4 text-sm text-center text-gray-400'>
        Empowering students to lead and innovate.
      </p>
    </motion.div>
  )
}

export default function ExecutiveSection() {
  return (
    <section className='py-20 px-6 bg-linear-to-b from-slate-900 to-slate-800'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
        <ExecutiveCard name='President Name' role='President' />
        <ExecutiveCard name='VP Name' role='Vice President' />
      </div>
    </section>
  )
}
