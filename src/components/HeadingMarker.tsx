import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeadingMarkerProps = {
  text: ReactNode;
  marginBottom?: string;
  fontSize?: string;
  accent?: string;
};

const CYAN_DOTS = ['#D2E9F8', '#BFDFF4', '#A6D4EE', '#7CBFE7', '#0FA8DC'];
const PINK_DOTS = ['#FAD9E3', '#F5B3C8', '#F08CAD', '#EB6592', '#E8135A'];
const MARKER_WIDTHS = ['4px', '4px', '4px', '4px', '16px'];

// Each dot: blink twice (0→1→0→1) then lock in, staggered per index
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DOT_VARIANTS: any = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (i: number) => ({
    opacity:  [0, 1, 0, 1],
    scaleX:   [0, 1.3, 0.9, 1],
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      times: [0, 0.35, 0.65, 1],
      ease: 'easeOut',
    },
  }),
};

// Text blinks in after all dots have settled
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TEXT_VARIANTS: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0, 1],
    transition: {
      delay: MARKER_WIDTHS.length * 0.1 + 0.1,
      duration: 0.5,
      times: [0, 0.3, 0.6, 1],
      ease: 'easeOut',
    },
  },
};

export default function HeadingMarker({ text, marginBottom = '20px', fontSize = '12px', accent }: HeadingMarkerProps) {
  const dots = accent === '#E8135A' ? PINK_DOTS : CYAN_DOTS;
  const textColor = accent ?? '#4B6B80';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom,
      }}
    >
      <motion.span
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', transform: 'translateY(0.5px)' }}
        aria-hidden="true"
      >
        {MARKER_WIDTHS.map((width, idx) => (
          <motion.span
            key={`${width}-${idx}`}
            custom={idx}
            variants={DOT_VARIANTS}
            style={{
              width,
              height: '4px',
              borderRadius: '9999px',
              background: dots[idx],
              display: 'inline-block',
              transformOrigin: 'left',
            }}
          />
        ))}
      </motion.span>

      <motion.span
        variants={TEXT_VARIANTS}
        style={{
          fontSize,
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          color: textColor,
          letterSpacing: '0.01em',
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
