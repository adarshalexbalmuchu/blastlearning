import type { FC } from 'react';

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const HowItWorksStep3: FC<IllustrationProps> = ({ className, width = '100%', height = '100%' }) => (
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
      <linearGradient id="s3g1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="s3g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>

    {/* Card */}
    <rect x="52" y="38" width="196" height="170" rx="14" fill="rgba(7,17,31,0.82)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />

    {/* Title */}
    <text x="150" y="68" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.82)">Retention Score</text>

    {/* Big score number */}
    <text x="150" y="104" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="34" fontWeight="800" fill="url(#s3g1)">89%</text>

    {/* Trend line */}
    <polyline
      points="72,172 94,162 116,165 138,155 160,148 182,143 204,136 226,128"
      stroke="url(#s3g1)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Area fill under line */}
    <path
      d="M 72,172 94,162 116,165 138,155 160,148 182,143 204,136 226,128 L 226,185 L 72,185 Z"
      fill="rgba(6,182,212,0.05)"
    />

    {/* Data points */}
    {[[72, 172], [116, 165], [160, 148], [204, 136], [226, 128]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill={i === 4 ? '#06B6D4' : 'rgba(6,182,212,0.45)'} />
    ))}

    {/* Badge */}
    <rect x="96" y="192" width="108" height="17" rx="8.5" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.22)" strokeWidth="1" />
    <text x="150" y="204" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#22C55E">+27% this month</text>

    {/* Accent dots */}
    <circle cx="234" cy="48" r="5" fill="#22C55E" opacity="0.42" />
    <circle cx="66" cy="226" r="4" fill="#06B6D4" opacity="0.3" />
  </svg>
);
