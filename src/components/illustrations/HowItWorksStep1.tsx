import type { FC } from 'react';

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const HowItWorksStep1: FC<IllustrationProps> = ({ className, width = '100%', height = '100%' }) => (
  <svg
    viewBox="0 0 300 240"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="s1g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>

    {/* Background rings */}
    <circle cx="150" cy="120" r="86" stroke="rgba(6,182,212,0.06)" strokeWidth="1" />
    <circle cx="150" cy="120" r="62" stroke="rgba(6,182,212,0.04)" strokeWidth="1" />

    {/* Clipboard */}
    <rect x="88" y="48" width="124" height="148" rx="10" fill="rgba(7,17,31,0.82)" stroke="rgba(6,182,212,0.28)" strokeWidth="1.5" />
    <rect x="114" y="40" width="72" height="20" rx="8" fill="rgba(6,182,212,0.18)" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
    <rect x="128" y="46" width="44" height="8" rx="4" fill="rgba(6,182,212,0.4)" />

    {/* Checklist rows */}
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <circle
          cx="106"
          cy={84 + i * 27}
          r="7"
          fill={i < 2 ? 'url(#s1g1)' : 'rgba(255,255,255,0.05)'}
          stroke={i >= 2 ? 'rgba(255,255,255,0.08)' : 'none'}
        />
        {i < 2 && (
          <polyline
            points={`102,${84 + i * 27} 105,${87 + i * 27} 110,${81 + i * 27}`}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="120"
          y={78 + i * 27}
          width={[56, 48, 52, 44][i]}
          height="7"
          rx="3.5"
          fill={i < 2 ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)'}
        />
      </g>
    ))}

    {/* Progress bar */}
    <rect x="98" y="190" width="104" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
    <rect x="98" y="190" width="58" height="5" rx="2.5" fill="url(#s1g1)" />

    {/* Accent dots */}
    <circle cx="224" cy="66" r="5" fill="#06B6D4" opacity="0.55" />
    <circle cx="76" cy="178" r="4" fill="#8B5CF6" opacity="0.4" />
  </svg>
);
