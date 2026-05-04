'use client'

import Link from 'next/link'
import Image from 'next/image'
import { personalInfo, cvs } from '@/lib/data'
import Marquee from '@/components/Marquee'
import Spotlight from '@/components/Spotlight'

const TAPE = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'CI/CD',
  'Tailwind',
  'REST APIs',
  'LangChain',
  'OpenAI',
  'YOLOv8',
  'ONNX',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-ink-950"
    >
      <Spotlight />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 mesh-bg pointer-events-none" />

      {/* Side rails — section number on left, name on right */}
      <div className="hidden lg:flex absolute left-6 top-0 bottom-0 flex-col items-center justify-end pb-32 z-10">
        <span className="label rotate-180" style={{ writingMode: 'vertical-rl' }}>
          00 — Intro
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-ink-600 to-transparent mt-4" />
      </div>
      <div className="hidden lg:flex absolute right-6 top-0 bottom-0 flex-col items-center justify-end pb-32 z-10">
        <a
          href={`mailto:${personalInfo.email}`}
          className="label hover:text-accent transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          {personalInfo.email}
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-ink-600 to-transparent mt-4" />
      </div>

      <div className="flex-1 flex items-center pt-28 pb-12 px-6 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left — type column */}
          <div className="lg:col-span-8">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-3.5 py-1.5 rounded-full glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-[11px] tracking-wide text-ink-200 font-mono">
                Available · Werkstudent · Germany
              </span>
            </div>

            {/* Display name — single H1 for SEO */}
            <h1 className="display text-[clamp(2.75rem,9vw,8rem)] text-ink-50 mb-8 tracking-tightest">
              <span className="block">Raja Hammad</span>
              <span className="flex items-end gap-4 flex-wrap">
                <span className="display-italic text-accent">Naseer.</span>
                <span className="hidden md:inline-block w-16 h-px bg-ink-500 mb-5" />
                <span className="text-sm font-mono text-ink-300 mb-2 tracking-wide normal-case">
                  [ fullstack engineer ]
                </span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-balance max-w-xl text-base md:text-lg text-ink-300 leading-relaxed mb-10">
              I build production web products with{' '}
              <span className="text-ink-100">React, Node, and Docker</span> —
              including products with <span className="display-italic text-cool">AI built in</span>.
              M.Sc. student at TU Ilmenau.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-light transition-all hover:gap-3"
              >
                View work
                <span className="text-lg leading-none">→</span>
              </Link>

              <a
                href={cvs.find((c) => c.primary)?.href ?? cvs[0].href}
                download
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-600 text-ink-100 text-sm hover:border-accent hover:text-accent transition-all"
              >
                <span>Download CV</span>
                <span className="font-mono text-[11px] text-ink-400 group-hover:text-accent transition-colors">.pdf</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-600 text-ink-100 text-sm hover:border-accent hover:text-accent transition-all"
              >
                Get in touch
              </Link>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm text-ink-300 hover:text-ink-100 transition-colors link-underline"
              >
                GitHub ↗
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm text-ink-300 hover:text-ink-100 transition-colors link-underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — portrait column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-full aspect-[4/5]">

              {/* Soft glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-cool/15 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-ink-700/60 bg-ink-800/40 shadow-2xl shadow-ink-950/50">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Raja Hammad Naseer"
                  fill
                  sizes="(max-width: 1024px) 320px, 25vw"
                  priority
                  className="object-cover object-top grayscale contrast-[1.05] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />

                {/* Warm duotone overlay (multiplied amber) — fades on hover */}
                <div
                  className="absolute inset-0 mix-blend-color pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
                  style={{ backgroundColor: 'rgba(255, 180, 84, 0.22)' }}
                />

                {/* Bottom dark gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent pointer-events-none" />

                {/* Corner crosshair markers */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent/60" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/60" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent/60" />

                {/* Caption inside frame */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent/80 mb-1">
                    Subject
                  </p>
                  <p className="display text-xl text-ink-50 leading-tight">
                    Raja H. Naseer
                  </p>
                  <p className="font-mono text-[10px] text-ink-300 mt-0.5">
                    Ilmenau · DE — 2026
                  </p>
                </div>
              </div>

              {/* Floating ID badge */}
              <div className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500">
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent leading-none mb-1">
                  ID · 001
                </p>
                <p className="text-[11px] text-ink-100 font-medium leading-none">
                  RHN / FS-ENG
                </p>
              </div>

              {/* Floating status dot */}
              <div className="absolute -bottom-3 -left-3 glass rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-200">
                  Online
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* KPI strip + marquee tape */}
      <div className="relative z-10 border-t border-ink-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: '2+', l: 'years industry experience' },
            { v: '6', l: 'production systems shipped' },
            { v: 'TU Ilmenau', l: 'M.Sc. Computer & Systems Eng.' },
            { v: 'EN · DE', l: 'C1 · B1' },
          ].map((s) => (
            <div key={s.l}>
              <p className="display text-2xl md:text-3xl text-ink-100">{s.v}</p>
              <p className="label mt-1 normal-case tracking-widest">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-700/50 py-5">
          <Marquee speed="slow">
            {TAPE.map((t) => (
              <span
                key={t}
                className="display text-3xl md:text-4xl text-ink-300 hover:text-accent transition-colors"
              >
                {t}
                <span className="ml-12 text-ink-700">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
