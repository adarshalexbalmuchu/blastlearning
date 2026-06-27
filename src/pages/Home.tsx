import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  CheckCircle,
} from 'lucide-react';
import MobileCarousel from '../components/MobileCarousel';
import HeroCarousel from '../components/HeroCarousel';
import FeatureExplorer from '../components/FeatureExplorer';
import TrustStats from '../components/TrustStats';
import HowItWorksCard from '../components/HowItWorksCard';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';
import HeadingMarker from '../components/HeadingMarker';
import ebbinghausCurve from '../assets/Ebbinghaus Curve.png';
import { useSEO } from '../hooks/useSEO';

// ─── Data ──────────────────────────────────────────────────────────────────────

const howItWorks = [
  {
    num: '01',
    eyebrow: 'Cumulative by Design',
    title: 'Spaced Repetition',
    desc: 'Spaced repetition schedules review at the exact point a student\'s memory starts to slip, and retrieval practice asks them to answer, solve, or reconstruct an idea from memory first, with correction coming only after the attempt. Together, material gets recalled months later instead of forgotten the week after a test.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Long-term recall</span>
        <span style={{ color: '#E8135A' }}> · Retrieval practice</span>
        <span style={{ color: '#0FA8DC' }}> · Adaptive pacing</span>
      </>
    ),
    accent: '#0FA8DC',
  },
  {
    num: '02',
    eyebrow: 'Perceptive by Design',
    title: 'English Mastery',
    desc: 'English Mastery builds comprehension as inference, working out what a passage actually implies rather than only what it states, a skill rote reading rarely builds on its own. That is the exact skill both board exams and the SAT test in their reading and writing sections.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Inference</span>
        <span style={{ color: '#E8135A' }}> · Comprehension</span>
        <span style={{ color: '#0FA8DC' }}> · Exam-ready writing</span>
      </>
    ),
    accent: '#E8135A',
  },
  {
    num: '03',
    eyebrow: 'Spaced Repetition',
    title: 'AI Tutor',
    desc: 'AI Tutor turns brief topic notes into a full study guide: a summary lesson, an interactive podcast, and a schedule built around the student\'s class and next test. Every question stays fresh and calibrated to the right level for steady mastery.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Personalized</span>
        <span style={{ color: '#0FA8DC' }}> · </span>
        <span style={{ color: '#E8135A' }}>Adaptive</span>
        <span style={{ color: '#0FA8DC' }}> · Exam-aligned</span>
      </>
    ),
    descFooterColor: '#0FA8DC',
    accent: '#0FA8DC',
  },
  {
    num: '04',
    eyebrow: 'Active Recall',
    title: 'Study Buddy',
    desc: 'A human partner studies alongside your student, working from the same adaptive question set so both track progress together. Your student never works through the material alone, building confidence through co-studying.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Peer accountability</span>
        <span style={{ color: '#E8135A' }}> · Shared progress</span>
      </>
    ),
    accent: '#0FA8DC',
  },
  {
    num: '05',
    eyebrow: 'Self-Regulation',
    title: 'Mind Coach',
    desc: 'Mind Coach treats focus, emotional control, goal-setting, and personal agency as learnable skills, each built through its own practice routine. Test taking gets the same treatment, rehearsed under timed conditions, step by step, until it holds.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Focus</span>
        <span style={{ color: '#0FA8DC' }}> · </span>
        <span style={{ color: '#E8135A' }}>Resilience</span>
        <span style={{ color: '#0FA8DC' }}> · Agency</span>
      </>
    ),
    accent: '#3B82F6',
  },
  {
    num: '06',
    eyebrow: 'Diagnostic-First Learning',
    title: 'GAP Assessment',
    desc: 'GAP Assessment finds the gaps left by earlier years and builds a personalized path that closes exactly those gaps. From there, your student moves into the current year\'s material, then ahead into next year\'s, well ahead of the grade-level pace.',
    descFooter: (
      <>
        <span style={{ color: '#0FA8DC' }}>Targeted</span>
        <span style={{ color: '#0FA8DC' }}> · </span>
        <span style={{ color: '#E8135A' }}>Sequential</span>
        <span style={{ color: '#0FA8DC' }}> · No wasted time</span>
      </>
    ),
    accent: '#0FA8DC',
  },
];

