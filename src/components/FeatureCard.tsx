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
        background: '#FFFFFF',
        border: '1px solid #E8E4D8',
        borderRadius: '20px',
        padding: large ? '32px' : '24px',
        height: '100%',
        boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(232,51,107,0.08)';
        (e.currentTarget as HTMLElement).style.borderColor = '#E8336B';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(26,26,46,0.06)';
        (e.currentTarget as HTMLElement).style.borderColor = '#E8E4D8';
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
        background: '#FFF0F5',
        border: '1px solid #F5C0D4',
        color: '#E8336B',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: large ? '1.125rem' : '1rem', fontWeight: 700, color: '#1A1A2E', fontFamily: "'Playfair Display', serif", marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A7A', fontFamily: "'DM Sans', sans-serif" }}>{description}</p>
    </div>
  );
}
