import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── Retention-rate constants ─────────────────────────────────────────────────
// PLACEHOLDER — these are estimates only. Replace both values with real
// observed data before this calculator goes live in production.
//
// BASELINE_RETENTION_RATE: approximate fraction of coaching content a student
// retains after 30 days with no structured revision (based on Ebbinghaus
// forgetting-curve literature). Swap for your actual measured figure.
const BASELINE_RETENTION_RATE = 0.20;

// BLAST_RETENTION_RATE: estimated fraction retained after 30 days with Blast
// Learning's spaced-repetition sessions. Replace with real retention data
// from cohort studies. Changing this one constant updates every output.
const BLAST_RETENTION_RATE = 0.75;

// ── Input bounds ─────────────────────────────────────────────────────────────
const MIN_SPEND = 1000;
const MAX_SPEND = 30000;
const SPEND_STEP = 500;
const DEFAULT_SPEND = 8000;
const DEFAULT_SUBJECTS = 2;
const DEFAULT_HOURS = 6;

// ── Helpers ──────────────────────────────────────────────────────────────────
function round100(n: number): number {
  return Math.round(n / 100) * 100;
}

function fmtINR(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

/** Inline style that fills the slider track up to the thumb position. */
function trackFill(value: number, min: number, max: number, color: string): React.CSSProperties {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E5E7EB ${pct}%, #E5E7EB 100%)`,
  };
}

// ── Component ────────────────────────────────────────────────────────────────
export default function CoachingCalculator() {
  const [spend, setSpend] = useState(DEFAULT_SPEND);
  const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS);
  const [hours, setHours] = useState(DEFAULT_HOURS);

  const retained  = round100(spend * BASELINE_RETENTION_RATE);
  const withBlast = round100(spend * BLAST_RETENTION_RATE);

  const subjectLabel = subjects === 1 ? '1 subject' : `${subjects} subjects`;
  const hourLabel    = hours === 1 ? '1 hour' : `${hours} hours`;

  const sentence =
    `You're spending ${fmtINR(spend)}/month on ${subjectLabel}, ${hourLabel} a week. ` +
    `At typical retention rates, about ${fmtINR(retained)} of that actually sticks after ` +
    `30 days — structured recall could raise that closer to ${fmtINR(withBlast)}.`;

  const labelStyle: React.CSSProperties = {
    fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
    color: '#5A5A6E', textTransform: 'uppercase', letterSpacing: '0.08em',
  };
  const valueStyle = (color: string): React.CSSProperties => ({
    fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color,
  });

  return (
    <div style={{
      background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '16px',
      padding: '32px', boxShadow: '0 2px 8px rgba(28,28,40,0.04)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

        {/* ── Spend slider ── */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
            <span style={labelStyle}>Monthly coaching spend</span>
            <span style={valueStyle('#E8135A')}>{fmtINR(spend)}</span>
          </div>
          <input
            type="range"
            min={MIN_SPEND} max={MAX_SPEND} step={SPEND_STEP} value={spend}
            onChange={e => setSpend(Number(e.target.value))}
            className="calc-range-pink"
            style={trackFill(spend, MIN_SPEND, MAX_SPEND, '#E8135A')}
            aria-label={`Monthly coaching spend: ${fmtINR(spend)}`}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
            <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>₹1,000</span>
            <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>₹30,000</span>
          </div>
        </div>

        {/* ── Subjects stepper + Hours slider ── */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
          className="grid-cols-2-sm"
        >
          {/* Subjects stepper */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={labelStyle}>Number of subjects</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                type="button"
                aria-label="Decrease subjects"
                onClick={() => setSubjects(s => Math.max(1, s - 1))}
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  border: '1px solid #ECECF1', background: '#FFFFFF', cursor: subjects <= 1 ? 'not-allowed' : 'pointer',
                  fontSize: '20px', lineHeight: 1, color: subjects <= 1 ? '#D1D5DB' : '#1C1C28',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                }}
              >−</button>
              <span style={{ ...valueStyle('#E8135A'), minWidth: '28px', textAlign: 'center' }}>{subjects}</span>
              <button
                type="button"
                aria-label="Increase subjects"
                onClick={() => setSubjects(s => Math.min(6, s + 1))}
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  border: '1px solid #ECECF1', background: '#FFFFFF', cursor: subjects >= 6 ? 'not-allowed' : 'pointer',
                  fontSize: '20px', lineHeight: 1, color: subjects >= 6 ? '#D1D5DB' : '#1C1C28',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                }}
              >+</button>
              <span style={{ fontSize: '13px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                {subjects === 1 ? 'subject' : 'subjects'} (1–6)
              </span>
            </div>
          </div>

          {/* Hours per week slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
              <span style={labelStyle}>Hours per week</span>
              <span style={valueStyle('#0FA8DC')}>{hours}h</span>
            </div>
            <input
              type="range"
              min={1} max={20} step={1} value={hours}
              onChange={e => setHours(Number(e.target.value))}
              className="calc-range-blue"
              style={trackFill(hours, 1, 20, '#0FA8DC')}
              aria-label={`Hours per week: ${hours}`}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>1h</span>
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>20h</span>
            </div>
          </div>
        </div>

        {/* ── Output sentence ── */}
        <div style={{
          background: '#F9FAFB', borderRadius: '12px',
          padding: '20px 24px', borderLeft: '3px solid #E8135A',
        }}>
          <p style={{
            fontSize: '15px', lineHeight: 1.8, color: '#1C1C28',
            fontFamily: 'Inter, sans-serif', margin: 0,
          }}>
            {sentence}
          </p>
        </div>

        {/* ── Secondary CTA ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
            Want a personalised walkthrough instead?
          </p>
          <Link to="/contact" className="cta cta-outline" style={{ flexShrink: 0 }}>
            Talk to Our Team
          </Link>
        </div>

      </div>
    </div>
  );
}
