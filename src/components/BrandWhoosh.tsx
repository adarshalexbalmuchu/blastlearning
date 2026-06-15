import { useId } from 'react';

interface BrandWhooshProps {
  style?: React.CSSProperties;
  opacity?: number;
}

const BrandWhoosh = ({ style, opacity = 0.12 }: BrandWhooshProps) => {
  const uid = useId().replace(/:/g, 'x');
  const gId = `bwg-${uid}`;
  const bId = `bwb-${uid}`;
  const bsId = `bwbs-${uid}`;

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, opacity, ...style }}
    >
      <defs>
        <linearGradient id={gId} gradientUnits="userSpaceOnUse" x1="0" y1="500" x2="500" y2="0">
          <stop offset="0%"   stopColor="#0FA8DC" stopOpacity="0" />
          <stop offset="20%"  stopColor="#0FA8DC" />
          <stop offset="48%"  stopColor="#8B5CF6" />
          <stop offset="75%"  stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF3CAC" stopOpacity="0" />
        </linearGradient>
        <filter id={bId}><feGaussianBlur stdDeviation="5" /></filter>
        <filter id={bsId}><feGaussianBlur stdDeviation="2.5" /></filter>
      </defs>
      <line x1="-80" y1="580" x2="580" y2="-80" stroke={`url(#${gId})`} strokeWidth="32" filter={`url(#${bId})`} />
      <line x1="-40" y1="580" x2="580" y2="-40" stroke={`url(#${gId})`} strokeWidth="17" filter={`url(#${bId})`} />
      <line x1="0"   y1="580" x2="580" y2="0"   stroke={`url(#${gId})`} strokeWidth="9"  filter={`url(#${bsId})`} />
      <line x1="60"  y1="580" x2="580" y2="60"  stroke={`url(#${gId})`} strokeWidth="28" filter={`url(#${bId})`} />
      <line x1="100" y1="580" x2="580" y2="100" stroke={`url(#${gId})`} strokeWidth="15" filter={`url(#${bId})`} />
      <line x1="148" y1="580" x2="580" y2="148" stroke={`url(#${gId})`} strokeWidth="8"  filter={`url(#${bsId})`} />
      <line x1="200" y1="580" x2="580" y2="200" stroke={`url(#${gId})`} strokeWidth="22" filter={`url(#${bId})`} />
    </svg>
  );
};

export default BrandWhoosh;
