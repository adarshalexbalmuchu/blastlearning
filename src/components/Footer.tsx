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

const programs = [
  'CBSE Plan',
  'Math Genius Maker Pass',
  'English Mastery Pass',
  'SAT Prep Pass',
];

const socialLinks = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'Instagram' },
  { icon: Rss, href: '#', label: 'LinkedIn' },
  { icon: Play, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B2A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#1AAFCB' }}>
                <span className="text-white font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>BL</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Blast Learning</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
              AI-powered learning retention platform helping Indian students in Classes 8–12 achieve lasting academic success.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-[#1AAFCB]"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* App store badges (coming soon) */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>App Coming Soon</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  App Store
                </div>
                <div className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Google Play
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-[#1AAFCB]"
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    to="/programs"
                    className="text-sm transition-colors duration-200 hover:text-[#1AAFCB]"
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1AAFCB' }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <a
                  href="mailto:hello@blastlearning.in"
                  className="text-sm transition-colors hover:text-[#1AAFCB]"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  hello@blastlearning.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <a
                  href="tel:+911234567890"
                  className="text-sm transition-colors hover:text-[#1AAFCB]"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#1AAFCB' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                  Bangalore, Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Blast Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors hover:text-[#1AAFCB]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Privacy Policy</a>
            <a href="#" className="text-xs transition-colors hover:text-[#1AAFCB]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Terms of Service</a>
            <a href="#" className="text-xs transition-colors hover:text-[#1AAFCB]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
