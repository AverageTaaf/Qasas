import { MetadataRoute } from 'next'
import prophetsData from '@/data/prophets.json'

export const dynamic = 'force-static'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qasas-prophetic.vercel.app'

  // Base routes
  const routes = [
    '',
    '/about',
    '/references',
    '/contact',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Prophet routes
  const prophetRoutes = prophetsData.map((prophet) => ({
    url: `${baseUrl}/prophet/${prophet.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  return [...routes, ...prophetRoutes]
}
