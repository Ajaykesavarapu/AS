import { useParams, Link, useLocation } from "wouter";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, type LucideIcon, Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, PenTool, Megaphone, BarChart3, Video } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} 
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface ServiceData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroImg: string;
  intro: string[];
  why: { title: string; desc: string }[];
  services: { title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  cta: { title: string; sub: string; btn: string };
  seo: { title: string; description: string };
}

const serviceData: Record<string, ServiceData> = {
  "website-development-services-hyderabad": {
    icon: Code2,
    title: "Website Development Services",
    subtitle: "Your Website Should Not Just Look Good. It Should Make Your Business Grow.",
    heroImg: "/Images/website%20development_hero.jpeg",
    seo: {
      title: "Website Development Services Hyderabad | ASKreativ",
      description: "ASKreativ provides website development services in Hyderabad with modern, fast, SEO-friendly, and business-focused websites."
    },
    intro: [
      "A customer visits your website before they trust your business. If the website feels outdated, slow, confusing, or unprofessional, people leave within seconds.",
      "At ASKreativ Global Solutions, we create websites that are not just visually attractive but strategically designed for business growth. As a company providing Website Development Services in Hyderabad, we help businesses build modern digital presence, customer trust, better engagement, and long-term online visibility."
    ],
    why: [
      { title: "Modern & Professional Design", desc: "We create clean and modern websites that improve customer trust and brand value." },
      { title: "Mobile-Friendly Experience", desc: "Your website will work smoothly across mobiles, tablets, laptops, and desktops." },
      { title: "SEO-Friendly Structure", desc: "We develop websites with proper SEO structure to help businesses improve Google visibility." },
      { title: "Fast Loading Performance", desc: "We optimize websites for speed, smooth performance, and a better user experience." },
    ],
    services: [
      { title: "Business Websites", desc: "Professional websites designed for growing businesses that want better visibility and customer engagement." },
      { title: "Corporate Websites", desc: "Modern corporate websites that represent your company professionally and build a stronger brand identity." },
      { title: "E-Commerce Websites", desc: "Online shopping websites designed for a smooth user experience, product visibility, and online sales growth." },
      { title: "Landing Pages", desc: "High-converting landing pages designed for campaigns, advertisements, and lead generation." },
      { title: "Educational Websites", desc: "Websites for schools, colleges, academies, and institutions focused on admissions and student engagement." },
      { title: "Custom Website Solutions", desc: "Customized website development based on your business goals and operational requirements." }
    ],
    benefits: ["Modern & Professional Design", "Mobile-Friendly Experience", "SEO-Friendly Structure", "Fast Loading Performance", "Simple User Experience"],
    faqs: [
      { q: "Why is a professional website important for businesses?", a: "A professional website helps businesses improve trust, visibility, branding, and customer engagement." },
      { q: "Will my website be mobile-friendly?", a: "Yes. Every website we develop is fully responsive across all devices." },
      { q: "Do you create SEO-friendly websites?", a: "Yes. We build websites with an SEO-friendly structure and optimized performance for better search visibility." },
      { q: "Can ASKreativ redesign existing websites?", a: "Absolutely. We redesign old websites into modern, fast, and professional digital platforms." }
    ],
    cta: { title: "Your Website Should Work Like a Growth Engine for Your Business.", sub: "Build Your Professional Website With ASKreativ →", btn: "Create Your Digital Presence" },
  },
  "seo-services-hyderabad": {
    icon: Search,
    title: "SEO Services",
    subtitle: "Your Customers Are Searching Online Every Day. Can They Find Your Business?",
    heroImg: "/Images/digital-marketing%20service_hero.jpeg",
    seo: {
      title: "SEO Services Hyderabad | ASKreativ Global Solutions",
      description: "ASKreativ provides SEO services in Hyderabad to improve Google rankings, organic traffic, online visibility, and business growth."
    },
    intro: [
      "People search on Google before they buy a product, contact a company, or book a service. If your business does not appear in search results, customers may never discover you.",
      "At ASKreativ Global Solutions, we provide SEO Services in Hyderabad designed to help businesses improve search visibility, attract the right audience, and build a strong online presence."
    ],
    why: [
      { title: "People Trust What They Find on Google", desc: "When your business appears in search results, customers automatically see your brand as more trustworthy." },
      { title: "SEO Creates Long-Term Visibility", desc: "Unlike temporary advertisements, SEO continues to bring visibility over time." },
      { title: "Better Rankings Bring Better Opportunities", desc: "Most customers click on businesses that appear on the first page of Google." },
      { title: "Modern SEO Approach", desc: "We focus on SEO, AI visibility, structured optimization, and future-ready search strategies." },
    ],
    services: [
      { title: "On-Page SEO", desc: "Optimizing website structure, content, keywords, and pages for search visibility." },
      { title: "Technical SEO", desc: "Improving website performance, indexing, speed, and mobile responsiveness." },
      { title: "Local SEO", desc: "Helping nearby customers easily find your services online through local search visibility." },
      { title: "Keyword Research", desc: "Identifying relevant search keywords based on customer behavior and industry trends." },
      { title: "SEO Content Optimization", desc: "Creating content designed to improve visibility, readability, and search performance." },
      { title: "SEO Audits", desc: "Analyzing websites to identify SEO issues and optimization opportunities." },
      { title: "Link Building", desc: "Improving authority through ethical off-page SEO and quality backlink strategies." }
    ],
    benefits: ["Better rankings", "Organic traffic", "Local visibility", "Search-focused digital strategies", "Transparent process"],
    faqs: [
      { q: "Why are SEO services important for businesses?", a: "SEO helps businesses improve online visibility, attract organic traffic, and build long-term digital presence." },
      { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. Results usually improve gradually based on competition and website performance." },
      { q: "Can SEO help local businesses?", a: "Yes. Local SEO helps businesses improve visibility among nearby customers searching for services online." },
      { q: "Is SEO better than paid advertising?", a: "SEO and paid advertising work differently. SEO provides long-term organic visibility, while paid ads provide immediate traffic." }
    ],
    cta: { title: "Better Visibility Creates Better Business Opportunities.", sub: "Improve Your Search Visibility With ASKreativ →", btn: "Improve Your Search Presence" },
  },
  "ai-automation-services-hyderabad": {
    icon: Cpu,
    title: "AI & Automation Services",
    subtitle: "Modern Businesses Grow Faster With Intelligent Automation",
    heroImg: "/Images/AI%20&Automation_hero.jpeg",
    seo: {
      title: "AI Automation Services Hyderabad | ASKreativ",
      description: "ASKreativ provides AI automation services in Hyderabad, including AI chatbots, WhatsApp automation, CRM systems, and workflow automation."
    },
    intro: [
      "In today's competitive digital environment, speed, consistency, and customer experience play a major role in business growth. Every delayed response or manual process can lead to lost opportunities.",
      "At ASKreativ Global Solutions, we develop intelligent automation solutions that help businesses automate repetitive tasks, manage leads, and streamline workflows."
    ],
    why: [
      { title: "Faster Customer Communication", desc: "Automation helps businesses respond quickly and improve customer experience." },
      { title: "Better Operational Efficiency", desc: "Smart systems reduce manual work and improve workflow management." },
      { title: "Improved Lead Conversion", desc: "Automated lead nurturing helps businesses engage customers consistently and professionally." },
      { title: "Scalable Business Operations", desc: "Automation systems help businesses handle growth more efficiently without complexity." },
    ],
    services: [
      { title: "AI Chatbots (FAQs & LLM)", desc: "Smart chatbots designed to handle enquiries, FAQs, lead capture, and support 24/7." },
      { title: "Workflow Automation", desc: "Automating repetitive business processes to improve productivity and task execution." },
      { title: "Email Automation", desc: "Automated email systems for follow-ups, enquiry nurturing, and customer engagement." },
      { title: "CRM Setup & Integration", desc: "Helping businesses organize leads, track communication, and centralize operations." },
      { title: "WhatsApp API Integration", desc: "Automated responses, notifications, and enquiry management via WhatsApp." },
      { title: "Lead Management Automation", desc: "Automatically capture and track leads from websites, forms, and social media." }
    ],
    benefits: ["Human-centered automation", "Customized business solutions", "Future-ready technology", "Scalable operations", "Better efficiency"],
    faqs: [
      { q: "How can AI automation help businesses grow?", a: "AI automation improves efficiency by automating communication, managing leads, and streamlining workflows." },
      { q: "What are AI chatbots used for?", a: "AI chatbots handle customer enquiries, FAQs, lead capture, and support requests with faster responses." },
      { q: "Can ASKreativ create customized automation solutions?", a: "Yes. ASKreativ develops customized AI and automation systems based on business workflows and needs." },
      { q: "What is the benefit of CRM integration?", a: "CRM integration helps businesses organize customer data, manage leads efficiently, and track communication." }
    ],
    cta: { title: "Smarter Systems Create Smarter Businesses.", sub: "Automate Your Business With ASKreativ →", btn: "Build Smarter Business Operations" },
  },
  "social-media-marketing-services-hyderabad": {
    icon: Share2,
    title: "Social Media Marketing Services",
    subtitle: "Your Audience Is Already on Social Media. Does Your Brand Stand Out?",
    heroImg: "/Images/Social%20media%20marketing_hero.jpeg",
    seo: {
      title: "Social Media Marketing Services Hyderabad | ASKreativ",
      description: "ASKreativ provides social media marketing services in Hyderabad focused on branding, engagement, paid ads, audience growth, and ROI."
    },
    intro: [
      "Today, social media is where brands build trust and buying decisions begin. A strong social media presence helps businesses improve visibility and connect with the right audience.",
      "At ASKreativ Global Solutions, we create social media strategies designed to help businesses grow through creativity, storytelling, and audience engagement."
    ],
    why: [
      { title: "People Connect With Brands First", desc: "Modern customers interact with brands through social platforms before making decisions." },
      { title: "Visibility Builds Recognition", desc: "The more consistently your brand appears online, the more familiar it becomes." },
      { title: "Engagement Creates Real Growth", desc: "Good engagement helps businesses generate enquiries and improve loyal audience growth." },
      { title: "Creativity Meets Data Strategy", desc: "Every campaign is built using audience insights and performance tracking." },
    ],
    services: [
      { title: "Social Media Strategy", desc: "Customized strategies based on audience behavior, goals, and industry trends." },
      { title: "Social Media Management", desc: "Content planning, scheduling, and consistency across all major platforms." },
      { title: "Content Creation", desc: "Creating social media creatives, marketing visuals, reels, and branded content." },
      { title: "Paid social advertising", desc: "Performance-focused campaigns designed to improve reach and generate leads." },
      { title: "Community Management", desc: "Building stronger digital communities through audience interaction and engagement." },
      { title: "Influencer Marketing", desc: "Collaborations focused on audience trust, brand awareness, and growth." }
    ],
    benefits: ["Human-centered content", "Consistent brand presence", "Performance-focused execution", "Long-term growth strategy", "Audience connection"],
    faqs: [
      { q: "Why is social media marketing important?", a: "It helps businesses improve visibility, strengthen branding, and generate customer engagement." },
      { q: "Do you create content for social platforms?", a: "Yes. We create creatives, captions, reels, videos, and branded content." },
      { q: "What platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and others." },
      { q: "How do you measure performance?", a: "We track engagement, reach, audience growth, lead generation, and ROI." }
    ],
    cta: { title: "Social Media Is Where Modern Brands Build Visibility & Trust.", sub: "Grow Your Brand With ASKreativ →", btn: "Grow Your Social Community" },
  },
  "ppc-services-hyderabad": {
    icon: BarChart3,
    title: "PPC Services",
    subtitle: "Instant Visibility. Targeted Reach. Measurable Growth.",
    heroImg: "/Images/Advertising_hero.jpeg",
    seo: {
      title: "PPC Services Hyderabad | ASKreativ Global Solutions",
      description: "ASKreativ provides PPC services in Hyderabad focused on targeted advertising, lead generation, audience reach, conversions, and ROI."
    },
    intro: [
      "Pay-Per-Click Advertising (PPC) helps businesses appear at the top of search results when potential customers are actively searching. It allows businesses to reach high-intent audiences and generate faster traffic.",
      "At ASKreativ Global Solutions, we create performance-driven PPC campaigns designed to help businesses maximize visibility and optimize advertising spend."
    ],
    why: [
      { title: "Reach Customers at the Right Moment", desc: "PPC places your business in front of customers exactly when they are searching." },
      { title: "Faster Results Than Organic", desc: "PPC helps businesses generate immediate online exposure and traffic." },
      { title: "Better Audience Targeting", desc: "Target audiences based on location, interests, search behavior, and demographics." },
      { title: "Measurable Performance & ROI", desc: "Every campaign can be tracked and optimized using real-time data." },
    ],
    services: [
      { title: "PPC Strategy & Planning", desc: "Customized strategies based on business goals and market opportunities." },
      { title: "Keyword & Audience Research", desc: "Identifying high-intent search keywords and customer behavior." },
      { title: "Campaign Setup & Execution", desc: "Managing ad structure, bidding strategy, and landing page alignment." },
      { title: "Performance Optimization", desc: "Continuous improvement of keywords, ad performance, and budget allocation." },
      { title: "Google & YouTube Ads", desc: "Advertising solutions across search, display, and video platforms." }
    ],
    benefits: ["Instant traffic and leads", "Measurable ROI", "Precise targeting", "Strategic campaign planning", "Continuous optimization"],
    faqs: [
      { q: "What is PPC advertising?", a: "It's a digital model where businesses pay only when users click on their advertisements." },
      { q: "How soon do I see results?", a: "PPC can generate traffic and visibility quickly once campaigns are launched and optimized." },
      { q: "Which platforms do you use?", a: "We manage campaigns across Google Ads, YouTube Ads, display, and social media platforms." },
      { q: "How do you optimize campaigns?", a: "We continuously optimize keywords, targeting, and bidding to improve ROI." }
    ],
    cta: { title: "Smart Advertising Creates Smarter Business Growth.", sub: "Launch Your PPC Campaign With ASKreativ →", btn: "Launch Your PPC Campaign" },
  },
  "digital-content-video-production-services-hyderabad": {
    icon: Video,
    title: "Digital Content & Video Production",
    subtitle: "Strong Content Builds Strong Brand Presence.",
    heroImg: "/Images/blogs.jpeg",
    seo: {
      title: "Digital Content & Video Production Hyderabad | ASKreativ",
      description: "ASKreativ provides digital content and video production services in Hyderabad, focused on branding, engagement, storytelling, and audience growth."
    },
    intro: [
      "In today's digital world, people connect with brands through content and storytelling. Good content helps businesses build trust, improve engagement, and educate audiences.",
      "At ASKreativ Global Solutions, we create strategic digital content and professional video production designed to help brands communicate effectively and stand out."
    ],
    why: [
      { title: "Content Builds Brand Authority", desc: "Professional content helps businesses appear more trustworthy and credible online." },
      { title: "Videos Improve Engagement", desc: "People engage more with visual content because it feels more interactive." },
      { title: "Consistent Content Improves Visibility", desc: "Regular content helps brands remain active and relevant online." },
      { title: "Creative Design Strengthens Identity", desc: "Strong visuals improve recognition and overall brand experience." },
    ],
    services: [
      { title: "Content Strategy", desc: "Customized strategies based on audience behavior and brand objectives." },
      { title: "Content Creation", desc: "Professional content for websites, social media, and marketing campaigns." },
      { title: "Video Production", desc: "Promotional videos, advertisements, and social media storytelling." },
      { title: "Multi-Language Content", desc: "Developing content across different languages to improve audience reach." }
    ],
    benefits: ["Creative & Strategic Approach", "Professional Quality", "Audience-Focused Communication", "Consistent Brand Storytelling", "Impactful communication"],
    faqs: [
      { q: "Why is digital content important?", a: "It helps improve engagement, strengthen authority, and connect with audiences online." },
      { q: "How does video production help?", a: "Video content improves engagement, visibility, and emotional customer connection." },
      { q: "Do you provide graphic design?", a: "Yes. We create social search creatives, ads, brochures, and branding materials." },
      { q: "Can you create multilingual content?", a: "Yes. We develop multi-language content to connect with wider audiences." }
    ],
    cta: { title: "Great Content Creates Stronger Digital Connections.", sub: "Create Impactful Content With ASKreativ →", btn: "Create Your Digital Story" },
  },
  "graphic-design-services-hyderabad": {
    icon: PenTool,
    title: "Graphic Design Services",
    subtitle: "Design Is the First Thing People Notice About Your Brand.",
    heroImg: "/Images/branding_hero.jpeg",
    seo: {
      title: "Graphic Design Services Hyderabad | ASKreativ",
      description: "ASKreativ provides graphic design services in Hyderabad focused on branding, social media creatives, advertising designs, and visual identity."
    },
    intro: [
      "Before people read your content or contact your business, they notice your design. A strong visual identity helps build trust, improve recognition, and create professionalism.",
      "At ASKreativ Global Solutions, we create designs that combine creativity, clarity, and branding to help businesses present themselves confidently."
    ],
    why: [
      { title: "Good Design Builds Trust", desc: "Professional design helps businesses look more credible and organized." },
      { title: "Visual Identity Creates Recognition", desc: "Strong branding helps customers remember your business and improves familiarity." },
      { title: "Creative Designs Improve Engagement", desc: "Well-designed visuals attract attention across social media and marketing campaigns." },
      { title: "Audience-Oriented Creativity", desc: "Our designs are built to attract attention and create meaningful impact." },
    ],
    services: [
      { title: "Brand Identity Design", desc: "Professional branding elements for a strong visual identity." },
      { title: "Social Media Creatives", desc: "Engagement-focused designs for social platforms and promotions." },
      { title: "Admission Campaign Designs", desc: "Creative materials for educational institutions to improve visibility." },
      { title: "Brochure & Print Design", desc: "Professional brochures for business communication and marketing." },
      { title: "Event Branding", desc: "Creative solutions for seminars, conferences, and launches." },
      { title: "Stationery Design", desc: "Professional business cards, letterheads, and office materials." }
    ],
    benefits: ["Brand-Focused Communication", "Consistent Design Language", "Modern Creativity", "Meaningful Visual Impact", "Trust building"],
    faqs: [
      { q: "Why is graphic design important?", a: "It helps businesses improve branding, build trust, and communicate visually." },
      { q: "What design services do you provide?", a: "We provide branding, creatives, brochures, ads, and stationery design." },
      { q: "Can you create campaign designs?", a: "Yes. We create designs for admissions, advertisements, and marketing campaigns." },
      { q: "Do you offer custom solutions?", a: "Yes. We create customized designs based on your specific branding goals." }
    ],
    cta: { title: "Strong Brands Begin With Strong Design.", sub: "Build Your Brand Identity With ASKreativ →", btn: "Strengthen Your Brand" },
  },
  "mobile-app-development-services-hyderabad": {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Your Customers Are on Mobile. Your Business Should Be There Too.",
    heroImg: "/Images/mobile%20app_hero.jpeg",
    seo: {
      title: "Mobile App Development Services Hyderabad | ASKreativ",
      description: "ASKreativ provides mobile app development services in Hyderabad for Android, iOS, business apps, CRM integration, and scalable mobile solutions."
    },
    intro: [
      "Today, people use mobile applications for everything from shopping to learning. Modern businesses need mobile apps that are fast, user-friendly, and secure.",
      "At ASKreativ Global Solutions, we develop modern, high-performance mobile applications designed to improve accessibility and digital growth."
    ],
    why: [
      { title: "Customers Prefer Mobile Convenience", desc: "Help your business stay accessible, connected, and customer-friendly." },
      { title: "Better UX Improves Engagement", desc: "Easy-to-use applications improve customer interaction and satisfaction." },
      { title: "Mobile Apps Improve Efficiency", desc: "Apps help simplify business communication, workflows, and management." },
      { title: "Scalable Mobile Platforms", desc: "Modern applications support future growth and operational flexibility." },
    ],
    services: [
      { title: "Android & iOS Development", desc: "Scalable applications designed for performance and seamless functionality." },
      { title: "Business & Service Apps", desc: "Custom applications for business operations and customer accessibility." },
      { title: "Educational Institution Apps", desc: "Smart applications for admissions, attendance, and record management." },
      { title: "Attendance & HR Apps", desc: "Simplifying workforce management and reporting systems." },
      { title: "CRM Integrated Apps", desc: "Integrated applications designed to manage leads and centralize data." },
      { title: "E-Commerce Mobile Apps", desc: "Modern shopping applications designed for product visibility and sales." }
    ],
    benefits: ["Modern UI/UX Design", "Performance-Focused", "Secure & Scalable", "Business-Oriented Solutions", "Convenience-driven trust"],
    faqs: [
      { q: "Why does my business need a mobile app?", a: "It improves customer engagement, accessibility, and digital operations." },
      { q: "Do you develop for both Android and iOS?", a: "Yes. ASKreativ develops applications for both major mobile platforms." },
      { q: "Do you provide CRM integration?", a: "Yes. We create CRM-integrated apps for lead and customer management." },
      { q: "Do you provide app maintenance?", a: "Yes. We provide ongoing maintenance, updates, and performance optimization." }
    ],
    cta: { title: "The Future of Business Is Mobile, Fast & Connected.", sub: "Build Your Mobile App With ASKreativ →", btn: "Launch Your Mobile App" },
  },
  "erp-management-systems-hyderabad": {
    icon: Grid3x3,
    title: "ERP Management Systems",
    subtitle: "Smarter Systems Create Smarter Business Operations.",
    heroImg: "/Images/ERP_hero.jpeg",
    seo: {
      title: "ERP Management Systems Hyderabad | ASKreativ",
      description: "ASKreativ provides ERP management systems in Hyderabad focused on automation, workflow management, CRM integration, and business efficiency."
    },
    intro: [
      "Managing multiple operations manually can slow down productivity and create confusion. Businesses need systems that centralize information and automate workflows.",
      "At ASKreativ Global Solutions, we develop intelligent ERP Management Systems designed to help businesses and institutions streamline operations through one ecosystem."
    ],
    why: [
      { title: "Centralized Management", desc: "Manage multiple operations from one integrated platform efficiently." },
      { title: "Automation Reduces Manual Work", desc: "Smart automation improves workflow management and reduces repetitive tasks." },
      { title: "Real-Time Monitoring", desc: "Dashboards and reporting systems help businesses track performance effectively." },
      { title: "Better Organization Supports Growth", desc: "Well-structured systems improve productivity and long-term scalability." },
    ],
    services: [
      { title: "Student Management Systems", desc: "ERP solutions for educational records, admissions, and academics." },
      { title: "Attendance Management", desc: "Smart tracking systems for institutions and workforce management." },
      { title: "HR & Employee Management", desc: "Simplifying employee records, leave, payroll, and internal workflows." },
      { title: "Finance & Billing Management", desc: "Integrated systems for financial tracking and operational transparency." },
      { title: "Lead & Admission Management", desc: "Automation systems designed to manage enquiries and follow-ups." },
      { title: "CRM Integration", desc: "Connected systems to organize customer info and track communication." }
    ],
    benefits: ["Scalable ERP Solutions", "Secure & Reliable", "User-Friendly Experience", "Customized for Workflow", "Real-time analytics"],
    faqs: [
      { q: "What is an ERP Management System?", a: "A centralized platform to manage operations, workflows, data, and processes." },
      { q: "How can ERP improve business?", a: "By automating workflows, reducing manual work, and increasing overall efficiency." },
      { q: "Can ERP help educational institutions?", a: "Yes. It helps manage admissions, student records, and academics efficiently." },
      { q: "Why is CRM integration important?", a: "It helps organize customer data and improve relationship management." }
    ],
    cta: { title: "Better Systems Create Better Business Growth.", sub: "Build Your ERP System With ASKreativ →", btn: "Build Connected Systems" },
  },
  "traditional-marketing-services-hyderabad": {
    icon: Megaphone,
    title: "Traditional Marketing Services",
    subtitle: "Digital Marketing May Be the Future, But Traditional Still Always Matters.",
    heroImg: "/Images/services-hero.jpeg",
    seo: {
      title: "Traditional Marketing Services Hyderabad | ASKreativ",
      description: "ASKreativ provides traditional marketing services in Hyderabad including hoardings, banners, newspaper ads, outdoor campaigns, and promotions."
    },
    intro: [
      "Traditional marketing continues to create local trust, public recognition, and long-lasting brand recall. It keeps brands connected with people in the real world.",
      "At ASKreativ Global Solutions, we create offline marketing campaigns designed to improve local visibility, audience reach, and customer trust."
    ],
    why: [
      { title: "Offline Visibility Creates Presence", desc: "Roadside hoardings and banners help businesses stay familiar in local communities." },
      { title: "Traditional Marketing Builds Trust", desc: "Repeated visibility in public spaces creates stronger trust and credibility." },
      { title: "Physical Advertising Recall", desc: "People often remember brands they physically see in public locations." },
      { title: "Supports Digital Growth", desc: "Traditional and digital marketing work stronger together combined strategically." },
    ],
    services: [
      { title: "Hoardings & Outdoor Ads", desc: "Large-scale campaigns designed to improve public visibility and local branding." },
      { title: "Banner Design & Promotions", desc: "Professional banners for businesses, institutions, and local events." },
      { title: "Pamphlets & Flyer Campaigns", desc: "Creative print materials to communicate offers and services effectively." },
      { title: "Newspaper Advertisements", desc: "Strategic newspaper campaigns designed for trust and public awareness." },
      { title: "Event Promotions", desc: "Creative branding and promotional support for seminars and launches." },
      { title: "Outdoor Campaigns", desc: "Impactful outdoor promotions to improve local audience connection." }
    ],
    benefits: ["Creative & Strategic Planning", "Strong Local Branding", "Integrated Marketing Solutions", "Professional Execution", "Local trust"],
    faqs: [
      { q: "Is traditional marketing still important?", a: "Yes. It continues to create local visibility, public trust, and recognition." },
      { q: "How does it help businesses?", a: "It improves local awareness, reach, and physical brand presence." },
      { q: "What services do you provide?", a: "Hoardings, banners, pamphlets, newspaper ads, and event promotions." },
      { q: "Can it work with digital marketing?", a: "Yes. Combining both creates stronger overall brand visibility and reach." }
    ],
    cta: { title: "Strong Brands Grow Online. Legendary Brands Stay Visible Everywhere.", sub: "Build Your Brand Presence With ASKreativ →", btn: "Expand Your Brand Reach" },
  },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const [location] = useLocation();
  
  // Resolve slug from params or from the absolute path (for SEO routes)
  const slug = params.slug || location.replace(/^\//, "");
  
  const { openModal } = useModal();
  const service = serviceData[slug];

  if (!service) {
    return (
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--fg-light)", marginBottom: "16px" }}>Service not found.</p>
          <Link href="/services" style={{ color: "var(--orange)", fontWeight: 600 }}>← Back to Services</Link>
        </div>
      </main>
    );
  }

  useSEO(service.seo);

  const Icon = service.icon;

  return (
     <main>
       {/* ── HERO ─────────────────────────────────────────────────────── */}
       <section className="shiftwave-hero">
         <img
           src={service.heroImg}
           alt={service.title}
           className="shiftwave-hero-media"
         />
         <div className="shiftwave-hero-overlay" />
         <div className="shiftwave-hero-cta">
           <FadeUp>
             <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
               <button onClick={openModal} className="btn-primary" style={{ padding: "16px 32px", fontSize: "16px" }}>
                 Get a Free Consultation <ArrowRight size={18} />
               </button>
             </div>
           </FadeUp>
         </div>
       </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>WHY IT MATTERS</span>
            <h2 className="section-title">Essential For <span>Your Growth</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {service.why.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.1}>
                <div className="card glass-card" style={{ height: "100%", padding: "32px", borderRadius: "24px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "14px" }}>{w.title}</h3>
                  <p style={{ fontSize: "15px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTIONS ────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>WHAT WE OFFER</span>
            <h2 className="section-title">Our Specific <span>Solutions</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
            {service.services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div style={{ display: "flex", gap: "20px", padding: "32px", borderRadius: "24px", background: "var(--card-bg)", border: "1px solid var(--card-border)" }} className="card">
                  <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4px" }}>
                    <CheckCircle size={18} style={{ color: "var(--orange)" }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "17px", marginBottom: "10px" }}>{s.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.8", margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="max-lg:block">
            <FadeUp>
               <h2 className="section-title">Why Visionary Brands <span>Choose Us</span></h2>
               <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                 {service.benefits.map((b) => (
                   <div key={b} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                     <CheckCircle size={20} style={{ color: "var(--orange)" }} />
                     <span style={{ fontSize: "16px", fontWeight: 500 }}>{b}</span>
                   </div>
                 ))}
               </div>
               <button onClick={openModal} className="btn-primary">Connect With Us <ArrowRight size={18} /></button>
            </FadeUp>
            <FadeUp delay={0.2}>
               <div className="card glass-card" style={{ padding: "48px", borderRadius: "32px" }}>
                 <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--orange)", marginBottom: "32px", textTransform: "uppercase" }}>Frequently Asked</div>
                 <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {service.faqs.map((f, i) => (
                      <div key={i}>
                        <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{f.q}</h4>
                        <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{f.a}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ padding: "0 20px" }}>
        <div className="container" style={{ background: "var(--orange)", borderRadius: "40px", padding: "100px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 100%)" }} />
           <FadeUp>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", marginBottom: "24px" }}>{service.cta.title}</h2>
             <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.9)", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px" }}>{service.cta.sub}</p>
             <button onClick={openModal} style={{ background: "#fff", color: "var(--orange)", padding: "20px 48px", borderRadius: "16px", fontSize: "17px", fontWeight: 700, border: "none", cursor: "pointer" }}>
               {service.cta.btn} <ArrowRight size={20} />
             </button>
           </FadeUp>
        </div>
      </section>
    </main>
  );
}
