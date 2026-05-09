import { Mail, Phone, MapPin, Send } from 'lucide-react'

import { ContactInfoItem, SocialLink, FAQItem } from './types'

export const contactInfo: ContactInfoItem[] = [
  {
    title: 'Email',
    value: 'juscdc@ju.edu.et',
    icon: Mail,
  },

  {
    title: 'Phone',
    value: '+251 900 000 000',
    icon: Phone,
  },

  {
    title: 'Location',
    value: 'Jimma University, Ethiopia',
    icon: MapPin,
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Send,
  },

  {
    name: 'Telegram',
    url: 'https://t.me',
    icon: Send,
  },

  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Send,
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'How can I join JUSCDC?',
    answer:
      'You can register through our membership portal and participate in our programs and trainings.',
  },

  {
    question: 'Are programs free for students?',
    answer: 'Most JUSCDC programs are free for Jimma University students.',
  },

  {
    question: 'Can external organizations partner with JUSCDC?',
    answer:
      'Yes. We welcome collaborations with organizations, companies, and institutions.',
  },
]
