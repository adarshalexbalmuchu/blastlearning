import { TrendingUp, BookOpen, Award, Clock } from 'lucide-react';

interface SubjectBar {
  subject: string;
  percent: number;
}

const subjects: SubjectBar[] = [
  { subject: 'Mathematics', percent: 85 },
  { subject: 'Science', percent: 92 },
  { subject: 'English', percent: 78 },
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
  { icon: TrendingUp, label: 'Progress Tracking' },
  { icon: BookOpen, label: 'Study Plans' },
  { icon: Award, label: 'Achievements' },
  { icon: Clock, label: 'Time Analytics' },
];

export default function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.12)' }}>
      {/* Header bar */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium mb-0.5" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Good morning,</p>
          <p className="text-sm font-bold" style={{ color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Arjun Sharma</p>
        </div>
        <div className="px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
          7-Day Streak 🔥
        </div>
      </div>

      <div className="p-6">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Weekly Retention', value: '79%', color: '#1AAFCB' },
            { label: 'Study Hours', value: '24.5h', color: '#0D1B2A' },
            { label: 'Performance Score', value: '84', color: '#E8357A' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-4 text-center" style={{ background: '#F4F7FB' }}>
              <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: stat.color }}>{stat.value}</div>
              <div className="text-xs leading-tight" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Subject Mastery */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Subject Mastery</p>
          <div className="flex flex-col gap-3">
            {subjects.map((s) => (
              <div key={s.subject}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{s.subject}</span>
                  <span className="text-xs font-bold" style={{ color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.percent}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F4F7FB' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.percent}%`, background: '#1AAFCB' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>This Week's Activity</p>
          <div className="flex items-end gap-2 h-16">
            {weeklyActivity.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${(d.hours / maxHours) * 52}px`,
                    background: d.day === 'Thu' ? '#1AAFCB' : 'rgba(26,175,203,0.25)',
                  }}
                />
                <span className="text-xs" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini feature cards */}
        <div className="grid grid-cols-4 gap-2">
          {miniFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-lg p-3 text-center" style={{ background: '#F4F7FB' }}>
              <div className="flex items-center justify-center mb-1.5">
                <Icon size={16} style={{ color: '#1AAFCB' }} />
              </div>
              <p className="text-xs leading-tight" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
