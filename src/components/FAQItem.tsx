import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-shadow duration-200"
      style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{question}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ color: '#1AAFCB', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '500px' : '0px' }}
      >
        <div className="px-6 pb-5">
          <div className="h-px mb-4" style={{ background: '#F4F7FB' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
