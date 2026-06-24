import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import FeatureExplorer from '../components/FeatureExplorer';
import TrustStats from '../components/TrustStats';
import HowItWorksCard, { UploadVisual, AIVisual, MasteryVisual, GapVisual } from '../components/HowItWorksCard';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';
import HeadingMarker from '../components/HeadingMarker';
import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';

// ─── Data ──────────────────────────────────────────────────────────────────────

const howItWorks = [
  {
    num: '01',
    title: 'AI Tutor',
    desc: "A quick diagnostic builds a personalised study plan, scheduled at the interval where recall is hardest and retention sticks. Everything stays tuned to the student's actual class and the next test, so study time gets used, not added to.",
    accent: '#0FA8DC',
    Visual: UploadVisual,
  },
  {
    num: '02',
    title: 'Study Buddy',
    desc: 'A human partner works from the same adaptive question set, and progress gets tracked for both. No student studies alone.',
    accent: '#0FA8DC',
    Visual: AIVisual,
  },
  {
    num: '03',
    title: 'Mind Coach',
    desc: 'Focus, emotional control, goal-setting, and personal agency, taught as skills with their own practice routine. Test-taking gets the same treatment: rehearsed under timed conditions until it holds.',
    accent: '#3B82F6',
    Visual: MasteryVisual,
  },
  {
    num: '04',
    title: 'GAP Assessment',
    desc: "Blast finds the gaps left by earlier years, builds a path that closes exactly those gaps, then moves the student into the current year's material.",
    accent: '#0FA8DC',
    Visual: GapVisual,
  },
];

