import { useEffect, useMemo, useState } from 'react';
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

function CountUpValue({ value }: { value: string }) {
  const numericMeta = useMemo(() => {
    const match = value.match(/^([\d,]+)(\+?)$/);
    if (!match) {
      return null;
    }

    return {
      target: Number(match[1].replace(/,/g, '')),
      suffix: match[2],
    };
  }, [value]);

  const [displayValue, setDisplayValue] = useState(() => {
    if (!numericMeta) {
      return value;
    }
    return `0${numericMeta.suffix}`;
  });

  useEffect(() => {
    if (!numericMeta) {
      setDisplayValue(value);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    const durationMs = 1000;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(numericMeta.target * eased);

      setDisplayValue(`${current.toLocaleString('en-US')}${numericMeta.suffix}`);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [numericMeta, value]);

  return <>{displayValue}</>;
}

export default function TrustStats() {
  return (
    <section className="trust-strip" aria-label="Trust indicators">
      <div className="trust-strip__grid">
        {STATS.map((stat) => (
          <article key={stat.label} className="trust-strip__card">
            <div className="trust-strip__value">
              <CountUpValue value={stat.value} />
            </div>
            <div className="trust-strip__label">{stat.label}</div>
            {stat.sublabel && <div className="trust-strip__sublabel">{stat.sublabel}</div>}
          </article>
        ))}
      </div>
    </section>
  );
}
