export default function MemberCard({
  name,
  role,
}: {
  name: string
  role: string
}) {
  return (
    <div className='p-6 bg-white rounded-xl shadow hover:shadow-lg transition'>
      <div className='w-20 h-20 bg-gray-200 rounded-full mb-4' />
      <h3 className='font-bold'>{name}</h3>
      <p className='text-sm text-gray-500'>{role}</p>
    </div>
  )
}
