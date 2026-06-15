import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  highlight?: string;
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
          ? <mark key={i} style={{ background: '#FEF08A', color: '#1C1C28', borderRadius: '2px', padding: '0 1px' }}>{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

export default function FAQItem({ question, answer, highlight = '' }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '16px 0',
          textAlign: 'left',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif', lineHeight: 1.45 }}>
          <Highlight text={question} query={highlight} />
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, opacity: 0.6, color: '#1C1C28' }}
        >
          <ChevronDown size={16} strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '14px', lineHeight: 1.72, color: '#6B7280', fontFamily: 'Inter, sans-serif', margin: 0, paddingBottom: '16px' }}>
              <Highlight text={answer} query={highlight} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
