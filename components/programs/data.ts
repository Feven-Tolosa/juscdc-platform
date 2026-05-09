import { Program } from './types'

export const programs: Program[] = [
  {
    id: 'leadership-training',
    title: 'Leadership Training',
    description:
      'Develop leadership, communication, teamwork, and decision-making skills through practical workshops.',
    image: '/programs/leadership.jpg',
    category: 'Leadership',
    status: 'Open',
    date: 'May 25, 2026',
    location: 'Jimma University Main Campus',
    attendees: 250,
    features: [
      'Leadership Skills',
      'Team Collaboration',
      'Public Speaking',
      'Networking',
    ],
  },

  {
    id: 'ju-leap',
    title: 'JU-LEAP',
    description:
      'A professional career acceleration initiative connecting students with industry opportunities.',
    image: '/programs/ju-leap.jpg',
    category: 'Career Development',
    status: 'Upcoming',
    date: 'June 10, 2026',
    location: 'BECO Campus',
    attendees: 400,
    features: [
      'Industry Mentorship',
      'Career Coaching',
      'CV Review',
      'Internship Opportunities',
    ],
  },

  {
    id: 'career-readiness',
    title: 'Career Readiness Workshop',
    description:
      'Prepare students for the modern workplace through interview preparation and CV optimization.',
    image: '/programs/career.jpg',
    category: 'Workshop',
    status: 'Open',
    date: 'May 30, 2026',
    location: 'JiT Campus',
    attendees: 180,
    features: [
      'Resume Building',
      'Interview Practice',
      'LinkedIn Optimization',
      'Portfolio Review',
    ],
  },
]
