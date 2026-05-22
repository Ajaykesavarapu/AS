import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const links = [
  { icon: FaInstagram, href: "https://www.instagram.com/askreativ_1/", cls: "insta", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61588501648124", cls: "fb", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com/askreativ_1", cls: "xtw", label: "XTwitter" },
  { icon: FaYoutube, href: "https://www.youtube.com/@AsKreativ", cls: "yt", label: "YouTube" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/askreativ/", cls: "li", label: "LinkedIn" },
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
          <Icon
            style={{
              color: 'var(--fg)',
              width: '24px',
              height: '24px',
              transition: 'color 0.3s ease'
            }}
          />
        </a>
      ))}
    </div>
  );
}
