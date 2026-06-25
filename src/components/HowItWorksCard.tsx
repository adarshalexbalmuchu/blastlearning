import { type FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import step1Img from '../assets/method-science-new/1.png';
import step2Img from '../assets/method-science-new/2.png';
import step3Img from '../assets/method-science-new/3.png';
import step4Img from '../assets/method-science-new/4.png';

export function UploadVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={step1Img}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 62%', transform: 'translateY(-60px)', display: 'block' }}
      />
    </div>
  );
}

export function AIVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={step2Img}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 62%', transform: 'translateY(-60px)', display: 'block' }}
      />
    </div>
  );
}

export function MasteryVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={step3Img}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 62%', transform: 'translateY(-60px)', display: 'block' }}
      />
    </div>
  );
}

export function GapVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={step4Img}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 60%', transform: 'translateY(-78px)', display: 'block' }}
      />
    </div>
  );
}

// ── Animation variants (match site-wide motion language) ──────────────────────

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const descVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Card Component ─────────────────────────────────────────────────────────────

interface HowItWorksCardProps {
  num?: string;
  eyebrow?: string;
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
  height?: number | string;
  descLines?: number;
}

export default function HowItWorksCard({ num, eyebrow, title, desc, accent, Visual, height = '300px', descLines = 3 }: HowItWorksCardProps) {
  const stepNumber = Number.parseInt(num ?? '', 10);
  const labelAccent = Number.isNaN(stepNumber) ? accent : (stepNumber % 2 === 1 ? '#E8135A' : '#0FA8DC');

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 0,
        overflow: 'visible',
        height,
        border: 'none',
        boxShadow: 'none',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Full-card background illustration */}
      <Visual />

      {/* Frosted glass info overlay — animates in on scroll, lifts on hover */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -6 }}
        viewport={{ once: true, margin: '-6% 0px' }}
        variants={overlayVariants}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{
          position: 'absolute',
          bottom: '2px',
          left: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.84)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '18px',
          padding: '10px 12px 2px',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 12px 30px rgba(28,28,40,0.10)',
          zIndex: 5,
          height: '44%',
          maxHeight: '44%',
          overflow: 'hidden',
        }}
      >
        {(num || eyebrow) && (
          <motion.div
            variants={titleVariants}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 8px' }}
          >
            <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <span style={{ width: '3px', height: '3px', borderRadius: '9999px', background: labelAccent }} />
              <span style={{ width: '4px', height: '4px', borderRadius: '9999px', background: labelAccent }} />
              <span style={{ width: '5px', height: '5px', borderRadius: '9999px', background: labelAccent }} />
              <span style={{ width: '8px', height: '2px', borderRadius: '9999px', background: labelAccent }} />
              <span style={{ width: '13px', height: '2px', borderRadius: '9999px', background: labelAccent }} />
            </span>
            {eyebrow && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: labelAccent,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.35,
                }}
              >
                {eyebrow}
              </span>
            )}
          </motion.div>
        )}
        <motion.h3
          variants={titleVariants}
          style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#1C1C28',
            lineHeight: 1.35,
            margin: '0 0 4px',
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          variants={descVariants}
          style={{
            fontSize: '12.5px',
            color: '#5A5A6E',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.55,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: descLines,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {desc}
        </motion.p>
      </motion.div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '55%',
          background: 'linear-gradient(180deg, rgba(10,10,18,0) 0%, rgba(10,10,18,0.22) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
