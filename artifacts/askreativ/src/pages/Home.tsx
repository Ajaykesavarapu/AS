import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette,
  PenTool, Megaphone, ArrowRight, ChevronRight, Star, CheckCircle,
} from "lucide-react";
import { useModal } from "@/App";

// ── DATA ─────────────────────────────────────────────────────────────
const scrollingServices = [
  "Digital Marketing", "AI Automation", "SEO Solutions",
  "Website Design", "Business Growth", "Mobile Apps", "Brand Identity",
];

const heroImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
];

const services = [
  { icon: Target, title: "Digital Marketing", slug: "digital-marketing", desc: "Grow visibility, leads, and engagement through strategic digital marketing campaigns." },
  { icon: Cpu, title: "AI Automation", slug: "ai-automation", desc: "Transform operations into smart automated workflows powered by AI and CRM systems." },
  { icon: Search, title: "SEO Services", slug: "seo-services", desc: "Improve rankings and organic traffic through modern SEO strategies." },
  { icon: Code2, title: "Website Development", slug: "website-development", desc: "Build modern, fast, conversion-focused websites for your business." },
  { icon: Share2, title: "Social Media Marketing", slug: "social-media-marketing", desc: "Build your digital presence through creative campaigns and audience engagement." },
  { icon: Grid3x3, title: "ERP Management Systems", slug: "erp-management-systems", desc: "Centralize operations with smart ERP systems for efficiency and growth." },
  { icon: Smartphone, title: "Mobile App Development", slug: "mobile-app-development", desc: "Launch scalable Android and iOS apps for your customers." },
  { icon: Palette, title: "Branding & Design", slug: "branding-creative-design", desc: "Create strong visual identities through strategic branding and creative design." },
  { icon: PenTool, title: "Graphic Design", slug: "graphic-design", desc: "Professional designs for social media, ads, brochures, and brand communication." },
  { icon: Megaphone, title: "Traditional Marketing", slug: "traditional-marketing", desc: "Hoardings, banners, pamphlets, and outdoor campaigns for offline brand presence." },
];

const stats = [
  { num: "200+", label: "Projects Delivered" },
  { num: "50+", label: "Happy Clients" },
  { num: "10+", label: "Digital Services" },
  { num: "5+", label: "Years Experience" },
];

const whyUs = [
  { title: "AI-Powered Approach", desc: "We integrate artificial intelligence into our strategies to deliver smarter, faster, and more effective digital growth solutions." },
  { title: "Multi-Industry Experience", desc: "From education and healthcare to real estate and e-commerce — we've built digital ecosystems across diverse industries." },
  { title: "Tailored Strategies", desc: "No templates. Every strategy, system, and campaign is custom-built around your specific business goals and audience." },
  { title: "End-to-End Solutions", desc: "From branding and automation to websites and marketing — we're a complete digital growth partner under one roof." },
];

const industries = [
  "Educational Institutions", "Solar Industries", "Healthcare & Clinics",
  "Real Estate Companies", "Sports Academies", "Startups & Entrepreneurs",
  "Local Businesses", "Corporate Companies", "E-Commerce Brands",
  "Restaurants & Hospitality", "Professional Services", "Manufacturing Units",
];

const process = [
  { num: "01", title: "Discover & Understand", desc: "We analyze your business, audience, and goals to build the right digital growth foundation." },
  { num: "02", title: "Strategize & Structure", desc: "We create customized strategies focused on branding, automation, visibility, and growth." },
  { num: "03", title: "Create & Build", desc: "We develop websites, apps, ERP systems, and digital experiences for performance and engagement." },
  { num: "04", title: "Automate & Optimize", desc: "We integrate AI-powered automation systems to improve efficiency and customer communication." },
  { num: "05", title: "Launch & Market", desc: "We execute growth-driven marketing strategies focused on visibility, leads, and expansion." },
  { num: "06", title: "Scale & Evolve", desc: "We continuously optimize systems and strategies to help your business scale sustainably." },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Real Estate Developer, Hyderabad", stars: 5, text: "ASKreativ transformed our digital presence completely. Their SEO and social media strategy brought us over 200 qualified leads in just three months. Exceptional team!" },
  { name: "Dr. Priya Nair", role: "Healthcare Clinic Owner", stars: 5, text: "We were struggling with online visibility. ASKreativ built our website, set up SEO, and within 6 months we were ranking for all our key services. Highly recommended." },
  { name: "Kiran Reddy", role: "Educational Institution Director", stars: 5, text: "The ERP system ASKreativ built for us completely transformed how we manage admissions and student communications. Our efficiency improved dramatically." },
  { name: "Sunita Gupta", role: "E-Commerce Brand Founder", stars: 5, text: "Their branding work gave our startup a completely professional identity. The design consistency across all our platforms has been incredible." },
];

