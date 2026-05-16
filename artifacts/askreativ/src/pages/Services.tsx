import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, PenTool, Megaphone, ArrowRight, ChevronRight } from "lucide-react";
import { useModal } from "@/App";

const services = [
  {
    icon: Target, slug: "digital-marketing", title: "Digital Marketing",
    short: "Grow your business visibility, leads, and customer engagement through strategic digital marketing campaigns.",
    tags: ["SEO", "PPC", "Email Marketing", "Content Strategy"],
  },
  {
    icon: Cpu, slug: "ai-automation", title: "AI Automation",
    short: "Transform manual operations into smart automated workflows with AI, CRM, and WhatsApp automation.",
    tags: ["AI Chatbots", "CRM Automation", "WhatsApp Bots", "Lead Automation"],
  },
  {
    icon: Search, slug: "seo-services", title: "SEO Services",
    short: "Improve search rankings and organic traffic through modern SEO strategies built for Google.",
    tags: ["Technical SEO", "Local SEO", "On-Page SEO", "Link Building"],
  },
  {
    icon: Code2, slug: "website-development", title: "Website Development",
    short: "Build modern, fast, conversion-focused websites designed for strong branding and lead generation.",
    tags: ["Business Websites", "E-Commerce", "Landing Pages", "Web Apps"],
  },
  {
    icon: Share2, slug: "social-media-marketing", title: "Social Media Marketing",
    short: "Build a strong digital presence through storytelling-driven strategies, creative campaigns, and reels.",
    tags: ["Instagram", "Facebook", "LinkedIn", "Reels & Videos"],
  },
  {
    icon: Grid3x3, slug: "erp-management-systems", title: "ERP Management Systems",
    short: "Centralize operations with smart ERP for attendance, HR, CRM, billing, and workflow management.",
    tags: ["Student ERP", "HR Systems", "Attendance", "Billing & Finance"],
  },
  {
    icon: Smartphone, slug: "mobile-app-development", title: "Mobile App Development",
    short: "Launch scalable Android and iOS applications designed for customer experience and business growth.",
    tags: ["Android Apps", "iOS Apps", "Business Apps", "CRM-Integrated"],
  },
  {
    icon: Palette, slug: "branding-creative-design", title: "Branding & Creative Design",
    short: "Create a strong, memorable business identity through strategic branding and creative visual experiences.",
    tags: ["Logo Design", "Brand Identity", "Brand Guidelines", "Creative Design"],
  },
  {
    icon: PenTool, slug: "graphic-design", title: "Graphic Design",
    short: "Professional designs for social media, advertisements, brochures, events, and business communication.",
    tags: ["Social Media Creatives", "Ad Designs", "Brochures", "Event Branding"],
  },
  {
    icon: Megaphone, slug: "traditional-marketing", title: "Traditional Marketing",
    short: "Offline brand visibility through hoardings, banners, newspaper ads, pamphlets, and outdoor campaigns.",
    tags: ["Hoardings", "Banners", "Newspaper Ads", "Pamphlets"],
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const { openModal } = useModal();

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>Our Services</span>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800, color: "var(--fg)", marginBottom: "20px" }}>
            Complete Digital Growth <span style={{ color: "var(--orange)" }}>Solutions</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--fg-light)", maxWidth: "640px", margin: "0 auto 36px", lineHeight: "1.8" }}>
            From AI-powered automation to digital marketing, ERP systems, websites, mobile applications, and branding — ASKreativ helps businesses build intelligent digital ecosystems.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ margin: "0 auto" }}>
            Book a Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.slug} delay={i * 0.06}>
                  <Link href={`/services/${s.slug}`} data-testid={`card-service-${s.slug}`} style={{ display: "block", height: "100%" }}>
                    <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                        <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon size={24} style={{ color: "var(--orange)" }} />
                        </div>
                        <h2 style={{ fontWeight: 700, fontSize: "17px", color: "var(--fg)", marginTop: "8px" }}>{s.title}</h2>
                      </div>
                      <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>{s.short}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                        {s.tags.map((tag) => (
                          <span key={tag} style={{ padding: "3px 12px", fontSize: "11px", fontWeight: 600, background: "rgba(232,119,34,0.08)", color: "var(--orange)", borderRadius: "50px", border: "1px solid rgba(232,119,34,0.2)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--orange)", fontSize: "13px", fontWeight: 600 }}>
                        Learn More <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            Book a free consultation and our experts will identify the right growth strategy for your business.
          </p>
          <button onClick={openModal} className="btn-primary">
            Book a Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
