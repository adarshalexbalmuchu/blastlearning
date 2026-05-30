import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Play, Brain, Crosshair, FileVideo, LayoutDashboard,
  HeartHandshake, Languages, BookOpen, Users,
  ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap, Star,
  Bell, Award, BarChart2, MapPin,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import FeatureCard from '../components/FeatureCard';
import {
  HeroIllustration,
  ForgettingCurveIllustration,
  HowItWorksStep1,
  HowItWorksStep2,
  HowItWorksStep3,
  ScoreTransformIllustration,
} from '../components/illustrations';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────────

const howItWorks = [
  {
    num: '01',
    title: 'Record or Upload Content',
    desc: 'Upload your class notes, recordings, or textbook chapters. Our AI processes and structures everything for optimal learning.',
    icon: BookOpen,
    Illustration: HowItWorksStep1,
  },
  {
    num: '02',
    title: 'AI Creates Your Study Plan',
    desc: 'Our Metacognition Engine analyzes your learning patterns and creates a personalized study schedule using spaced repetition science.',
    icon: Brain,
    Illustration: HowItWorksStep2,
  },
  {
    num: '03',
    title: 'Learn, Practice, Master',
    desc: 'Follow your adaptive plan, practice with smart quizzes, and track your retention scores. Master every concept before your exams.',
    icon: Crosshair,
    Illustration: HowItWorksStep3,
  },
];

const features = [
  { icon: Brain, title: 'Metacognition Engine', desc: 'Our proprietary AI maps how your child actually learns and adapts the study plan in real-time for maximum retention.' },
  { icon: Crosshair, title: 'Focus Trainer', desc: 'Guided study sessions with focus techniques that reduce distraction and build lasting concentration habits.' },
  { icon: FileVideo, title: 'Class Recording Integration', desc: 'Connect any coaching or school recording. Our AI converts lectures into interactive revision material instantly.' },
  { icon: LayoutDashboard, title: 'Parent Dashboard', desc: "Real-time visibility into your child's study habits, retention scores, and academic progress — all in one place." },
  { icon: HeartHandshake, title: 'Tutor Mom Support', desc: 'Dedicated human mentors who check in weekly, answer doubts, and keep students accountable and motivated.' },
  { icon: Languages, title: 'Multilingual Support', desc: 'Learn in your comfort language — English, Hindi, Kannada, Tamil, Telugu, and more regional languages supported.' },
];

const featureAccents = [
  { color: '#0FA8DC', bg: '#E0F5FC' },
  { color: '#F03C6F', bg: '#FFF0F4' },
  { color: '#7C3AED', bg: '#F0EDFC' },
  { color: '#059669', bg: '#E9F7EF' },
  { color: '#D97706', bg: '#FDF3E7' },
  { color: '#0FA8DC', bg: '#E0F5FC' },
];

const parentConcerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention' },
  { concern: "Coaching fees keep increasing but results don't improve", solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons' },
  { concern: "I can't tell if my child is actually studying", solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage daily' },
  { concern: 'My child is stressed and losing confidence', solution: 'Personalized pace and progress celebrations build confidence as students see real improvement' },
  { concern: 'Different coaching teachers explain things differently', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions' },
];

const homeFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps them retain 90% of what they learn — compared to the 10% most students retain without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 7-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first week." },
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
    subtext: "Science-backed spaced repetition and active recall techniques trusted by top students worldwide. Join 4,999+ Indian families who've transformed academic performance in just 30 days.",
    primaryCta: { label: 'Start Free Trial', to: '/programs' },
    secondaryCta: 'See Success Stories',
    trust: ['Results in 30 days', '91% improvement rate', '4.0/5 parent rating'],
  },
];

