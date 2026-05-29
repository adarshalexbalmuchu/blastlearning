import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Play, Brain, Target, BookOpen, Users, Globe, BarChart3,
  ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap, Star,
  Bell, Award, BarChart2,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import { useState, useEffect } from 'react';

const stats = [
  { value: '4,999+', label: 'Students Enrolled' },
  { value: '4.0/5', label: 'Parent Satisfaction' },
  { value: '91%', label: 'Academic Improvement' },
  { value: '49+', label: 'Cities Across India' },
];

const howItWorks = [
  {
    num: '01',
    title: 'Record or Upload Content',
    desc: 'Upload your class notes, recordings, or textbook chapters. Our AI processes and structures everything for optimal learning.',
    icon: BookOpen,
  },
  {
    num: '02',
    title: 'AI Creates Your Study Plan',
    desc: 'Our Metacognition Engine analyzes your learning patterns and creates a personalized study schedule using spaced repetition science.',
    icon: Brain,
  },
  {
    num: '03',
    title: 'Learn, Practice, Master',
    desc: 'Follow your adaptive plan, practice with smart quizzes, and track your retention scores. Master every concept before your exams.',
    icon: Target,
  },
];

const features = [
  { icon: Brain, title: 'Metacognition Engine', desc: 'Our proprietary AI maps how your child actually learns and adapts the study plan in real-time for maximum retention.' },
  { icon: Target, title: 'Focus Trainer', desc: 'Guided study sessions with focus techniques that reduce distraction and build lasting concentration habits.' },
  { icon: BookOpen, title: 'Class Recording Integration', desc: 'Connect any coaching or school recording. Our AI converts lectures into interactive revision material instantly.' },
  { icon: BarChart3, title: 'Parent Dashboard', desc: 'Real-time visibility into your child\'s study habits, retention scores, and academic progress — all in one place.' },
  { icon: Users, title: 'Tutor Mom Support', desc: 'Dedicated human mentors who check in weekly, answer doubts, and keep students accountable and motivated.' },
  { icon: Globe, title: 'Multilingual Support', desc: 'Learn in your comfort language — English, Hindi, Kannada, Tamil, Telugu, and more regional languages supported.' },
];

const parentConcerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention' },
  { concern: 'Coaching fees keep increasing but results don\'t improve', solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons' },
  { concern: 'I can\'t tell if my child is actually studying', solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage daily' },
  { concern: 'My child is stressed and losing confidence', solution: 'Personalized pace and progress celebrations build confidence as students see real improvement' },
  { concern: 'Different coaching teachers explain things differently', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions' },
];

const homeFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps them retain 90% of what they learn — compared to the 10% most students retain without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: 'Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn\'t just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams.' },
  { q: 'Can I try Blast Learning before paying?', a: 'Yes! We offer a 7-day free trial with full access to all features. No credit card required. You\'ll see real retention data for your child within the first week.' },
];

// ─── Banner definitions ────────────────────────────────────────────────────────
const BANNER_INTERVAL = 4500;

interface BannerDef {
  badge: string;
  BadgeIcon: React.ElementType;
  headline: string;
  highlight: string;
  subtext: string;
  primaryCta: { label: string; to: string };
  secondaryCta: string;
  trust: string[];
}