const pricingPlans = [
  {
    id: 'cbse',
    slug: 'cbse-plan',
    name: 'CBSE Full Syllabus',
    classes: 'Retention-Optimized · Class 10',
    desc: 'The CBSE course is built on spaced repetition from the ground up, with each chapter sequenced for maximum and lasting retention.',
    monthlyPrice: 1299,
    yearlyMonthly: 1039,
    features: [
      'All core NCERT subjects covered',
      'Spaced repetition session engine',
      'AI Tutor with doubt resolution',
      'Study Buddy matching',
      'Weekly parent progress reports',
    ],
    featured: true,
  },
  {
    id: 'math',
    slug: 'math-genius',
    name: 'Math Genius Maker',
    classes: 'Foundation-Rebuilt · Grades 5–8',
    desc: 'A diagnostic test locates exactly where the student got stuck, then rebuilds only those foundations, skipping mastered concepts.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'GAP Assessment on enrolment',
      'Topic-by-topic mastery tracking',
      '500+ adaptive practice problems',
      'AI Tutor with doubt resolution',
      'Study Buddy matching',
    ],
    featured: false,
  },
  {
    id: 'english',
    slug: 'english-mastery',
    name: 'English Mastery Pass',
    classes: 'SAT-Compatible · CBSE & ICSE',
    desc: 'Comprehension and grammar training serves both board exams and the Digital SAT, producing one system with two distinct outcomes.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Reading, grammar, & writing modules',
      'CBSE and ICSE board aligned',
      'Digital SAT format compatible',
      'AI Tutor with doubt resolution',
      'Study Buddy matching',
    ],
    featured: false,
  },
  {
    id: 'sat',
    slug: 'sat-prep',
    name: 'SAT Prep Pass',
    classes: 'Diagnostic-Engineered · Digital SAT',
    desc: "Mirrors the Digital SAT's adaptive format. Retrieval practice calibrated to exact question types and time pressures of the exam.",
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Full Digital SAT syllabus coverage',
      'Adaptive question sets per session',
      '6 full-length mock tests included',
      'AI Tutor with doubt resolution',
      'Study Buddy matching',
    ],
    featured: false,
  },
];

const homeFaqs = [
  { q: 'Is Blast Learning a tutoring platform?', a: 'Blast Learning is not a tutoring platform. It is a self-study operating system built on retrieval practice, spaced repetition, and habits that turn instruction into memory.' },
  { q: 'Which boards and exams does Blast Learning cover?', a: 'Blast supports CBSE and ICSE school tracks, plus JEE, NEET, and SAT-aligned preparation paths depending on course selection.' },
  { q: 'How is the 14-day free trial structured?', a: 'Every course includes a full 14-day trial with core features enabled, and no credit card is required to begin.' },
  { q: 'What is a Study Buddy and how are they matched?', a: 'A Study Buddy is a peer accountability partner working through aligned adaptive sessions, with progress tracked for both students.' },
  { q: 'How much time does a student need to spend each day?', a: 'Most students spend 45 minutes to 1.5 hours per day depending on their syllabus load. The AI optimizes study time so every minute is spent on high-priority material.' },
  { q: 'Do you offer a discount for enrolling in multiple courses?', a: 'Yes. Families enrolling in two or more courses receive a 20% discount on the second subscription and beyond.' },
];

const resourceArticles = [
  {
    tag: 'GUIDE',
    tagAccent: '#E8135A',
    readTime: '8 min read',
    title: "The Parent's Guide to Self-Study",
    desc: 'How to set up a home environment where retrieval practice actually happens without turning every evening into a battle.',
  },
  {
    tag: 'ARTICLE',
    tagAccent: '#0FA8DC',
    readTime: '6 min read',
    title: "Why Re-Reading Doesn't Work",
    desc: 'A plain-language summary of 50 years of cognitive science on why passive review fails and what to do instead.',
  },
  {
    tag: 'BLOG',
    tagAccent: '#E8135A',
    readTime: '5 min read',
    title: 'NEP 2020 and Competency-Based Learning',
    desc: 'What the National Education Policy actually asks of students and how spaced repetition maps directly to its learning outcomes.',
  },
  {
    tag: 'RESEARCH',
    tagAccent: '#0FA8DC',
    readTime: '7 min read',
    title: 'The GAP Assessment Methodology',
    desc: 'How Blast Learning\'s diagnostic isolates sub-topic gaps rather than chapter-level gaps and why the difference matters for results.',
  },
  {
    tag: 'BLOG',
    tagAccent: '#E8135A',
    readTime: '4 min read',
    title: 'Study Buddy: The Accountability Effect',
    desc: 'Peer accountability raises completion rates by 40%. Here is the research behind Study Buddy pairing and how we implement it.',
  },
  {
    tag: 'ARTICLE',
    tagAccent: '#0FA8DC',
    readTime: '6 min read',
    title: 'Spaced Repetition for the CBSE Calendar',
    desc: 'A practical schedule mapping Blast Learning sessions to the CBSE academic year, term exams, and board exam revision windows.',
  },
];

