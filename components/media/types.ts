export interface MediaImage {
  id: number
  image: string
}

export interface EventVideo {
  title: string
  url: string
  platform: 'youtube' | 'telegram'
}

export interface MediaEvent {
  id: string
  title: string
  description: string
  date: string
  coverImage: string
  gallery: MediaImage[]
  videos: EventVideo[]
}
