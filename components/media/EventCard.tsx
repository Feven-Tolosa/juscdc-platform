import Image from 'next/image'

import { MediaEvent } from './types'
import EventGallery from './EventGallery'
import VideoSection from './VideoSection'

interface EventCardProps {
  event: MediaEvent
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className='overflow-hidden rounded-[40px] bg-white shadow-xl'>
      {/* Cover */}
      <div className='relative h-[500px] overflow-hidden'>
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className='object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

        <div className='absolute bottom-10 left-10'>
          <div className='inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900'>
            {event.date}
          </div>

          <h2 className='mt-5 text-5xl font-extrabold text-white'>
            {event.title}
          </h2>

          <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-200'>
            {event.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className='p-10'>
        {/* Gallery */}
        <div>
          <h3 className='text-3xl font-bold text-slate-900'>Event Gallery</h3>

          <EventGallery gallery={event.gallery} />
        </div>

        {/* Videos */}
        {event.videos.length > 0 && (
          <div className='mt-16'>
            <h3 className='text-3xl font-bold text-slate-900'>Event Videos</h3>

            <VideoSection videos={event.videos} />
          </div>
        )}
      </div>
    </section>
  )
}
