// Faint robotics / AI blueprint printed behind the hero. Line-art in ink
// (currentColor) with a couple of vermillion detection strokes. Copied
// verbatim from the design handoff (portfolio-plakat.html → .schematic).
export default function Schematic() {
  return (
    <div className="schematic" aria-hidden="true">
      <svg
        className="s-hero"
        viewBox="0 0 760 600"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* faint coordinate ticks */}
        <g opacity="0.7">
          <path d="M40 560h60M40 560v-60" strokeWidth={1.5} />
          <path d="M92 556l8 4-8 4M44 512l-4-8 4 8" strokeWidth={1.5} />
          <circle cx="40" cy="560" r="3" />
        </g>
        {/* neural net cluster (AI) */}
        <g transform="translate(70,80)">
          <line x1="20" y1="20" x2="80" y2="6" />
          <line x1="20" y1="20" x2="80" y2="60" />
          <line x1="20" y1="70" x2="80" y2="6" />
          <line x1="20" y1="70" x2="80" y2="60" />
          <line x1="80" y1="6" x2="140" y2="34" />
          <line x1="80" y1="60" x2="140" y2="34" />
          <circle cx="20" cy="20" r="6" />
          <circle cx="20" cy="70" r="6" />
          <circle cx="80" cy="6" r="6" />
          <circle cx="80" cy="60" r="6" />
          <circle cx="140" cy="34" r="7" stroke="#c5341b" strokeWidth={1.6} />
          <text x="0" y="104" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">
            NEURAL NET
          </text>
        </g>
        {/* quadcopter drone (top view) + FOV */}
        <g transform="translate(560,70)">
          <rect x="-22" y="-14" width="44" height="28" rx="4" />
          <line x1="-16" y1="-10" x2="-52" y2="-40" />
          <line x1="16" y1="-10" x2="52" y2="-40" />
          <line x1="-16" y1="10" x2="-52" y2="40" />
          <line x1="16" y1="10" x2="52" y2="40" />
          <circle cx="-58" cy="-46" r="16" />
          <circle cx="58" cy="-46" r="16" />
          <circle cx="-58" cy="46" r="16" />
          <circle cx="58" cy="46" r="16" />
          <circle cx="0" cy="0" r="4" stroke="#c5341b" />
          <path className="ln-dash" d="M0 14L-38 92M0 14L38 92M-38 92h76" />
          <text x="-26" y="120" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">
            UAV · CAM
          </text>
        </g>
        {/* QCar (autonomous vehicle) with LIDAR + detection box */}
        <g transform="translate(150,300)">
          <path d="M14 96h172" />
          <path d="M40 96V70q0-6 6-6h22l24-26h54l16 26h20q6 0 6 6v26" />
          <circle cx="64" cy="96" r="20" />
          <circle cx="64" cy="96" r="8" />
          <circle cx="150" cy="96" r="20" />
          <circle cx="150" cy="96" r="8" />
          <rect x="92" y="30" width="26" height="10" rx="2" />
          <path className="ln-dash" d="M105 30C70 6 140 6 105 30" opacity="0" />
          <path d="M105 28a40 40 0 0 1 40 -8M105 24a58 58 0 0 1 58 -10" strokeWidth={1.1} />
          {/* detection box */}
          <g stroke="#c5341b" strokeWidth={1.6}>
            <path d="M6 20h22M6 20v18" />
            <path d="M196 20h-22M196 20v18" />
            <path d="M6 118h22M6 118v-18" />
            <path d="M196 118h-22M196 118v-18" />
          </g>
          <text x="6" y="14" fontFamily="monospace" fontSize="12" fill="#c5341b" stroke="none">
            QCAR 0.97
          </text>
        </g>
        {/* multi-camera rig with overlapping FOV */}
        <g transform="translate(560,300)">
          <path d="M40 0v150" />
          <g transform="translate(40,18)">
            <path d="M0 -8l-22 -10v36z" />
            <path className="ln-dash" d="M-22 -18L-150 30M-22 18L-150 70" />
          </g>
          <g transform="translate(40,70)">
            <path d="M0 -8l-22 -10v36z" />
            <path className="ln-dash" d="M-22 -18L-150 40M-22 18L-150 86" />
          </g>
          <g transform="translate(40,122)">
            <path d="M0 -8l-22 -10v36z" />
            <path className="ln-dash" d="M-22 -18L-150 70M-22 18L-150 116" />
          </g>
          <text x="-6" y="172" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">
            MULTI-CAM ×3
          </text>
        </g>
        {/* mobile rover */}
        <g transform="translate(120,470)">
          <rect x="0" y="20" width="78" height="34" rx="4" />
          <circle cx="20" cy="58" r="11" />
          <circle cx="58" cy="58" r="11" />
          <path d="M39 20V2" />
          <circle cx="39" cy="-4" r="6" />
          <path d="M52 20v-8h16v8" />
          <path d="M60 12v-8" stroke="#c5341b" />
          <text x="0" y="84" fontFamily="monospace" fontSize="13" fill="currentColor" stroke="none">
            ROVER · ROS2
          </text>
        </g>
        {/* reticle */}
        <g transform="translate(430,210)" opacity="0.8">
          <circle cx="0" cy="0" r="22" />
          <path d="M0 -32V-12M0 12V32M-32 0H-12M12 0H32" />
        </g>
        {/* perception bus */}
        <path className="ln-dash" d="M210 150C320 180 360 230 430 210" opacity="0.6" />
        <path className="ln-dash" d="M452 210C520 220 540 260 560 320" opacity="0.6" />
        <path className="ln-dash" d="M408 210C360 260 320 300 250 320" opacity="0.6" />
      </svg>
    </div>
  )
}
