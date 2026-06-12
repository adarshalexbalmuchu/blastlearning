import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, Users, Shield } from 'lucide-react';
import BrandArc from '../components/BrandArc';

const team = [
  { name: 'Arjun Mehta', role: 'Co-founder & CEO' },
  { name: 'Priya Sharma', role: 'Co-founder & CTO' },
  { name: 'Kiran Reddy', role: 'Head of Curriculum' },
  { name: 'Sunita Nair', role: 'Head of Product' },
  { name: 'Rahul Kumar', role: 'Head of Engineering' },
  { name: 'Deepa Iyer', role: 'Head of Learning Science' },
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
    desc: 'We remember what it felt like to be an Indian student, the pressure, the expectations, the fear of exams. Every decision we make starts with empathy for that experience.',
  },
  {
    icon: Users,
    title: 'Family Partnership',
    desc: 'Education is a family effort. We build tools for students and parents together, because the best outcomes happen when everyone is informed and aligned.',
  },
  {
    icon: Shield,
    title: 'Science-Backed Only',
    desc: "We don't ship features based on what looks impressive. Every technique in Blast Learning (spaced repetition, active recall, metacognition) is backed by peer-reviewed cognitive science.",
  },
];

const statPastels = ['#FDF3E7', '#FCEEF1', '#E7F6FB', '#F0EDFC'];
const teamPastels = ['#0FA8DC', '#FCEEF1', '#E7F6FB', '#F0EDFC', '#E9F7EF', '#FDF3E7'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  useSEO({
    title: 'About Us | Our Mission · Blast Learning',
    description: "Learn about Blast Learning's mission to fix India's education retention crisis. Our AI-powered platform helps students retain 91% of what they learn.",
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', paddingTop: '120px', paddingBottom: '100px', borderBottom: '1px solid #ECECF1' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-160px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,168,220,0.07) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 18s ease-in-out infinite reverse' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '24px', background: '#E0F5FC', color: '#0FA8DC' }}>
              Our Mission
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.15, color: '#1C1C28' }}>
              Making Learning Stick for Every Indian Student
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
              India spends billions on education every year, yet most students forget 90% of what they learn within a week. We built Blast Learning to fix that, to make every hour of study count, permanently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built Blast */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
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
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '28px' }}>
                Why We Built Blast Learning
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  "It started with a frustration. Our founders watched their younger siblings spend hours at coaching classes, only to draw blanks on exam papers weeks later. The problem wasn't intelligence or effort. Nobody had taught them how to make learning stick.",
                  'Cognitive science has known for decades that spaced repetition and active recall are the most effective learning techniques available. Yet the Indian education system (coaching classes, textbooks, tutors) delivers content without any retention strategy.',
                  'Blast Learning was built to bridge that gap. We take the science of how memory actually works and translate it into a daily experience that any student can follow, regardless of their school, city, or coaching setup.',
                  "Our Metacognition Engine doesn't just deliver content. It tracks how well you remember, identifies what's at risk of being forgotten, and schedules review at the exact right time. The result: 90% retention instead of 10%.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
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
                { val: '₹1,299', desc: 'Starting price, a fraction of the cost of coaching, with far better retention outcomes' },
                { val: '30 days', desc: 'Average time for students to see measurable improvement in exam scores' },
                { val: '4.8/5', desc: 'Average parent satisfaction rating across all enrolled families' },
              ].map((item, i) => (
                <motion.div
                  key={item.val}
                  variants={fadeUp}
                  style={{ borderRadius: '16px', padding: '24px', background: statPastels[i % statPastels.length], border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
                >
                  <div style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '12px', fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>{item.val}</div>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: '#FFFFFF' }}>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', fontFamily: 'Poppins, sans-serif', color: '#0FA8DC' }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#1C1C28' }}>
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
            {team.map((member, i) => {
              const fill = teamPastels[i % teamPastels.length];
              const isIndigo = fill === '#0FA8DC';
              return (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.12)' }}
                  style={{ padding: '28px', borderRadius: '16px', textAlign: 'center', background: '#FFFFFF', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
                >
                  <div
                    style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 600, color: isIndigo ? 'white' : '#0FA8DC', margin: '0 auto 16px', fontFamily: 'Poppins, sans-serif', background: fill }}
                  >
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ fontSize: '13px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{member.role}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#1C1C28' }}>
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
                whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.12)' }}
                style={{ padding: '32px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: '#E0F5FC', color: '#0FA8DC' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', color: '#1C1C28' }}>
            Join Us in Building a Better Way to Learn
          </h2>
          <p style={{ color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Parents, students, tutors, educators: there is a place for you in the Blast Learning community.
          </p>
          <Link
            to="/contact"
            className="cta cta-blue"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: '#0FA8DC', color: 'white' }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
