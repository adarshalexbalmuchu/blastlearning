import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, Brain, Target, BookOpen, Users, Globe, BarChart3,
  ChevronDown, CheckCircle, AlertCircle, TrendingUp, Zap, Star
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import DashboardMockup from '../components/DashboardMockup';
import { useState } from 'react';

const stats = [
  { value: '4,999+', label: 'Students Enrolled' },
  { value: '4.0/5', label: 'Parent Satisfaction' },
  { value: '91%', label: 'Academic Improvement' },
  { value: '49+', label: 'Cities Across India' },
];

const howItWorks = [
  {
    num: '01',
    title: 'Record or Upload Content',
    desc: 'Upload your class notes, recordings, or textbook chapters. Our AI processes and structures everything for optimal learning.',
    icon: BookOpen,
  },
  {
    num: '02',
    title: 'AI Creates Your Study Plan',
    desc: 'Our Metacognition Engine analyzes your learning patterns and creates a personalized study schedule using spaced repetition science.',
    icon: Brain,
  },
  {
    num: '03',
    title: 'Learn, Practice, Master',
    desc: 'Follow your adaptive plan, practice with smart quizzes, and track your retention scores. Master every concept before your exams.',
    icon: Target,
  },
];

const features = [
  {
    icon: Brain,
    title: 'Metacognition Engine',
    desc: 'Our proprietary AI maps how your child actually learns and adapts the study plan in real-time for maximum retention.',
  },
  {
    icon: Target,
    title: 'Focus Trainer',
    desc: 'Guided study sessions with focus techniques that reduce distraction and build lasting concentration habits.',
  },
  {
    icon: BookOpen,
    title: 'Class Recording Integration',
    desc: 'Connect any coaching or school recording. Our AI converts lectures into interactive revision material instantly.',
  },
  {
    icon: BarChart3,
    title: 'Parent Dashboard',
    desc: 'Real-time visibility into your child\'s study habits, retention scores, and academic progress — all in one place.',
  },
  {
    icon: Users,
    title: 'Tutor Mom Support',
    desc: 'Dedicated human mentors who check in weekly, answer doubts, and keep students accountable and motivated.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    desc: 'Learn in your comfort language — English, Hindi, Kannada, Tamil, Telugu, and more regional languages supported.',
  },
];

const parentConcerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention' },
  { concern: 'Coaching fees keep increasing but results don\'t improve', solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons' },
  { concern: 'I can\'t tell if my child is actually studying', solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage daily' },
  { concern: 'My child is stressed and losing confidence', solution: 'Personalized pace and progress celebrations build confidence as students see real improvement' },
  { concern: 'Different coaching teachers explain things differently', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions' },
];

const homeFaqs = [
  {
    q: 'What is Blast Learning and how does it work?',
    a: 'Blast Learning is an AI-powered learning retention platform. Students upload their coaching notes or recordings, and our Metacognition Engine creates a spaced repetition study plan that helps them retain 90% of what they learn — compared to the 10% most students retain without structured revision.',
  },
  {
    q: 'Is Blast Learning suitable for CBSE students preparing for board exams?',
    a: 'Absolutely. Our CBSE Plan is specifically designed for Classes 8-10, with full syllabus coverage, NCERT alignment, and board exam preparation tracks. Students see significant improvement in retention and exam performance within the first month.',
  },
  {
    q: 'How is Blast Learning different from other coaching apps?',
    a: 'Most apps focus on delivering content. Blast Learning focuses on retention. Our Metacognition Engine doesn\'t just teach — it tracks how well your child remembers and adapts the study plan to fill gaps before they become problems in exams.',
  },
  {
    q: 'Can I try Blast Learning before paying?',
    a: 'Yes! We offer a 7-day free trial with full access to all features. No credit card required. You\'ll see real retention data for your child within the first week.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        {/* Decorative SVG lines */}
        <svg
          className="absolute top-0 right-0 opacity-[0.04] pointer-events-none"
          width="600" height="600" viewBox="0 0 600 600" fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="#1AAFCB" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="200" stroke="#1AAFCB" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" stroke="#1AAFCB" strokeWidth="0.5" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="#1AAFCB" strokeWidth="0.5" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="#1AAFCB" strokeWidth="0.5" />
          <line x1="102" y1="102" x2="498" y2="498" stroke="#1AAFCB" strokeWidth="0.5" />
          <line x1="498" y1="102" x2="102" y2="498" stroke="#1AAFCB" strokeWidth="0.5" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                <Zap size={14} />
                AI-Powered Retention System
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A', letterSpacing: '-0.02em' }}>
                Your Child Retains Only{' '}
                <span className="text-[#E8357A]">10%</span>{' '}
                of Coaching
                <br />
                <span style={{ color: '#1AAFCB' }}>We Make It 90%</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                Stop wasting money on coaching your child forgets. Our Metacognition Engine uses scientifically-proven spaced repetition to convert expensive tuition into lasting retention.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/programs"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors duration-200 hover:bg-[#148fa5]"
                  style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
                >
                  Start 7-Day Trial <ArrowRight size={16} />
                </Link>
                <button
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border-2 transition-colors duration-200 hover:border-[#1AAFCB] hover:text-[#1AAFCB]"
                  style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}
                >
                  <Play size={16} /> See How It Works
                </button>
              </div>
              {/* Trust signals */}
              <div className="flex flex-wrap gap-4">
                {['No credit card required', 'Free 7-day trial', 'Cancel anytime'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                    <CheckCircle size={14} style={{ color: '#1AAFCB' }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#F4F7FB] to-white p-8" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.12)' }}>
                {/* Mock card visual */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Today's Learning Session</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>Arjun's Progress</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: '#E8357A', fontFamily: 'Inter, sans-serif' }}>
                    Today's Progress: 87%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Retention Score', val: '87%', color: '#1AAFCB' },
                    { label: 'Topics Covered', val: '12/15', color: '#0D1B2A' },
                    { label: 'Study Streak', val: '14 days', color: '#E8357A' },
                    { label: 'Quiz Score', val: '92%', color: '#1AAFCB' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl p-4" style={{ background: '#F4F7FB' }}>
                      <p className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: item.color }}>{item.val}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-4" style={{ background: '#0D1B2A' }}>
                  <p className="text-xs font-medium mb-3 text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>Today's Revision Queue</p>
                  {['Chapter 4 — Quadratic Equations', 'Photosynthesis Process', 'English Grammar — Tenses'].map((topic, i) => (
                    <div key={topic} className="flex items-center gap-3 mb-2 last:mb-0">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: i === 0 ? '#1AAFCB' : 'rgba(255,255,255,0.1)' }}>
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-xs text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl text-white text-sm font-bold" style={{ background: '#1AAFCB', boxShadow: '0 4px 20px rgba(26,175,203,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                90% Retention Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-16" style={{ background: '#F4F7FB' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <p className="text-center text-sm font-medium mb-10" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Trusted by thousands of families across India
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Featured testimonial */}
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              name="Priya Nair"
              role="Parent of Class 10 student, Chennai"
              content="Blast Learning transformed how my daughter studies. Her board exam preparation used to be chaotic, but now she has a clear plan and her retention scores are remarkable. I can see her progress every day on the parent dashboard."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Simple Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              How Blast Learning Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {howItWorks.map(({ num, title, desc, icon: Icon }) => (
              <div key={num} className="bg-white rounded-xl p-8 relative" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(26,175,203,0.15)' }}>{num}</span>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ background: '#1AAFCB' }}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors duration-200 hover:bg-[#148fa5]"
              style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
            >
              Start Your 7-Day Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20" style={{ background: '#F4F7FB' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Our Programs
            </h2>
            <Link to="/programs" className="text-sm font-semibold flex items-center gap-1 transition-colors hover:text-[#148fa5]" style={{ color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              View All Programs <ChevronDown size={14} className="-rotate-90" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'CBSE Plan', price: '₹1,299', classes: 'Classes 8-10', desc: 'Full CBSE syllabus coverage with AI study buddy and board exam preparation.', outcomes: ['Board Mastery', 'NCERT Clarity', 'Retention'], icon: BookOpen },
              { name: 'Math Genius Maker', price: '₹999', classes: 'Classes 8-12', desc: 'Gap assessment and personalized math lessons from foundation to advanced.', outcomes: ['Gap Filling', 'Speed & Accuracy', 'Mastery'], icon: Target },
              { name: 'English Mastery', price: '₹999', classes: 'All Classes', desc: 'Grammar, writing, reading, and comprehension skills built systematically.', outcomes: ['Grammar', 'Writing', 'Reading'], icon: Brain },
              { name: 'SAT Prep Pass', price: '₹999', classes: 'Classes 10-12', desc: 'Foundation-level SAT preparation with adaptive tests and complete score optimization.', outcomes: ['High Scores', 'Test Strategy', 'College Ready'], icon: TrendingUp },
            ].map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.name} className="bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(13,27,42,0.14)]" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: '#1AAFCB' }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{prog.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{prog.price}<span className="text-xs font-normal text-[#5A6A7A]">/mo</span></span>
                    <span className="px-2 py-0.5 text-xs rounded-md" style={{ background: '#F4F7FB', color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.classes}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{prog.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.outcomes.map((o) => (
                      <span key={o} className="px-2 py-0.5 text-xs rounded-md" style={{ background: 'rgba(26,175,203,0.08)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>{o}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              What Makes Us Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: '#1AAFCB' }}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            See Results Within{' '}
            <span style={{ color: '#1AAFCB' }}>One Month</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Our students consistently report higher retention scores, improved exam performance, and greater confidence within their first 30 days on Blast Learning.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
            {[
              { val: '3x', label: 'More retention than traditional study' },
              { val: '91%', label: 'Students improve their grades' },
              { val: '30 days', label: 'Average time to see results' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>{s.val}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors duration-200 hover:bg-[#148fa5]"
            style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
          >
            Start Your Free Trial Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Parents Pain/Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            From Parent Worries to Real Results
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#E8357A' }}>
                <AlertCircle size={18} /> Common Parent Concerns
              </h3>
              <div className="flex flex-col gap-3">
                {parentConcerns.map(({ concern }) => (
                  <div key={concern} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #E8357A', background: 'rgba(232,53,122,0.04)' }}>
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#E8357A' }} />
                    <p className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{concern}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>
                <CheckCircle size={18} /> Blast Learning Solutions
              </h3>
              <div className="flex flex-col gap-3">
                {parentConcerns.map(({ solution }) => (
                  <div key={solution} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #1AAFCB', background: 'rgba(26,175,203,0.04)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#1AAFCB' }} />
                    <p className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Dashboard Showcase */}
      <section className="py-20" style={{ background: '#F4F7FB' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                For Parents
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
                Parent Dashboard — Stay Informed Every Day
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                Know exactly what your child is studying, how long they study, and how well they retain it. Our parent dashboard gives you real-time visibility without hovering over their shoulder.
              </p>
              <div className="flex flex-col gap-4">
                {['Real-time retention score tracking', 'Subject-wise performance breakdown', 'Weekly progress reports via WhatsApp', 'Alerts when your child misses study sessions'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#1AAFCB' }} />
                    <span className="text-sm" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/for-parents" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white text-sm font-semibold transition-colors hover:bg-[#148fa5]" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                Learn More for Parents <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Real Results from Real Students
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <TestimonialCard name="Ananya Krishnan" role="Class 10 student, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            <TestimonialCard name="Rahul Mehta" role="Class 12 student, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            <TestimonialCard name="Kavitha Suresh" role="Class 9 student, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20" style={{ background: '#F4F7FB' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ color: '#1AAFCB', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '300px' : '0px' }}>
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: '#F4F7FB' }} />
                    <p className="text-sm leading-relaxed" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#148fa5]" style={{ color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              View All FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Help Your Child{' '}
            <span style={{ color: '#1AAFCB' }}>Learn Independently</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Join thousands of families who have transformed their child's academic performance with science-backed retention technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/programs"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5]"
              style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
            >
              Start 7-Day Trial <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-white/30 text-white hover:border-white/60 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Speak to a Learning Advisor
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['No credit card required', 'Free 7-day trial', 'Cancel anytime'].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                <Star size={12} fill="currentColor" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
