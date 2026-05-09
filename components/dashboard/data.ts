import {
  DashboardUser,
  RegisteredProgram,
  Certificate,
  Notification,
} from './types'

export const user: DashboardUser = {
  fullName: 'Feven Tolosa',
  studentId: 'JU12345',
  email: 'feven@example.com',
  campus: 'Main Campus',
  department: 'Software Engineering',
  image: '/users/user.jpg',
}

export const programs: RegisteredProgram[] = [
  {
    id: '1',
    title: 'Leadership Training',
    date: 'May 2026',
    status: 'Completed',
  },

  {
    id: '2',
    title: 'JU-LEAP',
    date: 'June 2026',
    status: 'Ongoing',
  },
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Leadership Training Certificate',
    issueDate: 'May 2026',
    fileUrl: '/certificates/certificate.pdf',
  },
]

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New Program Available',
    message: 'Registration is now open for JU-LEAP Career Program.',
    createdAt: '2 hours ago',
  },

  {
    id: '2',
    title: 'Certificate Ready',
    message: 'Your Leadership Training certificate is now available.',
    createdAt: '1 day ago',
  },
]
