import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Rss, Play, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import blastLogo from '../assets/blast-logo.webp';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'For Parents', path: '/for-parents' },
  { label: 'For Students', path: '/for-students' },
  { label: 'About Us', path: '/about' },
  { label: 'Library', path: '/library' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const programs = ['CBSE Plan', 'Math Genius Maker Pass', 'English Mastery Pass', 'SAT Prep Pass'];

const socialLinks = [
  { icon: Globe, label: 'Facebook' },
  { icon: MessageCircle, label: 'Twitter' },
  { icon: Share2, label: 'Instagram' },
  { icon: Rss, label: 'LinkedIn' },
  { icon: Play, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer-root" style={{ background: '#07111F', color: 'white' }}>

      {/* CTA Strip */}
      <div style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.12) 50%, rgba(139,92,246,0.15) 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'white', marginBottom: '6px' }}>
              Ready to transform your child's learning?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Start with a free 7-day trial. No credit card required.
            </p>
          </div>
          <Link
            to="/programs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              boxShadow: '0 0 28px rgba(6,182,212,0.3)',
              whiteSpace: 'nowrap',
            }}
          >
            Start Free Trial <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Gradient divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '40px', marginBottom: '48px' }}
          className="grid-cols-2-md grid-cols-4-lg"
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '10px', padding: '6px 10px', display: 'inline-flex', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={blastLogo} alt="Blast Learning" style={{ height: '34px', width: 'auto' }} />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
              AI-powered retention platform for Indian students in Classes 8–12.
            </p>
            <div className="flex items-center gap-2 mb-6" style={{ flexWrap: 'wrap' }}>
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
                    (e.currentTarget as HTMLElement).style.color = '#06B6D4';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(6,182,212,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>App Coming Soon</div>
            <div className="flex gap-2">
              {['App Store', 'Google Play'].map((s) => (
                <div key={s} className="px-3 py-1.5 rounded-lg text-xs" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.22)', fontFamily: 'Inter, sans-serif' }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06B6D4')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    to="/programs"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06B6D4')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#06B6D4' }} />
                <a href="mailto:hello@blastlearning.in" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06B6D4')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}>
                  hello@blastlearning.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#06B6D4' }} />
                <a href="tel:+911234567890" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06B6D4')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}>
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#06B6D4' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)', marginBottom: '28px' }} />

        <div
          className="flex items-center justify-between gap-4 row-sm"
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Blast Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-6" style={{ flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
