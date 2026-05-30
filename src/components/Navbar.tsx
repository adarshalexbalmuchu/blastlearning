import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: '#FAFAF7',
          borderBottom: isScrolled
            ? '1px solid #E8E4D8'
            : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 24px rgba(26, 26, 46, 0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#E8336B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'white',
              }}
            >
              B
            </motion.div>
            <span
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#1A1A2E',
              }}
            >
              BlastLearning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.color = '#E8336B';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) {
                    e.currentTarget.style.color = '#1A1A2E';
                  }
                }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#E8336B' : '#1A1A2E',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#E8336B',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Link
              to="/login"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#1A1A2E',
                textDecoration: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                background: 'white',
                border: '1px solid #D8D4C8',
                transition: 'all 0.2s ease',
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
                padding: '0.6rem 1.4rem',
                borderRadius: '8px',
                background: '#E8336B',
                boxShadow: '0 4px 24px rgba(26, 26, 46, 0.06)',
                transition: 'all 0.2s ease',
              }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#1A1A2E',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: '#FAFAF7',
              borderBottom: '1px solid #E8E4D8',
            }}
          >
            <div
              style={{
                padding: '1rem 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: isActive(link.path) ? '#E8336B' : '#1A1A2E',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E8E4D8',
                }}
              >
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1A1A2E',
                    textDecoration: 'none',
                    padding: '0.75rem',
                    textAlign: 'center',
                    borderRadius: '8px',
                    background: 'white',
                    border: '1px solid #D8D4C8',
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.75rem',
                    textAlign: 'center',
                    borderRadius: '8px',
                    background: '#E8336B',
                  }}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
