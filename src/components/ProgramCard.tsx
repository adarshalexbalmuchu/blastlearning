import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  icon: ReactNode;
  name: string;
  price: string;
  classRange: string;
  description: string;
  outcomes: string[];
  featured?: boolean;
}

export default function ProgramCard({ icon, name, price, classRange, description, outcomes, featured }: ProgramCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(13,27,42,0.14)] flex flex-col ${
        featured ? 'ring-2 ring-[#1AAFCB]' : ''
      }`}
      style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}
    >
      {featured && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
          Most Popular
        </span>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: '#1AAFCB' }}>
          <span className="text-white">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{name}</h3>
          <span className="inline-block mt-1 px-2.5 py-0.5 text-xs font-medium rounded-md" style={{ background: '#F4F7FB', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            {classRange}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <span className="text-2xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{price}</span>
        <span className="text-sm ml-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>/month</span>
      </div>

      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{description}</p>

      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide mb-2.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Key Outcomes</p>
        <div className="flex flex-wrap gap-2">
          {outcomes.map((outcome) => (
            <span
              key={outcome}
              className="px-2.5 py-1 text-xs font-medium rounded-md"
              style={{ background: 'rgba(26,175,203,0.08)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
            >
              {outcome}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/programs"
        className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors duration-200 hover:bg-[#148fa5]"
        style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
