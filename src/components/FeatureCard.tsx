import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-50 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white bg-[#1AAFCB]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-[#0D1B2A] mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{title}</h3>
      <p className="text-sm leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }}>{description}</p>
    </div>
  );
}
