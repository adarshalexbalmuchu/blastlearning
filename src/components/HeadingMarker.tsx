import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type HeadingMarkerProps = {
  text: ReactNode;
  marginBottom?: string;
  fontSize?: string;
  accent?: string;
  alignItems?: string;
  noWrap?: boolean;
};

// Light-to-full tint progression derived from the accent color itself, so the
// dots always match the eyebrow text next to them regardless of which accent
// is passed in (previously only exact blue/pink had matching dot palettes —
// any other accent, e.g. indigo or amber, silently fell back to blue dots).
function tint(hex: string, whiteAmount: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * whiteAmount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function markerColors(accent: string): string[] {
  return [tint(accent, 0.8), tint(accent, 0.55), accent, accent, accent];
}

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

export default function HeadingMarker({ text, marginBottom = '12px', fontSize = '12px', accent, alignItems = 'center', noWrap = false }: HeadingMarkerProps) {
  const textColor = accent ?? '#0FA8DC';
  const colors = markerColors(textColor);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      style={{
        display: noWrap ? 'flex' : 'inline-flex',
        alignItems,
        gap: '8px',
        marginBottom,
        maxWidth: noWrap ? '100%' : undefined,
        overflow: noWrap ? 'hidden' : undefined,
      }}
    >
      <motion.span
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
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
          ...(noWrap ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 } : {}),
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
