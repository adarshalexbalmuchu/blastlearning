import { Link } from 'react-router-dom';
import {
  ArrowRight, Brain, Target, CheckCircle, Zap, BookOpen, Users, MessageSquare, Shield,
  Calendar, BarChart3, Award, TrendingUp, Repeat
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const benefits = [
  { icon: Brain, title: 'Smart Revision', desc: 'AI knows exactly when you need to revise each topic so you never forget anything before an exam.' },
  { icon: Target, title: 'Clear Goals', desc: 'Daily targets break overwhelming syllabi into manageable steps you can actually complete.' },
  { icon: Zap, title: 'Less Stress', desc: 'No more last-minute panic. Consistent, structured study removes exam anxiety permanently.' },
  { icon: BarChart3, title: 'Track Progress', desc: 'See your retention scores improve week by week. Progress you can actually see is seriously motivating.' },
];

const aiTools = [
  {
    icon: Calendar,
    title: 'AI Study Planner',
    desc: 'Your personal AI creates a daily study schedule based on your syllabus, weak areas, and upcoming exams. It adjusts automatically as your performance changes.',
  },
  {
    icon: Repeat,
    title: 'Smart Revision',
    desc: 'Spaced repetition technology schedules your reviews at scientifically optimal intervals — the exact moment before you would have forgotten.',
  },
  {
    icon: MessageSquare,
    title: 'Study Buddy',
    desc: 'An AI companion that answers your doubts 24/7, explains concepts in multiple ways, and supports learning in your native language.',
  },
  {
    icon: Brain,
    title: 'Practice Engine',
    desc: 'Adaptive quizzes that get harder when you\'re doing well and easier when you\'re struggling — keeping you in the perfect learning zone.',
  },
  {
    icon: TrendingUp,
    title: 'Neural Weaving',
    desc: 'Our proprietary technique that connects new concepts to things you already know, making learning faster and memories more durable.',
  },
  {
    icon: BookOpen,
    title: 'Class Notes Converter',
    desc: 'Upload any class note, screenshot, or coaching material and our AI converts it into a structured study guide with key points and practice questions.',
  },
];

const collaborativeFeatures = [
  { icon: Users, title: 'Group Study Sessions', desc: 'Join scheduled group study rooms with students from your class and city. Stay focused together with shared timers and goals.' },
  { icon: MessageSquare, title: 'Peer Discussion Forums', desc: 'Ask questions, share answers, and discuss tricky topics with thousands of students facing the same syllabus.' },
  { icon: BarChart3, title: 'Shared Progress Tracking', desc: 'See how your friends are progressing and motivate each other to hit daily and weekly study goals.' },
  { icon: Shield, title: 'Safe & Moderated', desc: 'All communities are moderated by our team to ensure a respectful, distraction-free learning environment.' },
];

const communityStats = [
  { value: '5,000+', label: 'Study Buddies' },
  { value: '200+', label: 'Study Groups Daily' },
  { value: '50,000+', label: 'Questions Answered' },
];

const todayTasks = [
  { subject: 'Maths', topic: 'Quadratic Equations — Revision', time: '25 min', status: 'done' },
  { subject: 'Science', topic: 'Photosynthesis — New Lesson', time: '30 min', status: 'active' },
  { subject: 'English', topic: 'Tenses — Practice Quiz', time: '15 min', status: 'pending' },
  { subject: 'Maths', topic: 'Trigonometry — Quiz', time: '20 min', status: 'pending' },
];

export default function ForStudents() {
  return (
    <div className="pt-16 lg:pt-18">
      {/* Hero */}
      <section className="py-16 lg:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
                For Students
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A', letterSpacing: '-0.02em' }}>
                Learning That{' '}
                <span className="text-[#1AAFCB]">Adapts to You</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-lg text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                Stop studying harder. Start studying smarter. Blast Learning's AI builds a personalized study plan that fits your pace, your style, and your exam schedule.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/programs"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5] bg-[#1AAFCB]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Start Free Trial <ArrowRight size={16} />
                </Link>
                <Link
                  to="/library"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border-2 transition-colors hover:border-[#1AAFCB] hover:text-[#1AAFCB]"
                  style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}
                >
                  Explore Library
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Free 7-day trial', 'No credit card needed', 'Works alongside coaching'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                    <CheckCircle size={14}  /> {t} className="text-[#1AAFCB]"
                  </div>
                ))}
              </div>
            </div>
            {/* Student Dashboard Mockup */}
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.12)' }}>
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >Today's Learning</p>
                  <p className="text-base font-bold text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >Arjun's Study Plan</p>
                </div>
                <div className="text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-[#E8357A]" style={{ fontFamily: 'Inter, sans-serif' }} >🔥 14-Day Streak</div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Topics Today', val: '4' },
                    { label: 'Study Time', val: '1h 30m' },
                    { label: 'Score', val: '87%' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center bg-[#F4F7FB]" >
                      <p className="text-lg font-bold mb-0.5 text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{s.val}</p>
                      <p className="text-xs text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-[#0D1B2A]" style={{ fontFamily: 'Inter, sans-serif' }} >Today's Tasks</p>
                <div className="flex flex-col gap-2">
                  {todayTasks.map((task) => (
                    <div key={task.topic} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: task.status === 'active' ? 'rgba(26,175,203,0.06)' : '#F4F7FB' }}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`} style={{ background: task.status === 'done' ? '#1AAFCB' : task.status === 'active' ? 'rgba(26,175,203,0.2)' : 'rgba(0,0,0,0.08)' }}>
                        {task.status === 'done' && <CheckCircle size={12} className="text-white" />}
                        {task.status === 'active' && <div className="w-2 h-2 rounded-full bg-[#1AAFCB]"  />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate text-[#0D1B2A]" style={{ fontFamily: 'Inter, sans-serif' }} >{task.topic}</p>
                        <p className="text-xs text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{task.subject} · {task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Achievements */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-[#0D1B2A]" style={{ fontFamily: 'Inter, sans-serif' }} >Recent Achievements</p>
                  <div className="flex gap-2">
                    {[{ icon: Award, label: '7-Day Streak', color: '#E8357A' }, { icon: Zap, label: 'Speed Learner', color: '#1AAFCB' }, { icon: Target, label: 'Math Master', color: '#0D1B2A' }].map(({ icon: Icon, label, color }) => (
                      <div key={label} className="flex-1 flex flex-col items-center gap-1 py-2 rounded-lg bg-[#F4F7FB]" >
                        <Icon size={14} style={{ color }} />
                        <p className="text-xs text-center leading-tight text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 bg-[#1AAFCB]" >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
              AI-Powered Study Tools Built for You
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 bg-[#1AAFCB]" >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Learning */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold mb-4 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
              Learn Better, Together
            </h2>
            <p className="text-base max-w-2xl mx-auto text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
              Join a community of thousands of Indian students who are all working toward the same goal. Studying doesn't have to be a lonely grind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {collaborativeFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 bg-[#1AAFCB]" >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-sm mb-2 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{title}</h3>
                <p className="text-xs leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
              </div>
            ))}
          </div>
          {/* Community stats */}
          <div className="bg-white rounded-2xl p-8 grid grid-cols-3 gap-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
            {communityStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold mb-1 text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{s.value}</div>
                <div className="text-sm text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
            What Students Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard name="Ananya Krishnan" role="Class 10, Bangalore" content="I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in one term." rating={5} before="65%" after="89%" metric="Math Score" improvement="24%" />
            <TestimonialCard name="Rahul Mehta" role="Class 12, Mumbai" content="The AI study planner is incredible. It knows exactly which topics I'm weak in and schedules revision before I forget. My Physics retention is now consistently above 80%." rating={5} before="52%" after="81%" metric="Physics Score" improvement="29%" />
            <TestimonialCard name="Kavitha Suresh" role="Class 9, Hyderabad" content="English was my weakest subject. After two months on Blast Learning, I got my first A in a grammar test. The structured approach really works for me." rating={5} before="58%" after="84%" metric="English Score" improvement="26%" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Ready to Actually Remember What You Study?
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Start your 7-day free trial today. No credit card. No pressure. Just smarter studying.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/programs" className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5] bg-[#1AAFCB]" style={{ fontFamily: 'Inter, sans-serif' }} >
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link to="/library" className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-white/30 text-white hover:border-white/60 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Browse the Library
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
