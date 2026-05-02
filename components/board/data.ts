export type Member = {
  name: string
  role: string
  campus: string
  bio: string
  image?: string
}

export const members: Member[] = [
  {
    name: 'President Name',
    role: 'President',
    campus: 'HEB',
    bio: 'Leads the entire organization and strategic direction.',
  },
  {
    name: 'VP Name',
    role: 'Vice President',
    campus: 'HEB',
    bio: 'Supports operations and partnerships.',
  },
  {
    name: 'Main Campus Member',
    role: 'Coordinator',
    campus: 'Main',
    bio: 'Coordinates campus activities.',
  },
  {
    name: 'BECO Member',
    role: 'Lead',
    campus: 'BECO',
    bio: 'Handles business education programs.',
  },
]
