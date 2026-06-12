import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTopBtn from './components/ScrollToTopBtn';

// Code-split all pages - only Home ships in the initial bundle
import Home from './pages/Home';

const Programs      = lazy(() => import('./pages/Programs'));
const ProgramDetail = lazy(() => import('./pages/programs/ProgramDetail'));
const ForParents    = lazy(() => import('./pages/ForParents'));
const ForStudents = lazy(() => import('./pages/ForStudents'));
const About       = lazy(() => import('./pages/About'));
const Library     = lazy(() => import('./pages/Library'));
const FAQ         = lazy(() => import('./pages/FAQ'));
const Contact     = lazy(() => import('./pages/Contact'));
const Login       = lazy(() => import('./pages/Login'));
const NotFound    = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page"
      style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '3px solid #E0F5FC', borderTopColor: '#0FA8DC', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      {/* Skip navigation for screen readers */}
      <a
        href="#main-content"
        style={{
          position: 'absolute', left: '-9999px', top: '8px', zIndex: 9999,
          padding: '8px 16px', background: '#0FA8DC', color: 'white',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
          borderRadius: '8px', textDecoration: 'none',
        }}
        onFocus={(e) => { e.currentTarget.style.left = '8px'; }}
        onBlur={(e) => { e.currentTarget.style.left = '-9999px'; }}
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" style={{ paddingBottom: '0' }} className="pb-20 md:pb-0">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"             element={<Home />} />
              <Route path="/programs"          element={<Programs />} />
              <Route path="/programs/:slug"    element={<ProgramDetail />} />
              <Route path="/for-parents"  element={<ForParents />} />
              <Route path="/for-students" element={<ForStudents />} />
              <Route path="/about"        element={<About />} />
              <Route path="/library"      element={<Library />} />
              <Route path="/faq"          element={<FAQ />} />
              <Route path="/contact"      element={<Contact />} />
              <Route path="/login"        element={<Login />} />
              <Route path="*"             element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTopBtn />
    </>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppLayout />
    </Router>
  );
}
