import { motion } from 'framer-motion';

interface SpeedStreaksProps {
  side?: 'left' | 'right';
}

// Mirrors the logo's horizontal speed marks — lengths and weights match the B letterform
const STREAKS: { pct: number; h: number; edge: number; mid: number }[] = [
  { pct: 22, h: 1.5, edge: 0.45, mid: 0.20 },
  { pct: 40, h: 2.0, edge: 0.38, mid: 0.17 },
  { pct: 55, h: 3.0, edge: 0.32, mid: 0.14 }, // thickest / longest
  { pct: 35, h: 2.0, edge: 0.40, mid: 0.18 },
  { pct: 18, h: 1.5, edge: 0.48, mid: 0.22 },
];

export default function SpeedStreaks({ side = 'left' }: SpeedStreaksProps) {
  const rgb   = side === 'left' ? '233,30,140' : '15,168,220';
  const bgDir = side === 'left' ? '90deg' : '270deg';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        height: '88px',
        overflow: 'hidden',
        pointerEvents: 'none',
        background:
          side === 'left'
            ? `linear-gradient(90deg, rgba(${rgb},0.10) 0%, transparent 60%)`
            : `linear-gradient(270deg, rgba(${rgb},0.10) 0%, transparent 60%)`,
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
            top: `${10 + i * 14}px`,
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
