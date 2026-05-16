import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, ArrowRight } from "lucide-react";
import { useModal } from "@/App";

const services = [
  { num: "01", icon: Target, title: "Digital Marketing", slug: "digital-marketing", desc: "Grow your business visibility, leads, and customer engagement through strategic digital marketing solutions designed for measurable growth." },
  { num: "02", icon: Cpu, title: "AI Automation", slug: "ai-automation", desc: "Transform manual business operations into smart automated workflows powered by AI, CRM systems, WhatsApp automation, and intelligent lead management." },
  { num: "03", icon: Search, title: "SEO Services", slug: "seo-services", desc: "Improve search visibility, rankings, and organic traffic through modern SEO strategies built for Google and AI-powered search engines." },
  { num: "04", icon: Code2, title: "Website Development", slug: "website-development", desc: "We build modern, fast, and conversion-focused websites designed to strengthen branding, improve user experience, and generate business enquiries." },
  { num: "05", icon: Share2, title: "Social Media Marketing", slug: "social-media-marketing", desc: "Build a strong digital presence through storytelling-driven social media strategies, creative campaigns, reels, and audience engagement." },
  { num: "06", icon: Grid3x3, title: "ERP Management Systems", slug: "erp-management-systems", desc: "Centralize operations with smart ERP systems for attendance, HR, CRM, billing, workflow management, and operational efficiency." },
  { num: "07", icon: Smartphone, title: "Mobile App Development", slug: "mobile-app-development", desc: "Launch scalable Android and iOS applications designed to improve customer experience, accessibility, and digital business operations." },
  { num: "08", icon: Palette, title: "Branding & Creative Design", slug: "branding-creative-design", desc: "Create a strong and memorable business identity through strategic branding, creative visuals, advertising designs, and digital experiences." },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const { openModal } = useModal();
  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— OUR SERVICES</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
              AI Automation, Digital Marketing & Development Solutions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From AI-powered automation to digital marketing, ERP systems, websites, mobile applications, and branding — ASKreativ helps businesses build intelligent digital ecosystems.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.slug} delay={i * 0.07}>
                  <Link href={`/services/${s.slug}`} data-testid={`card-service-${s.slug}`}>
                    <div className="group h-full bg-[#141630] border border-white/8 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(232,119,34,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <span className="text-xs font-mono text-primary mb-3 block">{s.num} —</span>
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-white font-display font-bold mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0B1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-muted-foreground mb-8">Book a free consultation and our experts will identify the right growth strategy for your business.</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-services-cta"
            >
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
