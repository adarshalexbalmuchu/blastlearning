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
import { useSEO } from '../hooks/useSEO';

// ─── Data ──────────────────────────────────────────────────────────────────────

const howItWorks = [
  {
    num: '01',
    eyebrow: 'Spaced Repetition',
    title: 'AI Tutor',
    desc: "A short diagnostic builds a study plan, timed to when recall is hardest, so study time isn't wasted.",
    accent: '#0FA8DC',
    Visual: UploadVisual,
  },
  {
    num: '02',
    eyebrow: 'Active Recall',
    title: 'Study Buddy',
    desc: 'Study Buddy shares the same adaptive question set and tracks progress for both. No one studies solo.',
    accent: '#0FA8DC',
    Visual: AIVisual,
  },
  {
    num: '03',
    eyebrow: 'SELF REGULATION',
    title: 'Mind Coach',
    desc: 'Focus, emotional control, goal-setting, and agency are treated as skills. Test-taking gets the same.',
    accent: '#3B82F6',
    Visual: MasteryVisual,
  },
  {
    num: '04',
    eyebrow: 'Diagnostic-First Learning',
    title: 'GAP Assessment',
    desc: "Blast pinpoints each gap left by earlier years, then builds a path into the current year's material.",
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
    tag: 'ARTICLE',
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
            subtitle={<><span style={{ display: 'block', whiteSpace: 'nowrap' }}>NEP 2020 changed what schools test for.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>Most coaching platforms still grade on coverage and memorisation, because that's the system they were built for.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>Blast Learning runs on retrieval practice, competency-based progression, and continuous assessment.</span><span style={{ display: 'block', whiteSpace: 'nowrap' }}>We built it that way before the policy existed. NEP 2020 just gave the rest of the industry a deadline to catch up.</span></>}
          />
          <FeatureExplorer />
        </div>
      </section>

      {/* ── Pricing / Programs (off-white) ── */}
      <section id="programs-preview" className="section-pad" style={{ paddingTop: '18px', paddingBottom: '32px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            eyebrow="Courses & Pricing"
            accent={CYAN}
            align="center"
            title={<>Four {G('courses', CYAN)}. One underlying {G('system', PINK)}.</>}
            subtitle="Different subjects, different exams - the same science of memory underneath all of them."
          />

          {/* Pricing cards (Figma layout) */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '16px',
            }}
            className="grid-cols-2-md"
          >
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
                    <HeadingMarker text={plan.classes} accent={accent} fontSize="11px" />
                    <h3 style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 700, color: '#1C1C28', lineHeight: 'var(--lh-card)' }}>
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
            title={<>The {G('science', PINK)} that explains the {G('method', CYAN)}.</>}
            subtitle="Ebbinghaus's Forgetting Curve is the starting point: students lose 80% of what they learn within 24 hours - not from lack of effort, but because the brain discards what it isn't asked to use. Each of the four steps below is a direct application of the science that fights this. The step is the practice; the principle beside it is why it works."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginTop: '-20px', marginBottom: '28px' }} className="grid-cols-2-md grid-cols-4-lg">
            {howItWorks.map(({ num, eyebrow, title, desc, accent, Visual }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <HowItWorksCard num={num} eyebrow={eyebrow} title={title} desc={desc} accent={accent} Visual={Visual} height="300px" descLines={4} />
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center' }}>
            <Link className="cta cta-pink" to="/programs">
              Start Your Journey Now <ArrowRight size={16} />
            </Link>
          </div>
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
            eyebrow="Library"
            accent={PINK}
            align="left"
            title={<>The {G('thinking', CYAN)} behind the {GP('product')}.</>}
            subtitle="Research summaries and practical guides for parents and students who want to understand why the method works."
          />
          <div className="grid-cols-3-md" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}>
            {resourceArticles.map((article) => {
              const accent = article.tagAccent;

              return (
              <motion.article
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
                  minHeight: '250px',
                  boxShadow: '0 2px 8px rgba(28,28,40,0.04)',
                }}
              >
                <div style={{ height: '3px', background: accent, width: '100%' }} />
                <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', minHeight: '248px' }}>
                  <p style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                    <HeadingMarker text={article.tag} accent={accent} fontSize="10px" marginBottom="0" />
                    <span style={{ fontSize: '11px', color: '#A0A5B1', fontFamily: 'Inter, sans-serif' }}>{article.readTime}</span>
                  </p>
                  <h3 className="t-h4" style={{ fontSize: 'clamp(1.25rem, 0.98rem + 0.55vw, 1.55rem)', marginBottom: '12px', lineHeight: 1.3, letterSpacing: '-0.015em' }}>{article.title}</h3>
                  <p className="t-body" style={{ color: '#6B6F7B', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>{article.desc}</p>
                  <Link to="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: accent, fontWeight: 700, fontSize: '12px', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            );})}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link className="cta cta-blue" to="/library">
              View all resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Preview (white) ── */}
      <SharedFaqSection items={homeFaqs} eyebrow="FAQ" accent="#0FA8DC" align="center" background="#F7FAFC" title={<>Common {G('questions', CYAN)}, direct {G('answers', PINK)}.</>} subtitle="If your question isn't here, the full FAQ page covers every edge case - billing, syllabus details, Study Buddy matching, and technical requirements." linkLabel="View full FAQ page" />
    </div>
  );
}
