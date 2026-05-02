'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Active Members' },
  { number: '20+', label: 'Programs Hosted' },
  { number: '10+', label: 'Industry Partners' },
]

export default function Stats() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center'>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
          >
            <h2 className='text-4xl font-bold text-[#1e3a8a]'>{s.number}</h2>
            <p className='text-gray-500 mt-2'>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
