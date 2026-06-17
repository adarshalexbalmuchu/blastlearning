import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Brain, TrendingUp, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import TestimonialsMarquee from '../components/ui/testimonials-marquee';
import FAQItem from '../components/FAQItem';
import ctaBanner from '../assets/Hero 4.png';
import BrandWhoosh from '../components/BrandWhoosh';

const testimonialsRow1 = [
  { name: 'Ananya Krishnan', role: 'Class 10, CBSE Plan · Bangalore', text: 'Blast Learning showed me exactly which chapters I kept forgetting. My Science score went from 61 to 84 in one term. The spaced revision reminders are the real game-changer.' },
  { name: 'Rahul Mehta', role: 'Class 12, CBSE Plan · Mumbai', text: "I was scoring 55 in Physics mock tests. Blast's Metacognition Engine identified my weak chapters within the first week and built a custom plan. Ended up with 81 in boards." },
  { name: 'Kavitha Suresh', role: 'Class 9, English Mastery · Hyderabad', text: 'Grammar used to be a nightmare. The AI broke it into tiny daily chunks and quizzed me at exactly the right time. I went from D grades to consistently getting As.' },
  { name: 'Arjun Nair', role: 'Class 11, Math Genius · Chennai', text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.' },
  { name: 'Karan Malhotra', role: 'Class 12, SAT Prep Pass · Gurgaon', text: "Blast's SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months." },
];
const testimonialsRow2 = [
  { name: 'Deepak Sharma', role: 'Parent · Class 11 CBSE, Delhi', text: "The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven't had to nag him about studying in two months." },
  { name: 'Sunita Reddy', role: 'Parent · Class 10 CBSE, Pune', text: "We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day." },
  { name: 'Priya Iyer', role: 'Parent · Class 10 CBSE, Kochi', text: "My daughter's board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically." },
  { name: 'Meena Patel', role: 'Parent · Class 9 CBSE, Ahmedabad', text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.' },
  { name: 'Vikram Gupta', role: 'Parent · Class 12 CBSE, Jaipur', text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.' },
];
const pageFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps 91% of students improve what they retain, compared to the 10% most students remember without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 7-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first week." },
];

const programs = [
  {
    icon: BookOpen,
    slug: 'cbse-plan',
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
    slug: 'math-genius',
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
    slug: 'english-mastery',
    name: 'English Mastery Pass',
    price: '₹999',
    classes: 'All Classes',
    description: 'Grammar, writing, reading, and comprehension. Develop strong English language skills systematically. From basic grammar foundations to advanced writing skills for Classes 8-12.',
    outcomes: ['Grammar excellence', 'Writing fluency', 'Reading comprehension'],
    features: [
      'Complete grammar coverage from Class 8 to 12',
      'Structured writing program: letters, essays, stories',
      'Reading comprehension practice with varied passages',
      'Vocabulary building through spaced repetition',
      'Speaking and pronunciation guidance (audio-based)',
      'Literature analysis support for board exams',
    ],
    featured: false,
  },
  {
    icon: TrendingUp,
    slug: 'sat-prep',
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

// Pastel fills rotated across program icon tiles
const pastels = ['#FDF3E7', '#FCEEF1', '#E7F6FB', '#F0EDFC'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Programs() {
  useSEO({
    title: 'Programs | CBSE, Maths, English & SAT Prep · Blast Learning',
    description: 'Explore CBSE, Maths Genius, English Edge, and SAT Prep programs designed for Classes 8-12. AI-powered spaced repetition. Start from ₹999/month.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '120px', paddingBottom: '100px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-160px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,168,220,0.07) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 18s ease-in-out infinite reverse' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif", marginBottom: '24px', background: '#E0F5FC', color: '#0FA8DC' }}>
              Learning Programs
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', marginBottom: '24px', color: '#1C1C28' }}>
              Our Programs
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", maxWidth: '640px', margin: '0 auto' }}>
              Carefully designed for Indian students in Classes 8-12. Each program uses our Metacognition Engine to ensure lasting retention, not just short-term cramming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }}
            className="grid-cols-2-md"
          >
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              const tile = pastels[idx % pastels.length];
              return (
                <motion.div
                  key={prog.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{
                    position: 'relative',
                    background: '#FFFFFF',
                    border: prog.featured ? '2px solid #0FA8DC' : '1px solid #ECECF1',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                  }}
                >
                  {prog.featured && (
                    <div style={{ padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: 'white', background: '#0FA8DC', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: tile, color: '#0FA8DC' }}>
                        <Icon size={22} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '9999px', fontSize: '10px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>
                            <Zap size={10} /> AI Powered
                          </span>
                          <span style={{ padding: '3px 10px', fontSize: '11px', fontWeight: 500, borderRadius: '9999px', background: '#D6F2FA', color: '#5A5A6E', border: '1px solid #ECECF1', fontFamily: "'Inter', sans-serif" }}>
                            {prog.classes}
                          </span>
                        </div>
                        <h2 style={{ fontSize: '20px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '4px' }}>{prog.name}</h2>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                          <span style={{ fontSize: '26px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{prog.price}</span>
                          <span style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>/month</span>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', marginBottom: '24px', fontFamily: "'Inter', sans-serif" }}>{prog.description}</p>

                    <div style={{ marginBottom: '24px' }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B6B7B', marginBottom: '10px', fontFamily: "'Inter', sans-serif" }}>Key Outcomes</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {prog.outcomes.map((o) => (
                          <span key={o} style={{ padding: '4px 12px', fontSize: '12px', fontWeight: 500, borderRadius: '9999px', color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>{o}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B6B7B', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>What's Included</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' }} className="grid-cols-2-sm">
                        {prog.features.map((f) => (
                          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle size={14} style={{ color: '#0FA8DC', flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ fontSize: '13px', lineHeight: 1.5, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/programs/${prog.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '13px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: 'none',
                        background: prog.featured ? '#0FA8DC' : '#FFFFFF',
                        color: prog.featured ? 'white' : '#1C1C28',
                        border: prog.featured ? 'none' : '1.5px solid #DCDCE5',
                      }}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', textAlign: 'center', marginBottom: '56px' }}
          >
            How We Compare
          </motion.h2>
          <div className="comparison-table-wrap">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div style={{ padding: '16px', borderBottom: '1px solid #ECECF1' }} />
              {['Blast Learning', 'Coaching Classes', 'Other Apps'].map((h, i) => (
                <div
                  key={h}
                  style={{
                    padding: '16px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    background: i === 0 ? '#E0F5FC' : 'transparent',
                    color: i === 0 ? '#0FA8DC' : '#5A5A6E',
                    borderBottom: '1px solid #ECECF1',
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
                  borderTop: '1px solid #ECECF1',
                  background: i % 2 === 0 ? 'transparent' : '#F7F7F8',
                }}
              >
                <div style={{ padding: '14px 16px', fontSize: '14px', fontWeight: 500, color: '#1C1C28', fontFamily: "'Inter', sans-serif" }}>{row.feature}</div>
                {[row.blast, row.coaching, row.apps].map((val, j) => (
                  <div key={j} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {val ? (
                      <CheckCircle size={18} style={{ color: j === 0 ? '#0FA8DC' : '#6B6B7B' }} />
                    ) : (
                      <span style={{ fontSize: '18px', color: '#6B6B7B' }}>×</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F9FAFB' }}>
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              Student Stories
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              Real Results from Real Students
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
              Hear from students who chose the right program and saw real results.
            </p>
          </motion.div>
        </div>
        <TestimonialsMarquee row1={testimonialsRow1} row2={testimonialsRow2} />
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, margin: 0 }}>
              Everything you need to know before you start your free trial.
            </p>
          </motion.div>
          <div style={{ borderTop: '1px solid #E5E7EB', marginBottom: '32px' }}>
            {pageFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              View All FAQs <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section aria-label="Call to action" style={{ width: '100%', display: 'block', lineHeight: 0 }}>
        <img src={ctaBanner} alt="Learn Smarter. Achieve More. Start your Blast Learning journey today." loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </section>
    </div>
  );
}
