/**
 * Stylised SVG "map" of Dubai coastline — Palm Jumeirah crescent, the World
 * dots, marina curve and downtown spire. Design panel only, no map API.
 */
const spots = [
  { x: 205, y: 118, label: "Palm Jumeirah", count: 14 },
  { x: 330, y: 205, label: "Dubai Marina", count: 11 },
  { x: 470, y: 150, label: "Business Bay", count: 9 },
  { x: 540, y: 110, label: "Downtown", count: 12 },
  { x: 610, y: 90, label: "DIFC", count: 5 },
  { x: 120, y: 250, label: "Emirates Hills", count: 7 },
];

export default function DubaiMap() {
  return (
    <svg viewBox="0 0 760 360" className="h-full w-full" role="img" aria-label="Stylised map of Dubai areas">
      <defs>
        <linearGradient id="mapsea" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E2A20" />
          <stop offset="100%" stopColor="#0B100E" />
        </linearGradient>
      </defs>
      <rect width="760" height="360" fill="url(#mapsea)" rx="18" />
      {/* coastline */}
      <path
        d="M60 330 C 140 260, 210 250, 300 210 C 400 165, 470 170, 560 120 C 630 82, 690 60, 740 40 L 740 360 L 60 360 Z"
        fill="#14231B"
      />
      <path
        d="M60 330 C 140 260, 210 250, 300 210 C 400 165, 470 170, 560 120 C 630 82, 690 60, 740 40"
        fill="none" stroke="#C8A15C" strokeWidth="2" opacity="0.7"
      />
      {/* palm crescent */}
      <g stroke="#C8A15C" fill="none" strokeWidth="2.4" opacity="0.85">
        <path d="M150 130 a62 62 0 1 1 110 40" />
        <path d="M205 78 v66 M176 88 c6 20 6 38 0 56 M234 88 c-6 20-6 38 0 56" strokeWidth="1.6" />
      </g>
      {/* world islands dots */}
      <g fill="#C8A15C" opacity="0.5">
        {[[300, 70], [330, 56], [362, 66], [318, 92], [350, 92], [282, 88]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="7" />
        ))}
      </g>
      {/* downtown spire */}
      <path d="M540 118 L546 62 L552 118 Z" fill="#EAD9AC" />
      {/* roads */}
      <g stroke="#F5F0E6" strokeWidth="1" opacity="0.14">
        <path d="M110 320 C 260 250, 430 190, 720 60" />
        <path d="M180 340 C 320 260, 470 210, 700 120" />
        <path d="M330 210 C 360 260, 380 300, 395 345" />
      </g>
      {/* area pins */}
      {spots.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r="16" fill="#C8A15C" opacity="0.16" />
          <circle cx={s.x} cy={s.y} r="5.5" fill="#C8A15C" />
          <text x={s.x + 14} y={s.y - 2} fill="#F5F0E6" fontSize="13.5" fontWeight="600">{s.label}</text>
          <text x={s.x + 14} y={s.y + 15} fill="#9DB0A4" fontSize="11">{s.count} listings</text>
        </g>
      ))}
    </svg>
  );
}
