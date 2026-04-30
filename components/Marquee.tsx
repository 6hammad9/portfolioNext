import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  speed?: 'normal' | 'slow'
  reverse?: boolean
  className?: string
}

export default function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  className = '',
}: Props) {
  return (
    <div className={`relative overflow-hidden marquee-mask ${className}`}>
      <div
        className={`flex w-max gap-12 ${
          speed === 'slow' ? 'animate-marquee-x-slow' : 'animate-marquee-x'
        }`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
