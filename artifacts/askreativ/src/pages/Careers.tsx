import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart } from "lucide-react";
import { useModal } from "@/App";

const openings = [
  { title: "Digital Marketing Specialist", type: "Full-time", location: "Hyderabad", dept: "Marketing", desc: "Drive digital marketing campaigns across SEO, SEM, social media, and content marketing for our clients." },
  { title: "AI/Automation Engineer", type: "Full-time", location: "Hyderabad", dept: "Technology", desc: "Build and deploy AI automation systems, chatbots, and workflow automation solutions for businesses." },
  { title: "SEO Analyst", type: "Full-time", location: "Hyderabad", dept: "Marketing", desc: "Execute technical and content SEO strategies for clients across various industries." },
  { title: "Web Developer (React/Next.js)", type: "Full-time", location: "Hyderabad / Remote", dept: "Technology", desc: "Build modern, performant websites and web applications using React, Next.js, and TypeScript." },
  { title: "Brand & Creative Designer", type: "Full-time", location: "Hyderabad", dept: "Design", desc: "Create compelling brand identities, marketing collateral, and digital designs that drive business results." },
  { title: "Business Development Executive", type: "Full-time", location: "Hyderabad", dept: "Sales", desc: "Identify and develop new business opportunities, manage client relationships, and drive revenue growth." },
];

const culture = [
  { icon: Zap, title: "Fast-paced Growth", desc: "Work on cutting-edge AI and digital projects that are shaping the future of business in India." },
  { icon: Users, title: "Collaborative Team", desc: "Join a tight-knit team of creative and technical professionals who support each other's growth." },
  { icon: Heart, title: "Purpose-driven Work", desc: "Help real businesses in Hyderabad and across India build stronger digital futures." },
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

export default function Careers() {
  const { openModal } = useModal();
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— CAREERS</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">Join the ASKreativ Team</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Build your career at one of Hyderabad's fastest-growing AI and digital marketing agencies. Help businesses grow while growing yourself.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-3">Why Work at ASKreativ?</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {culture.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={c.title} delay={i * 0.1}>
                  <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-white font-display font-bold mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-3">Open Positions</h2>
            <p className="text-muted-foreground">Current openings at ASKreativ Global Solutions, Hyderabad.</p>
          </FadeUp>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <FadeUp key={job.title} delay={i * 0.07}>
                <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-display font-bold mb-1">{job.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{job.desc}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground/60">
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                        <span className="px-2 py-0.5 bg-white/5 rounded">{job.dept}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplied(job.title)}
                    className="shrink-0 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(232,119,34,0.3)]"
                    data-testid={`button-apply-${job.title.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {applied === job.title ? "Applied!" : "Apply Now →"}
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0B1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-muted-foreground mb-8">Send us your resume and we'll reach out when a matching position opens up.</p>
            <a
              href="mailto:hello@askreativ.com?subject=Job Application - ASKreativ"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="link-send-resume"
            >
              Send Your Resume <ArrowRight size={18} />
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
