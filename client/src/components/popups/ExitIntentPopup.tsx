import { useState, useEffect } from "react";
import { X, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/App";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)"
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass-card"
            style={{ 
              maxWidth: "540px", width: "100%", position: "relative", textAlign: "center",
              padding: "60px 48px", borderRadius: "40px", background: "var(--bg-glass-heavy)",
              border: "1px solid var(--card-border)", boxShadow: "0 50px 150px rgba(0,0,0,0.6)",
              backdropFilter: "blur(24px)"
            }}
          >
            <button
              onClick={() => setShow(false)}
              style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", cursor: "pointer", color: "var(--fg-lighter)", padding: "4px" }}
            >
              <X size={24} />
            </button>

            <div style={{ 
              width: "80px", height: "80px", borderRadius: "24px", 
              background: "var(--orange-glass)", display: "flex", alignItems: "center", 
              justifyContent: "center", margin: "0 auto 32px", color: "var(--orange)",
              border: "1px solid var(--orange-border)", boxShadow: "0 10px 40px var(--shadow-sm)"
            }}>
              <Zap size={40} fill="currentColor" />
            </div>

            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 950, color: "var(--fg)", marginBottom: "16px", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Wait! Your <span style={{ color: "var(--orange)" }}>Audit</span> Awaits.
            </h2>
            <p style={{ color: "var(--fg-light)", fontSize: "17px", lineHeight: "1.7", marginBottom: "40px", opacity: 0.8 }}>
              Get a <strong>Free 30-Minute Digital Growth Audit</strong>. We'll identify the invisible AI and marketing gaps holding your business back.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <button
                onClick={() => { setShow(false); openModal(); }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "20px", fontSize: "17px" }}
              >
                Claim My Free Audit <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setShow(false)}
                style={{ background: "none", border: "none", color: "var(--fg-lighter)", fontSize: "14px", cursor: "pointer", fontWeight: 500, opacity: 0.7 }}
              >
                Maybe later, just browsing
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
