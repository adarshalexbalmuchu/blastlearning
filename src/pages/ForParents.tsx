import { useRef, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { motion, useInView, useMotionValue, useTransform, animate as fmAnimate, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import MobileCarousel from '../components/MobileCarousel';
import { SharedFaqSection } from '../components/MarketingSections';
import { DashboardMockup, TutorTeamMockup } from '../components/TransparencyMockups';
import CoachingCalculator from '../components/CoachingCalculator';
import { fadeUp, stagger, springUp, popIn } from '../constants/animations';

const MotionLink = motion.create(Link);

function StatValue({ raw, color }: { raw: string; color: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const numMatch = raw.match(/^([\d,]+)(\+?)$/);
  const numericTarget = numMatch ? parseInt(numMatch[1].replace(/,/g, ''), 10) : null;
  const suffix = numMatch?.[2] ?? '';
  const motionVal = useMotionValue(0);
  const displayVal = useTransform(motionVal, (v) => Math.round(v).toLocaleString('en-IN') + suffix);

  useEffect(() => {
    if (!inView || numericTarget === null) return;
    if (shouldReduce) { motionVal.set(numericTarget); return; }
    fmAnimate(motionVal, numericTarget, { duration: 1.3, ease: 'easeOut' });
  }, [inView, shouldReduce]);

  const style = { fontSize: 'clamp(1rem, 1.4vw, 1.35rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color, lineHeight: 1, margin: 0, opacity: 0.7 } as const;
  if (numericTarget !== null) return <motion.p ref={ref} style={style}>{displayVal}</motion.p>;
  return <p ref={ref} style={style}>{raw}</p>;
}

// Hero "retention rings" animation: loads immediately (not scroll-triggered,
// since it's above the fold). Rings reveal outer -> inner ~180ms apart, the
// core does the same scale-pulse used for the recall diagram on /for-students,
// and each legend line lands right after its matching ring.
function heroVariants(reduced: boolean) {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const ringStagger = 0.18;
  const ringDuration = 0.35;
  const coreDelay = 2 * ringStagger;
  const coreDuration = 0.4;
  const ringEnds = [ringDuration, ringStagger + ringDuration, coreDelay + coreDuration];

  return {
    text: {
      hidden: { opacity: 0, y: reduced ? 0 : 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    } as Variants,
    ring: (index: number): Variants => ({
      hidden: { opacity: 0, scale: reduced ? 1 : 0.85 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: ringDuration, delay: index * ringStagger, ease },
      },
    }),
    core: {
      hidden: { opacity: 0, scale: reduced ? 1 : 0.8 },
      visible: {
        opacity: 1,
        scale: reduced ? 1 : [0.8, 1.05, 1],
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: coreDuration, delay: coreDelay, ease, times: [0, 0.6, 1] },
      },
    } as Variants,
    legend: (index: number): Variants => ({
      hidden: { opacity: 0, y: reduced ? 0 : 8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: 0.25, delay: ringEnds[index], ease },
      },
    }),
  };
}

const retentionLayers = [
  { key: 'effort', label: 'Effort', desc: 'what you see', color: '#FAD9E3' },
  { key: 'method', label: 'Method', desc: 'what\'s missing', color: '#F08CAD' },
  { key: 'retention', label: 'Retention', desc: 'what actually matters', color: '#E8135A' },
];

// Re-reading vs. retrieval practice comparison, scroll-triggered once.
function comparisonVariants(reduced: boolean) {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const ringStagger = 0.15;
  const ringDuration = 0.32;
  const solidDuration = 0.3;
  const leftCaptionDelay = 2 * ringStagger + ringDuration;

  return {
    ring: (index: number): Variants => ({
      hidden: { opacity: 0, scale: reduced ? 1 : 0.85 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: ringDuration, delay: index * ringStagger, ease },
      },
    }),
    solid: {
      hidden: { opacity: 0, scale: reduced ? 1 : 0.85 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: solidDuration, delay: 0, ease },
      },
    } as Variants,
    captionLeft: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: 0.25, delay: leftCaptionDelay, ease },
      },
    } as Variants,
    captionRight: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: reduced ? { duration: 0.25, delay: 0 } : { duration: 0.25, delay: solidDuration, ease },
      },
    } as Variants,
  };
}

