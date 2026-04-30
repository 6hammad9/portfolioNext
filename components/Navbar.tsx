'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Experience', href: '#experience' },
  { num: '04', label: 'Work', href: '#projects' },
  { num: '05', label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-ink-700/50 bg-ink-950/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="#hero"
          className="group flex items-center gap-2 text-ink-100 hover:text-accent transition-colors"
        >
          <span className="display text-2xl leading-none">RHN</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-accent animate-glow-pulse" />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const id = link.href.slice(1)
            const active = activeSection === id
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group flex items-baseline gap-1.5 px-3 py-1.5 rounded-full text-[13px] transition-all duration-300 ${
                    active
                      ? 'bg-ink-800/60 text-ink-100'
                      : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] transition-colors ${
                      active ? 'text-accent' : 'text-ink-500 group-hover:text-accent'
                    }`}
                  >
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink-950 text-[13px] font-medium hover:bg-accent-light transition-colors"
        >
          Hire me
          <span className="text-base leading-none">→</span>
        </a>

        <button
          className="md:hidden text-ink-200 hover:text-accent p-2 -mr-2 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5 items-end">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[5px]' : 'w-5'}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[5px]' : 'w-3'}`} />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink-950/95 backdrop-blur-xl border-b border-ink-700/40 px-6`}
      >
        <ul className="flex flex-col gap-1 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-3 py-2.5 text-ink-200 hover:text-accent transition-colors"
              >
                <span className="font-mono text-[11px] text-ink-500">{link.num}</span>
                <span className="display text-2xl">{link.label}</span>
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink-950 text-sm font-medium"
            >
              Hire me <span>→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
