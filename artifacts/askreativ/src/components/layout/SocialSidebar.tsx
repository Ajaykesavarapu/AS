import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  { icon: FaInstagram, href: "https://instagram.com/askreativ", cls: "insta", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com/askreativ", cls: "fb", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com/@askreativ", cls: "yt", label: "YouTube" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/askreativ", cls: "li", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", cls: "wa", label: "WhatsApp" },
];

export default function SocialSidebar() {
  return (
    <div className="social-sidebar" role="navigation" aria-label="Social media links">
      {links.map(({ icon: Icon, href, cls, label }) => (
        <a
          key={cls}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`social-link ${cls}`}
          aria-label={label}
          data-testid={`link-social-${cls}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
