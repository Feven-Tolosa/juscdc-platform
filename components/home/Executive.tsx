import Container from '@/components/ui/Container'

interface Executive {
  name: string
  role: string
  quote: string
  image: string
}

const executives: Executive[] = [
  {
    name: 'President Name',
    role: 'President',
    quote: 'Leading innovation and student empowerment.',
    image: '/president.jpg',
  },
  {
    name: 'VP Name',
    role: 'Vice President',
    quote: 'Building bridges to future careers.',
    image: '/vp.jpg',
  },
]

export default function ExecutiveSection() {
  return (
    <section className='py-20 bg-[var(--muted)]'>
      <Container>
        <div className='grid md:grid-cols-2 gap-8'>
          {executives.map((exec) => (
            <div
              key={exec.name}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition'
            >
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-gray-300' />
                <div>
                  <h3 className='font-semibold'>{exec.name}</h3>
                  <p className='text-sm text-[var(--accent)]'>{exec.role}</p>
                </div>
              </div>

              <p className='mt-4 text-[var(--accent)]'>{exec.quote}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
