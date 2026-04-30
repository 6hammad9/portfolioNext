import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raja Hammad Naseer — Fullstack Engineer',
  description:
    'Fullstack Engineer building production React + Node web products with AI inside. M.Sc. student at TU Ilmenau, available for Werkstudent roles in Germany.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} bg-ink-950 text-ink-100 antialiased font-sans selection:bg-amber-400/30 selection:text-amber-100`}
      >
        {children}
      </body>
    </html>
  )
}
