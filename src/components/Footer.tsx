import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Rss, Play, Mail, Phone, MapPin } from 'lucide-react';

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
    <footer className="footer-root" style={{ background: '#0D1B2A', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 64px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '40px', marginBottom: '48px' }}
          className="grid-cols-2-md grid-cols-4-lg"
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#1AAFCB' }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>BL</span>
              </div>
              <span className="font-semibold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Blast Learning</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
              AI-powered retention platform for Indian students in Classes 8–12.
            </p>
            <div className="flex items-center gap-2 mb-6">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>App Coming Soon</div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-lg text-xs" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>App Store</div>
              <div className="px-3 py-1.5 rounded-lg text-xs" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>Google Play</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Programs</h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    to="/programs"
                    className="text-sm hover:text-white transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <a
                  href="mailto:hello@blastlearning.in"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                >
                  hello@blastlearning.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <a
                  href="tel:+911234567890"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                  Bangalore, Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-4 row-sm"
          style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Blast Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}
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
