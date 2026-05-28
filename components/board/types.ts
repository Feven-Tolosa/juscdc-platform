export interface Member {
  id: string
  name: string
  role: string
  bio?: string
  image: string
  campus: string
  category: string
  email?: string
  linkedin?: string
  telegram?: string
  instagram?: string
}

export interface CampusMembers {
  [key: string]: Member[]
}
