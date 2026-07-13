import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Target, Lightbulb, Users, Zap, Star, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import { homeContent } from "@/constants/siteData";
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

const values = [
  { icon: Target, title: "Results over Noise", desc: "We prioritize execution and measurable growth rather than just conversations and digital noise." },
  { icon: Sparkles, title: "Intelligent Innovation", desc: "We combine creativity, technology, and AI to build future-ready digital systems." },
  { icon: Heart, title: "The Human Element", desc: "We believe in the vision and struggle behind every business we partner with." },
  { icon: ShieldCheck, title: "Trust & Transparency", desc: "We maintain clear communication and honest strategy across every phase of growth." },
];

const solutions = [
  { title: "Strategic Digital Marketing", desc: "Tailored marketing strategies designed for branding, reach, and lead generation." },
  { title: "AI & Automation", desc: "Automating lead management and workflows to help businesses scale efficiently." },
  { title: "Modern Web Development", desc: "Building fast, professional, and SEO-friendly websites as your digital home." },
  { title: "Branding & Identity", desc: "Creating creative visual identities that build customer trust and presence." }
];

export default function About() {
  const { openModal } = useModal();
  useSEO({
    title: "About ASKreativ Global Solutions | AI Digital Agency Hyderabad",
    description: "ASKreativ is an AI-powered digital growth company in Hyderabad. We combine creativity, AI, and strategy to build intelligent digital ecosystems.",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.askreativ.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.askreativ.in/about"
        }
      ]
    }
  });

  return (
    <main>
      <h1 className="sr-only">About ASKreativ Global Solutions | AI Digital Agency Hyderabad</h1>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <HeroSection
          backgroundType="image"
          backgroundSrc="/Images/about%20us.jpeg"
          ctaText="Connect with Us"
          ctaOnClick={openModal}
        />

      {/* ── INTELLIGENT ECOSYSTEMS ───────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-center">
            <FadeUp>
              <span className="section-tag">OUR APPROACH</span>
              <h2 className="section-title">Building Intelligent <span>Digital Ecosystems</span></h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{ fontSize: "18px", color: "var(--fg-light)", lineHeight: "1.8", margin: 0 }}>
                We combine creativity, technology, AI, and strategy to build intelligent digital ecosystems designed for visibility, efficiency, and long-term business growth. We don't just provide services; we build the machinery that powers your business’s digital future.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-24 items-center">
            <FadeUp>
              <span className="section-tag">OUR JOURNEY</span>
              <h2 className="section-title">From a Dream to <span>Digital Excellence</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ color: "var(--fg-light)", fontSize: "17px", lineHeight: "1.8" }}>
                  ASKreativ began with a vision to combine the power of storytelling with modern technology. We recognized that businesses were looking for growth partners who understood their struggles and shared their vision for something bigger.
                </p>
                <p style={{ color: "var(--fg-light)", fontSize: "17px", lineHeight: "1.8" }}>
                  Today, we stand as a leading AI-powered digital growth company, helping businesses scale through automation, branding, marketing, and modern digital ecosystems.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
               <div style={{ padding: "48px", borderRadius: "32px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)", position: "relative" }}>
                 <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--orange)", marginBottom: "16px", textTransform: "uppercase" }}>Impact Summary</div>
                 <h3 style={{ fontSize: "28px", fontWeight: 850, marginBottom: "32px" }}>Why visionary businesses choose us</h3>
                 <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                   {["AI-Powered Automation", "Strategic Storytelling", "Execution over Noise", "Intelligent Digital Ecosystems"].map(txt => (
                     <div key={txt} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                       <CheckCircle size={20} style={{ color: "var(--orange)" }} />
                       <span style={{ fontWeight: 600 }}>{txt}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </FadeUp>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>WHAT WE BELIEVE</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Our <span>Core Values</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="card glass-card" style={{ padding: "40px", height: "100%", borderRadius: "24px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", border: "1px solid var(--orange-border)" }}>
                      <Icon size={24} style={{ color: "var(--orange)" }} />
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: "19px", marginBottom: "12px" }}>{v.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{v.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CORE SOLUTIONS ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>OUR CORE SOLUTIONS</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Intelligent <span>Digital Machinery</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div style={{ padding: "40px", borderRadius: "24px", background: "var(--bg)", border: "1px solid var(--card-border)", height: "100%" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>{s.title}</h3>
                  <p style={{ color: "var(--fg-light)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="cta-banner" style={{ margin: "100px 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px" }}>
          <FadeUp>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: "24px", color: "#ffffff" }}>
              Ready to Unleash Your <br/><span style={{ color: "#ffffff", opacity: 0.8 }}>Digital Growth?</span>
            </h2>
            <button onClick={openModal} className="btn-primary" style={{ padding: "20px 48px", fontSize: "17px" }}>
              Book a Strategy Session <ArrowRight size={20} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
