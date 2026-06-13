import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const INTERVAL = 7500;

// ─── SVG Illustrations ──────────────────────────────────────────────────────────

function RetentionIllustration() {
  return (
    <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" aria-hidden="true">
      {/* Background ring */}
      <circle cx="240" cy="170" r="110" stroke="rgba(15,168,220,0.08)" strokeWidth="1.5" strokeDasharray="6 4"/>
      <circle cx="240" cy="170" r="75" fill="rgba(15,168,220,0.06)" stroke="rgba(15,168,220,0.15)" strokeWidth="1.5"/>

      {/* Central stat */}
      <text x="240" y="155" fontSize="54" fontWeight="800" fontFamily="Poppins,sans-serif" fill="#0FA8DC" textAnchor="middle" letterSpacing="-2">91%</text>
      <text x="240" y="178" fontSize="11" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">Avg. Retention Rate</text>

      {/* Live dot */}
      <circle cx="240" cy="197" r="4" fill="#22C55E"/>
      <text x="252" y="201" fontSize="9" fontFamily="Inter,sans-serif" fill="#22C55E" fontWeight="600">Live</text>

      {/* Subject bubbles — top */}
      <line x1="240" y1="95" x2="240" y2="52" stroke="rgba(15,168,220,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="190" y="32" width="100" height="26" rx="13" fill="#E0F5FC" stroke="#0FA8DC" strokeWidth="1"/>
      <text x="240" y="50" fontSize="11" fontFamily="Inter,sans-serif" fill="#0FA8DC" textAnchor="middle" fontWeight="600">Biology · 94%</text>

      {/* top-right */}
      <line x1="317" y1="107" x2="358" y2="72" stroke="rgba(139,92,246,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="336" y="52" width="104" height="26" rx="13" fill="#F0EDFC" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="388" y="70" fontSize="11" fontFamily="Inter,sans-serif" fill="#8B5CF6" textAnchor="middle" fontWeight="600">Maths · 88%</text>

      {/* right */}
      <line x1="315" y1="170" x2="362" y2="170" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="362" y="157" width="104" height="26" rx="13" fill="#E9F7EF" stroke="#10B981" strokeWidth="1"/>
      <text x="414" y="175" fontSize="11" fontFamily="Inter,sans-serif" fill="#10B981" textAnchor="middle" fontWeight="600">Physics · 91%</text>

      {/* bottom-right */}
      <line x1="317" y1="233" x2="356" y2="265" stroke="rgba(245,158,11,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="336" y="258" width="104" height="26" rx="13" fill="#FEF9E7" stroke="#F59E0B" strokeWidth="1"/>
      <text x="388" y="276" fontSize="11" fontFamily="Inter,sans-serif" fill="#D97706" textAnchor="middle" fontWeight="600">English · 96%</text>

      {/* bottom */}
      <line x1="240" y1="245" x2="240" y2="288" stroke="rgba(233,30,140,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="190" y="288" width="100" height="26" rx="13" fill="#FFF0F8" stroke="#E91E8C" strokeWidth="1"/>
      <text x="240" y="306" fontSize="11" fontFamily="Inter,sans-serif" fill="#E91E8C" textAnchor="middle" fontWeight="600">History · 89%</text>

      {/* top-left */}
      <line x1="163" y1="107" x2="122" y2="72" stroke="rgba(15,168,220,0.20)" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="18" y="52" width="104" height="26" rx="13" fill="#E0F5FC" stroke="#0FA8DC" strokeWidth="1"/>
      <text x="70" y="70" fontSize="11" fontFamily="Inter,sans-serif" fill="#0FA8DC" textAnchor="middle" fontWeight="600">Chemistry · 92%</text>
    </svg>
  );
}

