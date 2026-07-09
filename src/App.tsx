import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopBtn from './components/ScrollToTopBtn'
import WhatsAppFloat from './components/WhatsAppFloat'
import SodesCallback from './components/SodesCallback'
import Home from './pages/Home'

const Programs = lazy(() => import('./pages/Programs'))
const ProgramDetail = lazy(() => import('./pages/programs/ProgramDetail'))
const ForParents = lazy(() => import('./pages/ForParents'))
const ForStudents = lazy(() => import('./pages/ForStudents'))
const ForInstitutions = lazy(() => import('./pages/ForInstitutions'))
const About = lazy(() => import('./pages/About'))
const Library = lazy(() => import('./pages/Library'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ExpertTalkPage = lazy(() => import('./pages/ExpertTalkPage'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))
const PricingPlans = lazy(() => import('./pages/PricingPlans'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
const PaymentFailure = lazy(() => import('./pages/PaymentFailure'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

ReactGA.initialize('G-NGBCWMSFGQ')

type SelectedPlan = {
  planId: string
  planName: string
  billingPeriod: string
  price: string
}

function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '3px solid #ECECF1',
          borderTopColor: '#0FA8DC',
          animation: 'spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const [selectedPlanData, setSelectedPlanData] = useState<SelectedPlan | null>(null)

  const hideNavbar = ['/login', '/signup', '/privacy-policy', '/subscription/success', '/subscription/failed'].includes(location.pathname)
  const hideFooter = ['/login', '/signup', '/subscription/success', '/subscription/failed'].includes(location.pathname)
  const hideFloating = hideNavbar || hideFooter

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      page_location: window.location.href,
    })
  }, [location])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      {!hideNavbar && <Navbar />}

      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/for-parents" element={<ForParents />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-institutions" element={<ForInstitutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/contatct-us-to-talk-your-expect" element={<ExpertTalkPage />} />

            <Route path="/plans" element={<PricingPlans onSelectPlan={setSelectedPlanData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp onChangePlan={setSelectedPlanData} selectedPlan={selectedPlanData} />} />
            <Route path="/sodes/callback" element={<SodesCallback />} />
            <Route path="/subscription/success" element={<PaymentSuccess />} />
            <Route path="/subscription/failed" element={<PaymentFailure />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      {!hideFooter && <Footer />}
      {!hideFloating && <WhatsAppFloat />}
      {!hideFloating && <ScrollToTopBtn />}
    </div>
  )
}
