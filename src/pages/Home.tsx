import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight, Users,
  ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import FeatureExplorer from '../components/FeatureExplorer';
import TrustStats from '../components/TrustStats';
import HeroCarousel from '../components/HeroCarousel';
import {
  ForgettingCurveIllustration,
} from '../components/illustrations';
import ResultsScoreCards from '../components/ResultsScoreCards';
import HowItWorksCard, { UploadVisual, AIVisual, MasteryVisual } from '../components/HowItWorksCard';
import { useState, useEffect, useRef } from 'react';
import { useSEO } from '../hooks/useSEO';

// ─── Data ──────────────────────────────────────────────────────────────────────

const howItWorks = [
  {
    num: '01',
    title: 'Record or Upload Content',
    desc: 'Upload your class notes, recordings, or textbook chapters. Our AI processes and structures everything for optimal learning.',
    accent: '#0FA8DC',
    Visual: UploadVisual,
  },
  {
    num: '02',
    title: 'AI Creates Your Study Plan',
    desc: 'Our Metacognition Engine analyzes your learning patterns and creates a personalized study schedule using spaced repetition science.',
    accent: '#0FA8DC',
    Visual: AIVisual,
  },
  {
    num: '03',
    title: 'Learn, Practice, Master',
    desc: 'Follow your adaptive plan, practice with smart quizzes, and track your retention scores. Master every concept before your exams.',
    accent: '#0FA8DC',
    Visual: MasteryVisual,
  },
];

const pricingPlans = [
  {
    id: 'cbse',
    slug: 'cbse-plan',
    name: 'CBSE Plan',
    classes: 'Classes 8–10',
    desc: 'Complete board prep with AI-powered retention tracking.',
    monthlyPrice: 1299,
    yearlyMonthly: 1039,
    features: [
      'Full NCERT syllabus coverage',
      'AI spaced repetition study plans',
      'Parent dashboard & WhatsApp alerts',
      'Board exam mock tests',
      'Live retention score tracking',
    ],
    featured: true,
  },
  {
    id: 'math',
    slug: 'math-genius',
    name: 'Math Genius',
    classes: 'Classes 8–12',
    desc: 'Gap-fill and master every math concept from foundation up.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Personalised gap analysis',
      'Foundation to advanced topics',
      'Speed & accuracy drills',
      'AI-generated practice sets',
      'Visual concept explainers',
    ],
    featured: false,
  },
  {
    id: 'english',
    slug: 'english-mastery',
    name: 'English Mastery',
    classes: 'All Classes',
    desc: 'Grammar, writing, and reading — built systematically.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Grammar & writing modules',
      'Reading comprehension tools',
      'Vocabulary builder',
      'AI essay feedback',
      'Exam-style practice sets',
    ],
    featured: false,
  },
  {
    id: 'sat',
    slug: 'sat-prep',
    name: 'SAT Prep Pass',
    classes: 'Classes 10–12',
    desc: 'Adaptive SAT prep designed for top college scores.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Complete SAT syllabus',
      'Adaptive timed mock tests',
      'Score improvement tracking',
      'Verbal & math sections',
      'College-ready benchmarks',
    ],
    featured: false,
  },
];

const parentConcerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention' },
  { concern: "Coaching fees keep increasing but results don't improve", solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons' },
  { concern: "I can't tell if my child is actually studying", solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage daily' },
  { concern: 'My child is stressed and losing confidence', solution: 'Personalized pace and progress celebrations build confidence as students see real improvement' },
  { concern: 'Different coaching teachers explain things differently', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions' },
];

const homeFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps 91% of students improve what they retain, compared to the 10% most students remember without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach. It tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 7-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first week." },
];


// ─── Framer Motion stat counter (no GSAP) ──────────────────────────────────────
function StatCounter({ num, displayFn, label, color = '#1C1C28' }: { num: number; displayFn: (v: number) => string; label: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => displayFn(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, num, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => ctrl.stop();
  }, [inView, num, count]);

  return (
    <div ref={ref} className="text-center">
      <motion.div style={{
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        fontWeight: 800,
        marginBottom: '6px',
        fontFamily: 'Poppins, sans-serif',
        color,
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}>
        {rounded}
      </motion.div>
      <div style={{ fontSize: '13px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', lineHeight: 1.5, marginTop: '8px' }}>{label}</div>
    </div>
  );
}

// ─── Scroll-reveal variants ─────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Reusable section heading ───────────────────────────────────────────────────
function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '32px' }}>
      {eyebrow && (
        <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', maxWidth: '600px', margin: '14px auto 0', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isYearly, setIsYearly] = useState(false);

  useSEO({
    title: 'Blast Learning | AI-Powered Study Retention for Indian Students',
    description: "India's #1 AI-powered study retention platform. Convert expensive coaching into permanent memory with spaced repetition. 4,999+ students, 91% retention rate. Start your free 7-day trial.",
  });

  return (
    <div>
      {/* ── Hero Banner Carousel ── */}
      <HeroCarousel />

      {/* ── Trust stats: overlap hero bottom ── */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '-56px' }}>
        <TrustStats />
      </div>

      {/* ── Science of Retention (white) ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ minWidth: 0 }}>
              <div style={{ background: '#F8F9FA', border: '1px solid #ECECF1', borderRadius: '20px', padding: '24px' }}>
                <ForgettingCurveIllustration animated width="100%" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                The Science
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Why Students Forget, and How We Fix It
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '28px' }}>
                Ebbinghaus's Forgetting Curve shows students lose 80% of what they learn within 24 hours. Blast Learning's spaced repetition system fights this directly, scheduling reviews at the exact moment your child is about to forget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Spaced Repetition', desc: 'Reviews scheduled at optimal intervals, not random, not cramming.' },
                  { label: 'Active Recall', desc: 'Smart quizzes that make your brain work harder, creating stronger memories.' },
                  { label: 'Metacognition Tracking', desc: 'AI maps exactly where knowledge gaps exist and fills them before exams.' },
                ].map(({ label, desc }) => (
                  <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0FA8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle size={11} style={{ color: 'white' }} />
                    </div>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>{label}</span>
                      <span style={{ fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>: {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works (light gray) ── */}
      <section id="how-it-works" className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Simple Process"
            title="How Blast Learning Works"
            subtitle="Three simple steps to turn everyday study into lasting retention."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '28px' }} className="grid-cols-3-md">
            {howItWorks.map(({ num, title, desc, accent, Visual }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <HowItWorksCard num={num} title={title} desc={desc} accent={accent} Visual={Visual} />
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center' }}>
            <Link className="cta cta-blue" to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: 'none' }}>
              Start Your 7-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing / Programs (white) ── */}
      <section id="programs-preview" className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          {/* Centered header + toggle */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              Pricing
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{ fontSize: '16px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px' }}>
              All plans include a 7-day free trial. No credit card required.
            </p>
            {/* Monthly / Yearly toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', color: '#1C1C28' }}>
              <span style={{ opacity: isYearly ? 0.45 : 1, transition: 'opacity 0.2s' }}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                aria-label="Toggle billing period"
                style={{ width: '44px', height: '24px', borderRadius: '999px', background: isYearly ? '#0FA8DC' : '#D1D5DB', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.25s', padding: 0, flexShrink: 0 }}
              >
                <span style={{ position: 'absolute', top: '3px', left: isYearly ? '23px' : '3px', width: '18px', height: '18px', borderRadius: '50%', background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', transition: 'left 0.25s' }} />
              </button>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: isYearly ? 1 : 0.45, transition: 'opacity 0.2s' }}>
                Yearly
                <span style={{ padding: '2px 8px', borderRadius: '9999px', background: '#ECFDF5', color: '#059669', fontSize: '11px', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="programs-scroll"
          >
            {pricingPlans.map((plan) => {
              const price = isYearly ? plan.yearlyMonthly : plan.monthlyPrice;
              const annualYearly = plan.yearlyMonthly * 12;
              const annualMonthly = plan.monthlyPrice * 12;
              return (
                <motion.div
                  key={plan.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    position: 'relative',
                    background: '#FFFFFF',
                    border: plan.featured ? '2px solid #0FA8DC' : '1.5px solid #ECECF1',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    boxShadow: plan.featured
                      ? '0 8px 32px rgba(15,168,220,0.14)'
                      : '0 2px 12px rgba(28,28,40,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Most Popular badge */}
                  {plan.featured && (
                    <span style={{
                      position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                      padding: '4px 14px', fontSize: '11px', fontWeight: 700, color: 'white',
                      background: '#0FA8DC', borderRadius: '9999px', fontFamily: 'Inter, sans-serif',
                      whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(15,168,220,0.35)',
                    }}>
                      Most Popular
                    </span>
                  )}

                  {/* Plan name + classes */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: 0 }}>
                      {plan.name}
                    </h3>
                    <span style={{ padding: '2px 9px', fontSize: '11px', fontWeight: 600, borderRadius: '9999px', background: '#F0F9FF', color: '#0FA8DC', fontFamily: 'Inter, sans-serif', flexShrink: 0, marginTop: '2px' }}>
                      {plan.classes}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: '0 0 20px', lineHeight: 1.5 }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', paddingBottom: '6px' }}>₹</span>
                      <span style={{ fontSize: '40px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1 }}>
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', paddingBottom: '5px', marginLeft: '2px' }}>/mo</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#A0A0B0', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>
                      {isYearly
                        ? `Billed ₹${annualYearly.toLocaleString('en-IN')}/yr · saves ₹${(annualMonthly - annualYearly).toLocaleString('en-IN')}`
                        : `₹${plan.yearlyMonthly.toLocaleString('en-IN')}/mo when billed yearly`}
                    </p>
                  </div>

                  {/* Separator */}
                  <div style={{ height: '1px', background: '#F0F0F5', marginBottom: '20px' }} />

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '11px', flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <CheckCircle size={15} style={{ color: '#0FA8DC', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#3D3D4E', fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/programs/${plan.slug}`}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      padding: '12px 20px', borderRadius: '10px',
                      fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none', marginTop: 'auto',
                      background: plan.featured ? '#0FA8DC' : 'transparent',
                      color: plan.featured ? 'white' : '#1C1C28',
                      border: plan.featured ? 'none' : '1.5px solid #DCDCE5',
                      boxShadow: 'none',
                    }}
                  >
                    Start Your 7-Day Free Trial <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer link */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '32px', fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
            Not sure which plan is right?{' '}
            <Link to="/programs" style={{ color: '#0FA8DC', fontWeight: 600, textDecoration: 'none' }}>
              Compare all programs →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* ── Features: expandable explorer (light gray) ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            title="What Makes Us Different"
            subtitle="Built around the science of memory, not just another content library. Tap any feature to see how it works."
          />
          <FeatureExplorer />
        </div>
      </section>

      {/* ── Results Banner (white) ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <SectionHeading
            title="See Results Within One Month"
            subtitle="Our students consistently report higher retention, improved exam performance, and greater confidence within their first 30 days."
          />

          {/* Animated score gauge cards */}
          <div style={{ marginBottom: '28px', textAlign: 'left' }}>
            <ResultsScoreCards />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid-cols-3-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', maxWidth: '720px', margin: '0 auto 48px' }}>
            {[
              { num: 3, displayFn: (v: number) => `${v}x`, label: 'More retention than traditional study', color: '#0FA8DC', bg: '#F0F9FF', icon: <TrendingUp size={20} /> },
              { num: 91, displayFn: (v: number) => `${v}%`, label: 'Students improve their grades', color: '#0FA8DC', bg: '#F0F9FF', icon: <Users size={20} /> },
              { num: 30, displayFn: (v: number) => `${v}`, label: 'Days average to see results', color: '#0FA8DC', bg: '#F0F9FF', icon: <Zap size={20} /> },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} style={{
                background: s.bg,
                borderRadius: '20px',
                padding: '28px 20px 24px',
                borderTop: `3px solid ${s.color}`,
                borderLeft: `1px solid ${s.color}20`,
                borderRight: `1px solid ${s.color}20`,
                borderBottom: `1px solid ${s.color}20`,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: `${s.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  color: s.color,
                }}>
                  {s.icon}
                </div>
                <StatCounter num={s.num} displayFn={s.displayFn} label={s.label} color={s.color} />
              </motion.div>
            ))}
          </motion.div>

          <Link className="cta cta-blue" to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: 'none' }}>
            Start Your 7-Day Free Trial <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Parent Concerns / Solutions ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, textAlign: 'center', marginBottom: '32px', color: '#1C1C28', letterSpacing: '-0.01em' }}>
            From Parent Worries to Real Results
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="grid-cols-2-lg">
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Poppins, sans-serif', color: '#8E8EA0' }}>
                <AlertCircle size={18} /> Common Parent Concerns
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {parentConcerns.map(({ concern }) => (
                  <div key={concern} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECECF1', borderLeft: '3px solid #DCDCE5' }}>
                    <AlertCircle size={15} style={{ color: '#8E8EA0', flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{concern}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Poppins, sans-serif', color: '#0FA8DC' }}>
                <CheckCircle size={18} /> Blast Learning Solutions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {parentConcerns.map(({ solution }) => (
                  <div key={solution} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECECF1', borderLeft: '3px solid #0FA8DC' }}>
                    <CheckCircle size={15} style={{ color: '#0FA8DC', flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parent Dashboard Showcase (white) ── */}
      <section id="parent-dashboard" className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                For Parents
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                The Parent Dashboard: <span style={{ color: '#0FA8DC' }}>Stay Informed Every Day</span>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '28px' }}>
                Know exactly what your child is studying, how long they study, and how well they retain it. Our parent dashboard gives you real-time visibility without hovering over their shoulder.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {['Real-time retention score tracking', 'Subject-wise performance breakdown', 'Weekly progress reports via WhatsApp', 'Alerts when your child misses study sessions'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0FA8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={11} style={{ color: 'white' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link className="cta cta-blue" to="/for-parents" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: 'none' }}>
                Learn More for Parents <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div style={{ minWidth: 0, width: '100%', position: 'relative' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ perspective: '1000px' }}>
                <div style={{ transform: 'rotateY(-5deg)', willChange: 'transform' }}>
                  <DashboardMockup />
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="float-card" style={{ position: 'absolute', top: '-16px', right: '-16px', background: '#FFFFFF', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 28px rgba(28,28,40,0.1)', border: '1px solid #ECECF1' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>Study session complete</p>
                <p style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>1h 42m · just now</p>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} className="float-card" style={{ position: 'absolute', bottom: '-16px', left: '-16px', background: '#0FA8DC', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 28px rgba(15,168,220,0.25)' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'white', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>Math retention +8%</p>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>This week</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (light gray) ── */}
      <section id="testimonials" className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
                Student Stories
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Real Results from Real Students
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginTop: '14px', lineHeight: 1.6 }}>
                Hear from families who turned forgotten lessons into lasting marks.
              </p>
            </div>
            <Link to="/programs" style={{ fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none', flexShrink: 0 }}>
              Read all stories <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '20px' }} className="grid-cols-3-md">
            <TestimonialCard name="Ananya Krishnan" role="Class 10 student, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            <TestimonialCard name="Rahul Mehta" role="Class 12 student, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            <TestimonialCard name="Kavitha Suresh" role="Class 9 student, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }} className="grid-cols-2-md">
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard settled every argument at home. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
          </div>
        </div>
      </section>

      {/* ── FAQ Preview (white) ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before you start your free trial."
          />
          <div style={{ borderTop: '1px solid #E5E7EB', marginBottom: '32px' }}>
            {homeFaqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="hover:underline"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '16px 0', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.45 }}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, opacity: 0.6, color: '#1C1C28' }}>
                    <ChevronDown size={16} strokeWidth={2} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: '14px', lineHeight: 1.72, color: '#6B7280', fontFamily: 'Inter, sans-serif', margin: 0, paddingBottom: '16px' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              View All FAQs <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, #07111F 0%, #0F1E3A 50%, #0C1A30 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 700,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #E91E8C 0%, #8B5CF6 50%, #0FA8DC 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Smart Learning Today.<br />Stronger Tomorrow.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '36px',
          }}>
            Join 5,000+ Indian students already retaining more with Blast Learning.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById('programs-preview')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '10px', border: 'none', cursor: 'pointer',
              fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #E91E8C, #8B5CF6)',
              color: 'white', boxShadow: '0 8px 24px rgba(233,30,140,0.35)',
            }}
          >
            See Plans <ArrowRight size={16} />
          </button>
          <p style={{ marginTop: '16px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            7-day free trial · No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
