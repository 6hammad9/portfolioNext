import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://rajahammadnaseer.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Only real routes. The old entries pointed at #about / #projects and friends,
  // which were section anchors in the previous layout and no longer exist.
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
