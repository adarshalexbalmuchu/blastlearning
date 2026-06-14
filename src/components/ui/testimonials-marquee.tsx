"use client";

import React from "react";

type CardT = {
  image: string;
  name: string;
  role: string;
  text: string;
};

const Card = ({ card }: { card: CardT }) => (
  <div
    style={{
      width: '300px',
      flexShrink: 0,
      margin: '0 12px',
      padding: '20px',
      borderRadius: '16px',
      background: '#FFFFFF',
      border: '1.5px solid #ECECF1',
      boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}
  >
    {/* Stars */}
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: '#F59E0B', fontSize: '13px' }}>★</span>
      ))}
    </div>

    {/* Quote */}
    <p
      style={{
        fontSize: '13.5px',
        color: '#5A5A6E',
        lineHeight: 1.75,
        fontFamily: 'Inter, sans-serif',
        margin: 0,
        flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
      }}
    >
      "{card.text}"
    </p>

    {/* Author */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px solid #F3F4F6' }}>
      <img
        src={card.image}
        alt={card.name}
        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
      />
      <div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif', margin: 0, lineHeight: 1.3 }}>
          {card.name}
        </p>
        <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0, lineHeight: 1.4 }}>
          {card.role}
        </p>
      </div>
    </div>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 30,
}: {
  data: CardT[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Left fade */}
      <div style={{ pointerEvents: 'none', position: 'absolute', left: 0, top: 0, height: '100%', width: '120px', zIndex: 10, background: 'linear-gradient(to right, #F8F9FA, transparent)' }} />
      {/* Scrolling track */}
      <div
        style={{
          display: 'flex',
          minWidth: '200%',
          padding: '8px 0',
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      {/* Right fade */}
      <div style={{ pointerEvents: 'none', position: 'absolute', right: 0, top: 0, height: '100%', width: '120px', zIndex: 10, background: 'linear-gradient(to left, #F8F9FA, transparent)' }} />
    </div>
  );
}

export default function TestimonialsMarquee({
  row1,
  row2,
}: {
  row1: CardT[];
  row2: CardT[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <MarqueeRow data={row1} reverse={false} speed={32} />
        <MarqueeRow data={row2} reverse={true} speed={28} />
      </div>
    </>
  );
}
