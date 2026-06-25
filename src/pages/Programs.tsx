import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Brain, TrendingUp, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import ctaBanner from '../assets/Hero 4.png';
import heroBanner from '../assets/Hero 2.png';
import BrandWhoosh from '../components/BrandWhoosh';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection, SharedImageCtaSection, SharedTestimonialsSection } from '../components/MarketingSections';
import AccentText from '../components/AccentText';

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
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Full Syllabus plan is designed for Classes 6-12, with Grade 10 as the primary focus this year, full syllabus coverage, and retention-first board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach  -  it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first two weeks." },
];

const programs = [
  {
    icon: BookOpen,
    slug: 'cbse-plan',
    name: 'CBSE Plan',
    price: '₹1,299',
    classes: 'Classes 6-12',
    description: 'Full CBSE syllabus coverage with a retention-first study system. Designed for Classes 6-12 with Grade 10 as the primary focus this year, so the board exam content is taught in a way that actually sticks.',
    outcomes: ['Board readiness', 'Retention tracking', 'Concept mastery'],
    features: [
      'Complete CBSE curriculum coverage across Classes 6-12',
      'AI-powered gap assessment and targeted revision',
      'Board-focused practice built around retention, not just coverage',
      'Subject-wise retention tracking across all core subjects',
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
      {/* ── Hero Banner ── */}
      <div style={{ lineHeight: 0 }}>
        <img src={heroBanner} alt="Upload Notes. Score Higher in Exams  -  Blast Learning" loading="eager" decoding="sync" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="HOW BLAST LEARNING WORKS" fontSize="12px" />
            <h1 className="t-h1" style={{ marginBottom: '20px' }}>
              The <AccentText tone="blue">system</AccentText> beneath the <AccentText tone="gradient">syllabus</AccentText>.
            </h1>
            <p className="t-body" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Every board exam tests the same thing twice: what your child knows, and whether that knowledge survives the walk into the exam hall. Blast Learning builds the second part. CBSE, ICSE, JEE, and NEET preparation runs on top of a study engine designed around how Indian students actually forget, and what makes them remember.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link
                to="/programs/cbse-plan"
                className="cta cta-pink"
                style={{ boxShadow: 'none' }}
              >
                Start the 14-Day Free Trial  -  No Credit Card Required <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '24px' }}>
              A coaching class can teach a concept twice and still lose a student to the forgetting curve by Friday, because re-reading and highlighting create a sense of familiarity that has almost nothing to do with retention. Blast Learning starts from that gap rather than from another video library. Each session is scheduled by an adaptive engine that tracks what a student has seen, how confidently they answered it, and when that memory is due to fade, so practice arrives at the moment recall takes real effort instead of the moment it feels comfortable. The result is not a faster way to consume more content. It is a study system that converts hours already being spent into marks that hold under exam pressure.
            </p>
            <p style={{ fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>
              Every course on this page, whether it runs through the CBSE syllabus, sharpens mathematical pattern recognition, builds inferential reading for English and the SAT, or prepares a student for the Digital SAT directly, sits on the same foundation described below. A GAP Assessment opens each course by identifying exactly where a student's knowledge breaks down, often several grades behind their enrolled level in a specific topic, and the AI Tutor then builds a path from that point rather than from the syllabus cover page. A Study Buddy keeps a real person in the loop for accountability and explanation, because no adaptive engine alone sustains a teenager's motivation through a Tuesday evening revision session. Parents see minutes studied and concepts mastered on a transparent dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px', maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <h2 className="t-h2" style={{ marginBottom: '20px' }}>
              The <AccentText tone="pink">Method</AccentText> Behind the <AccentText tone="blue">Marks</AccentText>
            </h2>
            <p className="t-body">
              Strip away the interface and five mechanisms do the actual work. Four of them move a student from gap to mastery in sequence; the fifth runs underneath all four, because none of them hold up if a student cannot manage focus, nerves, or a clock.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-2-md"
          >
            {[
              {
                num: '1',
                title: 'GAP Assessment',
                body: 'Before a single lesson is assigned, Blast finds out what a student actually knows, not what their grade level assumes they should know. A Class 10 student stuck on fractions from Class 5 is common, and the gap rarely shows up on a school report card. The GAP Assessment surfaces it on day one, so the study plan that follows starts from reality rather than from the syllabus index.',
              },
              {
                num: '2',
                title: 'The AI Tutor',
                body: 'Once the gap is mapped, the AI Tutor builds the path across it. Practice questions are generated fresh for each session rather than recycled from a fixed bank, calibrated to sit at the edge of what a student can currently do. Too easy and nothing sticks; too hard and the student disengages. The AI Tutor\'s job is to hold that edge, session after session, without a human tutor having to recalculate it by hand.',
              },
              {
                num: '3',
                title: 'Spaced Repetition and Retrieval Practice',
                body: 'Content is scheduled to resurface at the interval where recall has started to fade but has not yet disappeared, because that moment of effortful retrieval is what cognitive psychologists call the testing effect: among the most replicated findings in the field, and the actual mechanism behind durable memory. Students are asked to produce an answer from memory rather than recognise one from a page.',
              },
              {
                num: '4',
                title: 'Study Buddy',
                body: 'A human partner is paired with every student, working alongside the AI Tutor rather than instead of it. Two students or a student and a Study Buddy mentor receive synchronised, adaptive question sets, then practise together, explain answers to each other, and hold each other to the schedule. It is the accountability layer that makes an AI-paced study plan something a teenager will actually follow through November exam season.',
              },
              {
                num: '5',
                title: 'Mind Coach',
                body: 'A student can have the gap mapped, the path built, and the schedule perfectly timed, and still freeze in an exam hall because nobody taught them how to manage that moment. Mind Coach treats focus, emotional control, goal-setting, and personal agency as skills, not personality traits, which means they get taught the same deliberate way a chapter on thermodynamics gets taught.',
              },
            ].map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                className="surface-card surface-card-md"
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: '#E0F5FC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#0FA8DC', fontFamily: "'Inter', sans-serif" }}>{card.num}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--fs-h4)', fontWeight: 600, fontFamily: "'Inter', sans-serif", color: '#1C1C28', marginBottom: '10px' }}>{card.title}</h3>
                    <p style={{ fontSize: 'var(--fs-small)', lineHeight: 'var(--lh-small)', color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{card.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px', maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <h2 className="t-h2" style={{ marginBottom: '20px' }}>
              Four <AccentText tone="gradient">Courses</AccentText>. One Method.
            </h2>
            <p className="t-body">
              The five-mechanism system above runs identically across every course. What changes is the subject, the syllabus, and the specific gap each course is built to close.
            </p>
          </motion.div>
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
                    className="surface-card surface-card-xl"
                    style={{ position: 'relative', overflow: 'hidden', border: prog.featured ? '2px solid #0FA8DC' : '1px solid #ECECF1' }}
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
                        <h2 className="t-h4" style={{ marginBottom: '4px' }}>{prog.name}</h2>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                          <span style={{ fontSize: '26px', fontWeight: 700, fontFamily: "'Inter', sans-serif", color: '#1C1C28' }}>{prog.price}</span>
                          <span style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>/month</span>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: 'var(--fs-small)', lineHeight: 'var(--lh-small)', color: '#5A5A6E', marginBottom: '24px', fontFamily: "'Inter', sans-serif" }}>{prog.description}</p>

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
          <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
            Every course opens with a 14-day free trial and no credit card requirement. Enrol in two or more courses and a 20% discount applies automatically.
          </p>
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
            className="t-h2" style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            How We <AccentText tone="pink">Compare</AccentText>
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
                    fontFamily: "'Inter', sans-serif",
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
                      <span style={{ fontSize: 'var(--fs-h4)', color: '#6B6B7B' }}>×</span>
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
      <SharedTestimonialsSection row1={testimonialsRow1} row2={testimonialsRow2} subtitle="Hear from students who chose the right program and saw real results." />

      {/* ── FAQ ── */}
      <SharedFaqSection items={pageFaqs} />

      {/* ── CTA Banner ── */}
      <SharedImageCtaSection src={ctaBanner} alt="Learn Smarter. Achieve More. Start your Blast Learning journey today." />
    </div>
  );
}
