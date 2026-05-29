import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  large?: boolean;
}

export default function FeatureCard({ icon, title, description, large }: FeatureCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: large ? '32px' : '24px',
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.15)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))',
        border: '1px solid rgba(6,182,212,0.2)',
        color: '#06B6D4',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: large ? '1.125rem' : '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{description}</p>
    </div>
  );
}
