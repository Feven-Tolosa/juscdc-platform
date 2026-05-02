export default function ContactPage() {
  return (
    <div className='py-20 px-6 max-w-xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>

      <form className='flex flex-col gap-4'>
        <input placeholder='Name' className='border p-3 rounded' />
        <input placeholder='Email' className='border p-3 rounded' />
        <input placeholder='Subject' className='border p-3 rounded' />
        <textarea placeholder='Message' className='border p-3 rounded' />

        <button className='bg-[#1e3a8a] text-white py-3 rounded'>
          Send Message
        </button>
      </form>
    </div>
  )
}
