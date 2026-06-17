import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import newBanner from '../assets/New banner.png';
import banner2 from '../assets/banner 2.webp';
import banner3 from '../assets/banner 3.webp';
import banner4 from '../assets/banner 4.webp';

const INTERVAL = 6000;
const ACCENT   = '#0FA8DC';

const SLIDES = [
  { id: 'b1', src: newBanner, w: 4095, h: 774, alt: 'Boards Are in 90 Days. Every Forgotten Chapter Costs Marks. Blast Learning' },
  { id: 'b2', src: banner2, w: 4095, h: 774, alt: 'Better Learning. Brighter Tomorrow. Blast Learning' },
  { id: 'b3', src: banner3, w: 4095, h: 774, alt: 'CBSE Success, Confident Future. Blast Learning' },
  { id: 'b4', src: banner4, w: 4095, h: 774, alt: 'Learn Smarter. Achieve More. Blast Learning' },
] as const;

// ─── Arrow ───────────────────────────────────────────────────────────────────────
function Arrow({ side, onClick, label }: { side: 'left' | 'right'; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: 'absolute',
        [side]: 12,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 3,
        width: 40, height: 40,
        borderRadius: '50%',
        border: '1px solid rgba(236,236,241,0.85)',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0,
        boxShadow: '0 2px 12px rgba(28,28,40,0.14)',
      }}
    >
      {side === 'left' ? (
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
          <path d="M11 14L7 9l4-5" stroke="#1C1C28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
          <path d="M7 4l4 5-4 5" stroke="#1C1C28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [active, setActive]         = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const ptrX = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((v) => (v + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, INTERVAL);
    return () => clearInterval(t);
  }, [active]);

  const go   = (i: number) => { if (i !== active) { setActive(i); setProgressKey((k) => k + 1); } };
  const prev = () => go((active - 1 + SLIDES.length) % SLIDES.length);
  const next = () => go((active + 1) % SLIDES.length);

  return (
    <section
      aria-label="Hero banners"
      style={{ position: 'relative', width: '100%', overflow: 'hidden', userSelect: 'none' }}
      onPointerDown={(e) => { ptrX.current = e.clientX; }}
      onPointerUp={(e)   => { const dx = e.clientX - ptrX.current; if (dx < -50) next(); else if (dx > 50) prev(); }}
    >
      {/* ── Image stack aspect ratio matches actual export: 4095×774 ── */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4095 / 774', overflow: 'hidden', background: '#f0f4f8' }}>
        {SLIDES.map((slide, i) => (
          <motion.div
            key={slide.id}
            aria-hidden={i !== active}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={slide.w}
              height={slide.h}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding={i === 0 ? 'sync' : 'async'}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        ))}
      </div>

      <Arrow side="left"  onClick={prev} label="Previous banner" />
      <Arrow side="right" onClick={next} label="Next banner" />

      {/* ── Dot pills + auto-progress bar ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '12px 24px 16px' }}>
        <div style={{ width: 220, height: 3, background: 'rgba(28,28,40,0.1)', borderRadius: 999, overflow: 'hidden' }}>
          <motion.div
            key={progressKey}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            style={{ height: '100%', background: ACCENT, borderRadius: 999 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              animate={{ width: active === i ? 32 : 8, background: active === i ? ACCENT : '#DCDCE5' }}
              transition={{ duration: 0.3 }}
              style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
