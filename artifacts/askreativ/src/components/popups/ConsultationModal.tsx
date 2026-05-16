import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
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

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 16px", fontSize: "14px",
  background: "var(--bg-section)", color: "var(--fg)",
  border: "1px solid var(--border-c)", borderRadius: "10px",
  outline: "none", transition: "border-color 0.2s",
  fontFamily: "Poppins, sans-serif",
};

export default function ConsultationModal({ open, onClose }: Props) {
  const mutation = useSubmitContact();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", businessName: "", email: "", phone: "", service: "", message: "", honeypot: "" },
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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
          style={{ position: "fixed", inset: 0, zIndex: 100000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            style={{
              position: "relative", width: "100%", maxWidth: "520px",
              background: "var(--card-bg)", border: "1px solid var(--card-border)",
              borderRadius: "20px", boxShadow: "0 20px 60px var(--shadow-md)",
              maxHeight: "90vh", overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
            data-testid="consultation-modal"
          >
            {/* Top accent bar */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, var(--orange), var(--gold))", borderRadius: "20px 20px 0 0" }} />

            <button
              onClick={onClose}
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "var(--fg-light)", lineHeight: 1, zIndex: 10 }}
              data-testid="button-close-modal"
            >
              <X size={20} />
            </button>

            <div style={{ padding: "32px" }}>
              {mutation.isSuccess ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "32px 0" }}>
                  <CheckCircle size={60} style={{ color: "var(--orange)", margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--fg)", marginBottom: "8px" }}>Message Sent!</h3>
                  <p style={{ color: "var(--fg-light)", marginBottom: "24px" }}>We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => { mutation.reset(); form.reset(); onClose(); }}
                    className="btn-primary"
                    style={{ margin: "0 auto" }}
                    data-testid="button-modal-done"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--orange)", display: "block", marginBottom: "10px" }}>
                    Free Consultation
                  </span>
                  <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--fg)", marginBottom: "4px" }}>Let's Build Your</h2>
                  <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--orange)", marginBottom: "12px" }}>Digital Growth System</h2>
                  <p style={{ fontSize: "13px", color: "var(--fg-light)", marginBottom: "24px" }}>Share your details and our team will reach out within 24 hours.</p>

                  <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <input type="text" {...form.register("honeypot")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name *</label>
                        <input {...form.register("fullName")} placeholder="Your Name" style={inputStyle} data-testid="input-fullname" />
                        {form.formState.errors.fullName && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "3px" }}>{form.formState.errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Business Name</label>
                        <input {...form.register("businessName")} placeholder="Your Company" style={inputStyle} data-testid="input-business" />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email *</label>
                        <input {...form.register("email")} type="email" placeholder="you@company.com" style={inputStyle} data-testid="input-email" />
                        {form.formState.errors.email && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "3px" }}>{form.formState.errors.email.message}</p>}
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone *</label>
                        <input {...form.register("phone")} type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} data-testid="input-phone" />
                        {form.formState.errors.phone && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "3px" }}>{form.formState.errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Service Interested</label>
                      <select {...form.register("service")} style={{ ...inputStyle, cursor: "pointer", background: "var(--bg-section)" }} data-testid="select-service">
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
                      {form.formState.errors.service && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "3px" }}>{form.formState.errors.service.message}</p>}
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--fg-light)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Message (Optional)</label>
                      <textarea {...form.register("message")} rows={3} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: "vertical" }} data-testid="textarea-message" />
                    </div>

                    {mutation.isError && <p style={{ fontSize: "13px", color: "#ef4444" }}>Something went wrong. Please try again.</p>}

                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="btn-primary"
                      style={{ justifyContent: "center", padding: "14px", opacity: mutation.isPending ? 0.6 : 1, cursor: mutation.isPending ? "not-allowed" : "pointer" }}
                      data-testid="button-submit-consultation"
                    >
                      {mutation.isPending ? "Sending..." : "Send My Request"} <ArrowRight size={16} />
                    </button>
                    <p style={{ fontSize: "12px", textAlign: "center", color: "var(--fg-lighter)", margin: 0 }}>We respect your privacy. No spam, ever.</p>
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
