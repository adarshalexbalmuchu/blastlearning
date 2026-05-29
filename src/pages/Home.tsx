import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowRight, Play, Brain, Target, BookOpen, Users, Globe, BarChart3,
  ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap, Star,
  Bell, Award, BarChart2,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import FeatureCard from '../components/FeatureCard';
import { useState, useEffect, useRef } from 'react';

// ─── Data ──────────────────────────────────────────────────────────────────────

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

// ─── Per-banner visual ─────────────────────────────────────────────────────────
function HeroVisual({ index }: { index: number }) {
  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid rgba(255,255,255,0.06)',
    width: '100%',
    boxSizing: 'border-box',
  };

  if (index === 0) {
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', color: 'white', fontSize: '13px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}>
            90% Retention Rate
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Today's Learning Session</p>
              <p style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>Arjun's Progress</p>
            </div>
            <span style={{ padding: '5px 12px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: 'white', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              Today: 87%
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Retention Score', val: '87%', grad: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
              { label: 'Topics Covered', val: '12/15', grad: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' },
              { label: 'Study Streak', val: '14 days', grad: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' },
              { label: 'Quiz Score', val: '92%', grad: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
            ].map((item) => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: item.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.val}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginTop: '3px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>Today's Revision Queue</p>
            {['Chapter 4 — Quadratic Equations', 'Photosynthesis Process', 'English Grammar — Tenses'].map((topic, i) => (
              <div key={topic} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: i < 2 ? '7px' : 0 }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: i === 0 ? 'linear-gradient(135deg, #06B6D4, #3B82F6)' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>{i + 1}</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    const subjects = [
      { name: 'Mathematics', pct: 92, grad: 'linear-gradient(90deg, #06B6D4, #3B82F6)' },
      { name: 'Science', pct: 85, grad: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' },
      { name: 'English', pct: 78, grad: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' },
      { name: 'Social Studies', pct: 88, grad: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' },
    ];
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', color: 'white', fontSize: '13px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}>
            CBSE Class 10 — On Track
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Subject Retention Overview</p>
              <p style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>Priya's Board Prep</p>
            </div>
            <span style={{ padding: '5px 12px', borderRadius: '9999px', background: 'rgba(6,182,212,0.15)', color: '#06B6D4', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              24/32 chapters
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            {subjects.map(({ name, pct, grad }) => (
              <div key={name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontFamily: 'Space Grotesk, sans-serif' }}>{name}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>{pct}%</span>
                </div>
                <div style={{ height: '5px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: grad, borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Board Exam Date</p>
              <p style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>March 2025</p>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', color: 'white', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              On Track
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    const alerts = [
      { Icon: CheckCircle, grad: 'linear-gradient(135deg, #06B6D4, #3B82F6)', text: 'Session completed — 1h 42m (3:45 PM)' },
      { Icon: BarChart2, grad: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', text: 'Math retention up 8% this week' },
      { Icon: Award, grad: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', text: 'Weekly goal 85% — achieved today' },
    ];
    return (
      <div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', color: 'white', fontSize: '13px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}>
            Live Parent Dashboard
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ marginBottom: '18px' }}>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Today's Summary</p>
            <p style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>Kavitha's Dashboard</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {[
              { label: 'Study Time', val: '1h 42m', grad: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
              { label: 'Retention', val: '89%', grad: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' },
              { label: 'Chapters', val: '3 done', grad: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' },
            ].map((item) => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: item.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.val}</p>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
            {alerts.map(({ Icon, grad, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: grad, flexShrink: 0 }}>
                  <Icon size={10} style={{ color: 'white' }} />
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderRadius: '8px', background: '#25D366' }}>
            <Bell size={13} style={{ color: 'white' }} />
            <span style={{ fontSize: '11px', color: 'white', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>WhatsApp report sent to parent</span>
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
        <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', color: 'white', fontSize: '13px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
          Real Student Results — 30 Days
        </span>
      </div>
      <div style={cardStyle}>
        <div style={{ marginBottom: '18px' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Before vs After Blast Learning</p>
          <p style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>Score Improvements</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
          {results.map(({ name, subject, before, after }) => (
            <div key={name} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '12px 14px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontFamily: 'Space Grotesk, sans-serif' }}>{name}</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>{subject}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif' }}>{before}%</span>
                <ArrowRight size={14} style={{ color: '#06B6D4', flexShrink: 0 }} />
                <span style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{after}%</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 700, padding: '2px 7px', borderRadius: '5px', background: 'rgba(6,182,212,0.12)', color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>
                  +{after - before}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'rgba(0,0,0,0.3)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>Average improvement</p>
            <p style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>+27%</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end', marginBottom: '4px' }}>
              {[1,2,3,4,5].map((s) => <Star key={s} size={11} fill={s <= 4 ? '#06B6D4' : 'none'} style={{ color: '#06B6D4' }} />)}
            </div>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>4.0/5 parent rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Animated stat counter ─────────────────────────────────────────────────────
function StatCounter({ num, displayFn, label }: { num: number; displayFn: (v: number) => string; label: string }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTs = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const t = Math.min((now - startTs) / 1800, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * num));
      if (t < 1) { rafId = requestAnimationFrame(tick); }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, num]);

  return (
    <div ref={ref} className="text-center">
      <div style={{
        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
        fontWeight: 800,
        marginBottom: '6px',
        fontFamily: 'Space Grotesk, sans-serif',
        background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {displayFn(value)}
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>{label}</div>
    </div>
  );
}

// ─── Scroll-reveal wrapper ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);

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
      <section style={{ position: 'relative', paddingTop: '80px', paddingBottom: '80px', background: '#07111F', overflow: 'hidden' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-200px', left: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(6,182,212,0.12)', filter: 'blur(80px)', willChange: 'transform', pointerEvents: 'none', animation: 'blob-float 9s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '100px', right: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(139,92,246,0.1)', filter: 'blur(80px)', willChange: 'transform', pointerEvents: 'none', animation: 'blob-float 11s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '35%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59,130,246,0.08)', filter: 'blur(80px)', willChange: 'transform', pointerEvents: 'none', animation: 'blob-float 13s ease-in-out infinite' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
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
                  {/* Glass badge pill */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#06B6D4', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', backdropFilter: 'blur(12px)' }}>
                    <BadgeIcon size={13} />
                    {banner.badge}
                  </div>

                  {/* Headline */}
                  <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, color: 'white', marginBottom: '24px' }}>
                    {banner.headline}
                    <br />
                    <span style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {banner.highlight}
                    </span>
                  </h1>

                  {/* Subtext */}
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', marginBottom: '32px', maxWidth: '520px' }}>
                    {banner.subtext}
                  </p>

                  {/* CTAs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
                    <motion.div whileHover={{ scale: 1.03, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                      <Link
                        to={banner.primaryCta.to}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 0 32px rgba(6,182,212,0.35)' }}
                      >
                        {banner.primaryCta.label} <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', backdropFilter: 'blur(12px)' }}
                    >
                      <Play size={15} /> {banner.secondaryCta}
                    </motion.button>
                  </div>

                  {/* Trust signals */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {banner.trust.map((t) => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                        <CheckCircle size={13} style={{ color: '#06B6D4' }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: glass visual card with float */}
            <div style={{ minWidth: 0, width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${activeBanner}`}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      background: 'rgba(7,17,31,0.8)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '24px',
                      padding: '4px',
                      boxShadow: '0 0 60px rgba(6,182,212,0.12)',
                    }}
                  >
                    <HeroVisual index={activeBanner} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Banner controls */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '48px' }}>
            {/* Gradient progress bar */}
            <div style={{ width: '220px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                key={progressKey}
                className="banner-progress-bar"
                style={{ height: '100%', background: 'linear-gradient(90deg, #06B6D4, #3B82F6, #8B5CF6)', borderRadius: '999px' }}
              />
            </div>

            {/* Animated pill indicators */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {banners.map((b, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  title={b.badge}
                  animate={{
                    width: activeBanner === i ? '32px' : '8px',
                    background: activeBanner === i ? '#06B6D4' : 'rgba(255,255,255,0.25)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F', position: 'relative' }}>
        {/* Dot grid texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(6,182,212,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', opacity: 0.4 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '52px', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            Trusted by thousands of families across India
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '56px' }} className="grid-cols-4-lg">
            <StatCounter num={4999} displayFn={(v) => `${v.toLocaleString()}+`} label="Students Enrolled" />
            <StatCounter num={40} displayFn={(v) => `${(v / 10).toFixed(1)}/5`} label="Parent Satisfaction" />
            <StatCounter num={91} displayFn={(v) => `${v}%`} label="Academic Improvement" />
            <StatCounter num={49} displayFn={(v) => `${v}+`} label="Cities Across India" />
          </div>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(6,182,212,0.1)', color: '#06B6D4', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px', border: '1px solid rgba(6,182,212,0.2)' }}>
              Simple Process
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#07111F', letterSpacing: '-0.02em' }}>
              How Blast Learning Works
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '48px' }}
            className="grid-cols-3-md"
          >
            {howItWorks.map(({ num, title, desc, icon: Icon }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ background: 'white', borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(6,182,212,0.08)', boxShadow: '0 4px 24px rgba(7,17,31,0.06)' }}
              >
                {/* Large step number in background */}
                <span style={{ position: 'absolute', top: '-8px', right: '16px', fontSize: '96px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.05))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, userSelect: 'none' }}>
                  {num}
                </span>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', boxShadow: '0 0 20px rgba(6,182,212,0.3)' }}>
                  <Icon size={20} style={{ color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif', color: '#07111F' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 0 28px rgba(6,182,212,0.3)' }}>
              Start Your 7-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Programs Preview ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(139,92,246,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', opacity: 0.3 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-end justify-between"
            style={{ marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              Our Programs
            </h2>
            <Link to="/programs" style={{ fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'Inter, sans-serif', textDecoration: 'none', flexShrink: 0 }}>
              View All <ChevronDown size={14} style={{ color: '#06B6D4' }} className="-rotate-90" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}
            className="grid-cols-2-md grid-cols-4-lg"
          >
            {[
              { name: 'CBSE Plan', price: '₹1,299', classes: 'Classes 8-10', desc: 'Full CBSE syllabus coverage with AI study buddy and board exam preparation.', outcomes: ['Board Mastery', 'NCERT Clarity', 'Retention'], icon: BookOpen, featured: true },
              { name: 'Math Genius Maker', price: '₹999', classes: 'Classes 8-12', desc: 'Gap assessment and personalized math lessons from foundation to advanced.', outcomes: ['Gap Filling', 'Speed & Accuracy', 'Mastery'], icon: Target },
              { name: 'English Mastery', price: '₹999', classes: 'All Classes', desc: 'Grammar, writing, reading, and comprehension skills built systematically.', outcomes: ['Grammar', 'Writing', 'Reading'], icon: Brain },
              { name: 'SAT Prep Pass', price: '₹999', classes: 'Classes 10-12', desc: 'Foundation-level SAT preparation with adaptive tests and complete score optimization.', outcomes: ['High Scores', 'Test Strategy', 'College Ready'], icon: TrendingUp },
            ].map((prog) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{
                    position: 'relative',
                    background: prog.featured ? 'rgba(6,182,212,0.06)' : 'rgba(255,255,255,0.03)',
                    border: prog.featured ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    padding: '24px',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  {prog.featured && (
                    <span style={{ position: 'absolute', top: '-12px', left: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', borderRadius: '9999px', fontFamily: 'Inter, sans-serif', boxShadow: '0 0 16px rgba(6,182,212,0.4)' }}>
                      Most Popular
                    </span>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{prog.price}</span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif', marginLeft: '2px' }}>/mo</span>
                    </div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '6px', padding: '2px 8px', borderRadius: '9999px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.15)', fontSize: '10px', fontWeight: 700, color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>
                    <Zap size={9} /> AI Powered
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>{prog.name}</h3>
                  <span style={{ display: 'inline-block', marginBottom: '10px', padding: '2px 9px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>{prog.classes}</span>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', marginBottom: '14px', fontFamily: 'Inter, sans-serif' }}>{prog.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                    {prog.outcomes.map((o) => (
                      <span key={o} style={{ padding: '2px 9px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', border: '1px solid rgba(6,182,212,0.25)', color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                    ))}
                  </div>
                  <Link to="/programs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: prog.featured ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)' : 'rgba(6,182,212,0.1)', color: 'white', border: prog.featured ? 'none' : '1px solid rgba(6,182,212,0.25)' }}>
                    Learn More <ArrowRight size={13} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Features Bento Grid ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              What Makes Us{' '}
              <span style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Different</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-md bento-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isSpan = i === 0 || i === 5;
              return (
                <div key={f.title} className={isSpan ? 'bento-span-2' : ''}>
                  <FeatureCard icon={<Icon size={20} />} title={f.title} description={f.desc} large={isSpan} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Results Banner ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(135deg, #07111F 0%, #0c1728 50%, #130a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Particle dots */}
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{ position: 'absolute', width: '3px', height: '3px', borderRadius: '50%', background: i % 2 === 0 ? 'rgba(6,182,212,0.4)' : 'rgba(139,92,246,0.4)', top: `${10 + (i * 7) % 80}%`, left: `${5 + (i * 8) % 90}%`, pointerEvents: 'none', animation: `blob-float ${4 + (i % 4)}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
        ))}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              See Results Within{' '}
              <span style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>One Month</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', maxWidth: '580px', margin: '0 auto 48px', lineHeight: 1.7 }}>
              Our students consistently report higher retention scores, improved exam performance, and greater confidence within their first 30 days on Blast Learning.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '680px', margin: '0 auto 48px' }}
          >
            {[
              { num: 3, displayFn: (v: number) => `${v}x`, label: 'More retention than traditional study' },
              { num: 91, displayFn: (v: number) => `${v}%`, label: 'Students improve their grades' },
              { num: 30, displayFn: (v: number) => `${v} days`, label: 'Average time to see results' },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <StatCounter num={s.num} displayFn={s.displayFn} label={s.label} />
              </motion.div>
            ))}
          </motion.div>

          <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 0 32px rgba(6,182,212,0.35)' }}>
            Start Your Free Trial Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Parent Concerns / Solutions ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, textAlign: 'center', marginBottom: '56px', color: '#07111F', letterSpacing: '-0.02em' }}
          >
            From Parent Worries to Real Results
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="grid-cols-2-lg">
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif', color: '#E8357A' }}>
                <AlertCircle size={18} /> Common Parent Concerns
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {parentConcerns.map(({ concern }) => (
                  <div key={concern} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', borderRadius: '12px', borderLeft: '3px solid rgba(232,53,122,0.5)', background: 'rgba(232,53,122,0.04)', border: '1px solid rgba(232,53,122,0.1)' }}>
                    <AlertCircle size={15} style={{ color: '#E8357A', flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ fontSize: '14px', color: '#0D1B2A', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{concern}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif', color: '#06B6D4' }}>
                <CheckCircle size={18} /> Blast Learning Solutions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {parentConcerns.map(({ solution }) => (
                  <div key={solution} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(6,182,212,0.15)', background: 'rgba(6,182,212,0.04)' }}>
                    <CheckCircle size={15} style={{ color: '#06B6D4', flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ fontSize: '14px', color: '#0D1B2A', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parent Dashboard Showcase ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(6,182,212,0.06)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ minWidth: 0 }}
            >
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(6,182,212,0.1)', color: '#06B6D4', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px', border: '1px solid rgba(6,182,212,0.2)' }}>
                For Parents
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'white', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Parent Dashboard —{' '}
                <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Stay Informed Every Day</span>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginBottom: '28px' }}>
                Know exactly what your child is studying, how long they study, and how well they retain it. Our parent dashboard gives you real-time visibility without hovering over their shoulder.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {['Real-time retention score tracking', 'Subject-wise performance breakdown', 'Weekly progress reports via WhatsApp', 'Alerts when your child misses study sessions'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={11} style={{ color: 'white' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/for-parents" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 0 24px rgba(6,182,212,0.3)' }}>
                Learn More for Parents <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Dashboard with perspective + floating notifications */}
            <div style={{ minWidth: 0, width: '100%', position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ perspective: '1000px' }}
              >
                <div style={{ transform: 'rotateY(-5deg)', willChange: 'transform' }}>
                  <DashboardMockup />
                </div>
              </motion.div>

              {/* Floating notification: top-right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '-16px', right: '-16px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.5)' }}
              >
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#07111F', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
                  ✓ Study session complete
                </p>
                <p style={{ fontSize: '10px', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>1h 42m — just now</p>
              </motion.div>

              {/* Floating notification: bottom-left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{ position: 'absolute', bottom: '-16px', left: '-16px', background: 'rgba(7,17,31,0.9)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', border: '1px solid rgba(6,182,212,0.2)' }}
              >
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#06B6D4', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
                  📈 Math retention +8%
                </p>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>This week</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              Real Results from Real Students
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '20px' }} className="grid-cols-3-md">
            <TestimonialCard name="Ananya Krishnan" role="Class 10 student, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            <TestimonialCard name="Rahul Mehta" role="Class 12 student, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            <TestimonialCard name="Kavitha Suresh" role="Class 9 student, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }} className="grid-cols-2-md">
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#07111F', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: openFaq === i ? '1px solid rgba(6,182,212,0.25)' : '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 20px', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: openFaq === i ? '#06B6D4' : '#07111F', fontFamily: 'Space Grotesk, sans-serif', transition: 'color 0.25s' }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0, color: '#06B6D4' }}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 20px 18px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        <div style={{ height: '12px' }} />
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              View All FAQs <ArrowRight size={15} style={{ color: '#06B6D4' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(135deg, #07111F 0%, #0c1728 40%, #130a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(6,182,212,0.1)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'blob-float 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(139,92,246,0.1)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'blob-float 10s ease-in-out infinite reverse' }} />
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, color: 'white', marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Help Your Child{' '}
              <span style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Learn Independently
              </span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', lineHeight: 1.7 }}>
              Join thousands of families who have transformed their child's academic performance with science-backed retention technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <Link to="/programs" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 0 36px rgba(6,182,212,0.35)' }}>
                Start 7-Day Trial <ArrowRight size={16} />
              </Link>
            </motion.div>
            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', backdropFilter: 'blur(12px)' }}>
              Speak to a Learning Advisor
            </Link>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            {['No credit card required', 'Free 7-day trial', 'Cancel anytime'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                <Star size={11} fill="currentColor" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
