'use client'

import { useEffect } from 'react'

// Ported from the handoff micro.js: scroll-reveal (IntersectionObserver +
// reduced-motion + 2.5s failsafe) and count-up stats. Side-effect only —
// keeps every section a server component while honouring the documented motion.
export default function Reveals() {
  useEffect(() => {
    // --- scroll reveals ---
    const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const reduce = !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target as HTMLElement
              const d = el.getAttribute('data-delay')
              if (d) el.style.transitionDelay = `${d}ms`
              el.classList.add('is-in')
              obs.unobserve(el)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      )
      els.forEach((el) => io.observe(el))
      // Failsafe: reveal everything if the observer never fires.
      const t = setTimeout(() => {
        if (!els.some((e) => e.classList.contains('is-in'))) {
          els.forEach((e) => e.classList.add('is-in'))
        }
      }, 2500)
      // --- count-up stats ---
      const counters = document.querySelectorAll<HTMLElement>('[data-count]')
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return
            const el = en.target as HTMLElement
            const target = parseFloat(el.getAttribute('data-count') || '0')
            const dec = Number(el.getAttribute('data-dec') || 0)
            const suffix = el.getAttribute('data-suffix') || ''
            const prefix = el.getAttribute('data-prefix') || ''
            let start: number | null = null
            const dur = 1400
            const tick = (ts: number) => {
              if (start === null) start = ts
              const p = Math.min(1, (ts - start) / dur)
              const e = 1 - Math.pow(1 - p, 3)
              el.textContent = prefix + (target * e).toFixed(dec) + suffix
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            cio.unobserve(el)
          })
        },
        { threshold: 0.6 }
      )
      counters.forEach((el) => cio.observe(el))

      return () => {
        clearTimeout(t)
        io.disconnect()
        cio.disconnect()
      }
    }
  }, [])

  return null
}
