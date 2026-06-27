"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadingMarker from "../HeadingMarker";

type CardT = {
  image?: string;
  name: string;
  role: string;
  planName?: string;
  text: string;
};

// Returns the short plan label shown in the tag
function normalizePlanTag(raw: string): string {
  if (/^cbse/i.test(raw)) return 'CBSE';
  if (/^sat/i.test(raw)) return 'SAT Prep';
  if (/^math\s*genius/i.test(raw)) return 'Math Genius';
  if (/^english\s*mastery/i.test(raw)) return 'English Mastery';
  if (/^parent/i.test(raw)) return 'Parent';
  return raw;
}

// "Class 10, CBSE Plan · Bangalore" → { tag:"CBSE",     authorLine:"A Student of Class 10 from Bangalore" }
// "Parent · Class 11 CBSE, Delhi"   → { tag:"Parent",   authorLine:"A Parent from Delhi" }
// "CBSE Class 10" / "SAT Prep Pass" → { tag:"CBSE"/…,   authorLine:null } (card.name already correct)
function parseRole(role: string): { tag: string; authorLine: string | null } {
  if (/^parent/i.test(role)) {
    const sep = role.indexOf(' · ');
    if (sep !== -1) {
      const rest = role.slice(sep + 3);
      const comma = rest.lastIndexOf(', ');
      const location = comma !== -1 ? rest.slice(comma + 2) : '';
      return { tag: 'Parent', authorLine: location ? `A Parent from ${location}` : null };
    }
    return { tag: 'Parent', authorLine: null };
  }

  const dotSep = role.indexOf(' · ');
  if (dotSep !== -1) {
    const before = role.slice(0, dotSep);
    const city   = role.slice(dotSep + 3);
    const comma  = before.indexOf(', ');
    if (comma !== -1) {
      const classNum = before.slice(0, comma);
      const planRaw  = before.slice(comma + 2);
      return { tag: normalizePlanTag(planRaw), authorLine: `A Student of ${classNum} from ${city}` };
    }
    return { tag: normalizePlanTag(before), authorLine: null };
  }

  // "CBSE Class 10", "SAT Prep Pass" — card.name already has the right format
  return { tag: normalizePlanTag(role), authorLine: null };
}

function TestimonialCard({ card, cardIndex }: { card: CardT; cardIndex: number }) {
  const markerAccent = cardIndex % 2 === 0 ? '#E8135A' : '#0FA8DC';
  const { tag, authorLine } = parseRole(card.role);
  const displayAuthor = authorLine ?? card.name;

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E8E8F0',
        boxShadow: '0 2px 8px rgba(28,28,40,0.05)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '240px',
        boxSizing: 'border-box',
      }}
    >
      {/* Decorative quote mark */}
      <div style={{ marginBottom: '4px' }}>
        <span
          aria-hidden="true"
          style={{
            fontSize: '44px',
            lineHeight: 0.75,
            color: '#D7DAE1',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            userSelect: 'none',
            display: 'inline-block',
          }}
        >
          ❝
        </span>
      </div>

      {/* Plan tag — short program name only */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <HeadingMarker text={tag} fontSize="11px" marginBottom="0" accent={markerAccent} alignItems="center" noWrap />
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: '15px',
          color: '#111111',
          lineHeight: 1.625,
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
          marginTop: 'auto',
        }}
      >
        <p style={{ fontSize: '12px', margin: 0, lineHeight: 1.4 }}>
          <span style={{ color: '#E8135A', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
            {displayAuthor}
          </span>
        </p>
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
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  const pageCards = all.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const prevDisabled = page === 0;
  const nextDisabled = page === totalPages - 1;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
      {/* 3-per-page grid */}
      <div
        className="testimonials-grid"
        style={{
          marginBottom: '24px',
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          alignItems: 'stretch',
        }}
      >
        {pageCards.map((card, i) => (
          <TestimonialCard key={`${page}-${i}`} card={card} cardIndex={page * PAGE_SIZE + i} />
        ))}
      </div>

      {/* Prev / Next */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={prevDisabled}
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1.5px solid ${prevDisabled ? '#E5E7EB' : prevHover ? '#0FA8DC' : '#CBD5E1'}`,
              background: prevDisabled ? '#F9FAFB' : prevHover ? '#E0F5FC' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: prevDisabled ? 'not-allowed' : 'pointer',
              color: prevDisabled ? '#CBD5E1' : prevHover ? '#0FA8DC' : '#1C1C28',
              transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
            }}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={nextDisabled}
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1.5px solid ${nextDisabled ? '#E5E7EB' : nextHover ? '#0FA8DC' : '#CBD5E1'}`,
              background: nextDisabled ? '#F9FAFB' : nextHover ? '#E0F5FC' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: nextDisabled ? 'not-allowed' : 'pointer',
              color: nextDisabled ? '#CBD5E1' : nextHover ? '#0FA8DC' : '#1C1C28',
              transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
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
