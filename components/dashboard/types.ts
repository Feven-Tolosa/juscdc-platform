export interface DashboardUser {
  id: string
  fullName: string
  studentId: string
  email: string
  campus: string
  department: string
  image: string
}

export interface RegisteredProgram {
  id: string
  title: string
  date: string
  status: 'Completed' | 'Ongoing' | 'Upcoming'
}

export interface Certificate {
  id: string
  title: string
  issueDate: string
  fileUrl: string | null
}

export interface Notification {
  id: string
  title: string
  message: string
  isRead: boolean
  createdAt: string
}
