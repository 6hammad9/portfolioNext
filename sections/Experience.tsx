import { experience } from '@/lib/data'
import Reveal from '@/components/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="relative pt-32 pb-32 px-6 lg:px-24 bg-ink-950">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="label">03 / Experience</span>
            <span className="flex-1 h-px bg-ink-700/60" />
            <span className="label hidden md:inline">2023 — present</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="display text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-50 mb-20 tracking-tighter">
            Where I&apos;ve <span className="display-italic text-accent">built.</span>
          </h2>
        </Reveal>

        <div className="space-y-2">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="group relative border-t border-ink-700/40 hover:border-accent/40 transition-colors py-12 md:py-16">

                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

                  {/* Year column */}
                  <div className="md:col-span-3">
                    <p className="display text-5xl md:text-6xl text-ink-700 group-hover:text-accent transition-colors tracking-tighter leading-none">
                      {job.period.split('–')[0].trim()}
                    </p>
                    <p className="label mt-3">
                      {job.period}
                    </p>
                    <p className="text-ink-400 text-sm mt-1">{job.location}</p>
                  </div>

                  {/* Role + company column */}
                  <div className="md:col-span-9 space-y-6">
                    <div>
                      <p className="text-accent font-mono text-[12px] tracking-widest uppercase mb-2">
                        {job.company}
                      </p>
                      <h3 className="display text-3xl md:text-4xl text-ink-50 tracking-tight">
                        {job.title}
                      </h3>
                      <p className="text-ink-400 text-sm mt-2 leading-relaxed max-w-2xl">
                        {job.description}
                      </p>
                    </div>

                    <ul className="space-y-4 max-w-3xl">
                      {job.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="flex gap-4 text-ink-300 text-[15px] leading-[1.7]"
                        >
                          <span className="font-mono text-[11px] text-ink-600 mt-1.5 shrink-0">
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover arrow */}
                <span className="absolute right-0 top-12 md:top-16 text-ink-700 group-hover:text-accent group-hover:translate-x-2 transition-all text-3xl opacity-0 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
