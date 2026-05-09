export default function MapSection() {
  return (
    <div className='overflow-hidden rounded-[36px] bg-white shadow-xl'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18...'
        loading='lazy'
        className='h-[450px] w-full border-0'
      />

      <div className='p-6'>
        <h3 className='text-2xl font-bold text-slate-900'>Jimma University</h3>

        <p className='mt-2 text-slate-600'>Jimma, Oromia, Ethiopia</p>
      </div>
    </div>
  )
}
