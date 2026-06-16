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

function Avatar({ name }: { name: string }) {
  return (
    <div
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        flexShrink: 0,
        background: '#E0F5FC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: 700,
        color: '#0FA8DC',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {name.charAt(0)}
    </div>
  );
}

function AuthorLine({ name, role }: { name: string; role: string }) {
  const { rank, location } = parseRole(role);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Avatar name={name} />
      <div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#1C1C28',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#0FA8DC',
            fontFamily: 'Inter, sans-serif',
            margin: 0,
            lineHeight: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          <span>{rank}</span>
          {location && (
            <>
              <span style={{ color: '#D1D5DB', fontWeight: 400 }}>|</span>
              <span>{location}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function FeaturedCard({ card }: { card: CardT }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        border: '1.5px solid #E5E7EB',
        boxShadow: '0 4px 24px rgba(28,28,40,0.07)',
        padding: '40px 44px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background quote watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '12px',
          right: '28px',
          fontSize: '140px',
          lineHeight: 1,
          color: '#F0F7FB',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        "
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Stars */}
        <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: '#F59E0B', fontSize: '16px' }}>
              ★
            </span>
          ))}
        </div>

        {/* Quote text */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#374151',
            lineHeight: 1.8,
            margin: '0 0 28px',
            maxWidth: '700px',
          }}
        >
          "{card.text}"
        </p>

        {/* Author */}
        <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '20px' }}>
          <AuthorLine name={card.name} role={card.role} />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ card }: { card: CardT }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid #E5E7EB',
        boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Cyan quote icon */}
      <div
        aria-hidden="true"
        style={{
          fontSize: '64px',
          lineHeight: 1,
          color: '#0FA8DC',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          userSelect: 'none',
          pointerEvents: 'none',
          marginBottom: '4px',
          opacity: 0.18,
        }}
      >
        "
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: '#F59E0B', fontSize: '13px' }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: '13.5px',
          color: '#5A5A6E',
          lineHeight: 1.75,
          fontFamily: 'Inter, sans-serif',
          margin: '0 0 16px',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}
      >
        "{card.text}"
      </p>

      {/* Author */}
      <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '14px', marginTop: 'auto' }}>
        <AuthorLine name={card.name} role={card.role} />
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
  const featured = all[0];
  const rest = all.slice(1);
  const totalPages = Math.ceil(rest.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const pageCards = rest.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
      {/* Featured hero card */}
      <div style={{ marginBottom: '24px' }}>
        <FeaturedCard card={featured} />
      </div>

      {/* 3-per-page grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '20px',
          alignItems: 'stretch',
        }}
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
