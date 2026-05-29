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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'white',
          borderBottom: '1px solid #f1f5f9',
          boxShadow: scrolled ? '0 4px 12px rgba(13,27,42,0.08)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="flex items-center justify-between" style={{ height: '64px' }}>

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0" style={{ textDecoration: 'none' }}>
              <img src={blastLogo} alt="Blast Learning" style={{ height: '44px', width: 'auto' }} />
            </Link>

            {/* Desktop Nav */}
            <div className="show-lg-flex items-center" style={{ gap: '2px' }}>
              <ul style={{ display: 'flex', alignItems: 'center', gap: '2px', listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item) => (
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
                          background: 'transparent',
                          cursor: 'pointer',
                          color: '#5A6A7A',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {hoveredId === item.id && (
                          <motion.div
                            layoutId="nav-hover-bg"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              borderRadius: '99px',
                              background: 'rgba(26,175,203,0.08)',
                            }}
                          />
                        )}
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
                          alignItems: 'center',
                          padding: '6px 14px',
                          borderRadius: '99px',
                          fontSize: '14px',
                          fontWeight: 500,
                          fontFamily: 'Inter, sans-serif',
                          color: location.pathname === item.path ? '#1AAFCB' : '#5A6A7A',
                          textDecoration: 'none',
                        }}
                      >
                        {hoveredId === item.id && (
                          <motion.div
                            layoutId="nav-hover-bg"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              borderRadius: '99px',
                              background: 'rgba(26,175,203,0.08)',
                            }}
                          />
                        )}
                        <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                      </Link>
                    )}

                    <AnimatePresence>
                      {openMenu === item.id && item.subMenus && (
                        <div style={{ position: 'absolute', left: 0, top: '100%', paddingTop: '8px', zIndex: 100 }}>
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            style={{
                              background: 'white',
                              border: '1px solid #f1f5f9',
                              borderRadius: '16px',
                              padding: '20px',
                              boxShadow: '0 12px 32px rgba(13,27,42,0.12)',
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
                                    color: '#5A6A7A',
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
                                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#F4F7FB')}
                                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                                        >
                                          <div
                                            className="flex items-center justify-center flex-shrink-0"
                                            style={{
                                              width: '36px',
                                              height: '36px',
                                              borderRadius: '8px',
                                              border: '1px solid #e8edf2',
                                              background: 'white',
                                            }}
                                          >
                                            <Icon size={16} style={{ color: '#1AAFCB' }} />
                                          </div>
                                          <div>
                                            <p
                                              style={{
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#0D1B2A',
                                                marginBottom: '2px',
                                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                              }}
                                            >
                                              {subItem.label}
                                            </p>
                                            <p
                                              style={{
                                                fontSize: '12px',
                                                color: '#5A6A7A',
                                                lineHeight: '1.4',
                                                fontFamily: 'Inter, sans-serif',
                                              }}
                                            >
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
                ))}
              </ul>
            </div>

            {/* Login Dropdown */}
            <div className="show-lg-blk" style={{ position: 'relative' }}>
              <button
                onClick={() => setLoginOpen((v) => !v)}
                className="flex items-center gap-2 text-sm font-medium"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #0D1B2A',
                  background: 'transparent',
                  color: '#0D1B2A',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1AAFCB'; (e.currentTarget as HTMLElement).style.color = '#1AAFCB'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0D1B2A'; (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; }}
              >
                <User size={14} />
                Login
                <ChevronDown
                  size={12}
                  style={{
                    transform: loginOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}
                />
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
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #f1f5f9',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(13,27,42,0.12)',
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
                          color: '#0D1B2A',
                          textDecoration: 'none',
                          fontFamily: 'Inter, sans-serif',
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#F4F7FB'; (e.currentTarget as HTMLElement).style.color = '#1AAFCB'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; }}
                        onClick={() => setLoginOpen(false)}
                      >
                        {opt.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              className="hide-lg p-2 rounded-lg"
              style={{ color: '#0D1B2A', background: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`hide-lg bg-white overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}
        >
          <div className="px-4 py-3 flex flex-col">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path || '/'}
                  className="px-3 py-3 text-sm font-medium border-b border-gray-50"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: active ? '#1AAFCB' : '#0D1B2A',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-1">
              {loginOptions.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.href}
                  className="px-3 py-2.5 text-sm"
                  style={{ color: '#5A6A7A', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sticky bottom bar */}
      <div
        className="hide-md fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 p-4 gap-3"
        style={{ display: 'flex', background: 'white' }}
      >
        <Link
          to="/programs"
          className="flex-1 text-center py-2.5 rounded-lg text-white text-sm font-semibold"
          style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
        >
          Start Free Trial
        </Link>
        <a
          href="#"
          className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold"
          style={{ border: '2px solid #0D1B2A', color: '#0D1B2A', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}
        >
          Login
        </a>
      </div>
    </>
  );
}
