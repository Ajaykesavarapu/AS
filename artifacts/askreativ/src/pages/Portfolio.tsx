import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useModal } from "@/App";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
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

  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px", textAlign: "center" }}>
        <div className="container">
          <span className="section-tag" style={{ justifyContent: "center" }}>Our Portfolio</span>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, color: "var(--fg)", marginBottom: "16px" }}>
            Our Work <span style={{ color: "var(--orange)" }}>Speaks For Itself</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--fg-light)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
            A curated collection of projects where we've helped businesses across Hyderabad and India build stronger digital futures.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <FadeUp>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "48px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "8px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s", border: "2px solid",
                    borderColor: active === cat ? "var(--orange)" : "var(--border-c)",
                    background: active === cat ? "var(--orange)" : "transparent",
                    color: active === cat ? "#fff" : "var(--fg-light)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {filtered.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} className="group-hover:scale-105" />
                    <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                      <span style={{ padding: "4px 12px", background: "rgba(0,0,0,0.7)", color: "#fff", fontSize: "11px", borderRadius: "50px" }}>{p.industry}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "8px" }}>{p.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.7", marginBottom: "16px" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {p.tags.map((tag) => (
                        <span key={tag} style={{ padding: "3px 10px", fontSize: "11px", fontWeight: 600, background: "rgba(232,119,34,0.08)", color: "var(--orange)", borderRadius: "50px", border: "1px solid rgba(232,119,34,0.2)" }}>
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

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Ready to Add Your Business to Our Portfolio?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>Let's create something remarkable together.</p>
          <button onClick={openModal} className="btn-primary">
            Start Your Project <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
