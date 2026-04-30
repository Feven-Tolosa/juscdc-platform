'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className='relative py-28 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 -z-10' />

      <Container>
        <div className='text-center max-w-4xl mx-auto space-y-8'>
          <p className='text-sm tracking-wide text-[var(--accent)] uppercase'>
            Jimma University Career Club
          </p>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Bridging the Gap Between{' '}
            <span className='gradient-text'>Education & Industry</span>
          </h1>

          <p className='text-lg text-[var(--accent)] max-w-2xl mx-auto'>
            Empowering students with real-world skills, mentorship, and career
            opportunities that shape the future.
          </p>

          <div className='flex justify-center gap-4'>
            <Button className='shadow-lg'>Get Started</Button>

            <Button
              variant='secondary'
              className='border border-[var(--border)]'
            >
              View Programs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
