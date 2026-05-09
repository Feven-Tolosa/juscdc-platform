import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'

import ProfileCard from '@/components/dashboard/ProfileCard'
import DigitalIDCard from '@/components/dashboard/DigitalIDCard'

import RegisteredPrograms from '@/components/dashboard/RegisteredPrograms'

import CertificateVault from '@/components/dashboard/CertificateVault'

import NotificationsPanel from '@/components/dashboard/NotificationsPanel'

import {
  user,
  programs,
  certificates,
  notifications,
} from '@/components/dashboard/data'

export default function DashboardPage() {
  return (
    <main className='flex min-h-screen bg-[#f8fafc] pt-24'>
      <DashboardSidebar />

      <div className='flex-1'>
        <DashboardHeader />

        <div className='space-y-10 p-6 lg:p-10'>
          {/* Top */}
          <div className='grid gap-10 xl:grid-cols-3'>
            <ProfileCard user={user} />

            <div className='xl:col-span-2'>
              <DigitalIDCard user={user} />
            </div>
          </div>

          {/* Programs */}
          <RegisteredPrograms programs={programs} />

          {/* Certificates */}
          <CertificateVault certificates={certificates} />

          {/* Notifications */}
          <NotificationsPanel notifications={notifications} />
        </div>
      </div>
    </main>
  )
}
