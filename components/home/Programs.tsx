'use client'
import { motion } from 'framer-motion'

const programs = ['Leadership Training', 'JU-LEAP', 'Career Bootcamp']

export default function ProgramsPreview() {
  return (
    <section className='py-24 px-6 bg-gray-50'>
      <h2 className='text-3xl font-bold text-center mb-12'>Our Programs</h2>

      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        {programs.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className='bg-white p-6 rounded-xl shadow'
          >
            <h3 className='font-semibold text-lg'>{p}</h3>
            <p className='text-sm text-gray-600 mt-2'>
              Learn real-world skills and grow your career.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
