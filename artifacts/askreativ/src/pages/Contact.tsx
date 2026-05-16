import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", fontSize: "14px",
    background: "var(--bg)", color: "var(--fg)",
    border: "1px solid var(--border-c)", borderRadius: "10px",
    outline: "none", transition: "border-color 0.2s",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px", textAlign: "center" }}>
        <div className="container">
          <span className="section-tag" style={{ justifyContent: "center" }}>Get In Touch</span>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, color: "var(--fg)", marginBottom: "16px" }}>
            Let's Build Your <span style={{ color: "var(--orange)" }}>Digital Future</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--fg-light)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
            Reach out for a free consultation. Our team responds within 24 hours and will create a customized strategy for your business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }} className="max-lg:block">
            {/* Info */}
            <FadeUp>
              <h2 style={{ fontWeight: 700, fontSize: "22px", color: "var(--fg)", marginBottom: "24px" }}>Contact Information</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
                {[
                  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
                  { icon: Mail, label: "Email", value: "hello@askreativ.com", href: "mailto:hello@askreativ.com" },
                  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
                  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM IST" },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} style={{ color: "var(--orange)" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--fg-lighter)", marginBottom: "2px" }}>{item.label}</div>
                        <div style={{ fontSize: "14px", color: "var(--fg)", fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  );
                  return item.href
                    ? <a key={item.label} href={item.href} style={{ textDecoration: "none" }}>{content}</a>
                    : <div key={item.label}>{content}</div>;
                })}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "16px" }}>Follow Us</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { icon: FaInstagram, href: "https://instagram.com/askreativ", label: "Instagram" },
                  { icon: FaFacebook, href: "https://facebook.com/askreativ", label: "Facebook" },
                  { icon: FaYoutube, href: "https://youtube.com/@askreativ", label: "YouTube" },
                  { icon: FaLinkedin, href: "https://linkedin.com/company/askreativ", label: "LinkedIn" },
                  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{ width: "40px", height: "40px", borderRadius: "10px", border: "1px solid var(--border-c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "var(--fg-light)", transition: "all 0.2s" }}
                    className="hover:border-[var(--orange)] hover:text-[var(--orange)]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.2}>
              <div className="card" style={{ padding: "40px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: "56px", marginBottom: "16px" }}>✅</div>
                    <h3 style={{ fontWeight: 700, fontSize: "22px", color: "var(--fg)", marginBottom: "8px" }}>Message Sent!</h3>
                    <p style={{ color: "var(--fg-light)" }}>We'll reach out within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontWeight: 700, fontSize: "22px", color: "var(--fg)", marginBottom: "24px" }}>Send a Message</h2>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name *</label>
                          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email *</label>
                          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" style={inputStyle} />
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone *</label>
                          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Service</label>
                          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: "none", cursor: "pointer", background: "var(--bg)" }}>
                            <option value="">Select a service...</option>
                            <option>Digital Marketing</option>
                            <option>AI Automation</option>
                            <option>SEO Services</option>
                            <option>Website Development</option>
                            <option>Social Media Marketing</option>
                            <option>ERP Management Systems</option>
                            <option>Mobile App Development</option>
                            <option>Branding & Design</option>
                            <option>Graphic Design</option>
                            <option>Traditional Marketing</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Message</label>
                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: "vertical", fontFamily: "Poppins, sans-serif" }} />
                      </div>
                      <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "14px" }}>
                        Send Message <ArrowRight size={16} />
                      </button>
                      <p style={{ fontSize: "12px", textAlign: "center", color: "var(--fg-lighter)", margin: 0 }}>
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
