'use client'

import { X } from 'lucide-react'

interface RegistrationModalProps {
  children: React.ReactNode
  onClose: () => void
}

export default function RegistrationModal({
  children,
  onClose,
}: RegistrationModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md'>
      <div className='relative w-full max-w-2xl rounded-[36px] bg-white p-8 shadow-2xl'>
        <button
          onClick={onClose}
          className='absolute right-5 top-5 rounded-full bg-slate-100 p-3 transition hover:bg-slate-200'
        >
          <X className='h-5 w-5' />
        </button>

        {children}
      </div>
    </div>
  )
}
