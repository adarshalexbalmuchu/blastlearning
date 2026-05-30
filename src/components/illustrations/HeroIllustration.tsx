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
        <stop offset="0%" stopColor="#E8336B" />
        <stop offset="100%" stopColor="#00B4D8" />
      </linearGradient>
      <linearGradient id="hi-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00B4D8" />
        <stop offset="100%" stopColor="#E8336B" />
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
          fill="rgba(26,26,46,0.06)"
        />
      ))
    )}

    {/* Desk surface */}
    <rect x="80" y="278" width="320" height="14" rx="7" fill="rgba(26,26,46,0.04)" stroke="#E8E4D8" strokeWidth="1" />

    {/* Laptop body */}
    <rect x="148" y="198" width="184" height="122" rx="10" fill="#FFFFFF" stroke="#E8E4D8" strokeWidth="1.5" />
    <rect x="156" y="206" width="168" height="106" rx="6" fill="#FAFAF7" />
    {/* Screen lines */}
    <rect x="166" y="218" width="82" height="6" rx="3" fill="#E8336B" />
    <rect x="166" y="230" width="122" height="4" rx="2" fill="rgba(26,26,46,0.12)" />
    <rect x="166" y="240" width="100" height="4" rx="2" fill="rgba(26,26,46,0.08)" />
    <rect x="166" y="250" width="60" height="4" rx="2" fill="#00B4D8" />
    {/* Laptop base */}
    <path d="M128 292 L352 292 L342 304 L138 304 Z" fill="#F5F2EC" stroke="#E8E4D8" strokeWidth="1" />

    {/* Student: head */}
    <circle cx="240" cy="156" r="30" fill="#FFF0F5" stroke="#F5C0D4" strokeWidth="1.5" />
    <circle cx="240" cy="152" r="18" fill="rgba(26,26,46,0.04)" />
    {/* Student: shoulders */}
    <path d="M196 196 Q240 182 284 196 L284 258 L196 258 Z" fill="#FFF0F5" stroke="#F5C0D4" strokeWidth="1" />

    {/* Floating card — Math */}
    <g style={{ animation: 'float 4s ease-in-out infinite' }}>
      <rect x="18" y="76" width="112" height="66" rx="12" fill="#FFFFFF" stroke="#E8E4D8" strokeWidth="1" />
      <rect x="26" y="88" width="42" height="4" rx="2" fill="url(#hi-grad1)" />
      <text x="26" y="114" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5A5A7A">Mathematics</text>
      <text x="26" y="132" fontFamily="Playfair Display, serif" fontSize="16" fontWeight="700" fill="url(#hi-grad1)">89%</text>
    </g>

    {/* Floating card — Physics */}
    <g style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}>
      <rect x="350" y="56" width="112" height="66" rx="12" fill="#FFFFFF" stroke="#E8E4D8" strokeWidth="1" />
      <rect x="358" y="68" width="42" height="4" rx="2" fill="url(#hi-grad2)" />
      <text x="358" y="94" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5A5A7A">Physics</text>
      <text x="358" y="112" fontFamily="Playfair Display, serif" fontSize="16" fontWeight="700" fill="url(#hi-grad2)">+27%</text>
    </g>

    {/* Floating card — Session */}
    <g style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}>
      <rect x="340" y="218" width="122" height="56" rx="12" fill="#FFFFFF" stroke="#E8E4D8" strokeWidth="1" />
      <text x="350" y="240" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#5A5A7A">Today's Session</text>
      <text x="350" y="256" fontFamily="Playfair Display, serif" fontSize="13" fontWeight="600" fill="#1A1A2E">1h 42m</text>
      <rect x="350" y="262" width="80" height="3" rx="1.5" fill="#E8E4D8" />
      <rect x="350" y="262" width="62" height="3" rx="1.5" fill="#00B4D8" />
    </g>

    {/* Neural connection dots */}
    <circle cx="130" cy="109" r="4" fill="#E8336B" opacity="0.85" className="neural-dot" />
    <circle cx="350" cy="89" r="4" fill="#00B4D8" opacity="0.85" className="neural-dot" />
    <circle cx="402" cy="246" r="4" fill="#E8336B" opacity="0.7" className="neural-dot" />
    <circle cx="240" cy="68" r="3" fill="#00B4D8" opacity="0.5" className="neural-dot" />
    <circle cx="98" cy="198" r="3" fill="#E8336B" opacity="0.4" className="neural-dot" />

    {/* Connection lines */}
    <line x1="130" y1="109" x2="196" y2="156" stroke="rgba(26,26,46,0.1)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="89" x2="284" y2="156" stroke="rgba(26,26,46,0.1)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="402" y1="246" x2="332" y2="246" stroke="rgba(26,26,46,0.08)" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);