function ScienceIllustration() {
  // Forgetting curve: Y=retention 0-100%, X=time Day1→Month1
  const pts = [
    [40, 30], [100, 110], [160, 175], [240, 218], [320, 238], [400, 248],
  ];
  const blastPts = [
    [40, 30], [100, 52], [140, 38], [190, 28], [250, 20], [310, 14], [400, 12],
  ];
  const toPath = (arr: number[][]) =>
    arr.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" aria-hidden="true">
      {/* Chart area bg */}
      <rect x="30" y="10" width="390" height="250" rx="12" fill="rgba(247,247,248,0.6)"/>

      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((p, i) => (
        <line key={i} x1="40" y1={10 + 250 * (1 - p)} x2="420" y2={10 + 250 * (1 - p)} stroke="#ECECF1" strokeWidth="1"/>
      ))}

      {/* Y-axis labels */}
      {[100, 75, 50, 25, 0].map((v, i) => (
        <text key={v} x="28" y={15 + i * 62.5} fontSize="8" fontFamily="Inter,sans-serif" fill="#8E8EA0" textAnchor="end">{v}%</text>
      ))}

      {/* X-axis labels */}
      {['Day 1', 'Day 3', 'Week 1', 'Month 1'].map((l, i) => (
        <text key={l} x={40 + i * 120} y="275" fontSize="9" fontFamily="Inter,sans-serif" fill="#8E8EA0" textAnchor="middle">{l}</text>
      ))}

      {/* Axes */}
      <line x1="40" y1="10" x2="40" y2="260" stroke="#DCDCE5" strokeWidth="1.5"/>
      <line x1="40" y1="260" x2="420" y2="260" stroke="#DCDCE5" strokeWidth="1.5"/>

      {/* Without Blast — forgetting curve */}
      <path d={toPath(pts)} stroke="#DCDCE5" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d={`${toPath(pts)} L400,260 L40,260 Z`} fill="url(#grey-fill)" opacity="0.15"/>
      <defs>
        <linearGradient id="grey-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCDCE5"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="blast-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0FA8DC"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
      </defs>

      {/* With Blast — high retention */}
      <path d={toPath(blastPts)} stroke="#0FA8DC" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d={`${toPath(blastPts)} L400,260 L40,260 Z`} fill="url(#blast-fill)" opacity="0.12"/>

      {/* Revision dots on Blast line */}
      {blastPts.slice(1).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#0FA8DC" stroke="white" strokeWidth="1.5"/>
      ))}

      {/* Legend */}
      <rect x="270" y="22" width="140" height="46" rx="8" fill="white" stroke="#ECECF1" strokeWidth="1"/>
      <line x1="280" y1="36" x2="302" y2="36" stroke="#DCDCE5" strokeWidth="2"/>
      <text x="308" y="40" fontSize="9" fontFamily="Inter,sans-serif" fill="#8E8EA0">Without Blast</text>
      <line x1="280" y1="54" x2="302" y2="54" stroke="#0FA8DC" strokeWidth="2.5"/>
      <circle cx="291" cy="54" r="3" fill="#0FA8DC"/>
      <text x="308" y="58" fontSize="9" fontFamily="Inter,sans-serif" fill="#0FA8DC" fontWeight="600">With Blast</text>
    </svg>
  );
}

function ProcessIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" aria-hidden="true">
      {/* Step 1: Upload */}
      <rect x="20" y="60" width="120" height="160" rx="20" fill="#E0F5FC" stroke="#0FA8DC" strokeWidth="1.5"/>
      <circle cx="80" cy="20" r="16" fill="#0FA8DC"/>
      <text x="80" y="25" fontSize="11" fontFamily="Poppins,sans-serif" fill="white" textAnchor="middle" fontWeight="700">01</text>
      {/* Upload icon */}
      <rect x="50" y="88" width="60" height="56" rx="12" fill="rgba(15,168,220,0.12)"/>
      <path d="M80 128v-22M70 114l10-10 10 10" stroke="#0FA8DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="80" y="166" fontSize="12" fontFamily="Poppins,sans-serif" fill="#0D8BB5" textAnchor="middle" fontWeight="700">Upload</text>
      <text x="80" y="182" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">Notes &amp; Recordings</text>
      <text x="80" y="196" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">from coaching</text>

      {/* Arrow 1 */}
      <path d="M148 140 C168 140 172 140 188 140" stroke="#DCDCE5" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M185 135 L192 140 L185 145" stroke="#DCDCE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Step 2: AI (wider, center piece) */}
      <rect x="180" y="60" width="120" height="160" rx="20" fill="#F5F0FF" stroke="#8B5CF6" strokeWidth="1.5"/>
      <circle cx="240" cy="20" r="16" fill="#8B5CF6"/>
      <text x="240" y="25" fontSize="11" fontFamily="Poppins,sans-serif" fill="white" textAnchor="middle" fontWeight="700">02</text>
      {/* Brain/AI icon */}
      <rect x="210" y="88" width="60" height="56" rx="12" fill="rgba(139,92,246,0.12)"/>
      {/* Sparkle pattern */}
      <circle cx="240" cy="116" r="14" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
      <path d="M240 102 L240 98 M240 130 L240 134 M226 116 L222 116 M254 116 L258 116" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="240" cy="116" r="5" fill="#8B5CF6"/>
      <text x="240" y="166" fontSize="12" fontFamily="Poppins,sans-serif" fill="#7C3AED" textAnchor="middle" fontWeight="700">AI Engine</text>
      <text x="240" y="182" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">Builds personalised</text>
      <text x="240" y="196" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">study schedule</text>

      {/* Arrow 2 */}
      <path d="M308 140 C328 140 332 140 348 140" stroke="#DCDCE5" strokeWidth="1.5" strokeDasharray="5 4"/>
      <path d="M345 135 L352 140 L345 145" stroke="#DCDCE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Step 3: Mastery */}
      <rect x="340" y="60" width="120" height="160" rx="20" fill="#E9F7EF" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="400" cy="20" r="16" fill="#10B981"/>
      <text x="400" y="25" fontSize="11" fontFamily="Poppins,sans-serif" fill="white" textAnchor="middle" fontWeight="700">03</text>
      {/* Trophy icon */}
      <rect x="370" y="88" width="60" height="56" rx="12" fill="rgba(16,185,129,0.12)"/>
      <path d="M386 106 h28 v14 a14 14 0 01-28 0Z" stroke="#10B981" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M388 120 v8 M412 120 v8 M385 128 h30" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="400" y="166" fontSize="12" fontFamily="Poppins,sans-serif" fill="#059669" textAnchor="middle" fontWeight="700">Mastery</text>
      <text x="400" y="182" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">90%+ Retention</text>
      <text x="400" y="196" fontSize="10" fontFamily="Inter,sans-serif" fill="#5A5A6E" textAnchor="middle">before every exam</text>

      {/* Bottom tagline */}
      <rect x="100" y="248" width="280" height="32" rx="16" fill="rgba(15,168,220,0.07)" stroke="rgba(15,168,220,0.2)" strokeWidth="1"/>
      <text x="240" y="269" fontSize="12" fontFamily="Poppins,sans-serif" fill="#0FA8DC" textAnchor="middle" fontWeight="600">From notes to mastery in minutes ✦</text>
    </svg>
  );
}

function ParentIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" aria-hidden="true">
      {/* Phone frame */}
      <rect x="150" y="10" width="180" height="290" rx="28" fill="white" stroke="#ECECF1" strokeWidth="2"/>
      <rect x="160" y="26" width="160" height="258" rx="18" fill="#F7F7F8"/>
      {/* Notch */}
      <rect x="210" y="14" width="60" height="10" rx="5" fill="#ECECF1"/>

      {/* Screen header bar */}
      <rect x="160" y="26" width="160" height="50" rx="18" fill="#0FA8DC"/>
      <rect x="160" y="58" width="160" height="18" rx="0" fill="#0FA8DC"/>
      <text x="240" y="46" fontSize="11" fontFamily="Poppins,sans-serif" fill="white" textAnchor="middle" fontWeight="700">Rohan's Progress</text>
      <circle cx="170" cy="66" r="4" fill="#22C55E"/>
      <text x="178" y="70" fontSize="8" fontFamily="Inter,sans-serif" fill="rgba(255,255,255,0.9)">Live · Today</text>

      {/* Big retention % */}
      <text x="240" y="120" fontSize="44" fontFamily="Poppins,sans-serif" fill="#0FA8DC" textAnchor="middle" fontWeight="800">89%</text>
      <text x="240" y="136" fontSize="9" fontFamily="Inter,sans-serif" fill="#8E8EA0" textAnchor="middle">Retention · This Week</text>
      <rect x="176" y="144" width="128" height="5" rx="2.5" fill="#E0F5FC"/>
      <rect x="176" y="144" width="114" height="5" rx="2.5" fill="#0FA8DC"/>

      {/* Subject rows */}
      {[
        { label: 'Physics', pct: '76%', w: 76, color: '#8B5CF6', y: 168 },
        { label: 'Chemistry', pct: '88%', w: 88, color: '#0FA8DC', y: 188 },
        { label: 'Maths', pct: '94%', w: 94, color: '#10B981', y: 208 },
      ].map((s) => (
        <g key={s.label}>
          <text x="176" y={s.y - 2} fontSize="8" fontFamily="Inter,sans-serif" fill="#5A5A6E">{s.label}</text>
          <text x="304" y={s.y - 2} fontSize="8" fontFamily="Inter,sans-serif" fill={s.color} textAnchor="end" fontWeight="600">{s.pct}</text>
          <rect x="176" y={s.y} width="128" height="4" rx="2" fill="#ECECF1"/>
          <rect x="176" y={s.y} width={s.w * 1.28} height="4" rx="2" fill={s.color}/>
        </g>
      ))}

      {/* Streak chip */}
      <rect x="168" y="228" width="144" height="30" rx="12" fill="#FEF9E7" stroke="#F59E0B" strokeWidth="1"/>
      <text x="182" y="248" fontSize="14">🔥</text>
      <text x="200" y="248" fontSize="10" fontFamily="Poppins,sans-serif" fill="#1C1C28" fontWeight="700">14-Day Learning Streak</text>

      {/* Floating WhatsApp alert card */}
      <rect x="16" y="96" width="136" height="60" rx="14" fill="white" stroke="#ECECF1" strokeWidth="1.5" style={{filter: 'drop-shadow(0 4px 14px rgba(28,28,40,0.10))'}}/>
      <circle cx="34" cy="116" r="10" fill="#25D366"/>
      <text x="34" y="120" fontSize="9" fill="white" textAnchor="middle" fontWeight="700">W</text>
      <text x="50" y="112" fontSize="8" fontFamily="Poppins,sans-serif" fill="#1C1C28" fontWeight="700">Blast Learning</text>
      <text x="50" y="124" fontSize="8" fontFamily="Inter,sans-serif" fill="#5A5A6E">Rohan completed Optics!</text>
      <text x="50" y="136" fontSize="8" fontFamily="Inter,sans-serif" fill="#10B981" fontWeight="600">94% recall score 🎉</text>

      {/* Floating score card — right */}
      <rect x="328" y="110" width="130" height="56" rx="14" fill="white" stroke="#ECECF1" strokeWidth="1.5" style={{filter: 'drop-shadow(0 4px 14px rgba(28,28,40,0.10))'}}/>
      <text x="344" y="130" fontSize="9" fontFamily="Inter,sans-serif" fill="#8E8EA0">Today's Goal</text>
      <text x="344" y="148" fontSize="20" fontFamily="Poppins,sans-serif" fill="#10B981" fontWeight="800">4/5</text>
      <text x="372" y="155" fontSize="8" fontFamily="Inter,sans-serif" fill="#5A5A6E">topics done</text>
      <rect x="344" y="158" width="100" height="4" rx="2" fill="#ECECF1"/>
      <rect x="344" y="158" width="80" height="4" rx="2" fill="#10B981"/>
    </svg>
  );
}