const banners: BannerDef[] = [
  {
    badge: 'AI-Powered Retention System',
    BadgeIcon: Zap,
    headline: 'Your Child Retains Only 10% of Coaching',
    highlight: 'We Make It 90%',
    subtext: 'Stop wasting money on coaching your child forgets. Our Metacognition Engine uses scientifically-proven spaced repetition to convert expensive tuition into lasting retention.',
    primaryCta: { label: 'Start 7-Day Trial', to: '/programs' },
    secondaryCta: 'See How It Works',
    trust: ['No credit card required', 'Free 7-day trial', 'Cancel anytime'],
  },
  {
    badge: 'CBSE Specialist Platform',
    BadgeIcon: BookOpen,
    headline: 'Ace Your CBSE Board Exams',
    highlight: 'With AI-Powered Revision',
    subtext: 'Our CBSE Plan covers the complete NCERT syllabus for Classes 8–10. AI-powered spaced revision schedules every chapter so nothing slips through the cracks before your board exams.',
    primaryCta: { label: 'Explore CBSE Plan', to: '/programs' },
    secondaryCta: 'View Syllabus Coverage',
    trust: ['Full NCERT coverage', '4,999+ students enrolled', 'Classes 8–10'],
  },
  {
    badge: 'Real-Time Parent Visibility',
    BadgeIcon: Users,
    headline: 'Know Exactly How Your Child Is Learning',
    highlight: 'Every Single Day',
    subtext: 'Real-time parent dashboard shows daily study time, retention scores, and subject-wise progress. Get instant WhatsApp alerts when your child misses a study session.',
    primaryCta: { label: 'Explore Parent Features', to: '/for-parents' },
    secondaryCta: 'View Dashboard Demo',
    trust: ['Daily progress reports', 'WhatsApp alerts', '100% transparency'],
  },
  {
    badge: 'Proven Academic Results',
    BadgeIcon: TrendingUp,
    headline: '91% of Students',
    highlight: 'Improve Their Grades',
    subtext: 'Science-backed spaced repetition and active recall techniques trusted by top students worldwide. Join 4,999+ Indian families who\'ve transformed academic performance in just 30 days.',
    primaryCta: { label: 'Start Free Trial', to: '/programs' },
    secondaryCta: 'See Success Stories',
    trust: ['Results in 30 days', '91% improvement rate', '4.0/5 parent rating'],
  },
];

