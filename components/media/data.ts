import { MediaEvent } from './types'

export const mediaEvents: MediaEvent[] = [
  {
    id: 'leadership-summit',
    title: 'Leadership Summit 2026',
    description:
      'A large-scale leadership and innovation summit for students across campuses.',
    date: 'May 2026',
    coverImage: '/logo.jpg.jpg',

    gallery: [
      {
        id: 1,
        image: '/logo.jpg',
      },
      {
        id: 2,
        image: '/logo.jpg',
      },
      {
        id: 3,
        image: '/logo.jpg',
      },
      {
        id: 4,
        image: '/logo.jpg',
      },
    ],

    videos: [
      {
        title: 'Event Highlights',
        url: 'https://youtu.be/zoOMeZASj7U?si=IgMoxCg7w5-bnvAs',
        platform: 'youtube',
      },
    ],
  },

  {
    id: 'ju-leap',
    title: 'JU-LEAP Career Program',
    description:
      'Professional development and networking program for university students.',
    date: 'April 2026',
    coverImage: '/logo.jpg',

    gallery: [
      {
        id: 1,
        image: '/logo.jpg',
      },
      {
        id: 2,
        image: '/logo.jpg',
      },
      {
        id: 3,
        image: '/logo.jpg',
      },
    ],

    videos: [
      {
        title: 'Workshop Recording',
        url: 'https://youtu.be/zoOMeZASj7U?si=IgMoxCg7w5-bnvAs',
        platform: 'youtube',
      },
    ],
  },
]
