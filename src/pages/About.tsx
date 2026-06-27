import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import MobileCarousel from '../components/MobileCarousel';
import { fadeUp, stagger } from '../constants/animations';

const leaders = [
  {
    name: 'Bruce Lewolt',
    title: 'Founder',
    initials: 'BL',
    accent: '#0FA8DC',
    bio: 'Built the underlying methodology over twenty-five years, later licensed by IBM and McGraw-Hill and protected by patents in the US and internationally. He remains the architect of the system Blast Learning India runs on.',
  },
  {
    name: 'Ankit Sahu',
    title: 'Founder & Managing Director',
    initials: 'AS',
    accent: '#E8135A',
    bio: "An electrical engineer with an MBA from the University of San Francisco, Sahu has built and scaled businesses across India's financial sector, including a digital payments platform serving rural communities. He brought Lewolt's methodology to India in 2024.",
  },
  {
    name: 'Purvi Sahu',
    title: 'Director & Chief Marketing Officer',
    initials: 'PS',
    accent: '#0FA8DC',
    bio: "Twenty-eight years in business and operations inform how Purvi Sahu shapes the brand a parent encounters before they ever speak to a counsellor. Her role spans strategy and the daily decisions that keep that strategy consistent.",
  },
  {
    name: 'Arun Kumar Tyagi',
    title: 'Director of Alliances',
    initials: 'AT',
    accent: '#E8135A',
    bio: 'A professor with decades inside Indian education and innovation circles, Tyagi manages the partnerships that extend Blast Learning India\'s reach across CBSE, ICSE, and NEP 2020-aligned institutions.',
  },
  {
    name: 'Reena Prakash Tyagi',
    title: 'Director of Content Management',
    initials: 'RT',
    accent: '#0FA8DC',
    bio: "Reena Prakash Tyagi founded SEAS Global Institute, recognised as India's first fully virtual school, before joining Blast Learning India to oversee how content gets built and maintained.",
  },
  {
    name: 'Aditya Reddy Dinesh',
    title: 'Head of Business Development',
    initials: 'AD',
    accent: '#E8135A',
    bio: 'Studied international hospitality management at the Swiss Hotel Management School before moving into startups and customer-facing growth roles. He owns the commercial relationships that turn product readiness into actual enrolment.',
  },
];

const beliefs = [
  {
    num: '01',
    title: 'No Child Is Weak',
    desc: 'A low mark rarely measures ability. More often, it measures whether a student was ever shown a method that matches how their memory actually works. Every student can close that gap once the method is right.',
    accent: '#0FA8DC',
  },
  {
    num: '02',
    title: 'Skills Over Marks',
    desc: 'Marks fade faster than the skills that produced them. We teach recall under pressure, structured revision, and honest self-assessment: skills that outlast a single board exam and apply directly to the next one.',
    accent: '#E8135A',
  },
  {
    num: '03',
    title: 'Made for India',
    desc: "Blast Learning India was rebuilt around the CBSE calendar, the realities of joint-family study schedules, and the particular pressure of board season, not retrofitted from someone else's curriculum.",
    accent: '#0FA8DC',
  },
];

const researchStats = [
  { value: '500+', label: 'Peer-reviewed learning science studies behind the methodology', color: '#E8135A' },
  { value: '100,000+', label: 'Students taught under this system, across multiple countries', color: '#0FA8DC' },
  { value: 'US & International', label: 'Patents protecting the core methodology', color: '#E8135A' },
  { value: 'IBM & McGraw-Hill', label: 'Institutional partners who have licensed the underlying technology', color: '#0FA8DC' },
];

const curriculumPills = ['CBSE', 'ICSE', 'JEE', 'NEET', 'SAT', 'NEP 2020'];

