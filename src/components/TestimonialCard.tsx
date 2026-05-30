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
        background: '#FFFFFF',
        border: '1px solid #E8E4D8',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(232,51,107,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(26,26,46,0.06)';
      }}
    >
      {metric && improvement && before && after && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '12px', borderRadius: '12px', background: '#E8F9F3', border: '1px solid #E8E0D0' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#7A7A9A', fontFamily: "'DM Sans', sans-serif" }}>Before</div>
            <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Playfair Display', serif", color: '#1A1A2E' }}>{before}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#00B4D8', fontFamily: "'DM Sans', sans-serif", marginBottom: '2px' }}>{metric}</div>
            <div style={{ fontSize: '14px', fontWeight: 800, fontFamily: "'Playfair Display', serif", color: '#0A8A6A' }}>+{improvement}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#7A7A9A', fontFamily: "'DM Sans', sans-serif" }}>After</div>
            <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Playfair Display', serif", color: '#00B4D8' }}>{after}</div>
          </div>
        </div>
      )}

      {/* Quote mark */}
      <div style={{ fontSize: '56px', lineHeight: 1, fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: '4px', color: '#E8336B', userSelect: 'none' }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '14px', color: '#E8336B' }}>★</span>
        ))}
      </div>

      <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#1A1A2E', fontFamily: "'DM Sans', sans-serif", marginBottom: '20px', flex: 1 }}>{content}</p>

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
          fontFamily: "'Playfair Display', serif",
          flexShrink: 0,
          background: '#E8336B',
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E', fontFamily: "'Playfair Display', serif" }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#7A7A9A', fontFamily: "'DM Sans', sans-serif" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
