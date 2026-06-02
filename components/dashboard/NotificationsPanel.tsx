'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Notification } from './types'
import { BellOff } from 'lucide-react'

interface NotificationsPanelProps {
  notifications: Notification[]
}

export default function NotificationsPanel({
  notifications: initial,
}: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState(initial)
  const supabase = createClient()

  const markRead = async (id: string) => {
    // Optimistic update
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    )
    await supabase.from('notifications').update({ is_read: true }).eq('id', id)
  }

  const markAllRead = async () => {
    const unreadIds = notifications.filter((n) => !n.isRead).map((n) => n.id)
    if (unreadIds.length === 0) return
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
    await supabase
      .from('notifications')
      .update({ is_read: true })
      .in('id', unreadIds)
  }

  const unread = notifications.filter((n) => !n.isRead).length

  return (
    <div className='rounded-[36px] bg-white p-8 shadow-xl'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold text-slate-900'>
          Notifications
          {unread > 0 && (
            <span className='ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white'>
              {unread}
            </span>
          )}
        </h2>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            className='text-sm font-medium text-[#112662] hover:underline'
          >
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className='mt-10 flex flex-col items-center gap-3 py-10 text-slate-400'>
          <BellOff className='h-12 w-12 opacity-40' />
          <p className='text-lg font-medium'>You&apos;re all caught up</p>
        </div>
      ) : (
        <div className='mt-8 space-y-5'>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.isRead && markRead(notification.id)}
              className={`cursor-pointer rounded-2xl border p-5 transition ${
                notification.isRead
                  ? 'border-slate-200 bg-white'
                  : 'border-[#112662]/20 bg-blue-50/50'
              }`}
            >
              <div className='flex items-start justify-between gap-5'>
                <div className='flex items-start gap-3'>
                  {!notification.isRead && (
                    <span className='mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#112662]' />
                  )}
                  <div>
                    <h3 className='text-lg font-bold text-slate-900'>
                      {notification.title}
                    </h3>
                    <p className='mt-2 leading-7 text-slate-600'>
                      {notification.message}
                    </p>
                  </div>
                </div>
                <span className='whitespace-nowrap text-sm text-slate-400'>
                  {notification.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
