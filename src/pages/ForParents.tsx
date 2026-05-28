import { Link } from 'react-router-dom';
import {
  ArrowRight, AlertCircle, CheckCircle, BarChart3, Bell, MessageSquare, FileText
} from 'lucide-react';
import DashboardMockup from '../components/DashboardMockup';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';

const concerns = [
  { concern: 'My child forgets everything within days of studying', solution: 'Spaced repetition schedules content exactly when your child needs to review for maximum retention — up to 90%.' },
  { concern: 'Coaching fees keep increasing but results don\'t improve', solution: 'Our AI ensures every rupee spent on coaching becomes long-term knowledge, not forgotten lessons.' },
  { concern: 'I can\'t tell if my child is actually studying productively', solution: 'Live dashboard shows study time, topics covered, quiz scores, and retention percentage every day.' },
  { concern: 'My child is stressed, anxious, and losing confidence', solution: 'Personalized pace, progress celebrations, and human mentors build confidence as students see real results.' },
  { concern: 'Different teachers explain things differently and it confuses my child', solution: 'AI synthesizes all sources into one consistent, personalised learning path with no contradictions.' },
  { concern: 'I don\'t know which topics my child is weak in', solution: 'Weekly diagnostic reports show exact weak topics with actionable recommendations you can share with tutors.' },
  { concern: 'My child spends hours "studying" with no real output', solution: 'Active recall and timed focus sessions replace passive reading, making every study hour measurably productive.' },
];

const howParentsUse = [
  {
    num: '01',
    title: 'Set Up Your Child\'s Profile',
    desc: 'Create your child\'s account, select their class and subjects, and link any existing coaching schedule. Setup takes under 10 minutes.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Receive Daily Updates',
    desc: 'Get a daily digest on WhatsApp and email showing what your child studied, retention scores, and any areas needing attention.',
    icon: Bell,
  },
  {
    num: '03',
    title: 'Track and Support Progress',
    desc: 'Use the parent dashboard to see trends over time, share reports with tutors, and celebrate your child\'s achievements together.',
    icon: BarChart3,
  },
];

const parentFaqs = [
  {
    question: 'Do I need to monitor my child\'s study sessions?',
    answer: 'No — Blast Learning is designed for independent learning. Your child follows their AI-generated study plan, while you receive daily progress summaries. You stay informed without being a constant presence.',
  },
  {
    question: 'How do I know if Blast Learning is actually working?',
    answer: 'You\'ll see it in the numbers within 2-3 weeks. The parent dashboard shows retention percentages, quiz scores, and subject mastery trends over time. Most parents see a measurable improvement in their child\'s test scores within one month.',
  },
  {
    question: 'Can I communicate with a human tutor if my child needs help?',
    answer: 'Yes. Our Tutor Mom Support team includes qualified educators who are available for weekly check-ins and doubt resolution. You can also message them directly through the parent portal.',
  },
  {
    question: 'What if my child is already attending coaching classes?',
    answer: 'Blast Learning works alongside coaching, not against it. Your child can upload coaching recordings and notes, and our AI converts them into revision material — making coaching more effective.',
  },
  {
    question: 'Is there a trial period before I commit to a subscription?',
    answer: 'Absolutely. We offer a 7-day free trial with full feature access. No credit card is required to start. You\'ll have enough data to see real retention improvement before making a decision.',
  },
];

export default function ForParents() {
  return (
    <div className="pt-16 lg:pt-18">
      {/* Hero */}
      <section className="py-16 lg:py-24 lg:py-28 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            For Parents
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A', letterSpacing: '-0.02em' }}>
            From Constant Worry to{' '}
            <span className="text-[#1AAFCB]">Complete Confidence</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
            Know exactly what your child is learning, how well they retain it, and where they need help — every single day. No more guessing, no more surprises at exam time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5] bg-[#1AAFCB]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Start 7-Day Free Trial <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 transition-colors hover:border-[#1AAFCB] hover:text-[#1AAFCB]"
              style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Pain/Solution */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-14 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
            We Understand Your Concerns
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-[#E8357A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
                <AlertCircle size={16} /> What Parents Tell Us
              </h3>
              <div className="flex flex-col gap-3">
                {concerns.map(({ concern }) => (
                  <div key={concern} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #E8357A', background: 'rgba(232,53,122,0.04)' }}>
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-[#E8357A]"  />
                    <p className="text-sm text-[#0D1B2A]" style={{ fontFamily: 'Inter, sans-serif' }} >{concern}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
                <CheckCircle size={16} /> How Blast Learning Solves It
              </h3>
              <div className="flex flex-col gap-3">
                {concerns.map(({ solution }) => (
                  <div key={solution} className="flex items-start gap-3 p-4 rounded-xl" style={{ borderLeft: '3px solid #1AAFCB', background: 'rgba(26,175,203,0.04)' }}>
                    <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-[#1AAFCB]"  />
                    <p className="text-sm text-[#0D1B2A]" style={{ fontFamily: 'Inter, sans-serif' }} >{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold mb-5 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
                The Parent Dashboard — Your Window Into Your Child's Learning
              </h2>
              <p className="text-base leading-relaxed mb-8 text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                A beautifully simple interface that gives you all the information you need without overwhelming you. Check it in 2 minutes each morning and you'll always know exactly where your child stands.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, label: 'Retention Score', desc: 'Daily retention percentage across all subjects' },
                  { icon: Bell, label: 'Smart Alerts', desc: 'Notified when child misses a session or drops in a subject' },
                  { icon: MessageSquare, label: 'Weekly Reports', desc: 'Detailed PDF reports to share with tutors and teachers' },
                  { icon: FileText, label: 'Exam Readiness', desc: 'Pre-exam readiness score so there are no surprises' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="p-4 rounded-xl bg-white" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.06)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-[#1AAFCB]" >
                      <Icon size={16} className="text-white" />
                    </div>
                    <p className="text-sm font-semibold mb-1 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{label}</p>
                    <p className="text-xs leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* How Parents Use */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-14 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
            Getting Started Takes 10 Minutes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howParentsUse.map(({ num, title, desc, icon: Icon }) => (
              <div key={num} className="bg-white rounded-xl p-8" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(26,175,203,0.15)' }}>{num}</span>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-[#1AAFCB]" >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="text-base font-bold mb-3 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
            What Parents Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard name="Sunita Reddy" role="Parent of Class 10 student, Pune" content="We were spending ₹15,000 a month on coaching and my daughter was still forgetting everything. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined." rating={5} />
            <TestimonialCard name="Deepak Sharma" role="Parent of Class 11 student, Delhi" content="The parent dashboard is a game changer. I can see exactly what my son studied, for how long, and his retention scores. No more guessing if he's actually studying or just watching YouTube." rating={5} />
            <TestimonialCard name="Meena Iyer" role="Parent of Class 9 student, Bangalore" content="My daughter's confidence has improved dramatically. She used to dread exams, now she actually looks forward to revision sessions. The AI makes it feel manageable, not overwhelming." rating={5} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
            Common Parent Questions
          </h2>
          <div className="flex flex-col gap-3">
            {parentFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Give Your Child the Retention Advantage
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Start with a 7-day free trial. No credit card required. See real retention data for your child within the first week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/programs" className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5] bg-[#1AAFCB]" style={{ fontFamily: 'Inter, sans-serif' }} >
              Start Free Trial <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-white/30 text-white hover:border-white/60 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
