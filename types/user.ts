export type UserRole = 'member' | 'admin'

export type Campus = 'Main' | 'BECO' | 'JiT' | 'AGRI'

export interface UserProfile {
  id: string
  full_name: string
  email: string
  student_id: string
  campus: Campus
  role: UserRole
  created_at: string
}
