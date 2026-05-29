import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, User,
  BookOpen, Calculator, Edit, Target,
  LayoutDashboard, MessageSquare, BarChart2,
  Brain, Layers, Zap,
} from 'lucide-react';
import blastLogo from '../assets/blast-logo.webp';

interface SubItem {
  label: string;
  description: string;
  icon: React.ElementType;
  path: string;
}

interface SubMenu {
  title: string;
  items: SubItem[];
}

interface NavItem {
  id: number;
  label: string;
  path?: string;
  subMenus?: SubMenu[];
}

const navItems: NavItem[] = [
  { id: 1, label: 'Home', path: '/' },
  {
    id: 2,
    label: 'Programs',
    subMenus: [
      {
        title: 'Our Programs',
        items: [
          { label: 'CBSE Plan', description: 'Full NCERT curriculum for Classes 8–10', icon: BookOpen, path: '/programs' },
          { label: 'Math Genius Maker', description: 'Gap assessment & targeted math practice', icon: Calculator, path: '/programs' },
          { label: 'English Mastery', description: 'Grammar, comprehension & writing skills', icon: Edit, path: '/programs' },
          { label: 'SAT Prep Pass', description: 'US college admission test preparation', icon: Target, path: '/programs' },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Parents',
    path: '/for-parents',
    subMenus: [
      {
        title: 'For Parents',
        items: [
          { label: 'Parent Dashboard', description: 'Real-time progress & retention tracking', icon: LayoutDashboard, path: '/for-parents' },
          { label: 'Tutor Mom Support', description: 'Expert human support Mon–Sat 9am–9pm', icon: MessageSquare, path: '/for-parents' },
          { label: 'Daily Reports', description: 'Daily digest, alerts & weekly trends', icon: BarChart2, path: '/for-parents' },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Students',
    path: '/for-students',
    subMenus: [
      {
        title: 'For Students',
        items: [
          { label: 'AI Study Planner', description: 'Personalized daily study schedule', icon: Brain, path: '/for-students' },
          { label: 'Resource Library', description: 'Videos, notes & practice quizzes', icon: Layers, path: '/for-students' },
          { label: 'Focus Trainer', description: 'Proven focus & retention techniques', icon: Zap, path: '/for-students' },
        ],
      },
    ],
  },
  { id: 5, label: 'About', path: '/about' },
  { id: 6, label: 'Library', path: '/library' },
  { id: 7, label: 'FAQ', path: '/faq' },
  { id: 8, label: 'Contact', path: '/contact' },
];

const loginOptions = [
  { label: 'Parent Login', href: '#' },
  { label: 'Student Login', href: '#' },
  { label: 'Tutor Login', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setLoginOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navHeight = scrolled ? '56px' : '72px';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(7,17,31,0.88)' : 'rgba(7,17,31,0.15)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(4px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(4px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'all 0.35s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="flex items-center justify-between" style={{ height: navHeight, transition: 'height 0.35s ease' }}>

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0" style={{ textDecoration: 'none' }}>
              <img src={blastLogo} alt="Blast Learning" style={{ height: '40px', width: 'auto' }} />
            </Link>

            {/* Desktop Nav */}
            <div className="show-lg-flex items-center" style={{ gap: '2px' }}>
              <ul style={{ display: 'flex', alignItems: 'center', gap: '2px', listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item) => {
                  const isActive = item.path ? location.pathname === item.path : false;
                  return (
                    <li
                      key={item.id}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => { setOpenMenu(item.id); setHoveredId(item.id); }}
                      onMouseLeave={() => { setOpenMenu(null); setHoveredId(null); }}
                    >
                      {item.subMenus ? (
                        <button
                          className="flex items-center gap-1 text-sm font-medium"
                          style={{
                            position: 'relative',
                            padding: '6px 14px',
                            borderRadius: '99px',
                            border: 'none',
                            background: hoveredId === item.id ? 'rgba(6,182,212,0.1)' : 'transparent',
                            cursor: 'pointer',
                            color: hoveredId === item.id ? '#06B6D4' : 'rgba(255,255,255,0.75)',
                            fontFamily: 'Inter, sans-serif',
                            transition: 'color 0.2s, background 0.2s',
                          }}
                        >
                          <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                          <ChevronDown
                            size={13}
                            style={{
                              position: 'relative',
                              zIndex: 1,
                              transform: openMenu === item.id ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.25s',
                            }}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path || '/'}
                          style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '6px 14px',
                            borderRadius: '99px',
                            fontSize: '14px',
                            fontWeight: 500,
                            fontFamily: 'Inter, sans-serif',
                            color: isActive ? '#06B6D4' : hoveredId === item.id ? '#06B6D4' : 'rgba(255,255,255,0.75)',
                            textDecoration: 'none',
                            background: hoveredId === item.id ? 'rgba(6,182,212,0.08)' : 'transparent',
                            transition: 'color 0.2s, background 0.2s',
                          }}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <motion.span
                              layoutId="nav-active-line"
                              style={{
                                display: 'block',
                                height: '2px',
                                width: '80%',
                                borderRadius: '1px',
                                background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)',
                                boxShadow: '0 0 8px rgba(6,182,212,0.7)',
                                marginTop: '2px',
                              }}
                            />
                          )}
                        </Link>
                      )}

                      <AnimatePresence>
                        {openMenu === item.id && item.subMenus && (
                          <div style={{ position: 'absolute', left: 0, top: '100%', paddingTop: '8px', zIndex: 100 }}>
                            <motion.div
                              initial={{ opacity: 0, y: -8, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.97 }}
                              transition={{ duration: 0.18, ease: 'easeOut' }}
                              style={{
                                background: 'rgba(7,17,31,0.95)',
                                backdropFilter: 'blur(24px)',
                                WebkitBackdropFilter: 'blur(24px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                padding: '20px',
                                boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                                minWidth: '280px',
                              }}
                            >
                              {item.subMenus.map((sub) => (
                                <div key={sub.title}>
                                  <h3
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: 600,
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.08em',
                                      color: 'rgba(255,255,255,0.35)',
                                      marginBottom: '12px',
                                      fontFamily: 'Inter, sans-serif',
                                    }}
                                  >
                                    {sub.title}
                                  </h3>
                                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {sub.items.map((subItem) => {
                                      const Icon = subItem.icon;
                                      return (
                                        <li key={subItem.label}>
                                          <Link
                                            to={subItem.path}
                                            className="flex items-start gap-3 rounded-xl"
                                            style={{ padding: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.08)')}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                                          >
                                            <div
                                              className="flex items-center justify-center flex-shrink-0"
                                              style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '8px',
                                                background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
                                                border: '1px solid rgba(6,182,212,0.2)',
                                              }}
                                            >
                                              <Icon size={16} style={{ color: '#06B6D4' }} />
                                            </div>
                                            <div>
                                              <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '2px', fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {subItem.label}
                                              </p>
                                              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.4', fontFamily: 'Inter, sans-serif' }}>
                                                {subItem.description}
                                              </p>
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop right actions */}
            <div className="show-lg-flex items-center" style={{ gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setLoginOpen((v) => !v)}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '99px',
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.75)',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)';
                    (e.currentTarget as HTMLElement).style.color = '#06B6D4';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)';
                  }}
                >
                  <User size={14} />
                  Login
                  <ChevronDown size={12} style={{ transform: loginOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </button>
                <AnimatePresence>
                  {loginOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 'calc(100% + 8px)',
                        width: '176px',
                        background: 'rgba(7,17,31,0.97)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                        zIndex: 100,
                      }}
                    >
                      {loginOptions.map((opt) => (
                        <a
                          key={opt.label}
                          href={opt.href}
                          className="block text-sm"
                          style={{
                            padding: '12px 16px',
                            color: 'rgba(255,255,255,0.65)',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            transition: 'background 0.15s, color 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.1)';
                            (e.currentTarget as HTMLElement).style.color = '#06B6D4';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)';
                          }}
                          onClick={() => setLoginOpen(false)}
                        >
                          {opt.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ scale: 1.04, y: -1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Link
                  to="/programs"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '9px 22px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
                    boxShadow: '0 0 24px rgba(6,182,212,0.35)',
                  }}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="hide-lg"
              style={{ color: 'white', background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
            className="hide-lg"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: 'rgba(7,17,31,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '80px',
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {navItems.map((item, i) => {
                const isActive = item.path ? location.pathname === item.path : false;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      to={item.path || '/'}
                      style={{
                        display: 'block',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: 600,
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: isActive ? '#06B6D4' : 'rgba(255,255,255,0.85)',
                        textDecoration: 'none',
                        background: isActive ? 'rgba(6,182,212,0.08)' : 'transparent',
                        border: isActive ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
                        transition: 'background 0.2s',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {loginOptions.map((opt) => (
                <a key={opt.label} href={opt.href} style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  {opt.label}
                </a>
              ))}
              <Link
                to="/programs"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  marginTop: '8px',
                  boxShadow: '0 0 28px rgba(6,182,212,0.3)',
                }}
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div
        className="hide-md fixed bottom-0 left-0 right-0 z-50 p-4 gap-3"
        style={{ display: 'flex', background: 'rgba(7,17,31,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Link
          to="/programs"
          className="flex-1 text-center py-2.5 rounded-full text-white text-sm font-bold"
          style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
        >
          Start Free Trial
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="flex-1 text-center py-2.5 rounded-full text-sm font-semibold"
          style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', background: 'transparent', fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}
        >
          Login
        </button>
      </div>
    </>
  );
}
