export interface Program {
  id: string

  title: string
  slug?: string

  description?: string
  long_description?: string

  image?: string

  category?: string
  campus?: string
  date: string
  location?: string
  attendees?: number
  features?: string[]
  status?: 'upcoming' | 'ongoing' | 'completed'

  start_date?: string
  end_date?: string
  application_deadline?: string

  registration_link?: string

  featured?: boolean
}
