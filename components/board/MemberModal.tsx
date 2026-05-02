'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Member } from './data'

export default function MemberModal({
  member,
  onClose,
}: {
  member: Member | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8 }}
            className='bg-white text-black rounded-2xl p-8 max-w-md w-full'
          >
            <div className='w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4' />

            <h2 className='text-xl font-bold text-center'>{member.name}</h2>
            <p className='text-center text-gray-500'>{member.role}</p>

            <p className='mt-4 text-center text-gray-700'>{member.bio}</p>

            <button
              onClick={onClose}
              className='mt-6 w-full bg-[#1e3a8a] text-white py-2 rounded'
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