const faqs = [
  { q: "What services does ASKreativ Global Solutions provide?", a: "ASKreativ provides digital marketing, AI automation, SEO, website development, social media marketing, ERP systems, mobile app development, branding, graphic design, and traditional marketing services." },
  { q: "How can digital marketing help my business grow?", a: "Digital marketing improves your online visibility, generates qualified leads, strengthens your brand, and connects you with your target audience through multiple digital channels." },
  { q: "Does ASKreativ provide AI automation services in Hyderabad?", a: "Yes. We provide AI chatbots, WhatsApp automation, CRM systems, lead management automation, and workflow automation services in Hyderabad." },
  { q: "How long does SEO take to show results?", a: "SEO typically shows significant results within 3-6 months, depending on competition, industry, and the current state of your website. It's a long-term investment with compounding returns." },
  { q: "Do you work with businesses outside Hyderabad?", a: "Absolutely. While we're based in Hyderabad, we work with businesses across India and internationally. Our digital services are delivered remotely with full communication support." },
  { q: "How do I get started with ASKreativ?", a: "Simply book a free consultation using the button on our website. Our team will reach out within 24 hours to understand your business needs and create a customized proposal." },
];

// ── HELPER COMPONENTS ─────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "", style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: "easeOut" }} className={className} style={style}>
      {children}
    </motion.div>
  );
}

function FadeLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay }}>
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
          gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 500, fontSize: "15px", color: "var(--fg)" }}>{q}</span>
        <span style={{ fontSize: "22px", color: "var(--orange)", flexShrink: 0, lineHeight: 1 }}>{open ? "×" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ── HERO IMAGE CAROUSEL ───────────────────────────────────────────────
function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 20px 60px var(--shadow-md)" }}>
      {heroImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`ASKreativ service ${i + 1}`}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: i === idx ? 1 : 0,
            transition: "opacity 0.9s ease",
          }}
        />
      ))}
      {/* Overlay badge */}
      <div style={{
        position: "absolute", bottom: "20px", left: "20px",
        background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
        borderRadius: "50px", padding: "8px 20px",
        display: "flex", alignItems: "center", gap: "8px",
      }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#25D366", flexShrink: 0 }} />
        <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>Available for new projects</span>
      </div>
      {/* Dots */}
      <div style={{ position: "absolute", bottom: "20px", right: "20px", display: "flex", gap: "6px" }}>
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? "24px" : "8px", height: "8px", borderRadius: "4px",
              background: i === idx ? "var(--orange)" : "rgba(255,255,255,0.5)",
              border: "none", cursor: "pointer", transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── SCROLLING TEXT ────────────────────────────────────────────────────
function ScrollingText() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % scrollingServices.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{ color: "var(--orange)", display: "inline-block", minWidth: "320px" }}>
      <motion.span
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{ display: "block" }}
      >
        {scrollingServices[idx]}
      </motion.span>
    </span>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────
