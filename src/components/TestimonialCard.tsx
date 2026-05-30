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
        border: '1px solid #ECECF1',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(92,86,232,0.12)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(28,28,40,0.05)';
      }}
    >
      {metric && improvement && before && after && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '12px', borderRadius: '12px', background: '#E9F7EF', border: '1px solid #ECECF1' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>Before</div>
            <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{before}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#5C56E8', fontFamily: "'Inter', sans-serif", marginBottom: '2px' }}>{metric}</div>
            <div style={{ fontSize: '14px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#5C56E8' }}>+{improvement}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>After</div>
            <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#5C56E8' }}>{after}</div>
          </div>
        </div>
      )}

      {/* Quote mark */}
      <div style={{ fontSize: '56px', lineHeight: 1, fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: '4px', color: '#5C56E8', userSelect: 'none' }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '14px', color: '#5C56E8' }}>★</span>
        ))}
      </div>

      <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '20px', flex: 1 }}>{content}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 700,
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
          flexShrink: 0,
          background: '#5C56E8',
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: "'Poppins', sans-serif" }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#5C56E8', fontFamily: "'Inter', sans-serif" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