const pricingPlans = [
  {
    id: 'cbse',
    slug: 'cbse-plan',
    name: 'CBSE Full Syllabus',
    classes: 'Class 6-12 · All core subjects',
    desc: 'The CBSE course built on spaced repetition from the ground up. Every chapter is sequenced for retention, not just coverage.',
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
    classes: 'Grade 5-12 · GAP Assessment driven',
    desc: 'Starts with a diagnostic to find where a student is stuck, then rebuilds only those foundations. Zero wasted time on mastered concepts.',
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
    classes: 'CBSE & ICSE · SAT-compatible',
    desc: 'Comprehension and grammar built to serve both board exams and the Digital SAT through one study system.',
    monthlyPrice: 999,
    yearlyMonthly: 799,
    features: [
      'Reading, grammar & writing modules',
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
    classes: 'Digital SAT · Diagnostic-first',
    desc: 'Mirrors the Digital SAT adaptive format with retrieval practice calibrated to real question types and time pressure.',
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
    readTime: '8 min read',
    title: "The Parent's Guide to Self-Study",
    desc: 'How to set up a home environment where retrieval practice actually happens without turning every evening into a battle.',
  },
  {
    tag: 'RESEARCH',
    readTime: '6 min read',
    title: "Why Re-Reading Doesn't Work",
    desc: 'A plain-language summary of 50 years of cognitive science on why passive review fails and what to do instead.',
  },
  {
    tag: 'GUIDE',
    readTime: '5 min read',
    title: 'NEP 2020 and Competency-Based Learning',
    desc: 'What the National Education Policy actually asks of students and how spaced repetition maps directly to its learning outcomes.',
  },
  {
    tag: 'RESEARCH',
    readTime: '7 min read',
    title: 'The GAP Assessment Methodology',
    desc: 'How Blast Learning\'s diagnostic isolates sub-topic gaps rather than chapter-level gaps and why the difference matters for results.',
  },
  {
    tag: 'GUIDE',
    readTime: '4 min read',
    title: 'Study Buddy: The Accountability Effect',
    desc: 'Peer accountability raises completion rates by 40%. Here is the research behind Study Buddy pairing and how we implement it.',
  },
  {
    tag: 'RESEARCH',
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

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
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
          <HeadingMarker text={eyebrow} marginBottom="10px" fontSize="12px" accent={accent} />
        </motion.div>
      )}
      <motion.h2
        variants={h2Anim}
        style={{ fontSize: 'var(--fs-h2-fluid)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#111111' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={subtitleAnim}
          style={{ fontSize: '0.95rem', color: '#5A5A6E', fontWeight: 400, fontFamily: 'Inter, sans-serif', maxWidth: subtitleMaxWidth, margin: isCentered ? '12px auto 0' : '12px 0 0', lineHeight: 1.65, textAlign: align }}
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
  const [isYearly, setIsYearly] = useState(false);

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
            subtitle={<><span style={{ display: 'block', whiteSpace: 'nowrap' }}>NEP 2020 changed what schools test for.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>Most coaching platforms still grade on coverage and memorisation, because that's the system they were built for.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>Blast Learning runs on retrieval practice, competency-based progression, and continuous assessment.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>We built it that way before the policy existed. NEP 2020 just gave the rest of the industry a deadline to catch up.</span></>}
          />
          <FeatureExplorer />
        </div>
      </section>

      {/* ── Pricing / Programs (off-white) ── */}
      <section id="programs-preview" className="section-pad" style={{ paddingTop: '18px', paddingBottom: '32px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          {/* Centered header + toggle */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-8% 0px' }} variants={headingContainer} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <motion.div variants={eyebrowAnim}>
              <HeadingMarker text="Courses & Pricing" marginBottom="10px" fontSize="12px" accent={CYAN} />
            </motion.div>
            <motion.h2 variants={h2Anim} style={{ fontSize: 'var(--fs-h2-fluid)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '12px', color: '#111111' }}>
              Four courses. One underlying {G('system', PINK)}.
            </motion.h2>
            <motion.p variants={subtitleAnim} style={{ fontSize: '0.95rem', color: '#5A5A6E', fontWeight: 400, fontFamily: 'Inter, sans-serif', marginBottom: '8px', maxWidth: '540px', margin: '0 auto 8px', lineHeight: 1.65, textAlign: 'center' }}>
              Different subjects, different exams - the same science of memory underneath all of them.
            </motion.p>
            <motion.p variants={subtitleAnim} style={{ fontSize: '13px', color: '#A0A0B0', fontFamily: 'Inter, sans-serif', marginBottom: '22px' }}>
              All prices in INR · billed monthly
            </motion.p>
            {/* Monthly / Yearly toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', color: '#1C1C28' }}>
              <span style={{ opacity: isYearly ? 0.45 : 1, transition: 'opacity 0.2s' }}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                aria-label="Toggle billing period"
                style={{ width: '44px', height: '24px', borderRadius: '999px', background: isYearly ? '#0FA8DC' : '#D1D5DB', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.25s', padding: 0, flexShrink: 0 }}
              >
                <span style={{ position: 'absolute', top: '3px', left: isYearly ? '23px' : '3px', width: '18px', height: '18px', borderRadius: '50%', background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', transition: 'left 0.25s' }} />
              </button>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: isYearly ? 1 : 0.45, transition: 'opacity 0.2s' }}>
                Yearly
                <span style={{ padding: '2px 8px', borderRadius: '9999px', background: '#ECFDF5', color: '#059669', fontSize: '11px', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="programs-scroll"
          >
            {pricingPlans.map((plan) => {
              const price = isYearly ? plan.yearlyMonthly : plan.monthlyPrice;
              const annualYearly = plan.yearlyMonthly * 12;
              const annualMonthly = plan.monthlyPrice * 12;
              return (
                <motion.div
                  key={plan.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    position: 'relative',
                    background: plan.featured
                      ? 'linear-gradient(180deg, #FFF6F9 0%, #FFFFFF 24%)'
                      : 'linear-gradient(180deg, #F9FCFF 0%, #FFFFFF 24%)',
                    border: plan.featured ? '2px solid #F7B4C9' : '1.5px solid #E6ECF4',
                    borderRadius: '22px',
                    padding: '24px',
                    boxShadow: plan.featured
                      ? '0 10px 26px rgba(240,60,111,0.12)'
                      : '0 8px 22px rgba(28,28,40,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                  }}
                >
                  {/* Most Popular badge */}
                  {plan.featured && (
                    <span style={{
                      position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                      padding: '5px 14px', fontSize: '11px', fontWeight: 700, color: 'white',
                      background: '#F03C6F', borderRadius: '9999px', fontFamily: 'Inter, sans-serif',
                      whiteSpace: 'nowrap', boxShadow: 'none',
                    }}>
                      Most Popular
                    </span>
                  )}

                  {/* Plan name + classes */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.32rem', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: 0, lineHeight: 1.25 }}>
                      {plan.name}
                    </h3>
                    <span style={{ padding: '3px 10px', fontSize: '11px', fontWeight: 600, borderRadius: '9999px', background: plan.featured ? '#FDE9F0' : '#EFF6FB', color: plan.featured ? '#C0265D' : '#0F6F95', fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>
                      {plan.classes}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#69758A', fontFamily: 'Inter, sans-serif', margin: '0 0 18px', lineHeight: 1.58, minHeight: '62px' }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '18px', padding: '14px 14px 12px', borderRadius: '14px', background: plan.featured ? '#FFF1F6' : '#F5FAFE', border: plan.featured ? '1px solid #FAD3E1' : '1px solid #E4EFF7' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', paddingBottom: '6px' }}>₹</span>
                      <span style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1 }}>
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', paddingBottom: '5px', marginLeft: '2px' }}>/mo</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#7E899A', fontFamily: 'Inter, sans-serif', marginTop: '6px', lineHeight: 1.45 }}>
                      {isYearly
                        ? `Billed ₹${annualYearly.toLocaleString('en-IN')}/yr · saves ₹${(annualMonthly - annualYearly).toLocaleString('en-IN')}`
                        : `₹${plan.yearlyMonthly.toLocaleString('en-IN')}/mo when billed yearly`}
                    </p>
                  </div>

                  {/* Separator */}
                  <div style={{ height: '1px', background: '#E9EEF5', marginBottom: '18px' }} />

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                        <CheckCircle size={15} style={{ color: plan.featured ? '#F03C6F' : '#0FA8DC', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '13px', color: '#3D4658', fontFamily: 'Inter, sans-serif', lineHeight: 1.45 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/programs/${plan.slug}`}
                    className={plan.featured ? 'cta cta-pink' : 'cta'}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      padding: '12px 20px', borderRadius: '12px',
                      fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none', marginTop: 'auto',
                      background: plan.featured ? '#F03C6F' : 'transparent',
                      color: plan.featured ? 'white' : '#1C1C28',
                      border: plan.featured ? 'none' : '1.5px solid #CCD8E6',
                      boxShadow: 'none',
                    }}
                  >
                    Start Your 14-Day Free Trial <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works (white) ── */}
      <section id="how-it-works" className="section-pad" style={{ paddingTop: '40px', paddingBottom: '32px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Method & Science"
            accent={CYAN}
            align="left"
            title={<>The {G('science', PINK)} that explains the method.</>}
            subtitle="Ebbinghaus's Forgetting Curve is the starting point: students lose 80% of what they learn within 24 hours - not from lack of effort, but because the brain discards what it isn't asked to use. Each of the four steps below is a direct application of the science that fights this. The step is the practice; the principle beside it is why it works."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '28px' }} className="grid-cols-2-md grid-cols-4-lg">
            {howItWorks.map(({ num, title, desc, accent, Visual }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <HowItWorksCard title={title} desc={desc} accent={accent} Visual={Visual} />
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center' }}>
            <Link className="cta cta-pink" to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: '#F03C6F', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: 'none' }}>
              Start the 14-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* ── Testimonials (white) ── */}
      <SharedTestimonialsSection
        eyebrow="Parents & Students"
        accent="#E8135A"
        align="center"
        background="#FFFFFF"
        title={<>What changes once {G('retrieval', CYAN)} replaces re-reading.</>}
        subtitle="Students and parents describe what changed after shifting from passive review to retrieval-based study."
        row1={[
          {
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            name: 'Ananya Krishnan',
            role: 'Class 10, CBSE Plan · Bangalore',
            text: 'Within three weeks I could see my son actually remembering what he had studied the week before. That had never happened with tuition classes.',
          },
          {
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            name: 'Rahul Mehta',
            role: 'Class 12, CBSE Plan · Mumbai',
            text: 'The GAP Assessment was the first time someone told us specifically what was wrong with his maths, not just that he needed more practice.',
          },
          {
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            name: 'Kavitha Suresh',
            role: 'Class 9, English Mastery · Hyderabad',
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
            eyebrow="Resources"
            accent={PINK}
            align="left"
            title={<>The {G('thinking', CYAN)} behind the product.</>}
            subtitle="Research summaries and practical guides for parents and students who want to understand why the method works."
          />
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Link className="cta cta-blue" to="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '10px', background: '#0FA8DC', color: 'white', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', boxShadow: '0 8px 22px rgba(15,168,220,0.2)' }}>
              View all resources <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-cols-3-md" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '18px' }}>
            {resourceArticles.map((article) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -3 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7ECF3',
                  borderRadius: '18px',
                  padding: '22px',
                  boxShadow: '0 6px 18px rgba(28,28,40,0.04)',
                }}
              >
                <p style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>{article.tag}</span>
                  <span style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{article.readTime}</span>
                </p>
                <h3 style={{ fontSize: '1.625rem', color: '#1C1C28', fontFamily: 'Poppins, sans-serif', marginBottom: '10px', lineHeight: 1.4 }}>{article.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '14px' }}>{article.desc}</p>
                <Link to="/library" style={{ color: '#0FA8DC', fontWeight: 600, fontSize: '13px', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                  Read more
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview (white) ── */}
      <SharedFaqSection items={homeFaqs} eyebrow="FAQ" accent="#0FA8DC" align="center" background="#F7FAFC" title={<>Common questions, direct {G('answers', PINK)}.</>} subtitle="If your question isn't here, the full FAQ page covers every edge case - billing, syllabus details, Study Buddy matching, and technical requirements." linkLabel="View full FAQ page" />
    </div>
  );
}
