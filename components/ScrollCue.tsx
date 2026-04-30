'use client'

import Link from 'next/link'

type Props = {
  href: string
  label: string
  hint?: string
}

export default function ScrollCue({ href, label, hint = 'keep scrolling' }: Props) {
  return (
    <div className="flex justify-center pt-16 pb-4">
      <Link
        href={href}
        className="group flex flex-col items-center gap-2 text-[#406882] hover:text-[#6998AB] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          {hint}
        </span>
        <span className="text-xs font-mono tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
        <span className="relative block w-px h-12 overflow-hidden mt-1">
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6998AB] to-transparent animate-scrollPulse" />
        </span>
      </Link>
    </div>
  )
}
