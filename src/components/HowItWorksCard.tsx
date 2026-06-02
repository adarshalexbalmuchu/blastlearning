import { type FC } from 'react';

const cn = (...c: (string | false | undefined | null)[]): string =>
  c.filter(Boolean).join(' ');

// ── Bar Layer ────────────────────────────────────────────────────────────────

interface BarLayerProps {
  before: number[];
  after: number[];
  main: string;
  sec: string;
}

function BarLayer({ before, after, main, sec }: BarLayerProps) {
  const xL = [8, 32, 67, 91, 126, 150, 187, 211, 248, 272, 307, 331];
  const xR = [363, 387, 423, 447, 483, 507, 543, 567, 603, 627, 661, 685];
  const W = 18;
  const H = 155;

  return (
    <div
      className={cn(
        'absolute transition-transform duration-700 ease-in-out',
        'group-hover/animated-card:-translate-x-1/2',
      )}
      style={{ top: 0, left: 0, height: '100%', width: '200%' }}
    >
      <svg viewBox="0 0 712 180" width="100%" height="100%" preserveAspectRatio="none">
        {xL.map((x, i) => {
          const h = Math.round((before[i] / 100) * H);
          return (
            <rect
              key={`b${i}`}
              x={x} y={H - h + 18} width={W} height={h}
              rx={3} fill={i % 2 === 0 ? main : sec} opacity={0.8}
            />
          );
        })}
        {xR.map((x, i) => {
          const h = Math.round((after[i] / 100) * H);
          return (
            <rect
              key={`a${i}`}
              x={x} y={H - h + 18} width={W} height={h}
              rx={3} fill={i % 2 === 0 ? main : sec}
            />
          );
        })}
      </svg>
    </div>
  );
}

// ── Line Layer ───────────────────────────────────────────────────────────────

interface LineLayerProps {
  bg: string;
  main: string;
  gradId: string;
}

function LineLayer({ bg, main, gradId }: LineLayerProps) {
  const linePoints = '0,158 44,120 89,100 133,132 178,75 222,54 267,90 311,46 356,32';
  const areaPoints = `${linePoints} 356,180 0,180`;

  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 356 180" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={main} stopOpacity={0.38} />
            <stop offset="100%" stopColor={main} stopOpacity={0.03} />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#${gradId})`} />
        <polyline
          points={linePoints}
          fill="none"
          stroke={main}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={356} cy={32} r={4.5} fill={main} />
      </svg>
      {/* Mask slides right on hover to reveal the chart */}
      <div
        className={cn(
          'absolute inset-0 transition-transform duration-700 ease-in-out',
          'group-hover/animated-card:translate-x-full',
        )}
        style={{ background: bg }}
      />
    </div>
  );
}

// ── Pill Layer ───────────────────────────────────────────────────────────────

interface PillLayerProps {
  label1: string;
  label2: string;
}

function PillLayer({ label1, label2 }: PillLayerProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-end justify-between pointer-events-none',
        'transition-opacity duration-300 group-hover/animated-card:opacity-0',
      )}
      style={{ padding: '0 12px 12px' }}
    >
      <span style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(4px)',
        borderRadius: '999px',
        padding: '3px 10px',
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#5A5A6E',
        border: '1px solid rgba(0,0,0,0.07)',
      }}>
        {label1}
      </span>
      <span style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(4px)',
        borderRadius: '999px',
        padding: '3px 10px',
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#5A5A6E',
        border: '1px solid rgba(0,0,0,0.07)',
      }}>
        {label2}
      </span>
    </div>
  );
}

// ── Tooltip Layer ────────────────────────────────────────────────────────────

interface TooltipLayerProps {
  main: string;
  value: string;
  label: string;
}

function TooltipLayer({ main, value, label }: TooltipLayerProps) {
  return (
    <div
      className={cn(
        'absolute left-1/2 pointer-events-none',
        '-translate-x-1/2 -translate-y-full',
        'transition-transform duration-500 ease-out',
        'group-hover/animated-card:translate-y-0',
      )}
      style={{ top: '24px', zIndex: 10 }}
    >
      <div style={{
        background: main,
        borderRadius: '10px',
        padding: '8px 16px',
        textAlign: 'center',
        boxShadow: `0 6px 20px ${main}55`,
        whiteSpace: 'nowrap',
      }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', lineHeight: 1.2 }}>
          {value}
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
          {label}
        </div>
      </div>
    </div>
  );
}

// ── Card Visual Container ────────────────────────────────────────────────────

interface CardVisualProps {
  before: number[];
  after: number[];
  main: string;
  sec: string;
  bg: string;
  label1: string;
  label2: string;
  tooltipValue: string;
  tooltipLabel: string;
  gradId: string;
}

function CardVisual({ before, after, main, sec, bg, label1, label2, tooltipValue, tooltipLabel, gradId }: CardVisualProps) {
  return (
    <div style={{
      height: '180px',
      borderRadius: '16px 16px 0 0',
      background: bg,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${main}14 1px, transparent 1px), linear-gradient(90deg, ${main}14 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <BarLayer before={before} after={after} main={main} sec={sec} />
      <LineLayer bg={bg} main={main} gradId={gradId} />
      <PillLayer label1={label1} label2={label2} />
      <TooltipLayer main={main} value={tooltipValue} label={tooltipLabel} />
    </div>
  );
}

// ── Exported Visual Variants ─────────────────────────────────────────────────

export function UploadVisual() {
  return (
    <CardVisual
      before={[25, 35, 18, 42, 30, 22, 15, 28, 35, 20, 22, 32]}
      after={[70, 75, 65, 78, 72, 68, 75, 62, 70, 72, 68, 78]}
      main="#0FA8DC" sec="#7DD3F0" bg="#F0F9FF"
      label1="Before AI" label2="Raw Notes"
      tooltipValue="+89% Retention" tooltipLabel="after first week"
      gradId="lineGrad-upload"
    />
  );
}

export function AIVisual() {
  return (
    <CardVisual
      before={[42, 22, 58, 30, 20, 52, 55, 18, 28, 60, 48, 25]}
      after={[46, 44, 48, 45, 47, 44, 45, 46, 48, 44, 46, 45]}
      main="#8B5CF6" sec="#FCD34D" bg="#FAF5FF"
      label1="Random Study" label2="No Plan"
      tooltipValue="AI Optimized" tooltipLabel="perfect schedule"
      gradId="lineGrad-ai"
    />
  );
}

export function MasteryVisual() {
  return (
    <CardVisual
      before={[22, 28, 18, 24, 25, 20, 28, 22, 20, 25, 24, 18]}
      after={[80, 72, 85, 78, 88, 80, 82, 88, 85, 80, 88, 78]}
      main="#10B981" sec="#0FA8DC" bg="#F0FDF4"
      label1="Before" label2="10% retained"
      tooltipValue="90% Mastery" tooltipLabel="guaranteed"
      gradId="lineGrad-mastery"
    />
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────

interface HowItWorksCardProps {
  num: string;
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
}

export default function HowItWorksCard({ num, title, desc, accent, Visual }: HowItWorksCardProps) {
  return (
    <div
      className="group/animated-card"
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #ECECF1',
        boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
        cursor: 'default',
      }}
    >
      <Visual />
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>{num}</span>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#8E8EA0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Step {num}
          </span>
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
