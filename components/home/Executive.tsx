import Container from '@/components/ui/Container'

interface Executive {
  name: string
  role: string
  quote: string
}

const executives: Executive[] = [
  {
    name: 'President Name',
    role: 'President',
    quote: 'Leading innovation and empowering students.',
  },
  {
    name: 'VP Name',
    role: 'Vice President',
    quote: 'Connecting students with industry opportunities.',
  },
]

export default function ExecutiveSection() {
  return (
    <section className='py-24'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold'>Leadership</h2>
          <p className='text-[var(--accent)] mt-2'>
            Meet the visionaries behind JUSCDC
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          {executives.map((exec) => (
            <div key={exec.name} className='card p-8'>
              <div className='flex items-center gap-4'>
                <div className='w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-yellow-200' />

                <div>
                  <h3 className='text-lg font-semibold'>{exec.name}</h3>
                  <p className='text-sm text-[var(--accent)]'>{exec.role}</p>
                </div>
              </div>

              <p className='mt-6 text-[var(--accent)] leading-relaxed'>
                {exec.quote}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
