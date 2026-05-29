import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const team = [
  { name: 'Arjun Mehta', role: 'Co-founder & CEO', color: '#06B6D4' },
  { name: 'Priya Sharma', role: 'Co-founder & CTO', color: '#8B5CF6' },
  { name: 'Kiran Reddy', role: 'Head of Curriculum', color: '#3B82F6' },
  { name: 'Sunita Nair', role: 'Head of Product', color: '#06B6D4' },
  { name: 'Rahul Kumar', role: 'Head of Engineering', color: '#8B5CF6' },
  { name: 'Deepa Iyer', role: 'Head of Learning Science', color: '#3B82F6' },
];

const companyStats = [
  { value: '2022', label: 'Founded' },
  { value: '4,999+', label: 'Students Helped' },
  { value: '49+', label: 'Cities Across India' },
  { value: '91%', label: 'Improvement Rate' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Retention First',
    desc: 'We obsess over one question: will the student still remember this in 30 days? Everything we build is measured against long-term retention, not short-term engagement.',
  },
  {
    icon: Heart,
    title: 'Student Empathy',
    desc: 'We remember what it felt like to be an Indian student — the pressure, the expectations, the fear of exams. Every decision we make starts with empathy for that experience.',
  },
  {
    icon: Users,
    title: 'Family Partnership',
    desc: 'Education is a family effort. We build tools for students and parents together, because the best outcomes happen when everyone is informed and aligned.',
  },
  {
    icon: Shield,
    title: 'Science-Backed Only',
    desc: 'We don\'t ship features based on what looks impressive. Every technique in Blast Learning — spaced repetition, active recall, metacognition — is backed by peer-reviewed cognitive science.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <div style={{ background: '#07111F' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#07111F', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              Our Mission
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', marginBottom: '24px', lineHeight: 1.15 }}>
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Making Learning{' '}
              </span>
              <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Stick for Every Indian Student
              </span>
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
              India spends billions on education every year, yet most students forget 90% of what they learn within a week. We built Blast Learning to fix that — to make every hour of study count, permanently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built Blast */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '64px', alignItems: 'center' }}
            className="grid-cols-2-lg"
          >
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)', marginBottom: '28px' }}>
                Why We Built Blast Learning
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  'It started with a frustration. Our founders watched their younger siblings spend hours at coaching classes, only to draw blanks on exam papers weeks later. The problem wasn\'t intelligence or effort — it was that nobody had taught them how to make learning stick.',
                  'Cognitive science has known for decades that spaced repetition and active recall are the most effective learning techniques available. Yet the Indian education system — coaching classes, textbooks, tutors — delivers content without retention strategy.',
                  'Blast Learning was built to bridge that gap. We take the science of how memory actually works and translate it into a daily experience that any student can follow — regardless of their school, city, or coaching setup.',
                  'Our Metacognition Engine doesn\'t just deliver content. It tracks how well you remember, identifies what\'s at risk of being forgotten, and schedules review at the exact right time. The result: 90% retention instead of 10%.',
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', minWidth: 0 }}
            >
              {[
                { val: '90%', desc: 'Average retention achieved by Blast students vs 10% without structured revision' },
                { val: '₹1,299', desc: 'Starting price — a fraction of the cost of coaching, with far better retention outcomes' },
                { val: '30 days', desc: 'Average time for students to see measurable improvement in exam scores' },
                { val: '4.0/5', desc: 'Average parent satisfaction rating across all enrolled families' },
              ].map((item) => (
                <motion.div
                  key={item.val}
                  variants={fadeUp}
                  style={{ borderRadius: '20px', padding: '24px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.val}</div>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: '#07111F' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}
            className="grid-cols-4-md"
          >
            {companyStats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.9)' }}>
              The Team Behind Blast Learning
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-2-sm grid-cols-3-lg"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                style={{ padding: '28px', borderRadius: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 800, color: 'white', margin: '0 auto 16px', fontFamily: 'Space Grotesk, sans-serif', background: `linear-gradient(135deg, ${member.color}, rgba(${member.color === '#06B6D4' ? '6,182,212' : member.color === '#8B5CF6' ? '139,92,246' : '59,130,246'},0.5))`, boxShadow: `0 0 24px ${member.color}40` }}
                >
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              What We Stand For
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-2-sm"
          >
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
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
            Join Us in Building a Better Way to Learn
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether you're a parent, student, tutor, or educator — we'd love to have you in the Blast Learning community.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
