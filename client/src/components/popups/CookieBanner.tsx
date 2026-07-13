import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentShown = localStorage.getItem("cookieConsentShown") || localStorage.getItem("askreativ-cookies");
    if (!consentShown) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
    return;
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsentShown", "true");
    localStorage.setItem("askreativ-cookies", "accepted");
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem("cookieConsentShown", "true");
    localStorage.setItem("askreativ-cookies", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cookie-banner-container"
          data-testid="cookie-banner"
        >
          <p style={{ fontSize: "13px", color: "var(--fg-light)", marginBottom: "14px" }}>
            🍪 We use cookies to improve your experience and analyze site traffic.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={decline}
              style={{ flex: 1, padding: "8px", fontSize: "12px", color: "var(--fg-light)", border: "1px solid var(--border-c)", borderRadius: "50px", background: "none", cursor: "pointer", transition: "all 0.2s" }}
              data-testid="button-cookie-decline"
            >
              Decline
            </button>
            <button
              onClick={accept}
              style={{ flex: 1, padding: "8px", fontSize: "12px", background: "var(--orange)", color: "#fff", borderRadius: "50px", border: "2px solid var(--orange)", cursor: "pointer", fontWeight: 600, transition: "all 0.2s" }}
              data-testid="button-cookie-accept"
            >
              Accept All →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
