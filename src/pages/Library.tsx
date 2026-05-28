import { useState } from 'react';
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
  { id: 1, title: 'Quadratic Equations — Complete Chapter', subject: 'Maths', type: 'Video', description: 'Master quadratic equations with step-by-step video explanations covering all CBSE Class 10 patterns.', locked: false, duration: '42 min' },
  { id: 2, title: 'Photosynthesis & Respiration Notes', subject: 'Science', type: 'Notes', description: 'Comprehensive chapter notes with diagrams and memory cues for Class 9 and 10 Biology.', locked: false },
  { id: 3, title: 'English Grammar — Complete Tenses Guide', subject: 'English', type: 'Notes', description: 'All 12 tenses explained with examples, rules, and common mistakes to avoid.', locked: true },
  { id: 4, title: 'Trigonometry Practice Quiz — 50 Questions', subject: 'Maths', type: 'Quiz', description: 'Timed practice quiz covering all trigonometry ratios, identities, and applications for Classes 10-11.', locked: true },
  { id: 5, title: 'SAT Math — Algebra & Functions', subject: 'SAT', type: 'Video', description: 'Foundation SAT Math video covering algebra, linear functions, and problem-solving strategies.', locked: true, duration: '58 min' },
  { id: 6, title: 'CBSE Science Chapter 1-5 Revision', subject: 'CBSE', type: 'Notes', description: 'Condensed revision notes for the first five chapters of Class 10 Science with exam tips.', locked: false },
  { id: 7, title: 'Chemical Reactions & Equations Quiz', subject: 'Science', type: 'Quiz', description: 'Practice quiz covering all types of chemical reactions from NCERT Class 10 Chemistry.', locked: true },
  { id: 8, title: 'Reading Comprehension Strategies', subject: 'English', type: 'Video', description: 'Proven techniques for tackling unseen passages in CBSE and SAT exams with speed and accuracy.', locked: false, duration: '28 min' },
  { id: 9, title: 'CBSE Maths Board Paper — 2023 Analysis', subject: 'CBSE', type: 'Notes', description: 'Detailed analysis of the 2023 board exam with pattern breakdown and high-weightage topics.', locked: true },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  Video: { bg: 'rgba(232,53,122,0.08)', text: '#E8357A' },
  Notes: { bg: 'rgba(26,175,203,0.08)', text: '#1AAFCB' },
  Quiz: { bg: 'rgba(13,27,42,0.06)', text: '#0D1B2A' },
};

const TypeIcon = ({ type }: { type: Resource['type'] }) => {
  if (type === 'Video') return <Play size={14} />;
  if (type === 'Notes') return <FileText size={14} />;
  return <HelpCircle size={14} />;
};

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [search, setSearch] = useState('');

  const filtered = resources.filter((r) => {
    const matchFilter = activeFilter === 'All' || r.subject === activeFilter;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Resource Library
            </span>
            <h1 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Learning Resources
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
              Videos, notes, and practice quizzes for CBSE Classes 8-12, SAT Prep, and competitive exams. Some resources are free — subscribe for full access.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#5A6A7A' }} />
              <input
                type="text"
                placeholder="Search resources, topics, subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#1AAFCB]"
                style={{ fontFamily: 'Inter, sans-serif', color: '#0D1B2A' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: activeFilter === tab ? '#1AAFCB' : 'white',
                  color: activeFilter === tab ? 'white' : '#5A6A7A',
                  boxShadow: '0 2px 8px rgba(13,27,42,0.06)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '64px', paddingBottom: '64px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-base" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>No resources found for your search.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-sm grid-cols-3-lg">
              {filtered.map((resource) => (
                <div
                  key={resource.id}
                  className={`bg-white rounded-xl p-6 relative ${resource.locked ? 'opacity-75' : ''}`}
                  style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}
                >
                  {resource.locked && (
                    <div className="absolute top-4 right-4">
                      <Lock size={14} style={{ color: '#5A6A7A' }} />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: typeColors[resource.type].bg, color: typeColors[resource.type].text, fontFamily: 'Inter, sans-serif' }}
                    >
                      <TypeIcon type={resource.type} />
                      {resource.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium" style={{ background: '#F4F7FB', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                      {resource.subject}
                    </span>
                    {resource.duration && (
                      <span className="text-xs" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{resource.duration}</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{resource.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{resource.description}</p>
                  {resource.locked ? (
                    <Link
                      to="/programs"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold border-2 transition-colors hover:border-[#1AAFCB] hover:text-[#1AAFCB]"
                      style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}
                    >
                      <Lock size={14} /> Unlock with Subscription
                    </Link>
                  ) : (
                    <button
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-colors hover:bg-[#148fa5]"
                      style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
                    >
                      <TypeIcon type={resource.type} /> Access {resource.type}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ paddingTop: '64px', paddingBottom: '64px', background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Unlock 500+ Resources with a Subscription
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Get full access to all videos, notes, and quizzes — plus your personalized AI study plan and parent dashboard — starting from ₹999/month.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5]"
            style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
          >
            View Plans & Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
