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
    border: '1px solid #E8E4D8',
    background: '#FFFFFF',
    fontSize: '14px',
    color: '#1A1A2E',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ background: '#FAFAF7' }}>
      {/* Hero */}
      <section style={{ background: '#FAFAF7', borderBottom: '1px solid #E8E4D8', paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, fontFamily: 'DM Sans, sans-serif', marginBottom: '20px', background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
              Get in Touch
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em', marginBottom: '20px', color: '#1A1A2E' }}>
              Contact Us
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif' }}>
              Have questions about our programs, or want to speak to a learning advisor? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '80px', paddingBottom: '96px', background: '#F5F2EC' }}>
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
              <div style={{ padding: '32px', borderRadius: '20px', background: '#FFFFFF', border: '1px solid #E8E4D8', boxShadow: '0 4px 24px rgba(26,26,46,0.06)', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#1A1A2E', marginBottom: '28px' }}>Contact Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      content: (
                        <a href="mailto:hello@blastlearning.in" style={{ fontSize: '14px', fontWeight: 600, color: '#E8336B', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}>
                          hello@blastlearning.in
                        </a>
                      ),
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      content: (
                        <a href="tel:+911234567890" style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}>
                          +91 123 456 7890
                        </a>
                      ),
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      content: <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif' }}>Bangalore, Karnataka, India</p>,
                    },
                    {
                      icon: Clock,
                      label: 'Support Hours',
                      content: <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif' }}>Mon–Sat, 9 AM – 9 PM IST</p>,
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
                        <Icon size={17} />
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', fontWeight: 500, marginBottom: '4px', color: '#9A9AAA', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #E8E4D8' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, marginBottom: '14px', color: '#9A9AAA', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Follow Us</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {[Globe, MessageCircle, Share2, Rss, Play].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        style={{ width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', border: '1px solid #E8E4D8', color: '#9A9AAA', textDecoration: 'none', transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#E8336B'; (e.currentTarget as HTMLElement).style.borderColor = '#E8336B'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9A9AAA'; (e.currentTarget as HTMLElement).style.borderColor = '#E8E4D8'; }}
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', background: '#FFFFFF', border: '1px solid #E8E4D8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
                  <MapPin size={22} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Playfair Display, serif', color: '#1A1A2E' }}>Blast Learning HQ</p>
                  <p style={{ fontSize: '12px', marginTop: '4px', color: '#9A9AAA', fontFamily: 'DM Sans, sans-serif' }}>Bangalore, Karnataka, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
              <div style={{ padding: '32px', borderRadius: '20px', background: '#FFFFFF', border: '1px solid #E8E4D8', boxShadow: '0 4px 24px rgba(26,26,46,0.06)' }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', background: '#FFF0F5', border: '1px solid #F5C0D4', color: '#E8336B' }}>
                      <Send size={26} />
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', marginBottom: '12px', color: '#1A1A2E' }}>Message Sent!</h2>
                    <p style={{ fontSize: '14px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                      Thank you for reaching out. Our team will get back to you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#1A1A2E', marginBottom: '28px' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }} className="grid-cols-2-sm">
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>I am a *</label>
                          <select name="role" required value={form.role} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                            <option value="" style={{ background: '#FFFFFF' }}>Select role</option>
                            <option value="parent" style={{ background: '#FFFFFF' }}>Parent</option>
                            <option value="student" style={{ background: '#FFFFFF' }}>Student</option>
                            <option value="tutor" style={{ background: '#FFFFFF' }}>Tutor</option>
                            <option value="school" style={{ background: '#FFFFFF' }}>School / Institution</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: '#5A5A7A', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
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
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '9999px', fontSize: '15px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', background: '#E8336B', color: 'white', border: 'none', boxShadow: '0 4px 16px rgba(232,51,107,0.2)', marginTop: '8px' }}
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
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#1A1A2E' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', marginBottom: '16px', color: 'white' }}>
            Prefer to Talk?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Speak directly with a learning advisor who can assess your child's needs and recommend the right program.
          </p>
          <a
            href="tel:+911234567890"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', borderRadius: '9999px', fontSize: '18px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', background: '#E8336B', color: 'white', boxShadow: '0 4px 16px rgba(232,51,107,0.2)' }}
          >
            <Phone size={20} /> +91 123 456 7890
          </a>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans, sans-serif' }}>Available Mon–Sat, 9 AM – 9 PM IST</p>
        </motion.div>
      </section>
    </div>
  );
}
