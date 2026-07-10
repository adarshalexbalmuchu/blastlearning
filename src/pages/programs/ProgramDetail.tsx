import { useState, useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { getProgramBySlug } from '../../data/programs';
import AccentText from '../../components/AccentText';
import PageHeading from '../../components/PageHeading';
import HeadingMarker from '../../components/HeadingMarker';
import { SharedFaqSection, SharedTestimonialsSection } from '../../components/MarketingSections';
import MobileCarousel from '../../components/MobileCarousel';
import banner1 from '../../assets/banners/HB 1.jpg';
import banner2 from '../../assets/banners/HB 2.jpg';
import banner3 from '../../assets/banners/HB 3.jpg';
import banner4 from '../../assets/banners/HB 4.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const PROGRAM_BANNERS: Record<string, string> = {
  'cbse-plan': banner1,
  'math-genius': banner3,
  'english-mastery': banner2,
  'sat-prep': banner4,
};

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const program = slug ? getProgramBySlug(slug) : undefined;

  const [openCurriculum, setOpenCurriculum] = useState<number>(0);
  const [form, setForm] = useState({ name: '', phone: '', cls: '' });

  useEffect(() => {
    if (program) {
      document.title = `${program.name} | Blast Learning`;
      return () => { document.title = 'Blast Learning'; };
    }
  }, [program]);

  if (!program) return <Navigate to="/programs" replace />;
  const heroBanner = PROGRAM_BANNERS[program.slug] ?? banner1;

  const testimonialCards = program.testimonials.map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    text: testimonial.content,
  }));

  const dotColor = program.slug === 'math-genius' || program.slug === 'sat-prep' ? '#E8135A' : '#0FA8DC';

  return (
    <div className="program-detail-page" style={{ background: '#FFFFFF' }}>
      {/* ─── Hero Banner ───────────────────────────────────────── */}
      <section className="hero-banner-offset" style={{ paddingTop: '18px', paddingBottom: '10px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2048 / 1092',
              overflow: 'hidden',
              background: '#FFFFFF',
              boxShadow: '0 8px 32px rgba(28,28,40,0.105)',
              borderRadius: '0',
            }}
          >
            <img
              src={heroBanner}
              alt={`${program.name} hero banner`}
              width={2048}
              height={1092}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'contain',
                objectPosition: 'center center',
              }}
            />
            {/* dots-only overlay — top-left, matches home hero style */}
            <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(0px, 0.35vw, 4.5px)', position: 'absolute', top: program.slug === 'math-genius' ? '16%' : '17%', left: 'calc(7.5% + 5px)', zIndex: 3, pointerEvents: 'none' }}>
              <span style={{ width: 'clamp(0px, 0.27vw, 3.5px)', height: 'clamp(0px, 0.27vw, 3.5px)', borderRadius: '9999px', background: dotColor }} />
              <span style={{ width: 'clamp(0px, 0.35vw, 4.5px)', height: 'clamp(0px, 0.35vw, 4.5px)', borderRadius: '9999px', background: dotColor }} />
              <span style={{ width: 'clamp(0px, 0.43vw, 5.5px)', height: 'clamp(0px, 0.43vw, 5.5px)', borderRadius: '9999px', background: dotColor }} />
              <span style={{ width: 'clamp(0px, 0.66vw, 8.5px)', height: 'clamp(0px, 0.2vw, 2.5px)', borderRadius: '9999px', background: dotColor }} />
              <span style={{ width: 'clamp(0px, 1.05vw, 13.5px)', height: 'clamp(0px, 0.2vw, 2.5px)', borderRadius: '9999px', background: dotColor }} />
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="program-section program-hero-section" style={{ background: '#FFFFFF', paddingTop: '56px', paddingBottom: '32px', borderBottom: '1px solid #ECECF1' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}
          >
            <Link to="/" style={{ fontSize: '13px', color: '#6B6B7B', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Home</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <Link to="/programs" style={{ fontSize: '13px', color: '#6B6B7B', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Programs</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <span style={{ fontSize: '13px', color: '#1C1C28', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{program.name}</span>
          </motion.nav>

          <div className="program-hero-grid lg:grid-cols-hero" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'start' }}>
            {/* Left, text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <PageHeading
                eyebrow={`AI Powered · ${program.classes}`}
                title={
                  program.slug === 'cbse-plan' ? <><AccentText tone="blue">CBSE</AccentText> Full <AccentText tone="pink">Syllabus</AccentText></> :
                  program.slug === 'math-genius' ? <><AccentText tone="blue">Math</AccentText> <AccentText tone="pink">Genius</AccentText> Maker</> :
                  program.slug === 'english-mastery' ? <><AccentText tone="blue">English</AccentText> <AccentText tone="pink">Mastery</AccentText> Pass</> :
                  program.slug === 'sat-prep' ? <><AccentText tone="blue">SAT</AccentText> Prep <AccentText tone="pink">Pass</AccentText></> :
                  <AccentText tone="blue">{program.name}</AccentText>
                }
                subtitle={<>{program.tagline} {program.description}</>}
                maxWidth="560px"
              />

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '24px', paddingTop: '16px', borderTop: '1px solid #F0F0F4' }}>
                {program.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1.2 }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              </motion.div>
            </motion.div>

            {/* Right, lead form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-subtle surface-card program-detail-form-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1.1 }}>{program.price}</div>
                  <div style={{ fontSize: '12px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '2px' }}>per month</div>
                </div>
                <span style={{ padding: '4px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>
                  {program.classes}
                </span>
              </div>

              <div style={{ height: '1px', background: '#F0F0F4', marginBottom: '20px' }} />

              <form onSubmit={(e) => { e.preventDefault(); navigate('/plans'); }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>
                    Start your free 7-day trial
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Child's Name</label>
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="e.g. Arjun Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #DCDCE5', fontSize: '14px', fontFamily: "'Inter', sans-serif", color: '#1C1C28', outline: 'none', boxSizing: 'border-box', background: '#FAFAFA' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#0FA8DC')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#DCDCE5')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Parent's Mobile</label>
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #DCDCE5', fontSize: '14px', fontFamily: "'Inter', sans-serif", color: '#1C1C28', outline: 'none', boxSizing: 'border-box', background: '#FAFAFA' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#0FA8DC')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#DCDCE5')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Child's Class</label>
                      <select
                        required
                        value={form.cls}
                        onChange={(e) => setForm({ ...form, cls: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #DCDCE5', fontSize: '14px', fontFamily: "'Inter', sans-serif", color: form.cls ? '#1C1C28' : '#9CA3AF', outline: 'none', background: '#FAFAFA', boxSizing: 'border-box' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#0FA8DC')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#DCDCE5')}
                      >
                        <option value="" disabled>Select class</option>
                        {['8', '9', '10', '11', '12'].map((c) => (
                          <option key={c} value={c}>Class {c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif", background: '#0FA8DC', color: 'white', border: 'none', cursor: 'pointer' }}
                  >
                    Enrol Now, 14-Day Free Trial <ArrowRight size={15} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '11px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '10px' }}>
                    No credit card required · Cancel anytime
                  </p>
                </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─────────────────────────────────────────── */}
      <section className="program-section program-overview-section" style={{ paddingTop: '96px', paddingBottom: '80px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <PageHeading
              eyebrow="NEP 2020"
              title={<>Who This <AccentText tone="blue">Programme</AccentText> Is <AccentText tone="pink">For</AccentText></>}
              maxWidth="880px"
            />
          </motion.div>

          <MobileCarousel desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            {program.forWhom.map((card, index) => {
              const cardAccent = ['#0FA8DC', '#E8135A'][index % 2];

              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card-subtle surface-card"
                  style={{
                    overflow: 'hidden',
                    minHeight: '100%',
                  }}
                >
                  <div style={{ height: '3px', width: '100%', background: cardAccent }} />
                  <div style={{ padding: '22px 20px 20px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                      <HeadingMarker
                        text={
                          program.slug === 'cbse-plan' ? 'CBSE' :
                          program.slug === 'math-genius' ? 'Math' :
                          program.slug === 'english-mastery' ? 'English' :
                          program.slug === 'sat-prep' ? 'SAT' :
                          program.name.split(' ')[0]
                        }
                        accent={cardAccent}
                        fontSize="10px"
                        marginBottom="0"
                      />
                      <span style={{ fontSize: '11px', color: '#A0A5B1', fontFamily: 'Inter, sans-serif' }}>For whom</span>
                    </div>
                    <h3 style={{ margin: '0 0 10px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.35, color: '#1C1C28' }}>
                      {card.title}
                    </h3>
                    <p className="t-body" style={{ margin: 0, color: '#5A5A6E' }}>
                      {card.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </MobileCarousel>
        </div>
      </section>

      {/* ─── Curriculum ───────────────────────────────────────────── */}
      <section className="program-section program-curriculum-section" style={{ paddingTop: '80px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <PageHeading eyebrow="Curriculum" title={<><AccentText tone="blue">What</AccentText> You'll <AccentText tone="pink">Learn</AccentText></>} />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {program.curriculum.map((module, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-subtle surface-card program-curriculum-card"
                style={{ overflow: 'hidden', boxShadow: openCurriculum === i ? '0 4px 16px rgba(28,28,40,0.06)' : '0 2px 8px rgba(28,28,40,0.04)' }}
              >
                <button
                  onClick={() => setOpenCurriculum(openCurriculum === i ? -1 : i)}
                  aria-expanded={openCurriculum === i}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: program.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#0FA8DC', fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{module.title}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{ color: '#6B6B7B', flexShrink: 0, transition: 'transform 0.25s', transform: openCurriculum === i ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openCurriculum === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 24px 24px 66px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {module.topics.map((topic, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <CheckCircle size={14} style={{ color: '#0FA8DC', flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Features + Pricing ───────────────────────────────────── */}
      <section className="program-section program-features-section" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '40px' }}>
            <PageHeading
              eyebrow="What's Included"
              title={<>Everything in This <AccentText tone="pink">Plan</AccentText></>}
              subtitle={program.description}
              maxWidth="980px"
            />
          </motion.div>

          <div className="program-features-grid grid-cols-2-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'start' }}>
            {/* What’s Included list */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="program-included-card"
              style={{ background: '#FFFFFF' }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {program.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={14} style={{ color: '#E8135A', flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.97rem', color: '#4D5562', lineHeight: 1.6 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/plans"
                className="cta cta-pink"
                style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 18px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  background: 'linear-gradient(90deg, #E8135A 0%, #F03C6F 100%)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: 'none',
                }}
              >
                Start 14-Day Free Trial
              </Link>
            </motion.div>

            {/* Pricing card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-subtle surface-card-subtle program-pricing-card"
              style={{ overflow: 'hidden' }}
            >
              <div style={{ height: '3px', width: '100%', background: '#0FA8DC' }} />
              <div style={{ padding: '18px 16px 14px' }}>
                <HeadingMarker text={program.classes} accent="#0FA8DC" fontSize="11px" />
                <h3 style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: 'var(--fs-h3-fluid)', fontWeight: 700, color: '#1C1C28', lineHeight: 1.2 }}>
                  {program.name}
                </h3>
                <p className="t-body" style={{ margin: '8px 0 0' }}>
                  {program.tagline}
                </p>

                <div style={{ height: '1px', background: '#E5E7EB', margin: '14px 0 12px' }} />

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {program.outcomes.map((outcome) => (
                    <li key={outcome.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle size={13} style={{ color: '#0FA8DC', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', color: '#4D5562', lineHeight: 1.35 }}>
                        {outcome.label}: {outcome.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '14px', gap: '2px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>₹</span>
                  <span style={{ fontSize: '1.55rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#1C1C28', lineHeight: 1 }}>
                    {Number.parseInt(program.price.replace(/[^0-9]/g, ''), 10).toLocaleString('en-IN')}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>/month</span>
                </div>

                <Link
                  to="/plans"
                  className="cta cta-blue"
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
                    background: 'linear-gradient(90deg, #1E9BDA 0%, #4BB8E6 100%)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: 'none',
                  }}
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Student Results / Testimonials ───────────────────────── */}
      <SharedTestimonialsSection
        row1={testimonialCards}
        row2={[...testimonialCards].reverse()}
        eyebrow="Observed Evidence"
        title={<>Real <AccentText tone="pink">Results</AccentText> from {program.name} <AccentText tone="blue">Students</AccentText></>}
        subtitle="See what this programme looks like when the same study system turns into measurable improvement."
        align="center"
      />

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <SharedFaqSection
        items={program.faqs}
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
