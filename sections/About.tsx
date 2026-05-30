import SectionHeader from '@/components/SectionHeader'
import { stats } from '@/lib/plakat'

export default function About() {
  return (
    <section className="sec" id="ueber">
      <div className="wrap">
        <SectionHeader
          no="01"
          de="Profil / About"
          title={
            <>
              Komplexe Systeme <em>integrieren</em>
            </>
          }
          motif="about"
          metaLabel="AI · robotics"
        />
        <div className="about">
          <p className="drop" data-reveal>
            M.Sc. Computer &amp; Systems Engineering student with industry experience in{' '}
            <b>AI/ML systems</b>, software engineering, and technical project collaboration.
            Experienced in developing and integrating complex software systems — including{' '}
            <em>ROS2-based autonomous-vehicle architectures</em> and real-time perception pipelines.
            Strong analytical mindset with an interest in systems engineering, structured problem
            solving, and interdisciplinary technical coordination.
          </p>
          <div className="statset" data-reveal data-delay="100">
            {stats.map((s, i) => (
              <div className="s" key={i}>
                <div className="v">
                  {'text' in s ? (
                    s.text
                  ) : (
                    <>
                      <span data-count={s.value}>0</span>
                      {'suffix' in s && s.suffix ? <em>{s.suffix}</em> : null}
                    </>
                  )}
                </div>
                <div className="l">
                  {s.label.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      {j === 0 ? <br /> : null}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
