import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AccentText from '../components/AccentText';
import HeadingMarker from '../components/HeadingMarker';
import heroBanner4 from '../assets/banners/HB 4.png';
import BrandArc from '../components/BrandArc';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';
import MobileCarousel from '../components/MobileCarousel';
import step1Img from '../assets/Competency Based Learning.png';
import step2Img from '../assets/Critical Thinking.png';
import step3Img from '../assets/Curriculum Load Reduction.png';
import step4Img from '../assets/Study Buddy.png';
import step5Img from '../assets/Holistic Assessment.png';
import step6Img from '../assets/English Image.png';
import ebbinghausImg from '../assets/Ebbinghaus Curve.png';

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
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Full Syllabus plan is designed for Class 10, with full syllabus coverage and retention-first board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach  -  it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first two weeks." },
];

const programs = [
  {
    slug: 'cbse-plan',
    name: 'CBSE Plan',
    price: '₹1,299',
    classes: 'Class 10',
    description: 'Full CBSE syllabus coverage with a retention-first study system. Designed for Class 10 with the board exam content taught in a way that actually sticks.',
    outcomes: ['Board readiness', 'Retention tracking', 'Concept mastery'],
    features: [
      'Complete CBSE Class 10 curriculum coverage',
      'AI-powered gap assessment and targeted revision',
      'Board-focused practice built around retention, not just coverage',
      'Subject-wise retention tracking across all core subjects',
      'Weekly performance reports for parents',
      'Live doubt resolution sessions',
    ],
    featured: true,
  },
  {
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
  { feature: 'Parent Dashboard', blast: true, coaching: false, apps: false },
  { feature: 'Spaced Repetition', blast: true, coaching: false, apps: true },
  { feature: 'Human Support', blast: true, coaching: true, apps: false },
  { feature: 'Affordable Price', blast: true, coaching: false, apps: true },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Programs() {
  useSEO({
    title: 'Programs | CBSE, Maths, English & SAT Prep · Blast Learning',
    description: 'Explore CBSE, Maths Genius, English Edge, and SAT Prep programs designed for Classes 8-12. AI-powered spaced repetition. Start from ₹999/month.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero banner — HB 4 with single primary CTA */}
      <section style={{ paddingTop: '18px', paddingBottom: '10px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '2048 / 1092', overflow: 'hidden', background: '#FFFFFF', boxShadow: '0 8px 32px rgba(28,28,40,0.105)' }}>
            <img
              src={heroBanner4}
              alt="Blast Learning programs"
              width={2048}
              height={1092}
              loading="eager"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', objectPosition: 'center center' }}
            />
            {/* dots — top-left, matches home hero */}
            <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', position: 'absolute', top: '25%', left: '6%', zIndex: 3, pointerEvents: 'none' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '9999px', background: '#E8135A' }} />
              <span style={{ width: '5px', height: '5px', borderRadius: '9999px', background: '#E8135A' }} />
              <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#E8135A' }} />
              <span style={{ width: '9px', height: '3px', borderRadius: '9999px', background: '#E8135A' }} />
              <span style={{ width: '14px', height: '3px', borderRadius: '9999px', background: '#E8135A' }} />
            </span>
            {/* CTA — bottom-left */}
            <div
              className="programs-hero-cta"
              style={{ position: 'absolute', bottom: '15.1%', left: '4.4%', zIndex: 3 }}
            >
              <Link
                to="/programs/cbse-plan"
                className="cta"
                style={{
                  background: 'linear-gradient(90deg, #E8135A 0%, #0FA8DC 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  boxShadow: 'none',
                  height: '48px',
                  minHeight: '48px',
                  paddingTop: 0,
                  paddingBottom: 0,
                  lineHeight: 1,
                  boxSizing: 'border-box',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Start The 14-Day Free Trial <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'center' }} className="grid-cols-2-md">
            {/* Text */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <HeadingMarker text="Our Approach" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '24px' }}>
                The <AccentText tone="blue">science</AccentText> of lasting <AccentText tone="pink">retention</AccentText>
              </h2>
              <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.8, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '20px' }}>
                A coaching class can teach a concept twice and still lose a student to the forgetting curve by Friday, because re-reading and highlighting create a sense of familiarity that has almost nothing to do with retention. Blast Learning starts from that gap. Each session is scheduled by an adaptive engine that tracks what a student has seen, how confidently they answered it, and when that memory is due to fade.
              </p>
              <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.8, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>
                The Blast Learning GAP Assessment starts each course by identifying exactly where understanding breaks down, which is typically several grades earlier, and the AI Tutor builds the path from that point. A Study Buddy keeps a real person in the loop. Parents see retention scores apart from the time logged.
              </p>
            </motion.div>
            {/* Illustration */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)', background: '#fff' }}
            >
              <img src={ebbinghausImg} alt="Ebbinghaus Forgetting Curve" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.05} />
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <HeadingMarker text="How It Works" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: '20px' }}>
              The <AccentText tone="blue">Method</AccentText> Behind the <AccentText tone="pink">Marks</AccentText>
            </h2>
            <p className="t-body">
              Blast Learning runs on seven features: GAP Assessment, AI Tutor, Study Buddy, Mind Coach, spaced repetition, retrieval practice, and English Mastery. Each one builds a different part of how a student learns, and together they develop the same thing: the skills to learn independently, for life, in any course a student takes.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                num: '1', eyebrow: 'Precise by Design', accent: '#E8135A', bg: '#FCEEF1',
                title: 'GAP Assessment',
                body: 'Math Genius Maker opens with a quick GAP Assessment that checks what a student actually knows in math right now, not the grade on the cover. A Class 10 student missing a Class 5 fraction rule is still common and rarely shows up on a report card, so the study plan starts exactly where that gap sits and carries forward into this year\'s material, then into whatever comes next.',
                img: step1Img,
              },
              {
                num: '2', eyebrow: 'Intuitive by Design', accent: '#0FA8DC', bg: '#E0F5FC',
                title: 'The AI Tutor',
                body: 'The AI Tutor works out exactly where a student\'s understanding breaks down, then sets each question right at that edge, hard enough to demand real effort and forgiving enough that the student keeps going. That balance gets recalculated after every session, the same way, always, no matter the subject or course, so doubt-resolution carries into whatever a student studies next.',
                img: step2Img,
              },
              {
                num: '3', eyebrow: 'Cumulative by Design', accent: '#E8135A', bg: '#FCEEF1',
                title: 'Spaced Repetition & Retrieval Practice',
                body: 'Spaced repetition schedules review at the exact point a student\'s memory starts to slip, and retrieval practice asks them to answer, solve, or reconstruct an idea from memory first, with correction coming only after the attempt. Together, material gets recalled months later instead of forgotten the week after a test, the same way across every subject a student takes on.',
                img: step3Img,
              },
              {
                num: '4', eyebrow: 'Accountable by Design', accent: '#0FA8DC', bg: '#E0F5FC',
                title: 'Study Buddy',
                body: 'Study Buddy pairs a student with a human partner working through the same synchronised, adaptive question set, so neither one studies alone or loses momentum. A notification from an app rarely keeps a habit alive past the second week, a person checking in does, and that accountability habit holds whether the course changes from one term to the next, regardless of subject.',
                img: step4Img,
              },
              {
                num: '5', eyebrow: 'Resilient by Design', accent: '#8B5CF6', bg: '#F0EDFC',
                title: 'Mind Coach',
                body: 'Mind Coach treats focus, emotional control, goal-setting, agency, and exam composure as skills built through practice, not traits a student happens to have or lack. A child who freezes on a hard question is missing one specific, trainable skill, and Mind Coach builds it directly, the same way, regardless of which exam or course a student is preparing for, whatever it is.',
                img: step5Img,
              },
              {
                num: '6', eyebrow: 'Perceptive by Design', accent: '#0FA8DC', bg: '#E0F5FC',
                title: 'English Mastery',
                body: 'English Mastery builds comprehension as inference, working out what a passage actually implies rather than only what it states, a skill rote reading rarely builds on its own. That is the exact skill both board exams and the SAT test in their reading and writing sections, so a student who builds it once carries it directly into whichever exam, subject, or course comes next.',
                img: step6Img,
              },
            ].map((step, idx) => {
              const isReversed = idx % 2 !== 0;
              return (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`hiw-row${isReversed ? ' reversed' : ''}`}
                >
                  {/* Content panel */}
                  <div className="hiw-content" style={{ background: '#FFFFFF', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', alignItems: isReversed ? 'flex-start' : 'flex-end' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: step.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>{step.num}</span>
                      </div>
                      <HeadingMarker text={step.eyebrow} accent={step.accent} fontSize="11px" marginBottom="0" />
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 1rem + 1.5vw, 1.75rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '16px', lineHeight: 1.25, textAlign: isReversed ? 'left' : 'right' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", margin: 0, textAlign: isReversed ? 'left' : 'right' }}>
                      {step.body}
                    </p>
                  </div>

                  {/* Image panel */}
                  <div className="hiw-image" style={{ background: '#FFFFFF', display: 'flex', alignItems: 'stretch', justifyContent: 'center', padding: '0', position: 'relative', overflow: 'hidden', minHeight: '260px' }}>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            <HeadingMarker text="Programs" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: '20px' }}>
              Four <AccentText tone="blue">Courses</AccentText>. One <AccentText tone="pink">Method</AccentText>.
            </h2>
            <p className="t-body">
              The five-mechanism system above runs identically across every course. What changes is the subject, the syllabus, and the specific gap each course is built to close.
            </p>
          </motion.div>
          <MobileCarousel desktopGridClass="grid-cols-2-md" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}>
            {programs.map((prog, idx) => {
              const isPink = idx % 2 === 0;
              const accent = isPink ? '#E8135A' : '#0FA8DC';
              const buttonBg = isPink
                ? 'linear-gradient(90deg, #E8135A 0%, #F03C6F 100%)'
                : 'linear-gradient(90deg, #1E9BDA 0%, #4BB8E6 100%)';
              const priceNum = prog.price.replace('₹', '').trim();

              return (
                <motion.div
                  key={prog.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.06)',
                    transition: { type: 'spring', stiffness: 300, damping: 22 },
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ height: '3px', width: '100%', background: accent }} />
                  <div style={{ padding: '18px 16px 14px' }}>
                    <HeadingMarker text={prog.classes} accent={accent} fontSize="11px" />
                    <h3 style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 700, color: '#1C1C28', lineHeight: 'var(--lh-card)' }}>
                      {prog.name}
                    </h3>
                    <p className="t-body" style={{ margin: '8px 0 0' }}>
                      {prog.description}
                    </p>

                    <div style={{ height: '1px', background: '#E5E7EB', margin: '14px 0 12px' }} />

                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {prog.features.map((feature) => (
                        <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle size={13} style={{ color: accent, flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: '#4D5562', lineHeight: 1.35 }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '14px', gap: '2px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>₹</span>
                      <span style={{ fontSize: '1.55rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#1C1C28', lineHeight: 1 }}>
                        {priceNum}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>/month</span>
                    </div>

                    <Link
                      to={`/programs/${prog.slug}`}
                      className="cta"
                      style={{
                        marginTop: '10px',
                        width: '100%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 14px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        background: buttonBg,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        boxShadow: 'none',
                      }}
                    >
                      Start 14-Day Free Trial
                    </Link>

                    <p style={{ margin: '6px 0 0', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#A0A5B1' }}>
                      No credit card required
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </MobileCarousel>
          <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
            Every course opens with a 14-day free trial and no credit card requirement. Enrol in two or more courses and a 20% discount applies automatically.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <HeadingMarker text="Comparison" marginBottom="16px" fontSize="12px" />
            <motion.h2
              className="t-h2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginBottom: 0 }}
            >
              How <AccentText tone="blue">We</AccentText> Compare
            </motion.h2>
          </div>
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
      <SharedTestimonialsSection row1={testimonialsRow1} row2={testimonialsRow2} subtitle="Hear from students who chose the right program and saw real results." />

      {/* ── FAQ ── */}
      <SharedFaqSection
        items={pageFaqs}
        eyebrow="FAQ"
        accent="#0FA8DC"
        align="left"
        ctaInFaqColumn
        background="#F7FAFC"
        title={
          <>
            <span className="faq-heading-line" style={{ display: 'block' }}>Common <AccentText tone="blue">questions</AccentText></span>
            <span style={{ display: 'block' }}>Direct <AccentText tone="pink">answers</AccentText>.</span>
          </>
        }
        subtitle="If your question isn't here, the full FAQ page covers every edge case - billing, syllabus details, Study Buddy matching, and technical requirements."
        linkLabel="More FAQ..."
      />

    </div>
  );
}
