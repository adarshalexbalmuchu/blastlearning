import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeadingMarkerProps = {
  text: ReactNode;
  marginBottom?: string;
  fontSize?: string;
  accent?: string;
};

const CYAN_COLORS = ['#D2E9F8', '#A6D4EE', '#0FA8DC', '#0FA8DC', '#0FA8DC'];
const PINK_COLORS = ['#FAD9E3', '#F08CAD', '#E8135A', '#E8135A', '#E8135A'];

// 3 circles (increasing size) then 2 dashes (increasing length)
const MARKER_SHAPES = [
  { width: '3px',  height: '3px'  },
  { width: '4px',  height: '4px'  },
  { width: '5px',  height: '5px'  },
  { width: '8px',  height: '2px'  },
  { width: '13px', height: '2px'  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DOT_VARIANTS: any = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity:  [0, 1, 0, 1],
    scale:    [0, 1.25, 0.9, 1],
    transition: {
      delay: i * 0.09,
      duration: 0.5,
      times: [0, 0.35, 0.65, 1],
      ease: 'easeOut',
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TEXT_VARIANTS: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0, 1],
    transition: {
      delay: MARKER_SHAPES.length * 0.09 + 0.1,
      duration: 0.5,
      times: [0, 0.3, 0.6, 1],
      ease: 'easeOut',
    },
  },
};

export default function HeadingMarker({ text, marginBottom = '12px', fontSize = '12px', accent }: HeadingMarkerProps) {
  const colors = accent === '#E8135A' ? PINK_COLORS : CYAN_COLORS;
  const textColor = accent ?? '#4B6B80';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: '8px',
        marginBottom,
      }}
    >
      <motion.span
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        aria-hidden="true"
      >
        {MARKER_SHAPES.map(({ width, height }, idx) => (
          <motion.span
            key={idx}
            custom={idx}
            variants={DOT_VARIANTS}
            style={{
              width,
              height,
              borderRadius: '9999px',
              background: colors[idx],
              display: 'inline-block',
              transformOrigin: 'center',
            }}
          />
        ))}
      </motion.span>

      <motion.span
        variants={TEXT_VARIANTS}
        style={{
          fontSize,
          fontWeight: 400,
          fontFamily: 'Inter, sans-serif',
          color: textColor,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