// ─── Slide data ─────────────────────────────────────────────────────────────────

interface SlideData {
  id: string;
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  sub: string;
  primaryCta: string;
  primaryTo: string;
  secondaryCta: string;
  secondaryScrollTo?: string;
  accent: string;
  accentRgb: string;
  bg: string;
  Illustration: React.FC;
}

const SLIDES: SlideData[] = [
  {
    id: 'retention',
    eyebrow: 'AI-Powered Retention',
    headlinePlain: 'Your Child Retains Only 10% of Coaching.',
    headlineAccent: 'We Lift It to 91%.',
    sub: 'Most students forget what they learn within a week. Blast uses proven retention science to help students remember more and perform better.',
    primaryCta: 'Start 7-Day Free Trial',
    primaryTo: '/programs',
    secondaryCta: 'See How It Works',
    secondaryScrollTo: 'how-it-works',
    accent: '#0FA8DC',
    accentRgb: '15,168,220',
    bg: 'linear-gradient(135deg, #EDF8FF 0%, #FFFFFF 55%, #F0EDFC 100%)',
    Illustration: RetentionIllustration,
  },
  {
    id: 'science',
    eyebrow: 'Backed by Cognitive Science',
    headlinePlain: 'The Forgetting Curve Is Real.',
    headlineAccent: 'We Fight It Every Day.',
    sub: "Ebbinghaus showed 80% of knowledge fades within 24 hours. Blast's spaced repetition schedules reviews at exactly the right moment — so nothing is lost.",
    primaryCta: 'Start Free Trial',
    primaryTo: '/programs',
    secondaryCta: 'Learn the Science',
    secondaryScrollTo: undefined,
    accent: '#8B5CF6',
    accentRgb: '139,92,246',
    bg: 'linear-gradient(135deg, #F5F0FF 0%, #FFFFFF 55%, #EDF8FF 100%)',
    Illustration: ScienceIllustration,
  },
  {
    id: 'process',
    eyebrow: 'Simple 3-Step Process',
    headlinePlain: 'Upload Notes. Get a Study Plan.',
    headlineAccent: 'Master Every Topic.',
    sub: "Upload coaching notes or recordings. Our AI builds a personalised spaced repetition schedule so every chapter stays in memory before exams.",
    primaryCta: 'Start Free Trial',
    primaryTo: '/programs',
    secondaryCta: 'How It Works',
    secondaryScrollTo: 'how-it-works',
    accent: '#10B981',
    accentRgb: '16,185,129',
    bg: 'linear-gradient(135deg, #EDFFF8 0%, #FFFFFF 55%, #EDF8FF 100%)',
    Illustration: ProcessIllustration,
  },
  {
    id: 'parent',
    eyebrow: 'For Parents',
    headlinePlain: 'Know Exactly How Your Child Is Learning.',
    headlineAccent: 'Every Single Day.',
    sub: "Live dashboard shows study time, retention scores, and topic progress. WhatsApp alerts when your child completes a milestone — no guessing.",
    primaryCta: 'Start Free Trial',
    primaryTo: '/programs',
    secondaryCta: 'Parent Dashboard',
    secondaryScrollTo: 'parent-dashboard',
    accent: '#E91E8C',
    accentRgb: '233,30,140',
    bg: 'linear-gradient(135deg, #FFF0F8 0%, #FFFFFF 55%, #F5F0FF 100%)',
    Illustration: ParentIllustration,
  },
];

