import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Qasas - Stories of the 25 Prophets',
    short_name: 'Qasas',
    description: 'Explore the complete and detailed stories of the 25 Prophets mentioned in the Holy Quran.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdf8f0',
    theme_color: '#1a5f54',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
