export default function DashboardPage() {
  return (
    <div className='py-20 px-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Member Dashboard</h1>

      <div className='bg-white p-6 rounded-xl shadow'>
        <p>Your Digital ID will appear here</p>

        <button className='mt-4 bg-[#eab308] px-4 py-2 rounded'>
          Download ID
        </button>
      </div>
    </div>
  )
}
