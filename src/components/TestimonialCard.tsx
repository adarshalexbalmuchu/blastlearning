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
    <div className="bg-white rounded-2xl p-6 border border-gray-50 hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
      {metric && improvement && before && after && (
        <div className="flex items-center gap-3 mb-5 p-3 rounded-xl" style={{ background: 'rgba(26,175,203,0.06)' }}>
          <div className="text-center flex-1">
            <div className="text-xs font-medium mb-1 text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }}>Before</div>
            <div className="text-xl font-bold text-[#E8357A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{before}</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-xs font-semibold text-[#1AAFCB]" style={{ fontFamily: 'Inter, sans-serif' }}>{metric}</div>
            <div className="text-sm font-bold text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+{improvement}</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-xs font-medium mb-1 text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }}>After</div>
            <div className="text-xl font-bold text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{after}</div>
          </div>
        </div>
      )}

      {/* Large quote mark */}
      <div className="text-6xl leading-none font-bold text-[#1AAFCB] mb-2 select-none">"</div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-[#1AAFCB] text-base">★</span>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-[#5A6A7A] mb-5 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>{content}</p>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 bg-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</p>
          <p className="text-xs text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
