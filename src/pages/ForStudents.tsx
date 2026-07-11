import { useSEO } from '../hooks/useSEO';
import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useInView, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Calculator, Type, Target } from 'lucide-react';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection } from '../components/MarketingSections';
import { fadeUp, stagger, springUp, popIn } from '../constants/animations';

// Converging diagram — inverted decision tree using the same orthogonal connector
// grammar as the Parents page. Animation mirrors decisionTreeVariants() in
// ForParents.tsx but reversed: cards land first, then drops/branch/stem draw in,
// then the destination node arrives last.
function recallDiagramVariants(reduced: boolean) {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const t = (duration: number, delay: number) => (reduced ? { duration: 0.25, delay: 0 } : { duration, delay, ease });

  const cardStagger = 0.09;
  const cardDuration = 0.3;
  const afterCards = 3 * cardStagger + cardDuration; // ≈0.57s — last card done

  return {
    card: (index: number): Variants => ({
      hidden: { opacity: 0, y: reduced ? 0 : 14 },
      visible: { opacity: 1, y: 0, transition: t(cardDuration, index * cardStagger) },
    }),
    drops: {
      hidden: { scaleY: reduced ? 1 : 0 },
      visible: { scaleY: 1, transition: t(0.18, afterCards + 0.04) },
    } as Variants,
    branch: {
      hidden: { scaleX: reduced ? 1 : 0 },
      visible: { scaleX: 1, transition: t(0.28, afterCards + 0.26) },
    } as Variants,
    stem: {
      hidden: { scaleY: reduced ? 1 : 0 },
      visible: { scaleY: 1, transition: t(0.22, afterCards + 0.58) },
    } as Variants,
    node: {
      hidden: { opacity: 0, y: reduced ? 0 : 10 },
      visible: { opacity: 1, y: 0, transition: t(0.35, afterCards + 0.84) },
    } as Variants,
    caption: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: t(0.25, afterCards + 1.24) },
    } as Variants,
  };
}

const recallPrograms = [
  { name: 'CBSE Full Syllabus', Icon: Book, accent: '#E8135A' },
  { name: 'Math Genius Maker', Icon: Calculator, accent: '#0FA8DC' },
  { name: 'English Mastery Pass', Icon: Type, accent: '#E8135A' },
  { name: 'SAT Prep Pass', Icon: Target, accent: '#0FA8DC' },
];

// ── Seeded noise field for the "calm amid pressure" wave illustration ────────
// Computed once at module load (stable across re-renders, not Math.random()).
const _waveY = (x: number) => 100 - 40 * Math.sin((x / 900) * 2 * Math.PI);
const examNoiseTicks = (() => {
  let s = 42; // fixed seed
  const r = () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 4294967296; };
  const CLEAR = 30; // px clearance around the wave path
  type Tick = { x1: number; y1: number; x2: number; y2: number; opacity: number; delay: number };
  const ticks: Tick[] = [];
  for (let i = 0; i < 140; i++) {
    const cx = r() * 900;
    const cy = r() * 200;
    const angle = (r() - 0.5) * Math.PI;
    const len = 8 + r() * 18;
    const baseOp = 0.14 + r() * 0.48;
    const delay = r() * 0.45;
    const dist = Math.abs(cy - _waveY(cx));
    if (dist < CLEAR) continue; // skip ticks inside the clear channel
    const edgeFade = dist < CLEAR + 18 ? (dist - CLEAR) / 18 : 1;
    const hx = Math.cos(angle) * len / 2;
    const hy = Math.sin(angle) * len / 2;
    ticks.push({ x1: cx - hx, y1: cy - hy, x2: cx + hx, y2: cy + hy, opacity: baseOp * edgeFade, delay });
  }
  return ticks;
})();

const supportCards = [
  {
    label: 'When you\'re stuck.',
    title: 'Subject Doubt Support',
    body: 'Qualified subject-matter experts available Monday to Saturday, 9 AM to 9 PM. Message through the platform and get a response within 2 hours during business hours.',
    accent: '#0FA8DC',
  },
  {
    label: 'When you go quiet.',
    title: 'Proactive Check-ins',
    body: 'The team monitors your session quality and retention scores. If your numbers drop or you miss sessions, someone reaches out — not a notification, but a message.',
    accent: '#E8135A',
  },
];

const studentFaqs = [
  {
    q: 'How much time do I need each day?',
    a: 'Most sessions are under 20 minutes. The platform schedules your sessions based on when your memory is about to fade — so you study at the right time, not just for longer.',
  },
  {
    q: 'Will this help me for board exams?',
    a: 'Yes. The CBSE Full Syllabus plan covers all core subjects with retention-first pacing aligned to the board exam timeline. The GAP Assessment identifies which concepts need the most work first.',
  },
  {
    q: 'What if I already have a tutor?',
    a: 'Blast Learning works alongside your tutor. The platform makes sure what your tutor teaches you actually sticks — that is the part tutors cannot do on their own.',
  },
  {
    q: 'Will my parents see everything?',
    a: 'Your parents have access to a daily digest of your study sessions and retention scores. The Tutor Mom team is their point of contact if they have questions. You will always know what they can see.',
  },
];

