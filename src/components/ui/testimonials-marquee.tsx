"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadingMarker from "../HeadingMarker";

type CardT = {
  image?: string;
  name: string;
  role: string;
  text: string;
};

function parseRole(role: string): { classInfo: string; planName: string; location: string } {
  const [rankPart, location = ''] = role.split(' · ');
  const commaIdx = rankPart.indexOf(', ');
  if (commaIdx !== -1) {
    return {
      classInfo: rankPart.slice(0, commaIdx),
      planName: rankPart.slice(commaIdx + 2),
      location,
    };
  }
  return { classInfo: rankPart, planName: '', location };
}

function TestimonialCard({ card, cardIndex }: { card: CardT; cardIndex: number }) {
  const { classInfo, planName, location } = parseRole(card.role);
  const markerAccent = cardIndex === 1 ? '#0FA8DC' : '#E8135A';

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E8E8F0',
        boxShadow: '0 2px 10px rgba(28,28,40,0.04)',
        padding: '18px 18px 16px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '240px',
        boxSizing: 'border-box',
      }}
    >
      {/* Plan label + decorative quote mark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '10px',
          marginBottom: '8px',
        }}
      >
        {planName ? (
          <HeadingMarker text={planName} fontSize="11px" marginBottom="0" accent={markerAccent} />
        ) : (
          <span />
        )}
        <span
          aria-hidden="true"
          style={{
            fontSize: '42px',
            lineHeight: 0.75,
            color: '#D7DAE1',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          ❝
        </span>
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: '13px',
          color: '#111111',
          lineHeight: 1.55,
          fontFamily: 'Inter, sans-serif',
          margin: '0 0 14px',
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
          paddingTop: '10px',
          display: 'flex',
          alignItems: 'flex-start',
          marginTop: 'auto',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              margin: 0,
              lineHeight: 1.4,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: '#111111', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
              {classInfo}
            </span>
            {location && (
              <>
                <span style={{ color: '#111111', fontWeight: 400 }}>|</span>
                <span style={{ color: '#111111', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
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
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
      {/* 3-per-page grid */}
      <div
        className="testimonials-grid"
        style={{ marginBottom: '24px', display: 'grid', gap: '20px' }}
      >
        {pageCards.map((card, i) => (
          <TestimonialCard key={`${page}-${i}`} card={card} cardIndex={i} />
        ))}
      </div>

      {/* Prev / Next */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
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
