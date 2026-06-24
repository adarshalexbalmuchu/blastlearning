import { motion, type Variants, type FC } from 'framer-motion';
import step1Img from '../assets/how-it-works/Group 13.png';
import step2Img from '../assets/how-it-works/Group 14.png';
import step3Img from '../assets/how-it-works/Group 15.png';
import step4Img from '../assets/how-it-works/Group 16.png';

export function UploadVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={step1Img}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 70%', display: 'block' }}
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
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 70%', display: 'block' }}
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
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 70%', display: 'block' }}
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
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center 70%', display: 'block' }}
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
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
  height?: number | string;
  descLines?: number;
}

export default function HowItWorksCard({ title, desc, accent: _accent, Visual, height = '380px', descLines = 3 }: HowItWorksCardProps) {
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
          bottom: '14px',
          left: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.84)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '14px 16px 12px',
          border: '1px solid rgba(255,255,255,0.65)',
          zIndex: 5,
          maxHeight: '54%',
          overflow: 'hidden',
        }}
      >
        <motion.h3
          variants={titleVariants}
          style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            color: '#1C1C28',
            lineHeight: 1.35,
            margin: '0 0 5px',
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
