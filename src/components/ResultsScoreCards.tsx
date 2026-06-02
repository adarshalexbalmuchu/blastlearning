import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Arc geometry constants ────────────────────────────────────────────────────

const R = 86;
const CX = 110;
const CY = 100;
const ARC_LEN = Math.PI * R;         // ≈ 270.2
const ARC_PATH = `M ${CX - R},${CY} A ${R},${R} 0 0 1 ${CX + R},${CY}`;

// offsetFor(score) → strokeDashoffset that fills arc to that %
const offsetFor = (score: number) => ARC_LEN * (1 - score / 100);

// ── Data ──────────────────────────────────────────────────────────────────────

interface ScoreData {
  id: string;
  subject: string;
  beforeScore: number;
  afterScore: number;
  color1: string;
  color2: string;
  quote: string;
  student: string;
}

const SCORES: ScoreData[] = [
  {
    id: 'math',
    subject: 'Mathematics',
    beforeScore: 62,
    afterScore: 89,
    color1: '#7DD3F0',
    color2: '#0FA8DC',
    quote: 'Went from dreading exams to scoring in the top 10% of my class.',
    student: 'Aryan · Class 10, CBSE',
  },
  {
    id: 'physics',
    subject: 'Physics',
    beforeScore: 55,
    afterScore: 81,
    color1: '#C4B5FD',
    color2: '#7C3AED',
    quote: 'Concepts from coaching that never clicked finally made complete sense.',
    student: 'Riya · Class 11, CBSE',
  },
  {
    id: 'english',
    subject: 'English',
    beforeScore: 66,
    afterScore: 84,
    color1: '#6EE7B7',
    color2: '#059669',
    quote: 'My writing improved so much that even my teacher noticed the change.',
    student: 'Meera · Class 9, CBSE',
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────

function ScoreGaugeCard({ data, index }: { data: ScoreData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  const improvement = data.afterScore - data.beforeScore;
  const gradId = `sg-${data.id}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '24px 20px 20px',
        border: '1.5px solid #ECECF1',
        boxShadow: '0 2px 16px rgba(28,28,40,0.05)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>
          {data.subject}
        </span>
        <span style={{
          padding: '3px 10px', borderRadius: '9999px',
          background: `${data.color2}1A`, color: data.color2,
          fontSize: '12px', fontWeight: 700, fontFamily: 'Inter, sans-serif',
        }}>
          ↑ +{improvement} pts
        </span>
      </div>

      {/* Arc gauge */}
      <svg viewBox="0 0 220 114" width="100%" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1={CX - R} y1="0" x2={CX + R} y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={data.color1} />
            <stop offset="100%" stopColor={data.color2} />
          </linearGradient>
        </defs>

        {/* Background track */}
        <path d={ARC_PATH} stroke="#EBEBF2" strokeWidth={11} fill="none" strokeLinecap="round" />

        {/* Before score — faint ghost arc */}
        <motion.path
          d={ARC_PATH}
          stroke={data.color1}
          strokeWidth={11}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LEN} ${ARC_LEN}`}
          initial={{ strokeDashoffset: ARC_LEN, opacity: 0 }}
          animate={inView
            ? { strokeDashoffset: offsetFor(data.beforeScore), opacity: 0.2 }
            : { strokeDashoffset: ARC_LEN, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.13 }}
        />

        {/* After score — gradient, animated */}
        <motion.path
          d={ARC_PATH}
          stroke={`url(#${gradId})`}
          strokeWidth={11}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LEN} ${ARC_LEN}`}
          initial={{ strokeDashoffset: ARC_LEN }}
          animate={inView ? { strokeDashoffset: offsetFor(data.afterScore) } : { strokeDashoffset: ARC_LEN }}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 + index * 0.13 }}
        />

        {/* Center score text */}
        <text
          x={CX} y={CY - 10}
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
          fontSize="27"
          fill="#1C1C28"
        >
          {data.afterScore}%
        </text>
        <text
          x={CX} y={CY + 8}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          fontSize="10"
          fill="#8E8EA0"
        >
          after 30 days
        </text>

        {/* Arc endpoint labels */}
        <text x={CX - R + 4} y={CY + 15} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#B0B0C0">
          {data.beforeScore}%
        </text>
        <text x={CX + R - 4} y={CY + 15} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10" fill={data.color2}>
          {data.afterScore}%
        </text>
      </svg>

      {/* Before → After row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px', marginBottom: '14px',
        fontSize: '12px', fontFamily: 'Inter, sans-serif',
      }}>
        <span style={{ color: '#A0A0B0' }}>
          Before <strong style={{ color: '#5A5A6E' }}>{data.beforeScore}%</strong>
        </span>
        <span style={{ color: '#D1D5DB', fontSize: '14px' }}>→</span>
        <span style={{ color: '#A0A0B0' }}>
          After <strong style={{ color: data.color2 }}>{data.afterScore}%</strong>
        </span>
        <span style={{
          marginLeft: 'auto', padding: '1px 7px', borderRadius: '9999px',
          background: '#F0FDF4', color: '#059669', fontSize: '11px', fontWeight: 600,
        }}>
          in 30 days
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#F0F0F5', marginBottom: '14px' }} />

      {/* Quote */}
      <p style={{
        fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif',
        lineHeight: 1.65, fontStyle: 'italic', margin: 0, flex: 1,
      }}>
        "{data.quote}"
      </p>
      <p style={{
        fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif',
        fontWeight: 500, margin: '10px 0 0',
      }}>
        — {data.student}
      </p>
    </motion.div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function ResultsScoreCards() {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', textAlign: 'left' }}
      className="grid-cols-3-md"
    >
      {SCORES.map((score, i) => (
        <ScoreGaugeCard key={score.id} data={score} index={i} />
      ))}
    </div>
  );
}
