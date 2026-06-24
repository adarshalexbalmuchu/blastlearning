import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import FAQItem from './FAQItem';
import TestimonialsMarquee from './ui/testimonials-marquee';
import HeadingMarker from './HeadingMarker';

export type TestimonialCardData = {
  image?: string;
  name: string;
  role: string;
  text: string;
};

export type FaqPreviewItem = {
  q: string;
  a: string;
};

type SectionIntroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  accent?: string;
  align?: 'left' | 'center';
};

import React from 'react';

function SectionIntro({ eyebrow, title, subtitle, accent, align = 'left' }: SectionIntroProps) {
  const isCentered = align === 'center';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } } }}
      style={{ textAlign: align }}
    >
      <motion.div variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}>
        <HeadingMarker text={eyebrow} marginBottom="10px" fontSize="12px" accent={accent} />
      </motion.div>
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 32, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }}
        style={{ fontSize: 'var(--fs-h2-fluid)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px', color: '#111111' }}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
        style={{ fontSize: '0.95rem', color: '#5A5A6E', fontWeight: 400, fontFamily: 'Inter, sans-serif', lineHeight: 1.65, maxWidth: '600px', margin: isCentered ? '0 auto' : '0', textAlign: align }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

export function SharedTestimonialsSection({
  row1,
  row2,
  eyebrow = 'Student Stories',
  title = 'Real Results from Real Students',
  subtitle = 'Hear from families who turned forgotten lessons into lasting marks.',
  sectionId = 'testimonials',
  accent,
  align,
  background = '#F7FAFC',
}: {
  row1: TestimonialCardData[];
  row2: TestimonialCardData[];
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  sectionId?: string;
  accent?: string;
  align?: 'left' | 'center';
  background?: string;
}) {
  return (
    <section id={sectionId} className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background }}>
      <div style={{ textAlign: align ?? 'left', padding: '0 24px', marginBottom: '40px' }}>
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} accent={accent} align={align} />
      </div>
      <TestimonialsMarquee row1={row1} row2={row2} />
    </section>
  );
}

export function SharedFaqSection({
  items,
  eyebrow = 'Common Questions',
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know before you start your free trial.',
  linkTo = '/faq',
  linkLabel = 'View All FAQs',
  accent,
  align,
  background = '#FFFFFF',
}: {
  items: FaqPreviewItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  linkTo?: string;
  linkLabel?: string;
  accent?: string;
  align?: 'left' | 'center';
  background?: string;
}) {
  return (
    <section className="section-pad" style={{ paddingTop: '40px', paddingBottom: '32px', background }}>
      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: align ?? 'left', marginBottom: '32px' }}>
          <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} accent={accent} align={align} />
        </div>
        <div style={{ borderTop: '1px solid #E5E7EB', marginBottom: '32px' }}>
          {items.map((faq, index) => (
            <FAQItem key={`${faq.q}-${index}`} question={faq.q} answer={faq.a} />
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to={linkTo} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
            {linkLabel} <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SharedImageCtaSection({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <section aria-label="Call to action" style={{ width: '100%', display: 'block', lineHeight: 0 }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </section>
  );
}