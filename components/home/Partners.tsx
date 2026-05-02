'use client'

import { motion } from 'framer-motion'

export default function Partners() {
  return (
    <section className='py-20 px-6 bg-gray-50'>
      <h2 className='text-center text-[#1e3a8a] text-2xl font-bold mb-10'>
        Our Partners
      </h2>

      <div className='flex gap-10 overflow-x-auto'>
        {[1, 2, 3, 4].map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.1 }}
            className='w-40 h-20 bg-gray-300 grayscale hover:grayscale-0 rounded-lg transition'
          />
        ))}
      </div>
    </section>
  )
}
