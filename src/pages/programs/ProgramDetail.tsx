import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight, ChevronRight, Zap, Users, Star } from 'lucide-react';
import { getProgramBySlug } from '../../data/programs';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const AVATAR_PALETTE = ['#0FA8DC', '#F03C6F', '#22C55E', '#F59E0B', '#8B5CF6', '#06B6D4', '#EC4899'];
function avatarColor(name: string) {
  return AVATAR_PALETTE[name.charCodeAt(0) % AVATAR_PALETTE.length];
}

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  const [openCurriculum, setOpenCurriculum] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (program) {
      document.title = `${program.name} | Blast Learning`;
      return () => { document.title = 'Blast Learning'; };
    }
  }, [program]);

  if (!program) return <Navigate to="/programs" replace />;

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#F7F7F8', paddingTop: '120px', paddingBottom: '80px' }}>
        {/* Background blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-80px', right: '-120px',
            width: '480px', height: '480px', borderRadius: '50%',
            background: program.accentBg, opacity: 0.6,
            pointerEvents: 'none', willChange: 'transform',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px', flexWrap: 'wrap' }}
          >
            <Link to="/" style={{ fontSize: '13px', color: '#8E8EA0', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Home</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <Link to="/programs" style={{ fontSize: '13px', color: '#8E8EA0', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>Programs</Link>
            <ChevronRight size={12} style={{ color: '#C4C4D0' }} />
            <span style={{ fontSize: '13px', color: '#1C1C28', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{program.name}</span>
          </motion.nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'start' }} className="lg:grid-cols-hero">
            {/* Left — text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '20px' }}>
                  <Zap size={10} /> AI Powered · {program.classes}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '20px', lineHeight: 1.15 }}
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
                style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '36px', maxWidth: '560px' }}
              >
                {program.description}
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#F03C6F', color: 'white' }}
                >
                  Start 7-Day Free Trial <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: 'white', color: '#1C1C28', border: '1.5px solid #DCDCE5' }}
                >
                  Talk to an Advisor
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '20px', padding: '36px', boxShadow: '0 4px 24px rgba(28,28,40,0.07)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{program.price}</div>
                  <div style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>per month</div>
                </div>
                <span style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif" }}>
                  {program.classes}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '28px' }}>
                {program.heroStats.map((stat) => (
                  <div key={stat.label} style={{ padding: '16px', background: '#F7F7F8', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1.2 }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#0FA8DC', color: 'white', width: '100%' }}
              >
                Enrol Now — 7-Day Free Trial <ArrowRight size={15} />
              </Link>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginTop: '10px' }}>
                No credit card required · Cancel anytime
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '80px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
              Right for you?
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28' }}>
              Who This Programme Is For
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-3-md">
            {program.forWhom.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ padding: '28px', background: '#F7F7F8', borderRadius: '16px', border: '1px solid #ECECF1' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: program.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Users size={18} style={{ color: '#0FA8DC' }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Curriculum ───────────────────────────────────────────── */}
      <section style={{ paddingTop: '80px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
              Curriculum
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28' }}>
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
                    style={{ color: '#8E8EA0', flexShrink: 0, transition: 'transform 0.25s', transform: openCurriculum === i ? 'rotate(180deg)' : 'rotate(0)' }}
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
                <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
                  What's Included
                </span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28' }}>
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
              style={{ background: '#F7F7F8', border: '2px solid #0FA8DC', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 32px rgba(15,168,220,0.10)' }}
            >
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0FA8DC', fontFamily: "'Inter', sans-serif" }}>
                  {program.name}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontSize: '42px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', lineHeight: 1 }}>{program.price}</span>
                <span style={{ fontSize: '14px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>/month</span>
              </div>
              <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '28px' }}>{program.classes}</p>

              <div style={{ height: '1px', background: '#ECECF1', marginBottom: '28px' }} />

              {program.outcomes.map((outcome, i) => (
                <div key={i} style={{ marginBottom: i < program.outcomes.length - 1 ? '20px' : '0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{outcome.label}</span>
                    <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#0FA8DC' }}>{outcome.value}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{outcome.desc}</p>
                </div>
              ))}

              <div style={{ height: '1px', background: '#ECECF1', margin: '28px 0' }} />

              <Link
                to="/contact"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#F03C6F', color: 'white' }}
              >
                Start 7-Day Free Trial <ArrowRight size={16} />
              </Link>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginTop: '10px' }}>
                No credit card · Cancel any time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Student Results / Testimonials ───────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
              Student Results
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28' }}>
              Real Scores, Real Students
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md">
            {program.testimonials.map((t, i) => {
              const bg = avatarColor(t.name);
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ background: '#FFFFFF', border: '1px solid #ECECF1', borderRadius: '20px', padding: '32px', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
                >
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="#F59E0B" style={{ color: '#F59E0B' }} />
                    ))}
                  </div>

                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#1C1C28', fontFamily: "'Inter', sans-serif", marginBottom: '24px', fontStyle: 'italic' }}>
                    "{t.content}"
                  </p>

                  {/* Before / After */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', padding: '16px', background: '#F7F7F8', borderRadius: '12px' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>Before</div>
                      <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{t.before}</div>
                    </div>
                    <div style={{ width: '1px', background: '#ECECF1' }} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>After</div>
                      <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#059669' }}>{t.after}</div>
                    </div>
                    <div style={{ width: '1px', background: '#ECECF1' }} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>Improvement</div>
                      <div style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#F03C6F' }}>{t.improvement}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #F4F4F6' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: "'Poppins', sans-serif", flexShrink: 0 }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, color: '#0FA8DC', background: '#E0F5FC', fontFamily: "'Inter', sans-serif", marginBottom: '16px' }}>
              FAQs
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28' }}>
              Common Questions
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {program.faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ border: '1px solid #ECECF1', borderRadius: '14px', overflow: 'hidden', background: openFaq === i ? '#FAFAFA' : '#FFFFFF' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{ color: '#8E8EA0', flexShrink: 0, transition: 'transform 0.25s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 24px 24px', fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '16px' }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '36px' }}>
              Your first 7 days are completely free. No credit card required.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#F03C6F', color: 'white' }}
              >
                Start Free Trial <ArrowRight size={16} />
              </Link>
              <Link
                to="/programs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: 'white', color: '#1C1C28', border: '1.5px solid #DCDCE5' }}
              >
                View All Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
