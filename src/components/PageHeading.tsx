import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import HeadingMarker from './HeadingMarker';

type PageHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  accent?: string;
  align?: 'left' | 'center';
  maxWidth?: string;
};

const headingContainer = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function PageHeading({ eyebrow, title, subtitle, accent, align = 'left', maxWidth = '640px' }: PageHeadingProps) {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={headingContainer}
      style={{ textAlign: align }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '16px' }}>
          <HeadingMarker text={eyebrow} fontSize="12px" accent={accent} />
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 0.55 }}
        style={{
          fontSize: 'var(--fs-h2-fluid)',
          fontWeight: 800,
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '-0.02em',
          color: '#111111',
          lineHeight: 1.16,
          margin: 0,
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 'var(--fs-body)',
            lineHeight: 1.7,
            color: '#5A5A6E',
            fontFamily: 'Inter, sans-serif',
            maxWidth,
            margin: isCentered ? '12px auto 0' : '12px 0 0',
            textAlign: align,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
