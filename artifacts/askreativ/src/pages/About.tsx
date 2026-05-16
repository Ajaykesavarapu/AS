import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Users, Zap } from "lucide-react";
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

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is built around measurable outcomes — leads, visibility, and real business growth." },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead with AI automation, emerging technologies, and modern digital approaches." },
  { icon: Users, title: "Long-Term Partnership", desc: "We work as your extended digital team, invested in your success from day one." },
  { icon: Zap, title: "Speed & Precision", desc: "Fast execution with meticulous attention to quality, detail, and brand consistency." },
];

export default function About() {
  const { openModal } = useModal();
  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— ABOUT US</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              We are ASKreativ<br /><span className="text-primary">Global Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              An AI-powered digital growth company helping businesses scale through automation, branding, marketing, websites, ERP systems, and modern digital solutions.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ASKreativ Global Solutions was founded with a singular mission — to bring world-class digital growth strategies to businesses in Hyderabad and across India. We recognized that most businesses needed more than just marketing. They needed an intelligent, interconnected digital ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From our base in Hyderabad, we've helped educational institutions, solar industries, healthcare providers, real estate companies, startups, and corporate enterprises build smarter digital futures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine creativity, technology, AI, and strategy to build systems that don't just work — they scale.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Mission", text: "To empower every business with intelligent digital growth tools, strategies, and automation systems." },
                  { label: "Vision", text: "To be India's most trusted AI-powered digital growth partner, transforming how businesses operate and scale." },
                  { label: "Focus", text: "Hyderabad-based, India-wide — helping businesses from every industry build digital ecosystems that grow." },
                  { label: "Approach", text: "Strategy first, execution always. Every project is built with long-term growth and measurable results in mind." },
                ].map((item) => (
                  <div key={item.label} className="bg-[#141630] border border-white/8 rounded-xl p-5 hover:border-primary/30 transition-colors">
                    <p className="text-primary font-mono text-xs mb-2">{item.label}</p>
                    <p className="text-white text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0B1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-3">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="bg-[#141630] border border-white/8 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-white font-display font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F1035]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">Ready to Build Your Digital Future?</h2>
            <p className="text-muted-foreground mb-8">Partner with ASKreativ and transform your business with AI-powered growth strategies.</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-about-cta"
            >
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
