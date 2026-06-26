import React, { useState } from 'react';
import HeadingMarker from './HeadingMarker';

// Design tokens extracted directly from PricingCard
const PINK        = '#E8135A';   // token A — top border + pink label accent
const PINK_LIGHT  = '#FFF5F8';   // lightest pink tint (Col3 background)
const PINK_HOVER  = '#FCE8EF';   // one step deeper for Col3 hover
const DARK        = '#1C1C28';   // token G — card heading color
const BODY_MUTED  = '#4D5562';   // token H — feature list text color
const BORDER      = '#E5E7EB';   // token D — card border + internal divider

const rows = [
  {
    category: 'Foundation',
    usual: 'Content delivered through video or live class',
    blast: 'A methodology built on cognitive science: spaced repetition, retrieval practice, interleaving, and metacognitive monitoring',
  },
  {
    category: 'Where a student starts',
    usual: 'Lessons follow the grade printed on the textbook',
    blast: 'A GAP Assessment maps what a student actually knows before a single lesson is assigned',
  },
  {
    category: 'When a doubt comes up',
    usual: 'Waits for the next scheduled class',
    blast: 'AI Tutor resolves it immediately, calibrated to exactly where understanding broke down',
  },
  {
    category: 'Staying consistent',
    usual: 'A schedule the student has to enforce alone',
    blast: 'Study Buddy pairs a human partner into the same study plan',
  },
  {
    category: 'Exam day',
    usual: 'Content knowledge alone',
    blast: 'Content knowledge, plus the focus and composure Mind Coach is built to train',
  },
  {
    category: 'Curriculum currency',
    usual: 'Updated periodically after CBSE revisions take effect',
    blast: 'Mapped to the NEP 2020 structure from the first release, not retrofitted afterward',
  },
  {
    category: 'Evidence',
    usual: 'Outcomes claimed in marketing',
    blast: '500+ peer-reviewed studies, built in collaboration with IBM and McGraw-Hill',
  },
];

export default function ComparisonTable() {
  const [hovered, setHovered] = useState<number | null>(null);
  const lastIdx = rows.length - 1;

  return (
    /* Outer wrapper: enables horizontal scroll on mobile only */
    <div style={{ overflowX: 'auto', width: '100%' }}>
      {/* Card shell — identical structure to PricingCard */}
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
          background: '#FFFFFF',
          overflow: 'hidden',
          minWidth: '560px',
        }}
      >
        {/* Top accent bar — same as pricing card (token E): 3px pink stripe */}
        <div style={{ height: '3px', width: '100%', background: PINK }} />

        <table
          style={{
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <colgroup>
            <col style={{ width: '22%' }} />
            <col style={{ width: '36%' }} />
            <col style={{ width: '42%' }} />
          </colgroup>

          <thead>
            <tr>
              {/* Col1 header — empty */}
              <th
                style={{
                  padding: '16px 20px',
                  background: '#FFFFFF',
                  borderBottom: `1px solid ${BORDER}`,
                  fontWeight: 'normal',
                }}
              />

              {/* Col2 header — HeadingMarker, muted (no accent = default blue-gray) */}
              <th
                style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  background: '#FFFFFF',
                  borderBottom: `1px solid ${BORDER}`,
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                }}
              >
                <HeadingMarker text="The Usual Approach" fontSize="11px" marginBottom="0" />
              </th>

              {/* Col3 header — HeadingMarker pink, pink-tinted bg */}
              <th
                style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  background: '#FFFFFF',
                  borderBottom: `1px solid ${PINK}`,
                  borderLeft: `1px solid ${PINK}`,
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                }}
              >
                <HeadingMarker text="Blast Learning" fontSize="11px" marginBottom="0" accent={PINK} />
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const isHovered = hovered === i;
              const isLast = i === lastIdx;
              const defaultBg = '#FFFFFF';
              const hoverBg = '#F9FAFB';

              return (
                <tr
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Col1 — category label */}
                  <td
                    style={{
                      padding: '20px 20px',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: DARK,
                      verticalAlign: 'top',
                      background: isHovered ? hoverBg : defaultBg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.category}
                  </td>

                  {/* Col2 — usual approach */}
                  <td
                    style={{
                      padding: '20px 20px',
                      fontSize: '0.92rem',
                      color: BODY_MUTED,
                      lineHeight: 1.65,
                      verticalAlign: 'top',
                      background: isHovered ? hoverBg : defaultBg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      borderRight: `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.usual}
                  </td>

                  {/* Col3 — Blast Learning */}
                  <td
                    style={{
                      padding: '20px 20px',
                      fontSize: '0.92rem',
                      color: DARK,
                      lineHeight: 1.65,
                      verticalAlign: 'top',
                      background: isHovered ? hoverBg : defaultBg,
                      borderBottom: isLast ? 'none' : `1px solid #F9C0D0`,
                      borderLeft: `2px solid ${PINK}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.blast}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
