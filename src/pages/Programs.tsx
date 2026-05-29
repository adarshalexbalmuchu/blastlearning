import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Brain, TrendingUp, ArrowRight, CheckCircle, Phone, Zap } from 'lucide-react';

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Programs() {
  return (
    <div style={{ background: '#07111F' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#07111F', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              Learning Programs
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', marginBottom: '24px', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Our Programs
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
              Carefully designed for Indian students in Classes 8–12. Each program uses our Metacognition Engine to ensure lasting retention — not just short-term cramming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }}
            className="grid-cols-2-md"
          >
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.name}
                  variants={fadeUp}
                  style={{
                    position: 'relative',
                    background: prog.featured ? 'rgba(6,182,212,0.06)' : 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: prog.featured ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                  }}
                >
                  {prog.featured && (
                    <div style={{ padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                        <Icon size={22} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '9999px', fontSize: '10px', fontWeight: 700, color: '#06B6D4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', fontFamily: 'Inter, sans-serif' }}>
                            <Zap size={10} /> AI Powered
                          </span>
                          <span style={{ padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                            {prog.classes}
                          </span>
                        </div>
                        <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>{prog.name}</h2>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                          <span style={{ fontSize: '26px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{prog.price}</span>
                          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>/month</span>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: '24px', fontFamily: 'Inter, sans-serif' }}>{prog.description}</p>

                    <div style={{ marginBottom: '24px' }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', marginBottom: '10px', fontFamily: 'Inter, sans-serif' }}>Key Outcomes</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {prog.outcomes.map((o) => (
                          <span key={o} style={{ padding: '4px 12px', fontSize: '12px', fontWeight: 500, borderRadius: '9999px', border: '1px solid rgba(6,182,212,0.25)', color: '#06B6D4', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>What's Included</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' }} className="grid-cols-2-sm">
                        {prog.features.map((f) => (
                          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle size={14} style={{ color: '#06B6D4', flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '13px',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: 'Inter, sans-serif',
                        textDecoration: 'none',
                        background: prog.featured ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)' : 'rgba(6,182,212,0.1)',
                        color: 'white',
                        border: prog.featured ? 'none' : '1px solid rgba(6,182,212,0.25)',
                      }}
                    >
                      Start 7-Day Free Trial <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '56px' }}
          >
            How We Compare
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }} />
              {['Blast Learning', 'Coaching Classes', 'Other Apps'].map((h, i) => (
                <div
                  key={h}
                  style={{
                    padding: '16px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: 'Space Grotesk, sans-serif',
                    background: i === 0 ? 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.12))' : 'transparent',
                    color: i === 0 ? '#06B6D4' : 'rgba(255,255,255,0.45)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
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
                  borderTop: '1px solid rgba(255,255,255,0.04)',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                }}
              >
                <div style={{ padding: '14px 16px', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{row.feature}</div>
                {[row.blast, row.coaching, row.apps].map((val, j) => (
                  <div key={j} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {val ? (
                      <CheckCircle size={18} style={{ color: j === 0 ? '#06B6D4' : 'rgba(255,255,255,0.25)' }} />
                    ) : (
                      <span style={{ fontSize: '18px', color: 'rgba(255,100,100,0.5)' }}>×</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.07), rgba(59,130,246,0.05), rgba(139,92,246,0.07))', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', background: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.8))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Not sure which plan is right?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Our learning advisors will assess your child's needs and recommend the perfect program — completely free.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            <Phone size={16} /> Talk to an Advisor
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
