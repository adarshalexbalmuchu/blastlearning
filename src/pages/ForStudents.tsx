import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Brain, Target, CheckCircle, Zap, BookOpen, Users, MessageSquare, Shield,
  Calendar, BarChart3, Award, TrendingUp, Repeat
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const benefits = [
  { icon: Brain, title: 'Smart Revision', desc: 'AI knows exactly when you need to revise each topic so you never forget anything before an exam.' },
  { icon: Target, title: 'Clear Goals', desc: 'Daily targets break overwhelming syllabi into manageable steps you can actually complete.' },
  { icon: Zap, title: 'Less Stress', desc: 'No more last-minute panic. Consistent, structured study removes exam anxiety permanently.' },
  { icon: BarChart3, title: 'Track Progress', desc: 'See your retention scores improve week by week. Progress you can actually see is seriously motivating.' },
];

const aiTools = [
  {
    icon: Calendar,
    title: 'AI Study Planner',
    desc: 'Your personal AI creates a daily study schedule based on your syllabus, weak areas, and upcoming exams. It adjusts automatically as your performance changes.',
  },
  {
    icon: Repeat,
    title: 'Smart Revision',
    desc: 'Spaced repetition technology schedules your reviews at scientifically optimal intervals — the exact moment before you would have forgotten.',
  },
  {
    icon: MessageSquare,
    title: 'Study Buddy',
    desc: 'An AI companion that answers your doubts 24/7, explains concepts in multiple ways, and supports learning in your native language.',
  },
  {
    icon: Brain,
    title: 'Practice Engine',
    desc: 'Adaptive quizzes that get harder when you\'re doing well and easier when you\'re struggling — keeping you in the perfect learning zone.',
  },
  {
    icon: TrendingUp,
    title: 'Neural Weaving',
    desc: 'Our proprietary technique that connects new concepts to things you already know, making learning faster and memories more durable.',
  },
  {
    icon: BookOpen,
    title: 'Class Notes Converter',
    desc: 'Upload any class note, screenshot, or coaching material and our AI converts it into a structured study guide with key points and practice questions.',
  },
];

const collaborativeFeatures = [
  { icon: Users, title: 'Group Study Sessions', desc: 'Join scheduled group study rooms with students from your class and city. Stay focused together with shared timers and goals.' },
  { icon: MessageSquare, title: 'Peer Discussion Forums', desc: 'Ask questions, share answers, and discuss tricky topics with thousands of students facing the same syllabus.' },
  { icon: BarChart3, title: 'Shared Progress Tracking', desc: 'See how your friends are progressing and motivate each other to hit daily and weekly study goals.' },
  { icon: Shield, title: 'Safe & Moderated', desc: 'All communities are moderated by our team to ensure a respectful, distraction-free learning environment.' },
];

const communityStats = [
  { value: '5,000+', label: 'Study Buddies' },
  { value: '200+', label: 'Study Groups Daily' },
  { value: '50,000+', label: 'Questions Answered' },
];

const todayTasks = [
  { subject: 'Maths', topic: 'Quadratic Equations — Revision', time: '25 min', status: 'done' },
  { subject: 'Science', topic: 'Photosynthesis — New Lesson', time: '30 min', status: 'active' },
  { subject: 'English', topic: 'Tenses — Practice Quiz', time: '15 min', status: 'pending' },
  { subject: 'Maths', topic: 'Trigonometry — Quiz', time: '20 min', status: 'pending' },
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
    <div style={{ background: '#07111F' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#07111F', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                For Students
              </span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.15 }}>
                <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Learning That{' '}
                </span>
                <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Adapts to You
                </span>
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '32px', maxWidth: '480px' }}>
                Stop studying harder. Start studying smarter. Blast Learning's AI builds a personalized study plan that fits your pace, your style, and your exam schedule.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
                <Link
                  to="/programs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}
                >
                  Start Free Trial <ArrowRight size={15} />
                </Link>
                <Link
                  to="/library"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
                >
                  Explore Library
                </Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {['Free 7-day trial', 'No credit card needed', 'Works alongside coaching'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                    <CheckCircle size={13} style={{ color: '#06B6D4', flexShrink: 0 }} /> {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Student Dashboard Mockup */}
            <motion.div variants={fadeUp} style={{ minWidth: 0, width: '100%' }}>
              <div style={{ background: 'rgba(7,17,31,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden' }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Today's Learning</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)' }}>Arjun's Study Plan</p>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '9999px', background: 'linear-gradient(135deg, rgba(232,53,122,0.25), rgba(232,53,122,0.1))', color: '#ff6b9d', border: '1px solid rgba(232,53,122,0.3)', fontFamily: 'Inter, sans-serif' }}>
                    🔥 14-Day Streak
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                    {[
                      { label: 'Topics Today', val: '4' },
                      { label: 'Study Time', val: '1h 30m' },
                      { label: 'Score', val: '87%' },
                    ].map((s) => (
                      <div key={s.label} style={{ borderRadius: '12px', padding: '12px', textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px', fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.val}</p>
                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>Today's Tasks</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {todayTasks.map((task) => (
                      <div key={task.topic} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px', background: task.status === 'active' ? 'rgba(6,182,212,0.08)' : 'rgba(255,255,255,0.03)', border: task.status === 'active' ? '1px solid rgba(6,182,212,0.2)' : '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: task.status === 'done' ? 'linear-gradient(135deg, #06B6D4, #8B5CF6)' : task.status === 'active' ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.06)' }}>
                          {task.status === 'done' && <CheckCircle size={12} style={{ color: 'white' }} />}
                          {task.status === 'active' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06B6D4' }} />}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.topic}</p>
                          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>{task.subject} · {task.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>Recent Achievements</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[{ icon: Award, label: '7-Day Streak', color: '#ff6b9d' }, { icon: Zap, label: 'Speed Learner', color: '#06B6D4' }, { icon: Target, label: 'Math Master', color: '#8B5CF6' }].map(({ icon: Icon, label, color }) => (
                        <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '10px 6px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <Icon size={13} style={{ color }} />
                          <p style={{ fontSize: '10px', textAlign: 'center', lineHeight: 1.3, color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefit Cards */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-2-sm grid-cols-4-lg"
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Tools */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)' }}>
              AI-Powered Study Tools Built for You
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-2-md grid-cols-3-lg"
          >
            {aiTools.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaborative Learning */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
              Learn Better, Together
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', maxWidth: '560px', margin: '0 auto' }}>
              Join a community of thousands of Indian students who are all working toward the same goal. Studying doesn't have to be a lonely grind.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', marginBottom: '40px' }}
            className="grid-cols-2-md grid-cols-4-lg"
          >
            {collaborativeFeatures.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px', borderRadius: '20px', background: 'rgba(6,182,212,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(6,182,212,0.15)' }}
          >
            {communityStats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px', fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
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
            What Students Are Saying
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-3-md"
          >
            <motion.div variants={fadeUp}>
              <TestimonialCard name="Ananya Krishnan" role="Class 10, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard name="Rahul Mehta" role="Class 12, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard name="Kavitha Suresh" role="Class 9, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works for me." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
            </motion.div>
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
            Ready to Actually Remember What You Study?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Start your 7-day free trial today. No credit card. No pressure. Just smarter studying.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link to="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}>
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link to="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
              Browse the Library
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