// Decision-tree scroll animation: box -> stem -> branch -> drops -> cards -> caption.
// Connectors are animated via CSS transform (scaleX/scaleY + transform-origin) on the
// existing div-based lines rather than converting to SVG, since they're straight
// segments and this keeps the corrected layout/markup untouched.
function decisionTreeVariants(reduced: boolean) {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const t = (duration: number, delay: number) => (reduced ? { duration: 0.25, delay: 0 } : { duration, delay, ease });

  const cardBaseDelay = 1.13;
  const cardStagger = 0.09;
  const cardDuration = 0.3;

  return {
    node: {
      hidden: { opacity: 0, y: reduced ? 0 : -10 },
      visible: { opacity: 1, y: 0, transition: t(0.4, 0) },
    } as Variants,
    stem: {
      hidden: { scaleY: reduced ? 1 : 0 },
      visible: { scaleY: 1, transition: t(0.25, 0.4) },
    } as Variants,
    branch: {
      hidden: { scaleX: reduced ? 1 : 0 },
      visible: { scaleX: 1, transition: t(0.3, 0.65) },
    } as Variants,
    drops: {
      hidden: { scaleY: reduced ? 1 : 0 },
      visible: { scaleY: 1, transition: t(0.18, 0.95) },
    } as Variants,
    card: (index: number): Variants => ({
      hidden: { opacity: 0, y: reduced ? 0 : 14 },
      visible: { opacity: 1, y: 0, transition: t(cardDuration, cardBaseDelay + index * cardStagger) },
    }),
    caption: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: t(0.25, cardBaseDelay + 3 * cardStagger + cardDuration) },
    } as Variants,
  };
}

const parentFaqs = [
  {
    q: 'Will this replace our tutor?',
    a: 'No. It sits beneath the tutoring, making it stick.',
  },
  {
    q: 'What if my child stops using it?',
    a: 'The system flags missed sessions and you\'ll receive a notification. The AI automatically adjusts the study plan so your child can catch up without being overwhelmed when they return. Our Tutor Mom team can also reach out directly if a student goes quiet.',
  },
  {
    q: 'What happens after the 14-day trial?',
    a: 'You choose a plan that fits your child\'s programme. There is no obligation to continue, no automatic charge, and your child\'s progress data remains accessible to you regardless of what you decide.',
  },
  {
    q: 'Is this just another screen?',
    a: 'No. The platform requires active recall — your child has to produce answers, not passively read content. That is the difference between the feeling of learning and actual retention. Most sessions are under 20 minutes.',
  },
  {
    q: 'Can I talk to a person first?',
    a: 'Yes. Our team is available to answer questions before you start anything. Use the Contact page and someone will respond within 24 hours.',
  },
];

const transparencyItems = [
  {
    label: 'What you\'ll see.',
    title: 'The Parent Dashboard',
    body: 'A daily digest of exactly what your child studied, how long they spent, and their retention score by subject. Weekly summaries track progress over time. No interpretation required — the numbers speak plainly.',
    accent: '#0FA8DC',
    kind: 'dashboard' as const,
  },
  {
    label: 'Who\'s with your child.',
    title: 'The Tutor Mom Team',
    body: 'Real educators, available Monday to Saturday, 9 AM to 9 PM. They monitor session quality, answer subject doubts within two hours, and reach out proactively when a student\'s retention drops below target.',
    accent: '#E8135A',
    kind: 'tutor' as const,
  },
];

