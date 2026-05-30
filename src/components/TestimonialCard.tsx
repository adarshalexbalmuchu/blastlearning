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

const AVATAR_PALETTE = ['#0FA8DC', '#F03C6F', '#22C55E', '#F59E0B', '#8B5CF6', '#06B6D4', '#EC4899'];

function avatarColor(name: string): string {
  return AVATAR_PALETTE[name.charCodeAt(0) % AVATAR_PALETTE.length];
}

export default function TestimonialCard({ name, role, content, rating = 5, before, after, metric, improvement }: TestimonialCardProps) {
  const accent = avatarColor(name);

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
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(28,28,40,0.10)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(28,28,40,0.05)';
      }}
    >
      {metric && improvement && before && after && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '12px', borderRadius: '12px', background: '#E9F7EF', border: '1px solid #D1FAE5' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>Before</div>
            <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#5A5A6E' }}>{before}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#059669', fontFamily: "'Inter', sans-serif", marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{metric}</div>
            <div style={{ fontSize: '15px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#059669' }}>+{improvement}</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>After</div>
            <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{after}</div>
          </div>
        </div>
      )}

      {/* Stars — amber to look authentic */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '13px', color: '#F59E0B' }}>★</span>
        ))}
      </div>

      <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '20px', flex: 1 }}>{content}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #F4F4F6' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '15px',
          fontWeight: 700,
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
          flexShrink: 0,
          background: accent,
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: "'Poppins', sans-serif" }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
