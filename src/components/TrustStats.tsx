import { useState, useRef } from 'react';
import type { ReactElement } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const COLUMN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slot-machine number: each digit rolls up to its value, separators/suffix stay put.
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

// ── Big popup characters (rise from the bottom of the card on hover) ─────────────

function GradStudent({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="140" rx="50" ry="8" fill={color} opacity="0.12" />
      {/* shoulders */}
      <path d="M30 150 Q40 112 75 110 Q110 112 120 150 Z" fill={color} opacity="0.5" />
      {/* head */}
      <circle cx="75" cy="86" r="30" fill={color} opacity="0.95" />
      {/* cheeks */}
      <circle cx="59" cy="90" r="7" fill="#fff" opacity="0.25" />
      <circle cx="91" cy="90" r="7" fill="#fff" opacity="0.25" />
      {/* eyes */}
      <circle cx="65" cy="82" r="4.5" fill="#fff" />
      <circle cx="85" cy="82" r="4.5" fill="#fff" />
      <circle cx="66.5" cy="83.5" r="2.2" fill="#1C1C28" />
      <circle cx="86.5" cy="83.5" r="2.2" fill="#1C1C28" />
      {/* smile */}
      <path d="M63 96 Q75 107 87 96" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* graduation cap */}
      <polygon points="75,40 120,58 75,76 30,58" fill={color} />
      <rect x="70" y="58" width="10" height="20" fill={color} opacity="0.7" />
      <circle cx="75" cy="80" r="5" fill={color} opacity="0.85" />
      {/* tassel */}
      <path d="M118 58 L118 78" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="118" cy="80" r="4" fill={color} />
    </svg>
  );
}

function RatingStar({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="142" rx="46" ry="7" fill={color} opacity="0.12" />
      {/* star body */}
      <path d="M75 26 L91 64 L132 67 L100 93 L111 134 L75 110 L39 134 L50 93 L18 67 L59 64 Z" fill={color} opacity="0.95" />
      {/* eyes */}
      <circle cx="63" cy="78" r="5" fill="#fff" />
      <circle cx="87" cy="78" r="5" fill="#fff" />
      <circle cx="64.5" cy="79.5" r="2.4" fill="#1C1C28" />
      <circle cx="88.5" cy="79.5" r="2.4" fill="#1C1C28" />
      {/* smile */}
      <path d="M62 92 Q75 104 88 92" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" fill="none" />
      {/* blush */}
      <circle cx="53" cy="86" r="6" fill="#fff" opacity="0.22" />
      <circle cx="97" cy="86" r="6" fill="#fff" opacity="0.22" />
      {/* sparkles */}
      <circle cx="128" cy="34" r="5" fill={color} opacity="0.55" />
      <circle cx="22" cy="44" r="4" fill={color} opacity="0.45" />
    </svg>
  );
}

function GrowthRocket({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="143" rx="40" ry="7" fill={color} opacity="0.12" />
      {/* rising bars */}
      <rect x="26" y="104" width="16" height="34" rx="4" fill={color} opacity="0.35" />
      <rect x="108" y="92" width="16" height="46" rx="4" fill={color} opacity="0.35" />
      {/* rocket body */}
      <path d="M75 30 C92 44 96 70 92 92 L58 92 C54 70 58 44 75 30 Z" fill={color} opacity="0.95" />
      {/* window */}
      <circle cx="75" cy="64" r="11" fill="#fff" />
      <circle cx="75" cy="64" r="6" fill={color} opacity="0.55" />
      {/* fins */}
      <path d="M58 88 L44 104 L58 100 Z" fill={color} opacity="0.8" />
      <path d="M92 88 L106 104 L92 100 Z" fill={color} opacity="0.8" />
      {/* flame */}
      <path d="M66 94 Q75 122 84 94 Q75 104 66 94 Z" fill={color} opacity="0.7" />
      {/* up arrow */}
      <path d="M75 18 L82 28 L77 28 L77 36 L73 36 L73 28 L68 28 Z" fill={color} />
    </svg>
  );
}

function MapPinChar({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="140" rx="30" ry="6" fill={color} opacity="0.16" />
      {/* pin body */}
      <path d="M75 24 C53 24 36 41 36 63 C36 92 75 134 75 134 C75 134 114 92 114 63 C114 41 97 24 75 24 Z" fill={color} opacity="0.95" />
      {/* face circle */}
      <circle cx="75" cy="60" r="22" fill="#fff" />
      {/* eyes */}
      <circle cx="67" cy="56" r="3.6" fill="#1C1C28" />
      <circle cx="83" cy="56" r="3.6" fill="#1C1C28" />
      {/* smile */}
      <path d="M65 67 Q75 77 85 67" stroke="#1C1C28" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* blush */}
      <circle cx="60" cy="64" r="4.5" fill={color} opacity="0.3" />
      <circle cx="90" cy="64" r="4.5" fill={color} opacity="0.3" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  bg: string;
  accent: string;
  Char: ({ color }: { color: string }) => ReactElement;
}

const STATS: StatItem[] = [
  { value: '4,999+', label: 'Students Enrolled',     bg: '#FDF3E7', accent: '#D97706', Char: GradStudent },
  { value: '4.8/5',  label: 'Parent Satisfaction',   bg: '#FCEEF1', accent: '#F03C6F', Char: RatingStar },
  { value: '91%',    label: 'Academic Improvement',  bg: '#E7F6FB', accent: '#0FA8DC', Char: GrowthRocket },
  { value: '49+',    label: 'Cities Across India',   bg: '#F0EDFC', accent: '#7C3AED', Char: MapPinChar },
];

// ── Card ───────────────────────────────────────────────────────────────────────

function StatCard({ stat, index, inView, reduce }: { stat: StatItem; index: number; inView: boolean; reduce: boolean }) {
  const [hovered, setHovered] = useState(false);
  const { Char } = stat;
  const active = hovered && !reduce;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: stat.bg,
        borderRadius: '20px',
        minHeight: '248px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'default',
        boxShadow: active ? '0 20px 46px rgba(28,28,40,0.13)' : '0 2px 10px rgba(28,28,40,0.04)',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      {/* Number + label — slide up to make room for the character on hover */}
      <motion.div
        animate={active ? { y: -34 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 2.9rem)', color: '#1C1C28', lineHeight: 1, marginBottom: '10px' }}>
          <RollingNumber value={stat.value} play={inView} reduce={reduce} />
        </div>
        <div style={{ fontSize: '14px', fontWeight: 500, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
          {stat.label}
        </div>
      </motion.div>

      {/* Popup character — springs up from below the card on hover */}
      <motion.div
        initial={false}
        animate={active ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        style={{ position: 'absolute', bottom: '-6px', left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}
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
    <section ref={ref} style={{ paddingTop: '88px', paddingBottom: '88px', background: '#F7F7F8' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
            By the numbers
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            A Platform Trusted by<br />Families Across India
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', marginTop: '14px', lineHeight: 1.6 }}>
            The numbers speak for themselves — hover a card to meet the story behind it.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '56px' }} className="grid-cols-4-lg">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} inView={inView} reduce={reduce} />
          ))}
        </div>

        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <TestimonialCard
            name="Priya Nair"
            role="Parent of Class 10 student, Chennai"
            content="Blast Learning completely changed how my daughter studies. Her board exam preparation used to be chaotic, but now she has a clear plan and her retention scores are remarkable. I can see her progress every day on the parent dashboard."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
}
