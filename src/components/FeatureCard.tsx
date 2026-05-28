import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 text-white" style={{ background: '#1AAFCB' }}>
        {icon}
      </div>
      <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{description}</p>
    </div>
  );
}
