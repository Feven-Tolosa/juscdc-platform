export default function ProgramCard({ title }: { title: string }) {
  return (
    <div className='p-6 rounded-xl shadow bg-white'>
      <h3 className='font-bold text-lg'>{title}</h3>
      <p className='text-sm mt-2 text-gray-600'>
        Develop leadership and career-ready skills.
      </p>

      <button className='mt-4 bg-[#1e3a8a] text-white px-4 py-2 rounded'>
        Register
      </button>
    </div>
  )
}
