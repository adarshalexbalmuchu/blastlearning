import { Link } from 'react-router-dom';
import { motion, type Variants, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle, AlertCircle,
} from 'lucide-react';
import ctaBanner from '../assets/Hero 4.png';
import HeroCarousel from '../components/HeroCarousel';
import DashboardMockup from '../components/DashboardMockup';
import TestimonialsMarquee from '../components/ui/testimonials-marquee';
import FeatureExplorer from '../components/FeatureExplorer';
import TrustStats from '../components/TrustStats';
import BrandWhoosh from '../components/BrandWhoosh';
import {
  ForgettingCurveIllustration,
} from '../components/illustrations';
import ResultsScoreCards from '../components/ResultsScoreCards';
import HowItWorksCard, { UploadVisual, AIVisual, MasteryVisual } from '../components/HowItWorksCard';
import FAQItem from '../components/FAQItem';
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
    accent: '#3B82F6',
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
    desc: 'Grammar, writing, and reading built systematically.',
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
      <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
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

// ─── Result Stat Illustrations ──────────────────────────────────────────────────

function RetentionMultiplierIllus({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rm-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.52" />
        </linearGradient>
      </defs>
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      <rect x="18" y="96" width="28" height="36" rx="8" fill={color} opacity="0.22" />
      <rect x="61" y="68" width="28" height="64" rx="8" fill={color} opacity="0.52" />
      <rect x="104" y="36" width="28" height="96" rx="8" fill="url(#rm-bar)" />
      <rect x="107" y="39" width="9" height="24" rx="4.5" fill="white" opacity="0.28" />
      <path d="M32 84 L65 58 L108 34" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" opacity="0.55" />
      <rect x="90" y="18" width="44" height="26" rx="10" fill={color} />
      <text x="112" y="34" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="14" fill="white">3×</text>
      <path d="M18 28 L20 22 L22 28 L28 30 L22 32 L20 38 L18 32 L12 30 Z" fill={color} opacity="0.58" />
      <circle cx="50" cy="118" r="3" fill={color} opacity="0.25" />
      <circle cx="140" cy="80" r="2.5" fill={color} opacity="0.28" />
    </svg>
  );
}

function GradeImprovementIllus({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      <rect x="35" y="46" width="80" height="86" rx="12" fill="white" opacity="0.95" />
      <rect x="35" y="46" width="80" height="26" rx="12" fill={color} opacity="0.85" />
      <rect x="35" y="60" width="80" height="12" fill={color} opacity="0.85" />
      <rect x="47" y="80" width="38" height="4" rx="2" fill={color} opacity="0.2" />
      <rect x="47" y="90" width="30" height="4" rx="2" fill={color} opacity="0.15" />
      <rect x="47" y="100" width="34" height="4" rx="2" fill={color} opacity="0.18" />
      <rect x="90" y="74" width="30" height="30" rx="8" fill={color} />
      <rect x="90" y="74" width="30" height="30" rx="8" fill="white" opacity="0.12" />
      <text x="105" y="93" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="14" fill="white">A+</text>
      <path d="M75 38 L75 16 M68 24 L75 16 L82 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 42 L20 36 L22 42 L28 44 L22 46 L20 52 L18 46 L12 44 Z" fill={color} opacity="0.6" />
      <path d="M124 22 L125.5 18 L127 22 L131 23.5 L127 25 L125.5 29 L124 25 L120 23.5 Z" fill={color} opacity="0.5" />
      <circle cx="136" cy="56" r="3.5" fill={color} opacity="0.3" />
      <circle cx="18" cy="72" r="2.5" fill={color} opacity="0.28" />
    </svg>
  );
}

function CalendarResultIllus({ color }: { color: string }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <ellipse cx="75" cy="144" rx="46" ry="7" fill={color} opacity="0.13" />
      <rect x="28" y="42" width="94" height="86" rx="14" fill="white" opacity="0.95" />
      <rect x="28" y="42" width="94" height="28" rx="14" fill={color} opacity="0.88" />
      <rect x="28" y="56" width="94" height="14" fill={color} opacity="0.88" />
      <rect x="46" y="30" width="10" height="18" rx="5" fill={color} opacity="0.7" />
      <rect x="94" y="30" width="10" height="18" rx="5" fill={color} opacity="0.7" />
      <text x="75" y="62" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="17" fill="white">30</text>
      {Array.from({ length: 18 }, (_, i) => (
        <rect key={i} x={38 + (i % 6) * 14} y={82 + Math.floor(i / 6) * 12} width="9" height="8" rx="2.5" fill={color} opacity={i < 12 ? 0.28 : 0.1} />
      ))}
      <circle cx="75" cy="107" r="20" fill={color} opacity="0.9" />
      <path d="M65 107 L71 114 L87 99" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 34 L20 28 L22 34 L28 36 L22 38 L20 44 L18 38 L12 36 Z" fill={color} opacity="0.56" />
      <path d="M126 16 L127.5 12 L129 16 L133 17.5 L129 19 L127.5 23 L126 19 L122 17.5 Z" fill={color} opacity="0.52" />
      <circle cx="136" cy="60" r="3" fill={color} opacity="0.3" />
      <circle cx="14" cy="68" r="2.5" fill={color} opacity="0.28" />
    </svg>
  );
}

