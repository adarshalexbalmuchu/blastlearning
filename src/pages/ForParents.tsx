import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Clock, Heart, BarChart3, Bell, ArrowRight, CheckCircle, Quote } from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Real-Time Progress Dashboard',
    description: 'See exactly what your child is learning, their strengths, and areas needing attention, updated live.',
  },
  {
    icon: Bell,
    title: 'Weekly Progress Reports',
    description: 'Receive detailed weekly summaries via WhatsApp and email. No surprises, just clear insights.',
  },
  {
    icon: Shield,
    title: 'Safe Learning Environment',
    description: 'No ads, no distractions, no inappropriate content. A focused, secure space built for learning.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Improvement',
    description: 'Track grade improvements over time with data-driven insights and retention analytics.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning Schedule',
    description: 'Your child learns at their own pace, anytime. Perfect for balancing school and other activities.',
  },
  {
    icon: Heart,
    title: 'Reduced Exam Stress',
    description: 'Confidence-building approach with steady preparation means less anxiety at exam time.',
  },
];

const trustPoints = [
  'No hidden fees: transparent monthly pricing',
  'Cancel anytime, no lock-in contracts',
  'Data privacy guaranteed: your child\'s information is secure',
  'Aligned with CBSE & NCERT curriculum',
  'Created by IIT & NIT alumni educators',
  'Trusted by 4,999+ Indian families',
];

const testimonials = [
  {
    quote: 'My daughter\'s confidence in maths has completely turned around. The weekly reports help me stay involved without being intrusive.',
    name: 'Priya Sharma',
    role: 'Mother of Class 10 student',
    location: 'Delhi',
  },
  {
    quote: 'Finally an app that shows me real progress. I can see exactly where my son needs help and the AI actually adapts to him.',
    name: 'Rajesh Kumar',
    role: 'Father of Class 9 student',
    location: 'Bangalore',
  },
  {
    quote: 'Worth every rupee. The retention tracking is brilliant. My daughter actually remembers what she learned months ago.',
    name: 'Anita Desai',
    role: 'Mother of Class 8 student',
    location: 'Mumbai',
  },
];

// Pastel fills rotated across benefit icon tiles
const pastels = ['#FDF3E7', '#FCEEF1', '#E7F6FB', '#F0EDFC', '#E9F7EF', '#E9F2FC'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ForParents() {
  useEffect(() => {
    document.title = "For Parents | Track Your Child's Progress · Blast Learning";
    return () => { document.title = 'Blast Learning'; };
  }, []);

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#F7F7F8', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif", marginBottom: '24px', background: '#E0F5FC', color: '#0FA8DC' }}>
              For Parents
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', marginBottom: '24px', color: '#1C1C28' }}>
              Peace of Mind for Parents
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", maxWidth: '640px', margin: '0 auto' }}>
              Stay informed and involved in your child's education journey. Track progress, celebrate wins, and support their growth, all backed by transparent data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
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
              Everything You Need to Stay Involved
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: "'Inter', sans-serif", maxWidth: '600px', margin: '0 auto' }}>
              Powerful tools designed to keep you connected to your child's learning journey.
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
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const tile = pastels[idx % pastels.length];
              return (
                <motion.div
                  key={benefit.title}
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
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: tile, color: '#0FA8DC' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '10px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif" }}>{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }} className="grid-cols-2-md">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '24px' }}>
                Built on Trust & Transparency
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '32px' }}>
                We believe parents deserve complete clarity. No hidden costs, no confusing contracts, just honest, effective education.
              </p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {trustPoints.map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#0FA8DC', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#1C1C28', fontFamily: "'Inter', sans-serif" }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECECF1',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                {[
                  { value: '4,999+', label: 'Active Families' },
                  { value: '91%', label: 'Grade Improvement' },
                  { value: '4.8/5', label: 'Parent Rating' },
                  { value: '50,000+', label: 'Lessons Done' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: '#1C1C28', marginBottom: '8px' }}>{stat.value}</div>
                    <div style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', textAlign: 'center', marginBottom: '56px' }}
          >
            What Parents Say
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
            className="grid-cols-3-md"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #ECECF1',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
                }}
              >
                <Quote size={32} style={{ color: '#0FA8DC', marginBottom: '16px' }} />
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#1C1C28', fontFamily: "'Inter', sans-serif", marginBottom: '24px', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#1C1C28' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: "'Inter', sans-serif" }}>{t.role} · {t.location}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#F7F7F8' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em', color: '#1C1C28', marginBottom: '16px' }}>
            Give Your Child the Best
          </h2>
          <p style={{ color: '#5A5A6E', fontFamily: "'Inter', sans-serif", marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join thousands of parents who trust Blast Learning with their child's education.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="cta cta-blue"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#0FA8DC', color: 'white', border: 'none' }}
            >
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link
              to="/programs"
              className="cta cta-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none', background: '#FFFFFF', border: '1.5px solid #DCDCE5', color: '#1C1C28' }}
            >
              View Programs
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
