import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Brain, Target, Sparkles, ArrowRight, Star, Flame, Award } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import BrandWhoosh from '../components/BrandWhoosh';

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

      {/* CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '16px' }}>
            Ready to Level Up?
          </h2>
          <p style={{ color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join thousands of students who are already learning smarter, not harder.
          </p>
          <Link
            to="/contact"
            className="cta cta-blue"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '10px', fontSize: '16px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#0FA8DC', color: 'white', border: 'none' }}
          >
            Start Your Adventure <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
