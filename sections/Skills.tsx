import { skills } from '@/lib/data'
import Reveal from '@/components/Reveal'
import Marquee from '@/components/Marquee'

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-32 pb-32 overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="label">02 / Stack</span>
            <span className="flex-1 h-px bg-ink-700/60" />
            <span className="label hidden md:inline">2+ years in production</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="display text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-50 mb-4 tracking-tighter">
            Tools I&apos;ve shipped <span className="display-italic text-accent">with.</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mb-20 leading-relaxed">
            Six categories — every item below has been used on a real product, not just a tutorial.
          </p>
        </Reveal>
      </div>

      {/* Marquee bands — full bleed */}
      <div className="space-y-6">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="border-y border-ink-700/40 py-5 group hover:bg-ink-800/40 transition-colors">
              <div className="max-w-7xl mx-auto px-6 lg:px-24 flex items-center gap-6 mb-4">
                <span className="label text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display text-2xl md:text-3xl text-ink-100 tracking-tight">
                  {group.category}
                </span>
                <span className="label hidden md:inline ml-auto">
                  {group.items.length} tools
                </span>
              </div>
              <Marquee speed={i % 2 === 0 ? 'normal' : 'slow'} reverse={i % 2 === 1}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="display text-4xl md:text-5xl lg:text-6xl text-ink-300 group-hover:text-ink-100 transition-colors tracking-tight"
                  >
                    {item}
                    <span className="ml-12 text-ink-700">/</span>
                  </span>
                ))}
              </Marquee>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
