import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@workspace/api-client-react";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ open, onClose }: Props) {
  const mutation = useSubmitContact();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) { document.body.style.overflow = "hidden"; } else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onSubmit = (data: FormData) => {
    mutation.mutate({
      data: {
        fullName: data.fullName,
        businessName: data.businessName || null,
        email: data.email,
        phone: data.phone,
        service: data.service as "digital-marketing" | "ai-automation" | "seo-services" | "website-development" | "social-media-marketing" | "erp-systems" | "mobile-app-development" | "branding-design" | "other",
        message: data.message || null,
        honeypot: data.honeypot || null,
      },
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg bg-[#141630] border border-primary/30 rounded-2xl shadow-[0_0_60px_rgba(232,119,34,0.15)] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10"
              data-testid="button-close-modal"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {mutation.isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={60} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => { mutation.reset(); form.reset(); onClose(); }}
                    className="mt-6 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                    data-testid="button-modal-done"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <span className="text-xs font-mono text-primary tracking-widest uppercase mb-3 block">— FREE CONSULTATION</span>
                  <h2 className="text-2xl font-display font-bold text-white mb-1">Let's Build Your</h2>
                  <h2 className="text-2xl font-display font-bold text-primary mb-3">Digital Growth System</h2>
                  <p className="text-muted-foreground text-sm mb-6">Share your details and our team will reach out within 24 hours.</p>

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <input type="text" {...form.register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Full Name *</label>
                        <input
                          {...form.register("fullName")}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="Your name"
                          data-testid="input-fullname"
                        />
                        {form.formState.errors.fullName && (
                          <p className="text-xs text-red-400 mt-1">{form.formState.errors.fullName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Business Name</label>
                        <input
                          {...form.register("businessName")}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="Your company"
                          data-testid="input-business"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Email Address *</label>
                        <input
                          {...form.register("email")}
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="you@company.com"
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-xs text-red-400 mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Phone Number *</label>
                        <input
                          {...form.register("phone")}
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                          data-testid="input-phone"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-xs text-red-400 mt-1">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Service Interested</label>
                      <select
                        {...form.register("service")}
                        className="w-full bg-[#0F1035] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                        data-testid="select-service"
                      >
                        <option value="">Select a service...</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="seo-services">SEO Services</option>
                        <option value="website-development">Website Development</option>
                        <option value="social-media-marketing">Social Media Marketing</option>
                        <option value="erp-systems">ERP Systems</option>
                        <option value="mobile-app-development">Mobile App Development</option>
                        <option value="branding-design">Branding & Design</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      {form.formState.errors.service && (
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Message (Optional)</label>
                      <textarea
                        {...form.register("message")}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        data-testid="textarea-message"
                      />
                    </div>

                    {mutation.isError && (
                      <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                      data-testid="button-submit-consultation"
                    >
                      {mutation.isPending ? "Sending..." : "→ Send My Request"}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">We respect your privacy. No spam, ever.</p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
