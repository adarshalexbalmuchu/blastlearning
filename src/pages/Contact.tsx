import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import BrandArc from '../components/BrandArc';
import BrandWhoosh from '../components/BrandWhoosh';
import HeadingMarker from '../components/HeadingMarker';

type Role = '' | 'parent' | 'student' | 'tutor' | 'school';

interface FormState {
  name: string;
  email: string;
  phone: string;
  role: Role;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  message?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2z' },
  { label: 'YouTube', href: 'https://youtube.com', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.4a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z' },
  { label: 'Twitter / X', href: 'https://twitter.com', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { label: 'LinkedIn', href: 'https://linkedin.com', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-.001 4.001A2 2 0 014 2z' },
  { label: 'WhatsApp', href: 'https://wa.me/911234567890', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z' },
];

// Web3Forms access key, set as VITE_WEB3FORMS_KEY at build time. When absent
// (local/demo builds) the form validates and shows success without sending.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  useSEO({
    title: 'Contact Us | Speak to a Learning Advisor · Blast Learning',
    description: 'Get in touch with the Blast Learning team. Have questions about our programs? Reach us via form, phone, or email we reply within 24 hours.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (!form.role) newErrors.role = 'Please select your role';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      if (ACCESS_KEY) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: ACCESS_KEY, ...form }),
        });
        const data = await res.json() as { success: boolean };
        if (!data.success) throw new Error('submission failed');
      }
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please email us directly at hello@blastlearning.in');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #ECECF1',
    background: '#FFFFFF',
    fontSize: '14px',
    color: '#1C1C28',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const errorMsgStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#F03C6F',
    fontFamily: 'Inter, sans-serif',
    marginTop: '4px',
  };

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', borderBottom: '1px solid #DAEEF6', paddingTop: '120px', paddingBottom: '80px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="Get in Touch" fontSize="12px" />
            <h1 style={{ fontSize: 'var(--fs-h1-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '20px', color: '#111111' }}>
              Contact Us
            </h1>
            <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>
              Have questions about our programs, or want to speak to a learning advisor? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '80px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '40px' }}
            className="grid-cols-2-lg"
          >
            {/* Contact Info */}
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <div style={{ padding: '32px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '28px' }}>Contact Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      content: (
                        <a href="mailto:hello@blastlearning.in" style={{ fontSize: '14px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                          hello@blastlearning.in
                        </a>
                      ),
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      content: (
                        <a href="tel:+911234567890" style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                          +91 123 456 7890
                        </a>
                      ),
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      content: <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p>,
                    },
                    {
                      icon: Clock,
                      label: 'Support Hours',
                      content: <p style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C28', fontFamily: 'Inter, sans-serif' }}>Mon-Sat, 9 AM - 9 PM IST</p>,
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#E0F5FC', color: '#0FA8DC' }}>
                        <Icon size={17} />
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', fontWeight: 500, marginBottom: '4px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #ECECF1' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, marginBottom: '14px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Follow Us</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{ width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', border: '1px solid #ECECF1', color: '#6B6B7B', textDecoration: 'none', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0FA8DC'; (e.currentTarget as HTMLElement).style.borderColor = '#0FA8DC'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B6B7B'; (e.currentTarget as HTMLElement).style.borderColor = '#ECECF1'; }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', background: '#FFFFFF', border: '1px solid #ECECF1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F5FC', color: '#0FA8DC' }}>
                  <MapPin size={22} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28' }}>Blast Learning HQ</p>
                  <p style={{ fontSize: '12px', marginTop: '4px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <div style={{ padding: '32px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', boxShadow: '0 2px 12px rgba(28,28,40,0.05)' }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', background: '#E0F5FC', color: '#0FA8DC' }}>
                      <Send size={26} />
                    </div>
                    <h2 style={{ fontSize: 'var(--fs-h3-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', marginBottom: '12px', color: '#111111' }}>Message Sent!</h2>
                    <p style={{ fontSize: '14px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                      Thank you for reaching out. Our team will get back to you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', marginBottom: '28px' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label htmlFor="contact-name" style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'err-name' : undefined}
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            style={{ ...inputStyle, borderColor: errors.name ? '#F03C6F' : '#ECECF1' }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = errors.name ? '#F03C6F' : '#0FA8DC'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? '#F03C6F' : '#ECECF1'; }}
                          />
                          {errors.name && <p id="err-name" role="alert" style={errorMsgStyle}>{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="contact-email" style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'err-email' : undefined}
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            style={{ ...inputStyle, borderColor: errors.email ? '#F03C6F' : '#ECECF1' }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = errors.email ? '#F03C6F' : '#0FA8DC'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? '#F03C6F' : '#ECECF1'; }}
                          />
                          {errors.email && <p id="err-email" role="alert" style={errorMsgStyle}>{errors.email}</p>}
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            style={inputStyle}
                            onFocus={(e) => { e.currentTarget.style.borderColor = '#0FA8DC'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = '#ECECF1'; }}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-role" style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>I am a *</label>
                          <select
                            id="contact-role"
                            name="role"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.role}
                            aria-describedby={errors.role ? 'err-role' : undefined}
                            value={form.role}
                            onChange={handleChange}
                            style={{ ...inputStyle, appearance: 'none', borderColor: errors.role ? '#F03C6F' : '#ECECF1' }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = errors.role ? '#F03C6F' : '#0FA8DC'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = errors.role ? '#F03C6F' : '#ECECF1'; }}
                          >
                            <option value="" style={{ background: '#FFFFFF' }}>Select role</option>
                            <option value="parent" style={{ background: '#FFFFFF' }}>Parent</option>
                            <option value="student" style={{ background: '#FFFFFF' }}>Student</option>
                            <option value="tutor" style={{ background: '#FFFFFF' }}>Tutor</option>
                            <option value="school" style={{ background: '#FFFFFF' }}>School / Institution</option>
                          </select>
                          {errors.role && <p id="err-role" role="alert" style={errorMsgStyle}>{errors.role}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-message" style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'err-message' : undefined}
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your child's learning needs, which program you're interested in, or any questions you have..."
                          style={{ ...inputStyle, resize: 'none', borderColor: errors.message ? '#F03C6F' : '#ECECF1' }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = errors.message ? '#F03C6F' : '#0FA8DC'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? '#F03C6F' : '#ECECF1'; }}
                        />
                        {errors.message && <p id="err-message" role="alert" style={errorMsgStyle}>{errors.message}</p>}
                      </div>
                      {submitError && <p role="alert" style={{ ...errorMsgStyle, textAlign: 'center' }}>{submitError}</p>}
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: submitting ? 'not-allowed' : 'pointer', background: '#0FA8DC', color: 'white', border: 'none', marginTop: '8px', opacity: submitting ? 0.7 : 1 }}
                      >
                        <Send size={16} /> {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Phone CTA */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#FFFFFF' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'var(--fs-h2-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', color: '#111111' }}>
            Prefer to Talk?
          </h2>
          <p style={{ color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '32px', fontSize: 'var(--fs-body)', lineHeight: 1.7 }}>
            Speak directly with a learning advisor who can assess your child's needs and recommend the right program.
          </p>
          <a
            href="tel:+911234567890"
            className="cta cta-blue"
            style={{ boxShadow: 'none' }}
          >
            <Phone size={20} /> +91 123 456 7890
          </a>
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#6B6B7B', fontFamily: 'Inter, sans-serif' }}>Available Mon-Sat, 9 AM - 9 PM IST</p>
        </motion.div>
      </section>
    </div>
  );
}
