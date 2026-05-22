import { Link } from "wouter";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { useModal } from "@/App";
import logoPath from "@/assets/As-01.png";

import { navLinks, siteConfig, homeContent } from "@/constants/siteData";

const services = navLinks.find(l => l.label === "Services")?.items || [];
const industries = navLinks.find(l => l.label === "Industries")?.items || [];
const company = navLinks.filter(l => !l.hasDropdown);
const socials = siteConfig.socials.map(s => {
  let Icon = FaInstagram;
  if (s.label === "Facebook") Icon = FaFacebook;
  if (s.label === "YouTube") Icon = FaYoutube;
  if (s.label === "LinkedIn") Icon = FaLinkedin;
  if (s.label === "WhatsApp") Icon = FaWhatsapp;
  return { ...s, icon: Icon };
});

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="footer" style={{ borderTop: "1px solid var(--border-c)", paddingTop: "80px", background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "48px 24px", marginBottom: "64px" }} className="max-lg:grid-cols-1">
          {/* Brand Info */}
          <div style={{ gridColumn: "span 1" }}>
            <img src={logoPath} alt="ASKreativ Global Solutions" style={{ height: "220px", width: "auto", marginBottom: "0px", marginTop: "-40px", filter: "var(--logo-filter)" }} />
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "var(--fg-light)", marginBottom: "32px", maxWidth: "320px" }}>
              {homeContent.about.description1}
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: "42px", height: "42px", borderRadius: "12px",
                    border: "1px solid var(--border-c)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "var(--fg-light)", fontSize: "18px",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-[var(--orange)] hover:text-[var(--orange)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: "16px", color: "var(--fg)", marginBottom: "24px" }}>Organization</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "14px", color: "var(--fg-light)", transition: "color 0.2s" }}
                    className="hover:text-[var(--orange)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: "16px", color: "var(--fg)", marginBottom: "24px" }}>Growth Pillars</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                    style={{ fontSize: "14px", color: "var(--fg-light)", transition: "color 0.2s" }}
                    className="hover:text-[var(--orange)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: "16px", color: "var(--fg)", marginBottom: "24px" }}>Industries We Serve</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {industries.map((ind) => (
                <li key={ind.label}>
                  <Link
                    href="/industries"
                    style={{ fontSize: "13px", color: "var(--fg-light)", transition: "color 0.2s" }}
                    className="hover:text-[var(--orange)]"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: "16px", color: "var(--fg)", marginBottom: "24px" }}>Contact Information</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={18} style={{ color: "var(--orange)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.6" }}>
                  {siteConfig.contact.address}
                </span>
              </div>
              <a href={`mailto:${siteConfig.contact.email}`} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--fg-light)" }} className="hover:text-[var(--orange)]">
                <Mail size={18} style={{ color: "var(--orange)", flexShrink: 0 }} />
                {siteConfig.contact.email}
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--fg-light)" }} className="hover:text-[var(--orange)]">
                  <Phone size={18} style={{ color: "var(--orange)", flexShrink: 0 }} />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
            <button onClick={openModal} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border-c)", padding: "32px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
          <p style={{ fontSize: "14px", color: "var(--fg-lighter)", margin: 0 }}>
            © {new Date().getFullYear()} ASKreativ Global Solutions. Precise Execution. Measured Growth.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ fontSize: "14px", color: "var(--fg-lighter)" }} className="hover:text-[var(--orange)]">Privacy Policy</a>
            <a href="#" style={{ fontSize: "14px", color: "var(--fg-lighter)" }} className="hover:text-[var(--orange)]">Terms</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919154458686"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed", bottom: "30px", right: "30px", zIndex: 9990,
          width: "60px", height: "60px", borderRadius: "50%", background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 30px rgba(37,211,102,0.4)", color: "#fff", fontSize: "28px",
          transition: "transform 0.3s"
        }}
        className="hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
