import SectionHeader from '@/components/SectionHeader'
import { skillRows } from '@/lib/plakat'

export default function SkillsMatrix() {
  return (
    <section className="sec" id="werkzeuge">
      <div className="wrap">
        <SectionHeader
          no="06"
          de="Werkzeuge / Tools & Stack"
          title={
            <>
              Tools, mit denen ich <em>geliefert</em> habe
            </>
          }
          motif="nodes"
          metaLabel="six categories"
        />
        <div className="skindex" data-reveal>
          {skillRows.map((row) => (
            <div className="skrow" key={row.cat}>
              <div className="cat">
                {row.cat}
                <span className="de">{row.de}</span>
              </div>
              <div className="items">
                {row.items.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