const programs = [
  { name: 'CBSE Full Syllabus', situation: 'Boards, any core subject', price: 'Rs 1,299/month', subtitle: 'Class 10 board exam preparation', desc: 'Complete NCERT coverage with retention-first pacing across all seven core subjects.', path: '/programs/cbse-plan', accent: '#E8135A' },
  { name: 'Math Genius Maker', situation: 'Math gap or JEE/NEET', price: 'Rs 999/month', subtitle: 'Targeted gap assessment', desc: 'Finds the exact concepts holding your child back in Mathematics and builds a focused practice plan.', path: '/programs/math-genius', accent: '#0FA8DC' },
  { name: 'English Mastery Pass', situation: 'Comprehension or SAT-track', price: 'Rs 999/month', subtitle: 'Grammar, writing, comprehension', desc: 'Structured skill-building for the English paper — the subject most students underestimate.', path: '/programs/english-mastery', accent: '#E8135A' },
  { name: 'SAT Prep Pass', situation: 'Digital SAT specifically', price: 'Rs 999/month', subtitle: 'US college admission', desc: 'Foundation to advanced SAT preparation, suitable from Class 10 onward.', path: '/programs/sat-prep', accent: '#0FA8DC' },
];

const researchStats = [
  { value: '500+', label: 'peer-reviewed learning studies', color: '#E8135A' },
  { value: '100,000+', label: 'students taught under this system', color: '#0FA8DC' },
  { value: 'US & International', label: 'patents protecting the methodology', color: '#E8135A' },
  { value: 'IBM & McGraw-Hill', label: 'institutional licensing partners', color: '#0FA8DC' },
];

const researchTimeline = [
  { label: '25 years', sublabel: 'Lewolt builds the methodology', color: '#E8135A' },
  { label: 'Licensed', sublabel: 'IBM and McGraw-Hill adopt it', color: '#0FA8DC' },
  { label: 'Mind Coach', sublabel: 'Co-developed with Dr. Jon Finn', color: '#E8135A' },
];

