import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// .png excluded on purpose — the originals in this folder are unoptimized
// 5990x3200 source files kept only for reference; the real banners are the
// resized/compressed .jpg versions the pipeline should always pick up.
const bannerModules = import.meta.glob('../assets/banners/*.{jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const BANNER_ORDER = [1, 3, 2, 4];

// Only Math Genius Maker (HB 3) and Methodology (HB 4) slides are shown —
// hidden, not deleted. Add the index back here (and to PRIMARY_CTA_CONFIG /
// HERO_DOT_COLORS below, in the same order) to re-enable a banner.
const VISIBLE_BANNER_INDEXES = [3, 4];

function getBannerIndex(path: string): number {
  const match = path.match(/(?:hb|hero\s*banner|banner)\s*(\d+)/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const SLIDES = Object.entries(bannerModules)
  .filter(([path]) => VISIBLE_BANNER_INDEXES.includes(getBannerIndex(path)))
  .sort(([a], [b]) => {
    const aIndex = getBannerIndex(a);
    const bIndex = getBannerIndex(b);
    const aPos = BANNER_ORDER.indexOf(aIndex);
    const bPos = BANNER_ORDER.indexOf(bIndex);

    if (aPos !== -1 && bPos !== -1) return aPos - bPos;
    if (aPos !== -1) return -1;
    if (bPos !== -1) return 1;
    return a.localeCompare(b);
  })
  .map(([, src]) => src)
;

// One entry per visible slide, in the same order as SLIDES above
// (HB 3 — Math Genius Maker, then HB 4 — Methodology).
const PRIMARY_CTA_CONFIG = [
  { text: 'Try The GAP Assessment', to: '/programs/math-genius' },
  { text: 'See How It Works', to: '/programs' },
];

const HERO_DOT_COLORS = ['#E8135A', '#E8135A'];

// Left offset of the accent dots, tuned per slide since the eyebrow label is
// baked into each banner image at a slightly different spot — Math Genius
// Maker's label sits further right than Methodology's.
const HERO_DOT_LEFT = ['9.3%', '7.5%'];

// Top offset of the accent dots, tuned per slide — Math Genius Maker's is
// lifted 1.5% higher than the shared default.
const HERO_DOT_TOP = ['15.2%', '16.7%'];

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blink, setBlink] = useState(false);
  const hasSlides = SLIDES.length > 0;
  const canRotate = SLIDES.length > 1;
  const isLastSlide = hasSlides && activeIndex === SLIDES.length - 1;
  const activePrimaryCta = PRIMARY_CTA_CONFIG[activeIndex] ?? { text: 'Start Your Journey Today', to: '/programs' };
  const activeDotColor = HERO_DOT_COLORS[activeIndex] ?? '#0FA8DC';
  const activeDotLeft = HERO_DOT_LEFT[activeIndex] ?? '8.5%';
  const activeDotTop = HERO_DOT_TOP[activeIndex] ?? '16.7%';
  const firstBannerDotNudge = activeIndex === 0 ? 'translate(0.5px, -1px)' : undefined;

  useEffect(() => {
    if (!hasSlides) return;

    // Defer pre-warming non-visible slides until after initial paint
    const timer = window.setTimeout(() => {
      SLIDES.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, 2000);
    return () => window.clearTimeout(timer);
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
            background: '#FFFFFF',
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
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              decoding={index === 0 ? 'sync' : 'async'}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                position: 'absolute',
                inset: 0,
                objectFit: 'contain',
                objectPosition: 'center center',
                opacity: activeIndex === index ? 1 : 0,
                transition: 'opacity 500ms ease',
              }}
            />
          ))}

          {/* Slide accent dots — anchored to the image itself (percentage
              position) so it stays put at the same spot on the banner art
              at every width, instead of tracking the CTA button box below. */}
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(0px, 0.35vw, 4.5px)',
              position: 'absolute',
              top: activeDotTop,
              left: activeDotLeft,
              zIndex: 2,
              pointerEvents: 'none',
              transform: firstBannerDotNudge,
            }}
          >
            <span style={{ width: 'clamp(0px, 0.27vw, 3.5px)', height: 'clamp(0px, 0.27vw, 3.5px)', borderRadius: '9999px', background: activeDotColor }} />
            <span style={{ width: 'clamp(0px, 0.35vw, 4.5px)', height: 'clamp(0px, 0.35vw, 4.5px)', borderRadius: '9999px', background: activeDotColor }} />
            <span style={{ width: 'clamp(0px, 0.43vw, 5.5px)', height: 'clamp(0px, 0.43vw, 5.5px)', borderRadius: '9999px', background: activeDotColor }} />
            <span style={{ width: 'clamp(0px, 0.66vw, 8.5px)', height: 'clamp(0px, 0.2vw, 2.5px)', borderRadius: '9999px', background: activeDotColor }} />
            <span style={{ width: 'clamp(0px, 1.05vw, 13.5px)', height: 'clamp(0px, 0.2vw, 2.5px)', borderRadius: '9999px', background: activeDotColor }} />
          </span>

          {/* Mobile-only overlay controls — inside image, clears the gap below */}
          {canRotate && (
            <div className="hero-slide-overlay-controls">
              <button type="button" onClick={goPrev} className="hero-ctrl-mob" aria-label="Previous slide">←</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {SLIDES.map((_, index) => (
                  <button
                    key={`ov-dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: activeIndex === index ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      border: 'none',
                      padding: 0,
                      background: activeIndex === index ? '#F03C6F' : 'rgba(255,255,255,0.55)',
                      cursor: 'pointer',
                      transition: 'width 0.3s, background 0.3s',
                    }}
                  />
                ))}
              </div>
              <button type="button" onClick={goNext} className="hero-ctrl-mob" aria-label="Next slide">→</button>
            </div>
          )}
        </div>

        {/* Hero CTAs */}
        <div
          style={{
            position: 'absolute',
            bottom: '165px',
            left: '90px',
            zIndex: 3,
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
          className="hero-cta-wrap hero-cta-floating"
        >
          <div className="hero-controls-mobile" aria-label="Hero controls">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="hero-control-btn hero-control-prev"
            >
              ←
            </button>
            <div className="hero-control-dots" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {SLIDES.map((_, index) => (
                <button
                  key={`mobile-dot-${index}`}
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
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="hero-control-btn hero-control-next"
            >
              →
            </button>
          </div>

          <div className="hero-cta-actions" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', position: 'relative', top: '-35px' }}>
          <div
            className="hero-cta-primary-wrap"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Link
              to={activePrimaryCta.to}
              className="cta hero-cta-primary"
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
            <span className="hero-cta-note" style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', fontWeight: 500, lineHeight: 1.2, textAlign: 'center' }}>
              No credit card required
            </span>
          </div>
          {!isLastSlide && (
            <Link
              to="/programs"
              className="cta cta-outline hero-cta-secondary"
              style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                ...heroCtaButtonStyle,
              }}
            >
              See How It Works
            </Link>
          )}
          </div>
        </div>
      </div>

      {/* Clean Premium Controls - Below Hero */}
      <div
        className="hero-controls-main"
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
                width: activeIndex === index ? '20px' : '6px',
                height: '6px',
                borderRadius: '9999px',
                border: 'none',
                background: activeIndex === index ? '#F03C6F' : 'rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'width 0.3s, background 0.3s',
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
