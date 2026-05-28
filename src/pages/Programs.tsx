import { Link } from 'react-router-dom';
import { BookOpen, Target, Brain, TrendingUp, ArrowRight, CheckCircle, Phone } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    name: 'CBSE Plan',
    price: '₹1,299',
    classes: 'Classes 8-10',
    description: 'Full CBSE syllabus coverage with AI study buddy. Designed for grades 8-10 with complete board exam preparation. Our Metacognition Engine maps your child\'s learning gaps and fills them systematically before exams.',
    outcomes: ['Board exam mastery', 'NCERT clarity', 'Concept retention'],
    features: [
      'Complete NCERT syllabus coverage for Classes 8, 9, 10',
      'AI-powered gap assessment and targeted revision',
      'Board exam simulation with full-length practice papers',
      'Subject-wise retention tracking (Science, Maths, SST, English)',
      'Weekly performance reports for parents',
      'Live doubt resolution sessions',
    ],
    featured: true,
  },
  {
    icon: Target,
    name: 'Math Genius Maker Pass',
    price: '₹999',
    classes: 'Classes 8-12',
    description: 'Gap assessment and personalized math lessons. Build problem-solving abilities from foundation to advanced level. Our adaptive system identifies exactly where your child struggles and fixes it before moving forward.',
    outcomes: ['Gap filling', 'Speed & accuracy', 'Concept mastery'],
    features: [
      'Comprehensive diagnostic test to find learning gaps',
      'Personalized lesson sequence based on gap analysis',
      'Foundation to advanced level progression',
      'Daily problem-solving practice with difficulty scaling',
      'Speed and accuracy drills for board exams',
      'Chapter-wise mastery certification',
    ],
    featured: false,
  },
  {
    icon: Brain,
    name: 'English Mastery Pass',
    price: '₹999',
    classes: 'All Classes',
    description: 'Grammar, writing, reading, and comprehension. Develop strong English language skills systematically. From basic grammar foundations to advanced writing skills for Classes 8-12.',
    outcomes: ['Grammar excellence', 'Writing fluency', 'Reading comprehension'],
    features: [
      'Complete grammar coverage from Class 8 to 12',
      'Structured writing program — letters, essays, stories',
      'Reading comprehension practice with varied passages',
      'Vocabulary building through spaced repetition',
      'Speaking and pronunciation guidance (audio-based)',
      'Literature analysis support for board exams',
    ],
    featured: false,
  },
  {
    icon: TrendingUp,
    name: 'SAT Prep Pass',
    price: '₹999',
    classes: 'Classes 10-12',
    description: 'Foundation-level SAT preparation with adaptive tests and practice. Complete score optimization program targeting 1400+ scores with proven test-taking strategies.',
    outcomes: ['High SAT scores', 'Test strategies', 'College readiness'],
    features: [
      'Full SAT syllabus: Math, Reading, Writing',
      'Adaptive practice tests with instant scoring',
      'Time management strategies for each section',
      'College application support and guidance',
      'Score progression tracking and projections',
      'Access to 500+ SAT practice questions',
    ],
    featured: false,
  },
];

const comparisonRows = [
  { feature: 'AI Personalization', blast: true, coaching: false, apps: false },
  { feature: 'Retention Tracking', blast: true, coaching: false, apps: false },
  { feature: 'Parent Dashboard', blast: true, coaching: false, apps: false },
  { feature: 'Spaced Repetition', blast: true, coaching: false, apps: true },
  { feature: 'Human Support', blast: true, coaching: true, apps: false },
  { feature: 'Affordable Price', blast: true, coaching: false, apps: true },
];

export default function Programs() {
  return (
    <div>
      {/* Header */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            Learning Programs
          </span>
          <h1 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            Our Programs
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Carefully designed for Indian students in Classes 8–12. Each program uses our Metacognition Engine to ensure lasting retention — not just short-term cramming.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="grid-cols-2-md">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.name}
                  className="relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: prog.featured
                      ? '0 0 0 2px #1AAFCB, 0 2px 16px rgba(13,27,42,0.08)'
                      : '0 2px 16px rgba(13,27,42,0.08)',
                  }}
                >
                  {prog.featured && (
                    <div className="px-4 py-2 text-xs font-semibold text-white text-center" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: '#1AAFCB' }}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{prog.name}</h2>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{prog.price}</span>
                          <span className="text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>/month</span>
                          <span className="px-2.5 py-0.5 rounded-md text-xs font-medium" style={{ background: '#F4F7FB', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.classes}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.description}</p>

                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Key Outcomes</p>
                      <div className="flex flex-wrap gap-2">
                        {prog.outcomes.map((o) => (
                          <span key={o} className="px-3 py-1 text-xs font-medium rounded-md" style={{ background: 'rgba(26,175,203,0.08)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>What's Included</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' }} className="grid-cols-2-sm">
                        {prog.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#1AAFCB' }} />
                            <span className="text-xs leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg text-white text-sm font-semibold transition-colors hover:bg-[#148fa5]"
                      style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
                    >
                      Start 7-Day Free Trial <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <h2 className="font-bold text-center mb-12" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            How We Compare
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div className="p-4" />
              {['Blast Learning', 'Coaching Classes', 'Other Apps'].map((h, i) => (
                <div
                  key={h}
                  className="p-4 text-center text-sm font-bold"
                  style={{
                    background: i === 0 ? '#1AAFCB' : 'transparent',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: i === 0 ? 'white' : '#0D1B2A',
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderTop: '1px solid #F4F7FB',
                  background: i % 2 === 0 ? 'white' : '#FAFBFD',
                }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{row.feature}</div>
                {[row.blast, row.coaching, row.apps].map((val, j) => (
                  <div key={j} className="p-4 flex items-center justify-center">
                    {val ? (
                      <CheckCircle size={18} style={{ color: j === 0 ? '#1AAFCB' : '#5A6A7A' }} />
                    ) : (
                      <span className="text-lg" style={{ color: '#E8357A' }}>×</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Not sure which plan is right?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Our learning advisors will assess your child's needs and recommend the perfect program — completely free.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-white/30 text-white hover:border-white/60 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Phone size={16} /> Talk to an Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
