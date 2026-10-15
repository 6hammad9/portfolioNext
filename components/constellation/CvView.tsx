import {
  CV_CERTIFICATIONS,
  CV_CONTACT,
  CV_EDUCATION,
  CV_EXPERIENCE,
  CV_LANGUAGES,
  CV_LEDE,
  CV_PUBLICATIONS,
  CV_SKILLS,
  CV_WORKSHOPS,
  type CvRow,
} from '@/lib/constellation'

type Props = { onBack: () => void }

function Row({ row }: { row: CvRow }) {
  return (
    <div className="cn-cv-row">
      <span className="cn-cv-meta">{row.meta}</span>
      <span className="cn-cv-role">{row.role}</span>
      {row.note ? <p className="cn-cv-note">{row.note}</p> : null}
    </div>
  )
}

/** "The boring version" — the plain CV behind the header toggle. */
export default function CvView({ onBack }: Props) {
  return (
    <div className="cn-cv">
      {/* This overlay is opaque and sits above .cn-header, so nothing in the
          header can be used to leave it. Without this the only way back was
          the button at the foot of the whole CV. */}
      <button type="button" className="cn-btn cn-close" onClick={onBack}>
        Close ×
      </button>

      <div className="cn-cv-inner">
        <div className="cn-cv-head">
          <span className="cn-cv-eyebrow">The boring version, as requested</span>
          <h1 className="cn-cv-name">Raja Hammad Naseer</h1>
          <p className="cn-cv-lede">{CV_LEDE}</p>
          <div className="cn-cv-contact">
            {CV_CONTACT.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Experience</span>
          {CV_EXPERIENCE.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Education</span>
          {CV_EDUCATION.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Certifications</span>
          {CV_CERTIFICATIONS.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Workshops</span>
          {CV_WORKSHOPS.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Publications &amp; models</span>
          {CV_PUBLICATIONS.map((p) => (
            <div key={p.href} className="cn-cv-row">
              <span className="cn-cv-meta">{p.meta}</span>
              <a className="cn-cv-pub" href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            </div>
          ))}
        </div>

        <div className="cn-cv-section">
          <span className="cn-kicker">Skills</span>
          <div className="cn-cv-skills">
            {CV_SKILLS.map((s) => (
              <div key={s.label} className="cn-cv-skill">
                <span className="cn-cv-skill-label">{s.label}</span>
                <span className="cn-cv-skill-list">{s.list}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cn-cv-foot">
          <span>{CV_LANGUAGES}</span>
          <button type="button" className="cn-btn cn-cv-back" onClick={onBack}>
            ← Back to the tangle
          </button>
        </div>
      </div>
    </div>
  )
}
