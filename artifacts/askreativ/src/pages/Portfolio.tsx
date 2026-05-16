import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useModal } from "@/App";

const categories = ["All", "Digital Marketing", "Website Development", "AI Automation", "Branding", "SEO", "Mobile App"];

const projects = [
  { title: "Solar Energy Brand Launch", category: "Branding", industry: "Solar Industries", desc: "Complete brand identity, logo design, and digital marketing campaign for a Hyderabad-based solar energy company.", tags: ["Branding", "Digital Marketing"] },
  { title: "Healthcare Clinic Website", category: "Website Development", industry: "Healthcare", desc: "Modern, conversion-focused website with online appointment booking and patient portal integration.", tags: ["Website Development", "SEO"] },
  { title: "Real Estate Lead Generation", category: "Digital Marketing", industry: "Real Estate", desc: "Comprehensive digital marketing campaign generating 500+ qualified leads per month for a real estate developer.", tags: ["Digital Marketing", "SEO"] },
  { title: "Sports Academy App", category: "Mobile App", industry: "Sports", desc: "Custom Android and iOS application for a sports academy with attendance, progress tracking, and parent communication.", tags: ["Mobile App"] },
  { title: "Restaurant Automation", category: "AI Automation", industry: "Hospitality", desc: "WhatsApp automation system for order management, customer follow-ups, and table reservations for a restaurant chain.", tags: ["AI Automation"] },
  { title: "E-Commerce SEO Growth", category: "SEO", industry: "E-Commerce", desc: "300% increase in organic traffic for an e-commerce brand through comprehensive SEO strategy and content marketing.", tags: ["SEO", "Digital Marketing"] },
  { title: "Corporate ERP System", category: "AI Automation", industry: "Corporate", desc: "Custom ERP solution integrating HR, attendance, billing, and operations for a 200+ employee company.", tags: ["AI Automation"] },
  { title: "Educational Institution Platform", category: "Website Development", industry: "Education", desc: "Feature-rich educational website with student portal, online admissions, and course management system.", tags: ["Website Development", "SEO"] },
  { title: "Startup Brand Identity", category: "Branding", industry: "Startup", desc: "Complete brand identity system including logo, brand guidelines, social media templates, and pitch deck design.", tags: ["Branding"] },
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

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { openModal } = useModal();

  const filtered = active === "All" ? projects : projects.filter(p => p.tags.includes(active));

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— OUR PORTFOLIO</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">Our Work Speaks For Itself</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects where we've helped businesses across Hyderabad and India build stronger digital futures.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? "bg-primary text-white shadow-[0_0_20px_rgba(232,119,34,0.3)]" : "bg-[#141630] border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-white"}`}
                data-testid={`button-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <FadeUp key={project.title} delay={i * 0.07}>
                <div className="group h-full bg-[#141630] border border-white/8 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(232,119,34,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full">{project.industry}</span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground/60 bg-white/5 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0B1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Add Your Business to Our Portfolio?</h2>
            <p className="text-muted-foreground mb-8">Let's create something remarkable together.</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-portfolio-cta"
            >
              Start Your Project <ArrowRight size={18} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