// ─── Scroll-reveal variants ─────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Section heading internal stagger variants
const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const eyebrowAnim: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};
const h2Anim: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};
const subtitleAnim: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Reusable section heading ───────────────────────────────────────────────────
const PINK = '#E8135A';
const CYAN = '#0FA8DC';
const G = (word: string, color: string = PINK) => (
  <span style={{ color }}>{word}</span>
);
const GP = (word: string) => (
  <span
    style={{
      backgroundImage: 'linear-gradient(90deg, #E8135A 0%, #0FA8DC 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    }}
  >
    {word}
  </span>
);

function SectionHeading({ eyebrow, title, subtitle, accent, align = 'left', subtitleMaxWidth = '600px' }: { eyebrow?: string; title: React.ReactNode; subtitle?: React.ReactNode; accent?: string; align?: 'left' | 'center'; subtitleMaxWidth?: string }) {
  const isCentered = align === 'center';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={headingContainer}
      style={{ textAlign: align, marginBottom: '32px' }}
    >
      {eyebrow && (
        <motion.div variants={eyebrowAnim}>
          <HeadingMarker text={eyebrow} fontSize="12px" accent={accent} />
        </motion.div>
      )}
      <motion.h2
        variants={h2Anim}
        className="t-h2"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={subtitleAnim}
          className="t-body" style={{ maxWidth: subtitleMaxWidth, margin: isCentered ? '12px auto 0' : '12px 0 0', textAlign: align }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// ─── Program card with hover color wash + blob expansion ──────────────────────

// ─── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useSEO({
    title: 'Blast Learning | AI-Powered Study Retention for Indian Students',
    description: "India's #1 AI-powered study retention platform. Convert expensive coaching into permanent memory with spaced repetition. 4,999+ students, 91% retention rate. Start your free 7-day trial.",
  });

  return (
    <div>
      {/* ── Hero Banner ── */}
      <div>
        <HeroCarousel />
      </div>

      {/* ── Trust stats: overlap hero bottom ── */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 0 }}>
        <TrustStats />
      </div>

      {/* ── Features: expandable explorer (white) ── */}
      <section className="section-pad" style={{ paddingTop: '40px', paddingBottom: '32px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="NEP 2020"
            accent={PINK}
            align="left"
            title={<>{G('NEP 2020', CYAN)} Set the {G('Rules', CYAN)}.<br />We Were {GP('Already Playing by Them')}.</>}
            subtitleMaxWidth="980px"
            subtitle={<><span className="nep-subtitle-line" style={{ display: 'block' }}>NEP 2020 changed what schools test for.</span><span className="nep-subtitle-line" style={{ display: 'block' }}>Most coaching platforms still grade on coverage and memorisation, because that's the system they were built for.</span><span className="nep-subtitle-line" style={{ display: 'block' }}>Blast Learning runs on retrieval practice, competency-based progression, and continuous assessment.</span><span className="nep-subtitle-line" style={{ display: 'block' }}>We built it that way before the policy existed. NEP 2020 just gave the rest of the industry a deadline to catch up.</span></>}
          />
          <FeatureExplorer />
        </div>
      </section>

      {/* ── How It Works (off-white) ── */}
      <section id="how-it-works" className="section-pad" style={{ paddingTop: '40px', paddingBottom: '32px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8% 0px' }}
            variants={headingContainer}
            style={{ marginBottom: '32px' }}
          >
            <div style={{ maxWidth: '760px' }}>
              <motion.div variants={eyebrowAnim}>
                <HeadingMarker text="Method & Science" fontSize="12px" accent={CYAN} />
              </motion.div>
              <motion.h2 variants={h2Anim} className="t-h2 method-heading">
                The {G('science', PINK)} that explains the {G('method', CYAN)}.
              </motion.h2>
            </div>

            <div className="method-intro-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '48px', marginTop: '12px' }}>
              <motion.p variants={subtitleAnim} className="t-body method-intro-copy" style={{ flex: '1 1 0', minWidth: 0, maxWidth: '600px', margin: 0 }}>
                Ebbinghaus&apos;s Forgetting Curve is the starting point: students lose 80% of what they learn within 24 hours, and the brain discards information it isn&apos;t asked to use regardless of how hard a student studied. Each of the four steps below applies the science that fights this loss directly. The step is the practice; the principle beside it explains why it works.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="method-curve-card"
                style={{ flex: '0 0 530px', maxWidth: '530px', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)', cursor: 'default', transform: 'translateX(16px)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)',
                  transition: { type: 'spring', stiffness: 280, damping: 22 },
                }}
              >
                <img
                  src={ebbinghausCurve}
                  alt="Ebbinghaus Forgetting Curve"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>
            </div>
          </motion.div>
          <MobileCarousel desktopGridClass="grid-cols-2-md grid-cols-3-lg" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginTop: '-5px', marginBottom: '28px', alignItems: 'stretch' }}>
            {howItWorks.map(({ num, eyebrow, title, desc, descFooter, descFooterColor, accent }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ height: '100%' }}
              >
                <HowItWorksCard num={num} eyebrow={eyebrow} title={title} desc={desc} descFooter={descFooter} descFooterColor={descFooterColor} accent={accent} Visual={() => null} height="100%" showVisual={false} />
              </motion.div>
            ))}
          </MobileCarousel>
          <div className="deep-dive-btn-wrap" style={{ textAlign: 'center' }}>
            <Link className="cta cta-pink" to="/programs">
              Deep Dive Into Method & Science
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing / Programs (white) ── */}
      <section id="programs-preview" className="section-pad" style={{ paddingTop: '18px', paddingBottom: '32px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Courses & Pricing"
            accent={CYAN}
            align="center"
            title={<>Four {G('courses', CYAN)}. One underlying {G('system', PINK)}.</>}
            subtitle="Different subjects, different exams - the same science of memory underneath all of them."
          />

          {/* Pricing cards (Figma layout) */}
          <MobileCarousel desktopGridClass="grid-cols-2-md" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px', alignItems: 'stretch' }}>
            {pricingPlans.map((plan, idx) => {
              const isPink = idx % 2 === 0;
              const accent = isPink ? '#E8135A' : '#0FA8DC';
              const buttonBg = isPink
                ? 'linear-gradient(90deg, #E8135A 0%, #F03C6F 100%)'
                : 'linear-gradient(90deg, #1E9BDA 0%, #4BB8E6 100%)';

              return (
                <motion.div
                  key={plan.id}
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
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div style={{ height: '3px', width: '100%', background: accent }} />
                  <div style={{ padding: '18px 16px 14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <HeadingMarker text={plan.classes} accent={accent} fontSize="11px" />
                    <h3 className="pricing-card-title" style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 700, color: '#1C1C28', lineHeight: 'var(--lh-card)' }}>
                      {plan.name}
                    </h3>
                    <p className="t-body" style={{ margin: '8px 0 0' }}>
                      {plan.desc}
                    </p>

                    <div style={{ height: '1px', background: '#E5E7EB', margin: '14px 0 12px' }} />

                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {plan.features.map((feature) => (
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
                        {plan.monthlyPrice.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>/month</span>
                    </div>

                    <Link
                      to={`/programs/${plan.slug}`}
                      className="cta"
                      style={{
                        marginTop: 'auto',
                        width: '100%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px 24px',
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
        </div>
      </section>


      {/* ── Testimonials (white) ── */}
      <SharedTestimonialsSection
        eyebrow="Observed Evidence"
        accent="#E8135A"
        align="center"
        background="#FFFFFF"
        title={<>What changes once {GP('retrieval')} replaces {G('re-reading', CYAN)}.</>}
        subtitle="Students and parents describe what changed after shifting from passive review to retrieval-based study."
        row1={[
          {
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            name: 'Ananya Krishnan',
            role: 'A student of class 10, Bangalore',
            planName: 'CBSE Plan',
            text: 'Within three weeks I could see my son actually remembering what he had studied the week before. That had never happened with tuition classes.',
          },
          {
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            name: 'Rahul Mehta',
            role: 'A student of class 12, Mumbai',
            planName: 'CBSE Plan',
            text: 'The GAP Assessment was the first time someone told us specifically what was wrong with his maths, not just that he needed more practice.',
          },
          {
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            name: 'Kavitha Suresh',
            role: 'A student of class 9, Hyderabad',
            planName: 'English Mastery',
            text: 'I went in expecting to study for CBSE and ended up fully prepared for the SAT as well. The English Mastery Pass does exactly what it says.',
          },
          {
            image: 'https://randomuser.me/api/portraits/men/77.jpg',
            name: 'Arjun Nair',
            role: 'Class 11, Math Genius · Chennai',
            text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.',
          },
          {
            image: 'https://randomuser.me/api/portraits/men/11.jpg',
            name: 'Karan Malhotra',
            role: 'Class 12, SAT Prep Pass · Gurgaon',
            text: 'Blast\'s SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months.',
          },
        ]}
        row2={[
          {
            image: 'https://randomuser.me/api/portraits/men/54.jpg',
            name: 'Deepak Sharma',
            role: 'Parent · Class 11 CBSE, Delhi',
            text: 'The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven\'t had to nag him about studying in two months.',
          },
          {
            image: 'https://randomuser.me/api/portraits/women/21.jpg',
            name: 'Sunita Reddy',
            role: 'Parent · Class 10 CBSE, Pune',
            text: 'We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day.',
          },
          {
            image: 'https://randomuser.me/api/portraits/women/31.jpg',
            name: 'Priya Iyer',
            role: 'Parent · Class 10 CBSE, Kochi',
            text: 'My daughter\'s board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically.',
          },
          {
            image: 'https://randomuser.me/api/portraits/women/57.jpg',
            name: 'Meena Patel',
            role: 'Parent · Class 9 CBSE, Ahmedabad',
            text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.',
          },
          {
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
            name: 'Vikram Gupta',
            role: 'Parent · Class 12 CBSE, Jaipur',
            text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.',
          },
        ]}
      />

      {/* ── Resources (white) ── */}
      <section id="resources" className="section-pad" style={{ paddingTop: '40px', paddingBottom: '32px', background: '#FFFFFF', borderTop: '1px solid #EAEFF5', borderBottom: '1px solid #EAEFF5' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Library"
            accent={PINK}
            align="left"
            title={<>The {G('thought', CYAN)} behind the {GP('product')}.</>}
            subtitle="Articles, blogs, research papers, case studies, guides, and tools for parents and students who want to understand why the method works, and how to put it into practice."
          />
          <MobileCarousel desktopGridClass="grid-cols-3-md" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', alignItems: 'stretch' }}>
            {resourceArticles.map((article) => {
              const accent = article.tagAccent;

              return (
              <motion.article
                className="card-subtle"
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 40px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.06)',
                  transition: { type: 'spring', stiffness: 300, damping: 22 },
                }}
                style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  border: '1px solid #E7E9EE',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(28,28,40,0.04)',
                }}
              >
                <div style={{ height: '3px', background: accent, width: '100%' }} />
                <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                    <HeadingMarker text={article.tag} accent={accent} fontSize="10px" marginBottom="0" />
                    <span style={{ fontSize: '11px', color: '#A0A5B1', fontFamily: 'Inter, sans-serif' }}>{article.readTime}</span>
                  </div>
                  <h3 className="t-h4" style={{ fontSize: 'clamp(1.25rem, 0.98rem + 0.55vw, 1.55rem)', marginBottom: '12px', lineHeight: 1.3, letterSpacing: '-0.015em' }}>{article.title}</h3>
                  <p className="t-body" style={{ color: '#6B6F7B', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>{article.desc}</p>
                  <Link to="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: accent, fontWeight: 700, fontSize: '12px', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                    Read more
                  </Link>
                </div>
              </motion.article>
            );})}
          </MobileCarousel>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link className="cta cta-blue" to="/library">
              Access The Full Library
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Preview (white) ── */}
      <SharedFaqSection
        items={homeFaqs}
        eyebrow="FAQ"
        accent="#0FA8DC"
        align="left"
        ctaInFaqColumn
        background="#F7FAFC"
        title={
          <>
            <span className="faq-heading-line" style={{ display: 'block' }}>Common {G('questions', CYAN)}</span>
            <span style={{ display: 'block' }}>Direct {G('answers', PINK)}.</span>
          </>
        }
        subtitle="If your question isn't here, the full FAQ page covers every edge case - billing, syllabus details, Study Buddy matching, and technical requirements."
        linkLabel="More FAQ..."
      />
    </div>
  );
}
