import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("askreativ-exit-dismissed");
    if (dismissed) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setVisible(true);
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };

    setTimeout(() => {
      document.addEventListener("mouseleave", onMouseLeave);
    }, 5000);

    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  const dismiss = () => { sessionStorage.setItem("askreativ-exit-dismissed", "true"); setVisible(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(dismiss, 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99995] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#141630] border border-primary/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(232,119,34,0.15)]"
          >
            <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors" data-testid="button-close-exit-popup">
              <X size={18} />
            </button>
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-2xl font-display font-bold text-white mb-2">You're in!</p>
                <p className="text-muted-foreground">We'll send your free audit soon.</p>
              </div>
            ) : (
              <>
                <span className="text-xs font-mono text-primary tracking-widest uppercase mb-3 block">Wait! Before you go...</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Get a FREE Digital Growth Audit</h3>
                <p className="text-muted-foreground text-sm mb-6">for your business. No commitment. 100% free.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    data-testid="input-exit-name"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    data-testid="input-exit-email"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
                    data-testid="button-exit-submit"
                  >
                    → Claim Free Audit
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
