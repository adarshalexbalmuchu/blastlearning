import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialsMarquee from './ui/testimonials-marquee';
import FAQItem from './FAQItem';
import ctaBanner from '../assets/Hero 4.png';

const testimonialRow1 = [
  {
    name: 'Ananya Krishnan',
    role: 'Class 10, CBSE Plan · Bangalore',
    text: 'Blast Learning showed me exactly which chapters I kept forgetting. My Science score went from 61 to 84 in one term. The spaced revision reminders are the real game-changer.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Class 12, CBSE Plan · Mumbai',
    text: "I was scoring 55 in Physics mock tests. Blast's Metacognition Engine identified my weak chapters within the first week and built a custom plan. Ended up with 81 in boards.",
  },
  {
    name: 'Kavitha Suresh',
    role: 'Class 9, English Mastery · Hyderabad',
    text: 'Grammar used to be a nightmare. The AI broke it into tiny daily chunks and quizzed me at exactly the right time. I went from D grades to consistently getting As.',
  },
  {
    name: 'Arjun Nair',
    role: 'Class 11, Math Genius · Chennai',
    text: 'Trigonometry and integration used to vanish from my head overnight. After two months with the Math Genius plan, I actually remember the concepts a week later without re-reading.',
  },
  {
    name: 'Karan Malhotra',
    role: 'Class 12, SAT Prep Pass · Gurgaon',
    text: "Blast's SAT plan is ruthlessly efficient. It tracked which question types I kept getting wrong and drilled those specifically. Went from 1090 to 1380 across three months.",
  },
];

const testimonialRow2 = [
  {
    name: 'Deepak Sharma',
    role: 'Parent · Class 11 CBSE, Delhi',
    text: "The WhatsApp summary every evening tells me exactly what my son studied, for how long, and his retention score. I haven't had to nag him about studying in two months.",
  },
  {
    name: 'Sunita Reddy',
    role: 'Parent · Class 10 CBSE, Pune',
    text: "We were paying ₹18,000 a month for coaching and she still blanked in tests. Blast Learning at ₹1,299 helped her retain the same coaching content. The difference is night and day.",
  },
  {
    name: 'Priya Iyer',
    role: 'Parent · Class 10 CBSE, Kochi',
    text: "My daughter's board result improved by 22 marks overall. The parent dashboard showed me exactly which subjects needed attention, and the AI adjusted her plan automatically.",
  },
  {
    name: 'Meena Patel',
    role: 'Parent · Class 9 CBSE, Ahmedabad',
    text: 'My son used to study for hours and still forget everything the next day. Now after just 45 minutes on Blast, he retains it for weeks. The spaced revision system genuinely works.',
  },
  {
    name: 'Vikram Gupta',
    role: 'Parent · Class 12 CBSE, Jaipur',
    text: 'I was sceptical of another EdTech app. But the Focus Trainer kept my daughter off her phone during study hours, and her prelim scores jumped 18 marks across all subjects.',
  },
];

const faqs = [
  { q: 'What is Blast Learning and how does it work?', a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps 91% of students improve what they retain, compared to the 10% most students remember without structured revision.' },
  { q: 'Is Blast Learning suitable for CBSE students preparing for board exams?', a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.' },
  { q: 'How is Blast Learning different from other coaching apps?', a: "Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn't just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams." },
  { q: 'Can I try Blast Learning before paying?', a: "Yes! We offer a 7-day free trial with full access to all features. No credit card required. You'll see real retention data for your child within the first week." },
];

export default function PageBottomSections({ showFAQ = true }: { showFAQ?: boolean }) {
  return (
    <>
      {/* ── Testimonials ── */}
      <section id="testimonials" className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F9FAFB' }}>
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', background: '#E0F5FC', color: '#0FA8DC', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
              Student Stories
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              Real Results from Real Students
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
              Hear from families who turned forgotten lessons into lasting marks.
            </p>
          </motion.div>
        </div>
        <TestimonialsMarquee row1={testimonialRow1} row2={testimonialRow2} />
      </section>

      {/* ── FAQ ── */}
      {showFAQ && (
        <section className="section-pad" style={{ paddingTop: '48px', paddingBottom: '40px', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '32px' }}
            >
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#1C1C28', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 12px' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '1rem', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, margin: 0 }}>
                Everything you need to know before you start your free trial.
              </p>
            </motion.div>
            <div style={{ borderTop: '1px solid #E5E7EB', marginBottom: '32px' }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                View All FAQs <ArrowRight size={15} style={{ color: '#0FA8DC' }} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section aria-label="Call to action" style={{ width: '100%', display: 'block', lineHeight: 0 }}>
        <img
          src={ctaBanner}
          alt="Learn Smarter. Achieve More. Start your Blast Learning journey today."
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>
    </>
  );
}
