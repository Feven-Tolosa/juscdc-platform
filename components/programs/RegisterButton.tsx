// components/programs/RegisterButton.tsx
'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import RegistrationModal from './RegistrationModal'
import RegistrationForm from './RegistrationForm'

interface RegisterButtonProps {
  programId: string
  programTitle: string
}

export default function RegisterButton({
  programId,
  programTitle,
}: RegisterButtonProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='group/btn inline-flex items-center gap-2 rounded-2xl bg-[#112662] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#172554]'
      >
        Register Now
        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
      </button>

      {showModal && (
        <RegistrationModal onClose={() => setShowModal(false)}>
          <RegistrationForm
            programId={programId}
            programTitle={programTitle}
            onClose={() => setShowModal(false)}
          />
        </RegistrationModal>
      )}
    </>
  )
}
