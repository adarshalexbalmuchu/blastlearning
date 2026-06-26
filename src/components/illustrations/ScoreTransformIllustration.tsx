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
        <stop offset="0%" stopColor="#0FA8DC" />
        <stop offset="100%" stopColor="#8B86F0" />
      </linearGradient>
      <linearGradient id="sti-g2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0FA8DC" />
        <stop offset="100%" stopColor="#8B86F0" />
      </linearGradient>
      <linearGradient id="sti-g3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0FA8DC" />
        <stop offset="100%" stopColor="#8B86F0" />
      </linearGradient>
    </defs>

    {/* ── Arc 1: Mathematics 65→89 ── */}
    <path d="M 28 186 A 76 76 0 0 1 180 186" stroke="#ECECF1" strokeWidth="12" strokeLinecap="round" />
    <path className="score-arc-after" d="M 28 186 A 76 76 0 0 1 176 146" stroke="url(#sti-g1)" strokeWidth="12" strokeLinecap="round" />
    <text x="104" y="165" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#1C1C28">89%</text>
    <text x="104" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#5A5A6E">Mathematics</text>
    <text x="22" y="202" fontFamily="Inter, sans-serif" fontSize="10" fill="#8E8EA0">65%</text>

    {/* ── Arc 2: Physics 52→81 ── */}
    <path d="M 140 186 A 76 76 0 0 1 292 186" stroke="#ECECF1" strokeWidth="12" strokeLinecap="round" />
    <path className="score-arc-after" d="M 140 186 A 76 76 0 0 1 285 152" stroke="url(#sti-g2)" strokeWidth="12" strokeLinecap="round" />
    <text x="216" y="165" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#1C1C28">81%</text>
    <text x="216" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#5A5A6E">Physics</text>

    {/* ── Arc 3: English 58→84 ── */}
    <path d="M 252 186 A 76 76 0 0 1 404 186" stroke="#ECECF1" strokeWidth="12" strokeLinecap="round" />
    <path className="score-arc-after" d="M 252 186 A 76 76 0 0 1 398 149" stroke="url(#sti-g3)" strokeWidth="12" strokeLinecap="round" />
    <text x="328" y="165" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#1C1C28">84%</text>
    <text x="328" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#5A5A6E">English</text>

    <text x="210" y="230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5A5A6E">Average improvement: +27% in 30 days</text>
  </svg>
);
