import { type FC } from 'react';

const cn = (...c: (string | false | undefined | null)[]): string =>
  c.filter(Boolean).join(' ');

// ── Grid Layer ────────────────────────────────────────────────────────────────

function GridLayer({ main }: { main: string }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `linear-gradient(${main}18 1px, transparent 1px), linear-gradient(90deg, ${main}18 1px, transparent 1px)`,
      backgroundSize: '32px 32px',
    }} />
  );
}

// ── Ellipse Gradient ──────────────────────────────────────────────────────────

function EllipseGradient({ main }: { main: string }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: `radial-gradient(ellipse 90% 65% at 50% 115%, ${main}32, transparent)`,
      pointerEvents: 'none',
    }} />
  );
}

// ── Bar Layer ─────────────────────────────────────────────────────────────────

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
  const H = 152;

  return (
    <div
      className={cn(
        'absolute transition-transform duration-700 ease-in-out',
        'group-hover/animated-card:-translate-x-1/2',
      )}
      style={{ top: 0, left: 0, height: '100%', width: '200%', zIndex: 2 }}
    >
      <svg viewBox="0 0 712 180" width="100%" height="100%" preserveAspectRatio="none">
        {xL.map((x, i) => {
          const h = Math.round((before[i] / 100) * H);
          return (
            <rect
              key={`b${i}`}
              x={x} y={H - h + 20} width={W} height={h}
              rx={4} fill={i % 2 === 0 ? main : sec} opacity={0.78}
            />
          );
        })}
        {xR.map((x, i) => {
          const h = Math.round((after[i] / 100) * H);
          return (
            <rect
              key={`a${i}`}
              x={x} y={H - h + 20} width={W} height={h}
              rx={4} fill={i % 2 === 0 ? main : sec}
            />
          );
        })}
      </svg>
    </div>
  );
}

// ── Line Layer ────────────────────────────────────────────────────────────────

interface LineLayerProps {
  bg: string;
  main: string;
  gradId: string;
}

function LineLayer({ bg, main, gradId }: LineLayerProps) {
  const linePoints = '0,158 44,120 89,100 133,132 178,75 222,54 267,90 311,46 356,32';
  const areaPoints = `${linePoints} 356,180 0,180`;

  return (
    <div className="absolute inset-0" style={{ zIndex: 3 }}>
      <svg viewBox="0 0 356 180" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={main} stopOpacity={0.48} />
            <stop offset="100%" stopColor={main} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#${gradId})`} />
        <polyline
          points={linePoints}
          fill="none"
          stroke={main}
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pulsing endpoint dot */}
        <circle cx={356} cy={32} r={9} fill={main} opacity={0.18} />
        <circle cx={356} cy={32} r={5} fill={main} />
      </svg>
      {/* Mask slides right on hover to reveal the line chart */}
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

// ── Pill Layer ────────────────────────────────────────────────────────────────

interface PillLayerProps {
  label1: string;
  label2: string;
  dot1: string;
  dot2: string;
}

function PillLayer({ label1, label2, dot1, dot2 }: PillLayerProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-end justify-between pointer-events-none',
        'transition-opacity duration-300 group-hover/animated-card:opacity-0',
      )}
      style={{ padding: '0 12px 14px', zIndex: 5 }}
    >
      <span style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(10px)',
        borderRadius: '999px',
        padding: '4px 10px 4px 7px',
        fontSize: '11px', fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A5E',
        border: '1px solid rgba(255,255,255,0.65)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot1, flexShrink: 0 }} />
        {label1}
      </span>
      <span style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(10px)',
        borderRadius: '999px',
        padding: '4px 10px 4px 7px',
        fontSize: '11px', fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A5E',
        border: '1px solid rgba(255,255,255,0.65)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot2, flexShrink: 0 }} />
        {label2}
      </span>
    </div>
  );
}

