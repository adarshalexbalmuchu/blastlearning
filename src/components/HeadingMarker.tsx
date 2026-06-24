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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DOT_VARIANTS: any = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.35, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeadingMarker({ text, marginBottom = '20px', fontSize = '12px', accent }: HeadingMarkerProps) {
  const dots = accent === '#E8135A' ? PINK_DOTS : CYAN_DOTS;
  const textColor = accent ?? '#4B6B80';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.38, duration: 0.35 } } }}
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
