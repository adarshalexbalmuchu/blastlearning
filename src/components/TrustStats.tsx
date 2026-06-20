import { useState, useRef } from 'react';
import type { ReactElement } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

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

// ── Star path helper ─────────────────────────────────────────────────────────

const starPts = (cx: number, cy: number, R = 13, r = 5): string =>
  Array.from({ length: 10 }, (_, i) => {
    const a = (i * 36 - 90) * Math.PI / 180;
    const rad = i % 2 === 0 ? R : r;
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

// ── Premium Illustrations ────────────────────────────────────────────────────

function GradStudent({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gs-top" x1="30" y1="35" x2="118" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.72" />
        </linearGradient>
      </defs>
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      <rect x="44" y="98" width="62" height="38" rx="9" fill="white" opacity="0.95" />
      <rect x="44" y="98" width="62" height="7" rx="4" fill={color} opacity="0.28" />
      <rect x="44" y="129" width="62" height="7" rx="4" fill={color} opacity="0.28" />
      <rect x="56" y="113" width="38" height="3" rx="1.5" fill={color} opacity="0.2" />
      <rect x="60" y="121" width="30" height="3" rx="1.5" fill={color} opacity="0.14" />
      <circle cx="75" cy="126" r="9" fill={color} opacity="0.18" />
      <circle cx="75" cy="126" r="6" fill={color} opacity="0.42" />
      <path d="M72 123 L78 123 M75 120 L75 126" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M75 33 L129 61 L75 89 L21 61 Z" fill="url(#gs-top)" />
      <path d="M75 33 L102 47 L75 61 L48 47 Z" fill="white" opacity="0.14" />
      <path d="M21 61 L75 89 L75 99 L21 71 Z" fill={color} opacity="0.44" />
      <path d="M75 89 L129 61 L129 71 L75 99 Z" fill={color} opacity="0.34" />
      <rect x="67" y="81" width="16" height="13" rx="4" fill={color} />
      <rect x="67" y="81" width="16" height="13" rx="4" fill="white" opacity="0.22" />
      <path d="M129 62 L138 62 Q143 62 143 70 L143 78" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="143" cy="83" r="7" fill={color} />
      <circle cx="141" cy="81" r="2.5" fill="white" opacity="0.3" />
      <line x1="137" y1="89" x2="133" y2="106" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="143" y1="90" x2="143" y2="108" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="149" y1="89" x2="153" y2="106" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 27 L23.5 20 L26 27 L33 29.5 L26 32 L23.5 39 L21 32 L14 29.5 Z" fill={color} opacity="0.72" />
      <path d="M111 15 L113 10 L115 15 L120 17 L115 19 L113 24 L111 19 L106 17 Z" fill={color} opacity="0.56" />
      <circle cx="14" cy="70" r="3.5" fill={color} opacity="0.35" />
      <circle cx="130" cy="40" r="3" fill={color} opacity="0.28" />
    </svg>
  );
}

function RatingStar({ color }: { color: string }) {
  const cxs = [17, 44, 71, 98, 125];
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rs-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="rs-badge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.82" />
        </linearGradient>
        <filter id="rs-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      {cxs.map((cx) => (
        <polygon key={cx} points={starPts(cx, 54, 14, 5.5)} fill="url(#rs-star)" />
      ))}
      {cxs.map((cx) => (
        <polygon key={cx} points={starPts(cx, 54, 14, 5.5)} fill="white" opacity="0.16" />
      ))}
      <polygon points={starPts(71, 54, 14, 5.5)} fill={color} filter="url(#rs-glow)" opacity="0.35" />
      <rect x="30" y="84" width="90" height="42" rx="14" fill="url(#rs-badge)" />
      <rect x="30" y="84" width="90" height="42" rx="14" fill="white" opacity="0.1" />
      <path d="M30 98 Q75 92 120 98 L120 84 Q75 80 30 84 Z" fill="white" opacity="0.1" />
      <text x="75" y="111" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="20" fill="white">4.8 / 5</text>
      <text x="75" y="123" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="10" fill="white" opacity="0.72">Parent Satisfaction</text>
      <path d="M7 44 L9 38 L11 44 L17 46 L11 48 L9 54 L7 48 L1 46 Z" fill={color} opacity="0.58" />
      <path d="M135 22 L136.8 17 L138.6 22 L144 23.8 L138.6 25.6 L136.8 31 L135 25.6 L129.6 23.8 Z" fill={color} opacity="0.5" />
      <circle cx="140" cy="64" r="4" fill={color} opacity="0.32" />
      <circle cx="10" cy="70" r="3" fill={color} opacity="0.28" />
    </svg>
  );
}

