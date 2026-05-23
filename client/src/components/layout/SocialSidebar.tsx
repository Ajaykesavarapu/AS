import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const links = [
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61588501648124", cls: "fb", bg: "#3b5998" },
  { icon: FaInstagram, href: "https://www.instagram.com/askreativ_1/", cls: "insta", bg: "#e1306c" },
  { icon: FaXTwitter, href: "https://x.com/askreativ_1", cls: "xtw", bg: "#000000" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/askreativ/", cls: "li", bg: "#007ab9" },
];

export default function SocialSidebar() {
  return (
    <div 
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-start"
      role="navigation" 
      aria-label="Social media links"
    >
      {links.map(({ icon: Icon, href, cls, bg }) => (
        <a
          key={cls}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-[44px] h-[44px] text-white transition-opacity hover:opacity-90"
          aria-label={cls}
          data-testid={`link-social-${cls}`}
          style={{ background: bg }}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
