import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers, Code, Zap, Palette, MonitorSmartphone } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import { useCreateContact } from "@/hooks/use-contacts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Service Data
const services = [
  {
    id: "web-experience",
    title: "3D Web Experience",
    description: "Immersive 3D environments that captivate and engage your audience.",
    icon: Globe,
    href: "/services/3d-web-experience"
  },
  {
    id: "website-dev",
    title: "Website Development",
    description: "High-performance, scalable websites built with cutting-edge technology.",
    icon: Code,
    href: "/services/website-development"
  },
  {
    id: "automation",
    title: "Automation",
    description: "Streamline operations and boost efficiency with intelligent automated workflows.",
    icon: Zap,
    href: "/services/automation"
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    description: "Visually stunning branding and assets that tell your unique story.",
    icon: Palette,
    href: "/services/graphic-designing"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth, visibility, and measurable results.",
    icon: MonitorSmartphone,
    href: "/services/digital-marketing"
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Rank higher, grow faster. Our SEO experts craft strategies that push your website to the top of Google.",
    icon: Globe,
    href: "/services/seo-services"
  }
];

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

export default function Home() {
  const createContact = useCreateContact();

  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    createContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-tight mb-8 text-glow">
              Crafting Digital
              <span className="block text-white/90">Reality</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              AsKreativ is a full-service digital marketing agency helping brands grow through cutting-edge web development, SEO, automation, and performance marketing. We build premium digital experiences that define the future of your brand. Our data-driven approach ensures that every creative solution is backed by strategic insight to maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wide rounded hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Explore Services
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wide rounded hover:bg-white/5 transition-all"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative bg-card/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="max-w-2xl mx-auto mt-6 text-white/60 leading-relaxed">
              We offer a comprehensive suite of digital marketing services designed to elevate your brand presence. From immersive 3D web experiences to strategic SEO services and search engine optimization, our team delivers excellence at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={service.href}>
                  <a className="block h-full p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                    <div className="relative z-10">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-48 object-cover rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                        poster={`/images/services/${service.id}-poster.jpg`}
                      >
                        <source src={`/videos/${service.id === 'web-experience' ? '3d-web-experience' : service.id === 'website-dev' ? 'website-development' : service.id === 'automation' ? 'automation' : service.id === 'graphic-design' ? 'graphic-designing' : service.id === 'seo-services' ? 'seo-services' : 'digital-marketing'}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/60 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-white/40 text-sm italic mb-6">
                        {service.id === 'web-experience' && "Be unforgettable. We build immersive 3D web experiences that stop the scroll and keep visitors engaged longer than any flat design ever could."}
                        {service.id === 'website-dev' && "Your website is your #1 salesperson. We design and develop blazing-fast, conversion-optimised websites that turn visitors into loyal customers."}
                        {service.id === 'automation' && "Work smarter, not harder. Our automation solutions eliminate repetitive tasks, streamline workflows, and free your team to focus on growth."}
                        {service.id === 'graphic-design' && "Design that speaks before you do. Our visual storytelling builds instant brand trust and leaves a lasting impression on every audience."}
                        {service.id === 'digital-marketing' && "Reach the right people at the right time. Our data-driven digital marketing strategies maximise ROI and grow your brand across every channel."}
                        {service.id === 'seo-services' && "Rank higher, grow faster. Our SEO experts craft strategies that push your website to the top of Google and drive consistent organic traffic."}
                      </p>
                      <div className="flex items-center text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all mb-6">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>

                      <TechMarquee tools={serviceTools[service.href.split('/').pop() as keyof typeof serviceTools] || []} />
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 relative bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">About AsKreativ</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">Why Choose Us?</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Founded on the belief that every brand deserves a digital presence that truly reflects its potential, AsKreativ combines creative expertise with data-driven strategy. From SEO and search engine marketing to social media campaigns and 3D visual design, we deliver measurable results for businesses across industries. Our dedicated team is committed to fast response times, transparent communication, and exceptional quality on every project.
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                As a leading digital marketing agency, we specialize in high-impact performance marketing and social media marketing (SMM) that drives brand awareness and customer acquisition. Whether you need a stunning new graphic designing piece or a complex automation workflow, our experts are here to help your business scale efficiently in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-primary font-bold text-2xl mb-1">99%</h4>
                  <p className="text-white/50 text-sm">Client Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-2xl mb-1">24/7</h4>
                  <p className="text-white/50 text-sm">Expert Support</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center bg-white/5 border border-white/5"
            >
              <img
                src="/images/why-choose-us.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Get In Touch</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                Let's Build Something <span className="text-primary">Extraordinary</span>
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Ready to elevate your digital presence? We're here to turn your vision into
                reality with premium design and cutting-edge technology.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Fast Response</h4>
                    <p className="text-white/50 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dedicated Team</h4>
                    <p className="text-white/50 text-sm">Expert support for your project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="font-heading text-2xl font-bold mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="hello@example.com" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 890" {...field} className="h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50 transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    disabled={createContact.isPending}
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 text-white font-bold uppercase tracking-wide rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {createContact.isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
