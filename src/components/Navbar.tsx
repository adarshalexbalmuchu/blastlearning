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
          { label: 'CBSE Plan', description: 'Full NCERT curriculum for Classes 8-10', icon: BookOpen, path: '/programs/cbse-plan' },
          { label: 'Math Genius Maker', description: 'Gap assessment & targeted math practice', icon: Calculator, path: '/programs/math-genius' },
          { label: 'English Mastery', description: 'Grammar, comprehension & writing skills', icon: Edit, path: '/programs/english-mastery' },
          { label: 'SAT Prep Pass', description: 'US college admission test preparation', icon: Target, path: '/programs/sat-prep' },
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
          { label: 'Tutor Mom Support', description: 'Expert human support Mon-Sat 9am-9pm', icon: MessageSquare, path: '/for-parents' },
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
  { label: 'Parent Login', to: '/login?role=parent' },
  { label: 'Student Login', to: '/login?role=student' },
  { label: 'Tutor Login', to: '/login?role=tutor' },
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

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: '#FFFFFF',
          borderBottom: '1px solid #ECECF1',
          boxShadow: scrolled ? '0 2px 12px rgba(28,28,40,0.05)' : 'none',
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
                          color: '#5A5A6E',
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
                              background: 'rgba(15,168,220,0.08)',
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
                          color: location.pathname === item.path ? '#0FA8DC' : '#5A5A6E',
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
                              background: 'rgba(15,168,220,0.08)',
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
                              background: '#FFFFFF',
                              border: '1px solid #ECECF1',
                              borderRadius: '16px',
                              padding: '20px',
                              boxShadow: '0 8px 28px rgba(28,28,40,0.1)',
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
                                    color: '#8E8EA0',
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
                                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#F7F7F8')}
                                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                                        >
                                          <div
                                            className="flex items-center justify-center flex-shrink-0"
                                            style={{
                                              width: '36px',
                                              height: '36px',
                                              borderRadius: '8px',
                                              border: '1px solid #B5E3F4',
                                              background: '#E0F5FC',
                                            }}
                                          >
                                            <Icon size={16} style={{ color: '#0FA8DC' }} />
                                          </div>
                                          <div>
                                            <p
                                              style={{
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#1C1C28',
                                                marginBottom: '2px',
                                                fontFamily: 'Poppins, sans-serif',
                                              }}
                                            >
                                              {subItem.label}
                                            </p>
                                            <p
                                              style={{
                                                fontSize: '12px',
                                                color: '#5A5A6E',
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

            {/* Desktop CTA */}
            <Link
              to="/programs"
              className="show-lg-blk cta cta-pink"
              style={{ padding: '9px 20px', borderRadius: '10px', background: '#F03C6F', color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(240,60,111,0.25)' }}
            >
              Start Free Trial
            </Link>

            {/* Login Dropdown */}
            <div className="show-lg-blk" style={{ position: 'relative' }}>
              <button
                onClick={() => setLoginOpen((v) => !v)}
                className="flex items-center gap-2 text-sm font-medium"
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #DCDCE5',
                  background: 'white',
                  color: '#1C1C28',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0FA8DC'; (e.currentTarget as HTMLElement).style.color = '#0FA8DC'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#DCDCE5'; (e.currentTarget as HTMLElement).style.color = '#1C1C28'; }}
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
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #ECECF1',
                      overflow: 'hidden',
                      boxShadow: '0 8px 28px rgba(28,28,40,0.1)',
                      zIndex: 100,
                    }}
                  >
                    {loginOptions.map((opt) => (
                      <Link
                        key={opt.label}
                        to={opt.to}
                        className="block text-sm"
                        style={{
                          padding: '12px 16px',
                          color: '#1C1C28',
                          textDecoration: 'none',
                          fontFamily: 'Inter, sans-serif',
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#F7F7F8'; (e.currentTarget as HTMLElement).style.color = '#0FA8DC'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1C1C28'; }}
                        onClick={() => setLoginOpen(false)}
                      >
                        {opt.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile: Login button + hamburger */}
            <div className="hide-lg" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                to="/login"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#F03C6F',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Login / Register
              </Link>
              <button
                style={{ color: '#1C1C28', background: 'transparent', border: 'none', cursor: 'pointer', padding: '10px', borderRadius: '8px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Full-screen mobile drawer (slide from right) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: '64px',
                background: 'rgba(28,28,40,0.42)',
                zIndex: 47,
              }}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              style={{
                position: 'fixed',
                top: '64px',
                right: 0,
                bottom: 0,
                width: 'min(85vw, 340px)',
                background: '#FFFFFF',
                zIndex: 48,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 32px rgba(28,28,40,0.12)',
              }}
            >
              {/* Nav links */}
              <div style={{ flex: 1, padding: '8px 0' }}>
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  const to = item.path ?? (item.subMenus?.[0]?.items?.[0]?.path ?? '/');
                  return (
                    <Link
                      key={item.id}
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 20px',
                        fontSize: '15px',
                        fontWeight: active ? 600 : 500,
                        fontFamily: 'Inter, sans-serif',
                        color: active ? '#0FA8DC' : '#1C1C28',
                        textDecoration: 'none',
                        borderBottom: '1px solid #F7F7F8',
                        minHeight: '50px',
                      }}
                    >
                      {active && (
                        <div style={{ width: '3px', height: '18px', borderRadius: '2px', background: '#0FA8DC', flexShrink: 0 }} />
                      )}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              {/* Login options */}
              <div style={{ borderTop: '1px solid #ECECF1', padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {loginOptions.map((opt) => (
                  <Link
                    key={opt.label}
                    to={opt.to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '11px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      color: '#5A5A6E',
                      textDecoration: 'none',
                      background: '#F7F7F8',
                      textAlign: 'center',
                    }}
                  >
                    {opt.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
