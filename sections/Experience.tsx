import SectionHeader from '@/components/SectionHeader'
import { experience } from '@/lib/plakat'

export default function Experience() {
  return (
    <section className="sec" id="werdegang">
      <div className="wrap">
        <SectionHeader
          no="05"
          de="Werdegang / Experience"
          title={
            <>
              Von Idee zu <em>Produkt</em>
            </>
          }
          motif="rack"
          metaLabel="2023 — 2025"
        />
        <div className="cv" data-reveal>
          {experience.map((e) => (
            <div className="cvitem" key={e.org}>
              <div className="when">{e.when}</div>
              <h3>{e.role}</h3>
              <div className="org">{e.org}</div>
              <ul>
                {e.points.map((pt, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
