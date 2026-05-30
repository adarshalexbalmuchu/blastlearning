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
        <stop offset="0%" stopColor="#5C56E8" />
        <stop offset="100%" stopColor="#8B86F0" />
      </linearGradient>
    </defs>

    <rect x="58" y="42" width="184" height="168" rx="14" fill="#FFFFFF" stroke="#ECECF1" strokeWidth="1.5" />
    <rect x="58" y="42" width="184" height="38" rx="14" fill="#F0EDFC" />
    <rect x="58" y="66" width="184" height="14" fill="#F0EDFC" />
    <text x="150" y="66" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="600" fill="#1C1C28">Study Plan</text>

    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, col) => (
      <text key={col} x={76 + col * 22} y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="#8E8EA0">{d}</text>
    ))}

    {Array.from({ length: 4 }, (_, row) =>
      Array.from({ length: 7 }, (_, col) => {
        const day = row * 7 + col + 1;
        const activeDays = [3, 5, 10, 12, 17, 19, 24];
        const active = activeDays.includes(day);
        const today = day === 5;
        const pastels = ['#FDF3E7', '#FCEEF1', '#E7F6FB', '#F0EDFC', '#E9F7EF', '#E9F2FC'];
        const pastel = pastels[activeDays.indexOf(day) % pastels.length];
        return (
          <g key={`${row}-${col}`}>
            {active && (
              <rect
                x={67 + col * 22}
                y={104 + row * 20}
                width="18"
                height="16"
                rx="4"
                fill={today ? 'url(#s2g1)' : pastel}
              />
            )}
            {day <= 28 && (
              <text
                x={76 + col * 22}
                y={116 + row * 20}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="9"
                fill={active ? (today ? 'white' : '#5C56E8') : 'rgba(28,28,40,0.25)'}
              >
                {day}
              </text>
            )}
          </g>
        );
      })
    )}

    <rect x="93" y="196" width="114" height="20" rx="10" fill="#EEEDFC" stroke="#DDD9FA" strokeWidth="1" />
    <text x="150" y="210" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#5C56E8">AI Generated</text>

    <circle cx="232" cy="58" r="5" fill="#5C56E8" opacity="0.45" />
    <circle cx="68" cy="222" r="4" fill="#8B86F0" opacity="0.35" />
  </svg>
);
