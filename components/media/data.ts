import { MediaEvent } from './types'

export const mediaEvents: MediaEvent[] = [
  {
    id: 'leadership-summit',
    title: 'Leadership Summit 2026',
    description:
      'A large-scale leadership and innovation summit for students across campuses.',
    date: 'May 2026',
    coverImage: '/media/event-1/cover.jpg',

    gallery: [
      {
        id: 1,
        image: '/media/event-1/1.jpg',
      },
      {
        id: 2,
        image: '/media/event-1/2.jpg',
      },
      {
        id: 3,
        image: '/media/event-1/3.jpg',
      },
      {
        id: 4,
        image: '/media/event-1/4.jpg',
      },
    ],

    videos: [
      {
        title: 'Event Highlights',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    coverImage: '/media/event-2/cover.jpg',

    gallery: [
      {
        id: 1,
        image: '/media/event-2/1.jpg',
      },
      {
        id: 2,
        image: '/media/event-2/2.jpg',
      },
      {
        id: 3,
        image: '/media/event-2/3.jpg',
      },
    ],

    videos: [
      {
        title: 'Workshop Recording',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        platform: 'youtube',
      },
    ],
  },
]
