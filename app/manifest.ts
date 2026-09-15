import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bruno Antunes | Full Stack Developer',
    short_name: 'Bruno Dev',
    description: 'Desenvolvedor full stack em Brazópolis/MG. React, Next.js, Node.js, NestJS, PHP, Flutter e IA aplicada a produto.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
