import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { siteConfig, homeContent } from "@/constants/siteData";
import { useModal } from "@/App";
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const { openModal } = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useSEO({
    title: "Contact Us | ASKreativ Global Solutions Hyderabad",
    description: "Every massive growth story begins with a single conversation. Whether you’re scaling a startup or dominating an industry, our engine is ready to power your vision."
  });

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "16px 20px", fontSize: "15px",
    background: "var(--card-bg)", color: "var(--fg)",
    border: "1px solid var(--card-border)", borderRadius: "16px",
    outline: "none", transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <main>
       {/* ── HERO ─────────────────────────────────────────────────────── */}
       <HeroSection
         backgroundType="image"
         backgroundSrc="/Images/contact-hero.jpeg"
         title="Let's Talk About Your Growth"
         description="Every massive growth story begins with a single conversation. Whether you’re scaling a startup or dominating an industry, our engine is ready to power your vision."
         ctaText="Contact Us"
         ctaOnClick={() => openModal()}
         stats={[
           { label: "Projects", value: "4000+" },
           { label: "Years Experience", value: "19+" },
           { label: "Client Rating", value: "5★" }
         ]}
       />

      {/* ── INFO & FORM ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px" }} className="max-lg:block">
            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <FadeUp>
                <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                      <Mail style={{ color: "var(--orange)" }} size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Email Us</h3>
                      <p style={{ fontSize: "14px", color: "var(--fg-light)", marginBottom: "16px" }}>For enquiries, support, and collaborations.</p>
                      <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "var(--orange)", fontWeight: 800, fontSize: "17px" }}>{siteConfig.contact.email}</a>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                      <Phone style={{ color: "var(--orange)" }} size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Growth Strategy Call</h3>
                      <p style={{ fontSize: "14px", color: "var(--fg-light)", marginBottom: "16px" }}>Mon–Fri from 9am to 7pm IST.</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} style={{ color: "var(--orange)", fontWeight: 800, fontSize: "17px" }}>{siteConfig.contact.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                      <MapPin style={{ color: "var(--orange)" }} size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Our Hub</h3>
                      <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--fg)", margin: 0 }}>{siteConfig.contact.address.split(",")[0]},</p>
                      <p style={{ fontSize: "16px", color: "var(--fg-light)", margin: 0 }}>{siteConfig.contact.address.split(",").slice(1).join(",")}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <h3 style={{ fontWeight: 800, fontSize: "16px", marginBottom: "16px" }}>Follow Our Journey</h3>
                <div style={{ display: "flex", gap: "12px" }}>
                  {siteConfig.socials.map((s) => {
                    let Icon = FaInstagram;
                    if (s.label === "Facebook") Icon = FaFacebook;
                    if (s.label === "YouTube") Icon = FaYoutube;
                    if (s.label === "LinkedIn") Icon = FaLinkedin;
                    if (s.label === "WhatsApp") Icon = FaWhatsapp;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        style={{ width: "45px", height: "45px", borderRadius: "12px", border: "1px solid var(--border-c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "var(--fg-light)", transition: "all 0.3s" }}
                        className="hover:border-[var(--orange)] hover:text-[var(--orange)]"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <FadeUp delay={0.2}>
              <div className="card glass-card" style={{ padding: "60px 48px", borderRadius: "32px", background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "0 40px 100px var(--shadow-lg)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "60px 0" }}>
                    <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--orange-glass)", color: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
                      <ArrowRight size={40} />
                    </div>
                    <h3 style={{ fontWeight: 950, fontSize: "32px", color: "var(--fg)", marginBottom: "16px" }}>Message Received</h3>
                    <p style={{ color: "var(--fg-light)", fontSize: "18px" }}>Our execution team will reach out within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="max-sm:flex max-sm:flex-col">
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Full Name</label>
                        <input required type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email Address</label>
                        <input required type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="max-sm:flex max-sm:flex-col">
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Phone Number</label>
                        <input type="tel" placeholder="+91 90000 00000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Growth Pillar</label>
                        <div style={{ position: "relative" }}>
                          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                            <option value="">Select a service...</option>
                            <option>AI Automation</option>
                            <option>Branding & Identity</option>
                            <option>Digital Marketing</option>
                            <option>Website/App Development</option>
                            <option>ERP Systems</option>
                            <option>SEO Strategy</option>
                          </select>
                          <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", borderTop: "6px solid var(--fg-light)", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", opacity: 0.7 }}></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Your Vision & Struggle</label>
                      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Tell us about the dream you're building..." style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "20px", fontSize: "17px", fontWeight: 900 }}>
                      Send Message <ArrowRight size={20} />
                    </button>
                    <p style={{ fontSize: "13px", textAlign: "center", color: "var(--fg-lighter)", margin: 0, opacity: 0.7 }}>
                      Precision in communication. Results in execution.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
