import { tickerItems } from '@/lib/plakat'

function Run() {
  return (
    <span>
      {tickerItems.map((t) => (
        <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 34 }}>
          {t}
          <i className="dot">✦</i>
        </span>
      ))}
    </span>
  )
}

// Full-bleed ink band, infinite marquee. The track is duplicated so the
// translateX(0 → -50%) loop is seamless.
export default function Ticker() {
  return (
    <div className="ticker">
      <div className="track">
        <Run />
        <Run />
      </div>
    </div>
  )
}
