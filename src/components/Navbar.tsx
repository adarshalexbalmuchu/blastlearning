import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import blastLogo from '../assets/blast-logo.webp';

interface SubItem {
  label: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  path: string;
}

/* ── Premium inline SVG icons ─────────────────────────────────────────────── */
const IconBook = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 5C4 4.45 4.45 4 5 4H11V18.5C8.5 18 6 18 4 19V5Z" fill="#818CF8"/>
    <path d="M20 5C20 4.45 19.55 4 19 4H13V18.5C15.5 18 18 18 20 19V5Z" fill="#6366F1"/>
    <rect x="11" y="4" width="2" height="14.5" fill="#4338CA"/>
    <line x1="6" y1="8" x2="10" y2="8" stroke="#EEF2FF" strokeWidth="1" strokeLinecap="round"/>
    <line x1="6" y1="11" x2="9" y2="11" stroke="#EEF2FF" strokeWidth="1" strokeLinecap="round"/>
    <line x1="6" y1="14" x2="10" y2="14" stroke="#EEF2FF" strokeWidth="1" strokeLinecap="round"/>
    <line x1="14" y1="8" x2="18" y2="8" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    <line x1="14" y1="11" x2="17" y2="11" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    <line x1="14" y1="14" x2="18" y2="14" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const IconBulb = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C9.24 2 7 4.24 7 7C7 9.05 8.23 10.82 10 11.73V14C10 14.55 10.45 15 11 15H13C13.55 15 14 14.55 14 14V11.73C15.77 10.82 17 9.05 17 7C17 4.24 14.76 2 12 2Z" fill="#FCD34D"/>
    <rect x="10.5" y="15" width="3" height="1.5" rx="0.75" fill="#F59E0B"/>
    <rect x="11" y="17" width="2" height="1.5" rx="0.75" fill="#F59E0B"/>
    <line x1="9.5" y1="7" x2="11" y2="7" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="10.25" y1="6.25" x2="10.25" y2="7.75" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="13" y1="6.25" x2="14" y2="7.25" stroke="#92400E" strokeWidth="1.1" strokeLinecap="round"/>
    <line x1="14" y1="6.25" x2="13" y2="7.25" stroke="#92400E" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);

