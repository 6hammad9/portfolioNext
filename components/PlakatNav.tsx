'use client'

import { useEffect, useState } from 'react'
import { nav } from '@/lib/plakat'

export default function PlakatNav() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const secs = document.querySelectorAll<HTMLElement>('section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-30% 0px -55% 0px' }
    )
    secs.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="topnav">
        <div className="wrap">
          <a className="brand" href="#top">
            <span className="sq" />
            R. H. Naseer
          </a>
          <nav className="desktop">
            {nav.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? 'active' : undefined}
              >
                {l.de} {l.en && <span className="de">/ {l.en}</span>}
              </a>
            ))}
          </nav>
          <button
            className="navtoggle"
            aria-label="Menü öffnen / Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`navsheet${open ? ' open' : ''}`}>
        <div className="wrap">
          {nav.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.de} {l.en && <span className="de">/ {l.en}</span>}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
