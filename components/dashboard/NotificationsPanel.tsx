import { Notification } from './types'

interface NotificationsPanelProps {
  notifications: Notification[]
}

export default function NotificationsPanel({
  notifications,
}: NotificationsPanelProps) {
  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>Notifications</h2>

      <div className='mt-8 space-y-5'>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className='rounded-2xl border border-slate-200 p-5'
          >
            <div className='flex items-start justify-between gap-5'>
              <div>
                <h3 className='text-lg font-bold text-slate-900'>
                  {notification.title}
                </h3>

                <p className='mt-2 leading-7 text-slate-600'>
                  {notification.message}
                </p>
              </div>

              <span className='whitespace-nowrap text-sm text-slate-400'>
                {notification.createdAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
