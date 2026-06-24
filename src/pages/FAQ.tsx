import { useSEO } from '../hooks/useSEO';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Search, X } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import ctaBanner from '../assets/Hero 4.png';
import BrandArc from '../components/BrandArc';
import BrandWhoosh from '../components/BrandWhoosh';
import HeadingMarker from '../components/HeadingMarker';
import { useState, useEffect, useMemo } from 'react';
import { SharedImageCtaSection, SharedTestimonialsSection } from '../components/MarketingSections';

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

type Category = 'General' | 'Programs' | 'Parents' | 'Students';
type FilterCategory = 'All' | Category;

interface FAQEntry {
  question: string;
  answer: string;
  category: Category;
}

const faqs: FAQEntry[] = [
  {
    category: 'General',
    question: 'What is the best online CBSE course for Class 10 students?',
    answer: "Blast Learning's CBSE Plan at ₹1,299/month is specifically designed for Class 10 students. It covers the complete NCERT syllabus, provides AI-powered revision scheduling, and helps students retain 90% of what they learn, critical for board exam performance.",
  },
  {
    category: 'General',
    question: 'Can my child prepare for CBSE boards without coaching?',
    answer: 'Yes, and many Blast Learning students do exactly that. Our AI creates a complete study plan based on the CBSE syllabus, identifies gaps, and ensures systematic coverage of every topic. For students already attending coaching, Blast Learning amplifies their coaching by making it stick.',
  },
  {
    category: 'General',
    question: 'Are online CBSE classes effective for weak students?',
    answer: 'Absolutely. Blast Learning is particularly effective for students who struggle with retention. Our adaptive system identifies exactly where a student is weak and focuses revision there. The AI adjusts difficulty based on performance, so students are never overwhelmed and always making measurable progress.',
  },
  {
    category: 'General',
    question: 'How can my child improve CBSE Math marks quickly?',
    answer: 'The Math Genius Maker Pass begins with a comprehensive gap assessment to find exactly which concepts are holding your child back. Then it builds a personalized practice plan targeting those gaps. Most students see measurable improvement in their math scores within 4-6 weeks.',
  },
  {
    category: 'General',
    question: 'Is Blast Learning affordable compared to traditional CBSE coaching?',
    answer: "Traditional coaching in metro cities costs ₹5,000-₹20,000 per month per subject. Blast Learning starts at ₹999/month for complete AI-powered learning with parent dashboard, retention tracking, and human support. It's designed to complement coaching, not replace it, making your existing coaching spend more effective.",
  },
  {
    category: 'General',
    question: 'How to finish CBSE syllabus quickly before board exams?',
    answer: 'Our AI creates an optimized study schedule based on your exam dates and the time available. It prioritizes high-weightage topics, uses spaced repetition for efficient revision, and helps you cover the entire syllabus systematically without last-minute panic.',
  },
  {
    category: 'General',
    question: 'Can online coaching actually replace traditional tuition?',
    answer: 'Blast Learning is most powerful when used alongside coaching. It makes coaching content stick through structured revision. However, many students use it as their primary learning tool and achieve excellent results. The AI provides personalized instruction that often exceeds what a single tutor can offer.',
  },
  {
    category: 'General',
    question: 'How can my child stay consistent and improve concentration while studying?',
    answer: 'Our Focus Trainer module teaches proven focus techniques and creates structured study sessions with timed intervals. The daily study streak feature gamifies consistency, and the progress dashboard gives students motivation by making improvement visible.',
  },
  {
    category: 'Programs',
    question: 'What subjects are covered in the CBSE Plan?',
    answer: 'The CBSE Full Syllabus plan covers all seven core subjects across Classes 6-12: History, Political Science, Geography, Economics, Physics, Chemistry, and Biology. Each subject has retention-first pacing, AI-powered revision, and practice quizzes.',
  },
  {
    category: 'Programs',
    question: 'Can I switch between programs?',
    answer: "Yes, you can upgrade, downgrade, or switch programs at any time. If your needs change (for example, your child moves from Class 10 to 11 and needs SAT prep), we'll help you transition smoothly with no data loss.",
  },
  {
    category: 'Programs',
    question: 'Is the SAT Prep Pass suitable for Class 10 students?',
    answer: 'Yes. Many families start SAT preparation in Class 10 to get a head start. Our SAT Prep Pass begins with foundation-level content suitable for Class 10, progressively building to advanced SAT-level material over Class 11 and 12.',
  },
  {
    category: 'Programs',
    question: 'Do programs include live classes or just self-paced content?',
    answer: 'Programs are primarily self-paced with AI guidance, which allows students to study at their own pace. Live doubt sessions and weekly check-ins with our Tutor Mom team are included. We also run live group study sessions and review sessions before major exams.',
  },
  {
    category: 'Parents',
    question: "How often will I receive updates about my child's progress?",
    answer: "You'll receive a daily digest summarizing what your child studied and their retention scores. Weekly detailed reports include subject-wise performance trends. You can also check the parent dashboard anytime for real-time information.",
  },
  {
    category: 'Parents',
    question: 'Can I contact a tutor if my child has specific doubts?',
    answer: "Yes. Our Tutor Mom team includes qualified subject-matter experts available Monday to Saturday, 9 AM to 9 PM. You can message them through the parent portal, and they'll respond within 2 hours during business hours.",
  },
  {
    category: 'Parents',
    question: 'What happens if my child misses study sessions?',
    answer: "You'll receive an alert when your child misses a scheduled session. The AI automatically adjusts the study plan to catch up without overwhelming the student. Our Tutor Mom team can also reach out directly to check in with your child.",
  },
  {
    category: 'Parents',
    question: 'Is there a family discount for multiple children?',
    answer: 'Yes, families enrolling two or more children receive a 20% discount on the second subscription and beyond. Contact us to set up a family account.',
  },
  {
    category: 'Students',
    question: 'How much time do I need to spend on Blast Learning daily?',
    answer: 'Most students spend 45 minutes to 1.5 hours per day depending on their syllabus load. The AI optimizes your time so that every minute is spent on the highest-priority material. Students report that 45 focused minutes on Blast Learning is more effective than 3 hours of traditional studying.',
  },
  {
    category: 'Students',
    question: 'Can I use Blast Learning on my phone?',
    answer: 'Yes. Blast Learning is fully responsive and works on any smartphone, tablet, or computer. Our mobile app is currently in development (launching soon). Until then, the web app runs smoothly in any mobile browser.',
  },
  {
    category: 'Students',
    question: "What if I don't understand a concept explained by the AI?",
    answer: "Our AI Study Buddy can explain any concept in multiple ways, with different examples, simpler language, or in your regional language. If you're still stuck, you can post in the community forums where peer students or our tutors will answer within a few hours.",
  },
  {
    category: 'Students',
    question: "Will Blast Learning help me if I'm already a good student?",
    answer: 'Absolutely. High-performing students benefit from retention optimization too. Maintaining top scores in boards takes systematic revision, not just raw ability. Blast Learning helps top students consolidate their advantage and free up time by making their study sessions more efficient.',
  },
];

