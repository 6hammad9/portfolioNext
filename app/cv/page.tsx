import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ABOUT_BODY,
  ABOUT_NOW,
  CV_CERTIFICATIONS,
  CV_CONTACT,
  CV_EDUCATION,
  CV_EXPERIENCE,
  CV_LANGUAGES,
  CV_LEDE,
  CV_PUBLICATIONS,
  CV_SKILLS,
  CV_WORKSHOPS,
  THREADS,
  type CvRow,
} from '@/lib/constellation'

// A fully server-rendered copy of everything the node map holds. The map itself
// is a client component, so its text never reaches anything that does not run
// JavaScript — crawlers, link unfurlers, and any tool asked to read the site.
// This page is the machine-readable half of the same content.

export const metadata: Metadata = {
  title: 'CV — Raja Hammad Naseer',
  description:
    'Full CV and project write-ups for Raja Hammad Naseer: computer vision, LLM/RAG systems, ROS2 autonomy, and the production services around them.',
  alternates: { canonical: '/cv' },
}

function Row({ row }: { row: CvRow }) {
  return (
    <div className="cn-cv-row">
      <span className="cn-cv-meta">{row.meta}</span>
      <span className="cn-cv-role">{row.role}</span>
      {row.note ? <p className="cn-cv-note">{row.note}</p> : null}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cn-cv-section">
      <h2 className="cn-kicker">{title}</h2>
      {children}
    </section>
  )
}

export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cn-cv-inner">
        <header className="cn-cv-head">
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
        </header>

        <Section title="Profile">
          {ABOUT_BODY.map((p) => (
            <p key={p} className="cn-cv-note">
              {p}
            </p>
          ))}
        </Section>

        <Section title="Current role">
          <div className="cn-cv-row">
            <span className="cn-cv-meta">{ABOUT_NOW.sub}</span>
            <span className="cn-cv-role">{ABOUT_NOW.title}</span>
            <p className="cn-cv-note">
              <strong>{ABOUT_NOW.topic}</strong> — {ABOUT_NOW.body}
            </p>
          </div>
        </Section>

        <Section title="Experience">
          {CV_EXPERIENCE.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </Section>

        <Section title="Education">
          {CV_EDUCATION.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </Section>

        <Section title="Certifications">
          {CV_CERTIFICATIONS.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </Section>

        <Section title="Workshops">
          {CV_WORKSHOPS.map((row) => (
            <Row key={row.role} row={row} />
          ))}
        </Section>

        <Section title="Publications & models">
          {CV_PUBLICATIONS.map((p) => (
            <div key={p.href} className="cn-cv-row">
              <span className="cn-cv-meta">{p.meta}</span>
              <a className="cn-cv-pub" href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <div className="cn-cv-skills">
            {CV_SKILLS.map((s) => (
              <div key={s.label} className="cn-cv-skill">
                <span className="cn-cv-skill-label">{s.label}</span>
                <span className="cn-cv-skill-list">{s.list}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Languages">
          <p className="cn-cv-note">{CV_LANGUAGES}</p>
        </Section>

        {THREADS.map((thread) => (
          <Section key={thread.id} title={`Projects — ${thread.label}`}>
            <p className="cn-cv-note">{thread.blurb}</p>
            {thread.items.map((entry) => (
              <article key={entry.title} className="cn-cv-row">
                <span className="cn-cv-meta">{entry.tag}</span>
                <h3 className="cn-cv-role">{entry.title}</h3>
                <p className="cn-cv-note">{entry.body}</p>
                <p className="cn-cv-meta">Stack: {entry.stack.join(' · ')}</p>
                {entry.links.length > 0 ? (
                  <div className="cn-cv-contact">
                    {entry.links.map((l) => (
                      <a key={l.href + l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </Section>
        ))}

        <footer className="cn-cv-foot">
          <span>{CV_LANGUAGES}</span>
          <Link className="cn-btn" href="/">
            ← The interactive map
          </Link>
        </footer>
      </div>
    </main>
  )
}
