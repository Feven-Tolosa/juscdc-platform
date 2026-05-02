export default function Partners() {
  return (
    <section className='py-16 px-6'>
      <h2 className='text-center text-2xl font-bold mb-10'>Our Partners</h2>

      <div className='flex gap-10 overflow-x-auto grayscale hover:grayscale-0'>
        {[1, 2, 3, 4].map((p) => (
          <div key={p} className='w-40 h-20 bg-gray-200 rounded' />
        ))}
      </div>
    </section>
  )
}
