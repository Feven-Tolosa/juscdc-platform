export interface DashboardUser {
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
  fileUrl: string
}

export interface Notification {
  id: string
  title: string
  message: string
  createdAt: string
}
