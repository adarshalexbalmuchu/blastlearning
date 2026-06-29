import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import MobileCarousel from '../components/MobileCarousel';
import FAQItem from '../components/FAQItem';
import { fadeUp, stagger } from '../constants/animations';

const parentFaqs = [
  {
    q: 'Will this replace our tutor?',
    a: 'No. It sits beneath the tutoring, making it stick.',
  },
  {
    q: 'What if my child stops using it?',
    a: 'The system flags missed sessions and you\'ll receive a notification. The AI automatically adjusts the study plan so your child can catch up without being overwhelmed when they return. Our Tutor Mom team can also reach out directly if a student goes quiet.',
  },
  {
    q: 'What happens after the 14-day trial?',
    a: 'You choose a plan that fits your child\'s programme. There is no obligation to continue, no automatic charge, and your child\'s progress data remains accessible to you regardless of what you decide.',
  },
  {
    q: 'Is this just another screen?',
    a: 'No. The platform requires active recall — your child has to produce answers, not passively read content. That is the difference between the feeling of learning and actual retention. Most sessions are under 20 minutes.',
  },
  {
    q: 'Can I talk to a person first?',
    a: 'Yes. Our team is available to answer questions before you start anything. Use the Contact page and someone will respond within 24 hours.',
  },
];

const transparencyItems = [
  {
    label: 'What you\'ll see.',
    title: 'The Parent Dashboard',
    body: 'A daily digest of exactly what your child studied, how long they spent, and their retention score by subject. Weekly summaries track progress over time. No interpretation required — the numbers speak plainly.',
    accent: '#0FA8DC',
  },
  {
    label: 'Who\'s with your child.',
    title: 'The Tutor Mom Team',
    body: 'Real educators, available Monday to Saturday, 9 AM to 9 PM. They monitor session quality, answer subject doubts within two hours, and reach out proactively when a student\'s retention drops below target.',
    accent: '#E8135A',
  },
];

const programs = [
  { name: 'CBSE Full Syllabus', situation: 'Boards, any core subject', price: 'Rs 1,299/month', subtitle: 'Class 10 board exam preparation', desc: 'Complete NCERT coverage with retention-first pacing across all seven core subjects.', path: '/programs/cbse-plan', accent: '#E8135A' },
  { name: 'Math Genius Maker', situation: 'Math gap or JEE/NEET', price: 'Rs 999/month', subtitle: 'Targeted gap assessment', desc: 'Finds the exact concepts holding your child back in Mathematics and builds a focused practice plan.', path: '/programs/math-genius', accent: '#0FA8DC' },
  { name: 'English Mastery Pass', situation: 'Comprehension or SAT-track', price: 'Rs 999/month', subtitle: 'Grammar, writing, comprehension', desc: 'Structured skill-building for the English paper — the subject most students underestimate.', path: '/programs/english-mastery', accent: '#E8135A' },
  { name: 'SAT Prep Pass', situation: 'Digital SAT specifically', price: 'Rs 999/month', subtitle: 'US college admission', desc: 'Foundation to advanced SAT preparation, suitable from Class 10 onward.', path: '/programs/sat-prep', accent: '#0FA8DC' },
];

const mechanismStats = [
  { value: '80%', label: 'of new information forgotten within 24 hours without structured revision', color: '#E8135A' },
  { value: '91%', label: 'of Blast Learning students improve what they retain within the first month', color: '#0FA8DC' },
  { value: '500+', label: 'peer-reviewed studies behind the spaced repetition methodology', color: '#E8135A' },
];

const researchStats = [
  { value: '500+', label: 'peer-reviewed learning studies', color: '#E8135A' },
  { value: '100,000+', label: 'students taught under this system', color: '#0FA8DC' },
  { value: 'US & International', label: 'patents protecting the methodology', color: '#E8135A' },
  { value: 'IBM & McGraw-Hill', label: 'institutional licensing partners', color: '#0FA8DC' },
];

const researchTimeline = [
  { label: '25 years', sublabel: 'Lewolt builds the methodology', color: '#E8135A' },
  { label: 'Licensed', sublabel: 'IBM and McGraw-Hill adopt it', color: '#0FA8DC' },
  { label: 'Mind Coach', sublabel: 'Co-developed with Dr. Jon Finn', color: '#E8135A' },
  { label: '2024', sublabel: 'Rebuilt for India', color: '#0FA8DC' },
];

