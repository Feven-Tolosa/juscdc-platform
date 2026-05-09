export interface Member {
  name: string
  role: string
  image: string
  bio?: string
  linkedin?: string
  telegram?: string
  instagram?: string
  email?: string
}

export interface CampusMembers {
  [key: string]: Member[]
}
