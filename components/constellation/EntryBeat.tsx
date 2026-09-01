// The entry beat — a full-bleed cover over the map that the visitor clicks
// away. It fades over 900ms; the parent unmounts it after 800ms.

type Props = {
  /** Drops to 0 to start the fade. */
  out: boolean
  onEnter: () => void
}

export default function EntryBeat({ out, onEnter }: Props) {
  return (
    // The whole surface is the target ("click anywhere to enter"), which rules
    // out a <button> — its content model would not allow the <h1> inside.
    <div
      className="cn-beat"
      style={{ opacity: out ? 0 : 1 }}
      role="button"
      tabIndex={0}
      onClick={onEnter}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onEnter()
        }
      }}
    >
      <div className="cn-beat-inner">
        <span className="cn-beat-eyebrow">
          Ilmenau · Robotics, perception, and the software around them
        </span>
        <h1 className="cn-beat-title">Raja Hammad Naseer</h1>
        <p className="cn-beat-body">
          Perception models, the services around them, the interface someone actually uses, and
          the hardware underneath. I work the whole line, and I am fluent at every point on it.
          One column could never show that. So here is the map instead.
        </p>
        <span className="cn-beat-cta">Click anywhere to enter</span>
      </div>
    </div>
  )
}
