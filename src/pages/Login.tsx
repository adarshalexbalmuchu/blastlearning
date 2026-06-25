import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Bell, LogIn } from 'lucide-react';

const ROLE_COPY: Record<string, { heading: string; line: string }> = {
  parent: {
    heading: 'Parent login is on the way',
    line: 'The parent dashboard, with live retention scores and weekly progress, is rolling out soon. Start a free trial now and you will be first in line when logins open.',
  },
  student: {
    heading: 'Student login is on the way',
    line: 'Your personalised study plan, streaks, and quizzes are almost ready. Start a free trial now and we will set up your account the moment logins open.',
  },
  tutor: {
    heading: 'Tutor login is on the way',
    line: 'The tutor console for tracking your students and clearing doubts is in final testing. Reach out and we will get you early access.',
  },
};

const DEFAULT_COPY = {
  heading: 'Logins are launching soon',
  line: 'We are putting the finishing touches on the Blast Learning app. Start a free trial now, or get in touch and we will let you know the moment your account is ready.',
};

export default function Login() {
  const [params] = useSearchParams();
  const role = params.get('role') ?? '';
  const copy = ROLE_COPY[role] ?? DEFAULT_COPY;

  useEffect(() => {
    document.title = 'Login · Blast Learning';
    return () => { document.title = 'Blast Learning'; };
  }, []);

  return (
    <div style={{ background: '#FFFFFF' }}>
      <section style={{ paddingTop: '128px', paddingBottom: '112px', background: '#F7F7F8' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid #ECECF1',
              borderRadius: '20px',
              padding: 'clamp(28px, 5vw, 44px)',
              boxShadow: '0 12px 40px rgba(28,28,40,0.06)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#E0F5FC',
                color: '#0FA8DC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <LogIn size={24} />
            </div>

            <h1 style={{ fontSize: 'var(--fs-h3-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', color: '#111111', marginBottom: '14px' }}>
              {copy.heading}
            </h1>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '32px' }}>
              {copy.line}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link
                to="/programs"
                className="cta cta-pink"
                style={{ boxShadow: 'none' }}
              >
                Start your free trial <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="cta cta-outline"
                style={{ borderColor: '#DCDCE5', color: '#1C1C28' }}
              >
                <Bell size={16} /> Get notified when it is ready
              </Link>
            </div>
          </motion.div>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>
            Already started a trial? Your advisor will share your login details by email.
          </p>
        </div>
      </section>
    </div>
  );
}
