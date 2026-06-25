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

const IconChart = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="13" width="4.5" height="8" rx="1" fill="#93C5FD"/>
    <rect x="9.75" y="8" width="4.5" height="13" rx="1" fill="#3B82F6"/>
    <rect x="16.5" y="4" width="4.5" height="17" rx="1" fill="#1D4ED8"/>
    <line x1="2" y1="21.5" x2="22" y2="21.5" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5.25 17L12 11.5L18.75 6" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
  </svg>
);

const IconChat = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H8L12 22L16 18H20C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4Z" fill="#FDA4AF"/>
    <path d="M12 14.5C12 14.5 8.5 12 8.5 9.5C8.5 8.12 9.62 7 11 7C11.7 7 12 7.4 12 7.4C12 7.4 12.3 7 13 7C14.38 7 15.5 8.12 15.5 9.5C15.5 12 12 14.5 12 14.5Z" fill="#F43F5E"/>
  </svg>
);

const IconClipboard = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="17" rx="2" fill="#5EEAD4"/>
    <rect x="9" y="2" width="6" height="4" rx="1" fill="#0D9488"/>
    <line x1="7" y1="10" x2="13" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="13.5" x2="13" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="17" x2="11" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 9L16.5 10.5L19 7.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconRobot = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="7" width="16" height="13" rx="3" fill="#C4B5FD"/>
    <rect x="7" y="10" width="10" height="7" rx="1.5" fill="#7C3AED"/>
    <circle cx="9.5" cy="12" r="1.2" fill="#DDD6FE"/>
    <circle cx="14.5" cy="12" r="1.2" fill="#DDD6FE"/>
    <circle cx="9.5" cy="12" r="0.5" fill="#5B21B6"/>
    <circle cx="14.5" cy="12" r="0.5" fill="#5B21B6"/>
    <path d="M9.5 14.5C9.5 14.5 10.5 15.5 12 15.5C13.5 15.5 14.5 14.5 14.5 14.5" stroke="#DDD6FE" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="11" y="4" width="2" height="3" rx="1" fill="#8B5CF6"/>
    <circle cx="12" cy="3.5" r="1.5" fill="#A78BFA"/>
    <circle cx="2.5" cy="11" r="1.5" fill="#8B5CF6"/>
    <circle cx="21.5" cy="11" r="1.5" fill="#8B5CF6"/>
  </svg>
);

const IconBooks = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="16" width="18" height="4" rx="1" fill="#FB923C"/>
    <rect x="3" y="16" width="2.5" height="4" rx="0.5" fill="#C2410C"/>
    <rect x="5" y="11" width="14" height="4" rx="1" fill="#F97316"/>
    <rect x="5" y="11" width="2.5" height="4" rx="0.5" fill="#C2410C"/>
    <rect x="7" y="6" width="10" height="4" rx="1" fill="#EA580C"/>
    <rect x="7" y="6" width="2.5" height="4" rx="0.5" fill="#9A3412"/>
  </svg>
);

const IconBolt = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L4 14H12L10 22L21 9H13L13 2Z" fill="#FCD34D"/>
    <path d="M13 2L13 9H21" stroke="#F59E0B" strokeWidth="0.8" fill="none" strokeLinejoin="round"/>
    <path d="M12 14L10 22" stroke="#F59E0B" strokeWidth="0.8" fill="none"/>
  </svg>
);

const IconBuilding = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="14" rx="1.5" fill="#67E8F9"/>
    <rect x="3" y="7" width="18" height="4" rx="1.5" fill="#06B6D4"/>
    <rect x="7" y="12" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8"/>
    <rect x="11" y="12" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8"/>
    <rect x="15" y="12" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8"/>
    <rect x="9" y="17" width="6" height="4" rx="0.5" fill="#0891B2"/>
    <rect x="10" y="3" width="4" height="4" rx="0.5" fill="#0EA5E9"/>
    <line x1="12" y1="3" x2="12" y2="7" stroke="#0284C7" strokeWidth="1"/>
  </svg>
);

const IconGradCap = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" fill="#4ADE80"/>
    <path d="M2 8.5L2 8.5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 10.5V16.5C18 16.5 15.5 19 12 19C8.5 19 6 16.5 6 16.5V10.5L12 14L18 10.5Z" fill="#22C55E"/>
    <line x1="22" y1="8.5" x2="22" y2="14" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="22" cy="14.5" r="1.5" fill="#16A34A"/>
  </svg>
);

