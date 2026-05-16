import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

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
    setTimeout(() => { document.addEventListener("mouseleave", onMouseLeave); }, 5000);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  const dismiss = () => { sessionStorage.setItem("askreativ-exit-dismissed", "true"); setVisible(false); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(dismiss, 2000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 16px", fontSize: "14px",
    background: "var(--bg-section)", color: "var(--fg)",
    border: "1px solid var(--border-c)", borderRadius: "10px",
    outline: "none", fontFamily: "Poppins, sans-serif",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{ position: "fixed", inset: 0, zIndex: 99995, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={dismiss} />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            style={{
              position: "relative", width: "100%", maxWidth: "420px",
              background: "var(--card-bg)", border: "1px solid var(--card-border)",
              borderRadius: "20px", padding: "36px", boxShadow: "0 20px 60px var(--shadow-md)",
            }}
          >
            <button
              onClick={dismiss}
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "var(--fg-light)", lineHeight: 1 }}
              data-testid="button-close-exit-popup"
            >
              <X size={18} />
            </button>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
                <p style={{ fontWeight: 700, fontSize: "22px", color: "var(--fg)", marginBottom: "6px" }}>You're in!</p>
                <p style={{ color: "var(--fg-light)", fontSize: "14px" }}>We'll send your free audit soon.</p>
              </div>
            ) : (
              <>
                <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--orange)", display: "block", marginBottom: "10px" }}>
                  Wait! Before you go...
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", marginBottom: "8px" }}>
                  Get a FREE Digital Growth Audit
                </h3>
                <p style={{ fontSize: "14px", color: "var(--fg-light)", marginBottom: "24px" }}>
                  For your business. No commitment. 100% free.
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    type="text" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name" style={inputStyle} required
                    data-testid="input-exit-name"
                  />
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email" style={inputStyle} required
                    data-testid="input-exit-email"
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: "center", padding: "14px" }}
                    data-testid="button-exit-submit"
                  >
                    Claim Free Audit <ArrowRight size={16} />
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
