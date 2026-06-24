import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newBanner from '../assets/New Banner 1.png';

const SLIDES = [newBanner, newBanner, newBanner, newBanner];

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blink, setBlink] = useState(false);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    setBlink(false);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setBlink(false);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      setBlink(false);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

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
          {SLIDES.map((slide, index) => (
            <img
              key={slide}
              src={slide}
              alt="Blast Learning hero banner"
              width={2048}
              height={1092}
              loading={index === 0 ? 'eager' : 'lazy'}
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
            bottom: '90px',
            left: '110px',
            zIndex: 3,
          }}
        >
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 36px',
              borderRadius: '10px',
              background: '#0FA8DC',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = '/programs'}
          >
            See How It Works
          </button>
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
