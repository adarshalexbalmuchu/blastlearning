import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Shield } from 'lucide-react';
import AccentText from '../components/AccentText';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';
import MobileCarousel from '../components/MobileCarousel';
import { sharedTestimonialsRow1, sharedTestimonialsRow2 } from '../data/testimonials';
import { sharedFaqs } from '../data/faqs';
import { fadeUp, stagger } from '../constants/animations';

const team = [
  { name: 'Bruce Lewolt', role: 'Founder' },
  { name: 'Ankit Sahu', role: 'Founder & Managing Director' },
  { name: 'Purvi Sahu', role: 'Director & Chief Marketing Officer' },
  { name: 'Arun Kumar Tyagi', role: 'Director of Alliances' },
  { name: 'Reena Prakash Tyagi', role: 'Director of Content Management' },
  { name: 'Aditya Reddy Dinesh', role: 'Head of Business Development' },
];

const companyStats = [
  { value: '500+', label: 'Peer-reviewed learning science studies behind the methodology' },
  { value: '100,000+', label: 'Students taught under this system, across multiple countries' },
  { value: 'US & International', label: 'Patents protecting the core methodology' },
  { value: 'IBM & McGraw-Hill', label: 'Institutional partners who have licensed the underlying technology' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'No Child Is Weak',
    desc: 'A low mark rarely measures ability. More often, it measures whether a student was ever shown a method that matches how their memory actually works, and Blast Learning India is built on the assumption that every student can close that gap once the method is right.',
  },
  {
    icon: Heart,
    title: 'Skills Over Marks',
    desc: 'Marks fade faster than the skills that produced them. We teach the underlying skill: recall under pressure, structured revision, honest self-assessment. That skill outlasts a single board exam and applies to the next one, and the one after that.',
  },
  {
    icon: Users,
    title: 'Made for India',
    desc: "Most international education platforms arrive in India after being built for someone else's curriculum, then get retrofitted to CBSE timelines and exam formats. Blast Learning India was rebuilt around the CBSE calendar, the realities of joint-family study schedules, and the particular pressure of board season.",
  },
  {
    icon: Shield,
    title: 'Science-Backed Only',
    desc: "We don't ship features based on what looks impressive. Every technique in Blast Learning (spaced repetition, active recall, metacognition) is backed by peer-reviewed cognitive science.",
  },
];

const statPastels = ['#FDF3E7', '#FCEEF1', '#E7F6FB', '#F0EDFC'];
const teamPastels = ['#0FA8DC', '#FCEEF1', '#E7F6FB', '#F0EDFC', '#E9F7EF', '#FDF3E7'];

export default function About() {
  useSEO({
    title: 'About Us | Our Mission · Blast Learning',
    description: "Learn about Blast Learning's mission to fix India's education retention crisis. Our AI-powered platform helps students retain 91% of what they learn.",
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '120px', paddingBottom: '100px', borderBottom: '1px solid #DAEEF6' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="Who We Are" marginBottom="24px" fontSize="12px" />
            <h1 className="page-hero-title">
              About <AccentText tone="blue">Blast</AccentText> <AccentText tone="pink">Learning</AccentText> India
            </h1>
            <p className="page-hero-copy" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Ask a parent managing a child's CBSE or ICSE schedule what worries them most, and marks rarely top the list. The real worry is retention. Months of tuition fade within days, and no extra coaching class has ever fixed that on its own. Blast Learning is not a tutoring platform. It is the self-study operating system beneath all other educational investment, the layer that decides whether anything taught survives past the exam it was meant for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built Blast */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
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
              <HeadingMarker text="Our Story" marginBottom="16px" fontSize="12px" />
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>
                A System <AccentText tone="blue">Built</AccentText> Before It Had a <AccentText tone="pink">Market</AccentText>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  "Bruce Lewolt spent twenty-five years building learning technology before most of today's edtech platforms existed, work that was eventually licensed by IBM and McGraw-Hill and used by more than 100,000 students across multiple countries. His research rests on one observation: most students who underperform are missing a method that fits how their memory actually works, not additional ability.",
                  "That research sat largely behind enterprise licensing deals until 2020, when remote schooling exposed how few students could study without a teacher physically present. Reading and mathematics scores fell to their lowest recorded levels within months. Lewolt made a decision that turned twenty-five years of licensed research into a direct-to-student platform, founding Blast Learning that year on a narrow premise: give every student the same independent-learning training that, until then, only large institutions could afford to license.",
                  "Ankit Sahu, an electrical engineer with an MBA from the University of San Francisco and a record of building businesses across India's financial sector, partnered with Lewolt in 2024 to adapt that platform for students in India. The result is Blast Learning India, the same patented methodology rebuilt for the CBSE curriculum and the realities of the Indian coaching economy.",
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
              className="stat-cards-2col" style={{ minWidth: 0 }}
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
                  style={{ borderRadius: '16px', padding: '24px', background: statPastels[i % statPastels.length], border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)', height: '100%' }}
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <HeadingMarker text="Leadership" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: 0 }}>
              The <AccentText tone="blue">People</AccentText> Building <AccentText tone="pink">It</AccentText>
            </h2>
          </motion.div>
          <MobileCarousel desktopGridClass="grid-cols-2-sm grid-cols-3-lg" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {team.map((member, i) => {
              const fill = teamPastels[i % teamPastels.length];
              const isIndigo = fill === '#0FA8DC';
              return (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.12)' }}
                  className="card-subtle surface-card"
                  style={{ padding: '28px', textAlign: 'center', height: '100%' }}
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
          </MobileCarousel>
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
            <HeadingMarker text="Our Values" marginBottom="16px" fontSize="12px" />
            <h2 className="t-h2" style={{ marginBottom: 0 }}>
              What We <AccentText tone="blue">Believe</AccentText> <AccentText tone="pink">In</AccentText>
            </h2>
          </motion.div>
          <MobileCarousel desktopGridClass="grid-cols-2-sm" desktopGridStyle={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ boxShadow: '0 8px 28px rgba(15,168,220,0.12)' }}
                className="card-subtle surface-card"
                style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: '#E0F5FC', color: '#0FA8DC' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', flex: 1 }}>{desc}</p>
              </motion.div>
            ))}
          </MobileCarousel>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <SharedTestimonialsSection row1={sharedTestimonialsRow1} row2={sharedTestimonialsRow2} />

      {/* ── FAQ ── */}
      <SharedFaqSection items={sharedFaqs} />

    </div>
  );
}
