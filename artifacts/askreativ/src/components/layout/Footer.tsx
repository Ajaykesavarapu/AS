import { Link } from "wouter";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import { useModal } from "@/App";
import logoPath from "@assets/AS_1778930899290.png";

const companyLinks = ["Home", "About Us", "Services", "Portfolio", "Blog", "Contact", "Careers", "FAQ"];
const companyHrefs = ["/", "/about", "/services", "/portfolio", "/blog", "/contact", "/careers", "/faq"];

const serviceLinks = [
  "Digital Marketing",
  "AI Automation",
  "SEO Services",
  "Website Development",
  "Social Media Marketing",
  "ERP Systems",
  "Mobile App Development",
  "Branding & Design",
];

const serviceSlugs = [
  "digital-marketing",
  "ai-automation",
  "seo-services",
  "website-development",
  "social-media-marketing",
  "erp-management-systems",
  "mobile-app-development",
  "branding-creative-design",
];

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-[#060711] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoPath} alt="ASKreativ Global Solutions" className="h-12 w-auto mb-4" />
            <p className="text-accent text-sm font-mono mb-4">Design Your Life</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              AI-powered digital growth company helping businesses scale through automation, branding, and modern technology.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                <FaLinkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-youtube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((label, i) => (
                <li key={label}>
                  <Link href={companyHrefs[i]} className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid={`link-footer-${label.toLowerCase().replace(/\s/g, "-")}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label, i) => (
                <li key={label}>
                  <Link href={`/services/${serviceSlugs[i]}`} className="text-muted-foreground text-sm hover:text-primary transition-colors" data-testid={`link-footer-service-${serviceSlugs[i]}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                Hyderabad, Telangana, India
              </li>
              <li>
                <a href="mailto:hello@askreativ.com" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="link-email">
                  <Mail size={16} className="text-primary shrink-0" />
                  hello@askreativ.com
                </a>
              </li>
              <li>
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors" data-testid="link-phone">
                  <Phone size={16} className="text-primary shrink-0" />
                  +91 XXXXX XXXXX
                </a>
              </li>
            </ul>
            <button
              onClick={openModal}
              className="w-full py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(232,119,34,0.3)]"
              data-testid="button-footer-consultation"
            >
              Book a Free Consultation →
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">
            © 2025 ASKreativ Global Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
