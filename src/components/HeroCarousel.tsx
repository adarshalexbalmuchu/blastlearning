import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const INTERVAL = 7500;

// ─── Slide data ─────────────────────────────────────────────────────────────────

interface SlideData {
  id: string;
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  sub: string;
  accent: string;
  accentRgb: string;
  bg: string;
}

const SLIDES: SlideData[] = [
  {
    id: 'retention',
    eyebrow: 'AI-Powered Retention',
    headlinePlain: 'Your Child Retains Only 10% of Coaching.',
    headlineAccent: 'We Lift It to 91%.',
    sub: 'Most students forget what they learn within a week. Blast uses proven retention science to help students remember more and perform better.',
    accent: '#0FA8DC',
    accentRgb: '15,168,220',
    bg: 'linear-gradient(135deg, #EDF8FF 0%, #FFFFFF 55%, #F0EDFC 100%)',
  },
  {
    id: 'science',
    eyebrow: 'Backed by Cognitive Science',
    headlinePlain: 'The Forgetting Curve Is Real.',
    headlineAccent: 'We Fight It Every Day.',
    sub: "Ebbinghaus showed 80% of knowledge fades within 24 hours. Blast's spaced repetition schedules reviews at exactly the right moment — so nothing is lost.",
    accent: '#8B5CF6',
    accentRgb: '139,92,246',
    bg: 'linear-gradient(135deg, #F5F0FF 0%, #FFFFFF 55%, #EDF8FF 100%)',
  },
  {
    id: 'process',
    eyebrow: 'Simple 3-Step Process',
    headlinePlain: 'Upload Notes. Get a Study Plan.',
    headlineAccent: 'Master Every Topic.',
    sub: "Upload coaching notes or recordings. Our AI builds a personalised spaced repetition schedule so every chapter stays in memory before exams.",
    accent: '#10B981',
    accentRgb: '16,185,129',
    bg: 'linear-gradient(135deg, #EDFFF8 0%, #FFFFFF 55%, #EDF8FF 100%)',
  },
  {
    id: 'parent',
    eyebrow: 'For Parents',
    headlinePlain: 'Know Exactly How Your Child Is Learning.',
    headlineAccent: 'Every Single Day.',
    sub: "Live dashboard shows study time, retention scores, and topic progress. WhatsApp alerts when your child completes a milestone — no guessing.",
    accent: '#E91E8C',
    accentRgb: '233,30,140',
    bg: 'linear-gradient(135deg, #FFF0F8 0%, #FFFFFF 55%, #F5F0FF 100%)',
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

                <div style={{ marginBottom: '18px' }}>
                  <button
                    type="button"
                    onClick={() => document.getElementById('programs-preview')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '13px 28px', borderRadius: '10px',
                      fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      background: slide.accent, color: 'white', border: 'none', cursor: 'pointer',
                      boxShadow: `0 6px 20px rgba(${slide.accentRgb},0.30)`,
                    }}
                  >
                    See Plans <ArrowRight size={16} />
                  </button>
                </div>

                <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                  Trusted by 5,000+ students and families across India.
                </p>
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
