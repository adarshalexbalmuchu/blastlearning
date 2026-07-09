import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, Rocket, ShieldCheck, Mail, Smartphone } from "lucide-react";

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const txnId = params.get("txnId");

  const redirectUrl = "https://www.blastlearning.net/user/auth-flow";

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-white dark:bg-[#030712] px-4 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-xl w-full">
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl dark:shadow-none transition-all">

          {/* Success Animation Area */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Successful!</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
              Your learning journey has officially begun. We've activated your full subscription.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex items-start gap-4 hover:border-emerald-500/30 transition-all group">
              <div className="bg-emerald-500/10 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Check Email</h4>
                <p className="text-slate-500 dark:text-gray-500 text-xs">Login details sent</p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5 flex items-start gap-4 hover:border-emerald-500/30 transition-all group">
              <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Instantly Active</h4>
                <p className="text-slate-500 dark:text-gray-500 text-xs">Access all features</p>
              </div>
            </div>
          </div>

          {txnId && (
            <div className="flex items-center justify-between mb-8 px-6 py-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-slate-300 dark:border-white/10">
              <span className="text-slate-500 dark:text-gray-500 text-sm font-medium uppercase tracking-widest">Transaction ID</span>
              <span className="text-slate-900 dark:text-cyan-400 font-mono font-bold text-sm tracking-tighter">{txnId}</span>
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={() => (window.location.href = redirectUrl)}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all group shadow-xl"
            >
              Start Learning Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-slate-400 dark:text-gray-500 text-sm font-medium">
              Redirecting to authentication...
            </p>
          </div>
        </div>

        {/* Footer info - security */}
        <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Blast Learning App</span>
          </div>
        </div>
      </div>
    </div>
  );
}
