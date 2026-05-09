'use client'

import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  image: string
  onClose: () => void
}

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6'>
      <button
        onClick={onClose}
        className='absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20'
      >
        <X className='h-6 w-6' />
      </button>

      <div className='relative h-[80vh] w-full max-w-6xl'>
        <Image
          src={image}
          alt='Gallery image'
          fill
          className='object-contain'
        />
      </div>
    </div>
  )
}