const IconPen = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M17.5 3L21 6.5L10.5 17L6 17.5L6.5 13L17.5 3Z" fill="#34D399"/>
    <path d="M17.5 3L21 6.5L19 8.5L15.5 5L17.5 3Z" fill="#059669"/>
    <path d="M6 17.5L6.5 13L10.5 17L6 17.5Z" fill="#047857"/>
    <line x1="15.5" y1="5" x2="19" y2="8.5" stroke="#065F46" strokeWidth="0.8"/>
    <line x1="4" y1="20.5" x2="12" y2="20.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTrophy = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M7 3H17V12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12V3Z" fill="#A78BFA"/>
    <path d="M4 3H7V8C5.5 8 4 6.5 4 5V3Z" fill="#7C3AED"/>
    <path d="M17 3H20V5C20 6.5 18.5 8 17 8V3Z" fill="#7C3AED"/>
    <rect x="11" y="17" width="2" height="2" rx="0.5" fill="#8B5CF6"/>
    <rect x="8.5" y="19" width="7" height="2" rx="1" fill="#7C3AED"/>
    <path d="M9.5 9.5L11 11L14.5 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconFAQ = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#DDD6FE"/>
    <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1"/>
    <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6D28D9" fontFamily="serif">?</text>
  </svg>
);

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
    path: '/programs',
    subMenus: [
      {
        title: '',
        items: [
          { label: 'CBSE Plan', description: 'Full CBSE syllabus for Class 10', icon: IconBook, iconBg: 'linear-gradient(135deg,#EEF2FF 0%,#E0E7FF 100%)', iconBorder: '#C7D2FE', path: '/programs/cbse-plan' },
          { label: 'Math Genius Maker', description: 'Gap assessment & targeted math practice', icon: IconBulb, iconBg: 'linear-gradient(135deg,#FFFBEB 0%,#FEF3C7 100%)', iconBorder: '#FDE68A', path: '/programs/math-genius' },
          { label: 'English Mastery', description: 'Grammar, comprehension & writing skills', icon: IconPen, iconBg: 'linear-gradient(135deg,#F0FDF4 0%,#DCFCE7 100%)', iconBorder: '#BBF7D0', path: '/programs/english-mastery' },
          { label: 'SAT Prep Pass', description: 'US college admission test preparation', icon: IconTrophy, iconBg: 'linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%)', iconBorder: '#DDD6FE', path: '/programs/sat-prep' },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Parents',
    path: '/for-parents',
  },
  {
    id: 4,
    label: 'Students',
    path: '/for-students',
  },
  {
    id: 5,
    label: 'Institutions',
    path: '/for-institutions',
  },
  {
    id: 7,
    label: 'Library',
    path: '/blog',
    subMenus: [
      {
        title: 'Library',
        items: [
          { label: 'FAQ', description: 'Common questions answered', icon: IconFAQ, iconBg: 'linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%)', iconBorder: '#DDD6FE', path: '/faq' },
        ],
      },
    ],
  },
  { id: 8, label: 'About us', path: '/about' },
  { id: 9, label: 'Contact', path: '/contact' },
];

const loginOptions = [
  { label: 'Student Login', to: '/login?role=student' },
  { label: 'Parent Login', to: '/login?role=parent' },
  { label: 'Tutor Login', to: '/login?role=tutor' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
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
        {/* Full-width bar: logo far-left, login far-right, nav+CTA hero-aligned center */}
        <div className="nav-inner-bar" style={{ position: 'relative', height: '64px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>

          {/* Logo — stays at far left, independent of hero container */}
          <Link to="/" className="flex items-center flex-shrink-0 nav-logo-link" style={{ textDecoration: 'none', position: 'relative', zIndex: 2, marginLeft: '66px' }}>
            <img src={blastLogo} alt="Blast Learning" className="nav-logo-img" style={{ height: '56px', width: 'auto' }} />
          </Link>

          {/* Nav items + Start Free Trial — absolutely centered in 1280px hero zone */}
          <div
            className="show-lg-flex"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '1280px',
              padding: '0 24px',
              boxSizing: 'border-box',
              alignItems: 'center',
              justifyContent: 'center',
              height: '64px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(9px, 1.1vw, 17px)', pointerEvents: 'auto' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: 'clamp(7px, 0.9vw, 15px)', listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => { setOpenMenu(item.id); setHoveredId(item.id); }}
                    onMouseLeave={() => { setOpenMenu(null); setHoveredId(null); }}
                  >
                    {item.subMenus ? (
                      <div
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '2px',
                          padding: '6px clamp(6px, 0.8vw, 14px)',
                          borderRadius: '99px',
                          color: '#5A5A6E',
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
                        <Link
                          to={item.path || '/'}
                          style={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '14px',
                            fontWeight: location.pathname === item.path ? 600 : 500,
                            fontFamily: 'Inter, sans-serif',
                            color: location.pathname === item.path ? '#0FA8DC' : '#5A5A6E',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`Open ${item.label} menu`}
                          className="flex items-center justify-center"
                          onClick={() => setOpenMenu((current) => (current === item.id ? null : item.id))}
                          style={{
                            position: 'relative',
                            zIndex: 1,
                            width: '20px',
                            height: '20px',
                            padding: 0,
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            color: '#5A5A6E',
                          }}
                        >
                          <ChevronDown
                            size={13}
                            style={{
                              transform: openMenu === item.id ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.25s',
                            }}
                          />
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.path || '/'}
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '6px clamp(6px, 0.8vw, 14px)',
                          borderRadius: '99px',
                          fontSize: '14px',
                          fontWeight: 500,
                          fontFamily: 'Inter, sans-serif',
                          color: location.pathname === item.path ? '#0FA8DC' : '#5A5A6E',
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
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
                                  {sub.items.map((subItem) => (
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
                                              width: '38px',
                                              height: '38px',
                                              borderRadius: '10px',
                                              border: `1px solid ${subItem.iconBorder}`,
                                              background: subItem.iconBg,
                                            }}
                                          >
                                            {subItem.icon}
                                          </div>
                                          <div>
                                            <p
                                              style={{
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#1C1C28',
                                                marginBottom: '2px',
                                                fontFamily: 'Inter, sans-serif',
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
                                  ))}
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

            {/* CTA + Login inline after nav items */}
            <div className="show-lg-flex items-center" style={{ gap: 'clamp(6px, 0.8vw, 12px)', flexShrink: 0, marginLeft: 'clamp(8px, 1.2vw, 20px)' }}>

              {/* Start Free Trial Button */}
              <Link
                to="/programs"
                className="cta cta-pink"
                style={{ padding: '9px clamp(12px, 1.2vw, 20px)', whiteSpace: 'nowrap', fontSize: 'clamp(12px, 0.85vw, 14px)' }}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
          </div>
          {/* ↑ closes the absolutely-centered nav+CTA overlay */}

          {/* Login — centered in the white gap to the right of the 1280px hero zone */}
          <div className="show-lg-flex items-center" style={{ marginLeft: 'auto', marginRight: 'calc((100vw - min(100vw, 1280px)) / 8)', position: 'relative', zIndex: 2 }}>
            <div style={{ position: 'relative' }}>
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0FA8DC'; (e.currentTarget as HTMLElement).style.color = '#0FA8DC'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#DCDCE5'; (e.currentTarget as HTMLElement).style.color = '#1C1C28'; }}
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
                        style={{ padding: '12px 16px', color: '#1C1C28', textDecoration: 'none', fontFamily: 'Inter, sans-serif', transition: 'background 0.15s, color 0.15s', display: 'block' }}
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
          </div>

          {/* Mobile: hamburger only */}
          <div className="hide-lg" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <button
              className="nav-mobile-menu-btn"
              style={{ color: '#1C1C28', background: 'transparent', border: 'none', cursor: 'pointer', padding: '10px', borderRadius: '8px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      </nav>

      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          height: '2px',
          width: `${scrollProgress * 100}%`,
          background: '#0FA8DC',
          zIndex: 51,
          borderRadius: '0 1px 1px 0',
          pointerEvents: 'none',
          transition: 'width 0.08s linear',
        }}
      />

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
                  const expanded = openMenu === item.id;

                  if (item.subMenus) {
                    const allSubItems = item.subMenus.flatMap((s) => s.items);
                    return (
                      <div key={item.id}>
                        {/* Parent row — tapping the label navigates, chevron toggles */}
                        <div style={{ display: 'flex', alignItems: 'center', borderBottom: expanded ? 'none' : '1px solid #F7F7F8' }}>
                          <Link
                            to={item.path ?? '/'}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '14px 20px',
                              fontSize: '15px',
                              fontWeight: active ? 600 : 500,
                              fontFamily: 'Inter, sans-serif',
                              color: active ? '#0FA8DC' : '#1C1C28',
                              textDecoration: 'none',
                              minHeight: '50px',
                            }}
                          >
                            {active && <div style={{ width: '3px', height: '18px', borderRadius: '2px', background: '#0FA8DC', flexShrink: 0 }} />}
                            {item.label}
                          </Link>
                          <button
                            onClick={() => setOpenMenu(expanded ? null : item.id)}
                            aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label}`}
                            style={{ padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', color: '#8E8EA0', display: 'flex', alignItems: 'center' }}
                          >
                            <ChevronDown size={16} style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                          </button>
                        </div>
                        {/* Sub-items */}
                        <AnimatePresence>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ overflow: 'hidden', background: '#F9FAFB', borderBottom: '1px solid #F7F7F8' }}
                            >
                              {allSubItems.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 20px 12px 32px',
                                    fontSize: '14px',
                                    fontWeight: location.pathname === sub.path ? 600 : 400,
                                    fontFamily: 'Inter, sans-serif',
                                    color: location.pathname === sub.path ? '#0FA8DC' : '#5A5A6E',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid #ECECF1',
                                  }}
                                >
                                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', border: `1px solid ${sub.iconBorder}`, background: sub.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    {sub.icon}
                                  </div>
                                  <div>
                                    <div style={{ fontWeight: 600, color: location.pathname === sub.path ? '#0FA8DC' : '#1C1C28', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>{sub.label}</div>
                                    <div style={{ fontSize: '12px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{sub.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      to={item.path ?? '/'}
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
                      {active && <div style={{ width: '3px', height: '18px', borderRadius: '2px', background: '#0FA8DC', flexShrink: 0 }} />}
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
