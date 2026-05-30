import SectionHeader from '@/components/SectionHeader'
import { education, research } from '@/lib/plakat'

export default function Education() {
  const [masters, bachelors] = education

  return (
    <section className="sec" id="ausbildung">
      <div className="wrap">
        <SectionHeader
          no="03"
          de="Ausbildung & Forschung / Education"
          title={
            <>
              In der <em>Forschung</em> verwurzelt
            </>
          }
          motif="wave"
          metaLabel="control · CV"
        />
        <div className="cv" data-reveal>
          <div className="cvitem span2">
            <div className="when">{masters.when}</div>
            <h3>{masters.degree}</h3>
            <div className="org">{masters.org}</div>
          </div>
        </div>
        {/* M.Sc. projects, shown with the masters degree */}
        <div className="research" data-reveal>
          {research.map((r) => (
            <article className="rc" key={r.title}>
              <span className={`grade${r.red ? ' r' : ''}`}>{r.grade}</span>
              <h4>{r.title}</h4>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
        <div className="cv" style={{ marginTop: 8 }} data-reveal>
          <div className="cvitem span2">
            <div className="when">{bachelors.when}</div>
            <h3>{bachelors.degree}</h3>
            <div className="org">{bachelors.org}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
