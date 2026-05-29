import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, AlertCircle, CheckCircle, BarChart3, Bell, MessageSquare, FileText
} from 'lucide-react';
import DashboardMockup from '../components/DashboardMockup';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';

const concerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention — up to 90%.' },
  { concern: 'Coaching fees keep increasing but results don\'t improve', solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons.' },
  { concern: 'I can\'t tell if my child is actually studying productively', solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage every day.' },
  { concern: 'My child is stressed, anxious, and losing confidence', solution: 'Personalized pace, progress celebrations, and human mentors build confidence as students see real results.' },
  { concern: 'Different teachers explain things differently and it confuses my child', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions.' },
  { concern: 'I don\'t know which topics my child is weak in', solution: 'Weekly diagnostic reports show exact weak topics with actionable recommendations you can share with tutors.' },
  { concern: 'My child spends hours "studying" with no real output', solution: 'Active recall and timed focus sessions replace passive reading, making every study hour measurably productive.' },
];

const howParentsUse = [
  {
    num: '01',
    title: 'Set Up Your Child\'s Profile',
    desc: 'Create your child\'s account, select their class and subjects, and link any existing coaching schedule. Setup takes under 10 minutes.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Receive Daily Updates',
    desc: 'Get a daily digest on WhatsApp and email showing what your child studied, retention scores, and any areas needing attention.',
    icon: Bell,
  },
  {
    num: '03',
    title: 'Track and Support Progress',
    desc: 'Use the parent dashboard to see trends over time, share reports with tutors, and celebrate your child\'s achievements together.',
    icon: BarChart3,
  },
];

const parentFaqs = [
  {
    question: 'Do I need to monitor my child\'s study sessions?',
    answer: 'No — Blast Learning is designed for independent learning. Your child follows their AI-generated study plan, while you receive daily progress summaries. You stay informed without being a constant presence.',
  },
  {
    question: 'How do I know if Blast Learning is actually working?',
    answer: 'You\'ll see it in the numbers within 2-3 weeks. The parent dashboard shows retention percentages, quiz scores, and subject mastery trends over time. Most parents see a measurable improvement in their child\'s test scores within one month.',
  },
  {
    question: 'Can I communicate with a human tutor if my child needs help?',
    answer: 'Yes. Our Tutor Mom Support team includes qualified educators who are available for weekly check-ins and doubt resolution. You can also message them directly through the parent portal.',
  },
  {
    question: 'What if my child is already attending coaching classes?',
    answer: 'Blast Learning works alongside coaching, not against it. Your child can upload coaching recordings and notes, and our AI converts them into revision material — making coaching more effective.',
  },
  {
    question: 'Is there a trial period before I commit to a subscription?',
    answer: 'Absolutely. We offer a 7-day free trial with full feature access. No credit card is required to start. You\'ll have enough data to see real retention improvement before making a decision.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ForParents() {
  return (
    <div style={{ background: '#07111F' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#07111F', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              For Parents
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', marginBottom: '24px', lineHeight: 1.15 }}>
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                From Constant Worry to{' '}
              </span>
              <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Complete Confidence
              </span>
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', maxWidth: '600px', margin: '0 auto 40px' }}>
              Know exactly what your child is learning, how well they retain it, and where they need help — every single day. No more guessing, no more surprises at exam time.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link
                to="/programs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}
              >
                Start 7-Day Free Trial <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
              >
                Speak to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain / Solution */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '56px' }}
          >
            We Understand Your Concerns
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.8)', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <AlertCircle size={14} /> What Parents Tell Us
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {concerns.map(({ concern }) => (
                  <div key={concern} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', borderRadius: '14px', borderLeft: '3px solid rgba(255,100,100,0.4)', background: 'rgba(255,100,100,0.04)' }}>
                    <AlertCircle size={14} style={{ color: 'rgba(255,100,100,0.7)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>{concern}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#06B6D4', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <CheckCircle size={14} /> How Blast Learning Solves It
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {concerns.map(({ solution }) => (
                  <div key={solution} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', borderRadius: '14px', borderLeft: '3px solid rgba(6,182,212,0.4)', background: 'rgba(6,182,212,0.04)' }}>
                    <CheckCircle size={14} style={{ color: '#06B6D4', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
                The Parent Dashboard —{' '}
                <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Your Window Into Learning</span>
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', marginBottom: '32px' }}>
                A beautifully simple interface that gives you all the information you need without overwhelming you. Check it in 2 minutes each morning and you'll always know exactly where your child stands.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {[
                  { icon: BarChart3, label: 'Retention Score', desc: 'Daily retention percentage across all subjects' },
                  { icon: Bell, label: 'Smart Alerts', desc: 'Notified when child misses a session or drops in a subject' },
                  { icon: MessageSquare, label: 'Weekly Reports', desc: 'Detailed PDF reports to share with tutors and teachers' },
                  { icon: FileText, label: 'Exam Readiness', desc: 'Pre-exam readiness score so there are no surprises' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', color: '#06B6D4' }}>
                      <Icon size={16} />
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.85)' }}>{label}</p>
                    <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ minWidth: 0, width: '100%' }}>
              <DashboardMockup />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How Parents Use */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '56px' }}
          >
            Getting Started Takes 10 Minutes
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-3-md"
          >
            {howParentsUse.map(({ num, title, desc, icon: Icon }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '40px', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{num}</span>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                    <Icon size={20} />
                  </div>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '48px' }}
          >
            What Parents Are Saying
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-3-md"
          >
            {[
              { name: 'Sunita Reddy', role: 'Parent of Class 10 student, Pune', content: 'We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined.' },
              { name: 'Deepak Sharma', role: 'Parent of Class 11 student, Delhi', content: 'The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he\'s actually studying or just watching YouTube.' },
              { name: 'Meena Iyer', role: 'Parent of Class 9 student, Bangalore', content: 'My daughter\'s confidence has improved dramatically. She used to dread exams, now she actually looks forward to revision sessions. The AI makes it feel manageable, not overwhelming.' },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <TestimonialCard name={t.name} role={t.role} content={t.content} rating={5} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '48px' }}
          >
            Common Parent Questions
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {parentFaqs.map((faq) => (
              <motion.div key={faq.question} variants={fadeUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.07), rgba(59,130,246,0.05), rgba(139,92,246,0.07))', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', background: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.8))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Give Your Child the Retention Advantage
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Start with a 7-day free trial. No credit card required. See real retention data for your child within the first week.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}>
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
              Speak to an Advisor
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
