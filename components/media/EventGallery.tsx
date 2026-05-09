'use client'

import { useState } from 'react'
import Image from 'next/image'

import { MediaImage } from './types'
import ImageLightbox from './ImageLightbox'

interface EventGalleryProps {
  gallery: MediaImage[]
}

export default function EventGallery({ gallery }: EventGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {gallery.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image.image)}
            className='group relative h-72 overflow-hidden rounded-[30px]'
          >
            <Image
              src={image.image}
              alt='Event gallery'
              fill
              className='object-cover transition duration-700 group-hover:scale-110'
            />

            <div className='absolute inset-0 bg-black/20 transition group-hover:bg-black/40' />
          </button>
        ))}
      </div>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}
