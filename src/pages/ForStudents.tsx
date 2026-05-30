import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Brain, Target, Sparkles, ArrowRight, Star, Flame, Award } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Learn Like a Game',
    description: 'Earn XP, unlock levels, and collect badges as you master concepts. Learning has never been this addictive.',
    color: '#E8336B',
  },
  {
    icon: Flame,
    title: 'Build Streaks',
    description: 'Keep your daily streak alive! Consistency is the secret to retention, and streaks make it fun.',
    color: '#00B4D8',
  },
  {
    icon: Brain,
    title: 'AI Study Buddy',
    description: 'Stuck on a problem? Your AI tutor explains concepts in a way that actually makes sense to you.',
    color: '#E8336B',
  },
  {
    icon: Target,
    title: 'Personalized Path',
    description: 'No two students are the same. Your learning path adapts to your pace, strengths, and goals.',
    color: '#00B4D8',
  },
  {
    icon: Trophy,
    title: 'Compete & Win',
    description: 'Climb leaderboards, challenge friends, and earn rewards. A little competition goes a long way.',
    color: '#E8336B',
  },
  {
    icon: Sparkles,
    title: 'Instant Feedback',
    description: 'Know right away if you got it right. Immediate feedback helps you learn faster and better.',
    color: '#00B4D8',
  },
];

const steps = [
  { number: '01', title: 'Take a Quick Assessment', description: 'We figure out exactly where you are and what you need to work on.' },
  { number: '02', title: 'Get Your Custom Plan', description: 'Receive a personalized learning path designed just for you.' },
  { number: '03', title: 'Learn & Earn Rewards', description: 'Complete lessons, earn XP, and watch your skills grow every day.' },
  { number: '04', title: 'Track Your Progress', description: 'See your improvement with detailed stats and celebrate milestones.' },
];

const achievements = [
  { icon: Star, label: 'First Lesson', color: '#E8336B' },
  { icon: Flame, label: '7-Day Streak', color: '#00B4D8' },
  { icon: Award, label: 'Quiz Master', color: '#E8336B' },
  { icon: Trophy, label: 'Top 10', color: '#00B4D8' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ForStudents() {
  return (
    <div style={{ background: '#FAFAF7' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#FAFAF7', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'DM Sans, sans-serif', marginBottom: '24px', background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
              For Students
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em', marginBottom: '24px', color: '#1A1A2E' }}>
              Learning That Feels Like Play
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
              Say goodbye to boring study sessions. Blast Learning turns education into an adventure with games, rewards, and an AI buddy that gets you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: '#1A1A2E', marginBottom: '16px' }}>
              Why Students Love Us
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
              We built Blast Learning with one goal — make learning so fun you'll forget you're studying.
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
                    border: '1px solid #E8E4D8',
                    borderRadius: '20px',
                    padding: '32px',
                    boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: `${feature.color}1a`, border: `1px solid ${feature.color}33`, color: feature.color }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#1A1A2E', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif' }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FAFAF7' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: '#1A1A2E', textAlign: 'center', marginBottom: '56px' }}
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
                  border: '1px solid #E8E4D8',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
                }}
              >
                <div style={{ fontSize: '40px', fontWeight: 800, fontFamily: 'Playfair Display, serif', background: 'linear-gradient(135deg, #E8336B 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', flexShrink: 0, lineHeight: 1 }}>{step.number}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#1A1A2E', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#1A1A2E' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: 'white', marginBottom: '16px' }}
          >
            Collect Achievements
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}
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
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '32px 20px',
                  }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', background: `${ach.color}26`, border: `2px solid ${ach.color}4d`, color: ach.color }}>
                    <Icon size={28} />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.9)' }}>{ach.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#1A1A2E' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: 'white', marginBottom: '16px' }}>
            Ready to <span style={{ background: 'linear-gradient(135deg, #E8336B 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Level Up?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join thousands of students who are already learning smarter, not harder.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', borderRadius: '9999px', fontSize: '16px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', background: '#E8336B', color: 'white', border: 'none' }}
          >
            Start Your Adventure <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
