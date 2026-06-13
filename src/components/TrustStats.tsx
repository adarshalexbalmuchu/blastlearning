import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Users, Star, TrendingUp, MapPin } from 'lucide-react';

const COLUMN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function RollingNumber({ value, play, reduce }: { value: string; play: boolean; reduce: boolean }) {
  return (
    <span aria-label={value} style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
      {value.split('').map((ch, i) => {
        if (ch >= '0' && ch <= '9') {
          const d = Number(ch);
          const offset = reduce || play ? d : 0;
          return (
            <span key={i} aria-hidden="true" style={{ display: 'inline-block', height: '1em', lineHeight: '1em', overflow: 'hidden' }}>
              <span style={{
                display: 'flex', flexDirection: 'column',
                transform: `translateY(-${offset}em)`,
                transition: reduce ? 'none' : 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: reduce ? '0s' : `${i * 0.08}s`,
                willChange: 'transform',
              }}>
                {COLUMN.map((n) => (<span key={n} style={{ height: '1em', lineHeight: '1em' }}>{n}</span>))}
              </span>
            </span>
          );
        }
        return <span key={i} aria-hidden="true" style={{ display: 'inline-block', height: '1em', lineHeight: '1em' }}>{ch}</span>;
      })}
    </span>
  );
}

interface StatItem {
  value: string;
  label: string;
  Icon: React.ElementType;
}

const STATS: StatItem[] = [
  { value: '5,000+', label: 'Students Enrolled',    Icon: Users      },
  { value: '4.8/5',  label: 'Parent Satisfaction',  Icon: Star       },
  { value: '91%',    label: 'Academic Improvement', Icon: TrendingUp },
  { value: '49+',    label: 'Cities Across India',  Icon: MapPin     },
];

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 -8px 32px rgba(28,28,40,0.06)',
        borderTop: '1px solid #ECECF1',
        overflow: 'hidden',
      }}
    >
      <div className="stat-strip">
        {STATS.map((stat, i) => {
          const { Icon } = stat;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '16px', background: '#FFFFFF' }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: '#E0F5FC', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon size={20} style={{ color: '#0FA8DC' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                  color: '#1C1C28', lineHeight: 1, letterSpacing: '-0.025em',
                }}>
                  <RollingNumber value={stat.value} play={inView} reduce={reduce} />
                </div>
                <div style={{ fontSize: '13px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', marginTop: '5px', lineHeight: 1.35 }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
