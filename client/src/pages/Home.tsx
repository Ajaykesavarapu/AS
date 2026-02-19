import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers, Code, Zap, Palette, MonitorSmartphone } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  }
];

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
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Premium Digital Agency
            </h2>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-tight mb-8 text-glow">
              Crafting Digital
              <span className="block text-white/90">Reality</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              We bridge the gap between imagination and technology, building premium digital 
              experiences that define the future of your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wide rounded hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wide rounded hover:bg-white/5 transition-all"
              >
                Start a Project
              </a>
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
                  <a className="block h-full p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
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
