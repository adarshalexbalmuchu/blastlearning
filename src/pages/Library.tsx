import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import BrandArc from '../components/BrandArc';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Play, FileText, HelpCircle, Lock, ArrowRight } from 'lucide-react';

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
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #B8E4F5 0%, #D6F2FA 45%, #FFFFFF 100%)', borderBottom: '1px solid #DAEEF6', paddingTop: '120px', paddingBottom: '80px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-160px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,168,220,0.07) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 18s ease-in-out infinite reverse' }} />
        </div>
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
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px', background: '#E0F5FC', color: '#0FA8DC' }}>
              Resource Library
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.03em', marginBottom: '20px', color: '#1C1C28' }}>
              Learning Resources
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '560px', margin: '0 auto 32px' }}>
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
      <section style={{ paddingTop: '64px', paddingBottom: '96px', background: '#D6F2FA' }}>
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
                  key={resource.id}
                  variants={fadeUp}
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
                      <Lock size={13} /> Unlock with Subscription
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

      {/* CTA */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', color: '#1C1C28' }}>
            Unlock 500+ Resources with a Subscription
          </h2>
          <p style={{ color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Get full access to all videos, notes, and quizzes, plus your personalized AI study plan and parent dashboard, starting from ₹999/month.
          </p>
          <Link
            to="/programs"
            className="cta cta-blue"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: '#0FA8DC', color: 'white' }}
          >
            View Plans &amp; Pricing <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
