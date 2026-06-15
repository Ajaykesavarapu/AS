import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, PenTool, Megaphone, ArrowRight, ChevronRight, BarChart3, Video } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import { homeContent } from "@/constants/siteData";
import HeroSection from "@/components/layout/HeroSection";

const services = homeContent.services.list.map(s => ({
  ...s,
  tags: ["Digital", "Growth", "Execution"], // Default tags if missing
}));

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

export default function Services() {
  const { openModal } = useModal();
  useSEO({
    title: "AI Automation, Digital Marketing & Development Solutions | ASKreativ",
    description: "ASKreativ Global Solutions is a high-growth digital execution engine in Hyderabad, built to turn visions into results through storytelling and strategic technology."
  });

  return (
    <main>
       {/* ── HERO ─────────────────────────────────────────────────────── */}
       <HeroSection
         backgroundType="image"
         backgroundSrc="/Images/services-hero.jpeg"
         ctaText="Explore Services"
         ctaOnClick={openModal}
       />

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="section" style={{ position: "relative" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px" }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.slug} delay={i * 0.08}>
                  <Link href={`/${s.slug}`} style={{ display: "block", height: "100%" }}>
                    <div className="card glass-card" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "48px 40px", borderRadius: "32px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)", transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
                        <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                          <Icon size={28} style={{ color: "var(--orange)" }} />
                        </div>
                        <h2 style={{ fontWeight: 800, fontSize: "22px", color: "var(--fg)", margin: 0, letterSpacing: "-0.02em" }}>{s.label}</h2>
                      </div>
                      
                      <p style={{ fontSize: "15px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "32px", flex: 1 }}>{s.desc}</p>
                      
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                        {s.tags.map((tag) => (
                          <span key={tag} style={{ padding: "6px 14px", fontSize: "11px", fontWeight: 700, background: "var(--muted-bg)", color: "var(--fg-light)", borderRadius: "50px", border: "1px solid var(--border-c)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--orange)", fontSize: "14px", fontWeight: 700 }}>
                        View Details <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="cta-banner" style={{ margin: "100px 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px" }}>
          <FadeUp>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: "24px" }}>
              Ready to Expand Your <br/><span>Digital Footprint?</span>
            </h2>
            <button onClick={openModal} className="btn-primary" style={{ padding: "20px 48px", fontSize: "17px" }}>
              Get a Proposal <ArrowRight size={20} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