// ─── Per-banner right-column visual ──────────────────────────────────────────
function HeroVisual({ index }: { index: number }) {
  const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #F4F7FB 0%, #ffffff 100%)',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 8px 40px rgba(13,27,42,0.12)',
    width: '100%',
    boxSizing: 'border-box',
  };

  if (index === 0) {
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: '#1AAFCB', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 20px rgba(26,175,203,0.4)' }}>
            90% Retention Rate
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Today's Learning Session</p>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Arjun's Progress</p>
            </div>
            <span style={{ padding: '6px 12px', borderRadius: '9999px', background: '#E8357A', color: 'white', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              Today: 87%
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {[
              { label: 'Retention Score', val: '87%', color: '#1AAFCB' },
              { label: 'Topics Covered', val: '12/15', color: '#0D1B2A' },
              { label: 'Study Streak', val: '14 days', color: '#E8357A' },
              { label: 'Quiz Score', val: '92%', color: '#1AAFCB' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#F4F7FB', borderRadius: '12px', padding: '16px' }}>
                <p style={{ fontSize: '20px', fontWeight: 700, color: item.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.val}</p>
                <p style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#0D1B2A', borderRadius: '12px', padding: '16px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>Today's Revision Queue</p>
            {['Chapter 4 — Quadratic Equations', 'Photosynthesis Process', 'English Grammar — Tenses'].map((topic, i) => (
              <div key={topic} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: i < 2 ? '8px' : 0 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: i === 0 ? '#1AAFCB' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>{i + 1}</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    const subjects = [
      { name: 'Mathematics', pct: 92, color: '#1AAFCB' },
      { name: 'Science', pct: 85, color: '#E8357A' },
      { name: 'English', pct: 78, color: '#1AAFCB' },
      { name: 'Social Studies', pct: 88, color: '#E8357A' },
    ];
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: '#1AAFCB', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 20px rgba(26,175,203,0.4)' }}>
            CBSE Class 10 — On Track
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Subject Retention Overview</p>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Priya's Board Prep</p>
            </div>
            <span style={{ padding: '6px 12px', borderRadius: '9999px', background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              24/32 chapters
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {subjects.map(({ name, pct, color }) => (
              <div key={name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color, fontFamily: 'Inter, sans-serif' }}>{pct}%</span>
                </div>
                <div style={{ height: '6px', background: '#F4F7FB', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '4px' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#0D1B2A', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Board Exam Date</p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>March 2025</p>
            </div>
            <span style={{ padding: '6px 14px', borderRadius: '9999px', background: '#1AAFCB', color: 'white', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              On Track
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    const alerts = [
      { Icon: CheckCircle, color: '#1AAFCB', text: 'Session completed — 1h 42m (3:45 PM)' },
      { Icon: BarChart2, color: '#E8357A', text: 'Math retention up 8% this week' },
      { Icon: Award, color: '#1AAFCB', text: 'Weekly goal 85% — achieved today' },
    ];
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: '#1AAFCB', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 20px rgba(26,175,203,0.4)' }}>
            Live Parent Dashboard
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Today's Summary</p>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Kavitha's Dashboard</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Study Time', val: '1h 42m', color: '#1AAFCB' },
              { label: 'Retention', val: '89%', color: '#E8357A' },
              { label: 'Chapters', val: '3 done', color: '#0D1B2A' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#F4F7FB', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', fontWeight: 700, color: item.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.val}</p>
                <p style={{ fontSize: '11px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {alerts.map(({ Icon, color, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#F4F7FB' }}>
                <Icon size={15} style={{ color, flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '10px', background: '#25D366' }}>
            <Bell size={14} style={{ color: 'white' }} />
            <span style={{ fontSize: '12px', color: 'white', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>WhatsApp report sent to parent</span>
          </div>
        </div>
      </div>
    );
  }

  // index === 3: Results card
  const results = [
    { name: 'Ananya K.', subject: 'Mathematics', before: 65, after: 89 },
    { name: 'Rahul M.', subject: 'Physics', before: 52, after: 81 },
    { name: 'Priya S.', subject: 'English', before: 58, after: 84 },
  ];
  return (
    <div>
      <div style={{ marginBottom: '12px' }}>
        <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: '#E8357A', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', boxShadow: '0 4px 20px rgba(232,53,122,0.4)' }}>
          Real Student Results — 30 Days
        </span>
      </div>
      <div style={cardStyle}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Before vs After Blast Learning</p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Score Improvements</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {results.map(({ name, subject, before, after }) => (
            <div key={name} style={{ background: '#F4F7FB', borderRadius: '12px', padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</span>
                <span style={{ fontSize: '11px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{subject}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#5A6A7A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{before}%</span>
                <ArrowRight size={16} style={{ color: '#1AAFCB', flexShrink: 0 }} />
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{after}%</span>
                <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                  +{after - before}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: '#0D1B2A', borderRadius: '12px' }}>
          <div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>Average improvement</p>
            <p style={{ fontSize: '22px', fontWeight: 800, color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+27%</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end', marginBottom: '4px' }}>
              {[1,2,3,4,5].map((s) => <Star key={s} size={12} fill={s <= 4 ? '#1AAFCB' : 'none'} style={{ color: '#1AAFCB' }} />)}
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>4.0/5 parent rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-advance banner; dependency on activeBanner resets timer after every change
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveBanner((prev) => (prev + 1) % banners.length);
      setProgressKey((k) => k + 1);
    }, BANNER_INTERVAL);
    return () => clearInterval(timer);
  }, [activeBanner]);

  const handleDotClick = (idx: number) => {
    if (idx === activeBanner) return;
    setDirection(idx > activeBanner ? 1 : -1);
    setActiveBanner(idx);
    setProgressKey((k) => k + 1);
  };

  const banner = banners[activeBanner];
  const { BadgeIcon } = banner;

  return (
    <div>
      {/* ── Hero Banner Carousel ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '64px', background: 'white', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="lg:grid-cols-hero"
          >
            {/* LEFT: text content */}
            <div style={{ minWidth: 0 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeBanner}`}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
                    <BadgeIcon size={14} />
                    {banner.badge}
                  </div>

                  {/* Headline */}
                  <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                    {banner.headline}
                    <br />
                    <span style={{ color: '#1AAFCB' }}>{banner.highlight}</span>
                  </h1>

                  {/* Subtext */}
                  <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '32px', maxWidth: '520px' }}>
                    {banner.subtext}
                  </p>

                  {/* CTAs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                    <Link
                      to={banner.primaryCta.to}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '8px', background: '#1AAFCB', color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                    >
                      {banner.primaryCta.label} <ArrowRight size={16} />
                    </Link>
                    <button
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '8px', border: '2px solid #0D1B2A', background: 'transparent', color: '#0D1B2A', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}
                    >
                      <Play size={16} /> {banner.secondaryCta}
                    </button>
                  </div>

                  {/* Trust signals */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {banner.trust.map((t) => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                        <CheckCircle size={14} style={{ color: '#1AAFCB' }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: visual card */}
            <div style={{ minWidth: 0, width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${activeBanner}`}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <HeroVisual index={activeBanner} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Banner controls ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '48px' }}>
            {/* Progress track */}
            <div style={{ width: '220px', height: '3px', background: '#E5E7EB', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                key={progressKey}
                className="banner-progress-bar"
                style={{ height: '100%', background: '#1AAFCB', borderRadius: '999px' }}
              />
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {banners.map((b, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  title={b.badge}
                  style={{
                    width: activeBanner === i ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeBanner === i ? '#1AAFCB' : '#D1D5DB',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>

            {/* Banner label */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`label-${activeBanner}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: '12px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
              >
                {activeBanner + 1} / {banners.length} — {banner.badge}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Social Proof Bar ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <p className="text-center text-sm font-medium" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif', marginBottom: '40px' }}>
            Trusted by thousands of families across India
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '48px' }} className="grid-cols-4-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: '672px', margin: '0 auto' }}>
            <TestimonialCard
              name="Priya Nair"
              role="Parent of Class 10 student, Chennai"
              content="Blast Learning transformed how my daughter studies. Her board exam preparation used to be chaotic, but now she has a clear plan and her retention scores are remarkable. I can see her progress every day on the parent dashboard."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Simple Process
            </span>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              How Blast Learning Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '48px' }} className="grid-cols-3-md">
            {howItWorks.map(({ num, title, desc, icon: Icon }) => (
              <div key={num} className="bg-white rounded-2xl p-8 relative overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)', border: '1px solid #F4F7FB' }}>
                <span className="absolute top-4 right-6 text-6xl font-bold leading-none select-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(26,175,203,0.12)' }}>{num}</span>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: '#1AAFCB' }}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Start Your 7-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Programs Preview ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="flex items-end justify-between" style={{ marginBottom: '48px' }}>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Our Programs
            </h2>
            <Link to="/programs" className="text-sm font-semibold flex items-center gap-1" style={{ color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              View All Programs <ChevronDown size={14} className="-rotate-90" />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md grid-cols-4-lg">
            {[
              { name: 'CBSE Plan', price: '₹1,299', classes: 'Classes 8-10', desc: 'Full CBSE syllabus coverage with AI study buddy and board exam preparation.', outcomes: ['Board Mastery', 'NCERT Clarity', 'Retention'], icon: BookOpen },
              { name: 'Math Genius Maker', price: '₹999', classes: 'Classes 8-12', desc: 'Gap assessment and personalized math lessons from foundation to advanced.', outcomes: ['Gap Filling', 'Speed & Accuracy', 'Mastery'], icon: Target },
              { name: 'English Mastery', price: '₹999', classes: 'All Classes', desc: 'Grammar, writing, reading, and comprehension skills built systematically.', outcomes: ['Grammar', 'Writing', 'Reading'], icon: Brain },
              { name: 'SAT Prep Pass', price: '₹999', classes: 'Classes 10-12', desc: 'Foundation-level SAT preparation with adaptive tests and complete score optimization.', outcomes: ['High Scores', 'Test Strategy', 'College Ready'], icon: TrendingUp },
            ].map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: '#1AAFCB' }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{prog.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{prog.price}<span className="text-xs font-normal" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>/mo</span></span>
                    <span className="px-2 py-0.5 text-xs rounded-md" style={{ background: '#F4F7FB', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.classes}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.outcomes.map((o) => (
                      <span key={o} className="px-2 py-0.5 text-xs rounded-md" style={{ background: 'rgba(26,175,203,0.08)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              What Makes Us Different
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md grid-cols-3-lg">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)', border: '1px solid #F4F7FB' }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: '#1AAFCB' }}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results Banner ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            See Results Within{' '}
            <span style={{ color: '#1AAFCB' }}>One Month</span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', maxWidth: '640px', margin: '0 auto 40px' }}>
            Our students consistently report higher retention scores, improved exam performance, and greater confidence within their first 30 days on Blast Learning.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '672px', margin: '0 auto 40px' }}>
            {[
              { val: '3x', label: 'More retention than traditional study' },
              { val: '91%', label: 'Students improve their grades' },
              { val: '30 days', label: 'Average time to see results' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{s.val}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            Start Your Free Trial Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Parents Pain/Solution ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <h2 className="font-bold text-center mb-14" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            From Parent Worries to Real Results
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="grid-cols-2-lg">
            <div style={{ minWidth: 0 }}>
              <h3 className="text-base font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#E8357A' }}>
                <AlertCircle size={18} /> Common Parent Concerns
              </h3>
              <div className="flex flex-col gap-3">
                {parentConcerns.map(({ concern }) => (
                  <div key={concern} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #E8357A', background: 'rgba(232,53,122,0.04)' }}>
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#E8357A' }} />
                    <p className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{concern}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 className="text-base font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>
                <CheckCircle size={18} style={{ color: '#1AAFCB' }} /> Blast Learning Solutions
              </h3>
              <div className="flex flex-col gap-3">
                {parentConcerns.map(({ solution }) => (
                  <div key={solution} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #1AAFCB', background: 'rgba(26,175,203,0.04)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#1AAFCB' }} />
                    <p className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parent Dashboard Showcase ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }} className="grid-cols-2-lg">
            <div style={{ minWidth: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                For Parents
              </span>
              <h2 className="font-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
                Parent Dashboard — Stay Informed Every Day
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                Know exactly what your child is studying, how long they study, and how well they retain it. Our parent dashboard gives you real-time visibility without hovering over their shoulder.
              </p>
              <div className="flex flex-col gap-4">
                {['Real-time retention score tracking', 'Subject-wise performance breakdown', 'Weekly progress reports via WhatsApp', 'Alerts when your child misses study sessions'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#1AAFCB' }} />
                    <span className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/for-parents" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white text-sm font-semibold" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                Learn More for Parents <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ minWidth: 0, width: '100%' }}>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Real Results from Real Students
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '24px' }} className="grid-cols-3-md">
            <TestimonialCard name="Ananya Krishnan" role="Class 10 student, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            <TestimonialCard name="Rahul Mehta" role="Class 12 student, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            <TestimonialCard name="Kavitha Suresh" role="Class 9 student, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md">
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            {homeFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{faq.q}</span>
                  <ChevronDown size={18} className="flex-shrink-0 transition-transform duration-300" style={{ color: '#1AAFCB', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '300px' : '0px' }}>
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: '#F4F7FB' }} />
                    <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              View All FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Help Your Child{' '}
            <span style={{ color: '#1AAFCB' }}>Learn Independently</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Join thousands of families who have transformed their child's academic performance with science-backed retention technology.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
            <Link to="/programs" className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Start 7-Day Trial <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-white" style={{ border: '2px solid rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
              Speak to a Learning Advisor
            </Link>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            {['No credit card required', 'Free 7-day trial', 'Cancel anytime'].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                <Star size={12} fill="currentColor" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
