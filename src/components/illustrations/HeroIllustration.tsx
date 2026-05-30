import type { FC } from 'react';

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const HeroIllustration: FC<IllustrationProps> = ({ className, width = '100%', height = '100%' }) => (
  <svg
    viewBox="0 0 480 400"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hi-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="hi-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>

    {/* Background grid dots */}
    {Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={40 + col * 56}
          cy={40 + row * 56}
          r="1.5"
          fill="rgba(6,182,212,0.18)"
        />
      ))
    )}

    {/* Desk surface */}
    <rect x="80" y="278" width="320" height="14" rx="7" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />

    {/* Laptop body */}
    <rect x="148" y="198" width="184" height="122" rx="10" fill="rgba(7,17,31,0.85)" stroke="rgba(6,182,212,0.28)" strokeWidth="1.5" />
    <rect x="156" y="206" width="168" height="106" rx="6" fill="rgba(6,182,212,0.04)" />
    {/* Screen lines */}
    <rect x="166" y="218" width="82" height="6" rx="3" fill="rgba(6,182,212,0.4)" />
    <rect x="166" y="230" width="122" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
    <rect x="166" y="240" width="100" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="166" y="250" width="60" height="4" rx="2" fill="rgba(139,92,246,0.3)" />
    {/* Laptop base */}
    <path d="M128 292 L352 292 L342 304 L138 304 Z" fill="rgba(7,17,31,0.85)" stroke="rgba(6,182,212,0.18)" strokeWidth="1" />

    {/* Student: head */}
    <circle cx="240" cy="156" r="30" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
    <circle cx="240" cy="152" r="18" fill="rgba(255,255,255,0.05)" />
    {/* Student: shoulders */}
    <path d="M196 196 Q240 182 284 196 L284 258 L196 258 Z" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.18)" strokeWidth="1" />

    {/* Floating card — Math */}
    <g style={{ animation: 'float 4s ease-in-out infinite' }}>
      <rect x="18" y="76" width="112" height="66" rx="12" fill="rgba(7,17,31,0.88)" stroke="rgba(6,182,212,0.32)" strokeWidth="1" />
      <rect x="26" y="88" width="42" height="4" rx="2" fill="url(#hi-grad1)" />
      <text x="26" y="114" fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">Mathematics</text>
      <text x="26" y="132" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="800" fill="url(#hi-grad1)">89%</text>
    </g>

    {/* Floating card — Physics */}
    <g style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}>
      <rect x="350" y="56" width="112" height="66" rx="12" fill="rgba(7,17,31,0.88)" stroke="rgba(139,92,246,0.32)" strokeWidth="1" />
      <rect x="358" y="68" width="42" height="4" rx="2" fill="url(#hi-grad2)" />
      <text x="358" y="94" fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">Physics</text>
      <text x="358" y="112" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="800" fill="url(#hi-grad2)">+27%</text>
    </g>

    {/* Floating card — Session */}
    <g style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}>
      <rect x="340" y="218" width="122" height="56" rx="12" fill="rgba(7,17,31,0.88)" stroke="rgba(59,130,246,0.28)" strokeWidth="1" />
      <text x="350" y="240" fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.45)">Today's Session</text>
      <text x="350" y="256" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.85)">1h 42m</text>
      <rect x="350" y="262" width="80" height="3" rx="1.5" fill="rgba(6,182,212,0.2)" />
      <rect x="350" y="262" width="62" height="3" rx="1.5" fill="url(#hi-grad2)" />
    </g>

    {/* Neural connection dots */}
    <circle cx="130" cy="109" r="4" fill="#06B6D4" opacity="0.8" className="neural-dot" />
    <circle cx="350" cy="89" r="4" fill="#8B5CF6" opacity="0.8" className="neural-dot" />
    <circle cx="402" cy="246" r="4" fill="#3B82F6" opacity="0.8" className="neural-dot" />
    <circle cx="240" cy="68" r="3" fill="#06B6D4" opacity="0.45" className="neural-dot" />
    <circle cx="98" cy="198" r="3" fill="#8B5CF6" opacity="0.35" className="neural-dot" />

    {/* Connection lines */}
    <line x1="130" y1="109" x2="196" y2="156" stroke="rgba(6,182,212,0.18)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="89" x2="284" y2="156" stroke="rgba(139,92,246,0.18)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="402" y1="246" x2="332" y2="246" stroke="rgba(59,130,246,0.12)" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);
