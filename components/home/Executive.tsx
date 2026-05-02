function ExecutiveCard({ name, role }: { name: string; role: string }) {
  return (
    <div className='bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition'>
      <div className='w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4' />
      <h3 className='font-bold text-lg'>{name}</h3>
      <p className='text-sm text-gray-500'>{role}</p>
      <p className='mt-3 text-sm text-gray-600'>
        Empowering students to lead and innovate.
      </p>
    </div>
  )
}

export default function ExecutiveSection() {
  return (
    <section className='py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
      <ExecutiveCard name='President Name' role='President' />
      <ExecutiveCard name='VP Name' role='Vice President' />
    </section>
  )
}
