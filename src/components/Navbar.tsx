import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'Parents', path: '/for-parents' },
  { label: 'Students', path: '/for-students' },
  { label: 'About', path: '/about' },
  { label: 'Library', path: '/library' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const loginOptions = [
  { label: 'Parent Login', href: '#' },
  { label: 'Student Login', href: '#' },
  { label: 'Tutor Login', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_20px_rgba(13,27,42,0.12)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#1AAFCB' }}>
                <span className="text-white font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>BL</span>
              </div>
              <span className="font-bold text-lg hidden sm:block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
                Blast Learning
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-[#1AAFCB]' : 'text-[#0D1B2A] hover:text-[#1AAFCB]'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: '#1AAFCB' }} />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Login Dropdown */}
            <div className="hidden lg:block relative" ref={dropdownRef}>
              <button
                onClick={() => setLoginOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:border-[#1AAFCB] hover:text-[#1AAFCB]"
                style={{ borderColor: '#0D1B2A', color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}
              >
                <User size={16} />
                Login
                <ChevronDown size={14} className={`transition-transform duration-200 ${loginOpen ? 'rotate-180' : ''}`} />
              </button>
              {loginOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-[0_8px_24px_rgba(13,27,42,0.12)] border border-gray-100 overflow-hidden">
                  {loginOptions.map((opt) => (
                    <a
                      key={opt.label}
                      href={opt.href}
                      className="block px-4 py-3 text-sm text-[#0D1B2A] hover:bg-[#F4F7FB] hover:text-[#1AAFCB] transition-colors duration-150"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setLoginOpen(false)}
                    >
                      {opt.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#0D1B2A] hover:text-[#1AAFCB] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-[#F4F7FB] text-[#1AAFCB]'
                      : 'text-[#0D1B2A] hover:bg-[#F4F7FB] hover:text-[#1AAFCB]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-gray-100 pt-3 flex flex-col gap-1">
              {loginOptions.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[#0D1B2A] hover:bg-[#F4F7FB] hover:text-[#1AAFCB] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-white border-t border-gray-100 shadow-[0_-4px_16px_rgba(13,27,42,0.08)]">
        <Link
          to="/programs"
          className="block w-full text-center py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-200 hover:bg-[#148fa5]"
          style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
        >
          Start Free Trial
        </Link>
      </div>
    </>
  );
}
