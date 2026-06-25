import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import FAQItem from './FAQItem';
import TestimonialsMarquee from './ui/testimonials-marquee';
import HeadingMarker from './HeadingMarker';
import AccentText from './AccentText';

export type TestimonialCardData = {
  image?: string;
  name: string;
  role: string;
  planName?: string;
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
        <HeadingMarker text={eyebrow} fontSize="12px" accent={accent} />
      </motion.div>
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 32, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }}
        className="t-h2" style={{ margin: '0 0 14px' }}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
        className="t-body" style={{ maxWidth: '600px', margin: isCentered ? '0 auto' : '0', textAlign: align }}
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
  title = <><AccentText tone="pink">Real Results</AccentText> from Real <AccentText tone="blue">Students</AccentText>.</>,
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
  title = <>Frequently Asked <AccentText tone="gradient">Questions</AccentText>.</>,
  subtitle = 'Everything you need to know before you start your free trial.',
  linkTo = '/faq',
  linkLabel = 'View All FAQs',
  accent,
  align,
  ctaAtBottom = false,
  ctaInFaqColumn = false,
  variant = 'split',
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
  ctaAtBottom?: boolean;
  ctaInFaqColumn?: boolean;
  variant?: 'split' | 'stacked';
  background?: string;
}) {
  const isCentered = align === 'center';
  const isStacked = variant === 'stacked';

  return (
    <section className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: isCentered || isStacked ? '1fr' : '1fr 1.5fr',
          gap: isCentered || isStacked ? '32px' : '80px',
          alignItems: 'start',
        }}
        className="faq-grid"
      >
        {/* Left: intro */}
        <div style={isCentered ? { maxWidth: '880px', margin: '0 auto', textAlign: 'center' } : undefined}>
          <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} accent={accent} align={align ?? 'left'} />
          {!ctaAtBottom && !ctaInFaqColumn && (
            <Link
              to={linkTo}
              className="cta cta-outline"
              style={{ marginTop: '28px', marginLeft: isCentered ? 'auto' : undefined, marginRight: isCentered ? 'auto' : undefined }}
            >
              {linkLabel}
            </Link>
          )}
        </div>

        {/* Right: FAQ list */}
        <div style={isCentered || isStacked ? { maxWidth: '980px', width: '100%', margin: '0 auto' } : undefined}>
          {items.map((faq, index) => (
            <FAQItem key={`${faq.q}-${index}`} question={faq.q} answer={faq.a} />
          ))}
          {ctaInFaqColumn && (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Link to={linkTo} className="cta cta-outline">
                {linkLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
      {ctaAtBottom && (
        <div style={{ maxWidth: '1280px', margin: '28px auto 0', padding: '0 24px', textAlign: 'left' }}>
          <Link to={linkTo} className="cta cta-outline">
            {linkLabel}
          </Link>
        </div>
      )}
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