'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { projects, type Project } from '@/lib/data'
import Reveal from '@/components/Reveal'

const FILTERS = ['All', 'Fullstack', 'AI', 'Research'] as const

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  )

  const [featured, ...rest] = filtered

  return (
    <section id="projects" className="relative pt-32 pb-32 px-6 lg:px-24 bg-ink-900">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="label">04 / Selected Work</span>
            <span className="flex-1 h-px bg-ink-700/60" />
            <a
              href="https://github.com/6hammad9"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-accent transition-colors hidden md:inline"
            >
              github.com/6hammad9 ↗
            </a>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="display text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-50 mb-10 tracking-tighter">
            Things I&apos;ve <span className="display-italic text-accent">put live.</span>
          </h2>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-16">
            {FILTERS.map((f) => {
              const active = filter === f
              const count =
                f === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === f).length
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`group inline-flex items-baseline gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                    active
                      ? 'bg-accent text-ink-950 border-accent'
                      : 'border-ink-700 text-ink-300 hover:border-accent/60 hover:text-ink-100'
                  }`}
                >
                  <span>{f}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      active ? 'text-ink-950/70' : 'text-ink-500 group-hover:text-accent'
                    }`}
                  >
                    {String(count).padStart(2, '0')}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Featured project */}
        {featured && (
          <Reveal>
            <FeaturedCard project={featured} />
          </Reveal>
        )}

        {/* Rest grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {rest.map((project, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <GridCard project={project} index={i + 2} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group relative grid md:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-ink-700/60 bg-ink-800/40 hover:border-accent/40 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5">
      {/* Image */}
      <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden bg-ink-950">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
              className="object-cover object-top transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-0"
            />
            {project.imageHover && (
              <Image
                src={project.imageHover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-top opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-[1.04]"
              />
            )}
          </>
        ) : (
          <Placeholder title={project.title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-ink-950/30 via-transparent to-ink-950/40 pointer-events-none" />
        <span className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-100">
            Featured · {project.category}
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
        <p className="label mb-4">01 / Work</p>
        <h3 className="display text-3xl md:text-4xl text-ink-50 leading-tight tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="text-ink-300 text-[15px] leading-relaxed mb-5">
          {project.description}
        </p>
        {project.bullets && (
          <ul className="space-y-2 mb-6">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-[13px] text-ink-400 leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] rounded-full border border-ink-700/60 bg-ink-900/40 text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function GridCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative h-full rounded-2xl overflow-hidden border border-ink-700/60 bg-ink-800/30 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-950">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-all duration-700 group-hover:scale-[1.05] group-hover:opacity-0"
            />
            {project.imageHover && (
              <Image
                src={project.imageHover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.05]"
              />
            )}
          </>
        ) : (
          <Placeholder title={project.title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent pointer-events-none" />

        <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass">
          <span className="text-[10px] font-mono text-ink-100">
            {String(index).padStart(2, '0')}
          </span>
          <span className="w-px h-3 bg-ink-600" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            {project.category}
          </span>
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="display text-2xl text-ink-50 leading-tight tracking-tight mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-400 text-[14px] leading-relaxed mb-4">
          {project.description}
        </p>

        {project.bullets && (
          <ul className="space-y-1.5 mb-5 flex-1">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-[12px] text-ink-400/90 leading-relaxed">
                <span className="text-accent shrink-0 mt-0.5">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {!project.bullets && <div className="flex-1" />}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] rounded-full border border-ink-700/50 bg-ink-900/40 text-ink-400"
            >
              {t}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-5 pt-4 border-t border-ink-700/40">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink-300 hover:text-accent transition-colors font-mono link-underline"
        >
          GitHub ↗
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink-300 hover:text-accent transition-colors font-mono link-underline"
        >
          Live ↗
        </a>
      )}
      {!project.github && !project.live && (
        <span className="text-xs text-ink-600 font-mono">Private — NDA</span>
      )}
    </div>
  )
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink-900">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <span className="relative display text-4xl text-ink-600 tracking-tight">
        {title.split(' ')[0]}
      </span>
    </div>
  )
}
