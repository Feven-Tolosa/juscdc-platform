'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className='py-24 px-6 bg-white text-center'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='text-3xl font-bold text-[#1e3a8a]'
      >
        About JUSCDC
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed'
      >
        Established in 2024, JUSCDC bridges academic knowledge with real-world
        industry skills, empowering students to become future leaders.
      </motion.p>
    </section>
  )
}
