import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { getProgramBySlug } from '../../data/programs';
import BrandWhoosh from '../../components/BrandWhoosh';
import HeadingMarker from '../../components/HeadingMarker';
import { SharedFaqSection, SharedImageCtaSection, SharedTestimonialsSection } from '../../components/MarketingSections';
import HowItWorksCard from '../../components/HowItWorksCard';
import hero1 from '../../assets/Hero 1.png';
import hero2 from '../../assets/Hero 2.png';
import hero3 from '../../assets/Hero 3.png';
import hero4 from '../../assets/Hero 4.png';
import uploadVisual from '../../assets/Upload.png';
import learnVisual from '../../assets/Learn.png';
import masterVisual from '../../assets/master.png';

const SLUG_BANNER: Record<string, string> = {
  'cbse-plan': hero1,
  'math-genius': hero2,
  'english-mastery': hero3,
  'sat-prep': hero4,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const FIT_CARD_ACCENTS = ['#0FA8DC', '#3B82F6', '#F03C6F', '#8B5CF6'];
const FIT_CARD_DEFAULT_IMAGES = [
  hero1,
  hero2,
  hero3,
  hero4,
  uploadVisual,
  learnVisual,
  masterVisual,
];
const FIT_CARD_FALLBACK_IMAGES = [hero1, hero2, hero3, hero4];

const FIT_CARD_IMAGE_RULES: Array<{ keywords: string[]; image: string }> = [
  {
    keywords: ['parent', 'child'],
    image: masterVisual,
  },
  {
    keywords: ['board', 'exam'],
    image: hero1,
  },
  {
    keywords: ['coaching', 'classroom', 'class'],
    image: hero2,
  },
  {
    keywords: ['jee', 'neet', 'competitive'],
    image: hero4,
  },
  {
    keywords: ['math', 'algebra', 'geometry'],
    image: uploadVisual,
  },
  {
    keywords: ['english', 'language', 'reading', 'writing'],
    image: learnVisual,
  },
  {
    keywords: ['foundational', 'grades behind', 'gap'],
    image: hero3,
  },
];

function getFitCardImage(slug: string, title: string, desc: string, index: number) {
  const haystack = `${slug} ${title} ${desc}`.toLowerCase();
  const rule = FIT_CARD_IMAGE_RULES.find((item) => item.keywords.some((keyword) => haystack.includes(keyword)));
  if (rule) return rule.image;
  return FIT_CARD_DEFAULT_IMAGES[index % FIT_CARD_DEFAULT_IMAGES.length];
}

function ProgramFitVisual({ image, fallback, accent }: { image: string; fallback: string; accent: string }) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <img
        src={useFallback ? fallback : image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!useFallback) setUseFallback(true);
        }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${accent}22 0%, rgba(10,10,18,0.18) 100%)` }} />
    </div>
  );
}

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  const [openCurriculum, setOpenCurriculum] = useState<number>(0);
  const [form, setForm] = useState({ name: '', phone: '', cls: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (program) {
      document.title = `${program.name} | Blast Learning`;
      return () => { document.title = 'Blast Learning'; };
    }
  }, [program]);

  if (!program) return <Navigate to="/programs" replace />;

  const testimonialCards = program.testimonials.map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    text: testimonial.content,
  }));

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingBottom: '80px' }}>
        {slug && SLUG_BANNER[slug] && (
          <div style={{ width: '100%', aspectRatio: '4095 / 774', overflow: 'hidden' }}>
            <img
              src={SLUG_BANNER[slug]}
              alt={`${program.name} hero banner`}
              loading="eager"
              decoding="sync"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
        <div style={{ paddingTop: '60px' }} />
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px', flexWrap: 'wrap' }}
          >
            <Link to="/" style={{ fontSize: '13px', color: '#6B6B7B', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Home</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <Link to="/programs" style={{ fontSize: '13px', color: '#6B6B7B', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Programs</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <span style={{ fontSize: '13px', color: '#1C1C28', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{program.name}</span>
          </motion.nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'start' }} className="lg:grid-cols-hero">
            {/* Left, text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <HeadingMarker text={`AI Powered · ${program.classes}`} fontSize="12px" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{ fontSize: 'var(--fs-h1-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '20px', color: '#111111' }}
              >
                {program.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '16px', maxWidth: '560px' }}
              >
                {program.tagline}
              </motion.p>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '24px', maxWidth: '560px' }}
              >
                {program.description}
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '28px', paddingTop: '20px', borderTop: '1px solid #F0F0F4' }}>
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
              style={{ background: '#FFFFFF', border: '1.5px solid #ECECF1', borderRadius: '20px', padding: '32px', boxShadow: '0 4px 24px rgba(28,28,40,0.07)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1.1 }}>{program.price}</div>
                  <div style={{ fontSize: '12px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '2px' }}>per month</div>
                </div>
                <span style={{ padding: '5px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>
                  {program.classes}
                </span>
              </div>

              <div style={{ height: '1px', background: '#F0F0F4', marginBottom: '20px' }} />

              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: "'Poppins', sans-serif", marginBottom: '16px' }}>
                    Start your free 7-day trial
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Child's Name</label>
                      <input
                        type="text"
                        required
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
                    className="cta cta-blue"
                    style={{ width: '100%', boxShadow: 'none' }}
                  >
                    Enrol Now, 14-Day Free Trial <ArrowRight size={15} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '11px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '10px' }}>
                    No credit card required · Cancel anytime
                  </p>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E0F5FC', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle size={22} style={{ color: '#0FA8DC' }} />
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '8px' }}>You're all set!</p>
                  <p style={{ fontSize: '13px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                    We'll contact {form.name || 'you'} within 24 hours to begin your free trial.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '80px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <HeadingMarker text="Right for you?" fontSize="12px" />
            <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, color: '#111111' }}>
              Who This Programme Is For
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md">
            {program.forWhom.map((item, i) => {
              const accent = FIT_CARD_ACCENTS[i % FIT_CARD_ACCENTS.length];
              const image = item.imageUrl || getFitCardImage(program.slug, item.title, item.desc, i);
              const fallback = FIT_CARD_FALLBACK_IMAGES[i % FIT_CARD_FALLBACK_IMAGES.length];
              const Visual = () => (
                <ProgramFitVisual image={image} fallback={fallback} accent={accent} />
              );

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <HowItWorksCard
                    title={item.title}
                    desc={item.desc}
                    accent={accent}
                    Visual={Visual}
                    height="430px"
                    descLines={4}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Curriculum ───────────────────────────────────────────── */}
      <section style={{ paddingTop: '80px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <HeadingMarker text="Curriculum" fontSize="12px" />
            <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, color: '#111111' }}>
              What You'll Learn
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {program.curriculum.map((module, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '14px', overflow: 'hidden', boxShadow: openCurriculum === i ? '0 4px 16px rgba(28,28,40,0.06)' : 'none' }}
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'start' }} className="grid-cols-2-lg">
            {/* Features list */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} style={{ marginBottom: '40px' }}>
                <HeadingMarker text="What's Included" fontSize="12px" />
                <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, color: '#111111' }}>
                  Everything in This Plan
                </h2>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {program.features.map((feature, i) => (
                  <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#E0F5FC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <CheckCircle size={13} style={{ color: '#0FA8DC' }} />
                    </div>
                    <span style={{ fontSize: '15px', lineHeight: 1.6, color: '#1C1C28', fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ background: '#D6F2FA', border: '2px solid #0FA8DC', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 32px rgba(15,168,220,0.10)' }}
            >
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0FA8DC', fontFamily: "'Inter', sans-serif" }}>
                  {program.name}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontSize: '42px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1 }}>{program.price}</span>
                <span style={{ fontSize: '14px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif" }}>/month</span>
              </div>
              <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '28px' }}>{program.classes}</p>

              <div style={{ height: '1px', background: '#ECECF1', marginBottom: '28px' }} />

              {program.outcomes.map((outcome, i) => (
                <div key={i} style={{ marginBottom: i < program.outcomes.length - 1 ? '20px' : '0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{outcome.label}</span>
                    <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#0FA8DC' }}>{outcome.value}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{outcome.desc}</p>
                </div>
              ))}

              <div style={{ height: '1px', background: '#ECECF1', margin: '28px 0' }} />

              <Link
                to="/contact"
                className="cta cta-pink"
                style={{ display: 'flex', boxShadow: 'none' }}
              >
                Start 14-Day Free Trial <ArrowRight size={16} />
              </Link>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginTop: '10px' }}>
                No credit card · Cancel any time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Student Results / Testimonials ───────────────────────── */}
      <SharedTestimonialsSection
        row1={testimonialCards}
        row2={[...testimonialCards].reverse()}
        eyebrow="Student Results"
        title={`Real Results from ${program.name} Students`}
        subtitle="See what this programme looks like when the same study system turns into measurable improvement."
      />

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <SharedFaqSection items={program.faqs} eyebrow="FAQs" title="Common Questions" subtitle="Everything you need to know before you start your free trial." />

      {/* ─── Final CTA ────────────────────────────────────────────── */}
      <SharedImageCtaSection src={hero4} alt="Learn Smarter. Achieve More. Start your Blast Learning journey today." />
    </div>
  );
}
