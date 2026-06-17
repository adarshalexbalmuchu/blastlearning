import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Shield, TrendingUp, Clock, Heart, BarChart3, Bell, CheckCircle } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import BrandWhoosh from '../components/BrandWhoosh';
import PageBottomSections from '../components/PageBottomSections';

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
  useSEO({
    title: "For Parents | Track Your Child's Progress · Blast Learning",
    description: 'Stay in control of your child\'s education with real-time dashboards, WhatsApp alerts, and weekly progress reports. Blast Learning keeps parents informed.',
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
            <p style={{ fontSize: '1.05rem', color: '#6B6B7B', fontFamily: "'Inter', sans-serif", maxWidth: '600px', margin: '0 auto' }}>
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
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
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="stat-cards-2col"
            >
              {[
                { value: '4,999+', label: 'Active Families', bg: '#FDF3E7', color: '#F59E0B' },
                { value: '91%', label: 'Grade Improvement', bg: '#E7F6FB', color: '#0FA8DC' },
                { value: '4.8/5', label: 'Parent Rating', bg: '#FCEEF1', color: '#F03C6F' },
                { value: '50,000+', label: 'Lessons Done', bg: '#F0EDFC', color: '#8B5CF6' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  style={{
                    background: stat.bg,
                    borderRadius: '16px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    border: '1px solid #ECECF1',
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: stat.color, marginBottom: '6px' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PageBottomSections />
    </div>
  );
}
