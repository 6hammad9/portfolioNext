'use client'

import { useCallback, useEffect, useState } from 'react'
import { CORE, EDGES, THREADS } from '@/lib/constellation'
import Glyphs from './constellation/Glyphs'
import EntryBeat from './constellation/EntryBeat'
import AboutPanel from './constellation/AboutPanel'
import ThreadPanel from './constellation/ThreadPanel'
import DetailSheet from './constellation/DetailSheet'
import CvView from './constellation/CvView'

/* The five colours the map itself needs at runtime. Everything static lives in
   globals.css; these are here because they are chosen per node, per frame. */
const ACCENT = 'oklch(0.66 0.18 34)'
const EDGE_REST = 'rgba(236,231,221,0.17)'
const LABEL_REST = 'rgba(236,231,221,0.86)'
const PAPER = '#ece7dd'

type MapNode = {
  id: string
  label: string
  /** Percentage of the viewport. Tuned to sit in the grid gaps. */
  x: number
  y: number
  meta: string
  core: boolean
}

const NODES: MapNode[] = [
  { ...CORE, meta: 'start here', core: true },
  ...THREADS.map((t) => ({
    id: t.id,
    label: t.label,
    x: t.x,
    y: t.y,
    meta: `${t.items.length} ${t.items.length === 1 ? 'entry' : 'entries'}`,
    core: false,
  })),
]

const POS: Record<string, { x: number; y: number } | undefined> = Object.fromEntries(
  NODES.map((n) => [n.id, { x: n.x, y: n.y }])
)

/**
 * The whole front page: a fixed-viewport node map with the person in the
 * centre and nine competence threads around them. Nothing scrolls except the
 * panels, the detail sheet and the CV view.
 */
export default function Constellation() {
  const [entered, setEntered] = useState(false)
  const [beatOut, setBeatOut] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [hover, setHover] = useState<string | null>(null)
  const [detail, setDetail] = useState<number | null>(null)
  const [plain, setPlain] = useState(false)

  // The beat fades over 900ms and unmounts at 800ms, per the handoff.
  useEffect(() => {
    if (!beatOut) return
    const t = window.setTimeout(() => setEntered(true), 800)
    return () => window.clearTimeout(t)
  }, [beatOut])

  const thread = THREADS.find((t) => t.id === active) ?? null
  const entry = thread && detail != null ? thread.items[detail] : null

  // active wins over hover, so a pinned thread keeps its highlight
  const focus = active ?? hover

  const isConnected = useCallback(
    (id: string) => {
      if (!active) return true
      if (id === active || id === 'core') return true
      return EDGES.some(([a, b]) => (a === active && b === id) || (b === active && a === id))
    },
    [active]
  )

  const goHome = useCallback(() => {
    setActive(null)
    setDetail(null)
    setPlain(false)
  }, [])

  const closePanel = useCallback(() => {
    setActive(null)
    setDetail(null)
  }, [])

  const closeDetail = useCallback(() => setDetail(null), [])

  const togglePlain = useCallback(() => {
    setPlain((p) => !p)
    setDetail(null)
  }, [])

  // Escape unwinds the sheet, then the panel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (detail !== null) setDetail(null)
      else if (active !== null) setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [detail, active])

  // Clicking off a panel closes it. Nodes and the header are excluded so that
  // clicking another node still switches threads rather than just dismissing,
  // and while the detail sheet is up its own scrim owns the outside click.
  useEffect(() => {
    if (active === null || plain || detail !== null) return
    const onDown = (e: MouseEvent) => {
      const t = e.target as Element | null
      if (!t || typeof t.closest !== 'function') return
      if (t.closest('[data-cn-panel]') || t.closest('.cn-node') || t.closest('.cn-header')) return
      closePanel()
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [active, plain, detail, closePanel])

  const showMap = entered && !plain
  const showAbout = active === 'core' && !plain
  const showPanel = thread !== null && !plain
  const showDetail = entry !== null && thread !== null && !plain

  const statusLine = plain
    ? 'CV mode'
    : thread
      ? `Thread — ${thread.label}`
      : 'Nine threads, one engineer'

  return (
    <div className="cn-root">
      {/* the drafting sheet every element sits on */}
      <div className="cn-grid" />
      <Glyphs />
      <div className="cn-vignette" />

      <header className="cn-header">
        <button type="button" className="cn-btn cn-header-name" onClick={goHome}>
          Raja Hammad Naseer
        </button>
        <div className="cn-header-right">
          <span>{statusLine}</span>
          <button type="button" className="cn-btn cn-toggle" onClick={togglePlain}>
            {plain ? 'The tangle' : 'The boring version'}
          </button>
        </div>
      </header>

      {showMap ? (
        <>
          <div className="cn-map">
            <svg
              className="cn-lines"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {EDGES.map(([a, b]) => {
                const p = POS[a]
                const q = POS[b]
                if (!p || !q) return null
                const lit = focus !== null && (a === focus || b === focus)
                return (
                  <line
                    key={`${a}-${b}`}
                    className="cn-edge"
                    x1={p.x}
                    y1={p.y}
                    x2={q.x}
                    y2={q.y}
                    stroke={lit ? ACCENT : EDGE_REST}
                    strokeWidth={lit ? 1.1 : 0.7}
                    vectorEffect="non-scaling-stroke"
                  />
                )
              })}
            </svg>

            {NODES.map((n) => {
              const on = n.id === focus
              const dim = active !== null && !isConnected(n.id)
              return (
                <button
                  key={n.id}
                  type="button"
                  className={`cn-btn cn-node${n.core ? ' cn-node--core' : ''}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, opacity: dim ? 0.22 : 1 }}
                  onClick={() => {
                    setActive(n.id)
                    setDetail(null)
                  }}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(n.id)}
                  onBlur={() => setHover(null)}
                >
                  <span
                    className="cn-node-dot"
                    style={{ background: on ? ACCENT : 'transparent' }}
                  />
                  <span
                    className="cn-node-label"
                    style={{ color: on ? ACCENT : n.core ? PAPER : LABEL_REST }}
                  >
                    {n.label}
                  </span>
                  <span className="cn-node-meta">{n.meta}</span>
                </button>
              )
            })}
          </div>

          <div className="cn-hint">
            {active !== null ? 'Close to see the whole map' : 'Pull a thread'}
          </div>
        </>
      ) : null}

      {showAbout ? <AboutPanel onClose={closePanel} /> : null}

      {showPanel && thread ? (
        <ThreadPanel thread={thread} onClose={closePanel} onOpenEntry={setDetail} />
      ) : null}

      {showDetail && entry && thread ? (
        <DetailSheet entry={entry} threadLabel={thread.label} onClose={closeDetail} />
      ) : null}

      {plain ? <CvView onBack={togglePlain} /> : null}

      {!entered ? <EntryBeat out={beatOut} onEnter={() => setBeatOut(true)} /> : null}
    </div>
  )
}
