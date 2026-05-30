import { ReactNode } from 'react'

// Small robotics schematic icons for the section-head meta slot.
// Copied verbatim from portfolio-plakat.html (.sec-head .motif).
const motifs: Record<string, ReactNode> = {
  about: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="13" y="13" width="18" height="18" rx="2" />
      <circle cx="22" cy="22" r="3" />
      <path d="M17 13V8M27 13V8M17 36v-5M27 36v-5M13 17H8M13 27H8M36 17h-5M36 27h-5" />
    </svg>
  ),
  layers: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M22 8l14 7-14 7-14-7 14-7zM8 22l14 7 14-7M8 29l14 7 14-7" />
    </svg>
  ),
  work: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M10 16h16l4 4v8H10z" />
      <path d="M30 20l6-3v12l-6-3" />
      <path d="M6 34l10-6M6 38l14-7" />
    </svg>
  ),
  rack: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="9" y="20" width="26" height="13" rx="2" />
      <circle cx="16" cy="36" r="4" />
      <circle cx="28" cy="36" r="4" />
      <path d="M22 20v-6" />
      <circle cx="22" cy="11" r="3" />
    </svg>
  ),
  wave: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M7 30c5 0 5-14 10-14s5 14 10 14 5-9 10-9" />
      <path d="M7 37h30" />
    </svg>
  ),
  nodes: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="17" y="17" width="10" height="10" rx="2" />
      <circle cx="11" cy="11" r="5" />
      <circle cx="33" cy="11" r="5" />
      <circle cx="11" cy="33" r="5" />
      <circle cx="33" cy="33" r="5" />
      <path d="M15 15l-2-2M29 15l2-2M15 29l-2 2M29 29l2 2" />
    </svg>
  ),
}

type Props = {
  no: string
  de: string
  title: ReactNode
  motif: keyof typeof motifs
  metaLabel: string
}

export default function SectionHeader({ no, de, title, motif, metaLabel }: Props) {
  return (
    <div className="sec-head" data-reveal>
      <div className="sec-no">{no}</div>
      <div className="ttl">
        <span className="de">{de}</span>
        <h2>{title}</h2>
      </div>
      <div className="meta">
        <span className="motif">{motifs[motif]}</span>
        {metaLabel}
      </div>
    </div>
  )
}
