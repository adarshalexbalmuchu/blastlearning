import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
          padding: '20px 0',
          textAlign: 'left',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
        }}
      >
        <span style={{ fontSize: 'var(--fs-body)', fontWeight: 700, color: '#111111', fontFamily: 'Inter, sans-serif', lineHeight: 'var(--lh-small)' }}>
          <Highlight text={question} query={highlight} />
        </span>
        <span style={{ flexShrink: 0, fontSize: '20px', lineHeight: 1, color: '#6B7280', fontWeight: 300, transition: 'color 0.2s' }}>
          {open ? '−' : '+'}
        </span>
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
            <p style={{ fontSize: 'var(--fs-small)', lineHeight: 'var(--lh-body)', color: '#6B7280', fontFamily: 'Inter, sans-serif', margin: 0, paddingBottom: '20px' }}>
              <Highlight text={answer} query={highlight} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
