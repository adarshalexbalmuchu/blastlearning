interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  before?: string;
  after?: string;
  metric?: string;
  improvement?: string;
}

export default function TestimonialCard({ name, role, content, rating = 5, before, after, metric, improvement }: TestimonialCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(6,182,212,0.12)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {metric && improvement && before && after && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '12px', borderRadius: '12px', background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.12)' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Before</div>
            <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.6)' }}>{before}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#06B6D4', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>{metric}</div>
            <div style={{ fontSize: '14px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>+{improvement}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>After</div>
            <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{after}</div>
          </div>
        </div>
      )}

      {/* Quote mark */}
      <div style={{ fontSize: '56px', lineHeight: 1, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '4px', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', userSelect: 'none' }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '14px', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>★</span>
        ))}
      </div>

      <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', marginBottom: '20px', flex: 1 }}>{content}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 800,
          color: 'white',
          fontFamily: 'Space Grotesk, sans-serif',
          flexShrink: 0,
          background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
          boxShadow: '0 0 16px rgba(6,182,212,0.3)',
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontFamily: 'Space Grotesk, sans-serif' }}>{name}</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
