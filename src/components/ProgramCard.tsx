import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Check } from 'lucide-react';

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
        border: featured ? '2px solid #0FA8DC' : '1.5px solid #ECECF1',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 16px rgba(28,28,40,0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(15,168,220,0.12)';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = '#0FA8DC';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(28,28,40,0.05)';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = '#ECECF1';
      }}
    >
      {featured && (
        <span style={{
          position: 'absolute',
          top: '-12px',
          left: '20px',
          padding: '4px 14px',
          fontSize: '11px',
          fontWeight: 600,
          color: 'white',
          background: '#0FA8DC',
          borderRadius: '9999px',
          fontFamily: "'Inter', sans-serif",
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
          background: '#E0F5FC',
          color: '#0FA8DC',
        }}>
          {icon}
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{price}</span>
          <span style={{ fontSize: '12px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginLeft: '2px' }}>/mo</span>
        </div>
      </div>

      {/* AI Powered badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '9999px', fontSize: '10px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>
          <Zap size={10} /> AI Powered
        </span>
      </div>

      <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#1C1C28', marginBottom: '4px', fontFamily: "'Poppins', sans-serif" }}>{name}</h3>
      <span style={{ display: 'inline-block', marginBottom: '12px', padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: '#F7F7F8', color: '#5A5A6E', border: '1px solid #ECECF1', fontFamily: "'Inter', sans-serif" }}>
        {classRange}
      </span>

      <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#5A5A6E', marginBottom: '16px', flex: 1, fontFamily: "'Inter', sans-serif" }}>{description}</p>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8E8EA0', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>Key Outcomes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {outcomes.map((outcome) => (
            <span key={outcome} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>
              <Check size={14} style={{ color: '#0FA8DC', flexShrink: 0 }} />
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
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          textDecoration: 'none',
          background: featured ? '#0FA8DC' : '#FFFFFF',
          color: featured ? 'white' : '#1C1C28',
          border: featured ? 'none' : '1.5px solid #DCDCE5',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          if (featured) (e.currentTarget as HTMLElement).style.background = '#0D8BB5';
          else (e.currentTarget as HTMLElement).style.borderColor = '#0FA8DC';
        }}
        onMouseLeave={(e) => {
          if (featured) (e.currentTarget as HTMLElement).style.background = '#0FA8DC';
          else (e.currentTarget as HTMLElement).style.borderColor = '#DCDCE5';
        }}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}
