import { motion } from 'framer-motion';

/**
 * Visual divider between page sections.
 * Each streak mirrors the logo's horizontal speed lines:
 *   side="left"  → pink  (from the "B" letterform + speed marks)
 *   side="right" → cyan  (from the "L" letterform)
 * The transparent background reveals the fixed brand canvas gradient beneath.
 */

interface SpeedStreaksProps {
  side?: 'left' | 'right';
}

const STREAKS: { pct: number; h: number; op: number }[] = [
  { pct: 28, h: 0.8, op: 0.10 },
  { pct: 46, h: 1.5, op: 0.08 },
  { pct: 58, h: 2.0, op: 0.07 },
  { pct: 38, h: 1.0, op: 0.09 },
  { pct: 20, h: 0.8, op: 0.10 },
];

export default function SpeedStreaks({ side = 'left' }: SpeedStreaksProps) {
  const rgb = side === 'left' ? '233,30,140' : '15,168,220';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        height: '64px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {STREAKS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-8px' }}
          transition={{ duration: 0.85, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: `${8 + i * 11}px`,
            ...(side === 'left' ? { left: 0 } : { right: 0 }),
            width: `${s.pct}%`,
            height: `${s.h}px`,
            borderRadius: '999px',
            transformOrigin: side === 'left' ? 'left center' : 'right center',
            background:
              side === 'left'
                ? `linear-gradient(90deg, rgba(${rgb},${+(s.op * 2.5).toFixed(3)}) 0%, rgba(${rgb},${s.op}) 55%, transparent 100%)`
                : `linear-gradient(270deg, rgba(${rgb},${+(s.op * 2.5).toFixed(3)}) 0%, rgba(${rgb},${s.op}) 55%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}
