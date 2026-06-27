import { useState, useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  desktopGridClass?: string;
  desktopGridStyle?: React.CSSProperties;
}

export default function MobileCarousel({ children, desktopGridClass = '', desktopGridStyle }: Props) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = Array.isArray(children)
    ? children.flat().filter(Boolean)
    : [children];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || items.length <= 1) return;
    const cards = container.querySelectorAll<HTMLElement>('[data-mc-idx]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = parseInt((entry.target as HTMLElement).dataset.mcIdx ?? '0');
            setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.5 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [items.length]);

  if (items.length <= 1) {
    return (
      <div className={desktopGridClass} style={desktopGridStyle}>
        {children}
      </div>
    );
  }

  return (
    <>
      {/* Desktop grid — hidden on mobile via CSS */}
      <div className={`mc-desktop-grid ${desktopGridClass}`} style={desktopGridStyle}>
        {children}
      </div>

      {/* Mobile carousel — hidden on desktop via CSS */}
      <div className="mc-mobile-carousel">
        <div
          ref={scrollRef}
          className="mc-scroll-track"
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            overflowY: 'hidden',       // prevent vertical axis conflict
            scrollSnapType: 'x proximity', // proximity = no forced hard snap
            touchAction: 'pan-x',      // browser commits to horizontal axis only
            padding: '4px 16px 16px 16px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              data-mc-idx={i}
              style={{
                flex: '0 0 88%',       // no duplicate width — flex-basis is enough
                scrollSnapAlign: 'start',
                boxSizing: 'border-box',
                minWidth: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
          {items.map((_, i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: i === active ? '16px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: i === active ? '#E8135A' : '#DCDCE5',
                transition: 'background 0.3s, width 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
