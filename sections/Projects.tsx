import SectionHeader from '@/components/SectionHeader'
import { projects } from '@/lib/plakat'

export default function Projects() {
  return (
    <section className="sec" id="projekte">
      <div className="wrap">
        <SectionHeader
          no="04"
          de="Ausgewählte Arbeit / Selected Work"
          title={
            <>
              Dinge, die <em>live</em> gingen
            </>
          }
          motif="work"
          metaLabel="6 systems"
        />
        <div className="prj-list">
          {projects.map((p) => (
            <article className="prj" data-reveal key={p.no}>
              <div className="pno">{p.no}</div>
              <div>
                <div className="ptype">▸ {p.type}</div>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                <div className="stack">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="aside">
                {p.liveLabel && (
                  <span className="schip live">
                    <span className="led" />
                    {p.liveLabel}
                  </span>
                )}
                {p.chips?.map((c) => (
                  <span className="schip" key={c}>
                    {c}
                  </span>
                ))}
                {p.links && p.links.length > 0 && (
                  <div className="plinks">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
