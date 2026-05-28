import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{question}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 text-[#1AAFCB] transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="text-sm leading-relaxed text-[#5A6A7A] pt-1 pb-5" style={{ fontFamily: 'Inter, sans-serif' }}>{answer}</p>
      </div>
    </div>
  );
}