export default function ForParents() {
  useSEO({
    title: 'For Parents | Blast Learning India',
    description: 'Understand how Blast Learning makes your child\'s existing study time more effective — with full visibility, human support, and a methodology built over twenty-five years.',
  });
  const shouldReduce = useReducedMotion();
  const hv = heroVariants(!!shouldReduce);
  const cv = comparisonVariants(!!shouldReduce);

  // Parent Dashboard card hidden, not deleted — drop this filter to re-enable it.
  const visibleTransparencyItems = transparencyItems.filter((item) => item.kind !== 'dashboard');

  const programColumns = programs.length;
  const programCardGapPx = 20;
  const programHorizontalInset = `calc((100% - ${(programColumns - 1) * programCardGapPx}px) / ${programColumns * 2})`;
  const dt = decisionTreeVariants(!!shouldReduce);

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(15, 168, 220, 0.03) 0%, #FFFFFF 30%, rgba(232, 19, 90, 0.06) 80%, rgba(232, 19, 90, 0.04) 100%)',
        paddingTop: '120px',
        paddingBottom: '80px',
        minHeight: '760px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ECECF1',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        {/* ── Brand background decorations ── */}
        {/* Main pink glow — right side, behind rings illustration */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)', width: '850px', height: '850px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232, 19, 90, 0.15) 0%, rgba(232, 19, 90, 0.06) 45%, transparent 68%)', pointerEvents: 'none' }} />
        {/* Blue accent blob — top-left corner */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-100px', top: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15, 168, 220, 0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Pink stroke ring — right area */}
        <div aria-hidden="true" style={{ position: 'absolute', right: '8%', top: '12%', width: '220px', height: '220px', borderRadius: '50%', border: '1.5px solid rgba(232, 19, 90, 0.2)', background: 'transparent', pointerEvents: 'none' }} />
        {/* Blue stroke ring — bottom-left */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '18%', bottom: '8%', width: '140px', height: '140px', borderRadius: '50%', border: '1.5px solid rgba(15, 168, 220, 0.22)', background: 'transparent', pointerEvents: 'none' }} />
        {/* Small pink dot accent */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '42%', top: '18%', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(232, 19, 90, 0.32)', pointerEvents: 'none' }} />
        {/* Small blue dot accent */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '36%', bottom: '20%', width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(15, 168, 220, 0.36)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={hv.text}>
              <HeadingMarker text="FOR PARENTS" marginBottom="24px" fontSize="12px" accent="#E8135A" />
              <h1 className="page-hero-title">
                The <AccentText tone="blue">Real Question</AccentText> Isn't Whether Your Child Is <AccentText tone="pink">Trying</AccentText>
              </h1>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', width: '100%', maxWidth: '400px' }}>
                <svg
                  viewBox="0 0 300 300"
                  width="100%"
                  style={{ maxWidth: '260px', overflow: 'visible' }}
                  aria-label="Three nested rings, from outer to inner: Effort (what you see), Method (what's missing), and Retention (what actually matters)"
                >
                  <motion.circle variants={hv.ring(0)} cx="150" cy="150" r="112.5" fill="none" stroke={retentionLayers[0].color} strokeWidth="35" />
                  <motion.circle variants={hv.ring(0)} cx="150" cy="150" r="130" fill="none" stroke="rgba(240, 140, 173, 0.35)" strokeWidth="1.5" />
                  <motion.circle variants={hv.ring(1)} cx="150" cy="150" r="75" fill="none" stroke={retentionLayers[1].color} strokeWidth="40" />
                  <motion.circle variants={hv.core} cx="150" cy="150" r="55" fill={retentionLayers[2].color} />
                  <motion.text
                    variants={hv.core}
                    x="150"
                    y="150"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontFamily="Poppins, sans-serif"
                    fontWeight={600}
                    fontSize="16"
                  >
                    Retention
                  </motion.text>
                </svg>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  {retentionLayers.map((layer, i) => (
                    <motion.div key={layer.key} variants={hv.legend(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: layer.color, flexShrink: 0, marginTop: '4px', border: i === 0 ? '1px solid #F3C6D4' : 'none' }} />
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, fontFamily: 'Inter, sans-serif', color: '#5A5A6E' }}>
                        <strong style={{ fontFamily: 'Poppins, sans-serif', color: '#1C1C28', fontWeight: 600 }}>{layer.label}</strong> — {layer.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. The Mechanism ────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <HeadingMarker text="THE MECHANISM" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
            <h2 className="t-h2">
              <AccentText tone="blue">Re-Reading</AccentText> Feels Like Learning. It <AccentText tone="pink">Isn't</AccentText>.
            </h2>
          </motion.div>
          {/* Re-reading vs. retrieval practice illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="row-sm"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', maxWidth: '860px', margin: '64px auto 0' }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: 0 }}>
                Re-reading
              </p>
              <svg viewBox="0 0 160 160" width="160" height="160" aria-label="Three overlapping rings representing re-reading">
                <motion.circle variants={cv.ring(0)} cx="80" cy="80" r="60.5" fill="none" stroke="#FAD9E3" strokeWidth="19" />
                <motion.circle variants={cv.ring(1)} cx="80" cy="80" r="40.5" fill="none" stroke="#F08CAD" strokeWidth="21" />
                <motion.circle variants={cv.ring(2)} cx="80" cy="80" r="30" fill="#E8135A" />
              </svg>
              <motion.p variants={cv.captionLeft} style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#5A5A6E', margin: 0 }}>
                Feels productive.
              </motion.p>
            </div>

            <div className="comparison-divider" aria-hidden="true" />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: 0 }}>
                Retrieval practice
              </p>
              <div style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div variants={cv.solid} style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0FA8DC' }} />
              </div>
              <motion.p variants={cv.captionRight} style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#5A5A6E', margin: 0 }}>
                Builds memory.
              </motion.p>
            </div>
          </motion.div>        </div>
      </section>

      {/* ── 3. Calculator ───────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="A TOOL, NOT A PITCH" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                Run the <AccentText tone="blue">Numbers</AccentText> Before You Decide <AccentText tone="pink">Anything</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Enter what you currently spend on coaching. The calculator shows you exactly what percentage of that investment is retained by your child after 30 days — and what Blast Learning adds to that figure. No sales language. One comparison line.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <CoachingCalculator />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Research / History ───────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="WHY THIS ISN'T A NEW IDEA" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                <AccentText tone="blue">Twenty-Five Years</AccentText> Before the First Indian Student <AccentText tone="pink">Used It</AccentText>
              </h2>
            </motion.div>

            {/* Stat cards — staggered fade-up, count-up on numeric values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '64px' }}
              className="grid-cols-2-md grid-cols-4-lg"
            >
              {researchStats.map((stat) => (
                <motion.div
                  key={stat.value}
                  variants={popIn}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: '0 16px 40px rgba(15,23,42,0.10), 0 4px 12px rgba(15,23,42,0.06)', transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ECECF1',
                    borderRadius: '16px',
                    padding: '32px 20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 4px rgba(28,28,40,0.04)',
                  }}
                >
                  <StatValue raw={stat.value} color={stat.color} />
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: '16px 0 0' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline — line draws left-to-right, dots bounce in as line reaches them */}
            <div>
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: `repeat(${researchTimeline.length}, 1fr)`, height: '24px', marginBottom: '16px' }}>
                {/* Animated connecting line */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${100 / (2 * researchTimeline.length)}%`,
                    right: `${100 / (2 * researchTimeline.length)}%`,
                    height: '1.5px',
                    background: '#D1D5DB',
                    transformOrigin: '0% 50%',
                    transform: 'translateY(-50%)',
                  }}
                  initial={shouldReduce ? {} : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={shouldReduce ? {} : { duration: 0.85, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
                {/* Dots — pop in staggered after line starts drawing */}
                {researchTimeline.map((point, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.div
                      style={{ width: '16px', height: '16px', borderRadius: '50%', background: point.color, position: 'relative', zIndex: 1, flexShrink: 0 }}
                      initial={shouldReduce ? {} : { scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={shouldReduce ? {} : { type: 'spring', stiffness: 420, damping: 14, delay: i * 0.2 + 0.35 }}
                      viewport={{ once: true }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${researchTimeline.length}, 1fr)` }}>
                {researchTimeline.map((point, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '12px 12px 0' }}>
                    <p style={{ fontWeight: 700, fontSize: '16px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: '0 0 4px' }}>
                      {point.label}
                    </p>
                    <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {point.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Transparency ─────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="TRANSPARENCY, NOT REASSURANCE" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                A <AccentText tone="pink">Human Partner</AccentText>, <AccentText tone="blue">Visible Progress</AccentText>, No Surprises
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Most edtech platforms ask parents to trust a dashboard. Blast Learning gives you a dashboard and a person — so that what you see is always accompanied by someone who can explain it.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', maxWidth: visibleTransparencyItems.length === 1 ? '560px' : undefined }}
              className={visibleTransparencyItems.length === 1 ? undefined : 'grid-cols-2-md'}
            >
              {visibleTransparencyItems.map((item) => (
                <motion.div key={item.label} variants={popIn} whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 320, damping: 20 } }}>
                  <div style={{ height: '100%', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', padding: '32px', borderTop: `3px solid ${item.accent}`, boxShadow: '0 2px 8px rgba(28,28,40,0.04)' }}>
                    <HeadingMarker text={item.label} accent={item.accent} fontSize="11px" marginBottom="12px" />
                    <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '16px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {item.body}
                    </p>
                    {item.kind === 'tutor' ? <TutorTeamMockup accent={item.accent} /> : <DashboardMockup accent={item.accent} />}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Program Selection — hidden, not deleted. Flip to true to re-enable. */}
      {false && (
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={springUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="CHOOSING, NOT BROWSING" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                <AccentText tone="blue">Start</AccentText> From Where Your Child <AccentText tone="pink">Actually Is</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Most programs ask you to choose a plan before knowing where your child struggles. We start with a GAP Assessment that identifies exactly which concepts are missing, so the program your child uses is built around their actual gaps, not a generic syllabus.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              {/* Desktop: decision tree layout */}
              <motion.div
                className="show-lg-blk"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Top node */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.div variants={dt.node} style={{ border: '1.5px solid #1C1C28', borderRadius: '12px', padding: '14px 32px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '16px', color: '#1C1C28', background: '#FFFFFF', whiteSpace: 'nowrap' }}>
                    What's the situation?
                  </motion.div>
                </div>
                {/* Stem + horizontal bar + vertical drops aligned to card centers */}
                <div style={{ position: 'relative', height: '72px' }}>
                  <motion.div variants={dt.stem} style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', transformOrigin: 'top', width: '1.5px', height: '36px', background: '#D1D5DB' }} />
                  <motion.div variants={dt.branch} style={{ position: 'absolute', top: '35px', left: programHorizontalInset, right: programHorizontalInset, transformOrigin: 'center', height: '1.5px', background: '#D1D5DB' }} />
                  <motion.div
                    variants={dt.drops}
                    style={{
                      position: 'absolute',
                      top: '35px',
                      left: 0,
                      right: 0,
                      transformOrigin: 'top',
                      display: 'grid',
                      gridTemplateColumns: `repeat(${programColumns}, minmax(0, 1fr))`,
                      gap: `${programCardGapPx}px`,
                    }}
                  >
                    {programs.map((prog) => (
                      <div key={`${prog.name}-connector`} style={{ width: '1.5px', height: '37px', background: '#D1D5DB', margin: '0 auto' }} />
                    ))}
                  </motion.div>
                </div>
                {/* 4-col cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${programColumns}, minmax(0, 1fr))`,
                    gap: `${programCardGapPx}px`,
                  }}
                >
                  {programs.map((prog, i) => (
                    <MotionLink key={prog.name} to={prog.path} variants={dt.card(i)} whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }} style={{ textDecoration: 'none' }}>
                      <div style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '28px 20px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', boxSizing: 'border-box' }}>
                        <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0, lineHeight: 1.5 }}>
                          {prog.situation}
                        </p>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0 }}>
                          {prog.name}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                          {prog.price}
                        </p>
                      </div>
                    </MotionLink>
                  ))}
                </div>
                <motion.p variants={dt.caption} style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '28px', marginBottom: 0 }}>
                  14-day free trial. No credit card. 20% off two or more courses.
                </motion.p>
              </motion.div>

              {/* Mobile: simple carousel (hidden on desktop) */}
              <div className="hide-lg">
                <MobileCarousel desktopGridClass="grid-cols-2-md">
                  {programs.map((prog) => (
                    <div key={prog.name} style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '24px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <p style={{ fontSize: '12px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                        {prog.situation}
                      </p>
                      <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0 }}>
                        {prog.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0, flex: 1 }}>
                        {prog.price}
                      </p>
                      <Link to={prog.path} style={{ fontSize: '13px', fontWeight: 600, color: prog.accent, textDecoration: 'none' }}>
                        View program →
                      </Link>
                    </div>
                  ))}
                </MobileCarousel>
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '24px', marginBottom: 0 }}>
                  14-day free trial. No credit card. 20% off two or more courses.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      )}

      {/* ── 7. FAQ ──────────────────────────────────────────────── */}
      <SharedFaqSection
        eyebrow="BEFORE YOU DECIDE"
        accent="#E8135A"
        title={<>The <AccentText tone="blue">Questions</AccentText> We'd <AccentText tone="pink">Ask</AccentText> Too</>}
        subtitle="If your question isn't here, the full FAQ page covers every edge case — billing, syllabus details, and technical requirements."
        items={parentFaqs}
        linkLabel="View all FAQs"
        background="#FFFFFF"
      />

      {/* ── 8. CTA ──────────────────────────────────────────────── */}
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
              <HeadingMarker text="TWO WAYS FORWARD" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '20px' }}>
                Begin the <AccentText tone="blue">Trial</AccentText>, or Talk to <AccentText tone="pink">Someone First</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                The 14-day free trial requires no credit card and gives you full access to every feature, including the parent dashboard, daily digests, and the Tutor Mom team. If you'd prefer to speak with someone before starting, we're available.
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
                <Link to="/contact" className="cta cta-blue">
                  Talk to Our Team
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