// ─── Carousel ───────────────────────────────────────────────────────────────────

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((v) => (v + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, INTERVAL);
    return () => clearInterval(t);
  }, [active]);

  const go = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
    setProgressKey((k) => k + 1);
  };
  const prev = () => go((active - 1 + SLIDES.length) % SLIDES.length);
  const next = () => go((active + 1) % SLIDES.length);

  const slide = SLIDES[active];
  const { Illustration } = slide;

  return (
    <section
      aria-label="Hero"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Per-slide background — cross-fade */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.id}
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: s.bg, zIndex: 0 }}
        />
      ))}

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '88px 24px 40px', width: '100%' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >

            {/* Left: text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-text'}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 14px', borderRadius: '9999px',
                  background: `rgba(${slide.accentRgb},0.12)`,
                  color: slide.accent,
                  fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                  marginBottom: '20px', letterSpacing: '0.025em',
                }}>
                  {slide.eyebrow}
                </span>

                <h1 style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)',
                  lineHeight: 1.1, letterSpacing: '-0.025em',
                  color: '#1C1C28', marginBottom: '20px',
                }}>
                  {slide.headlinePlain}
                  <span style={{
                    display: 'block',
                    fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                    color: slide.accent, marginTop: '6px',
                  }}>
                    {slide.headlineAccent}
                  </span>
                </h1>

                <p style={{
                  fontSize: '1.0625rem', lineHeight: 1.75, color: '#5A5A6E',
                  fontFamily: 'Inter, sans-serif', maxWidth: '480px', marginBottom: '32px',
                }}>
                  {slide.sub}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  <Link
                    to={slide.primaryTo}
                    className="cta cta-blue"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '13px 28px', borderRadius: '10px',
                      fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none', background: slide.accent, color: 'white',
                      boxShadow: `0 6px 20px rgba(${slide.accentRgb},0.30)`,
                    }}
                  >
                    {slide.primaryCta} <ArrowRight size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      slide.secondaryScrollTo
                        ? document.getElementById(slide.secondaryScrollTo)?.scrollIntoView({ behavior: 'smooth' })
                        : undefined
                    }
                    className="cta cta-outline"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '13px 24px', borderRadius: '10px',
                      fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      background: 'transparent', color: '#1C1C28',
                      border: '1.5px solid #DCDCE5', cursor: 'pointer',
                    }}
                  >
                    {slide.secondaryCta}
                  </button>
                </div>

                <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                  Trusted by 5,000+ students and families across India.
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right: illustration — desktop only */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + '-ill'}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="show-lg-blk"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: '100%', maxWidth: '480px' }}>
                  <Illustration />
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Drag-to-swipe overlay */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={(_, info) => {
          if (info.offset.x < -50) next();
          else if (info.offset.x > 50) prev();
        }}
        style={{ position: 'absolute', inset: 0, zIndex: 2, cursor: 'grab' }}
      />

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(236,236,241,0.9)', borderRadius: '50%',
          width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 3, boxShadow: '0 2px 12px rgba(28,28,40,0.15)', padding: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 14L7 9l4-5" stroke="#1C1C28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(236,236,241,0.9)', borderRadius: '50%',
          width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 3, boxShadow: '0 2px 12px rgba(28,28,40,0.15)', padding: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4l4 5-4 5" stroke="#1C1C28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Progress bar + dot controls */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '8px 24px 24px' }}>
        <div style={{ width: '220px', height: '3px', background: 'rgba(28,28,40,0.08)', borderRadius: '999px', overflow: 'hidden' }}>
          <motion.div
            key={progressKey}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            style={{ height: '100%', background: slide.accent, borderRadius: '999px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              animate={{ width: active === i ? '32px' : '8px', background: active === i ? slide.accent : '#DCDCE5' }}
              transition={{ duration: 0.3 }}
              style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