type IllusFC = (props: { color: string }) => React.ReactElement;

interface ResultStat {
  num: number;
  displayFn: (v: number) => string;
  label: string;
  accent: string;
  bg: string;
  Illus: IllusFC;
}

const RESULT_STATS: ResultStat[] = [
  { num: 3, displayFn: (v) => `${v}x`, label: 'More retention than traditional study', accent: '#0FA8DC', bg: '#E7F6FB', Illus: RetentionMultiplierIllus },
  { num: 91, displayFn: (v) => `${v}%`, label: 'Students improve their grades', accent: '#F59E0B', bg: '#FDF3E7', Illus: GradeImprovementIllus },
  { num: 30, displayFn: (v) => `${v}`, label: 'Days average to see results', accent: '#8B5CF6', bg: '#F0EDFC', Illus: CalendarResultIllus },
];

function ResultStatCard({ stat, index }: { stat: ResultStat; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { Illus } = stat;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
        boxShadow: hovered ? '0 20px 46px rgba(28,28,40,0.12)' : '0 2px 10px rgba(28,28,40,0.04)',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      <motion.div
        animate={hovered ? { y: -36 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <StatCounter num={stat.num} displayFn={stat.displayFn} label={stat.label} color={stat.accent} />
      </motion.div>
      <motion.div
        initial={false}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 160, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        style={{ position: 'absolute', bottom: '-8px', left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}
      >
        <Illus color={stat.accent} />
      </motion.div>
    </motion.div>
  );
}

// ─── Program card with hover color wash + blob expansion ──────────────────────

interface ProgramCardData {
  id: string;
  slug: string;
  name: string;
  tags: string[];
  blobBg: string;
  illus: React.ReactElement;
}

function ProgramCard({ prog }: { prog: ProgramCardData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? prog.blobBg : '#FFFFFF',
        border: '1.5px solid #E5E7EB',
        borderRadius: '16px',
        padding: '32px 32px 28px',
        overflow: 'hidden',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        boxShadow: hovered ? '0 8px 32px rgba(28,28,40,0.10)' : '0 2px 8px rgba(28,28,40,0.04)',
      }}
    >
      {/* Corner blob — expands on hover */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: hovered ? '260px' : '148px',
          height: hovered ? '260px' : '148px',
          borderRadius: '0 16px 0 100%',
          background: prog.blobBg,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '20px 20px 0 0',
          pointerEvents: 'none',
          transition: 'width 0.45s cubic-bezier(0.34,1.56,0.64,1), height 0.45s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {prog.illus}
      </div>

      {/* Name */}
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '22px', color: '#1C1C28', margin: '0 0 18px', position: 'relative', zIndex: 1 }}>
        {prog.name}
      </h3>

      {/* Tag pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '26px', position: 'relative', zIndex: 1 }}>
        {prog.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '5px 14px',
              borderRadius: '9999px',
              border: '1.5px solid #E5E7EB',
              fontSize: '13px',
              color: '#374151',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              background: '#FFFFFF',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Explore link */}
      <Link
        to={`/programs/${prog.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#1C1C28',
          fontFamily: 'Inter, sans-serif',
          textDecoration: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Explore Program
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid #E5E7EB', background: '#F9FAFB', flexShrink: 0 }}>
          <ArrowRight size={13} />
        </span>
      </Link>
    </div>
  );
}

// ─── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  useSEO({
    title: 'Blast Learning | AI-Powered Study Retention for Indian Students',
    description: "India's #1 AI-powered study retention platform. Convert expensive coaching into permanent memory with spaced repetition. 4,999+ students, 91% retention rate. Start your free 7-day trial.",
  });

  return (
    <div>
      {/* ── Hero Banner ── */}
      <div style={{ marginTop: '-64px' }}>
        <HeroCarousel />
      </div>

      {/* ── Trust stats: overlap hero bottom ── */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '-56px' }}>
        <TrustStats />
      </div>

      {/* ── Science of Retention (white) ── */}
      <section className="section-pad" style={{ position: 'relative', overflow: 'hidden', paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <BrandWhoosh opacity={0.18} style={{ width: '420px', height: '420px', bottom: '-40px', right: '-40px' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ minWidth: 0 }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '20px', padding: '24px' }}>
                <ForgettingCurveIllustration animated width="100%" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                The Science
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
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
      <section id="how-it-works" className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F9FAFB' }}>
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

      {/* ── Programs Showcase (white) ── */}
      <section id="programs" className="section-pad" style={{ paddingTop: '56px', paddingBottom: '56px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', margin: '0 0 10px' }}>
              Our Programs
            </h2>
            <p style={{ fontSize: '15px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
              Blast Learning is preparing students for every exam and learning goal. Find the one you are preparing for.
            </p>
          </div>

          <div className="programs-cat-grid">
            {([
              {
                id: 'cbse', slug: 'cbse-plan', name: 'CBSE Plan',
                tags: ['Class 8', 'Class 9', 'Class 10'],
                blobBg: '#E0F5FC',
                illus: (
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" aria-hidden="true">
                    <rect x="10" y="20" width="24" height="34" rx="3" fill="#0FA8DC" opacity="0.65" />
                    <rect x="38" y="20" width="24" height="34" rx="3" fill="#0FA8DC" />
                    <rect x="34" y="18" width="4" height="38" rx="2" fill="#0891B2" />
                    <rect x="14" y="27" width="15" height="2" rx="1" fill="white" opacity="0.55" />
                    <rect x="14" y="32" width="12" height="2" rx="1" fill="white" opacity="0.55" />
                    <rect x="14" y="37" width="15" height="2" rx="1" fill="white" opacity="0.55" />
                    <rect x="42" y="27" width="15" height="2" rx="1" fill="white" opacity="0.55" />
                    <rect x="42" y="32" width="12" height="2" rx="1" fill="white" opacity="0.55" />
                    <rect x="42" y="37" width="15" height="2" rx="1" fill="white" opacity="0.55" />
                  </svg>
                ),
              },
              {
                id: 'math', slug: 'math-genius', name: 'Math Genius',
                tags: ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
                blobBg: '#FEF3C7',
                illus: (
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" aria-hidden="true">
                    <rect x="16" y="10" width="44" height="56" rx="6" fill="#F59E0B" />
                    <rect x="22" y="16" width="32" height="14" rx="3" fill="white" opacity="0.9" />
                    <circle cx="28" cy="42" r="4.5" fill="white" opacity="0.75" />
                    <circle cx="38" cy="42" r="4.5" fill="white" opacity="0.75" />
                    <circle cx="48" cy="42" r="4.5" fill="white" opacity="0.75" />
                    <circle cx="28" cy="55" r="4.5" fill="white" opacity="0.75" />
                    <circle cx="38" cy="55" r="4.5" fill="white" opacity="0.75" />
                    <circle cx="48" cy="55" r="4.5" fill="#D97706" opacity="0.85" />
                  </svg>
                ),
              },
              {
                id: 'english', slug: 'english-mastery', name: 'English Mastery',
                tags: ['All Classes'],
                blobBg: '#D1FAE5',
                illus: (
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" aria-hidden="true">
                    <g transform="rotate(15 38 38)">
                      <rect x="29" y="8" width="18" height="46" rx="5" fill="#22C55E" />
                      <rect x="29" y="8" width="18" height="10" rx="5" fill="#86EFAC" />
                      <rect x="33" y="10" width="10" height="5" rx="2.5" fill="#FDE68A" />
                      <polygon points="29,54 47,54 38,68" fill="#15803D" />
                    </g>
                    <path d="M57 18 L59 13 L61 18 L66 20 L61 22 L59 27 L57 22 L52 20 Z" fill="#22C55E" opacity="0.45" />
                  </svg>
                ),
              },
              {
                id: 'sat', slug: 'sat-prep', name: 'SAT Prep Pass',
                tags: ['Class 10', 'Class 11', 'Class 12'],
                blobBg: '#EDE9FE',
                illus: (
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" aria-hidden="true">
                    <polygon points="10,32 38,18 66,32 38,46" fill="#8B5CF6" />
                    <ellipse cx="38" cy="32" rx="28" ry="8" fill="#7C3AED" opacity="0.4" />
                    <rect x="35" y="44" width="6" height="18" rx="3" fill="#8B5CF6" />
                    <ellipse cx="38" cy="62" rx="9" ry="4" fill="#7C3AED" opacity="0.6" />
                    <circle cx="62" cy="30" r="4" fill="#A78BFA" />
                    <line x1="62" y1="34" x2="62" y2="50" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="62" cy="53" r="3.5" fill="#A78BFA" />
                  </svg>
                ),
              },
            ] as ProgramCardData[]).map((prog) => (
              <ProgramCard key={prog.id} prog={prog} />
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
            <Link to="/programs" style={{ color: '#0FA8DC', fontWeight: 600, textDecoration: 'none' }}>
              See all programs with full pricing and features {'→'}
            </Link>
          </p>
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
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', marginBottom: '12px' }}>
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
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
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

          <div className="grid-cols-3-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', maxWidth: '720px', margin: '0 auto 48px' }}>
            {RESULT_STATS.map((s, i) => (
              <ResultStatCard key={s.label} stat={s} index={i} />
            ))}
          </div>

          <Link className="cta cta-blue" to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: 'none' }}>
            Start Your 7-Day Free Trial <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Parent Concerns / Solutions ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, textAlign: 'center', marginBottom: '32px', color: '#1C1C28', letterSpacing: '-0.025em' }}>
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
      <section id="parent-dashboard" className="section-pad" style={{ position: 'relative', overflow: 'hidden', paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <BrandWhoosh opacity={0.15} style={{ width: '400px', height: '400px', top: '-30px', left: '-40px', transform: 'scaleX(-1)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                For Parents
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
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
      <section id="testimonials" className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F9FAFB' }}>
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              Student Stories
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              Real Results from Real Students
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
              Hear from families who turned forgotten lessons into lasting marks.
            </p>
          </motion.div>
        </div>

        <TestimonialsMarquee
          row1={[
            {
              image: 'https://randomuser.me/api/portraits/women/44.jpg',
              name: 'Ananya Krishnan',
              role: 'Class 10, CBSE Plan · Bangalore',
              text: 'Blast Learning showed me exactly which chapters I kept forgetting. My Science score went from 61 to 84 in one term. The spaced revision reminders are the real game-changer.',
            },
            {
              image: 'https://randomuser.me/api/portraits/men/32.jpg',
              name: 'Rahul Mehta',
              role: 'Class 12, CBSE Plan · Mumbai',
              text: 'I was scoring 55 in Physics mock tests. Blast\'s Metacognition Engine identified my weak chapters within the first week and built a custom plan. Ended up with 81 in boards.',
            },
            {
              image: 'https://randomuser.me/api/portraits/women/65.jpg',
              name: 'Kavitha Suresh',
              role: 'Class 9, English Mastery · Hyderabad',
              text: 'Grammar used to be a nightmare. The AI broke it into tiny daily chunks and quizzed me at exactly the right time. I went from D grades to consistently getting As.',
            },
            {
              image: 'https://randomuser.me/api/portraits/men/77.jpg',
              name: 'Arjun Nair',
              role: 'Class 11, Math Genius · Chennai',
              text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.',
            },
            {
              image: 'https://randomuser.me/api/portraits/men/11.jpg',
              name: 'Karan Malhotra',
              role: 'Class 12, SAT Prep Pass · Gurgaon',
              text: 'Blast\'s SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months.',
            },
          ]}
          row2={[
            {
              image: 'https://randomuser.me/api/portraits/men/54.jpg',
              name: 'Deepak Sharma',
              role: 'Parent · Class 11 CBSE, Delhi',
              text: 'The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven\'t had to nag him about studying in two months.',
            },
            {
              image: 'https://randomuser.me/api/portraits/women/21.jpg',
              name: 'Sunita Reddy',
              role: 'Parent · Class 10 CBSE, Pune',
              text: 'We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day.',
            },
            {
              image: 'https://randomuser.me/api/portraits/women/31.jpg',
              name: 'Priya Iyer',
              role: 'Parent · Class 10 CBSE, Kochi',
              text: 'My daughter\'s board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically.',
            },
            {
              image: 'https://randomuser.me/api/portraits/women/57.jpg',
              name: 'Meena Patel',
              role: 'Parent · Class 9 CBSE, Ahmedabad',
              text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.',
            },
            {
              image: 'https://randomuser.me/api/portraits/men/22.jpg',
              name: 'Vikram Gupta',
              role: 'Parent · Class 12 CBSE, Jaipur',
              text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.',
            },
          ]}
        />
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
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              View All FAQs <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner (image) replace banner 4.webp later with a custom design ── */}
      <section
        aria-label="Call to action"
        style={{ width: '100%', display: 'block', lineHeight: 0 }}
      >
        <img
          src={ctaBanner}
          alt="Learn Smarter. Achieve More. Start your Blast Learning journey today."
          width={4095}
          height={774}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>
    </div>
  );
}
