import { Link } from "wouter";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { useModal } from "@/App";
import logoPath from "@assets/AS_1778930899290.png";

const services = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "AI Automation", slug: "ai-automation" },
  { label: "SEO Services", slug: "seo-services" },
  { label: "Website Development", slug: "website-development" },
  { label: "Social Media Marketing", slug: "social-media-marketing" },
  { label: "ERP Management Systems", slug: "erp-management-systems" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "Branding & Creative Design", slug: "branding-creative-design" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com/askreativ", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com/askreativ", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com/@askreativ", label: "YouTube" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/askreativ", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
];

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px 32px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <img src={logoPath} alt="ASKreativ Global Solutions" style={{ height: "48px", width: "auto", marginBottom: "16px" }} />
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "var(--fg-light)", marginBottom: "20px" }}>
              AI-powered digital growth company helping businesses scale through automation, branding, marketing, and modern technology. Based in Hyderabad, India.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    border: "1px solid var(--border-c)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "var(--fg-light)", fontSize: "15px",
                    transition: "all 0.2s",
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
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "20px" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "13px", color: "var(--fg-light)", transition: "color 0.2s" }}
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
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "20px" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    style={{ fontSize: "13px", color: "var(--fg-light)", transition: "color 0.2s" }}
                    className="hover:text-[var(--orange)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "20px" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={16} style={{ color: "var(--orange)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.6" }}>
                  Hyderabad, Telangana, India
                </span>
              </div>
              <a href="mailto:hello@askreativ.com" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--fg-light)", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">
                <Mail size={16} style={{ color: "var(--orange)", flexShrink: 0 }} />
                hello@askreativ.com
              </a>
              <a href="tel:+91XXXXXXXXXX" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--fg-light)", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">
                <Phone size={16} style={{ color: "var(--orange)", flexShrink: 0 }} />
                +91 XXXXX XXXXX
              </a>
            </div>
            <button onClick={openModal} className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>
              Free Consultation →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border-c)", padding: "20px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "var(--fg-lighter)", margin: 0 }}>
            © 2025 ASKreativ Global Solutions. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ fontSize: "13px", color: "var(--fg-lighter)", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">Privacy Policy</a>
            <a href="#" style={{ fontSize: "13px", color: "var(--fg-lighter)", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">Terms of Service</a>
            <a href="#" style={{ fontSize: "13px", color: "var(--fg-lighter)", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed", bottom: "20px", right: "20px", zIndex: 9990,
          width: "52px", height: "52px", borderRadius: "50%", background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)", color: "#fff", fontSize: "22px",
          transition: "transform 0.2s",
        }}
        className="hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
