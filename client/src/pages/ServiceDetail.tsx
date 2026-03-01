import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import NotFound from "@/pages/not-found";
import TechMarquee from "@/components/TechMarquee";

// Data Structure for Services
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  whyThis: string;
  benefits: string[];
  useCases: string[];
  approach: { step: string; desc: string }[];
}> = {
  "3d-web-experience": {
    title: "3D Web Experience",
    subtitle: "Immersive Dimensions",
    description: "We create captivating 3D environments directly in the browser using WebGL and Three.js technologies. These immersive experiences increase user engagement time by up to 300% and provide a memorable brand interaction that sets you apart from competitors.",
    whyThis: "In a flat digital world, depth stands out. 3D experiences allow users to explore products and narratives spatially, creating an emotional connection that static images simply cannot achieve.",
    benefits: [
      "Higher User Engagement & Retention",
      "Memorable Brand Storytelling",
      "Interactive Product Visualization",
      "differentiation from Competitors",
      "No Plugins Required (Works in Browser)"
    ],
    useCases: [
      "Virtual Real Estate Tours",
      "Interactive Product Configures",
      "Gamified Marketing Campaigns",
      "Virtual Showrooms & Galleries",
      "Educational Simulations"
    ],
    approach: [
      { step: "Discovery", desc: "Understanding your brand goals and the story you want to tell in 3D space." },
      { step: "Design & Modeling", desc: "Creating low-poly optimized 3D assets and environment textures." },
      { step: "Development", desc: "Implementing interactions using Three.js / React Three Fiber for smooth performance." },
      { step: "Optimization", desc: "Ensuring 60fps performance across devices and fast loading times." }
    ]
  },
  "website-development": {
    title: "Website Development",
    subtitle: "Performance & Precision",
    description: "We build pixel-perfect, lightning-fast websites that serve as the cornerstone of your digital presence. Our development focuses on clean code, scalability, and exceptional user experience across all devices.",
    whyThis: "Your website is your 24/7 salesperson. A poorly performing site loses customers instantly. We ensure your foundation is rock solid, accessible, and ready to convert visitors into loyal clients.",
    benefits: [
      "Lightning Fast Loading Speeds",
      "SEO Optimized Architecture",
      "Fully Responsive Design",
      "Secure & Scalable Codebase",
      "Easy Content Management"
    ],
    useCases: [
      "Corporate Websites",
      "E-commerce Platforms",
      "SaaS Landing Pages",
      "Portfolio Sites",
      "Web Applications"
    ],
    approach: [
      { step: "Strategy", desc: "Defining site architecture, user flows, and technical requirements." },
      { step: "UX/UI Design", desc: "Creating wireframes and high-fidelity prototypes for approval." },
      { step: "Development", desc: "Building with modern frameworks like React, Next.js, and Tailwind." },
      { step: "Launch", desc: "Rigorous testing, SEO setup, and deployment to global CDNs." }
    ]
  },
  "automation": {
    title: "Automation",
    subtitle: "Efficiency Engineered",
    description: "We leverage AI and custom scripts to automate repetitive tasks, connect disparate systems, and streamline your business operations. Save time, reduce errors, and focus on high-value strategic work.",
    whyThis: "Manual data entry and repetitive tasks kill productivity. Automation liberates your team to focus on creativity and strategy while machines handle the routine execution flawlessly.",
    benefits: [
      "Drastic Reduction in Manual Labor",
      "Elimination of Human Error",
      "24/7 Operational Capability",
      "Seamless Data Synchronization",
      "Scalability Without Hiring"
    ],
    useCases: [
      "CRM Data Entry & Sync",
      "Automated Email Marketing Flows",
      "Invoice Generation & Processing",
      "Social Media Scheduling",
      "Lead Qualification Systems"
    ],
    approach: [
      { step: "Audit", desc: "Analyzing your current workflows to identify bottlenecks." },
      { step: "Solution Design", desc: "Mapping out automated workflows and selecting tools." },
      { step: "Implementation", desc: "Building integrations using APIs, Webhooks, and custom scripts." },
      { step: "Monitoring", desc: "Setting up error logging and performance tracking dashboards." }
    ]
  },
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle: "Visual Impact",
    description: "Our design team crafts distinctive visual identities that resonate with your target audience. From logos to complete brand guidelines, we ensure every pixel communicates your core values.",
    whyThis: "Design is the silent ambassador of your brand. In seconds, it communicates trust, quality, and professionalism. We ensure your visual language speaks volumes before a single word is read.",
    benefits: [
      "Consistent Brand Identity",
      "Professional Market Perception",
      "Increased Marketing ROI",
      "Better Customer Recognition",
      "Versatile Assets for All Media"
    ],
    useCases: [
      "Brand Identity & Logo Design",
      "Marketing Collateral (Brochures, Decks)",
      "Social Media Assets",
      "Packaging Design",
      "Infographics & Data Viz"
    ],
    approach: [
      { step: "Research", desc: "Deep dive into market trends, competitors, and audience preferences." },
      { step: "Concept", desc: "Sketching and ideating multiple directions for the visual style." },
      { step: "Refinement", desc: "Polishing the chosen direction with precise typography and color." },
      { step: "Delivery", desc: "Providing production-ready files in all necessary formats." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Growth & Visibility",
    description: "Data-driven marketing strategies that put your brand in front of the right people at the right time. We combine creativity with analytics to maximize your Return on Ad Spend (ROAS).",
    whyThis: "Building a great product isn't enough; people need to know it exists. Our marketing cuts through the noise to deliver qualified leads and measurable growth for your business.",
    benefits: [
      "Targeted Audience Reach",
      "Measurable ROI & Analytics",
      "Cost-Effective Lead Gen",
      "Improved Brand Authority",
      "Real-time Strategy Adjustment"
    ],
    useCases: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Management",
      "Content Marketing",
      "Email Nurture Campaigns"
    ],
    approach: [
      { step: "Analysis", desc: "Auditing current performance and defining KPIs." },
      { step: "Strategy", desc: "Selecting the right channels and crafting the core message." },
      { step: "Execution", desc: "Launching campaigns, creating content, and managing bids." },
      { step: "Optimization", desc: "Continuous A/B testing and data analysis to improve results." }
    ]
  },
  "seo-services": {
    title: "SEO Services",
    subtitle: "Search Engine Maximization",
    description: "Rank higher, grow faster. Our SEO experts craft strategies that push your website to the top of Google and drive consistent organic traffic.",
    whyThis: "In a world where 93% of online experiences begin with a search engine, appearing on the first page is not just beneficial—it's essential for survival and growth.",
    benefits: [
      "Increased Organic Traffic",
      "Higher Search Rankings",
      "Improved Site Authority",
      "Better User Experience",
      "Long-term Sustainable Growth"
    ],
    useCases: [
      "Local Business Visibility",
      "E-commerce Product Ranking",
      "Content Marketing Success",
      "Brand Authority Building",
      "International Market Expansion"
    ],
    approach: [
      { step: "Technical Audit", desc: "Analyzing site structure, speed, and mobile-friendliness for search compliance." },
      { step: "Keyword Strategy", desc: "Identifying high-value search terms that your ideal customers are using." },
      { step: "On-Page SEO", desc: "Optimizing content, meta tags, and internal linking for maximum visibility." },
      { step: "Authority Building", desc: "Earning high-quality backlinks and improving overall domain authority." }
    ]
  }
};

