import { useState } from 'react';
import {
    Mail, Phone, MapPin, CheckCircle2, User,
    MessageSquare, Users, Zap
} from 'lucide-react';
import storyImage2 from '../assets/pages/expert-talk/students-learning-tablets.png';

const ExpertTalkPage = () => {
    type ExpertTalkFormData = {
        name: string
        email: string
        phone: string
        subject: string
        message: string
    }

    const [formData, setFormData] = useState<ExpertTalkFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate WhatsApp send
        setTimeout(() => {
            const { name, phone, subject, message } = formData;
            const waMsg = encodeURIComponent(
                `Hi, I'm ${name}. I'd like to talk to an expert about ${subject}. ${message} My phone: ${phone}`
            );
            window.open(`https://wa.me/919901008384?text=${waMsg}`, '_blank');
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 800);
    };

    return (
        <div className="et-root">
            {/* ===== HERO ===== */}
            <section className="et-hero">
                <div className="container et-hero-container">
                    <div className="et-hero-content">
                        {/* Back to Home removed as we now use the main Navbar */}
                        <div className="et-hero-badge">
                            <span className="purple-text">✨</span> Talk with Our Experts
                        </div>
                        <h1 className="et-hero-title">
                            Personalized Guidance for<br />
                            <span className="purple-text">Your Child's Future</span>
                        </h1>
                        <p className="et-hero-subtitle">
                            Our education experts are here to help you navigate
                            the CBSE curriculum and find the perfect learning path for your child.
                        </p>
                    </div>
                    <div className="et-hero-image">
                        <img src={storyImage2} alt="Expert support" />
                        <div className="et-online-badge">
                            <span className="pulse-dot"></span>
                            Experts Online Now
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FORM SECTION ===== */}
            <section className="et-form-section">
                <div className="container">
                    <div className="et-grid">
                        <div className="et-form-box">
                            <h2 className="section-title">Schedule a Consultation</h2>
                            <p className="section-sub">Fill in the details and our team will connect with you on WhatsApp.</p>

                            {submitted ? (
                                <div className="et-success">
                                    <CheckCircle2 size={48} color="#10B981" />
                                    <h3>Message Received!</h3>
                                    <p>An expert will reach out to you shortly on WhatsApp.</p>
                                </div>
                            ) : (
                                <form className="et-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label><User size={14} /> Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter full name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label><Mail size={14} /> Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label><Phone size={14} /> WhatsApp Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 00000 00000"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label><MessageSquare size={14} /> Interest</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="Course Inquiry">Course Inquiry</option>
                                                <option value="Pricing Help">Pricing Help</option>
                                                <option value="Demo Request">Demo Request</option>
                                                <option value="Career Guidance">Career Guidance</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label><MessageSquare size={14} /> Your Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your child's current grade and learning goals..."
                                            rows={5}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-submit" disabled={loading}>
                                        {loading ? 'Connecting...' : 'Connect with Expert via WhatsApp'}
                                        <Zap size={18} className="ml-2 inline" />
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="et-info-box">
                            <div className="info-item">
                                <div className="info-icon purple-bg"><Users size={20} /></div>
                                <div>
                                    <h4 className="info-title">Global Community</h4>
                                    <p className="info-desc">Join 10,000+ parents who trust Blast Learning.</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon blue-bg"><User size={20} /></div>
                                <div>
                                    <h4 className="info-title">Quick Response</h4>
                                    <p className="info-desc">Our experts typically respond within 15 minutes.</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon green-bg"><CheckCircle2 size={20} /></div>
                                <div>
                                    <h4 className="info-title">Top Rated Advice</h4>
                                    <p className="info-desc">Award-winning educational consultants at your service.</p>
                                </div>
                            </div>

                            <div className="contact-details">
                                <h4 className="info-title py-4">Direct Contact</h4>
                                <a href="mailto:info@blastlearning.com" className="contact-link">
                                    <Mail size={16} /> support@blastlearning.com
                                </a>
                                <a href="tel:+919901008384" className="contact-link">
                                    <Phone size={16} /> +91 9901008384
                                </a>
                                <div className="contact-link">
                                    <MapPin size={16} /> Bangalore, India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .et-root {
                    font-family: 'Inter', sans-serif;
                    background: #fff;
                    color: #1E293B;
                    transition: all 0.3s ease;
                }
                .dark .et-root {
                    background: #0a0f1c;
                    color: #F8FAFC;
                }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .purple-text { color: #A855F7; }
                .purple-bg { background: #F3E8FF; color: #9333EA; }
                .dark .purple-bg { background: #A855F720; color: #C084FC; }
                .blue-bg { background: #E0F2FE; color: #0EA5E9; }
                .dark .blue-bg { background: #0EA5E920; color: #38BDF8; }
                .green-bg { background: #DCFCE7; color: #10B981; }
                .dark .green-bg { background: #10B98120; color: #34D399; }

                /* HERO */
                .et-hero { padding: 120px 0 80px; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; }
                .dark .et-hero { background: #0f172a; border-bottom: 1px solid #ffffff10; }
                .et-hero-container { display: flex; align-items: center; gap: 80px; }
                .et-hero-content { flex: 1.2; }
                .et-hero-image { flex: 1; position: relative; }
                .et-hero-image img { width: 100%; border-radius: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
                .et-online-badge {
                    position: absolute;
                    bottom: 24px;
                    left: 24px;
                    background: #fff;
                    padding: 8px 16px;
                    border-radius: 999px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #10B981;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .dark .et-online-badge { background: #1e293b; color: #34D399; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #10B981;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .et-back-btn {
                    border: none;
                    background: #F1F5F9;
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: #64748B;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 32px;
                    text-decoration: none;
                    width: fit-content;
                }
                .et-hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    padding: 6px 16px;
                    border-radius: 999px;
                    font-weight: 700;
                    color: #A855F7;
                    margin-bottom: 24px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .dark .et-hero-badge { background: #ffffff05; color: #C084FC; box-shadow: none; border: 1px solid #ffffff10; }
                .et-hero-title { font-size: 48px; font-weight: 800; line-height: 1.2; margin-bottom: 24px; }
                .dark .et-hero-title { color: #fff; }
                .et-hero-subtitle { font-size: 18px; color: #64748B; max-width: 500px; }
                .dark .et-hero-subtitle { color: #94A3B8; }

                /* FORM SECTION */
                .et-form-section { padding: 100px 0; }
                .et-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; }
                .et-form-box { background: transparent; }
                .section-title { font-size: 32px; font-weight: 800; margin-bottom: 16px; }
                .dark .section-title { color: #fff; }
                .section-sub { color: #64748B; margin-bottom: 48px; }
                .dark .section-sub { color: #94A3B8; }
                
                .et-form { display: flex; flex-direction: column; gap: 24px; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .form-group { display: flex; flex-direction: column; gap: 8px; }
                .form-group label { font-weight: 700; font-size: 14px; color: #475569; display: flex; align-items: center; gap: 6px; }
                .dark .form-group label { color: #94A3B8; }
                .form-group input, .form-group select, .form-group textarea {
                    padding: 14px;
                    border: 2px solid #F1F5F9;
                    background: #F8FAFC;
                    border-radius: 12px;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.2s;
                    color: #1E293B;
                }
                .dark .form-group input, .dark .form-group select, .dark .form-group textarea {
                    background: #ffffff05;
                    border-color: #ffffff10;
                    color: #fff;
                }
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #A855F7; background: #fff; }
                .dark .form-group input:focus, .dark .form-group select:focus, .dark .form-group textarea:focus { border-color: #A855F7; background: #ffffff10; }
                
                .btn-submit {
                    background: #10B981;
                    color: white;
                    padding: 16px;
                    border-radius: 12px;
                    font-weight: 800;
                    border: none;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 20px;
                    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
                    transition: all 0.3s ease;
                }
                .btn-submit:hover { background: #059669; transform: translateY(-2px); }
                .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

                .et-success { text-align: center; padding: 40px; background: #F0FDF4; border-radius: 24px; border: 2px solid #DCFCE7; }
                .dark .et-success { background: #065F4620; border-color: #065F4640; }
                .et-success h3 { font-size: 24px; font-weight: 800; margin: 20px 0 10px; color: #065F46; }
                .dark .et-success h3 { color: #34D399; }
                .dark .et-success p { color: #94A3B8; }

                /* INFO BOX */
                .et-info-box { display: flex; flex-direction: column; gap: 32px; }
                .info-item { display: flex; gap: 20px; align-items: flex-start; }
                .info-icon { width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .info-title { font-size: 18px; font-weight: 800; margin-bottom: 4px; }
                .dark .info-title { color: #fff; }
                .info-desc { font-size: 14px; color: #64748B; }
                .dark .info-desc { color: #94A3B8; }
                
                .contact-details { margin-top: 20px; border-top: 1px solid #F1F5F9; }
                .dark .contact-details { border-top-color: #ffffff10; }
                .contact-link { display: flex; align-items: center; gap: 12px; font-weight: 700; color: #1E293B; text-decoration: none; margin-bottom: 16px; font-size: 15px; transition: color 0.2s; }
                .dark .contact-link { color: #CBD5E1; }
                .contact-link:hover { color: #A855F7; }

                @media (max-width: 1024px) {
                    .et-hero-container { flex-direction: column; text-align: center; }
                    .et-hero-content { display: flex; flex-direction: column; align-items: center; }
                    .et-hero-image { display: none; }
                    .et-grid { grid-template-columns: 1fr; }
                    .form-row { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default ExpertTalkPage;
