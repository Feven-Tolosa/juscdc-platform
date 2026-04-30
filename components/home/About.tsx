import Container from '@/components/ui/Container'

export default function About() {
  return (
    <section className='py-20'>
      <Container>
        <div className='max-w-3xl space-y-6'>
          <h2 className='text-3xl font-bold'>About JUSCDC</h2>

          <p className='text-[var(--accent)]'>
            Established in 2024, Jimma University Student Career Development
            Club (JUSCDC) is dedicated to bridging the gap between academic
            learning and industry demands.
          </p>

          <p className='text-[var(--accent)]'>
            Our mission is to equip students with practical skills, career
            insights, and networking opportunities to thrive in today’s
            competitive job market.
          </p>
        </div>
      </Container>
    </section>
  )
}
