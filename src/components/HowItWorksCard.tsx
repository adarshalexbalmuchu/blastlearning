import { useId } from 'react';
import { type FC } from 'react';

// ── Keyframe injected once per card render (deduped by browser) ───────────────
const KEYFRAMES = `
@keyframes hwDrift {
  0%   { transform: translate(0px,   0px); }
  50%  { transform: translate(50px, 50px); }
  100% { transform: translate(0px,   0px); }
}
@keyframes hwGlow {
  0%, 100% { opacity: 0.42; }
  50%       { opacity: 0.65; }
}
`;

// ── Speed-line visual header ───────────────────────────────────────────────────
// SVG is square (480×480) so x/y scales are equal → 45° lines are exact.
// Lines spaced 100 SVG-units apart. The drift animation moves (50,50) and
// reverses, so there is no loop seam — it oscillates smoothly.

function SpeedLinesVisual({ color, step }: { color: string; step: string }) {
  const uid = useId().replace(/:/g, 'x');
  const gId = `hw-g-${uid}`;
  const bId = `hw-b-${uid}`;
  const bsId = `hw-bs-${uid}`;

  // Lines: y = -x + c, c spaced 100 units apart. Range covers 480px card + 50px drift
  const cValues = [-100, 0, 100, 200, 300, 400, 500, 600];
  const widths =   [ 28,  14,  22,  10,  26,  12,  20,  16];
  const blurred =  [true, false, true, false, true, false, true, false];

  return (
    <div
      style={{
        height: '180px',
        background: `linear-gradient(150deg, ${color}09 0%, ${color}1C 100%)`,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '18px 18px 0 0',
      }}
    >
      <style>{KEYFRAMES}</style>

      {/* Animated speed lines */}
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          top: '-150px',
          left: '-40px',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
          animation: 'hwDrift 5s ease-in-out infinite, hwGlow 5s ease-in-out infinite',
        }}
      >
        <defs>
          <linearGradient id={gId} gradientUnits="userSpaceOnUse" x1="0" y1="480" x2="480" y2="0">
            <stop offset="0%"   stopColor={color} stopOpacity="0" />
            <stop offset="22%"  stopColor={color} />
            <stop offset="78%"  stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id={bId}><feGaussianBlur stdDeviation="5" /></filter>
          <filter id={bsId}><feGaussianBlur stdDeviation="2.5" /></filter>
        </defs>

        {cValues.map((c, i) => (
          <line
            key={i}
            x1={c - 480} y1="960"
            x2={c + 480} y2="0"
            stroke={`url(#${gId})`}
            strokeWidth={widths[i]}
            filter={blurred[i] ? `url(#${bId})` : `url(#${bsId})`}
          />
        ))}
      </svg>

      {/* Large watermark number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-10px',
          right: '14px',
          fontSize: '112px',
          fontWeight: 900,
          fontFamily: 'Poppins, sans-serif',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          color: color,
          opacity: 0.09,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {step}
      </div>
    </div>
  );
}

// ── Exported Visual Variants ──────────────────────────────────────────────────

export function UploadVisual() {
  return <SpeedLinesVisual color="#0FA8DC" step="01" />;
}

export function AIVisual() {
  return <SpeedLinesVisual color="#8B5CF6" step="02" />;
}

export function MasteryVisual() {
  return <SpeedLinesVisual color="#FF3CAC" step="03" />;
}

// ── Main Export ───────────────────────────────────────────────────────────────

interface HowItWorksCardProps {
  num: string;
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
}

export default function HowItWorksCard({ num, title, desc, accent, Visual }: HowItWorksCardProps) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1.5px solid #ECECF1',
        boxShadow: '0 4px 24px rgba(28,28,40,0.07)',
      }}
    >
      <Visual />
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{
            width: '30px', height: '30px',
            borderRadius: '9px',
            background: `linear-gradient(135deg, ${accent}CC, ${accent})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            boxShadow: `0 4px 12px ${accent}44`,
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>
              {num}
            </span>
          </div>
          <span style={{
            fontSize: '11px', fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            color: accent,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            opacity: 0.75,
          }}>
            Step {num}
          </span>
        </div>
        <h3 style={{
          fontSize: '17px', fontWeight: 700, marginBottom: '10px',
          fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1.35,
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '14px', lineHeight: 1.7,
          color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0,
        }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