const serviceTools = {
  "3d-web-experience": [
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "WebGL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-plain.svg" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
    { name: "Spline", icon: "https://cdn.worldvectorlogo.com/logos/spline.svg" },
    { name: "React Three Fiber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  "website-development": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Vite", icon: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
  "digital-marketing": [
    { name: "Google Ads", icon: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
    { name: "Meta Ads", icon: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
    { name: "Google Analytics", icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "SEMrush", icon: "https://cdn.worldvectorlogo.com/logos/semrush.svg" },
    { name: "Ahrefs", icon: "https://cdn.worldvectorlogo.com/logos/ahrefs.svg" },
    { name: "Mailchimp", icon: "https://cdn.worldvectorlogo.com/logos/mailchimp.svg" },
    { name: "HubSpot", icon: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
    { name: "Canva", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
  ],
  "automation": [
    { name: "Zapier", icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
    { name: "Make (Integromat)", icon: "https://cdn.worldvectorlogo.com/logos/make-seeklogo.svg" },
    { name: "n8n", icon: "https://cdn.worldvectorlogo.com/logos/n8n.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Airtable", icon: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "Notion API", icon: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
    { name: "OpenAI API", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  ],
  "graphic-designing": [
    { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "After Effects", icon: "https://cdn.worldvectorlogo.com/logos/after-effects-1.svg" },
    { name: "Canva", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "Premiere Pro", icon: "https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg" },
  ],
  "seo-services": [
    { name: "Google Search Console", icon: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
    { name: "Ahrefs", icon: "https://cdn.worldvectorlogo.com/logos/ahrefs.svg" },
    { name: "SEMrush", icon: "https://cdn.worldvectorlogo.com/logos/semrush.svg" },
    { name: "Screaming Frog", icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "Moz", icon: "https://cdn.worldvectorlogo.com/logos/moz.svg" },
  ]
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug || ""];

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  {service.subtitle}
                </span>
                <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-8 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                <TechMarquee tools={serviceTools[slug as keyof typeof serviceTools] || []} />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={`/images/services/${slug}-poster.jpg`}
                >
                  <source src={`/videos/${slug}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This & Key Benefits */}
      <section className="py-20 border-t border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Why {service.title}?</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-10">
                {service.whyThis}
              </p>

              <h3 className="font-heading text-2xl font-bold mb-6 text-primary">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold mb-8">Use Cases</h3>
              <div className="grid gap-6">
                {service.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                    <span className="font-medium text-white/90">{useCase}</span>
                    <ArrowRight className="w-4 h-4 text-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white/5 border-t border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We follow a proven methodology to ensure consistent, high-quality results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.approach.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-4 -left-4 font-heading text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {step.step}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6 uppercase">Ready to get started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how {service.title} can transform your business today.
          </p>
          <a
            href="/#contact"
            className="inline-block px-10 py-4 bg-white text-primary font-bold uppercase tracking-wide rounded hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
