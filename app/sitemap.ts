import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://rajahammadnaseer.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const sections = ['', '#about', '#skills', '#experience', '#projects', '#contact']

  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: s === '' ? 1 : 0.7,
  }))
}
