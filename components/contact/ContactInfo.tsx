import { contactInfo } from './data'

export default function ContactInfo() {
  return (
    <div className='space-y-6'>
      {contactInfo.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className='rounded-[30px] bg-white p-6 shadow-xl'
          >
            <div className='flex items-start gap-5'>
              <div className='rounded-2xl bg-[#1e3a8a]/10 p-4 text-[#1e3a8a]'>
                <Icon className='h-6 w-6' />
              </div>

              <div>
                <h3 className='text-xl font-bold text-slate-900'>
                  {item.title}
                </h3>

                <p className='mt-2 text-slate-600'>{item.value}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
