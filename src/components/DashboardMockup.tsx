import { TrendingUp, BookOpen, Award, Clock } from 'lucide-react';

interface SubjectBar {
  subject: string;
  percent: number;
  color: string;
}

const subjects: SubjectBar[] = [
  { subject: 'Mathematics', percent: 85, color: 'linear-gradient(90deg, #06B6D4, #3B82F6)' },
  { subject: 'Science', percent: 92, color: 'linear-gradient(90deg, #8B5CF6, #3B82F6)' },
  { subject: 'English', percent: 78, color: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' },
];

const weeklyActivity = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 3.5 },
  { day: 'Fri', hours: 2 },
  { day: 'Sat', hours: 4 },
  { day: 'Sun', hours: 2.5 },
];

const maxHours = Math.max(...weeklyActivity.map((d) => d.hours));

const miniFeatures = [
  { icon: TrendingUp, label: 'Progress' },
  { icon: BookOpen, label: 'Study Plans' },
  { icon: Award, label: 'Achievements' },
  { icon: Clock, label: 'Analytics' },
];

export default function DashboardMockup() {
  return (
    <div style={{
      background: 'rgba(7,17,31,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 0 60px rgba(6,182,212,0.12)',
    }}>
      {/* Header bar */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>Good morning,</p>
          <p style={{ fontSize: '14px', fontWeight: 700, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>Arjun Sharma</p>
        </div>
        <div style={{
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
          color: 'white',
        }}>
          7-Day Streak 🔥
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Retention', value: '79%', grad: 'linear-gradient(135deg, #06B6D4, #3B82F6)' },
            { label: 'Study Hours', value: '24.5h', grad: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' },
            { label: 'Score', value: '84', grad: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' },
          ].map((stat) => (
            <div key={stat.label} style={{ borderRadius: '12px', padding: '14px 12px', textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '2px', fontFamily: 'Space Grotesk, sans-serif', background: stat.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Subject Mastery */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>Subject Mastery</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {subjects.map((s) => (
              <div key={s.subject}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{s.subject}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#06B6D4', fontFamily: 'Space Grotesk, sans-serif' }}>{s.percent}%</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', overflow: 'hidden', background: 'rgba(255,255,255,0.06)' }}>
                  <div style={{ width: `${s.percent}%`, height: '100%', background: s.color, borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>This Week</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '56px' }}>
            {weeklyActivity.map((d) => (
              <div key={d.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '3px 3px 0 0',
                    height: `${(d.hours / maxHours) * 42}px`,
                    background: d.day === 'Thu'
                      ? 'linear-gradient(180deg, #06B6D4, #3B82F6)'
                      : 'rgba(6,182,212,0.2)',
                  }}
                />
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini feature cards */}
        <div className="grid grid-cols-4 gap-2">
          {miniFeatures.map(({ icon: Icon, label }) => (
            <div key={label} style={{ borderRadius: '10px', padding: '10px 6px', textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                <Icon size={14} style={{ color: '#06B6D4' }} />
              </div>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', lineHeight: 1.3 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
