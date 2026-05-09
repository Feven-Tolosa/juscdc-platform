export interface Program {
  id: string
  title: string
  description: string
  image: string
  category: string
  status: 'Open' | 'Upcoming' | 'Completed'
  date: string
  location: string
  attendees: number
  features: string[]
}
