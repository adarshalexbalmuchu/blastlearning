import { useState } from 'react';
import { type FC } from 'react';
import { ArrowUpRight } from 'lucide-react';
import uploadImg from '../assets/Upload.png';
import learnImg from '../assets/Learn.png';
import masterImg from '../assets/master.png';

export function UploadVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={uploadImg}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    </div>
  );
}

export function AIVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={learnImg}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    </div>
  );
}

export function MasteryVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={masterImg}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
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
