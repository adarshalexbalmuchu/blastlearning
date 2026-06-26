import React, { useState } from 'react';

const PINK = '#E8135A';
const PINK_LIGHT = '#FFF5F8';
const PINK_HOVER = '#FCE8EF';
const MUTED = '#6B7280';
const DARK = '#1C1C28';
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

export default function ComparisonTable() {
  const [hovered, setHovered] = useState<number | null>(null);
  const lastIdx = rows.length - 1;

  return (
    <div style={{ overflowX: 'auto', width: '100%', borderRadius: '8px', border: `1px solid ${BORDER}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
      <table
        style={{
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          fontFamily: 'Inter, sans-serif',
          background: '#FFFFFF',
        }}
      >
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '38%' }} />
          <col style={{ width: '42%' }} />
        </colgroup>
        <thead>
          <tr>
            <th style={{ padding: '12px 16px', background: '#FFFFFF', borderBottom: `1px solid ${BORDER}` }} />
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: '11px',
                fontWeight: 500,
                color: MUTED,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: '#FFFFFF',
                borderBottom: `1px solid ${BORDER}`,
                borderLeft: `1px solid ${BORDER}`,
              }}
            >
              The Usual Approach
            </th>
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: '11px',
                fontWeight: 600,
                color: PINK,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: PINK_LIGHT,
                borderTop: `3px solid ${PINK}`,
                borderBottom: `1px solid ${BORDER}`,
                borderLeft: `2px solid ${PINK}`,
                borderRadius: '6px 6px 0 0',
              }}
            >
              Blast Learning
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
                <td
                  style={{
                    padding: '16px 16px',
                    fontSize: '14px',
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
                <td
                  style={{
                    padding: '16px 16px',
                    fontSize: '14px',
                    color: MUTED,
                    lineHeight: 1.6,
                    verticalAlign: 'top',
                    background: isHovered ? hoverBg : defaultBg,
                    borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                    borderLeft: `1px solid ${BORDER}`,
                    transition: 'background 150ms ease',
                  }}
                >
                  {row.usual}
                </td>
                <td
                  style={{
                    padding: '16px 16px',
                    fontSize: '14px',
                    color: DARK,
                    lineHeight: 1.6,
                    verticalAlign: 'top',
                    background: isHovered ? PINK_HOVER : PINK_LIGHT,
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
  );
}
