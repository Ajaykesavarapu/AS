import { Share2, Cpu, Search, Code2, Smartphone, Grid3x3, PenTool, Megaphone, Lightbulb, Target, Zap, TrendingUp, Star, Building2, GraduationCap, ShoppingCart, HeartPulse, Factory, Scale } from "lucide-react";

export const siteConfig = {
  brand: {
    name: "ASKreativ Global Solutions",
    tagline: "AI-Powered Digital Growth Agency",
    logoAlt: "ASKreativ Logo",
  },
  contact: {
    email: import.meta.env.NEXT_PUBLIC_CONTACT_EMAIL || "helloaskreativ@gmail.com",
    phone: "+91 96669 76611",
    whatsapp: "+91 91544 58686",
    address: "Hyderabad, Telangana, India",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/askreativ_1/" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588501648124" },
    { label: "YouTube", href: "https://www.youtube.com/@AsKreativ" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/askreativ/" },
    { label: "WhatsApp", href: "https://wa.me/919154458686" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services", 
    hasDropdown: true,
    items: [
      { label: "Digital Marketing", slug: "social-media-marketing-services-hyderabad" },
      { label: "AI Automation", slug: "ai-automation-services-hyderabad" },
      { label: "SEO Services", slug: "seo-services-hyderabad" },
      { label: "Website Development", slug: "website-development-services-hyderabad" },
      { label: "Mobile App Development", slug: "mobile-app-development-services-hyderabad" },
      { label: "ERP & Systems", slug: "erp-management-systems-hyderabad" },
      { label: "Branding & Design", slug: "graphic-design-services-hyderabad" },
      { label: "Traditional Marketing", slug: "traditional-marketing-services-hyderabad" },
    ]
  },
  { 
    label: "Industries", 
    href: "/industries", 
    hasDropdown: true,
    items: [
      { label: "Real Estate", slug: "industries" },
      { label: "Education & Institutions", slug: "industries" },
      { label: "Retail & E-commerce", slug: "industries" },
      { label: "Healthcare", slug: "industries" },
      { label: "Manufacturing", slug: "industries" },
      { label: "Technology (SaaS & IT)", slug: "industries" },
      { label: "Infrastructure & Construction", slug: "industries" },
      { label: "B2B & Service-Based", slug: "industries" },
      { label: "Beauty & Wellness", slug: "industries" },
      { label: "Consultancy & Professional Services", slug: "industries" },
      { label: "Tourism & Hospitality", slug: "industries" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    tagline: "AI-Powered Digital Growth Agency",
    titlePrimary: "We Engineer",
    rotatingWords: ["AI Automation", "Digital Marketing", "SEO Domination", "Business Growth", "Intelligent Systems"],
    description: "ASKreativ helps visionary businesses scale their digital presence through AI automation, strategic digital marketing, and modern technology.",
    ctaPrimary: "Get Free Quote",
    ctaSecondary: "All Services",
  },
  services: {
    tag: "OUR SERVICES",
    title: "Digital Marketing & Development Solutions",
    description: "Transform your business vision into digital growth with our intelligent automation, marketing, and development solutions.",
    list: [
      { icon: Share2, label: "Digital Marketing", slug: "social-media-marketing-services-hyderabad", desc: "Performance-driven marketing strategies designed for reach, branding, and business leads." },
      { icon: Cpu, label: "AI Automation", slug: "ai-automation-services-hyderabad", desc: "Automate your business workflows, lead management, and customer communication with AI." },
      { icon: Search, label: "SEO Services", slug: "seo-services-hyderabad", desc: "Improve your search visibility, organic traffic, and Google rankings with modern SEO." },
      { icon: Code2, label: "Website Development", slug: "website-development-services-hyderabad", desc: "Modern, high-speed, and SEO-friendly websites built for better customer conversion." },
      { icon: Smartphone, label: "Mobile App Development", slug: "mobile-app-development-services-hyderabad", desc: "Premium Android and iOS mobile applications for business accessibility and digital growth." },
      { icon: Grid3x3, label: "ERP & Systems", slug: "erp-management-systems-hyderabad", desc: "Centralize your operations with intelligent management systems, CRM, and automation." },
      { icon: PenTool, label: "Branding & Design", slug: "graphic-design-services-hyderabad", desc: "Visual identities and creative designs that build trust and strengthen your brand presence." },
      { icon: Megaphone, label: "Traditional Marketing", slug: "traditional-marketing-services-hyderabad", desc: "Offline marketing campaigns including hoardings, banners, and local advertisements." },
    ]
  },
  about: {
    tag: "ABOUT US",
    title: "Building Smarter Digital Growth for Modern Businesses",
    description1: "ASKreativ Global Solutions is an AI-powered digital growth company helping businesses scale through automation, branding, marketing, websites, ERP systems, and modern digital solutions.",
    description2: "We combine creativity, technology, AI, and strategy to build intelligent digital ecosystems designed for visibility, efficiency, and long-term growth.",
    cta: "Explore More",
  },
  stats: [
    { num: "200+", label: "Digital Transformations" },
    { num: "100+", label: "Visionary Clients" },
    { num: "10+", label: "Growth Services" },
    { num: "5+", label: "Years of Impact" },
  ],
  whyUs: {
    tag: "WHY ASKREATIV",
    title: "Why Visionary Businesses Choose Us",
    list: [
      { icon: Cpu, title: "AI-Powered Strategy", desc: "We use automation and modern technology to help businesses scale efficiently." },
      { icon: Lightbulb, title: "Strategy & Innovation", desc: "We focus on data-driven marketing, creativity, and long-term business growth." },
      { icon: Target, title: "Hyderabad’s Strategy Experts", desc: "Based in Hyderabad, we understand the local market and local branding needs." },
      { icon: Zap, title: "Complete Digital Growth", desc: "From branding to ERP, we provide everything needed for modern business growth." },
    ]
  },
  process: {
    tag: "OUR PROCESS",
    title: "The Framework for Measured Growth",
    list: [
      { icon: Search, title: "Discovery & Analysis", desc: "Understanding your current business goals, audience, and market opportunities." },
      { icon: Target, title: "Strategy & Planning", desc: "Creating a blueprint involving marketing, automation, and digital solutions." },
      { icon: Code2, title: "Digital Execution", desc: "From high-speed websites to optimized ad campaigns, we build your presence." },
      { icon: Cpu, title: "Automation & Integration", desc: "Setting up intelligent systems to automate lead management and operations." },
      { icon: TrendingUp, title: "Growth & Optimization", desc: "Monitoring performance, refining strategies, and improving overall results." },
      { icon: Star, title: "Long-Term Impact", desc: "Achieving sustained visibility, digital authority, and business scalability." },
    ]
  },
  faqs: {
    tag: "FAQ",
    title: "Frequently Asked Questions",
    list: [
      { q: "What services does ASKreativ provide?", a: "ASKreativ provides AI automation, digital marketing, SEO, website development, mobile apps, ERP systems, and traditional marketing." },
      { q: "How can digital marketing help my business?", a: "It improves online visibility, customer trust, and branding, and helps businesses attract more leads and enquiries." },
      { q: "Does ASKreativ provide automation in Hyderabad?", a: "Yes. We specialize in AI chatbots, WhatsApp automation, and CRM systems for businesses in Hyderabad." },
      { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy and usually takes 3 to 6 months to show significant improvements in search visibility." },
    ]
  },
  ctaSection: {
    title: "Let's Build Your Digital Future Together",
    description: "Ready to scale? Get a free 30-minute strategy audit with our growth experts.",
    buttonText: "Book a Free Consultation",
  }
};

export const industriesContent = {
  hero: {
    // Keep empty for now since we removed title/description from hero sections
  },
  // Industries list as requested
  industries: [
    {
      title: "Educational Institutions",
      description: "Helping schools, colleges, and academies improve admissions, branding, and student engagement digitally."
    },
    {
      title: "Solar Industries",
      description: "Supporting solar businesses with visibility, lead generation, and sustainable digital growth strategies."
    },
    {
      title: "Healthcare & Clinics",
      description: "Building trust-focused digital solutions for hospitals, clinics, and healthcare professionals."
    },
    {
      title: "Real Estate Companies",
      description: "Helping real estate brands generate property leads and improve online visibility effectively."
    },
    {
      title: "Sports Academies",
      description: "Creating branding, admissions, and promotional marketing solutions for sports institutions and academies."
    },
    {
      title: "Startups & Entrepreneurs",
      description: "Helping startups build strong digital foundations through branding, websites, and growth strategies."
    },
    {
      title: "Local Businesses",
      description: "Improving local visibility, customer engagement, and online presence for growing local businesses."
    },
    {
      title: "Corporate Companies",
      description: "Developing scalable digital ecosystems, automation systems, and branding solutions for enterprises."
    },
    {
      title: "E-Commerce Brands",
      description: "Helping online businesses improve product visibility, customer engagement, and sales performance."
    },
    {
      title: "Restaurants & Hospitality",
      description: "Creating strong digital presence and promotional visibility for restaurants, cafes, and hospitality brands."
    },
    {
      title: "Professional Service Providers",
      description: "Helping professionals strengthen branding, visibility, and customer trust through digital solutions."
    }
  ],
  // FAQs as requested
  faqs: [
    {
      question: "Which industries does ASKreativ Global Solutions work with?",
      answer: "ASKreativ works with educational institutions, healthcare brands, solar industries, real estate companies, startups, sports academies, e-commerce brands, restaurants, local businesses, and corporate organizations."
    },
    {
      question: "Do you provide customized solutions for different industries?",
      answer: "Yes. Every industry has different goals and challenges, so we create customized digital strategies and solutions based on business requirements."
    },
    {
      question: "Can ASKreativ help startups and small businesses grow digitally?",
      answer: "Absolutely. We help startups and local businesses improve branding, visibility, customer engagement, and digital growth through scalable solutions."
    },
    {
      question: "Do you provide both marketing and technology solutions?",
      answer: "Yes. ASKreativ provides digital marketing, branding, automation, websites, ERP systems, mobile applications, and advertising solutions under one ecosystem."
    },
    {
      question: "Why is industry-specific digital strategy important?",
      answer: "Different industries require different approaches for audience targeting, branding, communication, and customer engagement. Industry-specific strategies improve overall marketing performance and business growth."
    }
  ],
  // FAQ CTA
  faqCta: {
    title: "Every Industry Needs the Right Digital Strategy.",
    description: "Grow Your Business With ASKreativ →"
  }
};
