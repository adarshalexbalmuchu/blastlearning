import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Users, Star, BookOpen, PlayCircle, ArrowRight, type LucideIcon } from 'lucide-react';

interface Stat {
  value: string; // digits roll, separators/suffix stay static
  label: string;
  bg: string;
  accent: string;
  Icon: LucideIcon;
}

const stats: Stat[] = [
  { value: '4,999+', label: 'Students Learning', bg: '#FDF3E7', accent: '#D97706', Icon: Users },
  { value: '4.8/5', label: 'Average Parent Rating', bg: '#FCEEF1', accent: '#F03C6F', Icon: Star },
  { value: '50,000+', label: 'Practice Questions', bg: '#E7F6FB', accent: '#0FA8DC', Icon: BookOpen },
  { value: '1,200+', label: 'Video Lessons', bg: '#F0EDFC', accent: '#7C3AED', Icon: PlayCircle },
];

const COLUMN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slot-machine number: each digit rolls up to its value, separators stay put.
function RollingNumber({ value, play, reduce }: { value: string; play: boolean; reduce: boolean }) {
  return (
    <span aria-label={value} style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
      {value.split('').map((ch, i) => {
        if (ch >= '0' && ch <= '9') {
          const d = Number(ch);
          const offset = reduce || play ? d : 0;
          return (
            <span
              key={i}
              aria-hidden="true"
              style={{ display: 'inline-block', height: '1em', lineHeight: '1em', overflow: 'hidden' }}
            >
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  transform: `translateY(-${offset}em)`,
                  transition: reduce ? 'none' : 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: reduce ? '0s' : `${i * 0.08}s`,
                  willChange: 'transform',
                }}
              >
                {COLUMN.map((n) => (
                  <span key={n} style={{ height: '1em', lineHeight: '1em' }}>{n}</span>
                ))}
              </span>
            </span>
          );
        }
        return (
          <span key={i} aria-hidden="true" style={{ display: 'inline-block', height: '1em', lineHeight: '1em' }}>
            {ch}
          </span>
        );
      })}
    </span>
  );
}

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion() ?? false;

  return (
    <section ref={ref} style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.01em', marginBottom: '14px' }}>
            Trusted by Students and Parents
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            Do not just take our word for it. The numbers tell the story.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '48px' }} className="grid-cols-4-md">
          {stats.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="trust-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: s.bg,
                  borderRadius: '20px',
                  padding: '28px 20px',
                  minHeight: '210px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                <Icon
                  size={128}
                  strokeWidth={1.5}
                  className="trust-card-wm"
                  style={{ position: 'absolute', right: '-22px', bottom: '-22px', color: s.accent, pointerEvents: 'none' }}
                />
                <div style={{ position: 'relative', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem, 4.5vw, 2.75rem)', color: '#1C1C28', lineHeight: 1, marginBottom: '10px' }}>
                  <RollingNumber value={s.value} play={inView} reduce={reduce} />
                </div>
                <div style={{ position: 'relative', fontSize: '14px', fontWeight: 500, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/programs"
            className="cta cta-pink"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 36px', borderRadius: '10px', background: '#F03C6F', color: '#FFFFFF', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 6px 18px rgba(240,60,111,0.28)' }}
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
