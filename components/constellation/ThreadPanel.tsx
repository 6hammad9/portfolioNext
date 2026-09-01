import type { Thread } from '@/lib/constellation'

type Props = {
  thread: Thread
  onClose: () => void
  /** Opens the detail sheet for the entry at this index. */
  onOpenEntry: (index: number) => void
}

/** The panel behind a thread node — its blurb and its list of entries. */
export default function ThreadPanel({ thread, onClose, onOpenEntry }: Props) {
  return (
    <aside className="cn-panel" data-cn-panel>
      <button type="button" className="cn-btn cn-close" onClick={onClose}>
        Close ×
      </button>

      <div className="cn-panel-head">
        <span className="cn-kicker">Thread / {thread.label}</span>
        <h2 className="cn-panel-title">{thread.label}</h2>
        <p className="cn-panel-blurb">{thread.blurb}</p>
      </div>

      <div className="cn-entries">
        {thread.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className="cn-btn cn-entry"
            onClick={() => onOpenEntry(i)}
          >
            <div className="cn-entry-row">
              <span className="cn-entry-title">{item.title}</span>
              <span className="cn-entry-tag">{item.tag}</span>
            </div>
            <span className="cn-entry-line">{item.line}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
