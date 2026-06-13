import { motion } from 'framer-motion';

interface SpeedStreaksProps {
  side?: 'left' | 'right';
}

// Each entry: pct = line width as % of container, h = height px, edge/mid opacity
const STREAKS: { pct: number; h: number; edge: number; mid: number }[] = [
  { pct: 22, h: 1.0, edge: 0.30, mid: 0.14 },
  { pct: 42, h: 1.5, edge: 0.25, mid: 0.12 },
  { pct: 58, h: 2.5, edge: 0.22, mid: 0.10 }, // thickest / longest
  { pct: 36, h: 1.5, edge: 0.28, mid: 0.13 },
  { pct: 18, h: 1.0, edge: 0.32, mid: 0.15 },
];

export default function SpeedStreaks({ side = 'left' }: SpeedStreaksProps) {
  // Left = logo B-pink, Right = logo L-cyan
  const rgb   = side === 'left' ? '233,30,140' : '15,168,220';
  const bgDir = side === 'left' ? '90deg' : '270deg';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        height: '80px',
        overflow: 'hidden',
        pointerEvents: 'none',
        // Self-contained colour wash — does not depend on canvas showing through
        background:
          side === 'left'
            ? `linear-gradient(90deg, rgba(${rgb},0.05) 0%, transparent 65%)`
            : `linear-gradient(270deg, rgba(${rgb},0.06) 0%, transparent 65%)`,
      }}
    >
      {STREAKS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-8px' }}
          transition={{ duration: 0.9, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: `${10 + i * 13}px`,
            ...(side === 'left' ? { left: 0 } : { right: 0 }),
            width: `${s.pct}%`,
            height: `${s.h}px`,
            borderRadius: '999px',
            transformOrigin: side === 'left' ? 'left center' : 'right center',
            background: `linear-gradient(${bgDir}, rgba(${rgb},${s.edge}) 0%, rgba(${rgb},${s.mid}) 55%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}
