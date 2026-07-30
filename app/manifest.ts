import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raphael Okonmah — Portfolio',
    short_name: 'Raphael Okonmah',
    description:
      'Full Stack Product Engineer building web applications, business systems, and deployed solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F3F1',
    theme_color: '#1C4E68',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
