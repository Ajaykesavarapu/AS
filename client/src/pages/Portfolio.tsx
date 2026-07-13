import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
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

const categories = ["All", "Digital Marketing", "Website Development", "AI Automation", "Branding", "SEO", "Mobile App", "Graphic Design"];

const projects = [
  { title: "Solar Energy Brand Launch", category: "Branding", industry: "Solar Industries", tags: ["Branding", "Digital Marketing"], img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=70", desc: "Complete brand identity, logo design, and digital marketing campaign for a Hyderabad-based solar company." },
  { title: "Healthcare Clinic Website", category: "Website Development", industry: "Healthcare", tags: ["Website Development", "SEO"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=70", desc: "Modern website with online appointment booking and patient portal for a Hyderabad clinic." },
  { title: "Real Estate Lead Generation", category: "Digital Marketing", industry: "Real Estate", tags: ["Digital Marketing", "SEO"], img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=70", desc: "Comprehensive digital campaign generating 500+ qualified leads per month for a real estate developer." },
  { title: "Sports Academy Mobile App", category: "Mobile App", industry: "Sports", tags: ["Mobile App"], img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=70", desc: "Custom Android and iOS application with attendance, progress tracking, and parent communication." },
  { title: "Restaurant WhatsApp Automation", category: "AI Automation", industry: "Hospitality", tags: ["AI Automation"], img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=70", desc: "WhatsApp automation for order management, customer follow-ups, and reservations for a restaurant chain." },
  { title: "E-Commerce SEO Growth", category: "SEO", industry: "E-Commerce", tags: ["SEO", "Digital Marketing"], img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=70", desc: "300% increase in organic traffic for an e-commerce brand through strategic SEO and content marketing." },
  { title: "Corporate ERP System", category: "AI Automation", industry: "Corporate", tags: ["AI Automation"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=70", desc: "Custom ERP integrating HR, attendance, billing, and operations for a 200+ employee company." },
  { title: "Educational Institution Platform", category: "Website Development", industry: "Education", tags: ["Website Development", "SEO"], img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=70", desc: "Feature-rich educational website with student portal, online admissions, and course management." },
  { title: "Startup Brand Identity", category: "Branding", industry: "Startup", tags: ["Branding", "Graphic Design"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=70", desc: "Complete brand identity system including logo, guidelines, social media templates, and pitch deck." },
  { title: "Social Media Campaign", category: "Digital Marketing", industry: "Retail", tags: ["Digital Marketing", "Graphic Design"], img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=70", desc: "Instagram and Facebook campaign achieving 10x engagement growth for a fashion retail brand." },
  { title: "AI Lead Management System", category: "AI Automation", industry: "Finance", tags: ["AI Automation"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=70", desc: "AI-powered lead scoring and automated nurturing system for a financial services firm." },
  { title: "Event Branding & Graphics", category: "Graphic Design", industry: "Events", tags: ["Graphic Design", "Branding"], img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=70", desc: "Complete event branding package including stage design, digital materials, and social media creatives." },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { openModal } = useModal();

  useSEO({
    title: "Our Portfolio | Digital Transformations & Growth Stories | ASKreativ",
    description: "Explore ASKreativ's successful case studies. We build modern websites, SEO domination, AI automation, and branding for visionary businesses in Hyderabad.",
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
          "name": "Portfolio",
          "item": "https://www.askreativ.in/portfolio"
        }
      ]
    }
  });

  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <main>
      <h1 className="sr-only">Case Studies & Portfolio | ASKreativ Global Solutions</h1>
       {/* Hero Section */}
       <HeroSection
         backgroundType="image"
         backgroundSrc="/Images/services-hero.jpeg"
         ctaText="View Our Work"
         ctaOnClick={openModal}
       />

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <FadeUp>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "64px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "12px 28px", borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                    cursor: "pointer", transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)", 
                    border: "1px solid",
                    borderColor: active === cat ? "var(--orange)" : "var(--card-border)",
                    background: active === cat ? "var(--orange)" : "var(--card-bg-glass)",
                    color: active === cat ? "#fff" : "var(--fg-light)",
                    boxShadow: active === cat ? "0 10px 30px var(--orange-glow)" : "none",
                    backdropFilter: "blur(8px)"
                  }}
                  className="portfolio-filter-btn"
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px" }}>
            {filtered.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="card portfolio-card" style={{ padding: 0, overflow: "hidden", borderRadius: "32px", background: "var(--card-bg)", border: "1px solid var(--card-border)", transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1.5" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }} className="portfolio-img" />
                    <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 1 }}>
                      <span style={{ padding: "6px 16px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "12px", fontWeight: 700, borderRadius: "50px", border: "1px solid rgba(255,255,255,0.1)" }}>{p.industry}</span>
                    </div>
                    <div className="portfolio-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", opacity: 0, transition: "opacity 0.4s" }} />
                  </div>
                  <div style={{ padding: "32px" }}>
                    <h3 style={{ fontWeight: 850, fontSize: "20px", color: "var(--fg)", marginBottom: "12px", letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", marginBottom: "24px", opacity: 0.85 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {p.tags.map((tag) => (
                        <span key={tag} style={{ padding: "6px 14px", fontSize: "11px", fontWeight: 700, background: "var(--muted-bg)", color: "var(--fg-light)", borderRadius: "50px", border: "1px solid var(--border-c)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner" style={{ margin: "100px 0", borderRadius: "40px", background: "linear-gradient(135deg, var(--orange) 0%, #db6b1d 100%)", boxShadow: "0 40px 100px var(--shadow-lg)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px" }}>
          <FadeUp>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 950, color: "#fff", marginBottom: "24px", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
               Ready to Build Your <span style={{ color: "#fff", opacity: 0.8 }}>Legacy?</span>
             </h2>
             <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.9)", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
               Let’s partner to transform your business vision into a scalable digital reality.
             </p>
             <button 
               onClick={openModal} 
               className="btn-primary" 
               style={{ background: "#fff", color: "var(--orange)", padding: "20px 48px", fontSize: "17px", fontWeight: 800, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
             >
               Start Your Project <ArrowRight size={20} />
             </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
