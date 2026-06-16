"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CardT = {
  image?: string;
  name: string;
  role: string;
  text: string;
};

function parseRole(role: string): { rank: string; location: string } {
  const parts = role.split(' · ');
  return { rank: parts[0] ?? role, location: parts[1] ?? '' };
}

function TestimonialCard({ card }: { card: CardT }) {
  const { rank, location } = parseRole(card.role);
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid #E8ECF0',
        boxShadow: '0 2px 16px rgba(28,28,40,0.06)',
        padding: '28px 26px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Decorative large quote */}
      <div
        aria-hidden="true"
        style={{
          fontSize: '88px',
          lineHeight: 0.75,
          color: '#0FA8DC',
          fontFamily: 'Georgia, serif',
          fontWeight: 900,
          marginBottom: '14px',
          opacity: 0.12,
          userSelect: 'none',
        }}
      >
        "
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: '#F59E0B', fontSize: '15px' }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.8,
          fontFamily: 'Inter, sans-serif',
          margin: '0 0 22px',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 6,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}
      >
        {card.text}
      </p>

      {/* Author */}
      <div
        style={{
          borderTop: '1px solid #F3F4F6',
          paddingTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0FA8DC 0%, #0891B2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '17px',
            fontWeight: 700,
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            flexShrink: 0,
          }}
        >
          {card.name.charAt(0)}
        </div>
        <div>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#111827',
              margin: '0 0 3px',
              lineHeight: 1.3,
            }}
          >
            {card.name}
          </p>
          <p
            style={{
              fontSize: '12px',
              margin: 0,
              lineHeight: 1.4,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                color: '#0FA8DC',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {rank}
            </span>
            {location && (
              <>
                <span style={{ color: '#D1D5DB', fontWeight: 400 }}>|</span>
                <span
                  style={{
                    color: '#0FA8DC',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {location}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 3;

export default function TestimonialsMarquee({
  row1,
  row2,
}: {
  row1: CardT[];
  row2: CardT[];
}) {
  const all = React.useMemo(() => [...row1, ...row2], [row1, row2]);
  const totalPages = Math.ceil(all.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const pageCards = all.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
      {/* 3-per-page grid */}
      <div
        className="testimonials-grid"
        style={{ marginBottom: '24px' }}
      >
        {pageCards.map((card, i) => (
          <TestimonialCard key={`${page}-${i}`} card={card} />
        ))}
      </div>

      {/* Prev / Next */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1.5px solid ${page === 0 ? '#E5E7EB' : '#CBD5E1'}`,
              background: page === 0 ? '#F9FAFB' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: page === 0 ? 'not-allowed' : 'pointer',
              color: page === 0 ? '#CBD5E1' : '#1C1C28',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1.5px solid ${page === totalPages - 1 ? '#E5E7EB' : '#CBD5E1'}`,
              background: page === totalPages - 1 ? '#F9FAFB' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
              color: page === totalPages - 1 ? '#CBD5E1' : '#1C1C28',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
