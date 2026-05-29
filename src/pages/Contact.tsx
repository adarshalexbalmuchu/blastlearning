import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle, Share2, Rss, Play, Send } from 'lucide-react';

type Role = '' | 'parent' | 'student' | 'tutor' | 'school';

interface FormState {
  name: string;
  email: string;
  phone: string;
  role: Role;
  message: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.85)',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ background: '#07111F' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#07111F', paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none', willChange: 'transform' }} />
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', marginBottom: '20px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
              Get in Touch
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', marginBottom: '20px', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Contact Us
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
              Have questions about our programs, or want to speak to a learning advisor? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '80px', paddingBottom: '96px', background: '#0a1628' }}>
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
              <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '28px' }}>Contact Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { icon: Mail, label: 'Email', content: <a href="mailto:hello@blastlearning.in" style={{ fontSize: '14px', fontWeight: 600, color: '#06B6D4', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>hello@blastlearning.in</a> },
                    { icon: Phone, label: 'Phone', content: <a href="tel:+911234567890" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>+91 123 456 7890</a> },
                    { icon: MapPin, label: 'Address', content: <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p> },
                    { icon: Clock, label: 'Support Hours', content: <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>Mon–Sat, 9 AM – 9 PM IST</p> },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                        <Icon size={17} />
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', fontWeight: 500, marginBottom: '4px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, marginBottom: '14px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Follow Us</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {[Globe, MessageCircle, Share2, Rss, Play].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        style={{ width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.15)'; (e.currentTarget as HTMLElement).style.color = '#06B6D4'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4' }}>
                  <MapPin size={22} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.85)' }}>Blast Learning HQ</p>
                  <p style={{ fontSize: '12px', marginTop: '4px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <div style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(6,182,212,0.3)', color: '#06B6D4' }}>
                      <Send size={26} />
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '12px', background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Message Sent!</h2>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                      Thank you for reaching out. Our team will get back to you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '28px' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>I am a *</label>
                          <select name="role" required value={form.role} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                            <option value="" style={{ background: '#0a1628' }}>Select role</option>
                            <option value="parent" style={{ background: '#0a1628' }}>Parent</option>
                            <option value="student" style={{ background: '#0a1628' }}>Student</option>
                            <option value="tutor" style={{ background: '#0a1628' }}>Tutor</option>
                            <option value="school" style={{ background: '#0a1628' }}>School / Institution</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your child's learning needs, which program you're interested in, or any questions you have..."
                          style={{ ...inputStyle, resize: 'none' }}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'Inter, sans-serif', cursor: 'pointer', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white', border: 'none', marginTop: '8px' }}
                      >
                        <Send size={16} /> Send Message
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
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '96px', paddingBottom: '96px', background: '#07111F' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(6,182,212,0.07), rgba(59,130,246,0.05), rgba(139,92,246,0.07))', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '350px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: 'relative', maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em', marginBottom: '16px', background: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.8))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Prefer to Talk?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Speak directly with a learning advisor who can assess your child's needs and recommend the right program.
          </p>
          <a
            href="tel:+911234567890"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', borderRadius: '9999px', fontSize: '18px', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)', color: 'white' }}
          >
            <Phone size={20} /> +91 123 456 7890
          </a>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>Available Mon–Sat, 9 AM – 9 PM IST</p>
        </motion.div>
      </section>
    </div>
  );
}
