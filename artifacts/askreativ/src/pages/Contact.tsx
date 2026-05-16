import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { useModal } from "@/App";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const { openModal } = useModal();

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— CONTACT US</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">Let's Start Building Your Digital Future</h1>
            <p className="text-muted-foreground text-lg">Reach out to us for a free consultation. Our team will get back to you within 24 hours.</p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeUp>
              <div className="space-y-6">
                <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Our Location</p>
                    <p className="text-muted-foreground text-sm">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email Us</p>
                    <a href="mailto:hello@askreativ.com" className="text-primary text-sm hover:underline" data-testid="link-contact-email">hello@askreativ.com</a>
                  </div>
                </div>
                <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Call Us</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-primary text-sm hover:underline" data-testid="link-contact-phone">+91 XXXXX XXXXX</a>
                  </div>
                </div>
                <div className="bg-[#141630] border border-white/8 rounded-2xl p-6">
                  <p className="text-white font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                      { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
                      { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 hover:text-primary text-muted-foreground transition-all"
                        data-testid={`link-social-${label.toLowerCase()}`}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-[#141630] border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">Or book a free consultation directly →</p>
                <button
                  onClick={openModal}
                  className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)] mb-6"
                  data-testid="button-contact-consultation"
                >
                  Book a Free Consultation →
                </button>
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/8" /></div>
                  <div className="relative flex justify-center"><span className="bg-[#141630] px-3 text-xs text-muted-foreground">or send a message</span></div>
                </div>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); openModal(); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" data-testid="input-contact-name" />
                    <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" data-testid="input-contact-email" />
                  </div>
                  <textarea rows={4} placeholder="Your message..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" data-testid="textarea-contact-message" />
                  <button type="submit" className="w-full py-3 bg-[#0F1035] border border-white/10 text-white text-sm font-semibold rounded-full hover:border-primary/30 transition-colors" data-testid="button-contact-send">
                    Send Message →
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
