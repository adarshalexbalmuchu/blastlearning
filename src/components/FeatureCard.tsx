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
        border: '1px solid #ECECF1',
        borderRadius: '16px',
        padding: large ? '32px' : '24px',
        height: '100%',
        boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(92,86,232,0.12)';
        (e.currentTarget as HTMLElement).style.borderColor = '#5C56E8';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(28,28,40,0.05)';
        (e.currentTarget as HTMLElement).style.borderColor = '#ECECF1';
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
        background: '#EEEDFC',
        color: '#5C56E8',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: large ? '1.125rem' : '1rem', fontWeight: 600, color: '#1C1C28', fontFamily: "'Poppins', sans-serif", marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{description}</p>
    </div>
  );
}
