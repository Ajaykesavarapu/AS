import { useParams, Link } from "wouter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, type LucideIcon, Target, Cpu, Search, Code2, Share2, Grid3x3, Smartphone, Palette, PenTool, Megaphone } from "lucide-react";
import { useModal } from "@/App";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }} style={style}>
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
}

const serviceData: Record<string, ServiceData> = {
  "digital-marketing": {
    icon: Target,
    title: "Digital Marketing",
    subtitle: "Grow Your Business Visibility, Leads & Engagement",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    intro: [
      "In today's competitive digital landscape, having a strong online presence is no longer optional — it's essential.",
      "ASKreativ Global Solutions delivers comprehensive digital marketing strategies designed to improve visibility, generate qualified leads, and create meaningful customer engagement across all digital platforms.",
    ],
    why: [
      { title: "Increase Online Visibility", desc: "Reach more customers through strategic digital campaigns across search engines, social media, and digital channels." },
      { title: "Generate More Leads", desc: "Attract and convert qualified prospects through targeted marketing strategies built around your audience." },
      { title: "Measurable ROI", desc: "Every campaign is tracked, analyzed, and optimized to maximize your marketing investment." },
      { title: "Build Brand Authority", desc: "Establish your business as an industry leader through consistent, high-quality digital presence." },
    ],
    services: [
      { title: "Search Engine Marketing (SEM)", desc: "Target high-intent customers through strategic Google Ads and search campaigns that drive immediate traffic." },
      { title: "Email Marketing Campaigns", desc: "Nurture leads and retain customers through personalized email sequences and automated campaigns." },
      { title: "Content Marketing Strategy", desc: "Build authority and attract organic traffic through valuable, audience-focused content creation." },
      { title: "Influencer & Affiliate Marketing", desc: "Expand reach through strategic partnerships with influencers and affiliate networks in your industry." },
      { title: "Performance Analytics & Reporting", desc: "Comprehensive tracking, reporting, and optimization across all digital marketing channels." },
    ],
    benefits: ["Increased brand visibility across digital channels", "More qualified leads and conversions", "Data-driven campaign optimization", "Measurable ROI tracking", "Competitive market positioning", "Consistent audience engagement"],
    faqs: [
      { q: "How long before I see digital marketing results?", a: "Results vary by channel. Paid campaigns deliver results quickly, while SEO and content take 3–6 months. We set realistic timelines from the start." },
      { q: "What digital marketing channels do you use?", a: "We use SEO, PPC, social media, email marketing, content marketing, and influencer partnerships depending on your goals and audience." },
      { q: "How do you measure campaign success?", a: "We track website traffic, leads, conversions, engagement rates, cost per lead, and ROI using advanced analytics tools." },
    ],
    cta: { title: "Ready to Grow Your Business Digitally?", sub: "Let's build a results-driven digital marketing strategy for your business.", btn: "Get Your Free Marketing Audit →" },
  },
  "ai-automation": {
    icon: Cpu,
    title: "AI Automation",
    subtitle: "Transform Your Business with Intelligent Automation",
    heroImg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Artificial intelligence is no longer a futuristic concept — it's a present-day competitive advantage that's transforming how businesses operate.",
      "ASKreativ Global Solutions helps businesses implement intelligent automation systems that reduce manual work, accelerate operations, and improve customer communication — all powered by modern AI technology.",
    ],
    why: [
      { title: "Reduce Operational Costs", desc: "Automate repetitive tasks to free your team for higher-value work." },
      { title: "24/7 Customer Communication", desc: "AI chatbots and automated follow-ups ensure no lead or customer goes unattended." },
      { title: "Faster Lead Response", desc: "Instant automated responses improve conversion rates and customer satisfaction." },
      { title: "Streamlined Workflows", desc: "Connected systems eliminate manual data entry and process delays." },
    ],
    services: [
      { title: "AI Chatbot Implementation", desc: "Custom AI chatbots for your website and WhatsApp to handle inquiries, capture leads, and provide instant support." },
      { title: "WhatsApp Business Automation", desc: "Automated WhatsApp flows for lead nurturing, appointment reminders, order updates, and customer follow-ups." },
      { title: "CRM Integration & Automation", desc: "Seamlessly integrate and automate your CRM to manage leads, track customers, and trigger intelligent follow-up sequences." },
      { title: "Lead Management Systems", desc: "AI-powered lead scoring, routing, and nurturing systems that prioritize your best prospects." },
      { title: "Workflow Automation", desc: "Connect your business tools and automate cross-platform workflows to improve efficiency." },
      { title: "Reporting & Analytics Automation", desc: "Automated business reports, performance dashboards, and data visualization systems." },
    ],
    benefits: ["Reduce manual operational costs", "Faster lead response and follow-up", "24/7 automated customer communication", "Streamlined business workflows", "Better data management", "Improved conversion rates"],
    faqs: [
      { q: "What is AI automation for business?", a: "AI automation uses artificial intelligence to automate repetitive tasks, decision-making, and customer communication that would otherwise require human effort." },
      { q: "Can AI automation work for small businesses?", a: "Absolutely. We design scalable AI automation solutions for businesses of all sizes — from startups to large enterprises." },
      { q: "How long does it take to implement AI automation?", a: "Basic automation like chatbots can be deployed in 1–2 weeks. More complex CRM and workflow systems take 4–8 weeks depending on requirements." },
    ],
    cta: { title: "Ready to Automate Your Business Operations?", sub: "Discover how AI automation can transform your business efficiency and customer experience.", btn: "Book a Free AI Consultation →" },
  },
  "seo-services": {
    icon: Search,
    title: "SEO Services",
    subtitle: "Dominate Google Search & Grow Organic Traffic",
    heroImg: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Search Engine Optimization is the foundation of sustainable digital growth. For businesses in Hyderabad and across India, ranking on Google's first page means more visibility, more leads, and more revenue.",
      "ASKreativ's SEO strategies are built for the modern search landscape — combining technical excellence, quality content, and strategic link building to deliver lasting organic growth.",
    ],
    why: [
      { title: "Higher Rankings", desc: "Rank on page 1 of Google for keywords your customers are actively searching." },
      { title: "Sustainable Traffic", desc: "Unlike paid ads, SEO delivers compounding organic traffic that grows over time." },
      { title: "Local Dominance", desc: "Rank for local Hyderabad searches and attract nearby customers to your business." },
      { title: "Better User Experience", desc: "Technical SEO improvements make your site faster and more user-friendly." },
    ],
    services: [
      { title: "Technical SEO Audit & Optimization", desc: "Complete audit of your website's technical health, speed, crawlability, and indexing performance." },
      { title: "Keyword Research & Strategy", desc: "In-depth keyword analysis to identify the highest-value opportunities for your business." },
      { title: "On-Page SEO Optimization", desc: "Optimizing content, headings, meta tags, internal links, and page structure for maximum rankings." },
      { title: "Local SEO for Hyderabad", desc: "Google Business Profile optimization, local citations, and location-specific SEO for Hyderabad businesses." },
      { title: "Link Building & Off-Page SEO", desc: "Strategic backlink acquisition from high-authority, relevant websites to boost domain authority." },
      { title: "Content Strategy & SEO Writing", desc: "Creating search-optimized content that ranks, engages, and converts your target audience." },
    ],
    benefits: ["Higher Google rankings for target keywords", "Increased organic website traffic", "Better local search visibility in Hyderabad", "Long-term sustainable growth", "Improved website authority", "More qualified leads from organic search"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most businesses see initial improvements within 2–3 months and significant results within 4–6 months. SEO is a long-term investment with compounding returns." },
      { q: "Do you provide local SEO for Hyderabad?", a: "Yes. We specialize in local SEO for Hyderabad businesses, including Google Business Profile optimization, local keyword targeting, and citation building." },
      { q: "What makes your SEO approach different?", a: "We combine technical SEO, content quality, and strategic link building — all aligned with the latest Google algorithm updates and best practices." },
    ],
    cta: { title: "Ready to Rank Higher on Google?", sub: "Get a free SEO audit and discover exactly what's holding your website back.", btn: "Get a Free SEO Audit →" },
  },
  "website-development": {
    icon: Code2,
    title: "Website Development",
    subtitle: "Modern, Fast & Conversion-Focused Websites",
    heroImg: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Your website is your most important digital asset — working 24/7 to represent your brand, attract customers, and generate leads.",
      "ASKreativ builds modern, performance-optimized websites that combine beautiful design with strategic conversion architecture to turn visitors into customers.",
    ],
    why: [
      { title: "First Impressions Matter", desc: "A professional website builds instant trust and credibility with potential customers." },
      { title: "24/7 Lead Generation", desc: "Your website works around the clock, capturing leads even when your team is offline." },
      { title: "SEO-Optimized from Day One", desc: "Every website we build is structured for strong organic search performance." },
      { title: "Mobile-First Design", desc: "Responsive design ensures a perfect experience across all devices and screen sizes." },
    ],
    services: [
      { title: "Business Website Design & Development", desc: "Professional websites that represent your brand and convert visitors into customers." },
      { title: "E-Commerce Development", desc: "Full-featured online stores with product management, payment gateways, and inventory systems." },
      { title: "Landing Page Development", desc: "High-converting landing pages designed for specific campaigns, lead generation, and promotions." },
      { title: "Corporate Website Development", desc: "Enterprise-level websites with custom functionality, integrations, and scalable architecture." },
      { title: "Website Redesign & Migration", desc: "Transform outdated websites into modern, high-performing digital assets." },
      { title: "Website Speed & Performance Optimization", desc: "Improve loading speeds, core web vitals, and overall website performance." },
    ],
    benefits: ["Professional, conversion-focused design", "Fast loading speeds for better SEO", "Mobile-responsive across all devices", "Secure & scalable architecture", "Ongoing maintenance and support", "SEO-optimized from the ground up"],
    faqs: [
      { q: "How long does a website take to build?", a: "A basic business website takes 2–4 weeks. Complex websites with custom features or e-commerce take 6–12 weeks depending on scope." },
      { q: "Do you provide website maintenance?", a: "Yes. We offer ongoing maintenance packages covering updates, security, backups, performance monitoring, and content updates." },
      { q: "Will my website be optimized for SEO?", a: "Absolutely. Every website we build follows SEO best practices from the ground up — structure, speed, meta tags, schema markup, and more." },
    ],
    cta: { title: "Ready to Build Your Perfect Website?", sub: "Get a free consultation and see how we can transform your online presence.", btn: "Get a Free Website Consultation →" },
  },
  "social-media-marketing": {
    icon: Share2,
    title: "Social Media Marketing",
    subtitle: "Build Your Brand & Grow Your Audience",
    heroImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Social media is where your customers spend their time — and where your brand needs to be present, visible, and engaging.",
      "ASKreativ creates storytelling-driven social media strategies that build genuine communities, drive meaningful engagement, and convert followers into loyal customers.",
    ],
    why: [
      { title: "Build Brand Awareness", desc: "Consistent social presence helps more people discover and remember your brand." },
      { title: "Engage Your Audience", desc: "Creative content and interactive campaigns build meaningful relationships with your customers." },
      { title: "Drive Traffic & Leads", desc: "Strategic campaigns convert social media engagement into website traffic and business leads." },
      { title: "Stay Competitive", desc: "A strong social media presence keeps you ahead of competitors in your industry." },
    ],
    services: [
      { title: "Instagram & Facebook Marketing", desc: "Strategic content, reels, stories, and campaigns designed for maximum reach and engagement." },
      { title: "LinkedIn B2B Marketing", desc: "Professional LinkedIn strategies for lead generation, networking, and corporate brand building." },
      { title: "Reels & Video Content Creation", desc: "Creative, trending reels and video content that captures attention and drives organic reach." },
      { title: "Social Media Advertising", desc: "Targeted paid campaigns across Instagram, Facebook, and LinkedIn for measurable results." },
      { title: "Community Management", desc: "Active engagement with your audience — responding to comments, messages, and building community." },
      { title: "Social Media Audit & Strategy", desc: "Complete analysis of your current social presence with a customized growth strategy." },
    ],
    benefits: ["Stronger brand presence on all platforms", "Higher engagement and follower growth", "Creative content that converts", "Community building and management", "Targeted paid campaign results", "Consistent brand voice and messaging"],
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, YouTube, and X (Twitter) based on your business goals and target audience." },
      { q: "How often will you post on our social media?", a: "Posting frequency is customized to your package. Typically 3–5 posts per week per platform, with reels and stories included." },
      { q: "Do you create the content or do we provide it?", a: "We handle everything — strategy, content creation, copywriting, design, and scheduling. You just review and approve." },
    ],
    cta: { title: "Ready to Grow Your Social Media Presence?", sub: "Let's build a social media strategy that drives real business results.", btn: "Get a Free Social Media Audit →" },
  },
  "erp-management-systems": {
    icon: Grid3x3,
    title: "ERP Management Systems",
    subtitle: "Smarter Systems Create Smarter Business Operations",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Managing multiple operations manually can slow down productivity, create confusion, and reduce operational efficiency.",
      "ASKreativ develops intelligent ERP Management Systems designed to help businesses and institutions streamline operations through one connected digital ecosystem — reducing manual work, improving control, and automating daily processes.",
    ],
    why: [
      { title: "Centralized Management", desc: "Manage multiple operations from one integrated platform instead of separate disconnected systems." },
      { title: "Automation Reduces Manual Work", desc: "Smart automation improves workflow management and reduces repetitive operational tasks." },
      { title: "Real-Time Monitoring", desc: "ERP dashboards help businesses track performance, operations, and activities more effectively." },
      { title: "Better Organization", desc: "Well-structured systems improve productivity, communication, workflow, and long-term operational scalability." },
    ],
    services: [
      { title: "Student Management Systems", desc: "ERP for educational institutions to manage student records, admissions, academics, and communication." },
      { title: "Attendance Management Systems", desc: "Smart attendance tracking for institutions, organizations, and workforce management." },
      { title: "HR & Employee Management", desc: "ERP solutions for employee records, HR operations, leave management, payroll, and workflows." },
      { title: "Finance & Billing Management", desc: "Integrated systems for billing, financial tracking, payment management, and operational transparency." },
      { title: "Lead & Admission Management", desc: "Automation for leads, enquiries, admissions, and customer follow-ups." },
      { title: "CRM Integration", desc: "Connected CRM systems for organizing customer information, tracking communication, and managing relationships." },
      { title: "Analytics & Reporting Dashboards", desc: "Real-time dashboards for operational insights, performance monitoring, and business analytics." },
      { title: "Custom ERP Development", desc: "Customized ERP systems based on operational structure, workflow requirements, and business goals." },
    ],
    benefits: ["Centralized business operations", "Automated HR and attendance management", "Better billing and invoice management", "Real-time operational insights", "Improved workflow efficiency", "Scalable for growing businesses"],
    faqs: [
      { q: "What is an ERP Management System?", a: "An ERP Management System is a centralized platform that helps businesses manage operations, workflows, data, and processes more efficiently." },
      { q: "Can ERP systems help educational institutions?", a: "Yes. Our ERP solutions help institutions manage admissions, attendance, student records, communication, and academic operations efficiently." },
      { q: "How long does it take to build a custom ERP system?", a: "Custom ERP systems typically take 8–16 weeks depending on complexity, integrations, and the number of modules required." },
    ],
    cta: { title: "Better Systems Create Better Business Growth", sub: "Let's build an ERP system that transforms how your business operates.", btn: "Get a Free ERP Consultation →" },
  },
  "mobile-app-development": {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Your Customers Are on Mobile. Your Business Should Be Too.",
    heroImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Today, people use mobile applications for almost everything — shopping, learning, booking services, communication, and business interactions.",
      "ASKreativ develops modern, high-performance mobile applications designed to improve customer accessibility, business operations, engagement, and digital growth. We build scalable Android and iOS applications with intuitive user experiences.",
    ],
    why: [
      { title: "Customers Prefer Mobile", desc: "People expect businesses to be available directly from their mobile devices." },
      { title: "Better User Experience", desc: "Smooth, easy-to-use applications improve customer interaction and satisfaction." },
      { title: "Mobile Apps Improve Efficiency", desc: "Applications help businesses simplify communication, workflows, management, and digital operations." },
      { title: "Scalable Mobile Platforms", desc: "Modern applications help businesses expand digitally while improving operational flexibility." },
    ],
    services: [
      { title: "Android App Development", desc: "Scalable Android applications for businesses, services, operations, and customer engagement." },
      { title: "iOS App Development", desc: "Modern iOS applications focused on performance, user experience, and seamless functionality." },
      { title: "Business & Service Applications", desc: "Custom apps for business operations, service management, customer communication, and accessibility." },
      { title: "Educational Institution Applications", desc: "Smart apps for admissions, student communication, attendance, and academic operations." },
      { title: "Attendance & Management Applications", desc: "Apps that simplify attendance tracking, employee management, workflow management, and reporting." },
      { title: "CRM Integrated Applications", desc: "Integrated CRM apps to manage leads, improve customer communication, and centralize data." },
      { title: "E-Commerce Mobile Applications", desc: "Modern shopping apps for product visibility, customer engagement, and secure transactions." },
      { title: "API & Third-Party Integrations", desc: "Integration with payment gateways, CRM systems, analytics platforms, and third-party services." },
      { title: "App Maintenance & Support", desc: "Ongoing support for updates, performance, security, and smooth app functionality." },
    ],
    benefits: ["Reach customers on their smartphones", "Enhanced customer experience and loyalty", "Scalable architecture for growth", "Cross-platform Android & iOS apps", "CRM and payment integrations", "Ongoing maintenance and updates"],
    faqs: [
      { q: "Do you develop Android and iOS applications?", a: "Yes. ASKreativ develops both Android and iOS applications based on business requirements." },
      { q: "Can ASKreativ create customized mobile applications?", a: "Absolutely. We develop custom mobile applications tailored to specific business operations and goals." },
      { q: "Do you provide CRM-integrated applications?", a: "Yes. We create CRM-integrated mobile applications designed for lead management and customer communication." },
    ],
    cta: { title: "The Future of Business Is Mobile, Fast & Connected", sub: "Let's build a powerful mobile app designed for engagement, accessibility, and digital growth.", btn: "Build Your Mobile App With ASKreativ →" },
  },
  "branding-creative-design": {
    icon: Palette,
    title: "Branding & Creative Design",
    subtitle: "Build a Brand That People Remember and Trust",
    heroImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80",
    intro: [
      "In a crowded digital marketplace, your brand identity is your competitive edge. Before customers read your content, explore your services, or contact you — they notice your brand.",
      "ASKreativ creates strategic brand identities that combine creativity, clarity, and visual communication to help businesses present themselves confidently and connect with their audience naturally.",
    ],
    why: [
      { title: "Good Design Builds Trust", desc: "Professional design helps businesses look more credible, organized, and trustworthy." },
      { title: "Brand Recognition", desc: "Strong branding helps customers remember and choose your business over competitors." },
      { title: "Improved Engagement", desc: "Well-designed visuals attract attention and improve interaction across all platforms." },
      { title: "Consistent Brand Language", desc: "Visual consistency across all materials strengthens brand perception and professionalism." },
    ],
    services: [
      { title: "Brand Identity Design", desc: "Professional branding elements including logo, color palette, typography, and visual identity system." },
      { title: "Logo Design", desc: "Unique, memorable logos that represent your business identity and values." },
      { title: "Brand Guidelines & Style Guide", desc: "Comprehensive brand guidelines ensuring consistent visual communication across all materials." },
      { title: "Marketing Collateral Design", desc: "Brochures, flyers, presentations, and print materials designed for professional business communication." },
      { title: "Digital Advertising Creatives", desc: "Creative ad designs optimized for social media, websites, paid campaigns, and digital promotions." },
      { title: "Stationery Design", desc: "Business cards, letterheads, ID cards, and branded office materials." },
    ],
    benefits: ["Memorable, distinctive brand identity", "Professional visual design standards", "Consistent brand experience across channels", "Creative advertising that drives awareness", "Complete brand guidelines", "Strong first impression"],
    faqs: [
      { q: "Why is branding important for businesses?", a: "Strong branding builds trust, improves recognition, creates professionalism, and helps customers choose your business over competitors." },
      { q: "What branding services does ASKreativ provide?", a: "We provide brand identity design, logo design, brand guidelines, marketing collateral, digital creatives, stationery, and complete branding solutions." },
      { q: "How long does a branding project take?", a: "Basic logo and branding projects take 2–3 weeks. Complete brand identity systems with guidelines take 4–6 weeks." },
    ],
    cta: { title: "Strong Brands Begin With Strong Design", sub: "Let's create a professional visual identity that improves trust, recognition, and audience engagement.", btn: "Build Your Brand With ASKreativ →" },
  },
  "graphic-design": {
    icon: PenTool,
    title: "Graphic Design Services",
    subtitle: "Design Is the First Thing People Notice About Your Brand",
    heroImg: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&auto=format&fit=crop&q=80",
    intro: [
      "Before people read your content, explore your services, or contact your business — they notice your design. A strong visual identity helps businesses build trust, improve recognition, create professionalism, and leave a lasting impression.",
      "At ASKreativ Global Solutions, we create designs that combine creativity, clarity, branding, and communication to help businesses present themselves confidently in the digital world.",
    ],
    why: [
      { title: "Good Design Builds Trust", desc: "Professional design helps businesses look more credible, organized, and trustworthy." },
      { title: "Visual Identity Creates Recognition", desc: "Consistent design improves visibility, familiarity, and brand perception." },
      { title: "Creative Designs Improve Engagement", desc: "Well-designed visuals attract attention and improve customer interaction across all channels." },
      { title: "Consistent Design Language", desc: "Visual consistency across all materials strengthens brand perception and professionalism." },
    ],
    services: [
      { title: "Brand Identity Design", desc: "Professional branding elements that help businesses build a strong and recognizable visual identity." },
      { title: "Social Media Creatives", desc: "Creative designs focused on engagement, branding, promotions, and audience visibility." },
      { title: "Admission Campaign Designs", desc: "Creative campaign materials for educational institutions to improve admissions visibility." },
      { title: "Brochure Design", desc: "Professional brochures for business communication, marketing, branding, and information presentation." },
      { title: "Event Branding", desc: "Creative event branding for seminars, conferences, educational events, launches, and promotions." },
      { title: "Stationery Design", desc: "Business cards, letterheads, ID cards, and branded office materials." },
      { title: "Digital Advertisement Designs", desc: "Creative ad designs optimized for social media, websites, paid campaigns, and digital promotions." },
      { title: "Custom Design Solutions", desc: "Customized design solutions based on branding needs, campaign goals, and marketing objectives." },
    ],
    benefits: ["Creative & professional design approach", "Brand-focused visual communication", "Consistent design language", "Audience-oriented creativity", "Fast turnaround times", "Unlimited revisions until satisfied"],
    faqs: [
      { q: "What types of graphic design services does ASKreativ provide?", a: "We provide branding, social media creatives, brochures, advertisements, event branding, stationery designs, and customized design solutions." },
      { q: "Can ASKreativ create designs for marketing campaigns?", a: "Yes. We create creative campaign designs for advertisements, promotions, admissions, branding, and digital marketing campaigns." },
      { q: "Do you provide social media creative designs?", a: "Yes. We design social media creatives optimized for engagement, branding, promotions, and audience interaction." },
    ],
    cta: { title: "Strong Brands Begin With Strong Design", sub: "Let's create professional visual designs that improve trust, recognition, and audience engagement.", btn: "Start Your Design Project →" },
  },
  "traditional-marketing": {
    icon: Megaphone,
    title: "Traditional Marketing",
    subtitle: "Strong Brands Stay Visible Everywhere",
    heroImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&auto=format&fit=crop&q=80",
    intro: [
      "While digital marketing dominates the modern landscape, traditional marketing remains a powerful tool for building local brand visibility, public trust, and offline recognition.",
      "ASKreativ Global Solutions helps businesses integrate traditional marketing with digital strategies to create complete, 360-degree brand visibility that reaches audiences both online and offline.",
    ],
    why: [
      { title: "Local Brand Visibility", desc: "Outdoor advertising creates strong local awareness that digital channels often can't replicate." },
      { title: "Public Trust Building", desc: "Physical marketing materials create a sense of established presence and credibility." },
      { title: "Wide Audience Reach", desc: "Reach audiences who may not be active on digital platforms through offline channels." },
      { title: "Complement Digital Marketing", desc: "Traditional marketing combined with digital strategies creates comprehensive brand visibility." },
    ],
    services: [
      { title: "Hoarding & Billboard Advertising", desc: "Strategic hoarding placements in high-traffic locations for maximum local visibility." },
      { title: "Banner & Flex Printing", desc: "Professional banners and flex designs for events, promotions, and business visibility." },
      { title: "Pamphlet & Flyer Design & Distribution", desc: "Creative pamphlets and flyers for local marketing campaigns and promotions." },
      { title: "Newspaper Advertising", desc: "Classified and display ads in local and regional newspapers for targeted reach." },
      { title: "Event Sponsorships & Promotions", desc: "Event-based marketing and sponsorship campaigns for brand visibility." },
      { title: "Outdoor Campaign Management", desc: "Complete outdoor marketing campaigns from design to placement and execution." },
    ],
    benefits: ["Strong local brand presence", "Offline audience reach", "High visibility in public spaces", "Complementary to digital marketing", "Professional print materials", "Integrated marketing campaigns"],
    faqs: [
      { q: "Is traditional marketing still important today?", a: "Yes. Traditional marketing creates strong local visibility, public trust, and offline brand recognition that complements digital strategies." },
      { q: "Can traditional marketing work together with digital marketing?", a: "Absolutely. Combining traditional and digital marketing creates stronger overall brand visibility and audience reach." },
      { q: "What traditional marketing services does ASKreativ provide?", a: "We provide hoardings, banners, pamphlets, newspaper advertisements, event promotions, and outdoor campaigns." },
    ],
    cta: { title: "Strong Brands Grow Online. Legendary Brands Stay Visible Everywhere.", sub: "ASKreativ helps businesses build powerful brand visibility through both traditional and digital marketing.", btn: "Build Your Brand Presence With ASKreativ →" },
  },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
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

  const Icon = service.icon;

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px" }}>
        <div className="container">
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--fg-light)", fontSize: "14px", marginBottom: "24px", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={26} style={{ color: "var(--orange)" }} />
                </div>
                <span className="section-tag" style={{ marginBottom: 0 }}>Our Services</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "var(--fg)", marginBottom: "12px" }}>
                {service.title}
              </h1>
              <p style={{ fontSize: "18px", color: "var(--orange)", fontWeight: 600, marginBottom: "20px" }}>{service.subtitle}</p>
              {service.intro.map((p, i) => (
                <p key={i} style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "12px" }}>{p}</p>
              ))}
              <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
                <button onClick={openModal} className="btn-primary">
                  Get a Free Consultation <ArrowRight size={16} />
                </button>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
            <FadeUp delay={0.2}>
              <img src={service.heroImg} alt={service.title} style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px var(--shadow-md)", objectFit: "cover", aspectRatio: "4/3" }} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Why It Matters</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Why <span>{service.title}</span> Is Essential
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {service.why.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.1}>
                <div className="card" style={{ borderTop: "3px solid var(--orange)" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "10px" }}>{w.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>What We Offer</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Our <span>{service.title}</span> Services
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {service.services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className="card" style={{ display: "flex", gap: "14px" }}>
                  <CheckCircle size={20} style={{ color: "var(--orange)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "6px" }}>{s.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            <FadeUp>
              <img
                src={service.heroImg}
                alt={service.title}
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px var(--shadow-md)", objectFit: "cover", aspectRatio: "4/3", filter: "brightness(0.9)" }}
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <span className="section-tag">Key Benefits</span>
              <h2 className="section-title">Why Businesses <span>Choose ASKreativ</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {service.benefits.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle size={18} style={{ color: "var(--orange)", flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "var(--fg-light)" }}>{b}</span>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="btn-primary">
                Get Started Today <ArrowRight size={16} />
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>FAQ</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Frequently Asked <span>Questions</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            {service.faqs.map((faq, i) => {
              const FAQItem = () => {
                const [open, setOpen] = React.useState(i === 0);
                return (
                  <div style={{ borderBottom: "1px solid var(--border-c)" }}>
                    <button onClick={() => setOpen((v) => !v)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ fontWeight: 500, fontSize: "15px", color: "var(--fg)" }}>{faq.q}</span>
                      <span style={{ fontSize: "24px", color: "var(--orange)", flexShrink: 0 }}>{open ? "×" : "+"}</span>
                    </button>
                    {open && <div style={{ paddingBottom: "20px" }}><p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{faq.a}</p></div>}
                  </div>
                );
              };
              return <FAQItem key={faq.q} />;
            })}
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            {service.cta.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>{service.cta.sub}</p>
          <button onClick={openModal} className="btn-primary">
            {service.cta.btn} <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}

// Need React for useState in nested component
import React from "react";