const CATEGORY_FILTERS: FilterCategory[] = ['All', 'General', 'Programs', 'Parents', 'Students'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const CATEGORY_COLOR: Record<Category, string> = {
  General:  '#0FA8DC',
  Programs: '#8B5CF6',
  Parents:  '#F03C6F',
  Students: '#22C55E',
};

export default function FAQ() {
  useSEO({
    title: 'FAQ | Frequently Asked Questions · Blast Learning',
    description: 'Answers to the most common questions about Blast Learning programs, pricing, how the AI works, and what results to expect.',
  });

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  // ── JSON-LD FAQPage schema for Google rich results ───────────────────────
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, []);

  // ── Filtered results ─────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchCategory = activeCategory === 'All' || f.category === activeCategory;
      const matchQuery = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, activeCategory]);

  const isFiltering = query.trim() !== '' || activeCategory !== 'All';

  // ── Grouped view (default, no filters) ──────────────────────────────────
  const grouped = useMemo(() => {
    const cats: Category[] = activeCategory === 'All'
      ? ['General', 'Programs', 'Parents', 'Students']
      : [activeCategory as Category];
    return cats.map((cat) => ({
      category: cat,
      items: filtered.filter((f) => f.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [filtered, activeCategory]);

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', paddingTop: '80px', paddingBottom: '60px', borderBottom: '1px solid #DAEEF6' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', textAlign: 'left', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <HeadingMarker text="FAQ" marginBottom="16px" fontSize="12px" />
            <h1 style={{ fontSize: 'var(--fs-h1-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', color: '#111111' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '32px' }}>
              Everything you need to know about Blast Learning. Can't find your answer? Contact our team.
            </p>

            {/* ── Search input ── */}
            <div style={{ position: 'relative', maxWidth: '520px', margin: 0 }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8E8EA0', pointerEvents: 'none' }} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search FAQ"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 40px',
                  borderRadius: '12px',
                  border: '1.5px solid #DCDCE5',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#1C1C28',
                  background: '#FFFFFF',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(28,28,40,0.06)',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#0FA8DC'; }}
                onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = '#DCDCE5'; }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8E8EA0', display: 'flex', padding: '4px' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ paddingTop: '48px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>

          {/* ── Category pills ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {CATEGORY_FILTERS.map((cat) => {
              const active = activeCategory === cat;
              const color = cat === 'All' ? '#0FA8DC' : CATEGORY_COLOR[cat as Category];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '7px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    border: `1.5px solid ${active ? color : '#DCDCE5'}`,
                    background: active ? color : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#5A5A6E',
                    transition: 'all 0.18s',
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span style={{ marginLeft: '6px', fontSize: '11px', opacity: 0.75 }}>
                      ({faqs.filter((f) => f.category === cat && (!query.trim() || f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase()))).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Result count when filtering ── */}
          <AnimatePresence>
            {isFiltering && (
              <motion.p
                key="count"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}
              >
                {filtered.length === 0
                  ? 'No results found'
                  : `${filtered.length} question${filtered.length !== 1 ? 's' : ''}${query.trim() ? ` for "${query.trim()}"` : ''}`}
              </motion.p>
            )}
          </AnimatePresence>

          {/* ── Empty state ── */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '60px 24px' }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Poppins, sans-serif', marginBottom: '8px' }}>No matches found</p>
              <p style={{ fontSize: '14px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>Try a different keyword or browse by category above.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('All'); }}
                style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: '#0FA8DC', color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}
              >
                Clear filters
              </button>
            </motion.div>
          )}

          {/* ── FAQ list (grouped by category) ── */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 && (
              <motion.div
                key={`${query}-${activeCategory}`}
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {grouped.map((group, gi) => (
                  <motion.div
                    key={group.category}
                    variants={fadeUp}
                    style={{ marginBottom: gi < grouped.length - 1 ? '52px' : 0 }}
                  >
                    {/* Only show category header when showing multiple groups */}
                    {(grouped.length > 1 || !query) && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{
                          width: '30px', height: '30px', borderRadius: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '12px', fontWeight: 700, color: 'white',
                          background: CATEGORY_COLOR[group.category],
                          fontFamily: 'Poppins, sans-serif', flexShrink: 0,
                        }}>
                          {group.category.charAt(0)}
                        </span>
                        <h2 style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>
                          {group.category}
                        </h2>
                      </div>
                    )}

                    <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #ECECF1', padding: '4px 20px', boxShadow: '0 1px 4px rgba(28,28,40,0.04)' }}>
                      {group.items.map((faq) => (
                        <FAQItem
                          key={faq.question}
                          question={faq.question}
                          answer={faq.answer}
                          highlight={query.trim()}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <SharedTestimonialsSection row1={testimonialsRow1} row2={testimonialsRow2} />

      {/* ── CTA Banner ── */}
      <SharedImageCtaSection src={ctaBanner} alt="Learn Smarter. Achieve More. Start your Blast Learning journey today." />
    </div>
  );
}
