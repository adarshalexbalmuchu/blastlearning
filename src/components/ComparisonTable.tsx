import React, { useState } from 'react';
import HeadingMarker from './HeadingMarker';

const PINK       = '#E8135A';
const DARK       = '#1C1C28';
const BODY_MUTED = '#6B7280';
const BORDER     = '#E5E7EB';

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
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <div
        style={{
          border: `1px solid ${BORDER}`,
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          background: '#FFFFFF',
          overflow: 'hidden',
          minWidth: '560px',
        }}
      >
        <div style={{ height: '3px', background: PINK }} />

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
            <col style={{ width: '37%' }} />
            <col style={{ width: '41%' }} />
          </colgroup>

          <thead>
            <tr>
              <th style={{ padding: '16px 20px', background: '#FFFFFF', borderBottom: `1px solid ${BORDER}` }} />

              <th
                style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  background: '#FAFAFA',
                  borderBottom: `1px solid ${BORDER}`,
                  borderRight: `1px solid ${BORDER}`,
                  fontWeight: 'normal',
                  verticalAlign: 'middle',
                }}
              >
                <HeadingMarker text="The Usual Approach" fontSize="11px" marginBottom="0" />
              </th>

              <th
                style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  background: '#FFFFFF',
                  borderBottom: `1px solid ${BORDER}`,
                  borderLeft: `2px solid ${PINK}`,
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
              const isLast    = i === lastIdx;
              const bg        = isHovered ? '#F9FAFB' : '#FFFFFF';

              return (
                <tr
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#0FA8DC',
                      verticalAlign: 'top',
                      background: bg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.category}
                  </td>

                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '0.875rem',
                      color: BODY_MUTED,
                      lineHeight: 1.65,
                      verticalAlign: 'top',
                      background: bg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                      borderRight: `1px solid ${BORDER}`,
                      transition: 'background 150ms ease',
                    }}
                  >
                    {row.usual}
                  </td>

                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '0.875rem',
                      color: DARK,
                      lineHeight: 1.65,
                      verticalAlign: 'top',
                      background: bg,
                      borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
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
