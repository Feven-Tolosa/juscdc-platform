'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className='py-24 px-6 text-center bg-gradient-to-br from-[#1e3a8a] to-slate-900 text-white'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='text-3xl font-bold'
      >
        Ready to Build Your Future?
      </motion.h2>

      <p className='mt-4 text-gray-300'>
        Join JUSCDC and unlock your potential today.
      </p>

      <button className='mt-8 bg-[#eab308] text-black px-8 py-3 rounded-xl'>
        Become a Member
      </button>
    </section>
  )
}
