import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle, Share2, Rss, Play, Send } from 'lucide-react';

type Role = '' | 'parent' | 'student' | 'tutor' | 'school';

interface FormState {
  name: string;
  email: string;
  phone: string;
  role: Role;
  message: string;
}

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

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[#1AAFCB]";
  const inputStyle = { borderColor: '#E2E8F0', fontFamily: 'Inter, sans-serif', color: '#0D1B2A' };

  return (
    <div className="pt-16 lg:pt-18">
      {/* Header */}
      <section className="py-20" style={{ background: '#F4F7FB' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: 'rgba(26,175,203,0.1)', color: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}>
            Get in Touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            Contact Us
          </h1>
          <p className="text-lg" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Have questions about our programs, or want to speak to a learning advisor? We're here to help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <div>
              <div className="bg-white rounded-2xl p-8 mb-6" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>Contact Information</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,175,203,0.1)' }}>
                      <Mail size={18} style={{ color: '#1AAFCB' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Email</p>
                      <a href="mailto:hello@blastlearning.in" className="text-sm font-semibold transition-colors hover:text-[#1AAFCB]" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>hello@blastlearning.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,175,203,0.1)' }}>
                      <Phone size={18} style={{ color: '#1AAFCB' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Phone</p>
                      <a href="tel:+911234567890" className="text-sm font-semibold transition-colors hover:text-[#1AAFCB]" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>+91 123 456 7890</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,175,203,0.1)' }}>
                      <MapPin size={18} style={{ color: '#1AAFCB' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Address</p>
                      <p className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,175,203,0.1)' }}>
                      <Clock size={18} style={{ color: '#1AAFCB' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Support Hours</p>
                      <p className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Mon–Sat, 9 AM – 9 PM IST</p>
                    </div>
                  </div>
                </div>
                {/* Social links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold mb-4" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Follow Us</p>
                  <div className="flex items-center gap-3">
                    {[Globe, MessageCircle, Share2, Rss, Play].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[#1AAFCB] hover:text-white"
                        style={{ background: '#F4F7FB', color: '#5A6A7A' }}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)', height: '240px', background: '#F4F7FB' }}>
                <div className="h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(26,175,203,0.1)' }}>
                    <MapPin size={24} style={{ color: '#1AAFCB' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold" style={{ color: '#0D1B2A', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Blast Learning HQ</p>
                    <p className="text-xs mt-1" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.08)' }}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(26,175,203,0.1)' }}>
                      <Send size={28} style={{ color: '#1AAFCB' }} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>Message Sent!</h2>
                    <p className="text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
                      Thank you for reaching out. Our team will get back to you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-1.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>I am a *</label>
                          <select
                            name="role"
                            required
                            value={form.role}
                            onChange={handleChange}
                            className={inputClass}
                            style={inputStyle}
                          >
                            <option value="">Select role</option>
                            <option value="parent">Parent</option>
                            <option value="student">Student</option>
                            <option value="tutor">Tutor</option>
                            <option value="school">School / Institution</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#0D1B2A', fontFamily: 'Inter, sans-serif' }}>Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your child's learning needs, which program you're interested in, or any questions you have..."
                          className={inputClass}
                          style={{ ...inputStyle, resize: 'none' }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-white text-sm font-semibold transition-colors hover:bg-[#148fa5] mt-2"
                        style={{ background: '#1AAFCB', fontFamily: 'Inter, sans-serif' }}
                      >
                        <Send size={16} /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speak to an Advisor */}
      <section className="py-16" style={{ background: '#F4F7FB' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0D1B2A' }}>
            Prefer to Talk?
          </h2>
          <p className="mb-6" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>
            Speak directly with a learning advisor who can assess your child's needs and recommend the right program.
          </p>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-colors hover:bg-[#148fa5]"
            style={{ background: '#1AAFCB', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Phone size={20} /> +91 123 456 7890
          </a>
          <p className="mt-4 text-sm" style={{ color: '#5A6A7A', fontFamily: 'Inter, sans-serif' }}>Available Mon–Sat, 9 AM – 9 PM IST</p>
        </div>
      </section>
    </div>
  );
}
