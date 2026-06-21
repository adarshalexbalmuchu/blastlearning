import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../assets/Hero banner.png';
import bannerOne from '../assets/Banner 3.png';
import bannerTwo from '../assets/Banner 4.png';

const SLIDES = [heroBanner, bannerOne, bannerTwo];

// ─── Carousel ────────────────────────────────────────────────────────────────────
export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Hero banner"
      style={{
        position: 'relative',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        overflow: 'hidden',
      }}
    >
      <Link to="/programs" aria-label="View all programs" style={{ display: 'block', cursor: 'pointer', lineHeight: 0 }}>
        <div style={{ position: 'relative' }}>
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
      </Link>
    </section>
  );
}
