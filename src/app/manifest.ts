import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ppingpong',
    short_name: 'ppingpong',
    description: 'ppingpong',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#FD8D32',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "maskable"
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}