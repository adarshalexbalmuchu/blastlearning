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
        <p className="text-center text-sm font-medium mb-8 text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{subheading}</p>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-cols-4-md">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold mb-1 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
              {stat.value}
            </div>
            <div className="text-sm text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
