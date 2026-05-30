import Image from 'next/image'
import Schematic from '@/components/Schematic'
import { contact } from '@/lib/plakat'

function PhotoPlate() {
  return (
    <div className="foto">
      <div className="plate">
        <Image
          className="shot"
          src="/profile.jpg"
          alt="Raja Hammad Naseer"
          fill
          sizes="360px"
          priority
        />
        {/* halftone duotone treatment */}
        <div className="duo" />
        <div className="dots" />
        {/* object-detection box overlay */}
        <div className="detbox" style={{ inset: 13 }}>
          <span className="c1" />
          <span className="c2" />
          <span className="c3" />
          <span className="c4" />
        </div>
        <div className="detlabel">
          <b>ENGINEER</b>
          <span className="pct">0.99</span>
        </div>
      </div>
      <span className="pin" />
      <div className="cap">
        <b>Abb. 1</b> &nbsp;Raja Hammad Naseer
      </div>
    </div>
  )
}

function Telemetry() {
  return (
    <div className="telemetry">
      <div className="bar">
        <span>TELEMETRY // RHN-001</span>
        {/* <span className="live">
          <span className="led" />
          Online
        </span> */}
      </div>
      <div className="body">
        <div className="ln">
          <span>Role</span>
          <b>Fullstack · AI Dev</b>
        </div>
        <div className="ln">
          <span>Base</span>
          <b>Germany</b>
        </div>
        <div className="ln">
          <span>Uni</span>
          <b>TU Ilmenau · M.Sc.</b>
        </div>
        <div className="ln">
          <span>Lang</span>
          <b>EN C1 · DE B1</b>
        </div>
        <div className="ln">
          <span>Status</span>
          <span className="v">Open · 20 h/wk</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Schematic />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="kicker">
              <span className="bar" /> KI / ML · Robotik · ROS2 · Gazebo · Computer Vision
            </div>
            <h1>
              <span className="ov" data-t="Raja">
                Raja
              </span>
              <br />
              <span className="ov" data-t="Hammad">
                Hammad
              </span>
              <br />
              <span className="ov" data-t="Naseer">
                Naseer
              </span>
            </h1>
            <p className="tagline">
              KI- &amp; Robotik-Systeme — von der Wahrnehmung bis ins Produkt.
            </p>
            <p className="lead">
              M.Sc. Computer &amp; Systems Engineering student building <b>AI/ML systems</b> and{' '}
              <b>ROS2-based autonomous-vehicle architectures</b> with real-time perception — and
              integrating them into full-stack products that actually ship.
            </p>
            <div className="actions">
              <a className="btn btn-fill" href="#projekte">
                Projekte ansehen <span className="arr">↗</span>
              </a>
              <a className="btn btn-out" href={contact.cv} download>
                CV ↓
              </a>
            </div>
          </div>
          <div className="hero-side">
            <PhotoPlate />
            <div className="stamp">
              Verfügbar 2026<small>Werkstudent · Praktikum · Freelance</small>
            </div>
            <Telemetry />
          </div>
        </div>
      </div>
    </header>
  )
}
