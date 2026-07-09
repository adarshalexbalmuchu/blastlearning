import { useId } from 'react';

interface BrandArcProps {
  width?: number | string;
  opacity?: number;
  color1?: string;
  color2?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BrandArc({
  width = 600,
  opacity = 0.07,
  color1 = '#0FA8DC',
  color2 = '#8B5CF6',
  className = '',
  style,
}: BrandArcProps) {
  const uid = useId();
  const gradId = `arc-grad-${uid.replace(/:/g, '')}`;

  return (
    <svg
      width={width}
      viewBox="0 0 600 240"
      fill="none"
      aria-hidden="true"
      style={{ opacity, pointerEvents: 'none', display: 'block', ...style }}
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color1} stopOpacity="0" />
          <stop offset="35%" stopColor={color1} stopOpacity="1" />
          <stop offset="65%" stopColor={color2} stopOpacity="1" />
          <stop offset="100%" stopColor={color2} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0,220 Q 300,20 600,220"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 40,228 Q 300,48 560,228"
        stroke={`url(#${gradId})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M 90,234 Q 300,78 510,234"
        stroke={`url(#${gradId})`}
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity={0.25}
      />
    </svg>
  );
}
