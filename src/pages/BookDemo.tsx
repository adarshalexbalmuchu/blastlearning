import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Play, CheckCircle2, X, User, Mail, Phone,
    Video, Clock, ArrowRight, Star,
    Zap, GraduationCap, BookOpen, Trophy
} from 'lucide-react';
import image1 from "../assets/thumbnails/image1.png";
import image2 from "../assets/thumbnails/image2.png";
import image3 from "../assets/thumbnails/image3.png";
import image4 from "../assets/thumbnails/image4.png";

const BookDemo = () => {
    type DemoVideo = {
        title: string
        description: string
        duration: string
        thumbnail: string
        category: string
        videoUrl: string
    }

    type DemoFormData = {
        fullName: string
        email: string
        phone: string
    }

    type FormErrors = Record<string, string>

    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [activeVideo, setActiveVideo] = useState<DemoVideo | null>(null);

    const videoSections = [
        {
            title: "Mindcoach Course Creation",
            description: "Discover how Mindcoach empowers educators to create dynamic, AI-powered courses with ease.",
            duration: "3:31",
            thumbnail: image4,
            category: "Mindcoach Course Creation",
            videoUrl: "/videos/Mindcoach Course.mp4" // Example URL
        },
        {
            title: "Genius Maker",
            description: "Explore Genius Maker — an advanced interactive math platform designed to simplify complex concepts and provide instant doubt resolution",
            duration: "2:01",
            thumbnail: image2,
            category: "Genius Maker",
            videoUrl: "/videos/Genius Maker.mp4"
        },
        {
            title: "The AI Learning Experience",
            description: "Watch how our AI tutor adapts to your pace in real-time.",
            duration: "1:28",
            thumbnail: image1,
            category: "Blast Learning",
            videoUrl: "/videos/Blast Learning.mp4"
        },
        {
            title: "UI INTERFACE",
            description: "Take a complete walkthrough of our intuitive user interface, featuring seamless navigation, engaging visuals, and a user-friendly design built to enhance the overall learning experience.",
            duration: "1:27",
            thumbnail: image3,
            category: "UI INTERFACE",
            videoUrl: "/videos/UI interface.mp4"
        },

    ];

    const [formData, setFormData] = useState<DemoFormData>({
        fullName: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        const tempErrors: FormErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (formData.phone.replace(/\D/g, '').length < 10) {
            tempErrors.phone = "Enter a valid 10-digit phone number";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Construct message
        const message = `Hello Blast Learning Team,\n\nI would like to schedule a demo for your courses.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nPlease let me know the available slots.\n\nBest regards,\n${formData.fullName}`;

        // Email URL (Primary as requested)
        const mailtoUrl = `mailto:support@blastlearning.in?subject=Demo Request: ${formData.fullName}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoUrl;

        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 5000);

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: ''
        });
    };

    return (
        <div className="bg-white dark:bg-[#030712] text-slate-900 dark:text-white min-h-screen overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-500 font-['Outfit',_sans-serif]">

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl animate-in fade-in duration-300">
                    <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20 group"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                        </button>
                        <video
                            className="w-full h-auto max-h-[85vh] bg-black"
                            controls
                            autoPlay
                            src={activeVideo.videoUrl}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setActiveVideo(null)}></div>
                </div>
            )}

            {/* Header / Logo removed as we now use the main Navbar */}

            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Hero Section */}
            <section className="max-w-[1440px] mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">
                    {/* Left Content - Increased Depth */}
                    <div className="xl:flex-1 max-w-3xl text-center xl:text-left">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-cyan-600 dark:text-cyan-400 text-sm font-black tracking-widest mb-10 uppercase backdrop-blur-md shadow-lg">
                            <Zap className="w-4 h-4 fill-cyan-400" />
                            Revolutionize Your Learning Journery
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black text-slate-900 dark:text-white leading-[0.95] mb-10 tracking-tight">
                            Unlock Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Genetic Potential</span>
                        </h1>

                        <div className="space-y-6 text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto xl:ml-0 mb-12">
                            <p className="font-medium">
                                Blast Learning is not just an app—it's a cognitive revolution. Harnessing 25+ years of research and the latest in Generative AI, we teach you <span className="text-blue-500 dark:text-cyan-400 font-bold">how to learn</span>, ensuring 100% concept mastery.
                            </p>
                            <p className="text-base">
                                Join 100,000+ students across India who are saving 45% of their study time while achieving higher board scores.  Experience the patented methodology used by IBM and McGraw Hill.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto xl:ml-0">
                            {[
                                { id: "#4", icon: GraduationCap, title: "CBSE Full Pass", desc: "Class 8–10 Comprehensive" },
                                { id: "#5", icon: Star, title: "Math Genius Maker", desc: "Personalized Math Pass" },
                                { id: "#6", icon: BookOpen, title: "English Mastery", desc: "Grammar & Skills Pass" },
                                { id: "#7", icon: Trophy, title: "SAT Prep Pass", desc: "Global Exam Mastery" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => navigate(`/signup?planId=${encodeURIComponent(item.id)}`)}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                                        <item.icon className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-xs text-slate-500 dark:text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center xl:justify-start gap-5">
                            <button
                                onClick={() => navigate('/signup')}
                                className="bg-[#3BB4E5] hover:bg-[#319cc7] text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-[0_10px_30px_rgba(59,180,229,0.3)] hover:scale-105 active:scale-95 flex items-center gap-3 group"
                            >
                                Get Started Now
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <img key={i} src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" alt="user" />
                                    ))}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-gray-400 font-bold">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="w-3 h-3 fill-yellow-500" />
                                        4.9/5 Rating
                                    </div>
                                    Join 100K+ Students
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Enlarged Video Section */}
                    <div className="xl:flex-1 w-full max-w-[800px]">
                        <div className="relative p-2 sm:p-4 rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 shadow-2xl overflow-hidden group">
                            {/* Main Video Overlay Effect */}
                            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 p-4 sm:p-6 bg-white/70 dark:bg-[#030712]/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10">
                                {videoSections.map((video, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveVideo(video)}
                                        className="bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group/video hover:-translate-y-2 shadow-xl cursor-pointer"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 transform transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-blue-600/20">
                                                    <Play className="w-8 h-8 text-white fill-white" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 text-[11px] font-black text-white backdrop-blur-sm flex items-center gap-1.5">
                                                <Clock className="w-3 h-3" />
                                                {video.duration}
                                            </div>
                                            <div className="absolute top-2 left-4 
                                            px-4 py-1.5 
                                            rounded-full 
                                            bg-blue-600/90 
                                            text-xs font-semibold 
                                            text-white 
                                            backdrop-blur-md 
                                            uppercase 
                                            tracking-wide 
                                            shadow-md">
                                                {video.category}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover/video:text-blue-500 transition-colors">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
                                                {video.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Coming Soon Card */}
                                {/* <div className="bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-white/20 transition-all shadow-xl relative group/coming">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                                        <div className="relative z-10 text-center">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/30 dark:border-white/20">
                                                <Video className="w-10 h-10 text-slate-400 dark:text-gray-500" />
                                            </div>
                                            <div className="px-4 py-2 rounded-full bg-purple-600/80 text-white text-xs font-black uppercase tracking-wider inline-block">
                                                Coming Soon
                                            </div>
                                        </div>
                                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-600 text-[10px] font-black text-white backdrop-blur-sm uppercase tracking-tighter">
                                            New Content
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                                            More Exciting Content
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
                                            Stay tuned for more amazing features and student success stories.
                                        </p>
                                    </div>
                                </div> */}
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-full border border-white/20 scale-150 rotate-12">
                                    <Video className="w-12 h-12 text-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: What you'll learn in the demo */}
            {/* <section className="max-w-7xl mx-auto px-6 py-20 relative z-10 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 italic">What to expect inside?</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Personalized Roadmap", desc: "We'll analyze your current prep status and create a custom schedule." },
                                { title: "AI Interaction", desc: "Get a live walkthrough of our AI tutor 'Buddy' and see how it solves doubts." },
                                { title: "Exclusive Resources", desc: "Unlock premium CBSE question banks only available to demo participants." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="text-white font-black text-xl">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-500 dark:text-gray-400 text-lg">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full"></div>
                            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
                                <MessageSquareQuote className="w-12 h-12 text-blue-500 mb-6" />
                                <p className="text-xl font-medium text-slate-600 dark:text-gray-400 leading-relaxed italic mb-8">
                                    "The demo changed my perspective on boards. I finally stopped worrying about memorizing and started focusing on understanding. The AI is like having a teacher who never sleeps."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full ring-4 ring-blue-500/20" alt="avatar" />
                                    <div>
                                        <h4 className="font-black text-slate-900 dark:text-white">Ananya Verma</h4>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Class 12, CBSE Topper</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Form Section */}
            <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
                <div className="bg-slate-900 dark:bg-[#0f172a] rounded-[3.5rem] shadow-[0_40px_100px_-20_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="p-8 sm:p-20 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight italic">Claim Your Learning <br /> Breakthrough.</h2>
                            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Our experts will guide you through the future of education. Slots are limited per week.</p>
                        </div>

                        {isFormSubmitted ? (
                            <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                                <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                                    <CheckCircle2 className="w-12 h-12" />
                                </div>
                                <h3 className="text-4xl font-black text-white mb-4">Request Confirmed!</h3>
                                <p className="text-gray-400 text-lg">Check your WhatsApp for the scheduling details.</p>
                            </div>
                        ) : (
                            <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Your Identity</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-gray-600 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter full name"
                                            className={`w-full bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-2xl py-5 pl-14 pr-6 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold`}
                                        />
                                        {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1 font-bold italic">{errors.fullName}</p>}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Connection</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <Mail className="w-5 h-5 text-gray-600 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@gmail.com"
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl py-5 pl-14 pr-6 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-bold italic">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">WhatsApp Connectivity</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <Phone className="w-5 h-5 text-gray-600 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 00000 00000"
                                            className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-2xl py-5 pl-14 pr-6 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1 font-bold italic">{errors.phone}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="md:col-span-2 bg-[#3BB4E5] hover:bg-[#319cc7] text-white font-black py-6 rounded-2xl transition-all shadow-[0_20px_40px_rgba(59,180,229,0.3)] hover:scale-[1.02] active:scale-95 text-xl mt-6 uppercase tracking-widest"
                                >
                                    Schedule a Demo
                                </button>
                                <p className="md:col-span-2 text-center text-xs font-bold text-gray-600 uppercase tracking-[0.1em]">
                                    No credit card required. Private 1-on-1 sessions.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDemo;
