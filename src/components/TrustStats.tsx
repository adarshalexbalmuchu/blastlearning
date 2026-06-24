import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './TrustStats.css';

// ── Data ─────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

const STATS: StatItem[] = [
  { value: '500+', label: 'Peer-reviewed studies & patents' },
  { value: '100,000+', label: 'Students taught' },
  { value: '2', label: 'Institutional partners', sublabel: '(IBM · McGraw-Hill)' },
  { value: 'NEP 2020', label: 'Curriculum alignment' },
];

// ── Count-up (scroll-triggered) ───────────────────────────────────────────────

function CountUpValue({ value, play }: { value: string; play: boolean }) {
  const numericMeta = useMemo(() => {
    const match = value.match(/^([\d,]+)(\+?)$/);
    if (!match) return null;
    return { target: Number(match[1].replace(/,/g, '')), suffix: match[2] };
  }, [value]);

  const [displayValue, setDisplayValue] = useState(() =>
    numericMeta ? `0${numericMeta.suffix}` : value
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!play) return;
    if (!numericMeta) { setDisplayValue(value); setDone(true); return; }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) { setDisplayValue(value); setDone(true); return; }

    const durationMs = 1200;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(numericMeta.target * eased);
      setDisplayValue(`${current.toLocaleString('en-US')}${numericMeta.suffix}`);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [play, numericMeta, value]);

  return (
    <motion.span
      animate={done ? { scale: [1, 1.18, 1] } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    >
      {displayValue}
    </motion.span>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

// ── TrustStats ────────────────────────────────────────────────────────────────

export default function TrustStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section ref={ref} className="trust-strip" aria-label="Trust indicators">
      <motion.div
        className="trust-strip__grid"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {STATS.map((stat) => (
          <motion.article
            key={stat.label}
            className="trust-strip__card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.05,
              transition: { type: 'spring', stiffness: 320, damping: 20 },
            }}
          >
            <div className="trust-strip__value">
              <CountUpValue value={stat.value} play={inView} />
            </div>
            <div className="trust-strip__label">{stat.label}</div>
            {stat.sublabel && <div className="trust-strip__sublabel">{stat.sublabel}</div>}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
