import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import FAQItem from '../components/FAQItem';
import { fadeUp, stagger } from '../constants/animations';

const supportCards = [
  {
    label: 'When you\'re stuck.',
    title: 'Subject Doubt Support',
    body: 'Qualified subject-matter experts available Monday to Saturday, 9 AM to 9 PM. Message through the platform and get a response within 2 hours during business hours.',
    accent: '#0FA8DC',
  },
  {
    label: 'When you go quiet.',
    title: 'Proactive Check-ins',
    body: 'The team monitors your session quality and retention scores. If your numbers drop or you miss sessions, someone reaches out — not a notification, but a message.',
    accent: '#E8135A',
  },
];

const studentFaqs = [
  {
    q: 'How much time do I need each day?',
    a: 'Most sessions are under 20 minutes. The platform schedules your sessions based on when your memory is about to fade — so you study at the right time, not just for longer.',
  },
  {
    q: 'Will this help me for board exams?',
    a: 'Yes. The CBSE Full Syllabus plan covers all core subjects with retention-first pacing aligned to the board exam timeline. The GAP Assessment identifies which concepts need the most work first.',
  },
  {
    q: 'What if I already have a tutor?',
    a: 'Blast Learning works alongside your tutor. The platform makes sure what your tutor teaches you actually sticks — that is the part tutors cannot do on their own.',
  },
  {
    q: 'Will my parents see everything?',
    a: 'Your parents have access to a daily digest of your study sessions and retention scores. The Tutor Mom team is their point of contact if they have questions. You will always know what they can see.',
  },
];

