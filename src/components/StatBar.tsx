interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  subheading?: string;
}

export default function StatBar({ stats, subheading }: StatBarProps) {
  return (
    <div>
      {subheading && (
        <p className="text-center text-sm font-medium mb-8" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{subheading}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              {stat.value}
            </div>
            <div className="text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
