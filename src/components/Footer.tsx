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
    <footer className="bg-[#0D1B2A] text-white pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#1AAFCB]">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>BL</span>
              </div>
              <span className="font-semibold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Blast Learning</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI-powered retention platform for Indian students in Classes 8–12.
            </p>
            <div className="flex items-center gap-2 mb-6">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>App Coming Soon</div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-lg text-xs border border-white/10 text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>App Store</div>
              <div className="px-3 py-1.5 rounded-lg text-xs border border-white/10 text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>Google Play</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1AAFCB] mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1AAFCB] mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Programs</h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link to="/programs" className="text-sm text-gray-400 hover:text-white transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1AAFCB] mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#1AAFCB]" />
                <a href="mailto:hello@blastlearning.in" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>hello@blastlearning.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#1AAFCB]" />
                <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>+91 123 456 7890</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#1AAFCB]" />
                <span className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>© {new Date().getFullYear()} Blast Learning. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((t) => (
              <a key={t} href="#" className="text-xs text-gray-500 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
