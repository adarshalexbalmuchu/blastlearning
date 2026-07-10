import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react'

type LoginFormData = {
  email: string
  password: string
}

type FormErrors = Record<string, string>

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      // TODO: Replace with actual API call
      // Redirect to plans page after successful login
      navigate('/plans')
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden" style={{ padding: '24px 16px' }}>

      {/* Background Ambience — brand tinted */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(15,168,220,0.10)' }}></div>
        <div className="absolute -bottom-24 -right-16 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(232,19,90,0.08)' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C1C2808_1px,transparent_1px),linear-gradient(to_bottom,#1C1C2808_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"></div>
      </div>

      <div className="relative z-10" style={{ width: '100%', maxWidth: '440px' }}>

        {/* Heading */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#1C1C28', letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 1.6rem + 1.4vw, 2.5rem)', lineHeight: 1.15, marginBottom: '10px' }}>
            Learner{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#E8135A,#0FA8DC)' }}>Login</span>
          </h1>
          <p style={{ color: '#5A5A6E', fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.5 }}>
            Enter your details to access your learning dashboard
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white transition-all duration-300"
          style={{ border: '1px solid #ECECF1', borderRadius: '24px', boxShadow: '0 24px 60px -30px rgba(28,28,40,0.20)', padding: '36px' }}
        >
          {/* Email */}
          <div style={{ marginBottom: '22px' }}>
            <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>
              Email Address
            </label>
            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                <Mail className="w-5 h-5 transition-colors" style={{ color: errors.email ? '#E8135A' : '#8E8EA0' }} />
              </div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl focus:outline-none transition-all"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  color: '#1C1C28',
                  background: '#F7F7F8',
                  border: `1.5px solid ${errors.email ? '#F03C6F' : '#ECECF1'}`,
                  padding: '13px 16px 13px 46px',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = errors.email ? '#F03C6F' : '#0FA8DC'; e.currentTarget.style.background = '#FFFFFF'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? '#F03C6F' : '#ECECF1'; e.currentTarget.style.background = '#F7F7F8'; }}
              />
            </div>
            {errors.email && (
              <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div style={{ marginBottom: '16px' }}>
            <label className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#1C1C28', marginBottom: '8px', marginLeft: '4px' }}>
              Password
            </label>

            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" style={{ paddingLeft: '16px' }}>
                <Lock className="w-5 h-5 transition-colors" style={{ color: errors.password ? '#E8135A' : '#8E8EA0' }} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-xl focus:outline-none transition-all"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  color: '#1C1C28',
                  background: '#F7F7F8',
                  border: `1.5px solid ${errors.password ? '#F03C6F' : '#ECECF1'}`,
                  padding: '13px 46px 13px 46px',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = errors.password ? '#F03C6F' : '#0FA8DC'; e.currentTarget.style.background = '#FFFFFF'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.password ? '#F03C6F' : '#ECECF1'; e.currentTarget.style.background = '#F7F7F8'; }}
              />

              {/* Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center transition-colors"
                style={{ color: '#8E8EA0', paddingRight: '16px' }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {errors.password && (
              <p style={{ color: '#E8135A', fontSize: '12px', marginTop: '8px', marginLeft: '4px', fontWeight: 500 }}>{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end" style={{ marginBottom: '24px' }}>
            <Link
              to="/forgot-password"
              className="transition font-medium"
              style={{ color: '#0FA8DC', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <a
            href="https://www.blastlearning.net/user/login"
            className="w-full text-white transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '15px',
              backgroundImage: 'linear-gradient(90deg,#E8135A,#0FA8DC)',
              boxShadow: '0 14px 30px -12px rgba(232,19,90,0.45)',
              padding: '15px',
              borderRadius: '12px',
            }}
          >
            Learner Login
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>

          {/* Footer */}
          <p className="text-center" style={{ color: '#5A5A6E', fontFamily: "'Inter', sans-serif", fontSize: '14px', marginTop: '24px' }}>
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-bold transition-colors"
              style={{ color: '#E8135A' }}
            >
              Create free account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )

}
