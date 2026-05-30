// Broadsheet masthead row + rule.
export default function Masthead() {
  return (
    <div className="mast">
      <div className="wrap">
        <div className="l">
          Portfolio · <b>Ausgabe Nr. 01</b>
          <br />
          Ingenieur · Systeme · KI
        </div>
        <div className="r">
           Thüringen · DE
          <br />
          <b>Anno MMXXVI</b>
        </div>
      </div>
      <div className="wrap">
        <div className="rule" />
      </div>
    </div>
  )
}
