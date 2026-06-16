import { useState } from 'react';
import { type FC } from 'react';
import { ArrowUpRight } from 'lucide-react';

// ── Step Visual Illustrations ──────────────────────────────────────────────────
// Each fills the absolute-inset card background; icon is pushed into the upper
// portion so it stays clear of the glass overlay at the bottom.

export function UploadVisual() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg, #C8EFFA 0%, #A6E3F7 55%, #B8ECF8 100%)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '44px',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          top: '24px',
          borderRadius: '50%',
          background: 'rgba(15,168,220,0.22)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
        }}
      />
      {/* Cyan circle icon */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: '#0FA8DC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 56px rgba(15,168,220,0.42), 0 4px 16px rgba(15,168,220,0.22)',
        }}
      >
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-hidden="true">
          <path
            d="M44 28.5C44 28.5 43.8 21 37 21C31.2 21 28.4 26 28.4 26C28.4 26 25 24.6 21.2 26.5C17.4 28.4 17.6 33 17.6 33.4C17.6 37.2 21 39 24.2 39.5H42C45.2 39.5 49 37.2 49 32.5C49 28.5 46 28 44 28.5Z"
            fill="white"
          />
          <line x1="31" y1="50" x2="31" y2="36" stroke="#0FA8DC" strokeWidth="4" strokeLinecap="round" />
          <path d="M24 30L31 23L38 30" stroke="#0FA8DC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '30px', right: '38px', width: '9px', height: '9px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '56px', right: '62px', width: '5px', height: '5px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.15, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '78px', left: '32px', width: '7px', height: '7px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.17, pointerEvents: 'none' }} />
    </div>
  );
}

export function AIVisual() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg, #CCE8FF 0%, #B0DAFF 55%, #C2E4FF 100%)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '30px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          top: '16px',
          borderRadius: '50%',
          background: 'rgba(15,168,220,0.18)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <svg width="132" height="130" viewBox="0 0 132 130" fill="none" aria-hidden="true">
          {/* Pen body */}
          <path d="M84 14L108 38L54 92L28 99L35 73Z" fill="#0FA8DC" />
          <path d="M84 14L100 30L94 36L78 20Z" fill="#0891B2" />
          <path d="M28 99L35 73L46 84Z" fill="#0369A1" />
          {/* Pen cap */}
          <path d="M95 6C98 3 104 4 107 7L113 13C116 16 115 22 112 25L105 32L95 22Z" fill="#38BDF8" />
          {/* Plus circle badge */}
          <circle cx="88" cy="88" r="22" fill="white" />
          <circle cx="88" cy="88" r="18" fill="#0FA8DC" />
          <path d="M88 80V96M80 88H96" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '30px', right: '40px', width: '8px', height: '8px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '58px', left: '26px', width: '5px', height: '5px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.14, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '86px', right: '28px', width: '6px', height: '6px', borderRadius: '50%', background: '#0FA8DC', opacity: 0.16, pointerEvents: 'none' }} />
    </div>
  );
}

export function MasteryVisual() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg, #DBEAFE 0%, #BFDBFE 55%, #C7E2FF 100%)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '22px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          top: '10px',
          borderRadius: '50%',
          background: 'rgba(59,130,246,0.18)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <svg width="132" height="142" viewBox="0 0 132 142" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="hw-head" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAD8FA" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <linearGradient id="hw-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A4CDFD" />
              <stop offset="100%" stopColor="#7AB8F8" />
            </linearGradient>
            <linearGradient id="hw-book" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          {/* Head */}
          <circle cx="66" cy="28" r="22" fill="url(#hw-head)" />
          {/* Shoulders */}
          <ellipse cx="66" cy="66" rx="30" ry="20" fill="url(#hw-body)" />
          {/* Open book */}
          <path d="M14 78 Q66 69 66 69 Q66 69 118 78 L118 112 Q66 103 66 103 Q66 103 14 112 Z" fill="url(#hw-book)" />
          <line x1="66" y1="69" x2="66" y2="103" stroke="white" strokeWidth="2" opacity="0.28" />
          <path d="M22 81 Q66 72 66 72" stroke="white" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
          {/* Hands */}
          <circle cx="18" cy="95" r="11" fill="#BAD8FA" />
          <circle cx="114" cy="95" r="11" fill="#BAD8FA" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '26px', right: '34px', width: '9px', height: '9px', borderRadius: '50%', background: '#3B82F6', opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '52px', left: '22px', width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', opacity: 0.15, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '82px', right: '24px', width: '5px', height: '5px', borderRadius: '50%', background: '#3B82F6', opacity: 0.14, pointerEvents: 'none' }} />
    </div>
  );
}

// ── Card Component ─────────────────────────────────────────────────────────────

interface HowItWorksCardProps {
  num: string;
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
}

export default function HowItWorksCard({ num, title, desc, accent, Visual }: HowItWorksCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        height: '380px',
        border: '1.5px solid #E2EAF0',
        boxShadow: hovered
          ? '0 16px 48px rgba(28,28,40,0.13)'
          : '0 4px 24px rgba(28,28,40,0.07)',
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        willChange: 'transform',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-card background illustration */}
      <Visual />

      {/* Diagonal step ribbon — clipped by card overflow:hidden */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '22px',
          left: '-36px',
          transform: 'rotate(-45deg)',
          background: accent,
          padding: '6px 52px',
          fontSize: '11px',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          color: 'white',
          letterSpacing: '0.06em',
          boxShadow: `0 2px 10px ${accent}55`,
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        STEP {num}
      </div>

      {/* Frosted glass info overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '16px 18px 14px',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 4px 20px rgba(28,28,40,0.08)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s ease',
          zIndex: 5,
        }}
      >
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            color: '#1C1C28',
            lineHeight: 1.35,
            margin: '0 0 6px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '12.5px',
            color: '#5A5A6E',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.65,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: `${accent}12`,
              border: `1px solid ${accent}22`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowUpRight size={14} style={{ color: accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}
