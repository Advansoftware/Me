import { MetadataRoute } from 'next'

const baseUrl = 'https://brunoantunes.space'

// Datas fixas: new Date() reportaria a data de cada build como se o conteúdo
// tivesse mudado, e o Google passa a ignorar o sinal.
const routes = [
  { path: '', lastModified: '2026-09-15', priority: 1, },
  { path: '/case-study/brazopolis', lastModified: '2026-01-07', priority: 0.8 },
  { path: '/case-study/allinone-converter', lastModified: '2026-09-15', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: 'monthly',
    priority,
  }))
}
