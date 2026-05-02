'use client'
import { motion } from 'framer-motion'

export default function WhyJoin() {
  return (
    <section className='py-24 px-6 bg-slate-900 text-white'>
      <h2 className='text-3xl font-bold text-center mb-12'>Why Join JUSCDC?</h2>

      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10'>
        {['Career Opportunities', 'Networking', 'Skill Development'].map(
          (item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='p-6 border border-white/20 rounded-xl backdrop-blur'
            >
              <h3 className='font-semibold'>{item}</h3>
              <p className='text-sm text-gray-300 mt-2'>
                Gain practical experience and connect with professionals.
              </p>
            </motion.div>
          ),
        )}
      </div>
    </section>
  )
}
