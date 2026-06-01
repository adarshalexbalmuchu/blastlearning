import { useState, useRef } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const COLUMN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function RollingNumber({ value, play, reduce }: { value: string; play: boolean; reduce: boolean }) {
  return (
    <span aria-label={value} style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
      {value.split('').map((ch, i) => {
        if (ch >= '0' && ch <= '9') {
          const d = Number(ch);
          const offset = reduce || play ? d : 0;
          return (
            <span key={i} aria-hidden="true" style={{ display: 'inline-block', height: '1em', lineHeight: '1em', overflow: 'hidden' }}>
              <span style={{ display: 'flex', flexDirection: 'column', transform: `translateY(-${offset}em)`, transition: reduce ? 'none' : 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: reduce ? '0s' : `${i * 0.08}s`, willChange: 'transform' }}>
                {COLUMN.map((n) => (<span key={n} style={{ height: '1em', lineHeight: '1em' }}>{n}</span>))}
              </span>
            </span>
          );
        }
        return <span key={i} aria-hidden="true" style={{ display: 'inline-block', height: '1em', lineHeight: '1em' }}>{ch}</span>;
      })}
    </span>
  );
}

// ── Inline SVG popup characters ────────────────────────────────────────────────

function StudentChar({ color }: { color: string }) {
  return (
    <svg width="90" height="112" viewBox="0 0 90 112" fill="none">
      {/* Grad cap */}
      <polygon points="45,6 76,22 45,34 14,22" fill={color} />
      <rect x="41" y="22" width="7" height="14" fill={color} opacity="0.72" />
      <circle cx="48" cy="37" r="4" fill={color} opacity="0.8" />
      {/* Head */}
      <circle cx="45" cy="62" r="22" fill={color} opacity="0.9" />
      {/* Eyes */}
      <circle cx="37" cy="57" r="3.5" fill="white" />
      <circle cx="53" cy="57" r="3.5" fill="white" />
      <circle cx="38.5" cy="58.5" r="1.8" fill="#1C1C28" />
      <circle cx="54.5" cy="58.5" r="1.8" fill="#1C1C28" />
      {/* Smile */}
      <path d="M36 70 Q45 79 54 70" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <circle cx="31" cy="64" r="5.5" fill={color} opacity="0.28" />
      <circle cx="59" cy="64" r="5.5" fill={color} opacity="0.28" />
      {/* Shoulders */}
      <path d="M14 104 Q22 86 45 84 Q68 86 76 104" fill={color} opacity="0.42" />
    </svg>
  );
}

function StarChar({ color }: { color: string }) {
  return (
    <svg width="100" height="108" viewBox="0 0 100 108" fill="none">
      {/* Star body */}
      <path d="M50 8 L60 34 L88 34 L66 51 L74 77 L50 60 L26 77 L34 51 L12 34 L40 34 Z" fill={color} opacity="0.9" />
      {/* Eyes */}
      <circle cx="41" cy="41" r="4" fill="white" />
      <circle cx="59" cy="41" r="4" fill="white" />
      <circle cx="42.5" cy="42.5" r="2" fill="#1C1C28" />
      <circle cx="60.5" cy="42.5" r="2" fill="#1C1C28" />
      {/* Smile */}
      <path d="M39 54 Q50 64 61 54" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <circle cx="33" cy="49" r="4.5" fill="white" opacity="0.18" />
      <circle cx="67" cy="49" r="4.5" fill="white" opacity="0.18" />
      {/* Sparkles */}
      <circle cx="88" cy="16" r="4" fill={color} opacity="0.5" />
      <circle cx="12" cy="22" r="3" fill={color} opacity="0.4" />
      <circle cx="90" cy="68" r="2.5" fill={color} opacity="0.35" />
    </svg>
  );
}

