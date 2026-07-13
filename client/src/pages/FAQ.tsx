import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import HeroSection from "@/components/layout/HeroSection";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} 
      style={style}
    >
      {children}
    </motion.div>
  );
}

const faqs = [
  { q: "What services does ASKreativ provide?", a: "ASKreativ provides AI automation, digital marketing, SEO, website development, mobile apps, ERP systems, and traditional marketing." },
  { q: "How can digital marketing help my business?", a: "It improves online visibility, customer trust, and branding, and helps businesses attract more leads and enquiries." },
  { q: "Does ASKreativ provide automation in Hyderabad?", a: "Yes. We specialize in AI chatbots, WhatsApp automation, and CRM systems for businesses in Hyderabad." },
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy and usually takes 3 to 6 months to show significant improvements in search visibility." },
  { q: "Can ASKreativ help with traditional marketing?", a: "Yes. We provide offline marketing services including hoarding designs, banners, and local advertisements." },
  { q: "Do you build custom ERP and CRM systems?", a: "Yes. We build intelligent, custom management systems designed to centralize and automate business operations." },
  { q: "How does AI benefit my business?", a: "AI helps automate repetitive tasks, provides 24/7 customer support via chatbots, and optimizes data-driven marketing." },
  { q: "Why should I choose ASKreativ for my brand?", a: "We combine creativity, technology, and execution-focused strategies to build digital growth ecosystems." },
  { q: "How do I get started with ASKreativ?", a: "You can book a free consultation through our website or reach out to us for a customized proposal." },
  { q: "Does ASKreativ work with small businesses?", a: "Yes. We help businesses of all sizes, from startups to established enterprises, scale their digital presence." }
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--card-border)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "32px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontWeight: 800, fontSize: "18px", color: "var(--fg)", letterSpacing: "-0.01em", opacity: open ? 1 : 0.9 }}>{q}</span>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: open ? "var(--orange)" : "var(--muted-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#fff" : "var(--fg-light)", transition: "all 0.3s" }}>
          {open ? <span style={{ fontSize: "20px" }}>×</span> : <span style={{ fontSize: "20px" }}>+</span>}
        </div>
      </button>
      <AnimatePresence>
        {open && (
           <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
           >
             <div style={{ paddingBottom: "32px" }}>
               <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", margin: 0 }}>{a}</p>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { openModal } = useModal();
  useSEO({
    title: "FAQ | ASKreativ Global Solutions Hyderabad",
    description: "Clear insights into how ASKreativ engineers growth. Everything you need to understand our process, technology, and scale-up strategies."
  });

  return (
    <main>
      <h1 className="sr-only">Frequently Asked Questions | ASKreativ Global Solutions</h1>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection
        backgroundType="image"
        backgroundSrc="/Images/services-hero.jpeg"
        ctaText="Ask a Question"
        ctaOnClick={openModal}
      />

      {/* ── FAQ CONTENT ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
            <FadeUp>
              <div style={{ padding: "0 0 60px" }}>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="cta-banner" style={{ margin: "100px 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px" }}>
          <FadeUp>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: "24px", color: "#ffffff" }}>
              Still Have <span style={{ color: "#ffffff", opacity: 0.8 }}>Questions?</span>
            </h2>
            <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.85)", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
              Our experts are ready to build your custom digital strategy.
            </p>
            <button onClick={openModal} className="btn-primary" style={{ padding: "20px 48px", fontSize: "17px" }}>
              Get a Free Consultation <ArrowRight size={20} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
