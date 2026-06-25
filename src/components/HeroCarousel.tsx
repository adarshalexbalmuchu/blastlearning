import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const bannerModules = import.meta.glob('../assets/banners/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const SLIDES = Object.entries(bannerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
;

const PRIMARY_CTA_CONFIG = [
  { text: 'Explore CBSE Program', to: '/programs/cbse-plan' },
  { text: 'Start Your Journey Now', to: '/programs/english-mastery' },
  { text: 'Try the GAP Assessment', to: '/programs/math-genius' },
  { text: 'Start the 40 Day Free Trial', to: '/programs' },
];

const HERO_DOT_COLORS = ['#0FA8DC', '#0FA8DC', '#E8135A', '#E8135A'];

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blink, setBlink] = useState(false);
  const hasSlides = SLIDES.length > 0;
  const canRotate = SLIDES.length > 1;
  const activePrimaryCta = PRIMARY_CTA_CONFIG[activeIndex] ?? { text: 'Start Your Journey Today', to: '/programs' };
  const activeDotColor = HERO_DOT_COLORS[activeIndex] ?? '#0FA8DC';

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
    }, 20000);

    return () => window.clearInterval(timer);
  }, [canRotate]);

  useEffect(() => {
    const blinkInterval = window.setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => window.clearInterval(blinkInterval);
  }, []);

  const heroCtaButtonStyle = {
    height: '48px',
    minHeight: '48px',
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 1,
    boxSizing: 'border-box',
  } as const;

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
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '2048 / 1092',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(28,28,40,0.105)',
          }}
        >
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
                height: '100%',
                display: 'block',
                position: 'absolute',
                inset: 0,
                objectFit: 'cover',
                objectPosition: index === 0 ? 'center calc(50% - 1px)' : 'center center',
                opacity: activeIndex === index ? 1 : 0,
                transition: 'opacity 500ms ease',
              }}
            />
          ))}
        </div>

        <span
          aria-hidden="true"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', position: 'absolute', top: '152px', left: '108px', zIndex: 3, pointerEvents: 'none' }}
        >
          <span style={{ width: '3.5px', height: '3.5px', borderRadius: '9999px', background: activeDotColor }} />
          <span style={{ width: '4.5px', height: '4.5px', borderRadius: '9999px', background: activeDotColor }} />
          <span style={{ width: '5.5px', height: '5.5px', borderRadius: '9999px', background: activeDotColor }} />
          <span style={{ width: '8.5px', height: '2.5px', borderRadius: '9999px', background: activeDotColor }} />
          <span style={{ width: '13.5px', height: '2.5px', borderRadius: '9999px', background: activeDotColor }} />
        </span>

        {/* Hero CTAs */}
        <div
          style={{
            position: 'absolute',
            bottom: '135px',
            left: '90px',
            zIndex: 3,
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
          className="hero-cta-wrap"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Link
              to={activePrimaryCta.to}
              className="cta"
              style={{
                background: 'linear-gradient(90deg, #E8135A 0%, #0FA8DC 100%)',
                color: '#FFFFFF',
                border: 'none',
                boxShadow: 'none',
                ...heroCtaButtonStyle,
              }}
            >
              {activePrimaryCta.text}
            </Link>
            <span style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', fontWeight: 500, lineHeight: 1.2, textAlign: 'center' }}>
              No credit card required
            </span>
          </div>
          <Link
            to="/programs"
            className="cta cta-outline"
            style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: 0, ...heroCtaButtonStyle }}
          >
            See How It Works
          </Link>
        </div>
      </div>

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
