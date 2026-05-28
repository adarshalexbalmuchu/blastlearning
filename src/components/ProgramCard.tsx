import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
      className={`relative bg-white rounded-2xl p-6 border shadow-[0_2px_16px_rgba(13,27,42,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(13,27,42,0.14)] transition-all duration-300 flex flex-col ${featured ? 'border-[#1AAFCB]' : 'border-gray-50'}`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold text-white bg-[#1AAFCB] rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          Most Popular
        </span>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#1AAFCB] text-white">
          {icon}
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{price}</span>
          <span className="text-xs text-[#5A6A7A] ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>/mo</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#0D1B2A] mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</h3>
      <span className="inline-block mb-3 px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#F4F7FB] text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {classRange}
      </span>

      <p className="text-sm leading-relaxed text-[#5A6A7A] mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>{description}</p>

      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0D1B2A] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Key Outcomes</p>
        <div className="flex flex-wrap gap-2">
          {outcomes.map((outcome) => (
            <span key={outcome} className="px-2.5 py-1 text-xs font-medium rounded-full border border-[#1AAFCB] text-[#1AAFCB]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {outcome}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/programs"
        className="w-full flex items-center justify-center py-2.5 rounded-lg text-white text-sm font-semibold bg-[#1AAFCB] hover:bg-[#158fab] transition-colors duration-200"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Learn More
      </Link>
    </div>
  );
}