export default function ForStudents() {
  useSEO({
    title: 'For Students | Blast Learning India',
    description: 'Blast Learning trains you to remember what you study — not just recognise it. Built on 25 years of research. Free 14-day trial.',
  });
  const shouldReduce = useReducedMotion();
  const rd = recallDiagramVariants(!!shouldReduce);
  // Connector geometry — same formula as programHorizontalInset on Parents page
  const recallCardGapPx = 20;
  const recallCardCols = recallPrograms.length;
  const recallHorizontalInset = `calc((100% - ${(recallCardCols - 1) * recallCardGapPx}px) / ${recallCardCols * 2})`;
  const chartRef = useRef<SVGSVGElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: '0px 0px -10% 0px' });
  const examRef = useRef<SVGSVGElement>(null);
  const examInView = useInView(examRef, { once: true, margin: '0px 0px -10% 0px' });

  // GAP Assessment continuum illustration animation
  const gapRef = useRef<SVGSVGElement>(null);
  const gapInView = useInView(gapRef, { once: true, margin: '0px 0px -10% 0px' });
  const [gapPhase, setGapPhase] = useState(0);
  useEffect(() => {
    if (!gapInView) return;
    if (shouldReduce) { setGapPhase(4); return; }
    const timers: ReturnType<typeof setTimeout>[] = [
      setTimeout(() => setGapPhase(1), 80),   // base line draws
      setTimeout(() => setGapPhase(2), 580),  // assumed marker + labels
      setTimeout(() => setGapPhase(3), 1000), // gap segment + actual marker
      setTimeout(() => setGapPhase(4), 1450), // "the gap" brace label
    ];
    return () => timers.forEach(clearTimeout);
  }, [gapInView, shouldReduce]);

  // Chat mockup sequential animation
  const chatRef = useRef<HTMLDivElement>(null);
  const chatInView = useInView(chatRef, { once: true, margin: '0px 0px -10% 0px' });
  const [chatPhase, setChatPhase] = useState(0);
  useEffect(() => {
    if (!chatInView) return;
    if (shouldReduce) { setChatPhase(7); return; }
    const timers: ReturnType<typeof setTimeout>[] = [
      setTimeout(() => setChatPhase(1), 350),   // student msg 1
      setTimeout(() => setChatPhase(2), 800),   // typing indicator — AI 1
      setTimeout(() => setChatPhase(3), 1240),  // AI msg 1
      setTimeout(() => setChatPhase(4), 1680),  // student msg 2
      setTimeout(() => setChatPhase(5), 2100),  // typing indicator — AI 2
      setTimeout(() => setChatPhase(6), 2540),  // AI msg 2
      setTimeout(() => setChatPhase(7), 3020),  // resolved badge
    ];
    return () => timers.forEach(clearTimeout);
  }, [chatInView, shouldReduce]);

  // Typing dots shared style helper
  const typingAvatar = (
    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E8135A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>AI</span>
    </div>
  );
  const typingBubble = (
    <div style={{ background: '#F3F4F6', borderRadius: '4px 16px 16px 16px', padding: '12px 16px', display: 'flex', gap: '4px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#9CA3AF', display: 'inline-block', flexShrink: 0 }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(232, 19, 90, 0.03) 0%, #FFFFFF 30%, rgba(15, 168, 220, 0.06) 75%, rgba(15, 168, 220, 0.04) 100%)',
        paddingTop: '120px',
        paddingBottom: '100px',
        minHeight: '760px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ECECF1',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.03} />
        </div>
        {/* ── Brand background decorations ── */}
        {/* Main blue glow — right side, behind clock/paper illustration */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)', width: '850px', height: '850px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15, 168, 220, 0.15) 0%, rgba(15, 168, 220, 0.06) 45%, transparent 68%)', pointerEvents: 'none' }} />
        {/* Pink accent blob — top-left corner */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-100px', top: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232, 19, 90, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Blue stroke ring — right upper area */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '10%', top: '10%', width: '200px', height: '200px', borderRadius: '50%', border: '1.5px solid rgba(15, 168, 220, 0.22)', background: 'transparent', pointerEvents: 'none' }} />
        {/* Pink stroke ring — left lower area */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '20%', bottom: '12%', width: '130px', height: '130px', borderRadius: '50%', border: '1.5px solid rgba(232, 19, 90, 0.2)', background: 'transparent', pointerEvents: 'none' }} />
        {/* Small blue dot accent */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '44%', top: '20%', width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(15, 168, 220, 0.34)', pointerEvents: 'none' }} />
        {/* Small pink dot accent */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '38%', bottom: '22%', width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(232, 19, 90, 0.3)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp}>
              <HeadingMarker text="FOR STUDENTS" marginBottom="24px" fontSize="12px" accent="#0FA8DC" />
              <h1 className="page-hero-title">
                You Studied for Six Hours. The <AccentText tone="blue">Formula</AccentText> Still Didn't <AccentText tone="pink">Show Up</AccentText>.
              </h1>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '24px' }}>
                That's a method problem, not a you problem.
              </p>
            </motion.div>
            {/* Clock → blank paper illustration (ties directly to the headline) */}
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg
                viewBox="0 0 480 218"
                width="100%"
                style={{ maxWidth: '560px', overflow: 'visible' }}
                aria-label="A clock showing 6 hours studied, connected by a dashed arrow to a blank exam paper — representing time spent but nothing retained"
              >
                {/* ── Clock ──────────────────────────────────────────── */}
                <motion.g
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <circle cx="110" cy="103" r="60" fill="#E0F5FC" stroke="#0FA8DC" strokeWidth="2.5" />
                  {/* Cardinal tick marks */}
                  <line x1="110" y1="45"  x2="110" y2="54"  stroke="#0FA8DC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <line x1="168" y1="103" x2="159" y2="103" stroke="#0FA8DC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <line x1="110" y1="161" x2="110" y2="152" stroke="#0FA8DC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <line x1="52"  y1="103" x2="61"  y2="103" stroke="#0FA8DC" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  {/* Hour hand at 6 o'clock (pointing straight down) */}
                  <line x1="110" y1="103" x2="110" y2="148" stroke="#0FA8DC" strokeWidth="4"   strokeLinecap="round" />
                  {/* Minute hand at 12 o'clock (pointing straight up) */}
                  <line x1="110" y1="103" x2="110" y2="56"  stroke="#0FA8DC" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="110" cy="103" r="5" fill="#0FA8DC" />
                </motion.g>

                {/* Clock label */}
                <motion.text
                  x="110" y="186"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fill="#5A5A6E"
                  fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 0.42 }}
                >
                  6 hours studied
                </motion.text>

                {/* ── Dashed connector with arrowhead ────────────────── */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 0.28 }}
                >
                  <line
                    x1="172" y1="103" x2="262" y2="103"
                    stroke="#9CA3AF" strokeWidth="1.5"
                    strokeDasharray="5 4" strokeLinecap="round"
                  />
                  <path
                    d="M252,96 L263,103 L252,110"
                    fill="none" stroke="#9CA3AF" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </motion.g>

                {/* ── Paper body (dog-ear top-right) ──────────────────── */}
                <motion.path
                  d="M273,44 Q273,38 279,38 L372,38 L394,60 L394,181 Q394,187 388,187 L279,187 Q273,187 273,181 Z"
                  fill="#FFFFFF" stroke="#E8135A" strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 0.52 }}
                />
                {/* Dog-ear fold triangle */}
                <motion.path
                  d="M372,38 L394,38 L394,60 Z"
                  fill="#FBCCD8" stroke="#E8135A" strokeWidth="1.5" strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 0.52 }}
                />

                {/* Wavy line 1 — blank ruled space */}
                <motion.path
                  d="M284,90 Q295,83 306,90 Q317,97 328,90 Q339,83 350,90 Q361,97 372,90 Q380,84 385,88"
                  fill="none" stroke="#E8135A" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"
                  initial={{ pathLength: shouldReduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.38, delay: 0.7, ease: 'easeInOut' }}
                />

                {/* Wavy line 2 — blank ruled space */}
                <motion.path
                  d="M284,114 Q295,107 306,114 Q317,121 328,114 Q339,107 350,114 Q361,121 372,114 Q380,108 385,112"
                  fill="none" stroke="#E8135A" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"
                  initial={{ pathLength: shouldReduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.38, delay: 0.86, ease: 'easeInOut' }}
                />

                {/* Scribble — incomplete attempt */}
                <motion.path
                  d="M284,146 L294,137 L304,146 L314,137 L324,146 L334,137 L339,140"
                  fill="none" stroke="#E8135A" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" opacity="0.52"
                  initial={{ pathLength: shouldReduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 1.02, ease: 'easeInOut' }}
                />

                {/* Paper label */}
                <motion.text
                  x="333" y="206"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fill="#5A5A6E"
                  fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 1.12 }}
                >
                  still blank
                </motion.text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. The Actual Science ────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '52px', maxWidth: '900px' }}>
              <HeadingMarker text="THE ACTUAL SCIENCE" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2">
                <AccentText tone="blue">Reading It Again</AccentText> Isn't the <AccentText tone="pink">Same as Knowing It</AccentText>
              </h2>
            </motion.div>

            {/* Two-curve Ebbinghaus chart — card-wrapped, captions in HTML for correct responsive spacing */}
            <motion.div variants={fadeUp} style={{ maxWidth: '620px', margin: '0 auto' }}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(28,28,40,0.04)',
                padding: '28px 28px 24px',
                position: 'relative',
              }}>
                {/* ── 91% stat badge — fades/scales in as final payoff beat ── */}
                <motion.div
                  animate={{ opacity: (!!shouldReduce || chartInView) ? 1 : 0, scale: (!!shouldReduce || chartInView) ? 1 : 0.88 }}
                  transition={!!shouldReduce ? { duration: 0 } : { duration: 0.4, delay: 1.65 }}
                  style={{ position: 'absolute', top: '24px', right: '28px', textAlign: 'right' }}
                >
                  <p style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#0FA8DC', margin: 0, lineHeight: 1 }}>91%</p>
                  <p style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', margin: '3px 0 0', maxWidth: '108px', lineHeight: 1.35 }}>retain more within 30 days</p>
                </motion.div>

                <svg
                  ref={chartRef}
                  viewBox="0 0 620 370"
                  width="100%"
                  style={{ fontFamily: 'Inter, sans-serif', overflow: 'visible', display: 'block' }}
                  aria-label="Two memory curves compared: spaced retrieval (pink, jagged but recovering with each dip shallower) versus re-reading only (gray dashed, steady decline with no recovery)"
                >
                  {/* Axis labels */}
                  <text x="10" y="20" fontSize="11" fill="#9CA3AF">memory strength</text>
                  <text x="490" y="362" fontSize="11" fill="#9CA3AF">time</text>

                  {/* Legend */}
                  <line x1="10" y1="42" x2="46" y2="42" stroke="#E8135A" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="52" y="46" fontSize="11" fill="#5A5A6E">spaced retrieval</text>
                  <line x1="10" y1="62" x2="46" y2="62" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" />
                  <text x="52" y="66" fontSize="11" fill="#5A5A6E">re-reading only</text>

                  <defs>
                    <clipPath id="pink-reveal-clip">
                      <motion.rect
                        x="24" y="0" width={0} height="385"
                        initial={{ width: 0 }}
                        animate={{ width: (!!shouldReduce || chartInView) ? 530 : 0 }}
                        transition={!!shouldReduce ? { duration: 0 } : { duration: 0.56, ease: 'easeInOut' }}
                      />
                    </clipPath>
                    <clipPath id="gray-reveal-clip">
                      <motion.rect
                        x="24" y="0" width={0} height="385"
                        initial={{ width: 0 }}
                        animate={{ width: (!!shouldReduce || chartInView) ? 572 : 0 }}
                        transition={!!shouldReduce ? { duration: 0 } : { duration: 0.42, delay: 0.72, ease: 'easeInOut' }}
                      />
                    </clipPath>
                  </defs>

                  {/* Gray dashed curve (re-reading) — slightly thicker */}
                  <path
                    d="M25,125 C240,202 430,292 592,333"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    clipPath="url(#gray-reveal-clip)"
                  />

                  {/* Pink retrieval curve — thicker */}
                  <path
                    d="M25,125 L135,310 L215,158 L305,275 L375,175 L445,248 L515,168 L545,195"
                    fill="none"
                    stroke="#E8135A"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    clipPath="url(#pink-reveal-clip)"
                  />

                  {/* Blue retrieval dots — larger */}
                  {([
                    { cx: 215, cy: 158, delay: 0.20 },
                    { cx: 375, cy: 175, delay: 0.38 },
                    { cx: 515, cy: 168, delay: 0.52 },
                  ] as { cx: number; cy: number; delay: number }[]).map(({ cx, cy, delay }) => (
                    <motion.circle
                      key={cx}
                      cx={cx} cy={cy} r="10"
                      fill="#0FA8DC"
                      animate={{ opacity: (!!shouldReduce || chartInView) ? 1 : 0 }}
                      transition={!!shouldReduce ? { duration: 0 } : { duration: 0.25, delay }}
                    />
                  ))}
                </svg>

                {/* ── HTML captions — properly spaced at all widths, staggered fade-in ── */}
                <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid #F3F4F6', display: 'flex', flexWrap: 'wrap', gap: '12px 32px' }}>
                  {([
                    { label: 'retrieval restores it', color: '#0FA8DC', dashed: false, lowOpacity: false, delay: 1.22 },
                    { label: 'dips shrink over time',  color: '#E8135A', dashed: false, lowOpacity: true,  delay: 1.38 },
                    { label: 'memory fades fast',      color: '#9CA3AF', dashed: true,  lowOpacity: false, delay: 1.52 },
                  ] as { label: string; color: string; dashed: boolean; lowOpacity: boolean; delay: number }[]).map(({ label, color, dashed, lowOpacity, delay }) => (
                    <motion.div
                      key={label}
                      animate={{ opacity: (!!shouldReduce || chartInView) ? 1 : 0 }}
                      transition={!!shouldReduce ? { duration: 0 } : { duration: 0.28, delay }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      {dashed ? (
                        <svg width="20" height="10" viewBox="0 0 20 10" style={{ flexShrink: 0 }} aria-hidden="true">
                          <line x1="0" y1="5" x2="20" y2="5" stroke={color} strokeWidth="2" strokeDasharray="4 3" />
                        </svg>
                      ) : (
                        <div style={{ width: '20px', height: '3px', borderRadius: '2px', background: color, flexShrink: 0, opacity: lowOpacity ? 0.45 : 1 }} />
                      )}
                      <span style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. GAP Assessment ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ maxWidth: '720px', marginBottom: '64px' }}>
              <HeadingMarker text="NOT YOUR GRADE. YOU." marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2">
                The <AccentText tone="blue">GAP Assessment</AccentText> Doesn't <AccentText tone="pink">Assume Anything</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <svg
                ref={gapRef}
                viewBox="0 0 900 160"
                width="100%"
                style={{ maxWidth: '860px', display: 'block', margin: '0 auto', overflow: 'visible', fontFamily: 'Inter, sans-serif' }}
                aria-label="Knowledge continuum: a dashed 'assumed' marker at one point based on grade level, and a solid pink 'actual' marker at a different point from your real answers — the highlighted gap between them is what the assessment finds"
              >
                <defs>
                  {/* Base line reveal — draws left to right */}
                  <clipPath id="gap-baseline-clip">
                    <motion.rect
                      x="60" y="0" width={0} height="160"
                      initial={{ width: 0 }}
                      animate={{ width: (!!shouldReduce || gapPhase >= 1) ? 780 : 0 }}
                      transition={{ duration: !!shouldReduce ? 0 : 0.5, ease: 'easeInOut' }}
                    />
                  </clipPath>
                  {/* Gap segment reveal — draws from assumed marker rightward */}
                  <clipPath id="gap-segment-clip">
                    <motion.rect
                      x="285" y="0" width={0} height="160"
                      initial={{ width: 0 }}
                      animate={{ width: (!!shouldReduce || gapPhase >= 3) ? 295 : 0 }}
                      transition={{ duration: !!shouldReduce ? 0 : 0.45, ease: 'easeInOut' }}
                    />
                  </clipPath>
                </defs>

                {/* Base line (gray) */}
                <line x1="60" y1="88" x2="840" y2="88" stroke="#D1D5DB" strokeWidth="2" clipPath="url(#gap-baseline-clip)" />

                {/* Gap segment (brand pink, thicker) — IS the gap */}
                <line x1="285" y1="88" x2="580" y2="88" stroke="#E8135A" strokeWidth="4" strokeLinecap="round" clipPath="url(#gap-segment-clip)" />

                {/* ── Assumed marker (dashed outline) ─── */}
                <circle cx="285" cy="88" r="16" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 3"
                  style={{ opacity: !!shouldReduce || gapPhase >= 2 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }} />
                <line x1="285" y1="105" x2="285" y2="114" stroke="#9CA3AF" strokeWidth="1.5"
                  style={{ opacity: !!shouldReduce || gapPhase >= 2 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }} />
                <text x="285" y="127" textAnchor="middle" fontSize="12" fontWeight="600" fill="#5A5A6E"
                  style={{ opacity: !!shouldReduce || gapPhase >= 2 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }}>
                  assumed
                </text>
                <text x="285" y="143" textAnchor="middle" fontSize="11" fill="#9CA3AF"
                  style={{ opacity: !!shouldReduce || gapPhase >= 2 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }}>
                  grade-level assumption
                </text>

                {/* ── Actual marker (solid pink) ─── */}
                <circle cx="580" cy="88" r="16" fill="#E8135A"
                  style={{ opacity: !!shouldReduce || gapPhase >= 3 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.25s ease 0.38s' }} />
                <line x1="580" y1="105" x2="580" y2="114" stroke="#E8135A" strokeWidth="1.5"
                  style={{ opacity: !!shouldReduce || gapPhase >= 3 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.25s ease 0.38s' }} />
                <text x="580" y="127" textAnchor="middle" fontSize="12" fontWeight="600" fill="#E8135A"
                  style={{ opacity: !!shouldReduce || gapPhase >= 3 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.25s ease 0.38s' }}>
                  actual
                </text>
                <text x="580" y="143" textAnchor="middle" fontSize="11" fill="#E8135A"
                  style={{ opacity: !!shouldReduce || gapPhase >= 3 ? 0.7 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.25s ease 0.38s' }}>
                  from your answers
                </text>

                {/* ── "the gap" brace label above the pink segment ─── */}
                <line x1="298" y1="66" x2="418" y2="66" stroke="#E8135A" strokeWidth="1"
                  style={{ opacity: !!shouldReduce || gapPhase >= 4 ? 0.35 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }} />
                <text x="432" y="62" textAnchor="middle" fontSize="11" fontWeight="500" fill="#E8135A"
                  style={{ opacity: !!shouldReduce || gapPhase >= 4 ? 1 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }}>
                  the gap
                </text>
                <line x1="445" y1="66" x2="567" y2="66" stroke="#E8135A" strokeWidth="1"
                  style={{ opacity: !!shouldReduce || gapPhase >= 4 ? 0.35 : 0, transition: !!shouldReduce ? 'none' : 'opacity 0.3s ease' }} />
              </svg>
              <p style={{ textAlign: 'center', fontSize: '14px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', marginTop: '28px' }}>
                Built from what you know, not your grade.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Human Support ────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="YOU'RE NOT DOING THIS ALONE" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                <span style={{ display: 'block' }}>A Partner Who Studies <AccentText tone="blue">With You</AccentText>,</span>
                <span style={{ display: 'block' }}>Not a <AccentText tone="pink">Bot</AccentText> Checking In</span>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Study Buddy pairs a student with a human partner working through the same synchronised, adaptive question set, so neither one studies alone or loses momentum. A notification from an app rarely keeps a habit alive past the second week, a person checking in does, and that accountability habit holds whether the course changes from one term to the next, regardless of subject.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
              className="grid-cols-2-md"
            >
              {supportCards.map((item) => (
                <motion.div key={item.label} variants={popIn} whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 320, damping: 20 } }}>
                  <div style={{ height: '100%', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', padding: '32px', borderTop: `3px solid ${item.accent}`, boxShadow: '0 2px 8px rgba(28,28,40,0.04)' }}>
                    <HeadingMarker text={item.label} accent={item.accent} fontSize="11px" marginBottom="12px" />
                    <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '16px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Stuck at 11pm ────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'flex-start' }}
            className="grid-cols-2-lg"
          >
            {/* Left: heading */}
            <motion.div variants={fadeUp}>
              <HeadingMarker text="STUCK AT 11PM" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2">
                Get <AccentText tone="blue">Unstuck</AccentText> Without Waiting for <AccentText tone="pink">Tomorrow's Class</AccentText>
              </h2>
            </motion.div>

            {/* Right: chat illustration */}
            <motion.div variants={fadeUp}>
              <div
                ref={chatRef}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(28,28,40,0.04)' }}
              >
                {/* Chat header row */}
                <div style={{ display: 'flex', alignItems: 'center', padding: '13px 18px', borderBottom: '1px solid #E5E7EB', gap: '10px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E8135A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>AI</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', flex: 1 }}>AI Tutor</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>active now</span>
                  </div>
                </div>

                {/* Message thread */}
                <div style={{ padding: '18px 18px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

                  {/* Student → RIGHT | blue bubble */}
                  {chatPhase >= 1 && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div>
                        <div style={{ background: '#0FA8DC', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', lineHeight: 1.45, maxWidth: '240px' }}>
                          stuck on question 14 — the substitution step isn't working.
                        </div>
                        <p style={{ textAlign: 'right', margin: '3px 2px 0 0', fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>11:42 pm</p>
                      </div>
                    </motion.div>
                  )}

                  {/* AI typing indicator 1 */}
                  {chatPhase === 2 && (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                      {typingAvatar}{typingBubble}
                    </div>
                  )}

                  {/* AI ← LEFT | gray bubble */}
                  {chatPhase >= 3 && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }} style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E8135A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>AI</span>
                      </div>
                      <div>
                        <div style={{ background: '#F3F4F6', borderRadius: '4px 16px 16px 16px', padding: '10px 14px', fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.45, maxWidth: '240px' }}>
                          what did you substitute in first?
                        </div>
                        <p style={{ margin: '3px 0 0 2px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>11:42 pm</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Student → RIGHT */}
                  {chatPhase >= 4 && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div>
                        <div style={{ background: '#0FA8DC', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: '14px', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', lineHeight: 1.45, maxWidth: '240px' }}>
                          oh — I think I flipped the sign on the second term.
                        </div>
                        <p style={{ textAlign: 'right', margin: '3px 2px 0 0', fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>11:43 pm</p>
                      </div>
                    </motion.div>
                  )}

                  {/* AI typing indicator 2 */}
                  {chatPhase === 5 && (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                      {typingAvatar}{typingBubble}
                    </div>
                  )}

                  {/* AI ← LEFT | resolution message */}
                  {chatPhase >= 6 && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }} style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E8135A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>AI</span>
                      </div>
                      <div>
                        <div style={{ background: '#F3F4F6', borderRadius: '4px 16px 16px 16px', padding: '10px 14px', fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.45, maxWidth: '240px' }}>
                          exactly. fix that sign and try the next line — everything else is right.
                        </div>
                        <p style={{ margin: '3px 0 0 2px', fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>11:43 pm</p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Resolved badge — PLACEHOLDER: confirm actual average resolution time before go-live */}
                {chatPhase >= 7 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '6px 18px 18px', textAlign: 'center' }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#E0F5FC', border: '1px solid #BAE6FD', borderRadius: '9999px', padding: '5px 14px', fontSize: '12px', color: '#0FA8DC', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      ✓ resolved in under 2 minutes
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Exam Technique ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '52px' }}>
              <HeadingMarker text="THE PART NOBODY ELSE TEACHES" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2">
                <AccentText tone="blue">Knowing It</AccentText> Isn't the Same as <AccentText tone="pink">Staying Calm With It</AccentText>
              </h2>
            </motion.div>

            {/* Wave-amid-noise illustration — smooth pink wave through scattered gray pressure ticks */}
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <svg
                ref={examRef}
                viewBox="0 0 900 200"
                width="100%"
                style={{ display: 'block', overflow: 'visible' }}
                aria-label="A smooth pink wave representing a calm, trained response, cutting through a field of gray scattered tick marks representing exam pressure"
              >
                <defs>
                  <clipPath id="wave-reveal-clip">
                    <motion.rect
                      x="0" y="0" width={0} height="200"
                      initial={{ width: 0 }}
                      animate={{ width: (shouldReduce || examInView) ? 900 : 0 }}
                      transition={shouldReduce ? { duration: 0 } : { duration: 0.72, ease: 'easeInOut' }}
                    />
                  </clipPath>
                </defs>

                {/* Noise field: gray ticks, sparser in the wave's clear channel */}
                {examNoiseTicks.map((tick, i) => (
                  <line
                    key={i}
                    x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2}
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{
                      opacity: (shouldReduce || examInView) ? tick.opacity : 0,
                      transition: shouldReduce
                        ? 'opacity 0.25s'
                        : `opacity 0.2s ease ${(0.68 + tick.delay).toFixed(3)}s`,
                    }}
                  />
                ))}

                {/* Calm pink wave — draws left-to-right, thicker stroke than noise */}
                <path
                  d="M0,100 C150,55 300,55 450,100 C600,145 750,145 900,100"
                  fill="none"
                  stroke="#E8135A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  clipPath="url(#wave-reveal-clip)"
                />
              </svg>

              {/* Attribution caption */}
              <motion.p
                animate={{ opacity: (shouldReduce || examInView) ? 1 : 0 }}
                transition={shouldReduce ? { duration: 0.25 } : { duration: 0.3, delay: 1.22 }}
                style={{
                  textAlign: 'center',
                  margin: '24px auto 0',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#8E8EA0',
                  fontFamily: 'Inter, sans-serif',
                  maxWidth: '540px',
                }}
              >
                Built with Dr. Jon Finn, the performance psychologist behind Tougher Minds, used by Premier League clubs and the NHS.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Transfer — hidden, not deleted. Flip to true to re-enable. */}
      {false && (
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ maxWidth: '720px' }}>
              <HeadingMarker text="IT TRAVELS WITH YOU" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                The Skill Isn't the <AccentText tone="pink">Subject</AccentText>. It's the <AccentText tone="blue">Recall</AccentText>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Spaced repetition and active recall are not CBSE techniques. They are memory techniques. What you learn here works whether you are revising for boards, preparing for JEE, studying for your first job interview, or trying to hold onto a language you are learning at twenty-three.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Most students come to Blast Learning for a grade. They leave with a method. That is what IBM, McGraw-Hill, and 100,000 students before you paid for.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Converging diagram: orthogonal connectors matching Parents decision-tree grammar */}
          <motion.div
            className="show-lg-blk"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ maxWidth: '820px', margin: '64px auto 0' }}
          >
            {/* 4-col program cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${recallCardCols}, minmax(0, 1fr))`,
                gap: `${recallCardGapPx}px`,
              }}
            >
              {recallPrograms.map((prog, i) => (
                <motion.div key={prog.name} variants={rd.card(i)} whileHover={{ y: -6, scale: 1.04, transition: { type: 'spring', stiffness: 400, damping: 22 } }}>
                  <div style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '22px 14px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxSizing: 'border-box' }}>
                    <motion.div
                      initial={shouldReduce ? undefined : { scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 500, damping: 18, delay: i * 0.1 }}
                    >
                      <prog.Icon size={20} color={prog.accent} strokeWidth={2} aria-hidden="true" />
                    </motion.div>
                    <h3 style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0, lineHeight: 1.35 }}>
                      {prog.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connector zone: drops → spine → trunk — same div-based approach as Parents */}
            <div style={{ position: 'relative', height: '72px' }}>
              {/* Vertical drops from each card center, scaleY from top */}
              <motion.div
                variants={rd.drops}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  transformOrigin: 'top',
                  display: 'grid',
                  gridTemplateColumns: `repeat(${recallCardCols}, minmax(0, 1fr))`,
                  gap: `${recallCardGapPx}px`,
                }}
              >
                {recallPrograms.map((prog) => (
                  <div key={`${prog.name}-drop`} style={{ width: '1.5px', height: '36px', background: '#D1D5DB', margin: '0 auto' }} />
                ))}
              </motion.div>

              {/* Horizontal spine */}
              <motion.div
                variants={rd.branch}
                style={{ position: 'absolute', top: '35px', left: recallHorizontalInset, right: recallHorizontalInset, transformOrigin: 'center', height: '1.5px', background: '#D1D5DB' }}
              />

              {/* Junction dot markers where each drop meets the spine */}
              <motion.div
                variants={rd.branch}
                style={{
                  position: 'absolute', top: '35px', left: 0, right: 0,
                  display: 'grid',
                  gridTemplateColumns: `repeat(${recallCardCols}, minmax(0, 1fr))`,
                  gap: `${recallCardGapPx}px`,
                }}
              >
                {recallPrograms.map((prog) => (
                  <div key={`${prog.name}-dot`} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9CA3AF', margin: '0 auto', marginTop: '-2.5px' }} />
                ))}
              </motion.div>

              {/* Vertical trunk down from spine center to node */}
              <motion.div
                variants={rd.stem}
                style={{ position: 'absolute', top: '35px', left: '50%', transform: 'translateX(-50%)', transformOrigin: 'top', width: '1.5px', height: '37px', background: '#D1D5DB' }}
              />
            </div>

            {/* Destination node — flat pink pill, no glow, matching Parents' pill style */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                variants={rd.node}
                style={{ background: '#E8135A', borderRadius: '12px', padding: '14px 32px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '16px', color: '#FFFFFF', whiteSpace: 'nowrap' }}
              >
                Active Recall
              </motion.div>
            </div>

            <motion.p variants={rd.caption} style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '20px', marginBottom: 0 }}>
              One skill. Every subject.
            </motion.p>
          </motion.div>

          {/* Mobile: simplified stacked fallback */}
          <div className="hide-lg" style={{ marginTop: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', maxWidth: '360px', margin: '0 auto' }}>
              {recallPrograms.map((prog) => (
                <div key={prog.name} style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '18px 10px', textAlign: 'center', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <prog.Icon size={18} color={prog.accent} strokeWidth={2} aria-hidden="true" />
                  <h3 style={{ fontSize: '12px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0, lineHeight: 1.3 }}>
                    {prog.name}
                  </h3>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '1.5px', height: '28px', background: '#D1D5DB' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: '#E8135A', borderRadius: '12px', padding: '12px 28px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '15px', color: '#FFFFFF' }}>
                Active Recall
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: '16px 0 0' }}>
              One skill. Every subject.
            </p>
          </div>
        </div>
      </section>
      )}

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <SharedFaqSection
        eyebrow="BEFORE YOU START"
        accent="#E8135A"
        title={<>Quick <AccentText tone="blue">Answers</AccentText> for <AccentText tone="pink">Quick Doubts</AccentText></>}
        subtitle="If your question isn't here, the full FAQ page covers every edge case — billing, syllabus details, and technical requirements."
        items={studentFaqs}
        linkLabel="View all FAQs"
        background="#F7FAFC"
      />

      {/* ── 9. CTA ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF', borderTop: '1px solid #ECECF1' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            {/* Left: copy */}
            <motion.div variants={fadeUp}>
              <HeadingMarker text="YOUR MOVE" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '20px' }}>
                Try It <AccentText tone="blue">Free</AccentText> for 14 Days. <AccentText tone="pink">Show a Parent the Rest</AccentText>.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                The trial is free. No credit card. No commitment. You get the full platform — GAP Assessment, personalised study plan, subject doubt support, and daily retention tracking. If it doesn't change how you study, there is nothing to cancel.
              </p>
            </motion.div>

            {/* Right: buttons */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
                <Link
                  to="/programs"
                  className="cta"
                  style={{
                    background: 'linear-gradient(90deg, #E8135A 0%, #0FA8DC 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                  }}
                >
                  Start Free Trial
                </Link>
                <Link to="/for-parents" className="cta cta-pink">
                  For Parents
                </Link>
              </div>
              <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0, textAlign: 'center' }}>
                No credit card required. Cancel anytime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
