import { MetadataRoute } from 'next'
import prophetsData from '@/data/prophets.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qasas-prophetic.vercel.app'

  // Base routes
  const routes = [
    '',
    '/about',
    '/references',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Prophet routes
  const prophetRoutes = prophetsData.map((prophet) => ({
    url: `${baseUrl}/prophet/${prophet.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...prophetRoutes]
}
