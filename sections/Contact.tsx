import Reveal from '@/components/Reveal'
import { personalInfo, cvs } from '@/lib/data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-32 pb-16 px-6 lg:px-24 bg-ink-950 overflow-hidden"
    >
      <div className="absolute inset-0 mesh-bg opacity-90 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="label">05 / Contact</span>
            <span className="flex-1 h-px bg-ink-700/60" />
            <span className="label hidden md:inline">Available now</span>
          </div>
        </Reveal>

        {/* Massive CTA */}
        <Reveal>
          <p className="display text-balance text-[clamp(3rem,10vw,9rem)] text-ink-50 tracking-tightest leading-[0.9] mb-12">
            Let&apos;s build <br />
            something{' '}
            <span className="display-italic text-accent">together.</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-ink-300 text-lg max-w-2xl mb-12 leading-relaxed">
            Open to <span className="text-ink-100">Werkstudent</span> roles in
            fullstack web development across Germany — or freelance projects
            anywhere with React, Node, and a problem worth solving.
          </p>
        </Reveal>

        {/* Email — the hero CTA */}
        <Reveal delay={200}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex flex-col gap-1 mb-16"
          >
            <span className="label group-hover:text-accent transition-colors">
              Drop a line
            </span>
            <span className="display text-3xl md:text-5xl text-ink-100 group-hover:text-accent transition-colors tracking-tight inline-flex items-center gap-4">
              {personalInfo.email}
              <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-1">
                ↗
              </span>
            </span>
          </a>
        </Reveal>

        {/* CV downloads */}
        <Reveal delay={240}>
          <div className="mb-12">
            <p className="label mb-4">Download CV</p>
            <div className="flex flex-wrap gap-3">
              {cvs.map((cv) => (
                <a
                  key={cv.href}
                  href={cv.href}
                  download
                  className={`group inline-flex items-baseline gap-3 px-5 py-3 rounded-full text-sm transition-all border ${
                    cv.primary
                      ? 'bg-ink-100 text-ink-950 border-ink-100 hover:bg-accent hover:border-accent'
                      : 'border-ink-700 text-ink-200 hover:border-accent hover:text-accent'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                    {cv.locale}
                  </span>
                  <span>{cv.label}</span>
                  <span className="text-base leading-none transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact channel grid */}
        <Reveal delay={320}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700/40 border border-ink-700/40 rounded-2xl overflow-hidden mb-20">
            {[
              { k: 'Phone', v: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
              { k: 'GitHub', v: '@6hammad9', href: personalInfo.github },
              { k: 'LinkedIn', v: '/in/6hammad9', href: personalInfo.linkedin },
              { k: 'Location', v: 'Ilmenau, DE', href: '' },
            ].map((c) => {
              const inner = (
                <div className="bg-ink-900 p-6 h-full hover:bg-ink-800 transition-colors group">
                  <p className="label mb-2 group-hover:text-accent transition-colors">
                    {c.k}
                  </p>
                  <p className="text-ink-100 text-sm font-medium">{c.v}</p>
                </div>
              )
              return c.href ? (
                <a key={c.k} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.k}>{inner}</div>
              )
            })}
          </div>
        </Reveal>

        {/* Footer line */}
        <Reveal delay={400}>
          <div className="border-t border-ink-700/40 pt-8 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label">
              © {new Date().getFullYear()} Raja Hammad Naseer · Designed &amp; built in Ilmenau
            </p>
            <p className="label hidden md:inline">
              Next.js · Tailwind · TypeScript · Vercel
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