function GrowthRocket({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gr-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.52" />
        </linearGradient>
        <linearGradient id="gr-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      {([32, 57, 82, 107] as const).map((x) =>
        ([68, 90, 112] as const).map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill={color} opacity="0.14" />
        ))
      )}
      <path d="M30 112 L62 88 L96 64 L96 120 L30 120 Z" fill="url(#gr-area)" />
      <rect x="18" y="100" width="24" height="32" rx="6" fill={color} opacity="0.45" />
      <rect x="54" y="76" width="24" height="56" rx="6" fill={color} opacity="0.65" />
      <rect x="90" y="52" width="24" height="80" rx="6" fill="url(#gr-bar)" />
      <rect x="93" y="55" width="7" height="20" rx="3.5" fill="white" opacity="0.28" />
      <path d="M30 112 L62 88 L96 64" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="30"  cy="112" r="5.5" fill="white" stroke={color} strokeWidth="2.5" />
      <circle cx="62"  cy="88"  r="5.5" fill="white" stroke={color} strokeWidth="2.5" />
      <circle cx="96"  cy="64"  r="5.5" fill="white" stroke={color} strokeWidth="2.5" />
      <circle cx="96"  cy="64"  r="2.5" fill={color} />
      <path d="M88 28 Q88 46 96 50 L104 50 Q112 46 112 28 Z" fill={color} opacity="0.9" />
      <path d="M88 28 Q88 46 96 50 L104 50 Q112 46 112 28 Z" fill="white" opacity="0.15" />
      <rect x="93" y="50" width="14" height="5" rx="2" fill={color} opacity="0.8" />
      <rect x="90" y="55" width="20" height="4" rx="2" fill={color} opacity="0.9" />
      <path d="M88 32 Q80 34 81 40 Q82 46 88 44" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 32 Q120 34 119 40 Q118 46 112 44" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M92 32 Q92 38 94 41" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M128 38 L135 28 L142 38 L138 38 L138 48 L132 48 L132 38 Z" fill={color} opacity="0.6" />
      <path d="M18 32 L20 26 L22 32 L28 34 L22 36 L20 42 L18 36 L12 34 Z" fill={color} opacity="0.6" />
      <circle cx="130" cy="62" r="3.5" fill={color} opacity="0.32" />
      <circle cx="14" cy="80" r="3" fill={color} opacity="0.28" />
    </svg>
  );
}

