import Container from '@/components/ui/Container'

const partners = [
  { name: 'Company 1', url: '#' },
  { name: 'Company 2', url: '#' },
  { name: 'Company 3', url: '#' },
]

export default function Partners() {
  return (
    <section className='py-16 bg-[var(--muted)]'>
      <Container>
        <div className='flex flex-wrap justify-center gap-8'>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target='_blank'
              className='text-gray-400 hover:text-black transition'
            >
              {partner.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
