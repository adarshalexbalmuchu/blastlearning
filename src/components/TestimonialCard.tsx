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
      className="hover:-translate-y-0.5 transition duration-300 shadow-[0_2px_16px_rgba(28,28,40,0.05)] hover:shadow-[0_10px_32px_rgba(28,28,40,0.10)]"
      style={{
        background: '#FFFFFF',
        border: '1.5px solid #ECECF1',
        borderRadius: '20px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Before / After inline stat strip */}
      {metric && improvement && before && after && (
        <div style={{
          display: 'flex', alignItems: 'stretch', marginBottom: '18px',
          borderRadius: '12px', overflow: 'hidden',
          border: `1px solid ${accent}22`,
        }}>
          {/* Before column */}
          <div style={{ flex: 1, textAlign: 'center', padding: '10px 8px', background: '#F8F9FB' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#B0B8C4', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '4px' }}>
              Before
            </div>
            <div style={{ fontSize: '19px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#C8CDD6', lineHeight: 1, letterSpacing: '-0.02em' }}>
              {before}
            </div>
          </div>

          {/* Metric center column */}
          <div style={{ flex: 1.3, textAlign: 'center', padding: '10px 8px', background: `${accent}12` }}>
            <div style={{ fontSize: '9px', fontWeight: 700, color: accent, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '4px' }}>
              {metric}
            </div>
            <div style={{ fontSize: '17px', fontWeight: 800, fontFamily: 'Poppins, sans-serif', color: accent, lineHeight: 1, letterSpacing: '-0.01em' }}>
              +{improvement}
            </div>
          </div>

          {/* After column */}
          <div style={{ flex: 1, textAlign: 'center', padding: '10px 8px', background: '#F8F9FB' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: `${accent}CC`, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '4px' }}>
              After
            </div>
            <div style={{ fontSize: '19px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: accent, lineHeight: 1, letterSpacing: '-0.02em' }}>
              {after}
            </div>
          </div>
        </div>
      )}

      {/* Stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '13px', color: '#F59E0B' }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontSize: '15px', lineHeight: 1.8, color: '#5A5A6E',
        fontFamily: 'Fraunces, serif', fontStyle: 'italic',
        fontWeight: 400, marginBottom: '20px', flex: 1,
      }}>
        {content}
      </p>

      {/* Attribution */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #F3F4F6' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '15px', fontWeight: 700, color: 'white',
          fontFamily: 'Poppins, sans-serif', flexShrink: 0,
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif', margin: 0 }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0 }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
