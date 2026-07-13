import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette,
  PenTool, Megaphone, ArrowRight, ChevronRight, Star, CheckCircle,
  BarChart3, Video, Lightbulb, Zap, TrendingUp
} from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import { homeContent, siteConfig } from "@/constants/siteData";
import HeroSection from "@/components/layout/HeroSection";

// ── ASSETS ───────────────────────────────────────────────────────────
import igniteLogo from "@/assets/ignite_logo.jpg";
import zenithhLogo from "@/assets/zenithh_logo.png";
import rooftopLogo from "@/assets/rooftop_urja_logo.png";

// ── DATA ─────────────────────────────────────────────────────────────
// Data is now imported from @/constants/siteData

import blogAi from "@/assets/blog_ai.png";
import blogSeo from "@/assets/blog_seo.png";

const recentBlogs = [
  {
    tag: "SEO",
    title: "AS Kreativ Helps You Rank Number One on Google with SEO Services",
    date: "May 2026",
    slug: "search-engine-optimization",
    img: blogSeo
  },
  {
    tag: "AI & Marketing",
    title: "AI in Digital Marketing Services: How AS Kreativ Helps Businesses Grow",
    date: "May 2026",
    slug: "ai-digital-marketing-services",
    img: blogAi
  },
];

const clients = [
  { name: "Ignite Junior College", logo: igniteLogo },
  { name: "Zenithh Sports Arena", logo: zenithhLogo },
  { name: "Rooftop Urja", logo: rooftopLogo },
];

