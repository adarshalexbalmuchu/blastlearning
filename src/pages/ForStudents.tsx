import { useSEO } from '../hooks/useSEO';
import { useRef } from 'react';
import { motion, useReducedMotion, useInView, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Calculator, Type, Target, Brain } from 'lucide-react';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection } from '../components/MarketingSections';
import { fadeUp, stagger } from '../constants/animations';

// Converging diagram (reverse of the Parents-page decision tree): four program
// cards fade in, their connector lines draw inward, then the central node
// pulses as they "land". Mirrors decisionTreeVariants() in ForParents.tsx.
function recallDiagramVariants(reduced: boolean) {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const t = (duration: number, delay: number) => (reduced ? { duration: 0.25, delay: 0 } : { duration, delay, ease });

  const cardStagger = 0.09;
  const cardDuration = 0.3;
  const lineDelay = 3 * cardStagger + cardDuration - 0.05;
  const lineDuration = 0.35;
  const nodeDelay = lineDelay + lineDuration - 0.05;
  const nodeDuration = 0.4;
  const captionDelay = nodeDelay + nodeDuration;

  return {
    card: (index: number): Variants => ({
      hidden: { opacity: 0, y: reduced ? 0 : 16 },
      visible: { opacity: 1, y: 0, transition: t(cardDuration, index * cardStagger) },
    }),
    line: {
      hidden: { pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 },
      visible: { pathLength: 1, opacity: 1, transition: t(lineDuration, lineDelay) },
    } as Variants,
    node: {
      hidden: { scale: reduced ? 1 : 0.8, opacity: 0 },
      visible: {
        scale: reduced ? 1 : [0.8, 1.05, 1],
        opacity: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: nodeDuration, delay: nodeDelay, ease, times: [0, 0.6, 1] },
      },
    } as Variants,
    caption: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: t(0.3, captionDelay) },
    } as Variants,
  };
}

const recallPrograms = [
  { name: 'CBSE Full Syllabus', Icon: Book, accent: '#E8135A' },
  { name: 'Math Genius Maker', Icon: Calculator, accent: '#0FA8DC' },
  { name: 'English Mastery Pass', Icon: Type, accent: '#E8135A' },
  { name: 'SAT Prep Pass', Icon: Target, accent: '#0FA8DC' },
];

