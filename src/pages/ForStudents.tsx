import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Trophy, Brain, Target, Sparkles, Star, Flame, Award } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import TestimonialsMarquee from '../components/ui/testimonials-marquee';
import FAQItem from '../components/FAQItem';
import ctaBanner from '../assets/Hero 4.png';
import BrandWhoosh from '../components/BrandWhoosh';

const testimonialsRow1 = [
  { name: 'Ananya Krishnan', role: 'Class 10, CBSE Plan · Bangalore', text: 'Blast Learning showed me exactly which chapters I kept forgetting. My Science score went from 61 to 84 in one term. The spaced revision reminders are the real game-changer.' },
  { name: 'Rahul Mehta', role: 'Class 12, CBSE Plan · Mumbai', text: "I was scoring 55 in Physics mock tests. Blast's Metacognition Engine identified my weak chapters within the first week and built a custom plan. Ended up with 81 in boards." },
  { name: 'Kavitha Suresh', role: 'Class 9, English Mastery · Hyderabad', text: 'Grammar used to be a nightmare. The AI broke it into tiny daily chunks and quizzed me at exactly the right time. I went from D grades to consistently getting As.' },
  { name: 'Arjun Nair', role: 'Class 11, Math Genius · Chennai', text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.' },
  { name: 'Karan Malhotra', role: 'Class 12, SAT Prep Pass · Gurgaon', text: "Blast's SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months." },
];
const testimonialsRow2 = [
  { name: 'Deepak Sharma', role: 'Parent · Class 11 CBSE, Delhi', text: "The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven't had to nag him about studying in two months." },
  { name: 'Sunita Reddy', role: 'Parent · Class 10 CBSE, Pune', text: "We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day." },
  { name: 'Priya Iyer', role: 'Parent · Class 10 CBSE, Kochi', text: "My daughter's board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically." },
  { name: 'Meena Patel', role: 'Parent · Class 9 CBSE, Ahmedabad', text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.' },
  { name: 'Vikram Gupta', role: 'Parent · Class 12 CBSE, Jaipur', text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.' },
];
const pageFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps 91% of students improve what they retain, compared to the 10% most students remember without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 7-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first week." },
];

const features = [
  {
    icon: Gamepad2,
    title: 'Learn Like a Game',
    description: 'Earn XP, unlock levels, and collect badges as you master each concept. It turns revision into something you actually want to come back to.',
    tile: '#FDF3E7',
  },
  {
    icon: Flame,
    title: 'Build Streaks',
    description: 'Keep your daily streak alive! Consistency is the secret to retention, and streaks make it fun.',
    tile: '#FCEEF1',
  },
  {
    icon: Brain,
    title: 'AI Study Buddy',
    description: 'Stuck on a problem? Your AI tutor explains concepts in a way that actually makes sense to you.',
    tile: '#E7F6FB',
  },
  {
    icon: Target,
    title: 'Personalized Path',
    description: 'No two students are the same. Your learning path adapts to your pace, strengths, and goals.',
    tile: '#F0EDFC',
  },
  {
    icon: Trophy,
    title: 'Compete & Win',
    description: 'Climb leaderboards, challenge friends, and earn rewards. A bit of friendly rivalry keeps you coming back.',
    tile: '#E9F7EF',
  },
  {
    icon: Sparkles,
    title: 'Instant Feedback',
    description: 'Know right away if you got it right. Immediate feedback helps you learn faster and better.',
    tile: '#E9F2FC',
  },
];

const steps = [
  { number: '01', title: 'Take a Quick Assessment', description: 'We figure out exactly where you are and what you need to work on.' },
  { number: '02', title: 'Get Your Custom Plan', description: 'Receive a personalized learning path designed just for you.' },
  { number: '03', title: 'Learn & Earn Rewards', description: 'Complete lessons, earn XP, and watch your skills grow every day.' },
  { number: '04', title: 'Track Your Progress', description: 'See your improvement with detailed stats and celebrate milestones.' },
];

const achievements = [
  { icon: Star, label: 'First Lesson', tile: '#FDF3E7' },
  { icon: Flame, label: '7-Day Streak', tile: '#FCEEF1' },
  { icon: Award, label: 'Quiz Master', tile: '#E7F6FB' },
  { icon: Trophy, label: 'Top 10', tile: '#F0EDFC' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ForStudents() {
  useSEO({
    title: 'For Students | Study Smarter, Not Harder · Blast Learning',
    description: 'Learning that feels like play. Earn XP, build streaks, and master concepts with an AI study buddy that adapts to your pace. Free 7-day trial.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '120px', paddingBottom: '100px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-160px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,168,220,0.07) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 18s ease-in-out infinite reverse' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif", marginBottom: '24px', background: '#E0F5FC', color: '#0FA8DC' }}>
              For Students
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', marginBottom: '24px', color: '#1C1C28' }}>
              Learning That Feels Like Play
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", maxWidth: '640px', margin: '0 auto' }}>
              Studying does not have to feel like a chore. Blast Learning adds games, rewards, and an AI study buddy that explains things in a way that finally clicks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '16px' }}>
              Why Students Love Us
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", maxWidth: '600px', margin: '0 auto' }}>
              We built Blast Learning with one goal: make studying so engaging your child forgets it is work.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-3-md"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ECECF1',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: feature.tile, color: '#0FA8DC' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', textAlign: 'center', marginBottom: '56px' }}
          >
            How It Works
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  background: '#FFFFFF',
                  border: '1px solid #ECECF1',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                }}
              >
                <div style={{ fontSize: '40px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#0FA8DC', flexShrink: 0, lineHeight: 1 }}>{step.number}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '16px' }}
          >
            Collect Achievements
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: '1.05rem', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}
          >
            Every milestone earns you a badge. How many can you collect?
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}
            className="grid-cols-4-md"
          >
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -4 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ECECF1',
                    borderRadius: '16px',
                    padding: '32px 20px',
                    boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                  }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', background: ach.tile, color: '#0FA8DC' }}>
                    <Icon size={28} />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: "'Inter', sans-serif", color: '#1C1C28' }}>{ach.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F9FAFB' }}>
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              Student Stories
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              Real Results from Real Students
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
              Hear from students who turned forgotten lessons into lasting marks.
            </p>
          </motion.div>
        </div>
        <TestimonialsMarquee row1={testimonialsRow1} row2={testimonialsRow2} />
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, margin: 0 }}>
              Everything you need to know before you start your free trial.
            </p>
          </motion.div>
          <div style={{ borderTop: '1px solid #E5E7EB', marginBottom: '32px' }}>
            {pageFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              View All FAQs <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section aria-label="Call to action" style={{ width: '100%', display: 'block', lineHeight: 0 }}>
        <img src={ctaBanner} alt="Learn Smarter. Achieve More. Start your Blast Learning journey today." loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </section>
    </div>
  );
}