// ── HELPER COMPONENTS ─────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "", style, amount = 30 }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: amount }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} 
      className={className} 
      style={style}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--border-c)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", padding: "28px 0", background: "none", border: "none", cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--fg)" }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ fontSize: "28px", color: "var(--orange)", flexShrink: 0, lineHeight: 1 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", margin: 0, paddingBottom: "28px" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RotatingText() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % homeContent.hero.rotatingWords.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        style={{ display: "inline-block", color: "var(--orange)" }}
      >
        {homeContent.hero.rotatingWords[idx]}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Home() {
  const { openModal } = useModal();
  useSEO({
    title: "AI Automation & Digital Marketing Agency Hyderabad",
    description: "ASKreativ is an AI automation and digital marketing agency in Hyderabad, helping businesses with SEO, branding, websites, ERP systems, and apps."
  });

  return (
    <main>
       <h1 className="sr-only">AI Automation & Digital Marketing Agency Hyderabad | ASKreativ</h1>
       {/* ═══════════════════════════════════════════════════════════════
           HERO — Modern hero with left-aligned text and right-stat cards
       ═══════════════════════════════════════════════════════════════ */}
       <HeroSection
         backgroundType="video"
         backgroundSrc="/hero-video.mp4"
         ctaText="Get Started"
         ctaOnClick={openModal}
       />

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES — Shiftwave-style: horizontal scrolling card grid
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>{homeContent.services.tag}</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "var(--fg)", marginBottom: "20px", lineHeight: 1.15 }}>
              {homeContent.services.title.split("&")[0]} <span style={{ color: "var(--orange)" }}>& {homeContent.services.title.split("&")[1]}</span>
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "18px", color: "var(--fg-light)", lineHeight: "1.7", opacity: 0.9 }}>
              {homeContent.services.description}
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
            {homeContent.services.list.map((s: any, i: number) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.label} delay={i * 0.08} amount={40}>
                  <Link href={`/${s.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{
                      padding: "40px 32px", height: "100%", borderRadius: "24px",
                      background: "var(--card-bg)", border: "1px solid var(--card-border)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", cursor: "pointer",
                      display: "flex", flexDirection: "column",
                    }} className="card glass-card">
                      <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", border: "1px solid var(--orange-border)" }}>
                        <Icon size={28} style={{ color: "var(--orange)" }} />
                      </div>
                      <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--fg)" }}>{s.label}</h3>
                      <p style={{ fontSize: "15px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0, flex: 1, opacity: 0.85 }}>{s.desc}</p>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CLIENT LOGOS — Shiftwave-style: large, clear, centered strip
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>OUR CLIENTS</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.15 }}>
              Trusted by <span style={{ color: "var(--orange)" }}>Visionary Brands</span>
            </h2>
          </FadeUp>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 p-6 md:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]">
            {clients.map((c) => (
              <FadeUp key={c.name} delay={0.1}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "140px", height: "140px", borderRadius: "20px",
                    background: "var(--card-bg)", border: "1px solid var(--border-c)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "16px", overflow: "hidden",
                  }}>
                    <img
                      src={c.logo}
                      alt={c.name}
                      loading="lazy"
                      style={{
                        maxWidth: "100%", maxHeight: "100%", objectFit: "contain",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--fg)", textAlign: "center" }}>{c.name}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT / STATS — Clean two-column layout
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <FadeUp>
              <span className="section-tag">{homeContent.about.tag}</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "var(--fg)", marginBottom: "28px", lineHeight: 1.15 }}>
                Building Smarter Digital Growth for <span style={{ color: "var(--orange)" }}>Modern Businesses</span>
              </h2>
              <p style={{ fontSize: "17px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "24px" }}>
                {homeContent.about.description1}
              </p>
              <p style={{ fontSize: "17px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "36px" }}>
                {homeContent.about.description2}
              </p>
              <Link href="/about" className="btn-primary" style={{ display: "inline-flex" }}>
                {homeContent.about.cta} <ArrowRight size={18} />
              </Link>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                {homeContent.stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    style={{
                      padding: "36px 28px", borderRadius: "20px",
                      background: "var(--card-bg)", border: "1px solid var(--card-border)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "42px", fontWeight: 950, color: "var(--orange)", marginBottom: "8px", letterSpacing: "-0.03em" }}>{s.num}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg-lighter)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY US — Shiftwave-style: numbered or icon grid
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>{homeContent.whyUs.tag}</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.15 }}>
              Why Visionary Businesses <span style={{ color: "var(--orange)" }}>Choose Us</span>
            </h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {homeContent.whyUs.list.map((w, i) => {
              const Icon = w.icon;
              return (
                <FadeUp key={w.title} delay={i * 0.12} amount={40}>
                  <div style={{
                    padding: "48px 36px", borderRadius: "24px",
                    background: "var(--card-bg)", border: "1px solid var(--card-border)",
                    height: "100%", textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }} className="card glass-card">
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "18px",
                      background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 28px", border: "1px solid var(--orange-border)"
                    }}>
                      <Icon size={30} style={{ color: "var(--orange)" }} />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "16px", color: "var(--fg)" }}>{w.title}</h3>
                    <p style={{ fontSize: "15px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0, opacity: 0.85 }}>{w.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ — Clean accordion style
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>{homeContent.faqs.tag}</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.15 }}>
              Frequently Asked <span style={{ color: "var(--orange)" }}>Questions</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "24px", padding: "8px 36px" }}>
              {homeContent.faqs.list.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OUR PROCESS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", overflow: "hidden" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>{homeContent.process.tag}</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.15 }}>
              The Framework for <span style={{ color: "var(--orange)" }}>Measured Growth</span>
            </h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }} className="items-stretch process-cards">
            {homeContent.process.list.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeUp key={p.title} delay={i * 0.15} amount={50} style={{ height: "100%" }}>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 30px 60px var(--shadow-md)" }}
                    style={{
                      padding: "48px", borderRadius: "28px", background: "var(--card-bg)",
                      border: "1px solid var(--card-border)", height: "100%",
                      display: "flex", flexDirection: "column",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                    className="hover:border-[var(--orange)] relative group glass-card"
                  >
                    <div style={{
                      width: "72px", height: "72px", borderRadius: "20px",
                      border: "1px solid var(--orange)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "36px", transition: "all 0.3s"
                    }} className="text-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white">
                      <Icon size={32} style={{ stroke: "currentColor" }} />
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px", color: "var(--fg)" }}>{p.title}</h3>
                    <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0, opacity: 0.85 }}>{p.desc}</p>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RECENT INSIGHTS (BLOG CAROUSEL)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <FadeUp>
              <span className="section-tag">RECENT INSIGHTS</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "var(--fg)", lineHeight: 1.15 }}>
                Strategies to <span style={{ color: "var(--orange)" }}>Scale</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link href="/blog" className="btn-outline" style={{ display: "inline-flex" }}>
                View All Insights <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>

          <div style={{ display: "flex", overflowX: "auto", gap: "32px", paddingBottom: "24px", scrollbarWidth: "none" }} className="hide-scroll">
            {recentBlogs.map((b, i) => (
              <FadeUp key={b.slug} delay={i * 0.1} style={{ flexShrink: 0, width: "clamp(300px, 80vw, 400px)" }}>
                <Link href={`/blog/${b.slug}`} style={{ display: "block", height: "100%" }}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    style={{ background: "var(--card-bg)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--card-border)", height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--orange)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>{b.tag}</span>
                      <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", marginBottom: "16px", lineHeight: 1.4 }}>{b.title}</h3>
                      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-c)", paddingTop: "20px" }}>
                        <span style={{ fontSize: "14px", color: "var(--fg-light)" }}>{b.date}</span>
                        <ArrowRight size={18} style={{ color: "var(--orange)" }} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
