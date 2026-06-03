import type { Metadata } from 'next'
import PaperOverlays from '@/components/PaperOverlays'
import SiteSchematic from '@/components/SiteSchematic'
import './globals.css'

// Fonts (Anton, Archivo, Newsreader, Space Mono) are loaded via the Google
// Fonts <link> in <head> below — same source as the design reference.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://rajahammadnaseer.com'

const NAME = 'Raja Hammad Naseer'
const TITLE = `${NAME} — Fullstack Engineer & AI Developer`
const DESCRIPTION =
  'Raja Hammad Naseer — Fullstack Engineer building production React, Node.js, and Docker web products with AI integrated (RAG, LLM, computer vision). M.Sc. Computer & Systems Engineering at TU Ilmenau, Germany. Open to Werkstudent and freelance roles.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'Raja Hammad Naseer',
    'Hammad Naseer',
    'Raja Naseer',
    'Fullstack Engineer Germany',
    'Werkstudent Fullstack',
    'React Developer Ilmenau',
    'Next.js Developer Germany',
    'TU Ilmenau Computer Engineering',
    'AI Engineer Germany',
    'RAG Pipelines',
    'YOLOv8 Engineer',
    'Node.js Developer',
    'Docker CI/CD',
    'Werkstudent Thüringen',
    'Pakistan Software Engineer Germany',
  ],
  creator: NAME,
  publisher: NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
    },
  },
  openGraph: {
    type: 'profile',
    siteName: `${NAME} · Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    firstName: 'Raja Hammad',
    lastName: 'Naseer',
    username: '6hammad9',
    // og:image is supplied by app/opengraph-image.tsx (the Plakat cover)
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@6hammad9',
    // twitter:image is supplied by app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'technology',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: NAME,
  alternateName: ['Hammad Naseer', 'Raja Naseer'],
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: 'Fullstack Engineer',
  description: DESCRIPTION,
  email: 'hammadnaseer2230@gmail.com',
  telephone: '+49 15252067067',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ilmenau',
    addressRegion: 'Thüringen',
    addressCountry: 'DE',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Technische Universität Ilmenau',
      sameAs: 'https://www.tu-ilmenau.de/',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'SZABIST',
      sameAs: 'https://szabist.edu.pk/',
    },
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Docker',
    'REST API design',
    'MongoDB',
    'PostgreSQL',
    'LLM Integration',
    'Retrieval-Augmented Generation',
    'YOLOv8',
    'ONNX Runtime',
    'Computer Vision',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'English', alternateName: 'en' },
    { '@type': 'Language', name: 'German', alternateName: 'de' },
    { '@type': 'Language', name: 'Urdu', alternateName: 'ur' },
  ],
  sameAs: [
    'https://github.com/6hammad9',
    'https://www.linkedin.com/in/6hammad9',
  ],
  nationality: { '@type': 'Country', name: 'Pakistan' },
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '',
      addressCountry: 'DE',
    },
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${NAME} — Portfolio`,
  description: DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#person` },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink antialiased font-serif">
        <PaperOverlays />
        <SiteSchematic />
        {children}
      </body>
    </html>
  )
}