// ─── Per-banner visual ─────────────────────────────────────────────────────────
function HeroVisual({ index }: { index: number }) {
  const cardStyle: React.CSSProperties = {
    background: '#F7F7F8',
    borderRadius: '14px',
    padding: '20px',
    border: '1px solid #ECECF1',
    width: '100%',
    boxSizing: 'border-box',
  };

  const valStyle = (): React.CSSProperties => ({
    fontSize: '18px',
    fontWeight: 700,
    fontFamily: 'Poppins, sans-serif',
    color: '#0FA8DC',
    display: 'block',
  });

  if (index === 0) {
    return (
      <div style={{ padding: '4px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '8px', background: '#0FA8DC', color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
            90% Retention Rate
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Today's Learning Session</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif' }}>Arjun's Progress</p>
            </div>
            <span style={{ padding: '4px 11px', borderRadius: '9999px', background: '#0FA8DC', color: 'white', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              Today: 87%
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {[
              { label: 'Retention Score', val: '87%' },
              { label: 'Topics Covered', val: '12/15' },
              { label: 'Study Streak', val: '14 days' },
              { label: 'Quiz Score', val: '92%' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#FFFFFF', borderRadius: '10px', padding: '12px', border: '1px solid #ECECF1' }}>
                <span style={valStyle()}>{item.val}</span>
                <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginTop: '3px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '14px', border: '1px solid #ECECF1' }}>
            <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>Today's Revision Queue</p>
            {['Chapter 4 — Quadratic Equations', 'Photosynthesis Process', 'English Grammar — Tenses'].map((topic, i) => (
              <div key={topic} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: i < 2 ? '7px' : 0 }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: i === 0 ? '#0FA8DC' : '#ECECF1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: i === 0 ? 'white' : '#8E8EA0', fontSize: '10px', fontWeight: 700 }}>{i + 1}</span>
                </div>
                <span style={{ color: '#1C1C28', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    const subjects = [
      { name: 'Mathematics', pct: 92 },
      { name: 'Science', pct: 85 },
      { name: 'English', pct: 78 },
      { name: 'Social Studies', pct: 88 },
    ];
    return (
      <div style={{ padding: '4px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '8px', background: '#0FA8DC', color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
            CBSE Class 10 — On Track
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Subject Retention Overview</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif' }}>Priya's Board Prep</p>
            </div>
            <span style={{ padding: '4px 10px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif', border: '1px solid #B5E3F4' }}>
              24/32 chapters
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {subjects.map(({ name, pct }) => (
              <div key={name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>{name}</span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>{pct}%</span>
                </div>
                <div style={{ height: '5px', background: '#ECECF1', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: '#0FA8DC', borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ECECF1' }}>
            <div>
              <p style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Board Exam Date</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif' }}>March 2025</p>
            </div>
            <span style={{ padding: '4px 12px', borderRadius: '9999px', background: '#0FA8DC', color: 'white', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              On Track
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    const alerts = [
      { Icon: CheckCircle, color: '#0FA8DC', text: 'Session completed — 1h 42m (3:45 PM)' },
      { Icon: BarChart2, color: '#0FA8DC', text: 'Math retention up 8% this week' },
      { Icon: Award, color: '#1C8A5B', text: 'Weekly goal 85% — achieved today' },
    ];
    return (
      <div style={{ padding: '4px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '8px', background: '#0FA8DC', color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
            Live Parent Dashboard
          </span>
        </div>
        <div style={cardStyle}>
          <div style={{ marginBottom: '14px' }}>
            <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Today's Summary</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif' }}>Kavitha's Dashboard</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '14px' }}>
            {[
              { label: 'Study Time', val: '1h 42m' },
              { label: 'Retention', val: '89%' },
              { label: 'Chapters', val: '3 done' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#FFFFFF', borderRadius: '8px', padding: '10px', textAlign: 'center', border: '1px solid #ECECF1' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#0FA8DC' }}>{item.val}</p>
                <p style={{ fontSize: '9px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
            {alerts.map(({ Icon, color, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', background: '#FFFFFF', border: '1px solid #ECECF1' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, flexShrink: 0 }}>
                  <Icon size={10} style={{ color: 'white' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{text}</span>
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
    <div style={{ padding: '4px' }}>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '8px', background: '#0FA8DC', color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Real Student Results — 30 Days
        </span>
      </div>
      <div style={cardStyle}>
        <div style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '3px' }}>Before vs After Blast Learning</p>
          <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif' }}>Score Improvements</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {results.map(({ name, subject, before, after }) => (
            <div key={name} style={{ background: '#FFFFFF', borderRadius: '10px', padding: '10px 12px', border: '1px solid #ECECF1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>{name}</span>
                <span style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{subject}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#8E8EA0', fontFamily: 'Poppins, sans-serif' }}>{before}%</span>
                <ArrowRight size={13} style={{ color: '#0FA8DC', flexShrink: 0 }} />
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#0FA8DC', fontFamily: 'Poppins, sans-serif' }}>{after}%</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 600, padding: '2px 7px', borderRadius: '5px', background: '#E9F7EF', color: '#1C8A5B', fontFamily: 'Inter, sans-serif' }}>
                  +{after - before}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #ECECF1' }}>
          <div>
            <p style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>Average improvement</p>
            <p style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#0FA8DC' }}>+27%</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end', marginBottom: '4px' }}>
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={11} fill={s <= 4 ? '#0FA8DC' : 'none'} style={{ color: '#0FA8DC' }} />)}
            </div>
            <p style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>4.0/5 parent rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── GSAP-powered stat counter ─────────────────────────────────────────────────
function StatCounter({ num, displayFn, label }: { num: number; displayFn: (v: number) => string; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const counterObj = { val: 0 };
    let tween: gsap.core.Tween | null = null;
    const trigger = ScrollTrigger.create({
      trigger: node,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        tween = gsap.to(counterObj, {
          val: num,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => setValue(Math.round(counterObj.val)),
        });
      },
    });
    return () => {
      trigger.kill();
      tween?.kill();
    };
  }, [num]);

  return (
    <div ref={ref} className="text-center">
      <div style={{
        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
        fontWeight: 700,
        marginBottom: '6px',
        fontFamily: 'Poppins, sans-serif',
        color: '#1C1C28',
      }}>
        {displayFn(value)}
      </div>
      <div style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{label}</div>
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
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
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
const statCards = [
  { num: 4999, displayFn: (v: number) => `${v.toLocaleString()}+`, label: 'Students Enrolled', bg: '#FDF3E7', Icon: Users, iconColor: '#D97706' },
  { num: 40, displayFn: (v: number) => `${(v / 10).toFixed(1)}/5`, label: 'Parent Satisfaction', bg: '#FCEEF1', Icon: Star, iconColor: '#F03C6F' },
  { num: 91, displayFn: (v: number) => `${v}%`, label: 'Academic Improvement', bg: '#E7F6FB', Icon: TrendingUp, iconColor: '#0FA8DC' },
  { num: 49, displayFn: (v: number) => `${v}+`, label: 'Cities Across India', bg: '#F0EDFC', Icon: MapPin, iconColor: '#7C3AED' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    document.title = 'Blast Learning | AI-Powered Study Retention for Indian Students';
    return () => { document.title = 'Blast Learning'; };
  }, []);

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
      {/* Screen reader announcement for carousel changes */}
      <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        {banner.badge} — {banner.headline} {banner.highlight}
      </div>

      {/* ── Hero Banner Carousel ── */}
      <section aria-label="Featured highlights" style={{ position: 'relative', paddingTop: '104px', paddingBottom: '80px', background: '#FFFFFF', overflow: 'hidden', borderBottom: '1px solid #ECECF1' }}>
        {/* Ambient illustration */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '420px', height: '350px', opacity: 0.04, pointerEvents: 'none', zIndex: 0 }}>
          <HeroIllustration width="100%" height="100%" />
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="lg:grid-cols-hero"
          >
            {/* LEFT */}
            <div style={{ minWidth: 0 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeBanner}`}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Badge pill */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
                    <BadgeIcon size={13} />
                    {banner.badge}
                  </div>

                  {/* Headline */}
                  <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.12, color: '#1C1C28', marginBottom: '24px' }}>
                    {banner.headline}
                    <br />
                    <span style={{ color: '#0FA8DC' }}>
                      {banner.highlight}
                    </span>
                  </h1>

                  {/* Subtext */}
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '32px', maxWidth: '520px' }}>
                    {banner.subtext}
                  </p>

                  {/* CTAs */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
                    <motion.div whileHover={{ scale: 1.03, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                      <Link
                        to={banner.primaryCta.to}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', background: '#F03C6F', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 20px rgba(240,60,111,0.30)' }}
                      >
                        {banner.primaryCta.label} <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', border: '1.5px solid #DCDCE5', background: 'white', color: '#1C1C28', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}
                    >
                      <Play size={15} /> {banner.secondaryCta}
                    </motion.button>
                  </div>

                  {/* Trust signals */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                    {banner.trust.map((t) => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                        <CheckCircle size={13} style={{ color: '#0FA8DC' }} />
                        {t}
                      </div>
                    ))}
                  </div>

                  {/* City trust strip */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #ECECF1' }}>
                    <span style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', fontWeight: 500, marginRight: '2px' }}>Students from:</span>
                    {['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', '+43 more cities'].map((city) => (
                      <span key={city} style={{ padding: '2px 8px', borderRadius: '6px', background: '#F7F7F8', border: '1px solid #ECECF1', fontSize: '11px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{city}</span>
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
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #ECECF1',
                      borderRadius: '24px',
                      boxShadow: '0 8px 28px rgba(28,28,40,0.08)',
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
            <div style={{ width: '220px', height: '3px', background: '#ECECF1', borderRadius: '999px', overflow: 'hidden' }}>
              <motion.div
                key={progressKey}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: BANNER_INTERVAL / 1000, ease: 'linear' }}
                style={{ height: '100%', background: '#0FA8DC', borderRadius: '999px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {banners.map((b, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  title={b.badge}
                  animate={{
                    width: activeBanner === i ? '32px' : '8px',
                    background: activeBanner === i ? '#0FA8DC' : '#DCDCE5',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip (pastel cards) ── */}
      <section style={{ paddingTop: '88px', paddingBottom: '88px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              By the numbers
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              A Platform Trusted by<br />Families Across India
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginTop: '14px', lineHeight: 1.6 }}>
              Don't just take our word for it — here's the impact, in numbers.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '56px' }} className="grid-cols-4-lg">
            {statCards.map((s) => (
              <motion.div key={s.label} variants={fadeUp} style={{ background: s.bg, borderRadius: '20px', padding: '32px 24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <s.Icon size={20} style={{ color: s.iconColor }} />
                </div>
                <StatCounter num={s.num} displayFn={s.displayFn} label={s.label} />
              </motion.div>
            ))}
          </motion.div>
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

      {/* ── Science of Retention (white) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ minWidth: 0 }}>
              <div style={{ background: '#F7F7F8', border: '1px solid #ECECF1', borderRadius: '20px', padding: '24px' }}>
                <ForgettingCurveIllustration animated width="100%" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                The Science
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Why Students Forget — and How We Fix It
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '28px' }}>
                Ebbinghaus's Forgetting Curve shows students lose 80% of what they learn within 24 hours. Blast Learning's spaced repetition system fights this directly — scheduling reviews at the exact moment your child is about to forget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Spaced Repetition', desc: 'Reviews scheduled at optimal intervals — not random, not cramming.' },
                  { label: 'Active Recall', desc: 'Smart quizzes that make your brain work harder, creating stronger memories.' },
                  { label: 'Metacognition Tracking', desc: 'AI maps exactly where knowledge gaps exist and fills them before exams.' },
                ].map(({ label, desc }) => (
                  <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0FA8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle size={11} style={{ color: 'white' }} />
                    </div>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>{label}</span>
                      <span style={{ fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works (light gray) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Simple Process"
            title="How Blast Learning Works"
            subtitle="Three simple steps to turn everyday study into lasting retention."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '48px', position: 'relative' }} className="grid-cols-3-md">
            {howItWorks.map(({ num, title, desc, icon: Icon, Illustration }, idx) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ background: 'white', borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
              >
                {/* Step badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: idx === 0 ? '#0FA8DC' : idx === 1 ? '#F03C6F' : '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} style={{ color: 'white' }} />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#8E8EA0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Step {num}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>{desc}</p>
                <div>
                  <Illustration width="100%" height="140" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 18px rgba(15,168,220,0.25)' }}>
              Start Your 7-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Programs Preview (white) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-end justify-between" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em' }}>
              Our Programs
            </h2>
            <Link to="/programs" style={{ fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none', flexShrink: 0 }}>
              View All <ChevronDown size={14} style={{ color: '#0FA8DC' }} className="-rotate-90" />
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }} className="grid-cols-2-md grid-cols-4-lg">
            {[
              { name: 'CBSE Plan', price: '₹1,299', classes: 'Classes 8-10', desc: 'Full CBSE syllabus coverage with AI study buddy and board exam preparation.', outcomes: ['Board Mastery', 'NCERT Clarity', 'Retention'], icon: BookOpen, featured: true },
              { name: 'Math Genius Maker', price: '₹999', classes: 'Classes 8-12', desc: 'Gap assessment and personalized math lessons from foundation to advanced.', outcomes: ['Gap Filling', 'Speed & Accuracy', 'Mastery'], icon: Crosshair },
              { name: 'English Mastery', price: '₹999', classes: 'All Classes', desc: 'Grammar, writing, reading, and comprehension skills built systematically.', outcomes: ['Grammar', 'Writing', 'Reading'], icon: Brain },
              { name: 'SAT Prep Pass', price: '₹999', classes: 'Classes 10-12', desc: 'Foundation-level SAT preparation with adaptive tests and complete score optimization.', outcomes: ['High Scores', 'Test Strategy', 'College Ready'], icon: TrendingUp },
            ].map((prog) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{
                    position: 'relative',
                    background: '#FFFFFF',
                    border: prog.featured ? '2px solid #0FA8DC' : '1px solid #ECECF1',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                  }}
                >
                  {prog.featured && (
                    <span style={{ position: 'absolute', top: '-12px', left: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: 600, color: 'white', background: '#0FA8DC', borderRadius: '9999px', fontFamily: 'Inter, sans-serif' }}>
                      Most Popular
                    </span>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: prog.featured ? '#0FA8DC' : '#E0F5FC', color: prog.featured ? 'white' : '#0FA8DC' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>{prog.price}</span>
                      <span style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginLeft: '2px' }}>/mo</span>
                    </div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '6px', padding: '2px 8px', borderRadius: '9999px', background: '#E0F5FC', fontSize: '10px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>
                    <Zap size={9} /> AI Powered
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', marginBottom: '4px', fontFamily: 'Poppins, sans-serif' }}>{prog.name}</h3>
                  <span style={{ display: 'inline-block', marginBottom: '10px', padding: '2px 9px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: '#F7F7F8', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{prog.classes}</span>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5A5A6E', marginBottom: '14px', fontFamily: 'Inter, sans-serif' }}>{prog.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                    {prog.outcomes.map((o) => (
                      <span key={o} style={{ padding: '2px 9px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', border: '1px solid #ECECF1', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                    ))}
                  </div>
                  <Link to="/programs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '11px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: prog.featured ? '#0FA8DC' : 'white', color: prog.featured ? 'white' : '#1C1C28', border: prog.featured ? 'none' : '1.5px solid #DCDCE5' }}>
                    Learn More <ArrowRight size={13} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Features Bento Grid (light gray) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            title="What Makes Us Different"
            subtitle="Built around the science of memory — not just another content library."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-md bento-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isSpan = i === 0 || i === 5;
              const accent = featureAccents[i];
              return (
                <div key={f.title} className={isSpan ? 'bento-span-2' : ''}>
                  <FeatureCard icon={<Icon size={20} />} title={f.title} description={f.desc} large={isSpan} accentColor={accent.color} accentBg={accent.bg} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Results Banner (white) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <SectionHeading
            title="See Results Within One Month"
            subtitle="Our students consistently report higher retention, improved exam performance, and greater confidence within their first 30 days."
          />

          {/* Score transformation arcs */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ maxWidth: '520px', margin: '0 auto 48px' }}>
            <div style={{ background: '#F7F7F8', border: '1px solid #ECECF1', borderRadius: '20px', padding: '24px 16px 8px' }}>
              <ScoreTransformIllustration width="100%" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '720px', margin: '0 auto 48px' }}>
            {[
              { num: 3, displayFn: (v: number) => `${v}x`, label: 'More retention than traditional study', bg: '#F0EDFC' },
              { num: 91, displayFn: (v: number) => `${v}%`, label: 'Students improve their grades', bg: '#E7F6FB' },
              { num: 30, displayFn: (v: number) => `${v} days`, label: 'Average time to see results', bg: '#E9F7EF' },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} style={{ background: s.bg, borderRadius: '20px', padding: '32px 20px' }}>
                <StatCounter num={s.num} displayFn={s.displayFn} label={s.label} />
              </motion.div>
            ))}
          </motion.div>

          <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 18px rgba(15,168,220,0.25)' }}>
            Start Your Free Trial Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Parent Concerns / Solutions (light gray) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, textAlign: 'center', marginBottom: '56px', color: '#1C1C28', letterSpacing: '-0.01em' }}>
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '56px', alignItems: 'center' }} className="grid-cols-2-lg">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                For Parents
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', marginBottom: '20px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Parent Dashboard — <span style={{ color: '#0FA8DC' }}>Stay Informed Every Day</span>
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
              <Link to="/for-parents" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 18px rgba(15,168,220,0.25)' }}>
                Learn More for Parents <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div style={{ minWidth: 0, width: '100%', position: 'relative' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ perspective: '1000px' }}>
                <div style={{ transform: 'rotateY(-5deg)', willChange: 'transform' }}>
                  <DashboardMockup />
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-16px', right: '-16px', background: '#FFFFFF', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 28px rgba(28,28,40,0.1)', border: '1px solid #ECECF1' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>Study session complete</p>
                <p style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>1h 42m — just now</p>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} style={{ position: 'absolute', bottom: '-16px', left: '-16px', background: '#0FA8DC', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 8px 28px rgba(15,168,220,0.25)' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'white', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>Math retention +8%</p>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>This week</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (light gray) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '48px' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E9F7EF', color: '#059669', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
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
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
          </div>
        </div>
      </section>

      {/* ── FAQ Preview (white) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before you start your free trial."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: openFaq === i ? '1px solid #0FA8DC' : '1px solid #ECECF1',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s',
                  boxShadow: '0 2px 12px rgba(28,28,40,0.04)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 20px', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: openFaq === i ? '#0FA8DC' : '#1C1C28', fontFamily: 'Inter, sans-serif', transition: 'color 0.25s' }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0, color: '#0FA8DC' }}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 20px 18px', borderTop: '1px solid #ECECF1' }}>
                        <div style={{ height: '12px' }} />
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
                      </div>
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

      {/* ── Final CTA (indigo card on light) ── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: '#0FA8DC', borderRadius: '28px', padding: '64px 32px', textAlign: 'center', boxShadow: '0 16px 40px rgba(15,168,220,0.25)' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Help Your Child Learn Independently
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', lineHeight: 1.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Join thousands of families who have transformed their child's academic performance with science-backed retention technology.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Link to="/programs" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#F03C6F', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 22px rgba(240,60,111,0.40)' }}>
                  Start 7-Day Free Trial <ArrowRight size={16} />
                </Link>
              </motion.div>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                Speak to a Learning Advisor
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              {['No credit card required', 'Free 7-day trial', 'Cancel anytime'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
                  <Star size={11} fill="currentColor" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
