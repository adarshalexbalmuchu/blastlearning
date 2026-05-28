import { Star } from 'lucide-react';

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
    <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
      {metric && improvement && (
        <div className="flex items-center gap-3 mb-4 p-3 rounded-lg" style={{ background: 'rgba(26,175,203,0.06)' }}>
          <div className="text-center">
            <div className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Before</div>
            <div className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#E8357A' }}>{before}</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-xs font-semibold" style={{ color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>{metric}</div>
            <div className="text-sm font-bold" style={{ color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+{improvement}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>After</div>
            <div className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{after}</div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="#E8357A" style={{ color: '#E8357A' }} />
        ))}
      </div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</p>
          <p className="text-xs" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
