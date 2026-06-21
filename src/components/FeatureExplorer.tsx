import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';

interface Feature {
  title: string;
  gist: string;
  desc: string;
  points: string[];
  accent: string;
}

const features: Feature[] = [
  {
    title: 'Metacognition Engine',
    gist: 'AI that learns how your child learns.',
    desc: 'It quietly tracks which topics your child revisits, where they slow down, and which ideas fade after a week, then rebuilds the study plan so the hard parts get more attention than the easy ones.',
    points: [
      'Measures how well each topic is actually remembered, not just time spent',
      'Brings weak areas back for review before they cost marks in an exam',
      'Raises the difficulty only once a concept is genuinely solid',
    ],
    accent: '#0FA8DC',
  },
  {
    title: 'Focus Trainer',
    gist: 'Turn scattered study time into real focus.',
    desc: 'Most kids study with a phone buzzing every few minutes. Focus Trainer runs short, guided sessions that slowly stretch attention span and make deep work a habit instead of a daily fight.',
    points: [
      'Distraction-free timers with gentle check-ins, not nagging alarms',
      'Streaks that reward showing up daily over last-minute cramming',
      'Plain session reports that show focus improving week by week',
    ],
    accent: '#F03C6F',
  },
  {
    title: 'Class Recording Integration',
    gist: 'Any lecture becomes ready-to-use revision.',
    desc: 'Upload a coaching class or a school recording and the AI turns it into clean notes, flashcards, and quizzes. No more scrubbing through two hours of video to find one explanation.',
    points: [
      'Works with audio or video from almost any source',
      'Builds summaries, key terms, and practice questions automatically',
      'Searchable transcripts cut revision from hours down to minutes',
    ],
    accent: '#7C3AED',
  },
  {
    title: 'Parent Dashboard',
    gist: 'Know how your child is doing, without asking.',
    desc: 'A calm, daily view of study time, topics covered, quiz scores, and how much is actually being retained. You can finally see whether the coaching fees are turning into real learning.',
    points: [
      'Daily breakdown of study time and topics covered',
      'Retention scores that show what is sticking and what is slipping',
      'A short weekly summary sent straight to your phone',
    ],
    accent: '#059669',
  },
  {
    title: 'Tutor Mom Support',
    gist: "A real person in your child's corner.",
    desc: 'Software can plan the studying, but motivation needs a human. Every student gets a dedicated mentor who checks in each week, clears doubts, and keeps spirits up when the syllabus feels heavy.',
    points: [
      'Weekly one-on-one check-ins with the same mentor',
      'Quick doubt clearing over chat between sessions',
      'Encouragement and gentle accountability when motivation dips',
    ],
    accent: '#D97706',
  },
  {
    title: 'Multilingual Support',
    gist: 'Learn in the language you think in.',
    desc: 'Concepts are hard enough without wrestling with a second language. Blast Learning explains and quizzes in the language your child is most comfortable with, so understanding always comes first.',
    points: [
      'English, Hindi, Kannada, Tamil, Telugu, and more',
      'Switch languages any time without losing progress',
      'Regional language coverage that keeps expanding',
    ],
    accent: '#06B6D4',
  },
];

const NUM_COL = 36; // px width reserved for the index numeral
const GAP = 20; // px gap between numeral and text

export default function FeatureExplorer() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.3;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {features.map((f, i) => {
        const isOpen = open === i;
        const num = String(i + 1).padStart(2, '0');
        return (
          <div
            key={f.title}
            style={{
              background: '#FFFFFF',
              border: `1px solid ${isOpen ? '#D8E0EC' : '#E9EDF3'}`,
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              boxShadow: isOpen
                ? '0 10px 30px rgba(28,28,40,0.08)'
                : '0 2px 12px rgba(28,28,40,0.04)',
            }}
            onMouseEnter={(e) => {
              if (!isOpen) {
                e.currentTarget.style.borderColor = '#DCE3EE';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(28,28,40,0.06)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isOpen) {
                e.currentTarget.style.borderColor = '#E9EDF3';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(28,28,40,0.04)';
              }
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                gap: `${GAP}px`,
                padding: '22px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                background: isOpen ? '#FAFCFF' : 'transparent',
                border: 'none',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: `${NUM_COL}px`,
                  flexShrink: 0,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: '0.02em',
                  color: isOpen ? '#228BC9' : '#C8C8D2',
                  transition: 'color 0.25s ease',
                }}
              >
                {num}
              </span>

              <span style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#1C1C28',
                    lineHeight: 1.35,
                  }}
                >
                  {f.title}
                </span>
                <span
                  style={{
                    display: 'block',
                    marginTop: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: '#8E8EA0',
                    lineHeight: 1.5,
                  }}
                >
                  {f.gist}
                </span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.25 }}
                style={{
                  flexShrink: 0,
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #D8E0EC',
                  background: '#FFFFFF',
                  color: isOpen ? '#228BC9' : '#8E8EA0',
                  marginTop: '2px',
                  transition: 'background 0.25s ease, border-color 0.25s ease, color 0.25s ease',
                }}
              >
                <Plus size={16} strokeWidth={2.5} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: dur, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingLeft: `${NUM_COL + GAP + 24}px`, paddingRight: '28px', paddingBottom: '24px' }}>
                    <div style={{ height: '1px', background: '#E9EDF3', marginBottom: '16px' }} />
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14.5px',
                        lineHeight: 1.75,
                        color: '#5A5A6E',
                        marginBottom: '18px',
                      }}
                    >
                      {f.desc}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      {f.points.map((p) => (
                        <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px' }}>
                          <span
                            style={{
                              flexShrink: 0,
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: '#ECF4FC',
                              color: '#228BC9',
                              marginTop: '1px',
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '14px',
                              lineHeight: 1.6,
                              color: '#5A5A6E',
                            }}
                          >
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
