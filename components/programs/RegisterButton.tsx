'use client'

import { useState } from 'react'

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
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='w-full rounded-2xl bg-[#1e3a8a] px-5 py-4 font-semibold text-white transition hover:bg-[#172554]'
      >
        Internal Registration
      </button>

      {open && (
        <RegistrationModal onClose={() => setOpen(false)}>
          <RegistrationForm
            programId={programId}
            programTitle={programTitle}
            onClose={() => setOpen(false)}
          />
        </RegistrationModal>
      )}
    </>
  )
}
