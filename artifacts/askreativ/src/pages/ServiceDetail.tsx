import { useParams } from "wouter";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, type LucideIcon } from "lucide-react";
import { useModal } from "@/App";

const serviceData: Record<string, { num: string; icon: LucideIcon; title: string; desc: string; benefits: string[]; features: string[] }> = {
  "digital-marketing": { num: "01", icon: Target, title: "Digital Marketing", desc: "Grow your business visibility, leads, and customer engagement through strategic digital marketing solutions designed for measurable growth. We build comprehensive campaigns that drive real business results.", benefits: ["Increased brand visibility across digital channels", "More qualified leads and conversions", "Data-driven campaign optimization", "Measurable ROI on every marketing rupee"], features: ["Search Engine Marketing (SEM)", "Email Marketing Campaigns", "Content Marketing Strategy", "Performance Analytics & Reporting"] },
  "ai-automation": { num: "02", icon: Cpu, title: "AI Automation", desc: "Transform manual business operations into smart automated workflows powered by AI, CRM systems, WhatsApp automation, and intelligent lead management. Cut costs and increase efficiency.", benefits: ["Reduce manual operational costs", "Faster lead response and follow-up", "24/7 automated customer communication", "Streamlined business workflows"], features: ["AI Chatbot Implementation", "WhatsApp Business Automation", "CRM Integration & Automation", "Lead Management Systems"] },
  "seo-services": { num: "03", icon: Search, title: "SEO Services", desc: "Improve search visibility, rankings, and organic traffic through modern SEO strategies built for Google and AI-powered search engines. Dominate your local and national search results.", benefits: ["Higher Google rankings for target keywords", "Increased organic website traffic", "Better local search visibility in Hyderabad", "Long-term sustainable growth"], features: ["Technical SEO Audit & Optimization", "Keyword Research & Strategy", "On-Page & Off-Page SEO", "Local SEO for Hyderabad businesses"] },
  "website-development": { num: "04", icon: Code2, title: "Website Development", desc: "We build modern, fast, and conversion-focused websites designed to strengthen branding, improve user experience, and generate business enquiries. Every site is built for performance.", benefits: ["Professional, conversion-focused design", "Fast loading speeds for better SEO", "Mobile-responsive across all devices", "Ongoing maintenance and support"], features: ["Custom Business Website Design", "E-Commerce Development", "Landing Page Development", "Website Speed Optimization"] },
  "social-media-marketing": { num: "05", icon: Share2, title: "Social Media Marketing", desc: "Build a strong digital presence through storytelling-driven social media strategies, creative campaigns, reels, and audience engagement. Turn followers into customers.", benefits: ["Stronger brand presence on social platforms", "Higher engagement and follower growth", "Creative content that converts", "Community building and management"], features: ["Instagram & Facebook Marketing", "LinkedIn B2B Marketing", "Reels & Video Content Creation", "Social Media Advertising"] },
  "erp-management-systems": { num: "06", icon: Grid3x3, title: "ERP Management Systems", desc: "Centralize operations with smart ERP systems for attendance, HR, CRM, billing, workflow management, and operational efficiency. Bring your entire business onto one platform.", benefits: ["Centralized business operations", "Automated HR and attendance management", "Better billing and invoice management", "Real-time operational insights"], features: ["Custom ERP Development", "HR & Attendance Management", "CRM & Sales Pipeline", "Billing & Invoice Systems"] },
  "mobile-app-development": { num: "07", icon: Smartphone, title: "Mobile App Development", desc: "Launch scalable Android and iOS applications designed to improve customer experience, accessibility, and digital business operations. We build apps that users love.", benefits: ["Reach customers on their smartphones", "Enhanced customer experience and loyalty", "Scalable architecture for growth", "Cross-platform Android & iOS apps"], features: ["Android App Development", "iOS App Development", "Cross-Platform Development", "App Maintenance & Updates"] },
  "branding-creative-design": { num: "08", icon: Palette, title: "Branding & Creative Design", desc: "Create a strong and memorable business identity through strategic branding, creative visuals, advertising designs, and digital experiences. Make your brand unforgettable.", benefits: ["Memorable, distinctive brand identity", "Professional visual design standards", "Consistent brand experience across channels", "Creative advertising that drives awareness"], features: ["Brand Identity & Logo Design", "Brand Guidelines & Style Guide", "Marketing Collateral Design", "Digital Advertising Creatives"] },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const { openModal } = useModal();
  const service = serviceData[slug];

  if (!service) {
    return (
      <main className="pt-24 min-h-screen bg-[#0A0B1A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Service not found.</p>
          <Link href="/services" className="text-primary hover:underline" data-testid="link-back-services">Back to Services</Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white text-sm mb-8 transition-colors group" data-testid="link-back-to-services">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono text-primary mb-3 block">{service.num} —</span>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <Icon size={28} className="text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-6">{service.title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.desc}</p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
                data-testid="button-service-cta"
              >
                Get a Free Consultation <ArrowRight size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#141630] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-display font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#141630] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-display font-bold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
