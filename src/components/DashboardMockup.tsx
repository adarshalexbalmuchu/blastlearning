import { TrendingUp, BookOpen, Award, Clock } from 'lucide-react';

interface SubjectBar {
  subject: string;
  percent: number;
  color: string;
}

const subjects: SubjectBar[] = [
  { subject: 'Mathematics', percent: 85, color: '#5C56E8' },
  { subject: 'Science', percent: 92, color: '#5C56E8' },
  { subject: 'English', percent: 78, color: '#5C56E8' },
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
  { icon: TrendingUp, label: 'Progress', bg: '#FDF3E7' },
  { icon: BookOpen, label: 'Study Plans', bg: '#FCEEF1' },
  { icon: Award, label: 'Achievements', bg: '#E7F6FB' },
  { icon: Clock, label: 'Analytics', bg: '#F0EDFC' },
];

const topStats = [
  { label: 'Retention', value: '79%', bg: '#E9F7EF' },
  { label: 'Study Hours', value: '24.5h', bg: '#E9F2FC' },
  { label: 'Score', value: '84', bg: '#F0EDFC' },
];

export default function DashboardMockup() {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #ECECF1',
      boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
    }}>
      {/* Header bar */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #ECECF1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginBottom: '2px' }}>Good morning,</p>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: "'Poppins', sans-serif" }}>Arjun Sharma</p>
        </div>
        <div style={{
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          background: '#5C56E8',
          color: 'white',
        }}>
          7-Day Streak 🔥
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {topStats.map((stat) => (
            <div key={stat.label} style={{ borderRadius: '12px', padding: '14px 12px', textAlign: 'center', background: stat.bg, border: '1px solid #ECECF1' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '2px', fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{stat.value}</div>
              <div style={{ fontSize: '10px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Subject Mastery */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8E8EA0', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>Subject Mastery</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {subjects.map((s) => (
              <div key={s.subject}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{s.subject}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#1C1C28', fontFamily: "'Poppins', sans-serif" }}>{s.percent}%</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', overflow: 'hidden', background: '#F7F7F8' }}>
                  <div style={{ width: `${s.percent}%`, height: '100%', background: s.color, borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8E8EA0', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>This Week</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '56px' }}>
            {weeklyActivity.map((d) => (
              <div key={d.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '3px 3px 0 0',
                    height: `${(d.hours / maxHours) * 42}px`,
                    background: d.day === 'Thu'
                      ? '#5C56E8'
                      : '#E0DEF7',
                  }}
                />
                <span style={{ fontSize: '9px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini feature cards */}
        <div className="grid grid-cols-4 gap-2">
          {miniFeatures.map(({ icon: Icon, label, bg }) => (
            <div key={label} style={{ borderRadius: '10px', padding: '10px 6px', textAlign: 'center', background: bg, border: '1px solid #ECECF1' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                <Icon size={14} style={{ color: '#5C56E8' }} />
              </div>
              <p style={{ fontSize: '9px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif", lineHeight: 1.3 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
