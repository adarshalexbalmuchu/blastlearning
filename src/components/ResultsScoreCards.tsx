import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Arc geometry constants ────────────────────────────────────────────────────

const R = 86;
const CX = 110;
const CY = 100;
const ARC_LEN = Math.PI * R;
const ARC_PATH = `M ${CX - R},${CY} A ${R},${R} 0 0 1 ${CX + R},${CY}`;

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
  const scoreGradId = `${gradId}-score`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '22px 20px 20px',
        border: '1.5px solid #ECECF1',
        boxShadow: '0 2px 16px rgba(28,28,40,0.05)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#1C1C28', letterSpacing: '-0.01em' }}>
          {data.subject}
        </span>
        <span style={{
          padding: '4px 10px', borderRadius: '9999px',
          background: `${data.color2}15`, color: data.color2,
          fontSize: '11px', fontWeight: 700, fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.01em',
        }}>
          ↑ +{improvement} pts
        </span>
      </div>

      {/* Arc gauge clean, no endpoint clutter */}
      <svg viewBox="0 0 220 106" width="100%" aria-hidden="true">
        <defs>
          {/* Arc gradient */}
          <linearGradient id={gradId} x1={CX - R} y1="0" x2={CX + R} y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={data.color1} />
            <stop offset="100%" stopColor={data.color2} />
          </linearGradient>
          {/* Score text gradient */}
          <linearGradient id={scoreGradId} x1="75" y1="0" x2="145" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={data.color1} />
            <stop offset="100%" stopColor={data.color2} />
          </linearGradient>
        </defs>

        {/* Background track */}
        <path d={ARC_PATH} stroke="#EBEBF2" strokeWidth={11} fill="none" strokeLinecap="round" />

        {/* Before score ghost arc */}
        <motion.path
          d={ARC_PATH}
          stroke={data.color1}
          strokeWidth={11}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LEN} ${ARC_LEN}`}
          initial={{ strokeDashoffset: ARC_LEN, opacity: 0 }}
          animate={inView
            ? { strokeDashoffset: offsetFor(data.beforeScore), opacity: 0.22 }
            : { strokeDashoffset: ARC_LEN, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.13 }}
        />

        {/* After score gradient, animated */}
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

        {/* Center score gradient text */}
        <text
          x={CX} y={CY - 14}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="30"
          fill={`url(#${scoreGradId})`}
          letterSpacing="-1"
        >
          {data.afterScore}%
        </text>

        {/* "after 30 days" sub-label */}
        <text
          x={CX} y={CY + 6}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          fontSize="9.5"
          fill="#B0B8C4"
        >
          after 30 days
        </text>
      </svg>

      {/* Before / After two-column stats */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        margin: '2px 2px 10px',
      }}>
        <div>
          <div style={{ fontSize: '9.5px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#B0B8C4', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '3px' }}>
            Before
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#C8CDD6', lineHeight: 1, letterSpacing: '-0.02em' }}>
            {data.beforeScore}%
          </div>
        </div>
        <div style={{ fontSize: '13px', color: '#DDE1E7', paddingBottom: '3px' }}>→</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '9.5px', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: data.color2, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '3px' }}>
            After
          </div>
          <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: data.color2, lineHeight: 1, letterSpacing: '-0.02em' }}>
            {data.afterScore}%
          </div>
        </div>
      </div>

      {/* Animated progress bar */}
      <div style={{ height: '5px', background: '#F0F2F5', borderRadius: '9999px', marginBottom: '18px', position: 'relative', overflow: 'hidden' }}>
        {/* Before baseline fill */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: `${data.beforeScore}%`,
          background: '#E2E8F0',
          borderRadius: '9999px',
        }} />
        {/* After animated gradient fill */}
        <motion.div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            background: `linear-gradient(90deg, ${data.color1}, ${data.color2})`,
            borderRadius: '9999px',
          }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${data.afterScore}%` } : { width: '0%' }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 + index * 0.13 }}
        />
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#F3F4F6', marginBottom: '14px' }} />

      {/* Quote */}
      <div style={{ position: 'relative', flex: 1, paddingLeft: '14px', borderLeft: `2px solid ${data.color2}30` }}>
        <p style={{
          fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif',
          lineHeight: 1.68, fontStyle: 'italic', margin: 0,
        }}>
          {data.quote}
        </p>
      </div>

      {/* Student attribution */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '12px' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
          background: `linear-gradient(135deg, ${data.color1}, ${data.color2})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
            {data.student.charAt(0)}
          </span>
        </div>
        <p style={{
          fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif',
          fontWeight: 500, margin: 0, lineHeight: 1.4,
        }}>
          {data.student}
        </p>
      </div>
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
