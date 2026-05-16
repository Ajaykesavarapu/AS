import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, ArrowRight, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

const processSteps = [
  { num: "01", title: "Discover & Understand", desc: "We analyze your business, audience, and goals to build the right digital growth foundation." },
  { num: "02", title: "Strategize & Structure", desc: "We create customized strategies focused on branding, automation, visibility, and scalable growth." },
  { num: "03", title: "Create & Build", desc: "We develop websites, apps, ERP systems, and digital experiences designed for performance and engagement." },
  { num: "04", title: "Automate & Optimize", desc: "We integrate AI-powered automation systems that improve efficiency and customer communication." },
  { num: "05", title: "Launch & Grow", desc: "We execute growth-driven marketing strategies focused on visibility, leads, and business expansion." },
  { num: "06", title: "Scale & Evolve", desc: "We continuously optimize systems and strategies to help businesses scale sustainably." },
];

const faqs = [
  { q: "Why should you choose ASKreativ as a digital marketing agency in Hyderabad?", a: "ASKreativ is a digital marketing agency in Hyderabad focused on AI automation, SEO, branding, websites, ERP systems, and scalable business growth solutions." },
  { q: "How can a digital marketing agency in Hyderabad help your business grow?", a: "A digital marketing agency in Hyderabad helps businesses improve visibility, generate leads, increase customer engagement, and build stronger online branding." },
  { q: "Does ASKreativ provide AI automation services in Hyderabad?", a: "Yes. ASKreativ provides AI automation services in Hyderabad, including AI chatbots, WhatsApp automation, CRM systems, and workflow automation." },
  { q: "Why is SEO important for businesses?", a: "SEO helps businesses improve Google rankings, increase organic traffic, attract local customers, and strengthen online visibility." },
  { q: "Do we provide website development services in Hyderabad?", a: "Yes. ASKreativ develops modern business websites in Hyderabad designed for branding, lead generation, SEO, and customer engagement." },
  { q: "Do we provide social media marketing services in Hyderabad?", a: "Yes. ASKreativ provides social media marketing services in Hyderabad, including Instagram marketing, Facebook marketing, LinkedIn management, reels, and branding campaigns." },
  { q: "Can ASKreativ build ERP systems for businesses in Hyderabad?", a: "Yes. We develop ERP management systems in Hyderabad for attendance, HR, CRM, operations, billing, workflow management, and reporting." },
  { q: "Do we provide mobile app development services in Hyderabad?", a: "Yes. ASKreativ develops Android and iOS mobile applications in Hyderabad for businesses, educational institutions, and startups." },
  { q: "How long does SEO take for businesses in Hyderabad?", a: "SEO results usually take a few months, depending on competition, industry, website performance, and keyword difficulty." },
  { q: "Do you provide branding services in Hyderabad?", a: "Yes. ASKreativ provides branding services in Hyderabad, including brand identity design, creative design, advertising creatives, and digital branding solutions." },
  { q: "How can I contact ASKreativ digital marketing agency Hyderabad?", a: "You can contact ASKreativ through our website, social media platforms, or directly schedule a free business consultation." },
];

const industries = [
  "Educational Institutions", "Solar Industries", "Healthcare & Clinics",
  "Real Estate Companies", "Sports Academies", "Startups & Entrepreneurs",
  "Local Businesses", "Corporate Companies", "E-Commerce Brands",
  "Restaurants & Hospitality", "Professional Service Providers",
];

