import React, { useState } from 'react';

const PINK   = '#E8135A';
const BLUE   = '#0FA8DC';
const DARK   = '#1C1C28';
const NAVY   = '#0D1F3C';
const MUTED  = '#6B7280';
const BORDER = '#E5E7EB';

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

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="8" cy="8" r="8" fill={PINK} fillOpacity="0.12" />
    <path d="M5 8.5l2 2 4-4" stroke={PINK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="8" cy="8" r="8" fill="#F3F4F6" />
    <path d="M5.5 8h5" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function ComparisonTable() {
  const [hovered, setHovered] = useState<number | null>(null);
  const lastIdx = rows.length - 1;

  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          background: '#FFFFFF',
          overflow: 'hidden',
          minWidth: '560px',
        }}
      >
        {/* Gradient top accent bar */}
        <div style={{ height: '3px', width: '100%', background: `linear-gradient(90deg, ${PINK} 0%, ${BLUE} 100%)` }} />

        <table
          style={{
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '38%' }} />
            <col style={{ width: '42%' }} />
          </colgroup>

          <thead>
            <tr>
              {/* Col1 — empty */}
              <th
                style={{
                  padding: '20px',
                  background: '#FFFFFF',
                  borderBottom: `1px solid ${BORDER}`,
                  fontWeight: 'normal',
                }}
              />

              {/* Col2 — The Usual Way */}
              <th
                style={{
                  padding: '18px 24px',
                  textAlign: 'left',
                  background: '#F7F8FA',
                  borderBottom: `1px solid ${BORDER}`,
                  borderRight: `1px solid ${BORDER}`,
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                  }}
                >
                  The Usual Way
                </span>
                <span style={{ fontSize: '13px', color: MUTED, fontFamily: 'Inter, sans-serif' }}>
                  Most tutoring platforms
                </span>
              </th>

              {/* Col3 — Blast Learning (dark navy) */}
              <th
                style={{
                  padding: '18px 24px',
                  textAlign: 'left',
                  background: NAVY,
                  borderBottom: `2px solid ${PINK}`,
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: PINK,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.13em',
                      textTransform: 'uppercase',
                      color: PINK,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Blast Learning
                  </span>
                </div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                  Science-backed retention
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const isHovered = hovered === i;
              const isLast    = i === lastIdx;
              const bg        = isHovered ? '#F9FAFB' : '#FFFFFF';
              const blastBg   = isHovered ? '#FFF6F9' : '#FFFFFF';

              return (
                <tr
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Category label */}
                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#9CA3AF',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      verticalAlign: 'top',
                      background: bg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.category}
                  </td>

                  {/* Usual */}
                  <td
                    style={{
                      padding: '18px 24px',
                      verticalAlign: 'top',
                      background: bg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      borderRight: `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <DashIcon />
                      <span style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.65 }}>
                        {row.usual}
                      </span>
                    </div>
                  </td>

                  {/* Blast */}
                  <td
                    style={{
                      padding: '18px 24px',
                      verticalAlign: 'top',
                      background: blastBg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      borderLeft: `2px solid ${PINK}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckIcon />
                      <span style={{ fontSize: '0.875rem', color: DARK, lineHeight: 1.65, fontWeight: 500 }}>
                        {row.blast}
                      </span>
                    </div>
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
