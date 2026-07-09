import { useState } from 'react';
import HeadingMarker from './HeadingMarker';

const PINK       = '#E8135A';
const BLUE       = '#0FA8DC';
const DARK       = '#1C1C28';
const BODY_MUTED = '#6B7280';
const BORDER     = '#E5E7EB';

// Column base backgrounds
const USUAL_BG       = '#F7F8FA';   // faint gray — muted/neutral lane
const USUAL_HOVER    = '#F0F2F5';
const BLAST_BG       = '#FFF5F8';   // faint pink — brand lane
const BLAST_HOVER    = '#FCE8EF';
const CAT_BG         = '#FFFFFF';
const CAT_HOVER      = '#F9FAFB';

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
          borderRadius: '10px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          background: '#FFFFFF',
          overflow: 'hidden',
          minWidth: '560px',
        }}
      >
        {/* Gradient top accent — matches site's pink-to-blue brand */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${PINK} 0%, ${BLUE} 100%)` }} />

        <table
          style={{
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <colgroup>
            <col style={{ width: '21%' }} />
            <col style={{ width: '37%' }} />
            <col style={{ width: '42%' }} />
          </colgroup>

          <thead>
            <tr>
              {/* Col1 — empty */}
              <th style={{
                padding: '16px 20px',
                background: '#FFFFFF',
                borderBottom: `1px solid ${BORDER}`,
              }} />

              {/* Col2 — Usual header: gray-washed */}
              <th style={{
                padding: '16px 20px',
                textAlign: 'left',
                background: USUAL_BG,
                borderBottom: `1px solid ${BORDER}`,
                borderRight: `1px solid ${BORDER}`,
                fontWeight: 'normal',
                verticalAlign: 'middle',
              }}>
                <HeadingMarker text="The Usual Approach" fontSize="11px" marginBottom="0" />
              </th>

              {/* Col3 — Blast header: pink-washed + stronger top border */}
              <th style={{
                padding: '16px 20px',
                textAlign: 'left',
                background: BLAST_BG,
                borderBottom: `1px solid #F2B8C8`,
                borderLeft: `2px solid ${PINK}`,
                fontWeight: 'normal',
                verticalAlign: 'middle',
              }}>
                <HeadingMarker text="Blast Learning" fontSize="11px" marginBottom="0" accent={PINK} />
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const isHovered = hovered === i;
              const isLast    = i === lastIdx;

              return (
                <tr
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Category */}
                  <td style={{
                    padding: '16px 20px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: BLUE,
                    verticalAlign: 'middle',
                    background: isHovered ? CAT_HOVER : CAT_BG,
                    borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                    transition: 'background 150ms ease',
                  }}>
                    {row.category}
                  </td>

                  {/* Usual */}
                  <td style={{
                    padding: '16px 20px',
                    fontSize: '0.875rem',
                    color: BODY_MUTED,
                    lineHeight: 1.65,
                    verticalAlign: 'middle',
                    background: isHovered ? USUAL_HOVER : USUAL_BG,
                    borderBottom: isLast ? 'none' : `1px solid ${BORDER}`,
                    borderRight: `1px solid ${BORDER}`,
                    transition: 'background 150ms ease',
                  }}>
                    {row.usual}
                  </td>

                  {/* Blast */}
                  <td style={{
                    padding: '16px 20px',
                    fontSize: '0.875rem',
                    color: DARK,
                    lineHeight: 1.65,
                    verticalAlign: 'middle',
                    background: isHovered ? BLAST_HOVER : BLAST_BG,
                    borderBottom: isLast ? 'none' : `1px solid #F2B8C8`,
                    borderLeft: `2px solid ${PINK}`,
                    transition: 'background 150ms ease',
                  }}>
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
