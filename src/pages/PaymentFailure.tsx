import { useNavigate, useSearchParams } from 'react-router-dom';
import { XCircle, RefreshCw, AlertCircle, MessageCircle, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function PaymentFailure() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const reason = params.get('reason');

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-white dark:bg-[#030712] px-4 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-red-500/5 dark:bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 dark:bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-xl w-full">
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl dark:shadow-none transition-all">

          {/* Error Icon Area */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-red-500/20 dark:bg-red-400/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
              <XCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Failed</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
              We couldn't process your transaction. Don't worry, your money is safe.
            </p>
          </div>

          {/* Error Reason Box */}
          <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/20 rounded-2xl p-6 mb-10 flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-900 dark:text-red-200 text-sm mb-1">What happened?</h4>
              <p className="text-red-700 dark:text-red-400/80 text-xs leading-relaxed">
                {reason || "The payment was declined by the bank or cancelled. Please check your card details and try again."}
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <button
              onClick={() => navigate('/contatct-us-to-talk-your-expect')}
              className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">Get Support</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">Back to Home</span>
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/plans')}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all group shadow-xl"
            >
              <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              Try Payment Again
            </button>
          </div>
        </div>

        {/* Footer info - security */}
        <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
          <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span>Payment Unsuccessful</span>
          </div>
        </div>
      </div>
    </div>
  );
}
