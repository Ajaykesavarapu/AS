import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useModal } from "@/App";

const faqs = [
  { q: "Why should you choose ASKreativ as a digital marketing agency in Hyderabad?", a: "ASKreativ is a digital marketing agency in Hyderabad focused on AI automation, SEO, branding, websites, ERP systems, and scalable business growth solutions. We combine creativity, technology, and strategy to deliver measurable results for businesses across all industries." },
  { q: "How can a digital marketing agency in Hyderabad help your business grow?", a: "A digital marketing agency in Hyderabad helps businesses improve visibility, generate leads, increase customer engagement, and build stronger online branding. We create customized strategies that align with your business goals and target audience." },
  { q: "Does ASKreativ provide AI automation services in Hyderabad?", a: "Yes. ASKreativ provides AI automation services in Hyderabad, including AI chatbots, WhatsApp automation, CRM systems, and workflow automation. We help businesses automate repetitive tasks and focus on what matters most — growing their business." },
  { q: "Why is SEO important for businesses?", a: "SEO helps businesses improve Google rankings, increase organic traffic, attract local customers, and strengthen online visibility. In a competitive market, ranking on the first page of Google is one of the most cost-effective ways to grow your business." },
  { q: "Do we provide website development services in Hyderabad?", a: "Yes. ASKreativ develops modern business websites in Hyderabad designed for branding, lead generation, SEO, and customer engagement. Every website we build is optimized for performance, mobile responsiveness, and conversion." },
  { q: "Do we provide social media marketing services in Hyderabad?", a: "Yes. ASKreativ provides social media marketing services in Hyderabad, including Instagram marketing, Facebook marketing, LinkedIn management, reels, and branding campaigns. We help businesses build strong social media presences that drive real business results." },
  { q: "Can ASKreativ build ERP systems for businesses in Hyderabad?", a: "Yes. We develop ERP management systems in Hyderabad for attendance, HR, CRM, operations, billing, workflow management, and reporting. Our ERP systems are custom-built to match your specific business processes and scale with your growth." },
  { q: "Do we provide mobile app development services in Hyderabad?", a: "Yes. ASKreativ develops Android and iOS mobile applications in Hyderabad for businesses, educational institutions, and startups. We build scalable, user-friendly apps that enhance customer experience and drive business growth." },
  { q: "How long does SEO take for businesses in Hyderabad?", a: "SEO results usually take a few months, depending on competition, industry, website performance, and keyword difficulty. Most businesses see significant improvements within 3-6 months of consistent, strategic SEO work. The important thing is to start now." },
  { q: "Do you provide branding services in Hyderabad?", a: "Yes. ASKreativ provides branding services in Hyderabad, including brand identity design, creative design, advertising creatives, and digital branding solutions. We help businesses build strong, memorable brand identities that stand out in crowded markets." },
  { q: "How can I contact ASKreativ digital marketing agency Hyderabad?", a: "You can contact ASKreativ through our website contact form, email us at hello@askreativ.com, or directly schedule a free business consultation using the 'Book a Free Call' button on our website. We respond within 24 hours." },
  { q: "What industries does ASKreativ work with?", a: "We work with educational institutions, solar industries, healthcare and clinics, real estate companies, sports academies, startups and entrepreneurs, local businesses, corporate companies, e-commerce brands, restaurants and hospitality, and professional service providers." },
  { q: "Do you offer packages or custom pricing?", a: "All our solutions are customized to your specific business needs and budget. We don't believe in one-size-fits-all packages. Book a free consultation and we'll build a proposal tailored to your goals." },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border border-white/8 rounded-xl overflow-hidden transition-all ${open ? "border-primary/30" : ""}`}>
      <button
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${open ? "border-l-4 border-primary" : "border-l-4 border-transparent"}`}
        onClick={() => setOpen(v => !v)}
        data-testid={`button-faq-${q.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="text-white font-medium leading-snug">{q}</span>
        <span className="text-primary shrink-0 text-xl font-light">{open ? "×" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function FAQ() {
  const { openModal } = useModal();
  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— FAQs</span>
            <h1 className="text-5xl font-display font-extrabold text-white leading-tight mb-6">
              Frequently Asked Questions About Digital Marketing Agency Hyderabad
            </h1>
            <p className="text-muted-foreground">Everything you need to know about ASKreativ and our services.</p>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />)}
          </div>
          <FadeUp delay={0.2} className="mt-16 text-center">
            <p className="text-white font-display font-bold text-2xl mb-3">Looking for a Digital Marketing Agency in Hyderabad?</p>
            <p className="text-muted-foreground mb-6">Get a free consultation and discover how ASKreativ can grow your business.</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-faq-cta"
            >
              Let's Build Your Digital Growth System →
            </button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
