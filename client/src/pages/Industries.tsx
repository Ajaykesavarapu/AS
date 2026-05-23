import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, GraduationCap, HeartPulse, Factory, Building2, ShoppingCart, Utensils, Cpu, Truck, Sparkles, Scale, Users, Sun } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import { industriesContent } from "@/constants/siteData";
import HeroSection from "@/components/layout/HeroSection";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export default function Industries() {
  const { openModal } = useModal();
  useSEO({
    title: "Business Industries We Serve | ASKreativ Hyderabad",
    description: "ASKreativ helps industries grow with digital marketing, automation, branding, websites, ERP systems, and mobile app development solutions.",
  });

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection
        backgroundType="image"
        backgroundSrc="/Images/industries-hero.jpeg"
        ctaText="Discuss Your Project"
        ctaOnClick={openModal}
      />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <section className="section" style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
        <div className="container">
          {/* Header */}
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <span className="section-tag" style={{ justifyContent: "center" }}>INDUSTRY EXPERTISE</span>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "var(--fg)", marginBottom: "24px", lineHeight: 1.15 }}>
                Tailored Solutions for <span style={{ color: "var(--orange)" }}>Every Sector</span>
              </h2>
            </div>
          </FadeUp>

          {/* Industries Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
            {industriesContent.industries.map((industry, index) => {
              const Icon = 
                index === 0 ? GraduationCap :
                index === 1 ? Sun :
                index === 2 ? HeartPulse :
                index === 3 ? Building2 :
                index === 4 ? Users :
                index === 5 ? Sparkles :
                index === 6 ? Building2 :
                index === 7 ? Building2 :
                index === 8 ? ShoppingCart :
                index === 9 ? Utensils : Users;

              return (
                <FadeUp key={industry.title} delay={index * 0.1} className="h-full">
                  <div 
                    className="glass-card group h-full flex flex-col"
                    style={{ 
                      padding: "40px", 
                    }}
                  >
                    <div style={{ 
                      width: "64px", 
                      height: "64px", 
                      borderRadius: "16px", 
                      background: "var(--orange-glass)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      marginBottom: "32px",
                      border: "1px solid var(--orange-border)",
                      transition: "all 0.3s ease"
                    }} className="group-hover:bg-[var(--orange)] text-[var(--orange)] group-hover:text-white">
                      <Icon size={32} />
                    </div>
                    <h3 style={{ 
                      fontSize: "22px", 
                      fontWeight: 800, 
                      color: "var(--fg)", 
                      marginBottom: "16px",
                      lineHeight: 1.3
                    }}>
                      {industry.title}
                    </h3>
                    <p style={{ 
                      fontSize: "16px", 
                      color: "var(--fg-light)", 
                      lineHeight: "1.7",
                      margin: 0,
                      opacity: 0.9,
                      flexGrow: 1
                    }}>
                      {industry.description}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-[var(--border-c)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button onClick={openModal} className="text-[var(--orange)] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        Learn More <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section" style={{ padding: "100px 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-tag" style={{ justifyContent: "center" }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "var(--fg)", marginBottom: "16px" }}>
                Common <span style={{ color: "var(--orange)" }}>Questions</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div style={{ 
              background: "var(--card-bg)", 
              borderRadius: "24px", 
              padding: "40px", 
              maxWidth: "850px",
              margin: "0 auto",
              border: "1px solid var(--card-border)",
              boxShadow: "0 10px 40px var(--shadow-sm)"
            }}>
              {industriesContent.faqs.map((faq, index) => {
                const [isOpen, setIsOpen] = useState(index === 0);
                return (
                  <div key={index} style={{ 
                    marginBottom: index === industriesContent.faqs.length - 1 ? 0 : "24px",
                    paddingBottom: index === industriesContent.faqs.length - 1 ? 0 : "24px",
                    borderBottom: index === industriesContent.faqs.length - 1 ? "none" : "1px solid var(--border-c)"
                  }}>
                    <button 
                      onClick={() => setIsOpen(!isOpen)}
                      style={{ 
                        width: "100%",
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: 0
                      }}
                    >
                      <h3 style={{ 
                        fontSize: "18px", 
                        fontWeight: 700, 
                        color: "var(--fg)",
                        paddingRight: "24px"
                      }}>
                        {faq.question}
                      </h3>
                      <motion.div 
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        style={{ 
                          width: "32px", 
                          height: "32px", 
                          borderRadius: "50%", 
                          background: isOpen ? "var(--orange)" : "var(--muted-bg)", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          color: isOpen ? "#fff" : "var(--orange)",
                          flexShrink: 0
                        }}
                      >
                        <span style={{ fontSize: "24px", lineHeight: 1 }}>+</span>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: "hidden" }}
                        >
                          <p style={{ 
                            fontSize: "16px", 
                            color: "var(--fg-light)", 
                            lineHeight: "1.8",
                            margin: 0,
                            paddingTop: "16px"
                          }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            {/* FAQ CTA Button */}
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <button 
                onClick={() => openModal()} 
                className="btn-outline"
                style={{ padding: "16px 36px", fontSize: "16px" }}
              >
                {industriesContent.faqCta.description}
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "40px 20px" }}>
        <div className="container" style={{
          background: "var(--orange)", borderRadius: "32px", padding: "80px 40px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%)" }} />
          <FadeUp>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#fff", marginBottom: "20px", position: "relative" }}>
              Ready to Unleash Your Industry's Potential?
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", marginBottom: "36px", maxWidth: "600px", margin: "0 auto", position: "relative" }}>
              Let's build an intelligent digital ecosystem that drives results for your specific business goals.
            </p>
            <button onClick={openModal} style={{
              background: "var(--bg)", color: "var(--orange)", padding: "18px 44px", borderRadius: "14px",
              fontSize: "17px", fontWeight: 800, border: "none", cursor: "pointer", position: "relative",
              display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "36px"
            }}>
              Book Industry Consultation <ArrowRight size={18} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}