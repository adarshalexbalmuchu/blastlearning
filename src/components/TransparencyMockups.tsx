import { useId, useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { Activity, TrendingUp, Clock, CalendarCheck, Atom, FlaskConical, Landmark, User } from 'lucide-react';

// ── Color helpers ─────────────────────────────────────────────────────────────

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Mixes a hex color toward white by `amount` (0–1) — used to build gradient stops.
function lighten(hex: string, amount: number) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  const mix = (channel: number) => Math.round(channel + (255 - channel) * amount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

// ── Shared panel shell — card-with-chrome, matches surface-card tokens ───────

function MockupPanel({ children, chromeRight }: { children: React.ReactNode; chromeRight: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: '20px',
        background: '#FFFFFF',
        border: '1px solid #ECECF1',
        borderRadius: '14px',
        padding: '14px 16px 16px',
        boxShadow: '0 2px 8px rgba(28,28,40,0.05), 0 1px 2px rgba(28,28,40,0.04)',
      }}
    >
      {/* Chrome bar: window-dot hint + live status, signals "this is app UI" */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '10px',
          marginBottom: '14px',
          borderBottom: '1px solid #F0F0F3',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#E2E4EA' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#D8DAE3' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#C7CAD6' }} />
        </div>
        {chromeRight}
      </div>
      {children}
    </div>
  );
}

function ChromeLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ADAEBD' }}>
      {icon}
      <span style={{ fontSize: '10px', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
        {children}
      </span>
    </div>
  );
}

// Small icon chip — mirrors the Navbar's gradient icon-chip treatment.
function IconChip({ icon, accent, size = 20 }: { icon: React.ReactNode; accent: string; size?: number }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${lighten(accent, 0.85)} 0%, ${lighten(accent, 0.7)} 100%)`,
        border: `1px solid ${hexToRgba(accent, 0.18)}`,
        color: accent,
      }}
    >
      {icon}
    </div>
  );
}

// ── 1. Parent Dashboard mockup — retention ring + subject progress bars ──────

const DASHBOARD_ROWS = [
  { subject: 'Physics', pct: 82, Icon: Atom },
  { subject: 'Chemistry', pct: 64, Icon: FlaskConical },
  { subject: 'History', pct: 91, Icon: Landmark },
];

const RETENTION_PCT = 87;
const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function DashboardMockup({ accent }: { accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();
  const animate = inView || !!reducedMotion;
  const gradientId = useId();
  const shadowId = useId();

  const barVariants: Variants = {
    hidden: { width: '0%' },
    visible: (pct: number) => ({
      width: `${pct}%`,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <MockupPanel
      chromeRight={
        <ChromeLabel icon={<span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#22C55E', flexShrink: 0 }} />}>
          Live
        </ChromeLabel>
      }
    >
      <div ref={ref} aria-hidden="true">
        {/* Row 1: retention ring + trend delta + weekly summary chip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: '10px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="56" height="56" viewBox="0 0 56 56" style={{ flexShrink: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={lighten(accent, 0.25)} />
                  <stop offset="100%" stopColor={accent} />
                </linearGradient>
                <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor={accent} floodOpacity="0.35" />
                </filter>
              </defs>
              <circle cx="28" cy="28" r={RING_RADIUS} fill="none" stroke={hexToRgba(accent, 0.12)} strokeWidth="5" />
              <motion.circle
                cx="28"
                cy="28"
                r={RING_RADIUS}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                filter={`url(#${shadowId})`}
                transform="rotate(-90 28 28)"
                initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                animate={{ strokeDashoffset: animate ? RING_CIRCUMFERENCE * (1 - RETENTION_PCT / 100) : RING_CIRCUMFERENCE }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <text x="28" y="32" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight={700} fontSize="13" fill="#1C1C28">
                {RETENTION_PCT}%
              </text>
            </svg>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Activity size={12} color={accent} strokeWidth={2.5} />
                <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#1C1C28' }}>Retention</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px', whiteSpace: 'nowrap' }}>
                <TrendingUp size={11} color="#16A34A" strokeWidth={2.5} />
                <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#16A34A' }}>+4%</p>
                <p style={{ margin: 0, fontSize: '11px', fontFamily: 'Inter, sans-serif', color: '#ADAEBD' }}>vs last month</p>
              </div>
            </div>
          </div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '10px',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: hexToRgba(accent, 0.1),
              color: accent,
              whiteSpace: 'nowrap',
            }}
          >
            <CalendarCheck size={12} strokeWidth={2.5} />
            Weekly Summary
          </span>
        </div>

        {/* Row 2: subject progress bars, each with an icon chip */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          {DASHBOARD_ROWS.map((row) => (
            <div key={row.subject} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <IconChip accent={accent} icon={<row.Icon size={11} strokeWidth={2.5} />} />
              <span style={{ width: '58px', flexShrink: 0, fontSize: '11px', fontFamily: 'Inter, sans-serif', color: '#5A5A6E' }}>
                {row.subject}
              </span>
              <div style={{ flex: 1, height: '6px', borderRadius: '9999px', background: '#ECECF1', overflow: 'hidden', boxShadow: 'inset 0 1px 1px rgba(28,28,40,0.04)' }}>
                <motion.div
                  custom={row.pct}
                  variants={barVariants}
                  initial="hidden"
                  animate={animate ? 'visible' : 'hidden'}
                  style={{
                    height: '100%',
                    borderRadius: '9999px',
                    background: `linear-gradient(90deg, ${lighten(accent, 0.15)} 0%, ${accent} 100%)`,
                    boxShadow: `0 1px 2px ${hexToRgba(accent, 0.4)}, inset 0 1px 0 rgba(255,255,255,0.35)`,
                  }}
                />
              </div>
              <span style={{ width: '28px', flexShrink: 0, textAlign: 'right', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#1C1C28' }}>
                {row.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Row 3: freshness indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F0F0F3' }}>
          <Clock size={11} color="#ADAEBD" strokeWidth={2.5} />
          <p style={{ margin: 0, fontSize: '10.5px', fontFamily: 'Inter, sans-serif', color: '#ADAEBD' }}>Last synced 2 hours ago</p>
        </div>
      </div>
    </MockupPanel>
  );
}

// ── 2. Tutor Mom Team mockup — avatar roster + 2-message chat thread ────────

const AVATAR_INITIALS = ['R', 'P', 'S'];

const avatarStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const avatarItem: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

const threadStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: AVATAR_INITIALS.length * 0.08 + 0.15 } },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

// Small triangular tail attached to a chat bubble's bottom-left corner.
function BubbleTail({ color }: { color: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: '-5px',
        width: '10px',
        height: '10px',
        background: color,
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
      }}
    />
  );
}

export function TutorTeamMockup({ accent }: { accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();
  const animate = inView || !!reducedMotion;

  const parentBubbleBg = '#F3F3F6';
  const tutorBubbleBg = hexToRgba(accent, 0.09);

  return (
    <MockupPanel
      chromeRight={
        <ChromeLabel icon={<Clock size={11} strokeWidth={2.5} />}>
          9 AM – 9 PM
        </ChromeLabel>
      }
    >
      <div ref={ref} aria-hidden="true">
        {/* Row 1: avatar roster with live status dot on one member */}
        <motion.div
          variants={avatarStagger}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
        >
          {AVATAR_INITIALS.map((initial, i) => (
            <motion.div
              key={initial}
              variants={avatarItem}
              style={{
                position: 'relative',
                width: '32px',
                height: '32px',
                borderRadius: '9999px',
                background: `linear-gradient(135deg, ${lighten(accent, 0.2)} 0%, ${accent} 100%)`,
                border: '2px solid #FFFFFF',
                boxShadow: `0 2px 6px ${hexToRgba(accent, 0.35)}`,
                marginLeft: i === 0 ? 0 : '-8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                color: '#FFFFFF',
              }}
            >
              {initial}
              {i === 0 && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: '-1px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '9999px',
                    background: '#22C55E',
                    border: '2px solid #FFFFFF',
                  }}
                />
              )}
            </motion.div>
          ))}
          <motion.div
            variants={avatarItem}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #F7F7FA 0%, #ECECF1 100%)',
              border: '2px solid #FFFFFF',
              boxShadow: '0 2px 6px rgba(28,28,40,0.1)',
              marginLeft: '-8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              color: '#5A5A6E',
            }}
          >
            +2
          </motion.div>
        </motion.div>

        {/* Row 2: short message thread — parent question, tutor reply */}
        <motion.div variants={threadStagger} initial="hidden" animate={animate ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <motion.div variants={messageVariants} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', flexShrink: 0, borderRadius: '9999px', background: '#E2E4EA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
              <User size={11} color="#8E8EA0" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ position: 'relative', background: parentBubbleBg, borderRadius: '12px 12px 12px 4px', padding: '9px 13px', boxShadow: '0 1px 3px rgba(28,28,40,0.05)' }}>
                <BubbleTail color={parentBubbleBg} />
                <p style={{ margin: 0, fontSize: '11.5px', fontFamily: 'Inter, sans-serif', color: '#5A5A6E', lineHeight: 1.5 }}>
                  Why did she miss Q4 on the practice test?
                </p>
              </div>
              <p style={{ margin: '5px 0 0', fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#ADAEBD' }}>
                You · 10:42 AM
              </p>
            </div>
          </motion.div>

          <motion.div variants={messageVariants} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
                borderRadius: '9999px',
                background: `linear-gradient(135deg, ${lighten(accent, 0.2)} 0%, ${accent} 100%)`,
                boxShadow: `0 1px 4px ${hexToRgba(accent, 0.35)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '9.5px',
                color: '#FFFFFF',
                marginTop: '2px',
              }}
            >
              R
            </div>
            <div>
              <div style={{ position: 'relative', background: tutorBubbleBg, borderRadius: '12px 12px 12px 4px', padding: '9px 13px', boxShadow: '0 2px 6px rgba(28,28,40,0.07)' }}>
                <BubbleTail color={tutorBubbleBg} />
                <p style={{ margin: 0, fontSize: '11.5px', fontFamily: 'Inter, sans-serif', color: '#1C1C28', lineHeight: 1.5 }}>
                  Got it — sending a quick explainer on this now.
                </p>
              </div>
              <p style={{ margin: '5px 0 0', fontSize: '10px', fontFamily: 'Inter, sans-serif', color: '#ADAEBD' }}>
                Tutor Mom · just now
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MockupPanel>
  );
}