function BulbChar({ color }: { color: string }) {
  return (
    <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
      {/* Bulb globe */}
      <path d="M45 8 C63 8 73 20 73 35 C73 47 65 56 59 63 L59 74 L31 74 L31 63 C25 56 17 47 17 35 C17 20 27 8 45 8 Z" fill={color} opacity="0.9" />
      {/* Base rings */}
      <rect x="31" y="74" width="28" height="6" rx="2" fill={color} opacity="0.72" />
      <rect x="33" y="80" width="24" height="6" rx="2" fill={color} opacity="0.55" />
      <rect x="35" y="86" width="20" height="5" rx="2" fill={color} opacity="0.4" />
      {/* Eyes */}
      <circle cx="37" cy="31" r="4" fill="white" />
      <circle cx="53" cy="31" r="4" fill="white" />
      <circle cx="38.5" cy="32.5" r="2" fill="#1C1C28" />
      <circle cx="54.5" cy="32.5" r="2" fill="#1C1C28" />
      {/* Smile */}
      <path d="M36 44 Q45 53 54 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <circle cx="31" cy="39" r="4" fill="white" opacity="0.18" />
      <circle cx="59" cy="39" r="4" fill="white" opacity="0.18" />
      {/* Glow rays */}
      <line x1="45" y1="2" x2="45" y2="6" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="74" y1="13" x2="71" y2="16" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="16" y1="13" x2="19" y2="16" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function TVChar({ color }: { color: string }) {
  return (
    <svg width="100" height="106" viewBox="0 0 100 106" fill="none">
      {/* Monitor */}
      <rect x="6" y="10" width="80" height="58" rx="9" fill={color} opacity="0.9" />
      {/* Screen */}
      <rect x="13" y="17" width="66" height="44" rx="6" fill="#1C1C28" opacity="0.52" />
      {/* Eyes */}
      <circle cx="37" cy="34" r="5.5" fill="white" />
      <circle cx="55" cy="34" r="5.5" fill="white" />
      <circle cx="38.5" cy="35.5" r="2.5" fill="#1C1C28" />
      <circle cx="56.5" cy="35.5" r="2.5" fill="#1C1C28" />
      {/* Smile */}
      <path d="M34 49 Q46 59 58 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <circle cx="30" cy="41" r="4.5" fill="white" opacity="0.15" />
      <circle cx="62" cy="41" r="4.5" fill="white" opacity="0.15" />
      {/* Stand */}
      <rect x="41" y="68" width="10" height="10" rx="2" fill={color} opacity="0.62" />
      <rect x="29" y="77" width="34" height="6" rx="3" fill={color} opacity="0.45" />
      {/* Sparkles */}
      <circle cx="90" cy="20" r="3.5" fill={color} opacity="0.5" />
      <circle cx="7" cy="55" r="2.5" fill={color} opacity="0.4" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  bg: string;
  accent: string;
  Char: ({ color }: { color: string }) => ReactElement;
}

const STATS: StatItem[] = [
  { value: '4,999+',  label: 'Students Learning',    bg: '#FDF3E7', accent: '#D97706', Char: StudentChar },
  { value: '4.8/5',   label: 'Average Parent Rating', bg: '#FCEEF1', accent: '#F03C6F', Char: StarChar },
  { value: '50,000+', label: 'Practice Questions',    bg: '#E7F6FB', accent: '#0FA8DC', Char: BulbChar },
  { value: '1,200+',  label: 'Video Lessons',         bg: '#F0EDFC', accent: '#7C3AED', Char: TVChar },
];

// ── Card ───────────────────────────────────────────────────────────────────────

function StatCard({ stat, index, inView, reduce }: { stat: StatItem; index: number; inView: boolean; reduce: boolean }) {
  const [hovered, setHovered] = useState(false);
  const { Char } = stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => !reduce && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="trust-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: stat.bg,
        borderRadius: '20px',
        padding: '32px 20px 18px',
        minHeight: '210px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        cursor: 'default',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem, 4.5vw, 2.75rem)', color: '#1C1C28', lineHeight: 1, marginBottom: '10px' }}>
        <RollingNumber value={stat.value} play={inView} reduce={reduce} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, fontSize: '14px', fontWeight: 500, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
        {stat.label}
      </div>

      {/* Popup character — slides up from below on hover */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        style={{
          position: 'absolute',
          bottom: '-8px',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'fit-content',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <Char color={stat.accent} />
      </motion.div>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion() ?? false;

  return (
    <section ref={ref} style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', marginBottom: '14px' }}>
            Trusted by Students and Parents
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            Do not just take our word for it. The numbers tell the story.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '48px' }} className="grid-cols-4-md">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} inView={inView} reduce={reduce} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/programs"
            className="cta cta-pink"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 36px', borderRadius: '10px', background: '#F03C6F', color: '#FFFFFF', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 18px rgba(240,60,111,0.28)' }}
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