export default function Home() {
  const { openModal } = useModal();

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container" style={{ width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="section-tag">Hyderabad's AI-Powered Growth Agency</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, color: "var(--fg)", lineHeight: 1.15, marginBottom: "12px" }}>
                  We Create
                </h1>
                <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "24px", minHeight: "1.3em" }}>
                  <ScrollingText />
                </h1>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "36px", maxWidth: "520px" }}>
                ASKreativ Global Solutions helps businesses in Hyderabad and across India build intelligent digital ecosystems through AI automation, branding, SEO, websites, ERP systems, and modern marketing.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
                <button onClick={openModal} className="btn-primary" data-testid="button-hero-cta">
                  Get a Free Consultation <ArrowRight size={16} />
                </button>
                <Link href="/portfolio" className="btn-outline" data-testid="link-hero-portfolio">
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {[
                  { num: "200+", label: "Projects" },
                  { num: "50+", label: "Clients" },
                  { num: "5+", label: "Years" },
                ].map((b) => (
                  <div key={b.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "var(--orange)" }}>{b.num}</div>
                    <div style={{ fontSize: "12px", color: "var(--fg-lighter)" }}>{b.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp className="text-center" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>What We Do</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Complete Digital Growth <span>Solutions</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
              From AI automation to digital marketing, ERP systems, websites, and branding — everything your business needs to grow in one place.
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "20px" }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.slug} delay={Math.floor(i / 4) * 0.1 + (i % 4) * 0.06}>
                  <Link href={`/services/${s.slug}`} data-testid={`card-service-${s.slug}`}>
                    <div className="service-icon-card">
                      <div className="icon-wrap">
                        <Icon size={24} style={{ color: "var(--orange)" }} />
                      </div>
                      <div className="s-title">{s.title}</div>
                      <div className="s-desc">{s.desc}</div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3} style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/services" className="btn-outline" data-testid="link-all-services">
              View All Services <ChevronRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px" }}>
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} style={{ textAlign: "center" }}>
                <div className="stat-num">{s.num}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="max-lg:block">
            <FadeLeft>
              <span className="section-tag">Why ASKreativ</span>
              <h2 className="section-title">
                Building Smarter Digital Growth <span>For Modern Businesses</span>
              </h2>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "28px" }}>
                ASKreativ Global Solutions is an AI-powered digital growth company helping businesses scale through automation, branding, marketing, websites, ERP systems, and modern digital solutions. We combine creativity, technology, AI, and strategy.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {["AI-Powered Digital Strategies", "End-to-End Digital Solutions", "Multi-Industry Experience", "Hyderabad's Trusted Agency"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle size={18} style={{ color: "var(--orange)", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: "var(--fg-light)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="btn-primary">
                Book a Free Consultation <ArrowRight size={16} />
              </button>
            </FadeLeft>

            <FadeUp delay={0.2}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {whyUs.map((w, i) => (
                  <div key={w.title} className="card" style={{ borderLeft: i === 0 ? "3px solid var(--orange)" : "1px solid var(--card-border)" }}>
                    <h4 style={{ fontWeight: 700, fontSize: "14px", color: "var(--fg)", marginBottom: "8px" }}>{w.title}</h4>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.6", margin: 0 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES / CLIENTS ─────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--bg-section)", overflow: "hidden" }}>
        <div className="container" style={{ marginBottom: "32px" }}>
          <FadeUp style={{ textAlign: "center" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Industries We Serve</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Trusted by Businesses <span>Across All Industries</span>
            </h2>
          </FadeUp>
        </div>
        {/* Marquee */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ display: "flex" }} className="marquee-track">
            {[...industries, ...industries].map((ind, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0, padding: "10px 24px", margin: "0 8px",
                  border: "1px solid var(--border-c)", borderRadius: "50px",
                  fontSize: "13px", fontWeight: 500, color: "var(--fg-light)",
                  background: "var(--card-bg)", whiteSpace: "nowrap",
                }}
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>How We Work</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Our 6-Step Digital <span>Growth Process</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
              Every project is built with strategy, creativity, AI automation, and measurable growth in mind.
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {process.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <div className="card" style={{ position: "relative", paddingTop: "36px" }}>
                  <div style={{
                    position: "absolute", top: "-18px", left: "28px",
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: "var(--orange)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700,
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Client Success</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What Our <span>Clients Say</span>
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="testi-card">
                  <div className="testi-stars">
                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="testi-text">"{t.text}"</p>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }} className="max-lg:block">
            <FadeLeft>
              <span className="section-tag">FAQ</span>
              <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "28px" }}>
                Have more questions? Book a free consultation and our experts will answer everything.
              </p>
              <button onClick={openModal} className="btn-primary">
                Talk to Our Experts <ArrowRight size={16} />
              </button>
            </FadeLeft>
            <FadeUp delay={0.15}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
                ))}
                <div style={{ marginTop: "20px" }}>
                  <Link href="/faq" style={{ color: "var(--orange)", fontWeight: 600, fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    View All FAQs <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <FadeUp>
            <p style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>Ready to Grow?</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: "16px", lineHeight: 1.25 }}>
              Let's Build Your Digital <span style={{ color: "var(--gold)" }}>Future Together</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginBottom: "36px", maxWidth: "560px", margin: "0 auto 36px" }}>
              Partner with Hyderabad's leading AI-powered digital growth agency. Get a free consultation today.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={openModal} className="btn-primary" style={{ background: "var(--orange)", borderColor: "var(--orange)" }}>
                Book a Free Consultation <ArrowRight size={16} />
              </button>
              <Link href="/services" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                Explore Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
