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
        background: featured ? 'rgba(6,182,212,0.06)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: featured ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.12)';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.2)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        if (!featured) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
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
          background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)',
          borderRadius: '9999px',
          fontFamily: 'Inter, sans-serif',
          boxShadow: '0 0 16px rgba(6,182,212,0.4)',
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
          background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))',
          border: '1px solid rgba(6,182,212,0.2)',
          color: '#06B6D4',
        }}>
          {icon}
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{price}</span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginLeft: '2px' }}>/mo</span>
        </div>
      </div>

      {/* AI Powered badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '9999px', fontSize: '10px', fontWeight: 700, color: '#06B6D4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', fontFamily: 'Inter, sans-serif' }}>
          <Zap size={10} /> AI Powered
        </span>
      </div>

      <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>{name}</h3>
      <span style={{ display: 'inline-block', marginBottom: '12px', padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
        {classRange}
      </span>

      <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', marginBottom: '16px', flex: 1, fontFamily: 'Inter, sans-serif' }}>{description}</p>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>Key Outcomes</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {outcomes.map((outcome) => (
            <span key={outcome} style={{ padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', border: '1px solid rgba(6,182,212,0.25)', color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>
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
          fontFamily: 'Inter, sans-serif',
          textDecoration: 'none',
          background: featured ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)' : 'rgba(6,182,212,0.1)',
          color: 'white',
          border: featured ? 'none' : '1px solid rgba(6,182,212,0.25)',
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
