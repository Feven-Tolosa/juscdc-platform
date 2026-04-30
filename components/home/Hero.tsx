import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className='py-20 md:py-28'>
      <Container>
        <div className='text-center max-w-3xl mx-auto space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Bridging the Gap Between{' '}
            <span className='text-[var(--primary)]'>
              Education and Industry
            </span>
          </h1>

          <p className='text-[var(--accent)] text-lg'>
            Empowering students with skills, connections, and real-world
            opportunities through JUSCDC.
          </p>

          <div className='flex justify-center gap-4'>
            <Button>Join Now</Button>
            <Button variant='secondary'>Explore Programs</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
