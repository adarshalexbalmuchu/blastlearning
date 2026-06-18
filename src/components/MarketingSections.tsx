import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import FAQItem from './FAQItem';
import TestimonialsMarquee from './ui/testimonials-marquee';

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
  title: string;
  subtitle: string;
};

function SectionIntro({ eyebrow, title, subtitle }: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
        {eyebrow}
      </span>
      <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
        {title}
      </h2>
      <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
        {subtitle}
      </p>
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
}: {
  row1: TestimonialCardData[];
  row2: TestimonialCardData[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F9FAFB' }}>
      <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '40px' }}>
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
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
}: {
  items: FaqPreviewItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  linkTo?: string;
  linkLabel?: string;
}) {
  return (
    <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />
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