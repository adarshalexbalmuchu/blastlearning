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
        <stop offset="0%" stopColor="#0FA8DC" />
        <stop offset="100%" stopColor="#8B86F0" />
      </linearGradient>
    </defs>

    <rect x="52" y="38" width="196" height="170" rx="14" fill="#FFFFFF" stroke="#ECECF1" strokeWidth="1.5" />

    <text x="150" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#1C1C28">Retention Score</text>

    <text x="150" y="104" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="34" fontWeight="700" fill="url(#s3g1)">89%</text>

    <polyline
      points="72,172 94,162 116,165 138,155 160,148 182,143 204,136 226,128"
      stroke="url(#s3g1)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    <path
      d="M 72,172 94,162 116,165 138,155 160,148 182,143 204,136 226,128 L 226,185 L 72,185 Z"
      fill="rgba(15,168,220,0.06)"
    />

    {[[72, 172], [116, 165], [160, 148], [204, 136], [226, 128]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill={i === 4 ? '#0FA8DC' : 'rgba(15,168,220,0.4)'} />
    ))}

    <rect x="96" y="192" width="108" height="17" rx="8.5" fill="#E9F7EF" stroke="rgba(28,138,91,0.25)" strokeWidth="1" />
    <text x="150" y="204" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1C8A5B">+27% this month</text>

    <circle cx="234" cy="48" r="5" fill="#8B86F0" opacity="0.4" />
    <circle cx="66" cy="226" r="4" fill="#0FA8DC" opacity="0.3" />
  </svg>
);
