import type { FC } from 'react';

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const ScoreTransformIllustration: FC<IllustrationProps> = ({ className, width = '100%', height = '100%' }) => (
  <svg
    viewBox="0 0 420 260"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sti-g1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="sti-g2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="sti-g3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>

    {/* ── Arc 1: Mathematics 65→89 ── */}
    {/* Background */}
    <path d="M 28 186 A 76 76 0 0 1 180 186" stroke="rgba(255,255,255,0.06)" strokeWidth="12" strokeLinecap="round" />
    {/* After arc ~89% fill of 180° */}
    <path className="score-arc-after" d="M 28 186 A 76 76 0 0 1 176 146" stroke="url(#sti-g1)" strokeWidth="12" strokeLinecap="round" />
    {/* Labels */}
    <text x="104" y="165" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="22" fontWeight="800" fill="url(#sti-g1)">89%</text>
    <text x="104" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.38)">Mathematics</text>
    <text x="22" y="202" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="rgba(255,255,255,0.22)">65%</text>
    <text x="174" y="202" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="rgba(255,255,255,0.22)">—</text>

    {/* ── Arc 2: Physics 52→81 ── */}
    <path d="M 140 186 A 76 76 0 0 1 292 186" stroke="rgba(255,255,255,0.06)" strokeWidth="12" strokeLinecap="round" />
    <path className="score-arc-after" d="M 140 186 A 76 76 0 0 1 285 152" stroke="url(#sti-g2)" strokeWidth="12" strokeLinecap="round" />
    <text x="216" y="165" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="22" fontWeight="800" fill="url(#sti-g2)">81%</text>
    <text x="216" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.38)">Physics</text>

    {/* ── Arc 3: English 58→84 ── */}
    <path d="M 252 186 A 76 76 0 0 1 404 186" stroke="rgba(255,255,255,0.06)" strokeWidth="12" strokeLinecap="round" />
    <path className="score-arc-after" d="M 252 186 A 76 76 0 0 1 398 149" stroke="url(#sti-g3)" strokeWidth="12" strokeLinecap="round" />
    <text x="328" y="165" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="22" fontWeight="800" fill="url(#sti-g3)">84%</text>
    <text x="328" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.38)">English</text>

    {/* Footer label */}
    <text x="210" y="230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.35)">Average improvement: +27% in 30 days</text>
  </svg>
);
