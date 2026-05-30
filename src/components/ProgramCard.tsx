import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  icon: ReactNode;
  name: string;
  price: string;
  classRange: string;
  description: string;
  outcomes: string[];
  featured?: boolean;
}

export default function ProgramCard({ icon, name, price, classRange, description, outcomes, featured }: ProgramCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        background: '#FFFFFF',
        border: featured ? '1.5px solid #E8336B' : '1.5px solid #E8E4D8',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(232,51,107,0.08)';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = '#E8336B';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(26,26,46,0.06)';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = '#E8E4D8';
      }}
    >
      {featured && (
        <span style={{
          position: 'absolute',
          top: '-12px',
          left: '20px',
          padding: '4px 14px',
          fontSize: '11px',
          fontWeight: 700,
          color: 'white',
          background: '#E8336B',
          borderRadius: '9999px',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Most Popular
        </span>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: '#FFF0F5',
          border: '1px solid #F5C0D4',
          color: '#E8336B',
        }}>
          {icon}
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Playfair Display', serif", color: '#1A1A2E' }}>{price}</span>
          <span style={{ fontSize: '12px', color: '#5A5A7A', fontFamily: "'DM Sans', sans-serif", marginLeft: '2px' }}>/mo</span>
        </div>
      </div>

      {/* AI Powered badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '9999px', fontSize: '10px', fontWeight: 700, color: '#E8336B', background: '#FFF0F5', border: '1px solid #F5C0D4', fontFamily: "'DM Sans', sans-serif" }}>
          <Zap size={10} /> AI Powered
        </span>
      </div>

      <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1A1A2E', marginBottom: '4px', fontFamily: "'Playfair Display', serif" }}>{name}</h3>
      <span style={{ display: 'inline-block', marginBottom: '12px', padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: '#F5F2E8', color: '#5A4A3A', border: '1px solid #E8E0D0', fontFamily: "'DM Sans', sans-serif" }}>
        {classRange}
      </span>

      <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#5A5A7A', marginBottom: '16px', flex: 1, fontFamily: "'DM Sans', sans-serif" }}>{description}</p>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#5A5A7A', marginBottom: '8px', fontFamily: "'DM Sans', sans-serif" }}>Key Outcomes</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {outcomes.map((outcome) => (
            <span key={outcome} style={{ padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: '#F5F2E8', border: '1px solid #E8E0D0', color: '#5A4A3A', fontFamily: "'DM Sans', sans-serif" }}>
              {outcome}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/programs"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '11px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: "'DM Sans', sans-serif",
          textDecoration: 'none',
          background: featured ? '#E8336B' : '#1A1A2E',
          color: 'white',
          border: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}