// ── Tooltip Layer ─────────────────────────────────────────────────────────────

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
      style={{ top: '22px', zIndex: 10 }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderRadius: '12px',
        padding: '10px 18px',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: `0 12px 40px rgba(0,0,0,0.13), 0 2px 8px ${main}28`,
        whiteSpace: 'nowrap',
      }}>
        <div style={{
          fontSize: '16px', fontWeight: 800, color: main,
          fontFamily: 'Inter, sans-serif', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          {value}
        </div>
        <div style={{
          fontSize: '10px', color: '#8E8EA0',
          fontFamily: 'Inter, sans-serif', marginTop: '3px', fontWeight: 500,
        }}>
          {label}
        </div>
      </div>
    </div>
  );
}

// ── Card Visual Container ─────────────────────────────────────────────────────

interface CardVisualProps {
  before: number[];
  after: number[];
  main: string;
  sec: string;
  bg: string;
  label1: string;
  label2: string;
  dot1: string;
  dot2: string;
  tooltipValue: string;
  tooltipLabel: string;
  gradId: string;
}

function CardVisual({ before, after, main, sec, bg, label1, label2, dot1, dot2, tooltipValue, tooltipLabel, gradId }: CardVisualProps) {
  return (
    <div style={{
      height: '192px',
      borderRadius: '18px 18px 0 0',
      background: bg,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <GridLayer main={main} />
      <EllipseGradient main={main} />
      <BarLayer before={before} after={after} main={main} sec={sec} />
      <LineLayer bg={bg} main={main} gradId={gradId} />
      <PillLayer label1={label1} label2={label2} dot1={dot1} dot2={dot2} />
      <TooltipLayer main={main} value={tooltipValue} label={tooltipLabel} />
    </div>
  );
}

// ── Exported Visual Variants ──────────────────────────────────────────────────

export function UploadVisual() {
  return (
    <CardVisual
      before={[38, 52, 36, 58, 42, 48, 36, 45, 52, 38, 46, 42]}
      after={[72, 80, 68, 84, 76, 71, 80, 66, 75, 78, 73, 82]}
      main="#0FA8DC" sec="#F59E0B" bg="#F0F9FF"
      label1="Before AI" label2="Raw Notes"
      dot1="#94A3B8" dot2="#0FA8DC"
      tooltipValue="+89% Retention" tooltipLabel="after first week"
      gradId="lineGrad-upload"
    />
  );
}

export function AIVisual() {
  return (
    <CardVisual
      before={[45, 22, 62, 28, 55, 20, 60, 32, 48, 22, 58, 35]}
      after={[47, 44, 46, 45, 48, 44, 47, 45, 46, 47, 44, 46]}
      main="#8B5CF6" sec="#FCD34D" bg="#FAF5FF"
      label1="Random Study" label2="No Plan"
      dot1="#94A3B8" dot2="#8B5CF6"
      tooltipValue="AI Optimized" tooltipLabel="perfect schedule"
      gradId="lineGrad-ai"
    />
  );
}

export function MasteryVisual() {
  return (
    <CardVisual
      before={[35, 42, 32, 45, 38, 34, 40, 36, 42, 35, 40, 37]}
      after={[82, 75, 88, 78, 90, 82, 85, 90, 88, 82, 90, 80]}
      main="#10B981" sec="#0FA8DC" bg="#F0FDF4"
      label1="Before" label2="10% retained"
      dot1="#94A3B8" dot2="#10B981"
      tooltipValue="90% Mastery" tooltipLabel="guaranteed"
      gradId="lineGrad-mastery"
    />
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

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
        border: '1.5px solid #ECECF1',
        boxShadow: '0 4px 24px rgba(28,28,40,0.07)',
        cursor: 'default',
      }}
    >
      <Visual />
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{
            width: '30px', height: '30px',
            borderRadius: '9px',
            background: `linear-gradient(135deg, ${accent}CC, ${accent})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            boxShadow: `0 4px 12px ${accent}44`,
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>
              {num}
            </span>
          </div>
          <span style={{
            fontSize: '11px', fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            color: accent,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.75,
          }}>
            Step {num}
          </span>
        </div>
        <h3 style={{
          fontSize: '17px', fontWeight: 700, marginBottom: '10px',
          fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1.35,
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '14px', lineHeight: 1.7,
          color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0,
        }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
