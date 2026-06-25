import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Heart, Lightbulb, Users, Shield } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import HeadingMarker from '../components/HeadingMarker';
import { SharedFaqSection, SharedTestimonialsSection } from '../components/MarketingSections';

const testimonialsRow1 = [
  { name: 'Ananya Krishnan', role: 'Class 10, CBSE Plan · Bangalore', text: 'Blast Learning showed me exactly which chapters I kept forgetting. My Science score went from 61 to 84 in one term. The spaced revision reminders are the real game-changer.' },
  { name: 'Rahul Mehta', role: 'Class 12, CBSE Plan · Mumbai', text: "I was scoring 55 in Physics mock tests. Blast's Metacognition Engine identified my weak chapters within the first week and built a custom plan. Ended up with 81 in boards." },
  { name: 'Kavitha Suresh', role: 'Class 9, English Mastery · Hyderabad', text: 'Grammar used to be a nightmare. The AI broke it into tiny daily chunks and quizzed me at exactly the right time. I went from D grades to consistently getting As.' },
  { name: 'Arjun Nair', role: 'Class 11, Math Genius · Chennai', text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.' },
  { name: 'Karan Malhotra', role: 'Class 12, SAT Prep Pass · Gurgaon', text: "Blast's SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months." },
];
const testimonialsRow2 = [
  { name: 'Deepak Sharma', role: 'Parent · Class 11 CBSE, Delhi', text: "The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven't had to nag him about studying in two months." },
  { name: 'Sunita Reddy', role: 'Parent · Class 10 CBSE, Pune', text: "We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day." },
  { name: 'Priya Iyer', role: 'Parent · Class 10 CBSE, Kochi', text: "My daughter's board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically." },
  { name: 'Meena Patel', role: 'Parent · Class 9 CBSE, Ahmedabad', text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.' },
  { name: 'Vikram Gupta', role: 'Parent · Class 12 CBSE, Jaipur', text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.' },
];
const pageFaqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps 91% of students improve what they retain, compared to the 10% most students remember without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Full Syllabus plan is designed for Class 10, with full syllabus coverage and retention-first board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach  -  it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first two weeks." },
];

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
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '120px', paddingBottom: '100px', borderBottom: '1px solid #DAEEF6' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="Our Mission" marginBottom="24px" fontSize="12px" />
            <h1 className="page-hero-title">
              Making Learning Stick for Every Indian Student
            </h1>
            <p className="page-hero-copy" style={{ maxWidth: '640px', margin: '0 auto' }}>
              India spends billions on education every year, yet most students forget 90% of what they learn within a week. We built Blast Learning to fix that, to make every hour of study count, permanently.
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
              <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#111111', marginBottom: '28px' }}>
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#111111' }}>
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
            <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#111111' }}>
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

      {/* ── Testimonials ── */}
      <SharedTestimonialsSection row1={testimonialsRow1} row2={testimonialsRow2} />

      {/* ── FAQ ── */}
      <SharedFaqSection items={pageFaqs} />

    </div>
  );
}
