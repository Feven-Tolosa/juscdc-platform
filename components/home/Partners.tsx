import Container from '@/components/ui/Container'

export default function Partners() {
  return (
    <section className='py-20'>
      <Container>
        <p className='text-center text-sm text-[var(--accent)] mb-8'>
          Trusted by partners and organizations
        </p>

        <div className='flex justify-center gap-12 flex-wrap opacity-70'>
          {['Partner 1', 'Partner 2', 'Partner 3'].map((p) => (
            <div
              key={p}
              className='text-lg hover:opacity-100 transition cursor-pointer'
            >
              {p}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
