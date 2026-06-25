import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import BrandArc from '../components/BrandArc';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Play, FileText, HelpCircle, Lock } from 'lucide-react';
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

type FilterTab = 'All' | 'CBSE' | 'Maths' | 'English' | 'SAT' | 'Science';

const filterTabs: FilterTab[] = ['All', 'CBSE', 'Maths', 'English', 'SAT', 'Science'];

interface Resource {
  id: number;
  title: string;
  subject: FilterTab;
  type: 'Video' | 'Notes' | 'Quiz';
  description: string;
  locked: boolean;
  duration?: string;
}

const resources: Resource[] = [
  { id: 1, title: 'Quadratic Equations: Complete Chapter', subject: 'Maths', type: 'Video', description: 'Master quadratic equations with step-by-step video explanations covering all CBSE Class 10 patterns.', locked: false, duration: '42 min' },
  { id: 2, title: 'Photosynthesis & Respiration Notes', subject: 'Science', type: 'Notes', description: 'Comprehensive chapter notes with diagrams and memory cues for Class 9 and 10 Biology.', locked: false },
  { id: 3, title: 'English Grammar: Complete Tenses Guide', subject: 'English', type: 'Notes', description: 'All 12 tenses explained with examples, rules, and common mistakes to avoid.', locked: true },
  { id: 4, title: 'Trigonometry Practice Quiz: 50 Questions', subject: 'Maths', type: 'Quiz', description: 'Timed practice quiz covering all trigonometry ratios, identities, and applications for Classes 10-11.', locked: true },
  { id: 5, title: 'SAT Math: Algebra & Functions', subject: 'SAT', type: 'Video', description: 'Foundation SAT Math video covering algebra, linear functions, and problem-solving strategies.', locked: true, duration: '58 min' },
  { id: 6, title: 'CBSE Science Chapter 1-5 Revision', subject: 'CBSE', type: 'Notes', description: 'Condensed revision notes for the first five chapters of Class 10 Science with exam tips.', locked: false },
  { id: 7, title: 'Chemical Reactions & Equations Quiz', subject: 'Science', type: 'Quiz', description: 'Practice quiz covering all types of chemical reactions from NCERT Class 10 Chemistry.', locked: true },
  { id: 8, title: 'Reading Comprehension Strategies', subject: 'English', type: 'Video', description: 'Proven techniques for tackling unseen passages in CBSE and SAT exams with speed and accuracy.', locked: false, duration: '28 min' },
  { id: 9, title: 'CBSE Maths Board Paper: 2023 Analysis', subject: 'CBSE', type: 'Notes', description: 'Detailed analysis of the 2023 board exam with pattern breakdown and high-weightage topics.', locked: true },
];

const typeStyles: Record<string, { bg: string; text: string }> = {
  Video: { bg: '#FCEEF1', text: '#0FA8DC' },
  Notes: { bg: '#E7F6FB', text: '#0FA8DC' },
  Quiz: { bg: '#F0EDFC', text: '#0FA8DC' },
};

const TypeIcon = ({ type }: { type: Resource['type'] }) => {
  if (type === 'Video') return <Play size={13} />;
  if (type === 'Notes') return <FileText size={13} />;
  return <HelpCircle size={13} />;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [search, setSearch] = useState('');

  useSEO({
    title: 'Study Library | Free Resources · Blast Learning',
    description: 'Free study resources for CBSE Classes 8-12 and SAT prep. Videos, notes, and practice quizzes to boost retention and exam performance.',
  });

  const filtered = resources.filter((r) => {
    const matchFilter = activeFilter === 'All' || r.subject === activeFilter;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero + Filters */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', borderBottom: '1px solid #DAEEF6', paddingTop: '120px', paddingBottom: '80px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <HeadingMarker text="Resource Library" marginBottom="20px" fontSize="12px" />
            <h1 className="page-hero-title" style={{ marginBottom: '20px' }}>
              Learning Resources
            </h1>
            <p className="page-hero-copy" style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
              Videos, notes, and practice quizzes for CBSE Classes 8-12, SAT Prep, and competitive exams. Many are free to start, and a subscription unlocks the full library.
            </p>
            <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
              <Search size={17} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6B6B7B' }} />
              <input
                type="text"
                placeholder="Search resources, topics, subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', paddingLeft: '48px', paddingRight: '16px', paddingTop: '14px', paddingBottom: '14px', borderRadius: '10px', border: '1px solid #ECECF1', background: '#FFFFFF', fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#0FA8DC'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#ECECF1'; }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  border: activeFilter === tab ? 'none' : '1px solid #ECECF1',
                  background: activeFilter === tab ? '#0FA8DC' : 'white',
                  color: activeFilter === tab ? 'white' : '#5A5A6E',
                  transition: 'all 0.2s',
                }}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section style={{ paddingTop: '64px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '80px 0' }}
            >
              <p style={{ fontSize: '15px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>No resources found for your search.</p>
            </motion.div>
          ) : (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}
              className="grid-cols-2-sm grid-cols-3-lg"
            >
              {filtered.map((resource) => (
                <motion.div
                  className="card-subtle"
                  key={resource.id}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.06)',
                    transition: { type: 'spring', stiffness: 300, damping: 22 },
                  }}
                  style={{ position: 'relative', padding: '24px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)', opacity: resource.locked ? 0.65 : 1, display: 'flex', flexDirection: 'column' }}
                >
                  {resource.locked && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                      <Lock size={13} style={{ color: '#6B6B7B' }} />
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: typeStyles[resource.type].bg, color: typeStyles[resource.type].text }}>
                      <TypeIcon type={resource.type} />
                      {resource.type}
                    </span>
                    <span style={{ padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 500, background: '#D6F2FA', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', border: '1px solid #ECECF1' }}>
                      {resource.subject}
                    </span>
                    {resource.duration && (
                      <span style={{ fontSize: '11px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>{resource.duration}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '10px' }}>{resource.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '20px', flex: 1 }}>{resource.description}</p>
                  {resource.locked ? (
                    <Link
                      to="/programs"
                      className="cta cta-outline"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: 'white', border: '1.5px solid #DCDCE5', color: '#1C1C28' }}
                    >
                      <Lock size={13} /> Unlock With Subscription
                    </Link>
                  ) : (
                    <button
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', background: '#E0F5FC', border: 'none', color: '#0FA8DC' }}
                    >
                      <TypeIcon type={resource.type} /> Access {resource.type}
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <SharedTestimonialsSection row1={testimonialsRow1} row2={testimonialsRow2} subtitle="Hear from students who used our library to boost their scores." />

      {/* ── FAQ ── */}
      <SharedFaqSection items={pageFaqs} />

    </div>
  );
}