export default function ForStudents() {
  useSEO({
    title: 'For Students | Blast Learning India',
    description: 'Blast Learning trains you to remember what you study — not just recognise it. Built on 25 years of research. Free 14-day trial.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
        paddingTop: '120px',
        paddingBottom: '100px',
        borderBottom: '1px solid #ECECF1',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.03} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <div>
              <HeadingMarker text="FOR STUDENTS" marginBottom="24px" fontSize="12px" accent="#0FA8DC" />
              <h1 className="page-hero-title" style={{ color: '#E8135A' }}>
                You Studied for Six Hours. The Formula Still Didn't Show Up.
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginTop: '24px' }}>
                That's a method problem, not a you problem.
              </p>
            </div>
            {/* Geometric illustration */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg viewBox="0 0 520 520" width="100%" style={{ maxWidth: '420px' }} aria-hidden="true">
                <rect x="170" y="185" width="200" height="200" fill="#0FA8DC" transform="rotate(45 270 285)" />
                <circle cx="255" cy="248" r="92" fill="#E8135A" />
                <line x1="80" y1="490" x2="480" y2="80" stroke="#1C1C28" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Actual Science ────────────────────────────────── */}
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
              <HeadingMarker text="THE ACTUAL SCIENCE" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                Reading It Again Isn't the <AccentText tone="pink">Same as Knowing It</AccentText>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Hermann Ebbinghaus documented the forgetting curve in 1885: without active reinforcement, your brain loses up to 80% of new information within 24 hours. When you re-read your notes the day before an exam, your brain recognises the content. But recognition is not recall. In an exam hall, recognition does nothing.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Blast Learning uses spaced repetition and active recall — two techniques backed by over 500 peer-reviewed studies. Each session is timed to hit precisely when your memory is about to fade. You are not just revising. You are training your brain to retrieve information under pressure.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <svg
                viewBox="0 0 660 320"
                width="100%"
                style={{ maxWidth: '560px', fontFamily: 'Inter, sans-serif', overflow: 'visible' }}
                aria-label="Ebbinghaus forgetting curve: memory strength drops steeply, then retrieval practice restores it with shallower dips over time"
              >
                {/* Axis labels */}
                <text x="10" y="18" fontSize="11" fill="#9CA3AF">memory strength</text>
                <text x="510" y="308" fontSize="11" fill="#9CA3AF">time</text>

                {/* Forgetting curve */}
                <polyline
                  points="25,65 145,235 220,100 310,205 375,115 430,180 480,105 530,165"
                  fill="none"
                  stroke="#E8135A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Retrieval dots */}
                <circle cx="220" cy="100" r="8" fill="#0FA8DC" />
                <circle cx="375" cy="115" r="8" fill="#0FA8DC" />
                <circle cx="480" cy="105" r="8" fill="#0FA8DC" />

                {/* Annotations */}
                <text x="548" y="88" fontSize="11" fill="#6B7280">retrieval restores it</text>
                <text x="548" y="168" fontSize="11" fill="#6B7280">dips shrink</text>
                <text x="548" y="183" fontSize="11" fill="#6B7280">over time</text>
                <text x="548" y="218" fontSize="11" fill="#6B7280">memory fades fast</text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. GAP Assessment ───────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px', marginBottom: '64px' }}>
              <HeadingMarker text="NOT YOUR GRADE. YOU." marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2">
                The GAP Assessment Doesn't <AccentText tone="pink">Assume Anything</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <svg
                viewBox="0 0 1000 190"
                width="100%"
                style={{ maxWidth: '900px', display: 'block', margin: '0 auto', overflow: 'visible' }}
                aria-label="A horizontal scale with 9 points. The fifth point drops down to a pink marker — your exact knowledge gap."
              >
                <line x1="60" y1="70" x2="940" y2="70" stroke="#D1D5DB" strokeWidth="1.5" />
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                  const cx = 60 + i * 110;
                  const isActive = i === 4;
                  return (
                    <g key={i}>
                      <circle cx={cx} cy="70" r="14" fill="white" stroke="#D1D5DB" strokeWidth="1.5" />
                      {isActive && (
                        <>
                          <line x1={cx} y1="84" x2={cx} y2="130" stroke="#D1D5DB" strokeWidth="1.5" />
                          <circle cx={cx} cy="152" r="22" fill="#E8135A" />
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
              <p style={{ textAlign: 'center', fontSize: '14px', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', marginTop: '28px' }}>
                Built from what you know, not your grade.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Human Support ────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="YOU'RE NOT DOING THIS ALONE" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '16px' }}>
                A Partner Who Studies <AccentText tone="blue">With You</AccentText>, Not a Bot Checking In
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px' }}>
                The Tutor Mom team watches your retention data in real time. When you drop off, they reach out — not to pressure you, but because they can see exactly where you got stuck.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
              className="grid-cols-2-md"
            >
              {supportCards.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <div style={{ height: '100%', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #ECECF1', padding: '32px', borderTop: `3px solid ${item.accent}` }}>
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

      {/* ── 5. Stuck at 11pm ────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <HeadingMarker text="STUCK AT 11PM" marginBottom="16px" fontSize="12px" accent="#E8135A" />
              <h2 className="t-h2">
                Get Unstuck Without Waiting for <AccentText tone="blue">Tomorrow's Class</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px 28px 36px' }}>
                <p style={{ fontWeight: 700, fontSize: '15px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '24px' }}>
                  AI Tutor
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ maxWidth: '65%', background: '#F3F4F6', borderRadius: '16px 16px 16px 4px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Stuck on question 14, the substitution step.
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ maxWidth: '65%', background: '#DBEAFE', borderRadius: '16px 16px 4px 16px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Let's check what you substituted first.
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ maxWidth: '50%', background: '#F3F4F6', borderRadius: '16px 16px 16px 4px', padding: '14px 18px', fontSize: '15px', color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>
                      Oh, I flipped the sign.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Exam Technique ───────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
              <HeadingMarker text="THE PART NOBODY ELSE TEACHES" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                Knowing It Isn't the Same as <AccentText tone="pink">Staying Calm With It</AccentText>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Exam anxiety is not a personality trait. It is what happens when your brain tries to recall something it has only ever recognised. Under pressure, recognition fails. Recall — trained through active retrieval — holds.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Blast Learning builds retrieval practice into every session. By the time you sit your exam, your brain has practised producing the answer — not just seeing it. That is the difference between knowing a formula and being able to write it down in a hall where nothing feels familiar.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Transfer ─────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
              <HeadingMarker text="IT TRAVELS WITH YOU" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                The Skill Isn't the Subject. It's the <AccentText tone="blue">Recall</AccentText>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Spaced repetition and active recall are not CBSE techniques. They are memory techniques. What you learn here works whether you are revising for boards, preparing for JEE, studying for your first job interview, or trying to hold onto a language you are learning at twenty-three.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
                  Most students come to Blast Learning for a grade. They leave with a method. That is what IBM, McGraw-Hill, and 100,000 students before you paid for.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <HeadingMarker text="BEFORE YOU START" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2">
                Quick Answers for <AccentText tone="blue">Quick Doubts</AccentText>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} style={{ maxWidth: '800px' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', padding: '4px 20px', boxShadow: '0 1px 4px rgba(28,28,40,0.04)' }}>
                {studentFaqs.map((faq) => (
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

      {/* ── 9. CTA ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 60%, #FFFFFF 100%)', borderTop: '1px solid #DAEEF6' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ maxWidth: '640px' }}>
              <HeadingMarker text="YOUR MOVE" marginBottom="16px" fontSize="12px" accent="#0FA8DC" />
              <h2 className="t-h2" style={{ marginBottom: '20px' }}>
                Try It Free for 14 Days. <AccentText tone="pink">Show a Parent the Rest</AccentText>.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '36px' }}>
                The trial is free. No credit card. No commitment. You get the full platform — GAP Assessment, personalised study plan, subject doubt support, and daily retention tracking. If it doesn't change how you study, there is nothing to cancel.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <Link to="/programs" className="cta cta-blue">
                  Start Free Trial
                </Link>
                <Link to="/for-parents" className="cta cta-outline">
                  For Parents
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
