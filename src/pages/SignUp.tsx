import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { User, Mail, Lock, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { toast } from 'sonner'
import ReactGA from 'react-ga4'

type SelectedPlan = {
    planId: string
    planName: string
    billingPeriod: string
    price: string
}

type SignUpProps = {
    onChangePlan?: (plan: SelectedPlan) => void
    selectedPlan?: SelectedPlan | null
}

type SignUpFormData = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

type FormErrors = Record<string, string>

export default function SignUp({ onChangePlan, selectedPlan }: SignUpProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const incomingPlan = location.state?.selectedPlan
    const [searchParams] = useSearchParams()
    let paramPlanId = searchParams.get('planId')
    const paramBilling = searchParams.get('billing')

    const apiBaseUrl = import.meta.env.VITE_BACKEND_URL

    if (paramPlanId && !paramPlanId.startsWith('#')) paramPlanId = `#${paramPlanId}`

    // small local map of plans so direct links with ?planId= work
    const plansMap: Record<string, { planId: string; planName: string; monthlyPrice: string; yearlyPrice: string }> = {
        '#4': { planId: '#4', planName: 'CBSE Learning Pass', monthlyPrice: '₹1,299', yearlyPrice: '₹11,691' },
        '#5': { planId: '#5', planName: 'Math Genius Maker Pass', monthlyPrice: '₹999', yearlyPrice: '₹8,991' },
        '#6': { planId: '#6', planName: 'English Mastery Pass', monthlyPrice: '₹999', yearlyPrice: '₹8,991' },
        '#7': { planId: '#7', planName: 'SAT Prep Pass', monthlyPrice: '₹999', yearlyPrice: '₹8,991' }
    }

    // Build displayPlan from prop, incoming state, or query params
    let displayPlan: SelectedPlan | undefined = selectedPlan || incomingPlan
    if (!displayPlan && paramPlanId) {
        const p = plansMap[paramPlanId]
        if (p) {
            const billing = paramBilling || 'monthly'
            displayPlan = {
                planId: p.planId,
                planName: p.planName,
                billingPeriod: billing,
                price: billing === 'yearly' ? p.yearlyPrice : p.monthlyPrice
            }
        }
    }

    // ensure selectedPlan prop is maintained via onChangePlan if provided
    useEffect(() => {
        if (displayPlan && onChangePlan) onChangePlan(displayPlan)
    }, [displayPlan])
    const [formData, setFormData] = useState<SignUpFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [passwordStrength, setPasswordStrength] = useState(0)
    const [errors, setErrors] = useState<FormErrors>({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Calculate password strength
        if (name === 'password') {
            let strength = 0
            if (value.length >= 8) strength++
            if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++
            if (/\d/.test(value)) strength++
            if (/[!@#$%^&*]/.test(value)) strength++
            setPasswordStrength(strength)
        }
    }

    const validateForm = () => {
        const newErrors: FormErrors = {}
        if (!displayPlan) {
            toast.error('Please select a plan before continuing')
            return
        }
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Must contain uppercase, lowercase, and number'
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateForm()) return

        if (!displayPlan) {
            toast.error('Please select a plan before continuing')
            return
        }

        setIsSubmitting(true)

        const payload = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            plan: {
                planId: displayPlan.planId,
                planName: displayPlan.planName,
                planType: displayPlan.billingPeriod || 'monthly',
                amount: displayPlan.price.replace(/[₹,]/g, '')
            }
        }

        try {
            const res = await fetch(`${apiBaseUrl}icic/start-payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (!res.ok) {
                const errorText = await res.text()
                toast.error(errorText || 'Failed to start payment')
                setIsSubmitting(false)
                return
            }

            const data = await res.json()

            if (data?.paymentUrl) {
                // Track GA4 sign_up event
                ReactGA.event("sign_up", {
                    method: "email",
                    plan_name: displayPlan.planName,
                    plan_id: displayPlan.planId
                });

                //  Redirect to ICICI payment page
                window.location.href = data.paymentUrl
                return
            }

            toast.error('Payment URL not received from server')
            setIsSubmitting(false)

        } catch (err) {
            toast.error('Network error while starting payment')
            setIsSubmitting(false)
        }
    }


    const getPasswordStrengthColor = () => {
        if (passwordStrength === 0) return '#ECECF1'
        if (passwordStrength === 1) return '#F03C6F'
        if (passwordStrength === 2) return '#F59E0B'
        if (passwordStrength === 3) return '#0FA8DC'
        return '#16A34A'
    }

    const inputStyle = (hasError?: boolean): React.CSSProperties => ({
        fontFamily: "'Inter', sans-serif",
        fontSize: '15px',
        color: '#1C1C28',
        background: '#F7F7F8',
        border: `1.5px solid ${hasError ? '#F03C6F' : '#ECECF1'}`,
        padding: '13px 16px 13px 46px',
    })

    const handleInputFocus = (hasError?: boolean) => (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.style.borderColor = hasError ? '#F03C6F' : '#0FA8DC'
        e.currentTarget.style.background = '#FFFFFF'
    }

    const handleInputBlur = (hasError?: boolean) => (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.style.borderColor = hasError ? '#F03C6F' : '#ECECF1'
        e.currentTarget.style.background = '#F7F7F8'
    }

    return (
        <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center" style={{ padding: '40px 16px' }}>
            {/* Background Effects — brand tinted */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(15,168,220,0.10)' }}></div>
                <div className="absolute -bottom-24 -right-20 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(232,19,90,0.08)' }}></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C1C2808_1px,transparent_1px),linear-gradient(to_bottom,#1C1C2808_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"></div>
            </div>

            <div className="relative z-10" style={{ width: '100%', maxWidth: '620px' }}>
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 1.6rem + 1.8vw, 2.75rem)', lineHeight: 1.15, marginBottom: '14px' }}>
                        Create Your{' '}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#E8135A,#0FA8DC)' }}>Account</span>
                    </h3>
                    <p className="mx-auto" style={{ color: '#5A5A6E', fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: 1.6, maxWidth: '520px' }}>
                        Join thousands of students learning smarter with Blast Learning.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white relative overflow-hidden" style={{ border: '1px solid #ECECF1', borderRadius: '28px', boxShadow: '0 24px 60px -30px rgba(28,28,40,0.20)', padding: '40px' }}>

                    {/* Plan Section */}
                    {displayPlan ? (
                        <div className="relative" style={{ marginBottom: '32px', padding: '24px', borderRadius: '18px', background: 'linear-gradient(135deg,rgba(232,19,90,0.05),rgba(15,168,220,0.06))', border: '1px solid #F0E1E7' }}>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center" style={{ gap: '16px' }}>
                                <div className="flex" style={{ gap: '16px' }}>
                                    <div className="rounded-xl flex items-center justify-center shrink-0" style={{ width: '48px', height: '48px', background: 'rgba(15,168,220,0.10)', border: '1px solid rgba(15,168,220,0.20)' }}>
                                        <Star className="w-6 h-6" style={{ color: '#0FA8DC' }} />
                                    </div>
                                    <div>
                                        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '18px', color: '#1C1C28', marginBottom: '4px' }}>
                                            {displayPlan.planName}
                                        </h2>
                                        <p className="font-medium" style={{ color: '#E8135A', fontFamily: "'Inter', sans-serif" }}>
                                            {displayPlan.price} <span style={{ color: '#8E8EA0', fontSize: '14px' }}>/ {displayPlan.billingPeriod === 'yearly' ? 'year' : 'month'}</span>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigate('/plans', { state: { selectedPlan: displayPlan } })}
                                    className="rounded-lg font-semibold transition-all"
                                    style={{ padding: '8px 16px', fontSize: '14px', background: '#FFFFFF', color: '#0FA8DC', border: '1.5px solid rgba(15,168,220,0.35)', fontFamily: "'Inter', sans-serif" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#0FA8DC'; e.currentTarget.style.color = '#FFFFFF'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0FA8DC'; }}
                                >
                                    Change Plan
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="relative" style={{ marginBottom: '32px', padding: '24px', borderRadius: '18px', background: '#F7F7F8', border: '1px solid #ECECF1' }}>
                            <div className="flex items-center" style={{ gap: '16px' }}>
                                <div className="rounded-xl flex items-center justify-center shrink-0" style={{ width: '48px', height: '48px', background: '#ECECF1', border: '1px solid #E0E0E8' }}>
                                    <ShieldCheck className="w-6 h-6" style={{ color: '#8E8EA0' }} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold" style={{ color: '#1C1C28', fontFamily: "'Inter', sans-serif" }}>No plan selected</p>
                                    <p style={{ color: '#8E8EA0', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>Select a plan to unlock full access</p>
                                </div>
                                <button
                                    onClick={() => navigate('/plans')}
                                    className="rounded-lg font-semibold transition-all"
                                    style={{ padding: '8px 16px', fontSize: '14px', background: '#FFFFFF', color: '#1C1C28', border: '1.5px solid #DCDCE5', fontFamily: "'Inter', sans-serif" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0FA8DC'; e.currentTarget.style.color = '#0FA8DC'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#DCDCE5'; e.currentTarget.style.color = '#1C1C28'; }}
                                >
                                    Select Plan
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2" style={{ gap: '20px', marginBottom: '20px' }}>
                            {/* First Name */}
                            <div>
                                <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>First Name</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                                        <User className="w-5 h-5" style={{ color: errors.firstName ? '#E8135A' : '#8E8EA0' }} />
                                    </div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        autoComplete="given-name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full rounded-xl focus:outline-none transition-all"
                                        style={inputStyle(!!errors.firstName)}
                                        onFocus={handleInputFocus(!!errors.firstName)}
                                        onBlur={handleInputBlur(!!errors.firstName)}
                                    />
                                </div>
                                {errors.firstName && <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.firstName}</p>}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>Last Name</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                                        <User className="w-5 h-5" style={{ color: errors.lastName ? '#E8135A' : '#8E8EA0' }} />
                                    </div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full rounded-xl focus:outline-none transition-all"
                                        style={inputStyle(!!errors.lastName)}
                                        onFocus={handleInputFocus(!!errors.lastName)}
                                        onBlur={handleInputBlur(!!errors.lastName)}
                                    />
                                </div>
                                {errors.lastName && <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.lastName}</p>}
                            </div>
                        </div>

                        {/* Email Address */}
                        <div style={{ marginBottom: '20px' }}>
                            <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>Email Address</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                                    <Mail className="w-5 h-5" style={{ color: errors.email ? '#E8135A' : '#8E8EA0' }} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full rounded-xl focus:outline-none transition-all"
                                    style={inputStyle(!!errors.email)}
                                    onFocus={handleInputFocus(!!errors.email)}
                                    onBlur={handleInputBlur(!!errors.email)}
                                />
                            </div>
                            {errors.email && <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: '20px' }}>
                            <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>Password</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                                    <Lock className="w-5 h-5" style={{ color: errors.password ? '#E8135A' : '#8E8EA0' }} />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl focus:outline-none transition-all"
                                    style={inputStyle(!!errors.password)}
                                    onFocus={handleInputFocus(!!errors.password)}
                                    onBlur={handleInputBlur(!!errors.password)}
                                />
                            </div>

                            {formData.password && (
                                <div style={{ marginTop: '12px', marginLeft: '4px' }}>
                                    <div className="flex" style={{ gap: '6px', marginBottom: '8px' }}>
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 rounded-full transition-all duration-300"
                                                style={{ height: '6px', background: i < passwordStrength ? getPasswordStrengthColor() : '#ECECF1' }}
                                            />
                                        ))}
                                    </div>
                                    <p style={{ color: '#8E8EA0', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>
                                        Must be 8+ characters with uppercase, lowercase, and number
                                    </p>
                                </div>
                            )}
                            {errors.password && <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div style={{ marginBottom: '20px' }}>
                            <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>Confirm Password</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                                    <Lock className="w-5 h-5" style={{ color: errors.confirmPassword ? '#E8135A' : '#8E8EA0' }} />
                                </div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    autoComplete="new-password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl focus:outline-none transition-all"
                                    style={inputStyle(!!errors.confirmPassword)}
                                    onFocus={handleInputFocus(!!errors.confirmPassword)}
                                    onBlur={handleInputBlur(!!errors.confirmPassword)}
                                />
                            </div>
                            {errors.confirmPassword && <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.confirmPassword}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full text-white transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: '15px',
                                backgroundImage: 'linear-gradient(90deg,#E8135A,#0FA8DC)',
                                boxShadow: '0 14px 30px -12px rgba(232,19,90,0.45)',
                                padding: '15px',
                                borderRadius: '12px',
                                marginTop: '8px',
                            }}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Redirecting to payment...</span>
                                </>
                            ) : (
                                <>
                                    Checkout
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>


                        {/* Sign In Link */}
                        <p className="text-center" style={{ color: '#5A5A6E', fontSize: '14px', marginTop: '24px', fontFamily: "'Inter', sans-serif" }}>
                            Already have an account?{' '}
                            <a href="https://www.blastlearning.net/user/login" className="font-bold transition-colors" style={{ color: '#E8135A' }}>
                                Learner Login
                            </a>
                        </p>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center" style={{ color: '#8E8EA0', fontSize: '12px', marginTop: '24px', fontFamily: "'Inter', sans-serif" }}>
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    )
}
