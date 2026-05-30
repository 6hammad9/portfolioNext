import SectionHeader from '@/components/SectionHeader'
import { capabilities } from '@/lib/plakat'

export default function Capabilities() {
  return (
    <section className="sec" id="koennen">
      <div className="wrap">
        <SectionHeader
          no="02"
          de="Fähigkeiten / Capabilities"
          title={
            <>
              Drei <em>Felder</em>
            </>
          }
          motif="layers"
          metaLabel="full-stack + AI"
        />
        <div className="caps" data-reveal>
          {capabilities.map((c) => (
            <article className="cap" key={c.no}>
              <div className="no">{c.no}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="tags">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