const IconHandshake = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M2 9L7 6.5L10 9H14L17 6.5L22 9" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 6.5V17.5C7 17.5 9.5 19 12 19C14.5 19 17 17.5 17 17.5V6.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 9V14M14 9V14" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 13.5C8 13.5 9.5 15.5 12 15.5C14.5 15.5 16 13.5 16 13.5" stroke="#FED7AA" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const IconNewspaper = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="#E0F2FE"/>
    <rect x="3" y="4" width="18" height="5" rx="2" fill="#38BDF8"/>
    <rect x="3" y="4" width="18" height="2.5" rx="2" fill="#0284C7"/>
    <line x1="6" y1="13" x2="18" y2="13" stroke="#7DD3FC" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="6" y1="16" x2="18" y2="16" stroke="#7DD3FC" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="6" y1="19" x2="13" y2="19" stroke="#7DD3FC" strokeWidth="1.2" strokeLinecap="round"/>
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
          { label: 'CBSE Plan', description: 'Full CBSE syllabus for Classes 6-12', icon: IconBook, iconBg: 'linear-gradient(135deg,#EEF2FF 0%,#E0E7FF 100%)', iconBorder: '#C7D2FE', path: '/programs/cbse-plan' },
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
    subMenus: [
      {
        title: 'For Parents',
        items: [
          { label: 'Parent Dashboard', description: 'Real-time progress & retention tracking', icon: IconChart, iconBg: 'linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 100%)', iconBorder: '#BFDBFE', path: '/for-parents' },
          { label: 'Tutor Mom Support', description: 'Expert human support Mon-Sat 9am-9pm', icon: IconChat, iconBg: 'linear-gradient(135deg,#FFF1F2 0%,#FFE4E6 100%)', iconBorder: '#FECDD3', path: '/for-parents' },
          { label: 'Daily Reports', description: 'Daily digest, alerts & weekly trends', icon: IconClipboard, iconBg: 'linear-gradient(135deg,#F0FDFA 0%,#CCFBF1 100%)', iconBorder: '#99F6E4', path: '/for-parents' },
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
          { label: 'AI Study Planner', description: 'Personalized daily study schedule', icon: IconRobot, iconBg: 'linear-gradient(135deg,#FAF5FF 0%,#F3E8FF 100%)', iconBorder: '#E9D5FF', path: '/for-students' },
          { label: 'Resource Library', description: 'Videos, notes & practice quizzes', icon: IconBooks, iconBg: 'linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%)', iconBorder: '#FED7AA', path: '/for-students' },
          { label: 'Focus Trainer', description: 'Proven focus & retention techniques', icon: IconBolt, iconBg: 'linear-gradient(135deg,#FEFCE8 0%,#FEF9C3 100%)', iconBorder: '#FEF08A', path: '/for-students' },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'Institutions',
    subMenus: [
      {
        title: 'For Institutions',
        items: [
          { label: 'School Partnerships', description: 'Bulk enrollment & custom programs for schools', icon: IconBuilding, iconBg: 'linear-gradient(135deg,#ECFEFF 0%,#CFFAFE 100%)', iconBorder: '#A5F3FC', path: '/contact' },
          { label: 'Batch Programs', description: 'Group learning plans for student cohorts', icon: IconGradCap, iconBg: 'linear-gradient(135deg,#F0FDF4 0%,#DCFCE7 100%)', iconBorder: '#BBF7D0', path: '/programs' },
          { label: 'Partnership Enquiry', description: 'Talk to our institution success team', icon: IconHandshake, iconBg: 'linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%)', iconBorder: '#FED7AA', path: '/contact' },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Resources',
    subMenus: [
      {
        title: 'Resources',
        items: [
          { label: 'Blog', description: 'Articles, tips & learning insights', icon: IconNewspaper, iconBg: 'linear-gradient(135deg,#E0F2FE 0%,#BAE6FD 100%)', iconBorder: '#7DD3FC', path: '/blog' },
          { label: 'Resource Library', description: 'Videos, notes & practice quizzes', icon: IconBooks, iconBg: 'linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%)', iconBorder: '#FED7AA', path: '/library' },
          { label: 'FAQs', description: 'Common questions answered', icon: IconFAQ, iconBg: 'linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%)', iconBorder: '#DDD6FE', path: '/faq' },
        ],
      },
    ],
  },
  { id: 7, label: 'About us', path: '/about' },
  { id: 8, label: 'Contact', path: '/contact' },
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
        <div style={{ display: 'flex', alignItems: 'center', height: '64px', padding: '0 24px', justifyContent: 'space-between' }}>
          
          {/* Logo - Far Left with margin right */}
          <Link to="/" className="flex items-center flex-shrink-0" style={{ textDecoration: 'none', marginRight: '40px', marginLeft: '90px' }}>
            <img src={blastLogo} alt="Blast Learning" style={{ height: '56px', width: 'auto' }} />
          </Link>

          {/* Desktop Nav - Center Spread */}
          <div className="show-lg-flex items-center" style={{ gap: '16px', flex: 1, justifyContent: 'center' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
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
                          padding: '6px 14px',
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
            </div>

            {/* Right End - CTA + Login */}
            <div className="show-lg-flex items-center" style={{ gap: '12px', flexShrink: 0, marginRight: '35px' }}>

              {/* Start Free Trial Button */}
              <Link
                to="/programs"
                className="cta cta-pink"
                style={{ marginRight: '35px', padding: '9px 20px' }}
              >
                Start Free Trial
              </Link>

              {/* Login Dropdown */}
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
                  background: '#0FA8DC',
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
