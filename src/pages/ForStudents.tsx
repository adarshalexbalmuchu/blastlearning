import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Brain, Target, Sparkles, Star, Flame, Award } from 'lucide-react';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';
import MobileCarousel from '../components/MobileCarousel';
import { sharedTestimonialsRow1, sharedTestimonialsRow2 } from '../data/testimonials';
import { sharedFaqs } from '../data/faqs';
import { fadeUp, stagger } from '../constants/animations';

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


export default function ForStudents() {
  useSEO({
    title: 'For Students | Study Smarter, Not Harder · Blast Learning',
    description: 'Learning that feels like play. Earn XP, build streaks, and master concepts with an AI study buddy that adapts to your pace. Free 7-day trial.',
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="For Students" marginBottom="24px" fontSize="12px" />
            <h1 className="page-hero-title">
              <AccentText tone="blue">Learning</AccentText> That Feels Like <AccentText tone="pink">Play</AccentText>
            </h1>
            <p className="page-hero-copy" style={{ maxWidth: '640px', margin: '0 auto' }}>
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
            <HeadingMarker text="Features" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2">
              Why <AccentText tone="blue">Students</AccentText> Love <AccentText tone="pink">Us</AccentText>
            </h2>
            <p className="t-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We built Blast Learning with one goal: make studying so engaging your child forgets it is work.
            </p>
          </motion.div>
          <MobileCarousel desktopGridClass="grid-cols-3-md" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="card-subtle surface-card"
                  style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: feature.tile, color: '#0FA8DC' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", flex: 1 }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </MobileCarousel>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <HeadingMarker text="Process" marginBottom="16px" fontSize="12px" />
            <motion.h2
              className="t-h2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginBottom: 0 }}
            >
              How It <AccentText tone="blue">Works</AccentText>
            </motion.h2>
          </div>
          <MobileCarousel desktopGridClass="grid-cols-2-md" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-subtle surface-card"
                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', height: '100%' }}
              >
                <div style={{ fontSize: '40px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#0FA8DC', flexShrink: 0, lineHeight: 1 }}>{step.number}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <HeadingMarker text="Badges" marginBottom="16px" fontSize="12px" />
          <motion.h2
            className="t-h2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Collect <AccentText tone="pink">Achievements</AccentText>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="t-body"
            style={{ maxWidth: '600px', margin: '0 auto 56px' }}
          >
            Every milestone earns you a badge. How many can you collect?
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', alignItems: 'stretch' }}
            className="grid-cols-4-md"
          >
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="card-subtle surface-card"
                  style={{ padding: '32px 20px', height: '100%' }}
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
      <SharedTestimonialsSection row1={sharedTestimonialsRow1} row2={sharedTestimonialsRow2} subtitle="Hear from students who turned forgotten lessons into lasting marks." />

      {/* ── FAQ ── */}
      <SharedFaqSection items={sharedFaqs} />

    </div>
  );
}
