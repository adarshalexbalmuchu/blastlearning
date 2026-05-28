import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQItem from '../components/FAQItem';

type Category = 'General' | 'Programs' | 'Parents' | 'Students';

interface FAQEntry {
  question: string;
  answer: string;
  category: Category;
}

const faqs: FAQEntry[] = [
  // General
  {
    category: 'General',
    question: 'What is the best online CBSE course for Class 10 students?',
    answer: 'Blast Learning\'s CBSE Plan at ₹1,299/month is specifically designed for Class 10 students. It covers the complete NCERT syllabus, provides AI-powered revision scheduling, and helps students retain 90% of what they learn — critical for board exam performance.',
  },
  {
    category: 'General',
    question: 'Can my child prepare for CBSE boards without coaching?',
    answer: 'Yes — and many Blast Learning students do exactly that. Our AI creates a complete study plan based on the CBSE syllabus, identifies gaps, and ensures systematic coverage of every topic. For students already attending coaching, Blast Learning amplifies their coaching by making it stick.',
  },
  {
    category: 'General',
    question: 'Are online CBSE classes effective for weak students?',
    answer: 'Absolutely. Blast Learning is particularly effective for students who struggle with retention. Our adaptive system identifies exactly where a student is weak and focuses revision there. The AI adjusts difficulty based on performance, so students are never overwhelmed and always making measurable progress.',
  },
  {
    category: 'General',
    question: 'How can my child improve CBSE Math marks quickly?',
    answer: 'The Math Genius Maker Pass begins with a comprehensive gap assessment to find exactly which concepts are holding your child back. Then it builds a personalized practice plan targeting those gaps. Most students see measurable improvement in their math scores within 4–6 weeks.',
  },
  {
    category: 'General',
    question: 'Is Blast Learning affordable compared to traditional CBSE coaching?',
    answer: 'Traditional coaching in metro cities costs ₹5,000–₹20,000 per month per subject. Blast Learning starts at ₹999/month for complete AI-powered learning with parent dashboard, retention tracking, and human support. It\'s designed to complement coaching, not replace it — making your existing coaching spend more effective.',
  },
  {
    category: 'General',
    question: 'How to finish CBSE syllabus quickly before board exams?',
    answer: 'Our AI creates an optimized study schedule based on your exam dates and the time available. It prioritizes high-weightage topics, uses spaced repetition for efficient revision, and helps you cover the entire syllabus systematically without last-minute panic.',
  },
  {
    category: 'General',
    question: 'Can online coaching actually replace traditional tuition?',
    answer: 'Blast Learning is most powerful when used alongside coaching — it makes coaching content stick through structured revision. However, many students use it as their primary learning tool and achieve excellent results. The AI provides personalized instruction that often exceeds what a single tutor can offer.',
  },
  {
    category: 'General',
    question: 'How can my child stay consistent and improve concentration while studying?',
    answer: 'Our Focus Trainer module teaches proven focus techniques and creates structured study sessions with timed intervals. The daily study streak feature gamifies consistency, and the progress dashboard gives students motivation by making improvement visible.',
  },
  // Programs
  {
    category: 'Programs',
    question: 'What subjects are covered in the CBSE Plan?',
    answer: 'The CBSE Plan covers all major subjects for Classes 8-10: Mathematics, Science (Physics, Chemistry, Biology), Social Studies, and English. Each subject has full NCERT alignment with AI-powered revision and practice quizzes.',
  },
  {
    category: 'Programs',
    question: 'Can I switch between programs?',
    answer: 'Yes — you can upgrade, downgrade, or switch programs at any time. If your needs change (for example, your child moves from Class 10 to 11 and needs SAT prep), we\'ll help you transition smoothly with no data loss.',
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
  // Parents
  {
    category: 'Parents',
    question: 'How often will I receive updates about my child\'s progress?',
    answer: 'You\'ll receive a daily digest summarizing what your child studied and their retention scores. Weekly detailed reports include subject-wise performance trends. You can also check the parent dashboard anytime for real-time information.',
  },
  {
    category: 'Parents',
    question: 'Can I contact a tutor if my child has specific doubts?',
    answer: 'Yes. Our Tutor Mom team includes qualified subject-matter experts available Monday to Saturday, 9 AM to 9 PM. You can message them through the parent portal, and they\'ll respond within 2 hours during business hours.',
  },
  {
    category: 'Parents',
    question: 'What happens if my child misses study sessions?',
    answer: 'You\'ll receive an alert when your child misses a scheduled session. The AI automatically adjusts the study plan to catch up without overwhelming the student. Our Tutor Mom team can also reach out directly to check in with your child.',
  },
  {
    category: 'Parents',
    question: 'Is there a family discount for multiple children?',
    answer: 'Yes — families enrolling two or more children receive a 20% discount on the second subscription and beyond. Contact us to set up a family account.',
  },
  // Students
  {
    category: 'Students',
    question: 'How much time do I need to spend on Blast Learning daily?',
    answer: 'Most students spend 45 minutes to 1.5 hours per day depending on their syllabus load. The AI optimizes your time so that every minute is spent on the highest-priority material. Students report that 45 focused minutes on Blast Learning is more effective than 3 hours of traditional studying.',
  },
  {
    category: 'Students',
    question: 'Can I use Blast Learning on my phone?',
    answer: 'Yes — Blast Learning is fully responsive and works on any smartphone, tablet, or computer. Our mobile app is currently in development (launching soon). Until then, the web app works seamlessly on mobile browsers.',
  },
  {
    category: 'Students',
    question: 'What if I don\'t understand a concept explained by the AI?',
    answer: 'Our AI Study Buddy can explain any concept in multiple ways — with different examples, simpler language, or in your regional language. If you\'re still stuck, you can post in the community forums where peer students or our tutors will answer within a few hours.',
  },
  {
    category: 'Students',
    question: 'Will Blast Learning help me if I\'m already a good student?',
    answer: 'Absolutely. High-performing students benefit from retention optimization too — maintaining top scores in boards requires systematic revision, not just intelligence. Blast Learning helps top students consolidate their advantage and free up time by making their study sessions more efficient.',
  },
];

const categories: Category[] = ['General', 'Programs', 'Parents', 'Students'];

export default function FAQ() {
  return (
    <div className="pt-16 lg:pt-18">
      {/* Header */}
      <section className="py-20" style={{ background: '#F4F7FB' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            FAQ
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Everything you need to know about Blast Learning. Can't find your answer? Contact our team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-14 last:mb-0">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: '#1AAFCB' }}>
                  {category.charAt(0)}
                </span>
                {category}
              </h2>
              <div className="flex flex-col gap-3">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16" style={{ background: '#F4F7FB' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            Still Have Questions?
          </h2>
          <p className="mb-8" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Our team is available Monday to Saturday, 9 AM to 9 PM. We typically respond within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm transition-colors hover:bg-[#148fa5]" style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="mailto:hello@blastlearning.in" className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border-2 transition-colors hover:border-[#1AAFCB] hover:text-[#1AAFCB]" style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>
              Email hello@blastlearning.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
