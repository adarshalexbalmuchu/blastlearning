import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Clock, Heart, BarChart3, Bell, ArrowRight, CheckCircle, Quote } from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Real-Time Progress Dashboard',
    description: 'See exactly what your child is learning, their strengths, and areas needing attention — updated live.',
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
  'No hidden fees — transparent monthly pricing',
  'Cancel anytime, no lock-in contracts',
  'Data privacy guaranteed — your child\'s information is secure',
  'Aligned with CBSE & NCERT curriculum',
  'Created by IIT & NIT alumni educators',
  'Trusted by 10,000+ Indian families',
];

const testimonials = [
  {
    quote: 'My daughter\'s confidence in maths has completely transformed. The weekly reports help me stay involved without being intrusive.',
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
    quote: 'Worth every rupee. The retention tracking is genius — my daughter actually remembers what she learned months ago.',
    name: 'Anita Desai',
    role: 'Mother of Class 8 student',
    location: 'Mumbai',
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
    <div style={{ background: '#FAFAF7' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#FAFAF7', paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'DM Sans, sans-serif', marginBottom: '24px', background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
              For Parents
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em', marginBottom: '24px', color: '#1A1A2E' }}>
              Peace of Mind for Parents
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
              Stay informed and involved in your child's education journey. Track progress, celebrate wins, and support their growth — all backed by transparent data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#1A1A2E' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: 'white', marginBottom: '16px' }}>
              Everything You Need to Stay Involved
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
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
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '32px',
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: 'rgba(232,51,107,0.15)', border: '1px solid rgba(232,51,107,0.3)', color: '#E8336B' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: 'white', marginBottom: '10px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif' }}>{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }} className="grid-cols-2-md">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: '#1A1A2E', marginBottom: '24px' }}>
                Built on Trust & Transparency
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', marginBottom: '32px' }}>
                We believe parents deserve complete clarity. No hidden costs, no confusing contracts — just honest, effective education.
              </p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {trustPoints.map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#00B89C', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif' }}>{point}</span>
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
                border: '1px solid #E8E4D8',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                {[
                  { value: '10,000+', label: 'Active Families' },
                  { value: '92%', label: 'Grade Improvement' },
                  { value: '4.8/5', label: 'Parent Rating' },
                  { value: '50,000+', label: 'Lessons Done' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'Playfair Display, serif', color: '#00B4D8', marginBottom: '8px' }}>{stat.value}</div>
                    <div style={{ fontSize: '13px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FAFAF7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', color: '#1A1A2E', textAlign: 'center', marginBottom: '56px' }}
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
                  border: '1px solid #E8E4D8',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 24px rgba(26,26,46,0.06)',
                }}
              >
                <Quote size={32} style={{ color: '#F5C0D4', marginBottom: '16px' }} />
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif', marginBottom: '24px', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#1A1A2E' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif' }}>{t.role} · {t.location}</div>
                </div>
              </motion.div>
            ))}
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
            Give Your Child the <span style={{ background: 'linear-gradient(135deg, #E8336B 0%, #00B4D8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Best</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join thousands of parents who trust Blast Learning with their child's education.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', background: '#E8336B', color: 'white', border: 'none' }}
            >
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link
              to="/programs"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
            >
              View Programs
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
