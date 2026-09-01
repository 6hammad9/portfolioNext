// The ten background glyphs — hairline technical drawings that make the page
// read as a plan sheet rather than a dark hero. Path data is copied verbatim
// from the design prototype; positions are percentages of the viewport.
//
// Constant rather than hover-driven, and inert to the pointer.

export default function Glyphs() {
  return (
    <div className="cn-glyphs" aria-hidden="true">
      {/* QCar in plan view with dashed lidar cone */}
      <svg viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "5%", top: "80%", width: 168, height: 105 }}>
      <path d="M28 62 L34 44 L58 38 L104 38 L126 46 L134 62 L134 72 L28 72 Z" />
      <path d="M58 38 L64 24 L104 24 L110 38" />
      <circle cx="50" cy="72" r="9" /><circle cx="116" cy="72" r="9" />
      <path d="M80 24 L80 12" /><circle cx="80" cy="9" r="3" />
      <path d="M80 9 L128 -8 M80 9 L32 -8" strokeDasharray="3 4" />
      <path d="M12 84 L152 84" strokeDasharray="8 5" />
      </svg>

      {/* Peltier / TEC stack cross-section with fins */}
      <svg viewBox="0 0 120 110" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "31%", top: "55%", width: 126, height: 116 }}>
      <rect x="24" y="46" width="72" height="16" />
      <rect x="24" y="62" width="72" height="16" />
      <path d="M32 62 L32 46 M44 62 L44 46 M56 62 L56 46 M68 62 L68 46 M80 62 L80 46 M92 62 L92 46" />
      <path d="M24 40 L96 40 M24 34 L96 34" />
      <path d="M30 34 L30 22 M42 34 L42 18 M54 34 L54 22 M66 34 L66 18 M78 34 L78 22 M90 34 L90 18" />
      <path d="M24 84 L96 84 M60 84 L60 96" />
      <text x="0" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="currentColor" stroke="none">TEC</text>
      </svg>

      {/* Camera dashboard with dashed detection box */}
      <svg viewBox="0 0 130 90" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "60%", top: "31%", width: 136, height: 94 }}>
      <rect x="8" y="8" width="114" height="74" />
      <path d="M8 20 L122 20" />
      <circle cx="15" cy="14" r="2" /><circle cx="23" cy="14" r="2" />
      <rect x="20" y="32" width="34" height="38" strokeDasharray="4 3" />
      <path d="M20 32 L26 32 M20 32 L20 38 M54 70 L48 70 M54 70 L54 64" strokeWidth="1.6" />
      <rect x="68" y="32" width="40" height="8" /><rect x="68" y="46" width="40" height="8" /><rect x="68" y="60" width="26" height="8" />
      </svg>

      {/* Browser wireframe */}
      <svg viewBox="0 0 120 96" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "19%", top: "88%", width: 124, height: 100 }}>
      <rect x="8" y="10" width="104" height="76" />
      <path d="M8 26 L112 26 M40 26 L40 86" />
      <path d="M16 38 L32 38 M16 48 L32 48 M16 58 L28 58" />
      <rect x="50" y="36" width="24" height="18" /><rect x="82" y="36" width="20" height="18" />
      <path d="M50 64 L102 64 M50 72 L88 72" />
      </svg>

      {/* Forecast plot with dashed prediction interval */}
      <svg viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "82%", top: "9%", width: 146, height: 104 }}>
      <path d="M16 88 L16 10 M16 88 L130 88" />
      <path d="M16 66 Q44 30 68 52 T124 22" />
      <path d="M16 74 Q44 40 68 62 T124 34" strokeDasharray="3 4" />
      <path d="M16 58 Q44 20 68 42 T124 12" strokeDasharray="3 4" />
      <path d="M12 66 L16 66 M12 44 L16 44 M12 22 L16 22 M40 88 L40 92 M80 88 L80 92 M120 88 L120 92" />
      </svg>

      {/* Neural graph, 3-4-2 */}
      <svg viewBox="0 0 120 110" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "56%", top: "71%", width: 124, height: 114 }}>
      <circle cx="20" cy="30" r="4" /><circle cx="20" cy="56" r="4" /><circle cx="20" cy="82" r="4" />
      <circle cx="60" cy="22" r="4" /><circle cx="60" cy="48" r="4" /><circle cx="60" cy="74" r="4" /><circle cx="60" cy="96" r="4" />
      <circle cx="100" cy="42" r="4" /><circle cx="100" cy="68" r="4" />
      <path d="M24 30 L56 22 M24 30 L56 48 M24 56 L56 22 M24 56 L56 74 M24 82 L56 74 M24 82 L56 96 M24 30 L56 96" strokeOpacity="0.75" />
      <path d="M64 22 L96 42 M64 48 L96 42 M64 74 L96 68 M64 96 L96 68 M64 48 L96 68" strokeOpacity="0.75" />
      </svg>

      {/* PT2+Tt step response */}
      <svg viewBox="0 0 130 96" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "34%", top: "28%", width: 134, height: 100 }}>
      <path d="M14 84 L14 8 M14 84 L124 84" />
      <path d="M14 76 L34 76 C58 76 50 22 74 22 L120 22" />
      <path d="M14 22 L120 22" strokeDasharray="4 4" strokeOpacity="0.6" />
      <path d="M34 84 L34 88 M74 84 L74 88" />
      <text x="88" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="currentColor" stroke="none">PT2+Tt</text>
      </svg>

      {/* Two debate speech bubbles */}
      <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "90%", top: "70%", width: 124, height: 94 }}>
      <path d="M8 12 L66 12 L66 46 L24 46 L14 58 L14 46 L8 46 Z" />
      <path d="M52 54 L112 54 L112 84 L74 84 L66 94 L66 84 L52 84 Z" />
      <path d="M18 24 L54 24 M18 32 L44 32" />
      <path d="M62 66 L102 66 M62 74 L92 74" />
      </svg>

      {/* Floor plan with section marks */}
      <svg viewBox="0 0 110 120" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "4%", top: "26%", width: 114, height: 124 }}>
      <rect x="14" y="14" width="82" height="92" />
      <path d="M14 60 L96 60 M52 14 L52 60" />
      <path d="M14 38 L30 38 M52 84 L96 84" strokeWidth="1.6" />
      <path d="M30 106 L30 116 M44 106 L44 116" />
      <path d="M96 30 L108 30 M96 30 L96 42" strokeDasharray="3 3" />
      <circle cx="72" cy="36" r="7" strokeDasharray="3 3" />
      </svg>

      {/* Microservice topology, four boxes */}
      <svg viewBox="0 0 130 90" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="cn-glyph" style={{ left: "22%", top: "6%", width: 134, height: 94 }}>
      <rect x="8" y="30" width="32" height="26" /><rect x="52" y="12" width="32" height="26" /><rect x="52" y="52" width="32" height="26" />
      <rect x="96" y="30" width="28" height="26" />
      <path d="M40 40 L52 25 M40 46 L52 65 M84 25 L96 40 M84 65 L96 46" strokeDasharray="4 3" />
      <path d="M14 36 L34 36 M14 42 L28 42 M58 18 L78 18 M58 58 L78 58" strokeOpacity="0.7" />
      </svg>
    </div>
  )
}
