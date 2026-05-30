import type { FC } from 'react';

interface IllustrationProps {
  className?: string;
  animated?: boolean;
  width?: number | string;
  height?: number | string;
}

export const HowItWorksStep2: FC<IllustrationProps> = ({ className, width = '100%', height = '100%' }) => (
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
      <linearGradient id="s2g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>

    {/* Card */}
    <rect x="58" y="42" width="184" height="168" rx="14" fill="rgba(7,17,31,0.82)" stroke="rgba(139,92,246,0.24)" strokeWidth="1.5" />

    {/* Header bar */}
    <rect x="58" y="42" width="184" height="38" rx="14" fill="rgba(139,92,246,0.12)" />
    <rect x="58" y="66" width="184" height="14" fill="rgba(139,92,246,0.12)" />
    <text x="150" y="66" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.85)">Study Plan</text>

    {/* Day-of-week headers */}
    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, col) => (
      <text key={col} x={76 + col * 22} y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="rgba(255,255,255,0.28)">{d}</text>
    ))}

    {/* Calendar cells */}
    {Array.from({ length: 4 }, (_, row) =>
      Array.from({ length: 7 }, (_, col) => {
        const day = row * 7 + col + 1;
        const active = [3, 5, 10, 12, 17, 19, 24].includes(day);
        const today = day === 5;
        return (
          <g key={`${row}-${col}`}>
            {active && (
              <rect
                x={67 + col * 22}
                y={104 + row * 20}
                width="18"
                height="16"
                rx="4"
                fill={today ? 'url(#s2g1)' : 'rgba(139,92,246,0.18)'}
              />
            )}
            {day <= 28 && (
              <text
                x={76 + col * 22}
                y={116 + row * 20}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="9"
                fill={active ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.2)'}
              >
                {day}
              </text>
            )}
          </g>
        );
      })
    )}

    {/* AI chip */}
    <rect x="93" y="196" width="114" height="20" rx="10" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.28)" strokeWidth="1" />
    <text x="150" y="210" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#8B5CF6">AI Generated</text>

    {/* Accent dots */}
    <circle cx="232" cy="58" r="5" fill="#8B5CF6" opacity="0.5" />
    <circle cx="68" cy="222" r="4" fill="#06B6D4" opacity="0.38" />
  </svg>
);