function MapPinChar({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mp-pin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.78" />
        </linearGradient>
        <radialGradient id="mp-glow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      <line x1="75" y1="70" x2="32" y2="38"  stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.28" />
      <line x1="75" y1="70" x2="118" y2="42" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.28" />
      <line x1="75" y1="70" x2="28" y2="98"  stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.22" />
      <line x1="75" y1="70" x2="122" y2="102" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.22" />
      <path d="M32 16 C23 16 15 24 15 33 C15 46 32 64 32 64 C32 64 49 46 49 33 C49 24 41 16 32 16 Z" fill={color} opacity="0.52" />
      <circle cx="32" cy="32" r="8" fill="white" opacity="0.38" />
      <circle cx="32" cy="32" r="4" fill={color} opacity="0.7" />
      <path d="M118 12 C109 12 102 20 102 28 C102 40 118 56 118 56 C118 56 134 40 134 28 C134 20 127 12 118 12 Z" fill={color} opacity="0.56" />
      <circle cx="118" cy="27" r="7.5" fill="white" opacity="0.38" />
      <circle cx="118" cy="27" r="3.5" fill={color} opacity="0.7" />
      <path d="M28 77 C20 77 13 84 13 92 C13 103 28 118 28 118 C28 118 43 103 43 92 C43 84 36 77 28 77 Z" fill={color} opacity="0.48" />
      <circle cx="28" cy="91" r="7" fill="white" opacity="0.38" />
      <circle cx="28" cy="91" r="3" fill={color} opacity="0.68" />
      <path d="M122 80 C114 80 107 87 107 95 C107 106 122 120 122 120 C122 120 137 106 137 95 C137 87 130 80 122 80 Z" fill={color} opacity="0.52" />
      <circle cx="122" cy="94" r="7" fill="white" opacity="0.38" />
      <circle cx="122" cy="94" r="3" fill={color} opacity="0.68" />
      <circle cx="75" cy="52" r="32" fill="url(#mp-glow)" />
      <path d="M75 16 C57 16 43 30 43 48 C43 72 75 100 75 100 C75 100 107 72 107 48 C107 30 93 16 75 16 Z" fill="url(#mp-pin)" />
      <path d="M75 16 C57 16 43 30 43 48 C43 72 75 100 75 100 C75 100 107 72 107 48 C107 30 93 16 75 16 Z" fill="white" opacity="0.08" />
      <circle cx="75" cy="46" r="16" fill="white" />
      <circle cx="75" cy="46" r="10" fill={color} opacity="0.72" />
      <circle cx="75" cy="46" r="10" fill="white" opacity="0.18" />
      <circle cx="70" cy="41" r="4" fill="white" opacity="0.55" />
      <path d="M62 6 L63.8 1 L65.6 6 L71 7.8 L65.6 9.6 L63.8 15 L62 9.6 L56.6 7.8 Z" fill={color} opacity="0.55" />
      <circle cx="138" cy="56" r="3.5" fill={color} opacity="0.3" />
      <circle cx="14" cy="54" r="3" fill={color} opacity="0.28" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  bg: string;
  accent: string;
  Char: ({ color }: { color: string }) => ReactElement;
}

const STATS: StatItem[] = [
  { value: '500+', label: 'Peer-reviewed studies & patents', bg: '#FDF3E7', accent: '#D97706', Char: GradStudent },
  { value: '100,000+', label: 'Students taught', bg: '#FCEEF1', accent: '#F03C6F', Char: RatingStar },
  { value: '28', label: 'Countries of deployment', bg: '#E7F6FB', accent: '#0FA8DC', Char: GrowthRocket },
  { value: '2', label: 'Institutional partners (IBM · McGraw-Hill)', bg: '#F0EDFC', accent: '#7C3AED', Char: MapPinChar },
  { value: 'NEP 2020', label: 'Curriculum alignment', bg: '#EAF7EE', accent: '#059669', Char: GrowthRocket },
];

// ── Card ──────────────────────────────────────────────────────────────────────

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
      className="stat-card"
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
        boxShadow: active ? '0 20px 46px rgba(28,28,40,0.12)' : '0 2px 10px rgba(28,28,40,0.04)',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      <motion.div
        animate={active ? { y: -36 } : { y: 0 }}
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

      <motion.div
        initial={false}
        animate={active ? { y: 0, opacity: 1 } : { y: 160, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        style={{ position: 'absolute', bottom: '-8px', left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}
      >
        <Char color={stat.accent} />
      </motion.div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion() ?? false;

  return (
    <section ref={ref} className="section-pad" style={{ paddingTop: '56px', paddingBottom: '44px', background: '#FFFFFF', borderRadius: '20px 20px 0 0', boxShadow: '0 -8px 32px rgba(28,28,40,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
            Tested before your child ever logs in.
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            The Research Behind the Product
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', marginTop: '14px', lineHeight: 1.6, maxWidth: '520px', margin: '14px auto 0' }}>
            Every feature in Blast Learning is grounded in published research on how memory actually works. We didn't guess. We reviewed the literature, partnered with the institutions that created it, and built around what the science says, not what's convenient to build.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '56px' }} className="grid-cols-2-sm grid-cols-3-lg">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} inView={inView} reduce={reduce} />
          ))}
        </div>

      </div>
    </section>
  );
}
