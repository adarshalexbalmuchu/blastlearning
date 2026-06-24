import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const bannerModules = import.meta.glob('../assets/banners/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const SLIDES = Object.entries(bannerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 3);

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blink, setBlink] = useState(false);
  const hasSlides = SLIDES.length > 0;
  const canRotate = SLIDES.length > 1;

  useEffect(() => {
    if (!hasSlides) return;

    // Warm browser cache for all hero slides so transitions feel instant.
    SLIDES.forEach((src) => {
      const img = new Image();
      img.decoding = 'sync';
      img.src = src;
    });
  }, [hasSlides]);

  const goNext = () => {
    if (!canRotate) return;
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    setBlink(false);
  };

  const goPrev = () => {
    if (!canRotate) return;
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setBlink(false);
  };

  useEffect(() => {
    if (!canRotate) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      setBlink(false);
    }, 12000);

    return () => window.clearInterval(timer);
  }, [canRotate]);

  useEffect(() => {
    const blinkInterval = window.setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => window.clearInterval(blinkInterval);
  }, []);

  return (
    <section
      aria-label="Hero banner"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '40px',
      }}
    >
      <Link to="/programs/cbse-plan" aria-label="View CBSE program" style={{ display: 'block', cursor: 'pointer', lineHeight: 0, width: '100%', position: 'relative' }}>
        <div style={{ position: 'relative', boxShadow: '0 8px 32px rgba(28,28,40,0.105)' }}>
          {hasSlides && SLIDES.map((slide, index) => (
            <img
              key={`${slide}-${index}`}
              src={slide}
              alt="Blast Learning hero banner"
              width={2048}
              height={1092}
              loading="eager"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="sync"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: index === 0 ? 'relative' : 'absolute',
                inset: 0,
                opacity: activeIndex === index ? 1 : 0,
                transition: 'opacity 500ms ease',
              }}
            />
          ))}
        </div>

        {/* Secondary CTA - See How It Works (Overlay on Hero) */}
        <div
          style={{
            position: 'absolute',
            bottom: '85px',
            left: '60px',
            zIndex: 3,
          }}
        >
          <motion.button
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                '0 4px 18px rgba(15,168,220,0.28)',
                '0 10px 32px rgba(15,168,220,0.48)',
                '0 4px 18px rgba(15,168,220,0.28)',
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              y: -7,
              scale: 1.04,
              boxShadow: '0 14px 36px rgba(15,168,220,0.55)',
              transition: { type: 'spring', stiffness: 300, damping: 18 },
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '18px 32px',
              borderRadius: '14px',
              background: 'linear-gradient(90deg, #1E9BDA 0%, #0FA8DC 100%)',
              color: 'white',
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em',
            }}
            onClick={() => window.location.href = '/programs'}
          >
            See How It Works
          </motion.button>
        </div>
      </Link>

      {/* Clean Premium Controls - Below Hero */}
      <div
        style={{
          position: 'relative',
          bottom: 'auto',
          left: 'auto',
          transform: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          zIndex: 2,
          marginTop: '24px',
        }}
      >
        {/* Left Button */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1.5px solid rgba(0,0,0,0.2)',
            background: 'rgba(255,255,255,0.9)',
            color: '#1C1C28',
            fontSize: '18px',
            lineHeight: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ←
        </button>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                background: activeIndex === index ? (blink ? '#F03C6F' : 'rgba(240,60,111,0.3)') : 'rgba(0,0,0,0.15)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1.5px solid #F03C6F',
            background: '#F03C6F',
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}
