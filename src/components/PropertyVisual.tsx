/**
 * Stylised architectural SVG panel used in place of photography.
 * Deterministic per-property: layered dusk gradient, sun disc, skyline /
 * villa silhouettes, water reflection and gold line accents.
 */
export default function PropertyVisual({
  hue,
  title,
  tall = false,
}: {
  hue: number;
  title: string;
  tall?: boolean;
}) {
  const gid = `${title.replace(/\W+/g, "")}-${hue}`;
  const isVilla = hue % 3 !== 0;
  return (
    <svg
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${tall ? "min-h-[320px]" : ""}`}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={`sky-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 38% 16%)`} />
          <stop offset="55%" stopColor={`hsl(${hue} 42% 30%)`} />
          <stop offset="100%" stopColor={`hsl(${hue + 18} 48% 52%)`} />
        </linearGradient>
        <linearGradient id={`sea-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue + 18} 45% 48%)`} />
          <stop offset="100%" stopColor={`hsl(${hue} 45% 12%)`} />
        </linearGradient>
        <linearGradient id={`glass-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5E7C6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C8A15C" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="800" height="400" fill={`url(#sky-${gid})`} />
      <circle cx={560 + (hue % 90)} cy="150" r="58" fill="#EAD9AC" opacity="0.9" />
      <circle cx={560 + (hue % 90)} cy="150" r="96" fill="#EAD9AC" opacity="0.14" />

      {/* distant skyline */}
      <g fill={`hsl(${hue} 30% 12%)`} opacity="0.55">
        <rect x="30" y="230" width="34" height="170" />
        <rect x="76" y="190" width="26" height="210" />
        <rect x="660" y="205" width="30" height="195" />
        <rect x="702" y="160" width="22" height="240" />
        <rect x="618" y="250" width="28" height="150" />
      </g>
      {/* Burj-like spire */}
      <g fill={`hsl(${hue} 32% 10%)`} opacity="0.7">
        <path d="M398 60 L412 400 L384 400 Z" />
        <rect x="394" y="30" width="8" height="40" />
      </g>

      {isVilla ? (
        <g>
          {/* modern villa blocks */}
          <rect x="150" y="300" width="500" height="100" fill={`hsl(${hue} 25% 10%)`} />
          <rect x="205" y="248" width="300" height="58" fill={`hsl(${hue} 25% 13%)`} />
          <rect x="230" y="322" width="150" height="56" fill={`url(#glass-${gid})`} opacity="0.9" />
          <rect x="404" y="322" width="96" height="56" fill={`url(#glass-${gid})`} opacity="0.7" />
          <rect x="228" y="262" width="120" height="30" fill={`url(#glass-${gid})`} opacity="0.8" />
          <rect x="372" y="262" width="104" height="30" fill={`url(#glass-${gid})`} opacity="0.6" />
          {/* palm silhouettes */}
          <g stroke={`hsl(${hue} 30% 9%)`} strokeWidth="7" fill="none" strokeLinecap="round">
            <path d="M120 400 C 118 350, 112 320, 96 292" />
            <path d="M96 292 C 70 276, 48 278, 30 292 M96 292 C 96 268, 108 252, 128 246 M96 292 C 120 280, 142 282, 156 296" />
            <path d="M690 400 C 692 356, 700 328, 716 302" />
            <path d="M716 302 C 692 288, 670 290, 654 302 M716 302 C 716 280, 728 264, 746 258 M716 302 C 738 292, 758 294, 770 306" />
          </g>
        </g>
      ) : (
        <g>
          {/* tower */}
          <rect x="300" y="120" width="200" height="280" fill={`hsl(${hue} 25% 11%)`} />
          <rect x="330" y="86" width="140" height="40" fill={`hsl(${hue} 25% 14%)`} />
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 3 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={322 + c * 56} y={142 + r * 40} width="38" height="24" fill={`url(#glass-${gid})`} opacity={0.45 + ((r + c + hue) % 3) * 0.22} />
            ))
          )}
          <rect x="212" y="220" width="70" height="180" fill={`hsl(${hue} 25% 13%)`} opacity="0.85" />
          <rect x="518" y="196" width="76" height="204" fill={`hsl(${hue} 25% 13%)`} opacity="0.85" />
        </g>
      )}

      {/* water / ground */}
      <rect y="400" width="800" height="160" fill={`url(#sea-${gid})`} />
      <g stroke="#EAD9AC" strokeWidth="2" opacity="0.35" strokeLinecap="round">
        <path d="M120 448 h150 M340 478 h220 M90 512 h120 M520 516 h180 M250 440 h90" />
      </g>
      <rect y="398" width="800" height="3" fill="#C8A15C" opacity="0.8" />
    </svg>
  );
}
