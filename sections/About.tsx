import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-32 px-6 lg:px-24 bg-ink-950">
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="label">01 / About</span>
            <span className="flex-1 h-px bg-ink-700/60" />
            <span className="label hidden md:inline">Ilmenau · Germany</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left — manifesto headline */}
          <Reveal className="lg:col-span-7">
            <h2 className="display text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-50 mb-12 tracking-tighter">
              I build web products that{' '}
              <span className="display-italic text-accent">ship</span>{' '}
              — not demos, <br className="hidden md:block" /> not prototypes.
            </h2>

            <div className="max-w-xl space-y-6 text-ink-300 text-[17px] leading-[1.7]">
              <p>
                I&apos;m a Fullstack Engineer and M.Sc. student at TU Ilmenau with{' '}
                <span className="text-ink-100">2+ years</span> of full-time industry
                experience shipping React, Node.js, and Docker-based products end-to-end —
                REST API design, database modelling, responsive UIs, and CI/CD pipelines.
              </p>
              <p>
                Several of those products had AI built in — RAG pipelines, computer-vision
                inference — which I designed and integrated as part of the same stack.
              </p>
              <p className="display-italic text-2xl text-ink-100 leading-snug pt-4 border-l-2 border-accent pl-6">
                I care about the gap between &ldquo;works on my machine&rdquo; and
                &ldquo;works in production under real load.&rdquo;
              </p>
            </div>
          </Reveal>

          {/* Right — info panel */}
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="lg:sticky lg:top-28 space-y-10">

              {/* Now */}
              <div>
                <p className="label mb-4">Now</p>
                <p className="text-ink-100 text-lg leading-snug">
                  M.Sc. Computer &amp; Systems Engineering
                  <br />
                  <span className="text-ink-400">at TU Ilmenau, 2nd semester.</span>
                </p>
                <p className="text-ink-400 text-sm mt-3 leading-relaxed">
                  Open to <span className="text-accent">Werkstudent</span> roles
                  (20 h / week) in fullstack web development across Germany — onsite
                  Thüringen or remote.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-ink-700/40 border border-ink-700/40">
                {[
                  { k: 'Location', v: 'Ilmenau, DE' },
                  { k: 'Status', v: 'M.Sc. student' },
                  { k: 'Available', v: '20 h / week' },
                  { k: 'Languages', v: 'EN · DE · UR' },
                  { k: 'Stack', v: 'JS · TS · Py' },
                  { k: 'Mode', v: 'Remote / Hybrid' },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="bg-ink-900 p-4 hover:bg-ink-800 transition-colors group"
                  >
                    <p className="label mb-1.5 group-hover:text-accent transition-colors">{s.k}</p>
                    <p className="text-ink-100 text-sm font-medium">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div>
                <p className="label mb-4">Capabilities</p>
                <ul className="space-y-3">
                  {[
                    ['Fullstack web', 'React + Node + Docker, end-to-end'],
                    ['APIs & data', 'REST, MongoDB / SQL, real-time events'],
                    ['AI integration', 'RAG and CV models inside web products'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex gap-4 items-baseline group">
                      <span className="display text-2xl text-accent w-12 shrink-0">{'◇'}</span>
                      <span>
                        <span className="block text-ink-100 text-sm font-medium">{k}</span>
                        <span className="block text-ink-400 text-[13px] leading-snug">{v}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
