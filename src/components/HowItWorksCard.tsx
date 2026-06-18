import { useState } from 'react';
import { type FC } from 'react';
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
  title: string;
  desc: string;
  accent: string;
  Visual: FC;
  height?: number | string;
  descLines?: number;
}

export default function HowItWorksCard({ title, desc, accent: _accent, Visual, height = '380px', descLines = 3 }: HowItWorksCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        height,
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

      {/* Frosted glass info overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.84)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '14px 16px 12px',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 4px 20px rgba(28,28,40,0.08)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s ease',
          zIndex: 5,
          maxHeight: '54%',
          overflow: 'hidden',
        }}
      >
        <h3
          style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            color: '#1C1C28',
            lineHeight: 1.35,
            margin: '0 0 5px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '12.5px',
            color: '#5A5A6E',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.55,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: descLines,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {desc}
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '55%',
          background: 'linear-gradient(180deg, rgba(10,10,18,0) 0%, rgba(10,10,18,0.22) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