export default function ForParents() {
  useSEO({
    title: 'For Parents | Blast Learning India',
    description: 'Understand how Blast Learning makes your child\'s existing study time more effective — with full visibility, human support, and a methodology built over twenty-five years.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #FCE4EC 0%, #FFF5F8 40%, #FFFFFF 100%)',
        paddingTop: '120px',
        paddingBottom: '100px',
        borderBottom: '1px solid #F9DAEA',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'start' }}
            className="grid-cols-2-lg"
          >
            <div>
              <HeadingMarker text="FOR PARENTS" marginBottom="24px" fontSize="12px" accent="#E8135A" />
              <h1 className="page-hero-title">
                The Real Question Isn't Whether Your Child Is <AccentText tone="pink">Trying</AccentText>
              </h1>
            </div>
            <div>
              <p className="page-hero-copy" style={{ marginBottom: '16px' }}>
                Most children who struggle academically are trying. The problem is not effort — it is that nobody ever taught them how memory actually works, and every hour of coaching they attend fades faster than anyone admits.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                Blast Learning does not add more content to your child's day. It makes everything they are already learning stay. That distinction is why parents who try it stop asking whether it is worth the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Mechanism ────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'start' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp}>
              <HeadingMarker text="THE MECHANISM" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                Re-Reading Feels Like <AccentText tone="blue">Learning</AccentText>. It <AccentText tone="pink">Isn't</AccentText>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Hermann Ebbinghaus documented the forgetting curve in 1885: without active reinforcement, students lose up to 80% of new information within 24 hours. Re-reading the same notes gives the feeling of familiarity, which the brain misinterprets as memory. It is not. Familiarity and recall are different cognitive processes, and only one of them works in an exam hall.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Blast Learning's Metacognition Engine applies spaced repetition and active recall at precisely the intervals where memory loss is about to occur. Each session is not revision for its own sake — it is a timed intervention that moves information from short-term exposure to long-term storage. The science behind this has been peer-reviewed in over 500 studies.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  This is not a new technique dressed up in software. It is what IBM paid to license, what McGraw-Hill embedded into their curriculum tools, and what 100,000 students across multiple countries have studied with before a single Indian student used it.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ paddingTop: '136px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {mechanismStats.map((stat) => (
                  <div key={stat.value} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', boxShadow: '0 1px 4px rgba(28,28,40,0.04)' }}>
                    <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: stat.color, lineHeight: 1, flexShrink: 0, minWidth: '72px' }}>
                      {stat.value}
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0, paddingTop: '4px' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Calculator ───────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="A TOOL, NOT A PITCH" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                Run the Numbers Before You <AccentText tone="blue">Decide</AccentText> Anything
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Enter what you currently spend on coaching. The calculator shows you exactly what percentage of that investment is retained by your child after 30 days — and what Blast Learning adds to that figure. No sales language. One comparison line.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div style={{ background: '#F9FAFB', border: '1.5px dashed #DCDCE5', borderRadius: '20px', padding: '64px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#8E8EA0', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Coaching ROI Calculator
                </p>
                <p style={{ fontSize: '15px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '0' }}>
                  Interactive calculator coming soon. Contact us to get a personalised estimate now.
                </p>
                <Link to="/contact" className="cta cta-outline" style={{ marginTop: '24px', display: 'inline-flex' }}>
                  Talk to Our Team
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Research / History ───────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="WHY THIS ISN'T A NEW IDEA" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                Twenty-Five Years Before the First <AccentText tone="blue">Indian</AccentText> Student <AccentText tone="pink">Used It</AccentText>
              </h2>
            </motion.div>

            {/* Stat cards */}
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }} className="grid-cols-2-md grid-cols-4-lg">
                {researchStats.map((stat) => (
                  <div key={stat.value} style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '16px', padding: '32px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', boxShadow: '0 1px 4px rgba(28,28,40,0.04)' }}>
                    <p style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: stat.color, margin: 0, lineHeight: 1 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp}>
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: '20px', marginBottom: '16px' }}>
                <div style={{ position: 'absolute', top: '50%', left: '12.5%', right: '12.5%', height: '1.5px', background: '#D1D5DB', transform: 'translateY(-50%)' }} />
                {researchTimeline.map((point, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: point.color, position: 'relative', zIndex: 1, flexShrink: 0 }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {researchTimeline.map((point, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '12px 12px 0' }}>
                    <p style={{ fontWeight: 700, fontSize: '16px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28', margin: '0 0 4px' }}>
                      {point.label}
                    </p>
                    <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {point.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Transparency ─────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="TRANSPARENCY, NOT REASSURANCE" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                A Human Partner, Visible Progress, <AccentText tone="blue">No Surprises</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Most edtech platforms ask parents to trust a dashboard. Blast Learning gives you a dashboard and a person — so that what you see is always accompanied by someone who can explain it.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
              className="grid-cols-2-md"
            >
              {transparencyItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <div style={{ height: '100%', background: '#F9FAFB', borderRadius: '20px', border: '1px solid #ECECF1', padding: '32px', borderTop: `3px solid ${item.accent}` }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: item.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      {item.label}
                    </p>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '16px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Program Selection ────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="CHOOSING, NOT BROWSING" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                Start From Where Your Child <AccentText tone="pink">Actually Is</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                Most programs ask you to choose a plan before knowing where your child struggles. We start with a GAP Assessment that identifies exactly which concepts are missing, so the program your child uses is built around their actual gaps, not a generic syllabus.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              {/* Desktop: decision tree layout */}
              <div className="show-lg-blk">
                {/* Top node */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ border: '1.5px solid #1C1C28', borderRadius: '12px', padding: '14px 32px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '16px', color: '#1C1C28', background: '#FFFFFF', whiteSpace: 'nowrap' }}>
                    What's the situation?
                  </div>
                </div>
                {/* Stem + horizontal bar + 4 vertical drops */}
                <div style={{ position: 'relative', height: '72px' }}>
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1.5px', height: '36px', background: '#D1D5DB' }} />
                  <div style={{ position: 'absolute', top: '35px', left: '12.5%', right: '12.5%', height: '1.5px', background: '#D1D5DB' }} />
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} style={{ position: 'absolute', top: '35px', left: `${12.5 + i * 25}%`, transform: 'translateX(-50%)', width: '1.5px', height: '37px', background: '#D1D5DB' }} />
                  ))}
                </div>
                {/* 4-col cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                  {programs.map((prog) => (
                    <Link key={prog.name} to={prog.path} style={{ textDecoration: 'none' }}>
                      <div style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '28px 20px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', boxSizing: 'border-box' }}>
                        <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0, lineHeight: 1.5 }}>
                          {prog.situation}
                        </p>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0 }}>
                          {prog.name}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                          {prog.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '28px', marginBottom: 0 }}>
                  14-day free trial. No credit card. 20% off two or more courses.
                </p>
              </div>

              {/* Mobile: simple carousel (hidden on desktop) */}
              <div className="hide-lg">
                <MobileCarousel desktopGridClass="grid-cols-2-md">
                  {programs.map((prog) => (
                    <div key={prog.name} style={{ border: `2px solid ${prog.accent}`, borderRadius: '16px', padding: '24px', textAlign: 'center', background: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <p style={{ fontSize: '12px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                        {prog.situation}
                      </p>
                      <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: prog.accent, margin: 0 }}>
                        {prog.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', margin: 0, flex: 1 }}>
                        {prog.price}
                      </p>
                      <Link to={prog.path} style={{ fontSize: '13px', fontWeight: 600, color: prog.accent, textDecoration: 'none' }}>
                        View program →
                      </Link>
                    </div>
                  ))}
                </MobileCarousel>
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '24px', marginBottom: 0 }}>
                  14-day free trial. No credit card. 20% off two or more courses.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="BEFORE YOU DECIDE" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2">
                The Questions We'd <AccentText tone="blue">Ask Too</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} style={{ maxWidth: '800px' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', padding: '4px 20px', boxShadow: '0 1px 4px rgba(28,28,40,0.04)' }}>
                {parentFaqs.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/faq" className="cta cta-outline">View all FAQs</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 60%, #FFFFFF 100%)', borderTop: '1px solid #DAEEF6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '640px' }}>
              <HeadingMarker text="TWO WAYS FORWARD" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '20px' }}>
                Begin the Trial, or Talk to <AccentText tone="pink">Someone First</AccentText>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '36px' }}>
                The 14-day free trial requires no credit card and gives you full access to every feature, including the parent dashboard, daily digests, and the Tutor Mom team. If you'd prefer to speak with someone before starting, we're available.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <Link to="/programs" className="cta cta-pink">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="cta cta-outline">
                  Talk to Our Team
                </Link>
              </div>
              <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginTop: '16px' }}>
                No credit card required. Cancel anytime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
