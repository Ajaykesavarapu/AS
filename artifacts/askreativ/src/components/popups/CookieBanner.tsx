import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("askreativ-cookies");
    if (!accepted) setTimeout(() => setVisible(true), 2000);
  }, []);

  const accept = () => { localStorage.setItem("askreativ-cookies", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("askreativ-cookies", "declined"); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[99990] bg-[#141630]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
        >
          <p className="text-sm text-muted-foreground mb-4">
            🍪 We use cookies to improve your experience.
          </p>
          <div className="flex gap-2">
            <button
              onClick={decline}
              className="flex-1 py-2 text-xs text-muted-foreground border border-white/10 rounded-full hover:border-white/20 transition-colors"
              data-testid="button-cookie-decline"
            >
              Decline
            </button>
            <a
              href="#"
              className="py-2 px-3 text-xs text-muted-foreground hover:text-white transition-colors"
              data-testid="link-cookie-learn"
            >
              Learn More
            </a>
            <button
              onClick={accept}
              className="flex-1 py-2 text-xs bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold"
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
