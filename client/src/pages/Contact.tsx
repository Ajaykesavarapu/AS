import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSEO } from "@/hooks/useSEO";
import { siteConfig } from "@/constants/siteData";
import { useModal } from "@/App";
import HeroSection from "@/components/layout/HeroSection";
import { useSubmitContact } from "@workspace/api-client-react";

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

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const mutation = useSubmitContact();
  const { openModal } = useModal();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", businessName: "", email: "", phone: "", service: "", message: "", honeypot: "" },
  });

  const onSubmit = (data: FormData) => {
    try {
      mutation.mutate({
        data: {
          fullName: data.fullName,
          businessName: data.businessName || null,
          email: data.email,
          phone: data.phone,
          service: data.service as any,
          message: data.message || null,
          honeypot: data.honeypot || null,
        }
      }, {
        onSuccess: () => {
          // Trigger client-side email notification via FormSubmit
          fetch("https://formsubmit.co/ajax/helloaskreativ@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              _subject: `New Lead: ${data.fullName} (${data.service})`,
              Name: data.fullName,
              Business: data.businessName || "N/A",
              Email: data.email,
              Phone: data.phone || "N/A",
              Service: data.service,
              Message: data.message || "No message provided"
            })
          }).catch((err) => {
            console.error("Client-side FormSubmit error:", err);
          });
        },
        onError: (err) => {
          console.error("Contact form async submission error:", err);
        }
      });
    } catch (err) {
      console.error("Synchronous contact form submission exception:", err);
    }
  };

  useSEO({
    title: "Contact Us | ASKreativ Global Solutions Hyderabad",
    description: "Every massive growth story begins with a single conversation. Whether you’re scaling a startup or dominating an industry, our engine is ready to power your vision."
  });

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "16px 20px", fontSize: "15px",
    background: "var(--card-bg)", color: "var(--fg)",
    border: "1px solid var(--card-border)", borderRadius: "16px",
    outline: "none", transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <main>
      <h1 className="sr-only">Contact Us | ASKreativ Global Solutions</h1>
       {/* ── HERO ─────────────────────────────────────────────────────── */}
       <HeroSection
         backgroundType="image"
         backgroundSrc="/Images/contact-hero.jpeg"
         ctaText="Contact Us"
         ctaOnClick={() => openModal()}
       />

       {/* ── INFO & FORM ──────────────────────────────────────────────── */}
       <section className="section">
         <div className="container">
           <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
             {/* Info Cards */}
             <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
               <FadeUp>
                 <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                   <div style={{ display: "flex", gap: "24px" }}>
                     <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                       <Mail style={{ color: "var(--orange)" }} size={24} />
                     </div>
                     <div>
                       <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Email Us</h3>
                       <p style={{ fontSize: "14px", color: "var(--fg-light)", marginBottom: "16px" }}>For enquiries, support, and collaborations.</p>
                       <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "var(--orange)", fontWeight: 800, fontSize: "17px" }}>{siteConfig.contact.email}</a>
                     </div>
                   </div>
                 </div>
               </FadeUp>

               <FadeUp delay={0.1}>
                 <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                   <div style={{ display: "flex", gap: "24px" }}>
                     <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                       <Phone style={{ color: "var(--orange)" }} size={24} />
                     </div>
                     <div>
                       <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Growth Strategy Call</h3>
                       <p style={{ fontSize: "14px", color: "var(--fg-light)", marginBottom: "16px" }}>Mon–Fri from 9am to 7pm IST.</p>
                       <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                         <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} style={{ color: "var(--orange)", fontWeight: 800, fontSize: "17px" }}>{siteConfig.contact.phone}</a>
                       </div>
                     </div>
                   </div>
                 </div>
               </FadeUp>

               <FadeUp delay={0.2}>
                 <div className="card glass-card" style={{ padding: "32px", borderRadius: "24px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)" }}>
                   <div style={{ display: "flex", gap: "24px" }}>
                     <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                       <MapPin style={{ color: "var(--orange)" }} size={24} />
                     </div>
                     <div>
                       <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "6px" }}>Our Hub</h3>
                       <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--fg)", margin: 0 }}>{siteConfig.contact.address.split(",")[0]},</p>
                       <p style={{ fontSize: "16px", color: "var(--fg-light)", margin: 0 }}>{siteConfig.contact.address.split(",").slice(1).join(",")}</p>
                     </div>
                   </div>
                 </div>
               </FadeUp>

               <FadeUp delay={0.3}>
                 <h3 style={{ fontWeight: 800, fontSize: "16px", marginBottom: "16px" }}>Follow Our Journey</h3>
                 <div style={{ display: "flex", gap: "12px" }}>
                   {siteConfig.socials.map((s) => {
                     let Icon = FaInstagram;
                     if (s.label === "Facebook") Icon = FaFacebook;
                     if (s.label === "YouTube") Icon = FaYoutube;
                     if (s.label === "LinkedIn") Icon = FaLinkedin;
                     if (s.label === "WhatsApp") Icon = FaWhatsapp;
                     return (
                       <a
                         key={s.label}
                         href={s.href}
                         target="_blank"
                         rel="noreferrer"
                         aria-label={s.label}
                         style={{ width: "45px", height: "45px", borderRadius: "12px", border: "1px solid var(--border-c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "var(--fg-light)", transition: "all 0.3s" }}
                         className="hover:border-[var(--orange)] hover:text-[var(--orange)]"
                       >
                         <Icon />
                       </a>
                     );
                   })}
                 </div>
               </FadeUp>
             </div>

             {/* Form */}
             <FadeUp delay={0.2}>
               <div className="card glass-card" style={{ padding: "48px 32px", borderRadius: "32px", background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "0 40px 100px var(--shadow-lg)" }}>
                 {mutation.isSuccess ? (
                   <div style={{ textAlign: "center", padding: "60px 0" }}>
                     <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(34, 197, 94, 0.1)", color: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                       <CheckCircle size={40} style={{ color: "#22c55e" }} />
                     </div>
                     <h3 style={{ fontWeight: 950, fontSize: "32px", color: "#22c55e", marginBottom: "16px" }}>Message Received</h3>
                     <p style={{ color: "var(--fg-light)", fontSize: "18px", marginBottom: "32px" }}>Our execution team will reach out within 24 hours.</p>
                     <button
                       onClick={() => { mutation.reset(); reset(); }}
                       className="btn-primary"
                       style={{ margin: "0 auto", padding: "16px 40px" }}
                     >
                       Send Another Message
                     </button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                     <input type="text" {...register("honeypot")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                         <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Full Name *</label>
                         <input {...register("fullName")} type="text" placeholder="John Doe" style={inputStyle} />
                         {errors.fullName && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "6px" }}>{errors.fullName.message}</p>}
                       </div>
                       <div>
                         <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Business Name</label>
                         <input {...register("businessName")} type="text" placeholder="Your Company" style={inputStyle} />
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                         <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email Address *</label>
                         <input {...register("email")} type="email" placeholder="john@example.com" style={inputStyle} />
                         {errors.email && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "6px" }}>{errors.email.message}</p>}
                       </div>
                       <div>
                         <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Phone Number *</label>
                         <input {...register("phone")} type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                         {errors.phone && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "6px" }}>{errors.phone.message}</p>}
                       </div>
                     </div>

                     <div>
                       <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Growth Pillar *</label>
                       <div style={{ position: "relative" }}>
                         <select {...register("service")} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                           <option value="">Select a service...</option>
                           <option value="ai-automation">AI Automation</option>
                           <option value="branding-design">Branding & Identity</option>
                           <option value="digital-marketing">Digital Marketing</option>
                           <option value="website-development">Website Development</option>
                           <option value="mobile-app-development">Mobile App Development</option>
                           <option value="erp-systems">ERP Systems</option>
                           <option value="seo-services">SEO Services</option>
                           <option value="other">Other / Not Sure</option>
                         </select>
                         <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", borderTop: "6px solid var(--fg-light)", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", opacity: 0.7 }}></div>
                       </div>
                       {errors.service && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "6px" }}>{errors.service.message}</p>}
                     </div>

                     <div>
                       <label style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--fg-light)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Your Vision & Struggle *</label>
                       <textarea {...register("message")} rows={5} placeholder="Tell us about the dream you're building..." style={{ ...inputStyle, resize: "vertical" }} />
                       {errors.message && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "6px" }}>{errors.message.message}</p>}
                     </div>

                     {mutation.isError && (
                       <p style={{ fontSize: "14px", color: "#ef4444", fontWeight: 600, padding: "12px", background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: "12px" }}>
                         Submission Failed: {(mutation.error as any)?.data?.error || mutation.error?.message || "An unexpected error occurred. Please try again."}
                       </p>
                     )}

                     <button
                       type="submit"
                       disabled={mutation.isPending}
                       className="btn-primary"
                       style={{ justifyContent: "center", padding: "20px", fontSize: "17px", fontWeight: 900, opacity: mutation.isPending ? 0.6 : 1, cursor: mutation.isPending ? "not-allowed" : "pointer" }}
                     >
                       {mutation.isPending ? "Sending..." : "Send Message"} <ArrowRight size={20} />
                     </button>
                     <p style={{ fontSize: "13px", textAlign: "center", color: "var(--fg-lighter)", margin: 0, opacity: 0.7 }}>
                       Precision in communication. Results in execution.
                     </p>
                   </form>
                 )}
               </div>
             </FadeUp>
           </div>
         </div>
       </section>
    </main>
  );
}
