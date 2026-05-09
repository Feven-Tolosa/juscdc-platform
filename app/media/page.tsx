import MediaHero from '@/components/media/MediaHero'
import EventCard from '@/components/media/EventCard'

import { mediaEvents } from '@/components/media/data'

export default function MediaPage() {
  return (
    <main className='min-h-screen bg-[#f8fafc]'>
      <MediaHero />

      <section className='mx-auto max-w-7xl space-y-20 px-6 py-24 lg:px-12'>
        {mediaEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  )
}
