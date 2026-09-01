import Image from 'next/image'
import { SHOTS, type Entry } from '@/lib/constellation'
import { SHOT_IMAGES } from './shotImages'

type Props = {
  entry: Entry
  /** Label of the thread the entry belongs to — the first half of the kicker. */
  threadLabel: string
  onClose: () => void
}

/** The full detail sheet for one entry, over a blurred scrim. */
export default function DetailSheet({ entry, threadLabel, onClose }: Props) {
  // An entry with no screenshot renders no image area at all, rather than a
  // placeholder — an empty frame reads as unfinished work.
  const shots = SHOTS[entry.title]

  return (
    <div
      className="cn-scrim"
      // clicking the scrim, but not the sheet on top of it, dismisses
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <article
        className="cn-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={entry.title}
      >
        <button type="button" className="cn-btn cn-close cn-close--sheet" onClick={onClose}>
          Close ×
        </button>

        <div className="cn-sheet-inner">
          <span className="cn-kicker">
            {threadLabel} / {entry.tag}
          </span>
          <h2 className="cn-sheet-title">{entry.title}</h2>
          <p className="cn-sheet-body">{entry.body}</p>

          {shots ? (
            <div className="cn-shots">
              {shots.map((shot) => {
                const img = SHOT_IMAGES[shot.src]
                return (
                  <figure key={shot.src} className="cn-shot">
                    {img ? (
                      <Image
                        className="cn-shot-img"
                        src={img}
                        alt={shot.cap}
                        sizes="(max-width: 860px) 100vw, 400px"
                      />
                    ) : null}
                    <figcaption className="cn-shot-cap">{shot.cap}</figcaption>
                  </figure>
                )
              })}
            </div>
          ) : null}

          <div className="cn-chips">
            {entry.stack.map((name) => (
              <span key={name} className="cn-chip">
                {name}
              </span>
            ))}
          </div>

          {entry.links.length > 0 ? (
            <div className="cn-sheet-links">
              {entry.links.map((l) => (
                <a
                  key={l.href + l.label}
                  className="cn-sheet-link"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </div>
  )
}