const blogs = [
  { tag: "AI & Automation", title: "How AI Automation is Transforming Business Operations in 2025", excerpt: "Discover how businesses in Hyderabad are using AI-powered automation to cut costs, increase efficiency, and scale faster.", date: "May 2025", slug: "ai-automation-business-2025" },
  { tag: "Digital Marketing", title: "The Complete Guide to SEO for Businesses in Hyderabad", excerpt: "A step-by-step guide to improving your Google rankings and attracting local customers through modern SEO strategies.", date: "April 2025", slug: "seo-guide-hyderabad" },
  { tag: "Branding", title: "Why Your Business Needs a Strong Digital Identity in 2025", excerpt: "In a crowded digital marketplace, your brand identity is your competitive edge. Learn how to stand out.", date: "April 2025", slug: "digital-identity-2025" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CounterStat({ label1, label2 }: { label1: string; label2: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="text-center px-4 flex-1">
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-1"
      >
        {label1}
      </motion.p>
      <p className="text-muted-foreground text-sm">{label2}</p>
    </div>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border border-white/8 rounded-xl overflow-hidden transition-colors ${open ? "border-primary/30" : ""}`}>
      <button
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${open ? "border-l-4 border-primary" : "border-l-4 border-transparent"}`}
        onClick={() => setOpen((v) => !v)}
        data-testid={`button-faq-${q.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="text-white font-medium text-sm leading-snug">{q}</span>
        <span className="text-primary shrink-0 text-xl font-light">{open ? "×" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const { openModal } = useModal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0B1A]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #E87722 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1A1F6E 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <style>{`
            @keyframes float1 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } }
            @keyframes float2 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(15px) translateX(-8px); } }
            .particle { position: absolute; border-radius: 50%; background: rgba(232,119,34,0.3); animation: float1 8s ease-in-out infinite; }
            .particle2 { animation: float2 10s ease-in-out infinite; background: rgba(245,166,35,0.2); }
          `}</style>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`particle${i % 2 === 0 ? "" : " particle2"}`}
              style={{
                width: `${4 + i * 2}px`, height: `${4 + i * 2}px`,
                top: `${10 + i * 10}%`, left: `${5 + i * 12}%`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono px-4 py-2 rounded-full mb-8 tracking-widest">
                  AI AUTOMATION · DIGITAL MARKETING · HYDERABAD
                </span>
              </motion.div>

              <div className="overflow-hidden mb-6">
                {["Behind Every", "Growing Business", "Is a Vision."].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight">
                      {i === 2 ? <span className="text-primary">{line}</span> : line}
                    </h1>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
              >
                ASKreativ helps transform that vision into intelligent digital growth — through AI, automation, branding, and modern technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_40px_rgba(232,119,34,0.5)] hover:scale-105"
                  data-testid="button-hero-cta"
                >
                  Let's Build Your Future <ArrowRight size={18} />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all"
                  data-testid="link-explore-services"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {services.slice(0, 4).map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.slug}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="bg-[#141630]/80 border border-white/8 rounded-2xl p-5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(232,119,34,0.1)] transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <p className="text-white text-sm font-semibold">{s.title}</p>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed line-clamp-2">{s.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.a
            href="#story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            data-testid="link-scroll-down"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown size={24} className="text-primary" />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* STORYTELLING */}
      <section id="story" className="py-32 bg-[#0F1035] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-muted-foreground text-lg mb-12 font-mono">Behind every growing business, there is:</p>
          </FadeUp>
          {["A dream,", "A struggle,", "A family,", "and a vision for something bigger."].map((line, i) => (
            <FadeUp key={line} delay={i * 0.15}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-3">
                {line}
              </p>
            </FadeUp>
          ))}
          <FadeUp delay={0.6}>
            <div className="w-24 h-1 bg-primary mx-auto my-12 rounded-full" />
            <p className="text-2xl sm:text-3xl font-display font-semibold text-muted-foreground">
              ASKreativ helps transform that vision into{" "}
              <span className="text-white">digital growth.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[#0A0B1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— ABOUT US</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Building Smarter Digital Growth for Modern Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ASKreativ Global Solutions is an AI-powered digital growth company helping businesses scale through automation, branding, marketing, websites, ERP systems, and modern digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine creativity, technology, AI, and strategy to build intelligent digital ecosystems designed for visibility, efficiency, and long-term business growth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                data-testid="link-about-more"
              >
                Explore More About ASKreativ
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative border border-primary/20 rounded-2xl p-8 bg-[#141630]/50 hover:border-primary/40 transition-colors hover:shadow-[0_0_40px_rgba(232,119,34,0.08)]">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {[
                    { cx: 200, cy: 150, r: 20, label: "ASKreativ" },
                    { cx: 80, cy: 80, r: 14, label: "AI" },
                    { cx: 320, cy: 80, r: 14, label: "SEO" },
                    { cx: 80, cy: 220, r: 14, label: "ERP" },
                    { cx: 320, cy: 220, r: 14, label: "Apps" },
                    { cx: 200, cy: 50, r: 12, label: "Branding" },
                    { cx: 200, cy: 250, r: 12, label: "Marketing" },
                  ].map((node, i) => (
                    <g key={i}>
                      {i > 0 && (
                        <motion.line
                          x1={200} y1={150} x2={node.cx} y2={node.cy}
                          stroke="#E87722" strokeWidth="1" opacity="0.3"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      )}
                      <circle
                        cx={node.cx} cy={node.cy} r={node.r}
                        fill={i === 0 ? "#E87722" : "#1A1F6E"}
                        stroke={i === 0 ? "#F5A623" : "#E87722"}
                        strokeWidth="1"
                        opacity={0.9}
                      />
                      <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="white" fontSize={i === 0 ? "8" : "6"} fontFamily="DM Sans">
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— OUR SERVICES</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
              AI Automation, Digital Marketing & Development Solutions Built for Modern Business Growth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered automation to digital marketing, ERP systems, websites, mobile applications, and branding, ASKreativ helps businesses build intelligent digital ecosystems.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all group" data-testid="link-all-services">
              Explore All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>

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
                      <h3 className="text-white font-semibold mb-2 font-display">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{s.desc}</p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={16} className="text-primary" />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3} className="mt-12">
            <div className="border-l-4 border-primary bg-[#141630] rounded-r-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-display font-bold text-lg">Your Business Needs More Than Marketing.</p>
                <p className="text-muted-foreground">It Needs an Intelligent Growth Ecosystem.</p>
              </div>
              <button
                onClick={openModal}
                className="shrink-0 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(232,119,34,0.4)] whitespace-nowrap"
                data-testid="button-services-hook"
              >
                Let's Build Your Digital Future →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-[#0A0B1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— OUR CLIENTS</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Trusted by Growing Businesses & Modern Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From educational institutions and startups to business owners and growing enterprises, ASKreativ Global Solutions helps organizations build stronger digital visibility, automation systems, branding, and scalable growth ecosystems.
            </p>
          </FadeUp>

          <FadeUp className="overflow-hidden py-6 mb-12">
            <div className="relative flex overflow-x-hidden">
              <motion.div
                className="flex gap-4 shrink-0"
                animate={{ x: [0, -1200] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...industries, ...industries].map((ind, i) => (
                  <span
                    key={i}
                    className="shrink-0 px-5 py-2.5 border border-primary/30 text-muted-foreground text-sm rounded-full bg-primary/5 whitespace-nowrap hover:bg-primary/10 hover:text-white transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </motion.div>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {["A Story", "A Vision and Mission", "A Value", "A Responsibility"].map((item, i) => (
              <FadeUp key={item} delay={i * 0.1}>
                <div className="bg-[#141630] border border-white/8 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                  <p className="text-white font-display font-bold text-xl">{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every business has a growth story. ASKreativ works as a long-term digital growth partner focused on helping brands grow smarter through AI, automation, branding, and modern digital infrastructure.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#0F1035] border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex flex-wrap justify-center divide-x divide-white/10">
              <CounterStat label1="Multiple" label2="Projects Delivered" />
              <CounterStat label1="AI-Powered" label2="Growth Solutions" />
              <CounterStat label1="Multi-Industry" label2="Experience" />
              <CounterStat label1="Future-Ready" label2="Digital Systems" />
            </div>
          </div>
          <FadeUp delay={0.2} className="mt-16">
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl border border-primary/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-2xl font-display font-bold text-white text-center sm:text-left">Let's Build Something Bigger Together</p>
              <button
                onClick={openModal}
                className="shrink-0 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)] hover:scale-105"
                data-testid="button-stats-cta"
              >
                Partner With ASKreativ →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#0A0B1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— OUR PROCESS</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
              We Build Connected Digital Ecosystems for Long-Term Business Success.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At ASKreativ Global Solutions, every project is built with strategy, creativity, AI automation, and measurable growth in mind. We don't just deliver services — we build connected digital ecosystems.
            </p>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.1}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="flex-1">
                      <div className={`bg-[#141630] border border-white/8 rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.08)] ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                        <span className="text-xs font-mono text-primary mb-3 block">{step.num} —</span>
                        <h3 className="text-white font-display font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-12 h-12 rounded-full border-2 border-primary bg-[#0A0B1A] items-center justify-center shrink-0 z-10">
                      <span className="text-primary font-mono text-xs font-bold">{step.num}</span>
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.3} className="mt-16 text-center">
            <div className="bg-[#0F1035] border border-white/8 rounded-2xl p-10">
              <h3 className="text-3xl font-display font-bold text-white mb-2">
                From Vision to Digital Growth,{" "}
                <span className="text-primary">We Build Systems That Scale Businesses.</span>
              </h3>
              <button
                onClick={openModal}
                className="mt-6 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
                data-testid="button-process-cta"
              >
                Let's Build Your Future With ASKreativ →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— LATEST INSIGHTS</span>
            <h2 className="text-4xl font-display font-bold text-white">From Our Blog</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`}>
                  <div className="group h-full bg-[#141630] border border-white/8 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(232,119,34,0.1)] hover:-translate-y-1 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full mb-4">{post.tag}</span>
                    <h3 className="text-white font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                      <span>{post.date}</span>
                      <span className="text-primary group-hover:gap-2 flex items-center gap-1 transition-all">Read More <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3} className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group" data-testid="link-all-articles">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A0B1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— FAQs</span>
            <h2 className="text-4xl font-display font-bold text-white leading-tight">
              Frequently Asked Questions About<br />Digital Marketing Agency Hyderabad
            </h2>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
          <FadeUp delay={0.2} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Looking for a Digital Marketing Agency in Hyderabad?</p>
            <button
              onClick={openModal}
              className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-faq-cta"
            >
              Let's Build Your Digital Growth System →
            </button>
          </FadeUp>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[9990] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        data-testid="link-whatsapp"
      >
        <FaWhatsapp size={24} className="text-white" />
      </a>
    </main>
  );
}
