import { LucideIcon } from 'lucide-react'

export interface ContactInfoItem {
  title: string
  value: string
  icon: LucideIcon
}

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
}

export interface FAQItem {
  question: string
  answer: string
}
