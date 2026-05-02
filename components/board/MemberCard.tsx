'use client'

import { motion } from 'framer-motion'
import { Member } from './data'

export default function MemberCard({
  member,
  onClick,
}: {
  member: Member
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      onClick={onClick}
      className='cursor-pointer backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-lg'
    >
      <div className='w-20 h-20 bg-gray-300 rounded-full mb-4' />

      <h3 className='font-semibold'>{member.name}</h3>
      <p className='text-sm text-gray-300'>{member.role}</p>
    </motion.div>
  )
}