const timelinePoints = [
  {
    dot: '#0FA8DC',
    year: 'Research Foundation',
    label: 'Twenty-five years',
    desc: 'Learning science methodology developed and refined, eventually licensed by IBM and McGraw-Hill and protected by US and international patents. Core insight: most underperforming students are missing a method, not ability.',
  },
  {
    dot: '#E8135A',
    year: '2020: Platform Founded',
    label: 'A decision point',
    desc: 'Remote schooling exposed how few students could study without a teacher physically present. Twenty-five years of enterprise research became a direct-to-student platform on one premise: every student deserves this training.',
  },
  {
    dot: '#0FA8DC',
    year: '2024: India Launch',
    label: 'Blast Learning India',
    desc: 'The same patented methodology rebuilt for the CBSE curriculum, the Indian coaching economy, and the particular pressures of board exam season, not a retrofit, a rebuild.',
  },
];

export default function About() {
  useSEO({
    title: 'About Us | Blast Learning India',
    description:
      "Blast Learning India is the self-study operating system beneath every family's existing educational investment. Twenty-five years of patented learning science rebuilt for CBSE, ICSE, and SAT-track students.",
  });

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)',
        paddingTop: '120px',
        paddingBottom: '100px',
        borderBottom: '1px solid #DAEEF6',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'start' }}
            className="grid-cols-2-lg"
          >
            {/* Left: label + title */}
            <div>
              <HeadingMarker text="Who We Are" marginBottom="24px" fontSize="12px" />
              <h1 className="page-hero-title">
                About <AccentText tone="blue">Blast</AccentText> <AccentText tone="pink">Learning</AccentText> India
              </h1>
            </div>

            {/* Right: description */}
            <div style={{ paddingTop: '4px' }}>
              <p className="page-hero-copy" style={{ marginBottom: '16px' }}>
                Ask a parent managing a child's CBSE or ICSE schedule what worries them most, and marks rarely top the list. The real worry is retention. Months of tuition fade within days, and no extra coaching class has ever fixed that on its own.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                Blast Learning is not a tutoring platform. It is the self-study operating system beneath all other educational investment, the layer that decides whether anything taught survives past the exam it was meant for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Our Story ────────────────────────────────────────── */}
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
            {/* Left: copy */}
            <motion.div variants={fadeUp}>
              <HeadingMarker text="Our Story" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                A System Built Before It <AccentText tone="blue">Had</AccentText> a <AccentText tone="pink">Market</AccentText>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Bruce Lewolt spent twenty-five years building learning technology before most of today's edtech platforms existed; work that was eventually licensed by IBM and McGraw-Hill and used by more than 100,000 students across multiple countries. His research rests on one observation: most students who underperform are missing a method that fits how their memory actually works, not additional ability.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  That research sat largely behind enterprise licensing deals until 2020, when remote schooling exposed how few students could study without a teacher physically present. Reading and mathematics scores fell to their lowest recorded levels within months. Lewolt made a decision that turned twenty-five years of licensed research into a direct-to-student platform, founding Blast Learning that year on one premise: give every student the same independent-learning training that, until then, only large institutions could afford to license.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Ankit Sahu, an electrical engineer with an MBA from the University of San Francisco and a record of building businesses across India's financial sector, partnered with Lewolt in 2024 to adapt that platform for students in India. The result is Blast Learning India: the same patented methodology rebuilt for the CBSE curriculum and the realities of the Indian coaching economy.
                </p>
              </div>
            </motion.div>

            {/* Right: vertical timeline */}
            <motion.div variants={fadeUp} style={{ paddingTop: '4px' }}>
              <div style={{ position: 'relative' }}>
                {/* Connector line */}
                <div style={{
                  position: 'absolute',
                  left: '19px',
                  top: '18px',
                  bottom: '18px',
                  width: '2px',
                  background: 'linear-gradient(to bottom, #0FA8DC 0%, #E8135A 50%, #0FA8DC 100%)',
                  borderRadius: '2px',
                }} />

                {timelinePoints.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: i < timelinePoints.length - 1 ? '44px' : 0 }}
                  >
                    {/* Dot */}
                    <div style={{ flexShrink: 0, width: '40px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, paddingTop: '2px' }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: item.dot,
                        border: '3px solid #F9FAFB',
                        boxShadow: `0 0 0 2px ${item.dot}55`,
                      }} />
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: item.dot, marginBottom: '3px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                        {item.year}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '8px' }}>
                        {item.label}
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Research Stats ───────────────────────────────────── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section intro */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
              <HeadingMarker text="The Research Behind the System" marginBottom="16px" fontSize="12px" />
              <p className="t-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Every claim on this page is traceable to a study, a patent filing, or a partnership that predates Blast Learning India itself.
              </p>
            </motion.div>
            {/* Bordered stat band */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                borderTop: '1px solid #ECECF1',
                borderLeft: '1px solid #ECECF1',
              }}
              className="grid-cols-4-md"
            >
              {researchStats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '40px 24px',
                    borderRight: '1px solid #ECECF1',
                    borderBottom: '1px solid #ECECF1',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 'clamp(1.45rem, 3vw, 2.1rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: stat.color, lineHeight: 1.1, marginBottom: '12px' }}>
                    {stat.value}
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', margin: '0 auto', maxWidth: '200px' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Curriculum pills */}
            <motion.div variants={fadeUp} style={{ marginTop: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 500 }}>
                Curriculum range this methodology already maps to in India
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {curriculumPills.map((pill, i) => (
                  <span
                    key={pill}
                    style={{
                      padding: '5px 16px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      background: i % 2 === 0 ? '#E0F5FC' : '#FFF0F4',
                      color: i % 2 === 0 ? '#0FA8DC' : '#E8135A',
                      border: `1px solid ${i % 2 === 0 ? '#B3E5F5' : '#FBCCD8'}`,
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Our Position ─────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
              <HeadingMarker text="Our Position" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '20px' }}>
                Why a <AccentText tone="blue">System</AccentText>, Not a <AccentText tone="pink">Service</AccentText>
              </h2>
              <p className="t-body" style={{ maxWidth: '740px', margin: '0 auto' }}>
                Every competitor in the Indian coaching market is, at its core, a content business: more videos, more question banks, more live classes layered onto a schedule that is already full. Blast Learning India was built on a different bet: retention, not exposure, is the actual product parents are paying for. The methodology is aligned to CBSE and ICSE curricula and structured around the competency goals set out in NEP 2020, but the underlying skillset travels with a student long after a particular syllabus is finished.
              </p>
            </motion.div>

            {/* Vision + Mission cards */}
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '40px' }}
              className="grid-cols-2-md"
            >
              <motion.div variants={fadeUp} className="card-subtle surface-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '3px', background: '#0FA8DC' }} />
                <div style={{ padding: '28px' }}>
                  <HeadingMarker text="Vision" marginBottom="16px" fontSize="11px" accent="#0FA8DC" />
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#1C1C28', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif", fontStyle: 'italic', margin: 0 }}>
                    A future where a child's result in the exam hall has nothing to do with how much a family could afford to spend on tuition, and everything to do with whether that child was ever taught how to learn.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="card-subtle surface-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '3px', background: '#E8135A' }} />
                <div style={{ padding: '28px' }}>
                  <HeadingMarker text="Mission" marginBottom="16px" fontSize="11px" accent="#E8135A" />
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#1C1C28', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif", fontStyle: 'italic', margin: 0 }}>
                    To put twenty-five years of patented learning science inside a system every CBSE, ICSE, and SAT-track family in India can actually use, regardless of how much coaching they have already paid for.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Brand mantra */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', paddingTop: '8px' }}>
              <p style={{ fontSize: '19px', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif", fontStyle: 'italic', color: '#8E8EA0', letterSpacing: '0.01em', margin: 0 }}>
                "Curiosity is a habit."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. What We Believe ──────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <HeadingMarker text="What We Believe" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: 0 }}>
              What We <AccentText tone="blue">Believe</AccentText>
            </h2>
          </motion.div>
          <MobileCarousel
            desktopGridClass="grid-cols-3-md"
            desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}
          >
            {beliefs.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.12)' }}
                className="card-subtle surface-card"
                style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {/* Accent bar */}
                <div style={{ height: '3px', background: b.accent, flexShrink: 0 }} />
                <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
                  {/* Large abstract number — structural, not decorative */}
                  <div aria-hidden="true" style={{ position: 'absolute', top: '10px', right: '18px', fontSize: '56px', fontWeight: 800, fontFamily: 'Poppins, sans-serif', color: b.accent, opacity: 0.07, lineHeight: 1, userSelect: 'none' }}>
                    {b.num}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '12px' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', flex: 1, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* ── 6. Leadership ───────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <HeadingMarker text="Leadership" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: '16px' }}>
              The People <AccentText tone="blue">Building</AccentText> <AccentText tone="pink">It</AccentText>
            </h2>
            <p className="t-body" style={{ maxWidth: '580px', margin: '0 auto' }}>
              Six people carry direct responsibility for what Blast Learning India becomes, each accountable for a distinct piece of the system.
            </p>
          </motion.div>
          <MobileCarousel
            desktopGridClass="grid-cols-2-sm grid-cols-3-lg"
            desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.10)' }}
                className="card-subtle surface-card"
                style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {/* Image slot — replace inner div with <img src="…" /> when photos are ready */}
                <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#F3F4F6', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {/* Triangle corner accent */}
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: 0, height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 44px 44px 0',
                    borderColor: `transparent ${leader.accent} transparent transparent`,
                    zIndex: 1,
                  }} />
                  {/* Initials placeholder */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '76px', height: '76px', borderRadius: '50%',
                      background: `${leader.accent}18`,
                      border: `2px solid ${leader.accent}50`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '24px', fontWeight: 700, fontFamily: 'Poppins, sans-serif',
                      color: leader.accent,
                    }}>
                      {leader.initials}
                    </div>
                    <span style={{ fontSize: '10px', color: '#B0B0C0', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Photo coming soon
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '4px' }}>
                    {leader.name}
                  </h3>
                  <HeadingMarker text={leader.title} fontSize="10px" marginBottom="12px" accent={leader.accent} />
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', flex: 1, margin: '0 0 16px' }}>
                    {leader.bio}
                  </p>
                  <a
                    href="#"
                    style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: leader.accent, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    Read {leader.name.split(' ')[0]}'s full profile and articles →
                  </a>
                </div>
              </motion.div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* ── 7. Get In Touch ─────────────────────────────────────── */}
      <section style={{ paddingTop: '72px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '600px' }}>
          {/* Thin Cyan rule */}
          <div style={{ height: '2px', background: 'linear-gradient(90deg, #0FA8DC 0%, #E8135A 100%)', marginBottom: '48px', borderRadius: '2px' }} />

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}>
              <HeadingMarker text="Questions? Let's Connect" marginBottom="16px" fontSize="12px" />
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '36px' }}>
                Every question a parent asks during the trial period gets answered by someone who actually understands the methodology, not a script.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#8E8EA0', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  Email
                </div>
                <div style={{ fontSize: '17px', fontFamily: 'Inter, sans-serif', color: '#1C1C28', fontWeight: 500 }}>
                  team@blastlearning.in
                </div>
                <div style={{ fontSize: '11px', color: '#C4C4D0', fontFamily: 'Inter, sans-serif', marginTop: '3px' }}>
                  Verify before publishing
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#8E8EA0', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  Call
                </div>
                <div style={{ fontSize: '17px', fontFamily: 'Inter, sans-serif', color: '#1C1C28', fontWeight: 500 }}>
                  +91 XXXXX XXXXX
                </div>
                <div style={{ fontSize: '11px', color: '#C4C4D0', fontFamily: 'Inter, sans-serif', marginTop: '3px' }}>
                  Verify before publishing
                </div>
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
