import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Check, Star, ArrowLeft } from 'lucide-react'
// GraduationCap, BookOpen, Trophy — only used by the hidden CBSE/English/SAT passes below. Re-add to the import above if those are re-enabled.

type SelectedPlanPayload = {
    planId: string
    planName: string
    billingPeriod: string
    price: string
}

type PricingPlansProps = {
    onSelectPlan?: (plan: SelectedPlanPayload) => void
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const incoming = location.state?.selectedPlan
    let paramPlanId = searchParams.get('planId')
    const paramBilling = searchParams.get('billing')

    // normalize paramPlanId to include leading '#'
    if (paramPlanId && !paramPlanId.startsWith('#')) paramPlanId = `#${paramPlanId}`

    const [billingPeriod, setBillingPeriod] = useState(incoming?.billingPeriod || paramBilling || 'monthly')
    const [selectedPlan, setSelectedPlan] = useState(incoming?.planId ?? (paramPlanId || null))

    useEffect(() => {
        // If navigated from signup with a selected plan, initialize selection
        if (incoming?.planId) {
            const normalized = incoming.planId.startsWith('#') ? incoming.planId : `#${incoming.planId}`
            setSelectedPlan(normalized)
            if (incoming.billingPeriod) setBillingPeriod(incoming.billingPeriod)
            return
        }
        // If planId present in query params, use it
        if (paramPlanId) {
            setSelectedPlan(paramPlanId)
            if (paramBilling) setBillingPeriod(paramBilling)
        }
    }, [incoming, paramPlanId, paramBilling])

    const additionalPasses = [
        // Hidden, not deleted — uncomment to re-enable.
        /*
        {
            id: '#4',
            name: 'CBSE Learning Pass',
            monthlyPrice: '₹1,299',
            yearlyPrice: '₹11,691',
            period: '/month',
            yearlyPeriod: '/year',
            features: [
                'CBSE Full Syllabus (Class 8–10)',
                'All Subjects Covered',
                'AI Study Buddy (24/7)',
                'Progress Tracking'
            ],
            icon: GraduationCap,
            iconColor: 'text-purple-600',
            colorWrapper: 'from-purple-500/5 to-purple-500/10',
            color: 'border-purple-500'
        },
        */
        {
            id: '#5',
            name: 'Math Genius Maker Pass',
            monthlyPrice: '₹999',
            yearlyPrice: '₹8,991',
            period: '/month',
            yearlyPeriod: '/year',
            features: [
                'AI Gap Assessment',
                'Personalized Math Lessons',
                'Targeted Practice & Quizzes',
                'Instant Doubt Solving'
            ],
            icon: Star,
            iconColor: 'text-blue-600',
            colorWrapper: 'from-blue-500/5 to-blue-500/10',
            color: 'border-blue-500'
        },
        // Hidden, not deleted — uncomment to re-enable.
        /*
        {
            id: '#6',
            name: 'English Mastery Pass',
            monthlyPrice: '₹999',
            yearlyPrice: '₹8,991',
            period: '/month',
            yearlyPeriod: '/year',
            features: [
                'Grammar, Writing & Reading',
                'Vocabulary & Comprehension',
                'Exam Practice',
                'AI Tutor Support'
            ],
            icon: BookOpen,
            iconColor: 'text-green-600',
            colorWrapper: 'from-green-500/5 to-green-500/10',
            color: 'border-green-500'
        },
        {
            id: '#7',
            name: 'SAT Prep Pass',
            monthlyPrice: '₹999',
            yearlyPrice: '₹8,991',
            period: '/month',
            yearlyPeriod: '/year',
            features: [
                'SAT Foundation Prep',
                'Math + Reading + Writing',
                'Adaptive Mock Tests',
                'AI Strategy Guidance'
            ],
            icon: Trophy,
            iconColor: 'text-orange-600',
            colorWrapper: 'from-orange-500/5 to-orange-500/10',
            color: 'border-orange-500'
        }
        */
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-200 pt-32 pb-12 px-4 transition-colors">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:opacity-100"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] transition-colors"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <button
                        onClick={() => navigate('/signup')}
                        className="absolute left-0 top-0 hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>

                    <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] text-[10px] uppercase block mb-4 transition-colors">Pricing Plans</span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight transition-colors">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-500">Learning Path</span>
                    </h1>
                    <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
                        Unlock your potential with plans designed for every stage of your journey.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-6 mb-16">
                    <span className={`text-sm font-bold transition-colors ${billingPeriod === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-gray-500'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                        className={`relative w-16 h-8 rounded-full transition-all duration-300 p-1 ${billingPeriod === 'yearly' ? 'bg-gradient-to-r from-blue-600 to-violet-600' : 'bg-slate-200 dark:bg-gray-700'}`}
                    >
                        <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-sm font-bold transition-colors ${billingPeriod === 'yearly' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-gray-500'}`}>
                        Yearly <span className="text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 px-2 py-0.5 rounded-full text-xs ml-2">Save 27%</span>
                    </span>
                </div>

                {/* Info Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedPlan ? 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-slate-100 dark:bg-gray-700/50 text-slate-400 dark:text-gray-400'}`}>
                            {selectedPlan ? <Check className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                        </div>
                        <div>
                            <p className="text-slate-900 dark:text-white font-bold transition-colors">{selectedPlan ? additionalPasses.find(p => p.id === selectedPlan)?.name : 'No plan selected'}</p>
                            <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors">{selectedPlan ? 'Great choice! Click continue to proceed.' : 'Please select a plan below to create your account.'}</p>
                        </div>
                    </div>

                    <button
                        disabled={!selectedPlan}
                        onClick={() => {
                            if (!selectedPlan) return
                            const selected = additionalPasses.find(p => p.id === selectedPlan)
                            if (!selected) return
                            const planPayload = {
                                planId: selected.id,
                                planName: selected.name,
                                billingPeriod,
                                price: billingPeriod === 'monthly' ? selected.monthlyPrice : selected.yearlyPrice
                            }
                            onSelectPlan?.(planPayload)
                            navigate(`/signup?planId=${encodeURIComponent(planPayload.planId)}&billing=${planPayload.billingPeriod}`, { state: { selectedPlan: planPayload } })
                        }}
                        className={`px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-lg ${selectedPlan
                            ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:scale-105'
                            : 'bg-slate-100 dark:bg-gray-800 text-slate-400 dark:text-gray-500 cursor-not-allowed border border-slate-200 dark:border-white/5'
                            }`}
                    >
                        Continue to Signup
                    </button>
                </div>

                {/* Plans Grid */}
                <div className={`grid gap-6 ${additionalPasses.length === 1 ? 'max-w-sm mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                    {additionalPasses.map(plan => (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`relative bg-white dark:bg-white/5 border rounded-3xl p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm group overflow-hidden shadow-sm dark:shadow-none ${selectedPlan === plan.id
                                ? `border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50 transform -translate-y-1`
                                : 'border-slate-200 dark:border-white/10 hover:border-blue-500/20 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10'
                                }`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.colorWrapper} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm dark:shadow-none`}>
                                    <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight min-h-[3.5rem] flex items-center transition-colors">{plan.name}</h3>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-slate-900 dark:text-white transition-colors">
                                            {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                        </span>
                                        <span className="text-slate-500 dark:text-gray-500 text-xs font-bold uppercase transition-colors">
                                            {billingPeriod === 'monthly' ? '/mon' : '/year'}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                                            <span className="text-slate-600 dark:text-gray-400 text-xs font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-gray-300 transition-colors uppercase-normal">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all border ${selectedPlan === plan.id
                                    ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25'
                                    : 'bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-gray-300 border-slate-200 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-white/10 group-hover:border-blue-500/30 dark:group-hover:border-white/20 group-hover:text-blue-600 dark:group-hover:text-white'}`}>
                                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-xs text-center text-slate-400 dark:text-gray-500 mt-12 font-medium tracking-wide transition-colors">
                    SECURE PAYMENTS  •  CANCEL ANYTIME  •  MONEY BACK GUARANTEE
                </p>
            </div>
        </div>
    )
}
