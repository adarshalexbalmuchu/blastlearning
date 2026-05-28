import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const team = [
  { name: 'Arjun Mehta', role: 'Co-founder & CEO', bg: '#1AAFCB' },
  { name: 'Priya Sharma', role: 'Co-founder & CTO', bg: '#0D1B2A' },
  { name: 'Kiran Reddy', role: 'Head of Curriculum', bg: '#1AAFCB' },
  { name: 'Sunita Nair', role: 'Head of Product', bg: '#0D1B2A' },
  { name: 'Rahul Kumar', role: 'Head of Engineering', bg: '#1AAFCB' },
  { name: 'Deepa Iyer', role: 'Head of Learning Science', bg: '#0D1B2A' },
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
    desc: 'We remember what it felt like to be an Indian student — the pressure, the expectations, the fear of exams. Every decision we make starts with empathy for that experience.',
  },
  {
    icon: Users,
    title: 'Family Partnership',
    desc: 'Education is a family effort. We build tools for students and parents together, because the best outcomes happen when everyone is informed and aligned.',
  },
  {
    icon: Shield,
    title: 'Science-Backed Only',
    desc: 'We don\'t ship features based on what looks impressive. Every technique in Blast Learning — spaced repetition, active recall, metacognition — is backed by peer-reviewed cognitive science.',
  },
];

export default function About() {
  return (
    <div className="pt-16 lg:pt-18">
      {/* Mission Hero */}
      <section className="py-16 lg:py-24 lg:py-28 bg-[#F4F7FB]" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            Our Mission
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A', letterSpacing: '-0.02em' }}>
            Making Learning{' '}
            <span className="text-[#1AAFCB]">Stick for Every Indian Student</span>
          </h1>
          <p className="text-lg leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
            India spends billions on education every year, yet most students forget 90% of what they learn within a week. We built Blast Learning to fix that — to make every hour of study count, permanently.
          </p>
        </div>
      </section>

      {/* Why We Built Blast */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold mb-6 text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
                Why We Built Blast Learning
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                  It started with a frustration. Our founders watched their younger siblings spend hours at coaching classes, only to draw blanks on exam papers weeks later. The problem wasn't intelligence or effort — it was that nobody had taught them <em>how</em> to make learning stick.
                </p>
                <p className="text-base leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                  Cognitive science has known for decades that spaced repetition and active recall are the most effective learning techniques available. Yet the Indian education system — coaching classes, textbooks, tutors — delivers content without retention strategy.
                </p>
                <p className="text-base leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                  Blast Learning was built to bridge that gap. We take the science of how memory actually works and translate it into a daily experience that any student can follow — regardless of their school, city, or coaching setup.
                </p>
                <p className="text-base leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >
                  Our Metacognition Engine doesn't just deliver content. It tracks how well you remember, identifies what's at risk of being forgotten, and schedules review at the exact right time. The result: 90% retention instead of 10%.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '90%', desc: 'Average retention achieved by Blast students vs 10% without structured revision' },
                { val: '₹1,299', desc: 'Starting price — a fraction of the cost of coaching, with far better retention outcomes' },
                { val: '30 days', desc: 'Average time for students to see measurable improvement in exam scores' },
                { val: '4.0/5', desc: 'Average parent satisfaction rating across all enrolled families' },
              ].map((item) => (
                <div key={item.val} className="rounded-2xl p-6 bg-[#F4F7FB]" >
                  <div className="text-3xl font-bold mb-3 text-[#1AAFCB]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{item.val}</div>
                  <p className="text-xs leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-[#F4F7FB]" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold mb-2 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{s.value}</div>
                <div className="text-sm text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
              The Team Behind Blast Learning
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 text-center" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                  style={{ background: member.bg, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-base font-bold mb-1 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{member.name}</h3>
                <p className="text-sm text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-bold text-[#0D1B2A]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }} >
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <div className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-5 bg-[#1AAFCB]" >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0D1B2A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} >{title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6A7A]" style={{ fontFamily: 'Inter, sans-serif' }} >{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3d 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Join Us in Building a Better Way to Learn
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Whether you're a parent, student, tutor, or educator — we'd love to have you in the Blast Learning community.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5] bg-[#1AAFCB]" style={{ fontFamily: 'Inter, sans-serif' }} >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
