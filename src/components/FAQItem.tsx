import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: open ? '1px solid #E8336B' : '1px solid #E8E4D8',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
        transition: 'border-color 0.25s',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '18px 20px',
          textAlign: 'left',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
        }}
      >
        <span style={{ fontSize: '14px', fontWeight: 600, color: open ? '#E8336B' : '#1A1A2E', fontFamily: "'Playfair Display', serif", transition: 'color 0.25s' }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, color: '#E8336B' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 20px 18px', borderTop: '1px solid #E8E4D8' }}>
              <div style={{ height: '12px' }} />
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A7A', fontFamily: "'DM Sans', sans-serif" }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
