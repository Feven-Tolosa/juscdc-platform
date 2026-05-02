'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className='relative overflow-hidden py-32 px-6 text-center'>
      {/* Background Gradient Glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-slate-900 to-black opacity-95' />

      <div className='relative max-w-4xl mx-auto text-white'>
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-6xl font-bold leading-tight'
        >
          Bridging the Gap Between Education and Industry
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='mt-6 text-lg text-gray-300'
        >
          Empowering students with real-world skills, leadership, and
          opportunities.
        </motion.p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-10 bg-[#eab308] text-black px-8 py-4 rounded-xl font-semibold shadow-xl'
        >
          Join the Movement
        </motion.button>
      </div>

      {/* Floating Blur Effects */}
      <div className='absolute w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full top-10 left-10' />
      <div className='absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10' />
    </section>
  )
}
