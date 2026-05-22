import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, GraduationCap, HeartPulse, Factory, Building2, ShoppingCart, Utensils, Cpu, Truck, Sparkles, Scale, Users, Sun } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import { industriesContent } from "@/constants/siteData";
import HeroSection from "@/components/layout/HeroSection";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
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
      />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          {/* Header */}
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h1 style={{ fontSize: "clamp(36px, 6vw, 48px)", fontWeight: 900, color: "var(--fg)", marginBottom: "24px", lineHeight: 1.2 }}>
                INDUSTRIES WE SERVE
              </h1>
            </div>
          </FadeUp>

          {/* Industries Grid */}
          <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {industriesContent.industries.map((industry, index) => (
                <div key={industry.title} style={{ 
                  background: "var(--card-bg)", 
                  borderRadius: "20px", 
                  padding: "24px", 
                  border: "1px solid var(--card-border)",
                  transition: "all 0.3s ease"
                }}>
                  <h3 style={{ 
                    fontSize: "18px", 
                    fontWeight: 800, 
                    color: "var(--fg)", 
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    {/* Industry-specific icons */}
                    {index === 0 && <GraduationCap size={20} color="var(--orange)" />} {/* Education */}
                    {index === 1 && <Sun size={20} color="var(--orange)" />} {/* Solar */}
                    {index === 2 && <HeartPulse size={20} color="var(--orange)" />} {/* Healthcare */}
                    {index === 3 && <Building2 size={20} color="var(--orange)" />} {/* Real Estate */}
                    {index === 4 && <Users size={20} color="var(--orange)" />} {/* Sports */}
                    {index === 5 && <Sparkles size={20} color="var(--orange)" />} {/* Startups */}
                    {index === 6 && <Building2 size={20} color="var(--orange)" />} {/* Local */}
                    {index === 7 && <Building2 size={20} color="var(--orange)" />} {/* Corporate */}
                    {index === 8 && <ShoppingCart size={20} color="var(--orange)" />} {/* E-commerce */}
                    {index === 9 && <Utensils size={20} color="var(--orange)" />} {/* Restaurants */}
                    {index === 10 && <Users size={20} color="var(--orange)" />} {/* Professional Services */}
                    {industry.title}
                  </h3>
                  <p style={{ 
                    fontSize: "15px", 
                    color: "var(--fg-light)", 
                    lineHeight: "1.7",
                    margin: 0
                  }}>
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* FAQs Section */}
          <section className="section" style={{ background: "var(--bg-alt)", padding: "80px 0" }}>
            <div className="container">
              <FadeUp>
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                  <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "var(--fg)", marginBottom: "16px" }}>
                    FAQs About Industries We Serve
                  </h2>
                </div>
              </FadeUp>

              <div style={{ 
                background: "var(--card-bg)", 
                borderRadius: "24px", 
                padding: "32px", 
                maxWidth: "800px",
                margin: "0 auto",
                border: "1px solid var(--card-border)"
              }}>
                {industriesContent.faqs.map((faq, index) => {
                  const [isOpen, setIsOpen] = useState(false);
                  return (
                    <div key={index} style={{ 
                      marginBottom: "24px",
                      paddingBottom: "20px",
                      borderBottom: index === industriesContent.faqs.length - 1 ? "none" : "1px solid var(--border-c)"
                    }}>
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center",
                        marginBottom: "8px",
                        cursor: "pointer"
                      }}>
                        <h3 style={{ 
                          fontSize: "16px", 
                          fontWeight: 700, 
                          color: "var(--fg)",
                          flex: 1
                        }}>
                          {faq.question}
                        </h3>
                        <div style={{ 
                          width: "32px", 
                          height: "32px", 
                          borderRadius: "50%", 
                          background: isOpen ? "var(--orange)" : "var(--muted-bg)", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          color: isOpen ? "#fff" : "var(--fg-light)", 
                          transition: "all 0.3s"
                        }}>
                          {isOpen ? <span style={{ fontSize: "20px" }}>×</span> : <span style={{ fontSize: "20px" }}>+</span>}
                        </div>
                      </div>
                      <div style={{ 
                        overflow: "hidden",
                        maxHeight: isOpen ? 500 : 0,
                        transition: "max-height 0.3s ease"
                      }}>
                        <p style={{ 
                          fontSize: "15px", 
                          color: "var(--fg-light)", 
                          lineHeight: "1.7",
                          margin: 0,
                          padding: isOpen ? "16px 0" : "0"
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
                
                {/* FAQ CTA Button */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: "32px"
                }}>
                  <button 
                    onClick={() => openModal()} 
                    className="btn-primary"
                    style={{ 
                      padding: "16px 32px", 
                      fontSize: "16px",
                      marginTop: "16px"
                    }}
                  >
                    {industriesContent.faqCta.description}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="cta-banner" style={{ margin: "80px 0" }}>
            <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 20px" }}>
              <FadeUp>
                <div>
                  <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, marginBottom: "24px" }}>Ready to Unleash Your Industry's Potential?</h2>
                  <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>Let's build an intelligent digital ecosystem that drives results for your specific business goals.</p>
                  <button onClick={openModal} className="btn-primary" style={{ padding: "18px 40px" }}>Book Industry Consultation <ArrowRight size={20} /></button>
                </div>
              </FadeUp>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}