import { Shield, Lock, Eye, FileText, Mail, Phone, Cookie } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-200 transition-colors">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:opacity-100"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] transition-colors"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-[60px] -z-10 transition-colors"></div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 transition-colors">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Policy</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors">
                        At Blast Learning, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Section 1: Information We Collect */}
                    <section className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 mb-4">We may collect:</p>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {[
                                "Personal information (Name, Email, Phone Number)",
                                "Account login details",
                                "Payment information (processed securely via payment gateways)",
                                "Usage data and browsing behavior",
                                "Cookie and analytics data"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <span className="text-slate-700 dark:text-gray-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 2: Use of Cookies */}
                    <section className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Use of Cookies</h2>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 mb-6">We use cookies to improve your browsing experience.</p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Necessary Cookies",
                                    items: ["Required for:", "Secure login", "Consent preferences", "Basic website functionality"]
                                },
                                {
                                    title: "Functional Cookies",
                                    items: ["Used for:", "Sharing content", "Collecting feedback", "Enabling third-party features"]
                                },
                                {
                                    title: "Analytics Cookies",
                                    items: ["Used to:", "Track visitor behavior", "Analyze traffic sources", "Improve user experience"]
                                },
                                {
                                    title: "Performance Cookies",
                                    items: ["Used to measure:", "Website performance", "Key user experience metrics"]
                                },
                                {
                                    title: "Advertisement Cookies",
                                    items: ["Used to:", "Show personalized ads", "Analyze marketing effectiveness"]
                                }
                            ].map((cookieType, index) => (
                                <div key={index} className="border-b border-slate-100 dark:border-white/5 last:border-0 pb-6 last:pb-0">
                                    <h3 className="font-bold text-slate-800 dark:text-gray-200 mb-3">{cookieType.title}</h3>
                                    <ul className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 space-y-2">
                                        {cookieType.items.map((item, idx) => (
                                            <li key={idx} className={`${idx === 0 ? 'font-medium text-slate-900 dark:text-gray-200 mb-1' : 'text-slate-600 dark:text-gray-400 text-sm pl-4 relative before:content-[""] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-300 dark:before:bg-gray-600'}`}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-slate-500 dark:text-gray-500 italic">You may enable or disable cookies through your browser settings.</p>
                    </section>

                    {/* Section 3: How We Use Your Information */}
                    <section className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <Eye className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h2>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 mb-4">We use your data to:</p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Provide and improve our courses",
                                "Process payments",
                                "Communicate updates",
                                "Enhance user experience",
                                "Provide customer support"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 p-3 border border-slate-100 dark:border-white/5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                    <span className="text-slate-700 dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 4: Data Protection */}
                    <section className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Data Protection</h2>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                            We implement appropriate security measures to protect your personal information. However, no online transmission is 100% secure.
                        </p>
                    </section>

                    {/* Section 5: Contact Us */}
                    <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-lg shadow-blue-500/20">
                        <h2 className="text-2xl font-bold mb-6">5. Contact Us</h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <a href="mailto:aditya@blastlearning.in" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-blue-100 text-xs uppercase tracking-wider font-bold">Email</p>
                                    <p className="font-semibold">aditya@blastlearning.in</p>
                                </div>
                            </a>
                            <a href="tel:+919901008384" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-blue-100 text-xs uppercase tracking-wider font-bold">Phone</p>
                                    <p className="font-semibold">+91 99010 08384</p>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
