import Image from 'next/image'
import { ABOUT_BODY, ABOUT_LINKS, ABOUT_NOW, ABOUT_STATS } from '@/lib/constellation'

type Props = { onClose: () => void }

/** The panel behind the centre node — the middle of the map. */
export default function AboutPanel({ onClose }: Props) {
  return (
    <aside className="cn-panel" data-cn-panel>
      <button type="button" className="cn-btn cn-close" onClick={onClose}>
        Close ×
      </button>

      <div className="cn-about">
        <figure className="cn-about-fig">
          {/* 438 × 588 intrinsic; rendered at 190px wide by the stylesheet. */}
          <Image
            className="cn-about-img"
            src="/profile.jpg"
            alt="Raja Hammad Naseer"
            width={438}
            height={588}
            priority
          />
          <figcaption className="cn-caption">Ilmenau, Germany</figcaption>
        </figure>

        <div className="cn-about-intro">
          <span className="cn-kicker">The middle of the map</span>
          <h2 className="cn-about-title">Raja Hammad Naseer</h2>
          {ABOUT_BODY.map((p) => (
            <p key={p.slice(0, 24)} className="cn-about-body">
              {p}
            </p>
          ))}
        </div>

        <div className="cn-block">
          <span className="cn-kicker">Right now</span>
          <span className="cn-now-title">{ABOUT_NOW.title}</span>
          <span className="cn-now-sub">{ABOUT_NOW.sub}</span>
          <p className="cn-about-body cn-about-body--spaced">
            Topic: <em>{ABOUT_NOW.topic}</em>. {ABOUT_NOW.body}
          </p>
        </div>

        <div className="cn-stats">
          {ABOUT_STATS.map((s) => (
            <div key={s.label} className="cn-stat">
              <span className="cn-stat-fig">{s.figure}</span>
              <span className="cn-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="cn-links">
          {ABOUT_LINKS.map((l) => (
            <a
              key={l.href}
              className="cn-link"
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