const recallCardCenters = [12.5, 37.5, 62.5, 87.5];

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
  const chartRef = useRef<SVGSVGElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: '0px 0px -10% 0px' });

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
        paddingTop: '120px',
        paddingBottom: '100px',
        borderBottom: '1px solid #ECECF1',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.03} />
        </div>
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
                style={{ maxWidth: '440px', overflow: 'visible' }}
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
            <motion.div variants={fadeUp} style={{ marginBottom: '52px' }}>
              <HeadingMarker text="THE ACTUAL SCIENCE" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2">
                <AccentText tone="blue">Reading It Again</AccentText> Isn't the <AccentText tone="pink">Same as Knowing It</AccentText>
              </h2>
            </motion.div>

            {/* Two-curve Ebbinghaus chart — full-width focal illustration */}
            <motion.div variants={fadeUp} style={{ maxWidth: '880px', margin: '0 auto' }}>
              <svg
                ref={chartRef}
                viewBox="0 0 820 370"
                width="100%"
                style={{ fontFamily: 'Inter, sans-serif', overflow: 'visible', display: 'block' }}
                aria-label="Two memory curves compared: spaced retrieval (pink, jagged but recovering with each dip shallower) versus re-reading only (gray dashed, steady decline with no recovery)"
              >
                {/* Axis labels — "memory strength" top-left, "time" bottom-right corner well clear of curves */}
                <text x="10" y="20" fontSize="11" fill="#9CA3AF">memory strength</text>
                <text x="640" y="362" fontSize="11" fill="#9CA3AF">time</text>

                {/* Legend — sits well above chart area (curves start at y≈125, legend bottom at y≈72) */}
                <line x1="10" y1="42" x2="46" y2="42" stroke="#E8135A" strokeWidth="2.5" strokeLinecap="round" />
                <text x="52" y="46" fontSize="11" fill="#5A5A6E">spaced retrieval</text>
                <line x1="10" y1="62" x2="46" y2="62" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" />
                <text x="52" y="66" fontSize="11" fill="#5A5A6E">re-reading only</text>

                {/* ── Both clipPath reveals live here: proven mechanism for SVG draw animations ── */}
                <defs>
                  {/* Pink curve reveal: left-to-right, duration 0.56s, no delay */}
                  <clipPath id="pink-reveal-clip">
                    <motion.rect
                      x="24" y="0" height="385"
                      animate={{ width: (shouldReduce || chartInView) ? 530 : 0 }}
                      transition={shouldReduce ? { duration: 0 } : { duration: 0.56, ease: 'easeInOut' }}
                    />
                  </clipPath>
                  {/* Gray curve reveal: left-to-right, 0.42s at delay 0.72s */}
                  <clipPath id="gray-reveal-clip">
                    <motion.rect
                      x="24" y="0" height="385"
                      animate={{ width: (shouldReduce || chartInView) ? 572 : 0 }}
                      transition={shouldReduce ? { duration: 0 } : { duration: 0.42, delay: 0.72, ease: 'easeInOut' }}
                    />
                  </clipPath>
                </defs>
                {/* Curve shifted +70 from original: 55→125, 132→202, 222→292, 263→333 */}
                <path
                  d="M25,125 C240,202 430,292 592,333"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                  clipPath="url(#gray-reveal-clip)"
                />

                {/* Pink retrieval curve — clipPath reveal (reliable in SVG; no pathLength conflict) */}
                <path
                  d="M25,125 L135,310 L215,158 L305,275 L375,175 L445,248 L515,168 L545,195"
                  fill="none"
                  stroke="#E8135A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  clipPath="url(#pink-reveal-clip)"
                />

                {/* ── Blue retrieval dots: fade in as pink curve reaches each peak ── */}
                {([
                  { cx: 215, cy: 158, delay: 0.20 },
                  { cx: 375, cy: 175, delay: 0.38 },
                  { cx: 515, cy: 168, delay: 0.52 },
                ] as { cx: number; cy: number; delay: number }[]).map(({ cx, cy, delay }) => (
                  <motion.circle
                    key={cx}
                    cx={cx} cy={cy} r="8"
                    fill="#0FA8DC"
                    animate={{ opacity: (shouldReduce || chartInView) ? 1 : 0 }}
                    transition={shouldReduce ? { duration: 0 } : { duration: 0.25, delay }}
                  />
                ))}

                {/* ── Annotations (useInView-driven, no whileInView on SVG children) ── */}
                <motion.g
                  animate={{ opacity: (shouldReduce || chartInView) ? 1 : 0 }}
                  transition={shouldReduce ? { duration: 0 } : { duration: 0.3, delay: 1.18 }}
                >
                  {/* "retrieval restores it" — level with first peak (cy=158) */}
                  <text x="610" y="157" fontSize="11" fill="#6B7280">retrieval restores it</text>
                  {/* "dips shrink over time" — level with 3rd dip (y=248) */}
                  <text x="610" y="245" fontSize="11" fill="#6B7280">dips shrink</text>
                  <text x="610" y="259" fontSize="11" fill="#6B7280">over time</text>
                  {/* "memory fades fast" — level with gray curve end (y=333); "time" is 30px lower */}
                  <text x="610" y="332" fontSize="11" fill="#6B7280">memory fades fast</text>
                </motion.g>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. GAP Assessment ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px', marginBottom: '64px' }}>
              <HeadingMarker text="NOT YOUR GRADE. YOU." marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2">
                The <AccentText tone="blue">GAP Assessment</AccentText> Doesn't <AccentText tone="pink">Assume Anything</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <svg
                viewBox="0 0 1000 190"
                width="100%"
                style={{ maxWidth: '900px', display: 'block', margin: '0 auto', overflow: 'visible' }}
                aria-label="A horizontal scale with 9 points. The fifth point drops down to a pink marker — your exact knowledge gap."
              >
                <line x1="60" y1="70" x2="940" y2="70" stroke="#D1D5DB" strokeWidth="1.5" />
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                  const cx = 60 + i * 110;
                  const isActive = i === 4;
                  return (
                    <g key={i}>
                      <circle cx={cx} cy="70" r="14" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                      {isActive && (
                        <>
                          <line x1={cx} y1="84" x2={cx} y2="130" stroke="#D1D5DB" strokeWidth="1.5" />
                          <circle cx={cx} cy="152" r="22" fill="#E8135A" />
                        </>
                      )}
                    </g>
                  );
                })}
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
                A Partner Who Studies <AccentText tone="blue">With You</AccentText>, Not a <AccentText tone="pink">Bot</AccentText> Checking In
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                The Tutor Mom team watches your retention data in real time. When you drop off, they reach out — not to pressure you, but because they can see exactly where you got stuck.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
              className="grid-cols-2-md"
            >
              {supportCards.map((item) => (
                <motion.div key={item.label} variants={fadeUp} whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}>
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
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <HeadingMarker text="STUCK AT 11PM" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2">
                Get <AccentText tone="blue">Unstuck</AccentText> Without Waiting for <AccentText tone="pink">Tomorrow's Class</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '24px 28px 36px', boxShadow: '0 2px 8px rgba(28,28,40,0.04)' }}>
                <p style={{ fontWeight: 700, fontSize: '15px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '24px' }}>
                  AI Tutor
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ maxWidth: '65%', background: '#F3F4F6', borderRadius: '16px 16px 16px 4px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Stuck on question 14, the substitution step.
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ maxWidth: '65%', background: '#DBEAFE', borderRadius: '16px 16px 4px 16px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Let's check what you substituted first.
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ maxWidth: '50%', background: '#F3F4F6', borderRadius: '16px 16px 16px 4px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Oh, I flipped the sign.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Exam Technique ───────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
              <HeadingMarker text="THE PART NOBODY ELSE TEACHES" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                <AccentText tone="blue">Knowing It</AccentText> Isn't the Same as <AccentText tone="pink">Staying Calm With It</AccentText>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Exam anxiety is not a personality trait. It is what happens when your brain tries to recall something it has only ever recognised. Under pressure, recognition fails. Recall — trained through active retrieval — holds.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Blast Learning builds retrieval practice into every session. By the time you sit your exam, your brain has practised producing the answer — not just seeing it. That is the difference between knowing a formula and being able to write it down in a hall where nothing feels familiar.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Transfer ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
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

          {/* Converging diagram: four programs, one underlying skill */}
          <motion.div
            className="show-lg-blk"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ maxWidth: '820px', margin: '64px auto 0' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${recallPrograms.length}, minmax(0, 1fr))`,
                gap: '20px',
              }}
            >
              {recallPrograms.map((prog, i) => (
                <motion.div key={prog.name} variants={rd.card(i)} whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}>
                  <div style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '22px 14px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxSizing: 'border-box' }}>
                    <prog.Icon size={20} color={prog.accent} strokeWidth={2} aria-hidden="true" />
                    <h3 style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0, lineHeight: 1.35 }}>
                      {prog.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ position: 'relative', height: '80px' }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }} aria-hidden="true">
                {recallPrograms.map((prog, i) => (
                  <motion.line
                    key={`${prog.name}-line`}
                    x1={`${recallCardCenters[i]}%`}
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke={prog.accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    variants={rd.line}
                  />
                ))}
              </svg>
              <motion.div
                variants={rd.node}
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 32px)',
                  top: '48px',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#E8135A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 28px rgba(232, 19, 90, 0.35)',
                }}
              >
                <Brain size={26} color="#FFFFFF" strokeWidth={2} aria-hidden="true" />
              </motion.div>
            </div>

            <motion.p variants={rd.caption} style={{ textAlign: 'center', fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginTop: '48px', marginBottom: '4px' }}>
              Active Recall
            </motion.p>
            <motion.p variants={rd.caption} style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
              One skill. Every subject.
            </motion.p>
          </motion.div>

          {/* Mobile: simplified stacked fallback (no diagonal converge) */}
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
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E8135A', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 28px rgba(232, 19, 90, 0.35)' }}>
                <Brain size={26} color="#FFFFFF" strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginTop: '16px', marginBottom: '4px' }}>
              Active Recall
            </p>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
              One skill. Every subject.
            </p>
          </div>
        </div>
      </section>

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
                <Link to="/programs" className="cta cta-blue">
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
