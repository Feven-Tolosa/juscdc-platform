import Container from '@/components/ui/Container'

export default function About() {
  return (
    <section className='py-24 bg-[var(--muted)]'>
      <Container>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-bold mb-4'>About JUSCDC</h2>

            <p className='text-[var(--accent)] leading-relaxed mb-4'>
              Founded in 2024, JUSCDC bridges academic learning with real-world
              industry demands.
            </p>

            <p className='text-[var(--accent)] leading-relaxed'>
              We provide leadership training, networking opportunities, and
              career insights for students.
            </p>
          </div>

          <div className='h-80 rounded-xl bg-gradient-to-br from-blue-100 to-yellow-100' />
        </div>
      </Container>
    </section>
  )
}
