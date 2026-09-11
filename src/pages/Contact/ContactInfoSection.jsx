import React, { useState } from "react";
import { toast } from "sonner";
import { 
  Send, 
  Loader2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight 
} from "lucide-react";

// Layout & UI Primitives
import { Section } from "@/src/components/layout/Section";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Button } from "@/src/components/ui/button";

const SERVICES = [
  "Full-Stack Web",
  "UI/UX Design",
  "Mobile Apps",
  "Cloud & DevOps",
];

const BUDGET_TIERS = [
  "<$5k",
  "$5k - $15k",
  "$15k - $30k",
  "$30k+",
];

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  service: "Full-Stack Web",
  budget: "$5k - $15k",
  message: "",
  termsAccepted: false,
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectField = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief project summary.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Summary must be at least 10 characters long.";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Consent is required to submit.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please complete the required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Inquiry transmitted! An engineering lead will reach out within 24 hours.");
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch (err) {
      toast.error("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact-form"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden w-full"
    >
      {/* Calibrated Blueprint Grid for Both Themes */}
      <div
        className="
            absolute inset-0 
            bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:3.5rem_3.5rem] 
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
            pointer-events-none -z-10
          "
      />

      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[550px] h-[350px] bg-primary/15 dark:bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ================= 2-Column Split Console ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* LEFT COLUMN: Premium High-Conversion Form */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div
            className="
              relative w-full rounded-3xl p-6 sm:p-8 lg:p-10
              border border-border/70
              bg-card/70 dark:bg-gradient-to-b dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent
              backdrop-blur-2xl
              shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.35)]
            "
          >
            {/* Top Specular Rim */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="mb-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Client Intake Console</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Let’s Discuss Your Next Build
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">
                Direct route to senior architects. Receive a comprehensive scope breakdown and estimate in 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Row 1: Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="fullName" className="text-xs font-semibold text-foreground/90">
                    Your Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`h-11 rounded-xl bg-muted/40 dark:bg-black/35 border-border/70 focus-visible:border-primary transition-all ${
                      errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-xs font-semibold text-foreground/90">
                    Business Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    className={`h-11 rounded-xl bg-muted/40 dark:bg-black/35 border-border/70 focus-visible:border-primary transition-all ${
                      errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service Selection Chips */}
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold text-foreground/90">
                  Select Scope & Architecture Focus
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SERVICES.map((srv) => {
                    const active = formData.service === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleSelectField("service", srv)}
                        className={`
                          px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 text-center
                          ${active 
                            ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm shadow-primary/20" 
                            : "border-border/60 bg-muted/30 dark:bg-white/[0.02] text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }
                        `}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tiers */}
              <div className="space-y-2 text-left">
                <Label className="text-xs font-semibold text-foreground/90">
                  Anticipated Budget Range (USD)
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_TIERS.map((tier) => {
                    const active = formData.budget === tier;
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => handleSelectField("budget", tier)}
                        className={`
                          px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 text-center
                          ${active 
                            ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/25" 
                            : "border-border/60 bg-muted/30 dark:bg-white/[0.02] text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }
                        `}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <Label htmlFor="message" className="text-xs font-semibold text-foreground/90">
                  Project Brief & Objectives <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline key features, target timelines, or existing platforms to modernize..."
                  className={`rounded-xl bg-muted/40 dark:bg-black/35 border-border/70 focus-visible:border-primary transition-all resize-none text-sm ${
                    errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-destructive font-medium">{errors.message}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-1 pt-1 text-left">
                <div className="flex items-start space-x-2.5">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => handleSelectField("termsAccepted", !!checked)}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-xs text-muted-foreground leading-snug cursor-pointer"
                  >
                    I consent to project communication under standard mutual confidentiality guidelines.
                  </Label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-xs text-destructive font-medium">{errors.termsAccepted}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px] h-12 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Securing Transmission...
                    </>
                  ) : (
                    <>
                      Request Engineering Scope
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>

              {/* Trust & Retention Proof Badges */}
              <div className="pt-4 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strict NDA Protected</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>24hr Technical SOW</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct Senior Engineers</span>
                </div>
              </div>

            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean Natural Map & Corporate Channel Hub */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          
          {/* Natural Map Window with Framed Shell */}
          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[320px] rounded-3xl overflow-hidden border border-border/70 bg-card shadow-xl flex flex-col">
            
            {/* Top Specular Frame Reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

            {/* Natural Clean Map (Uncluttered, No Muddy Filters) */}
            <iframe
              title="TechNova Global HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54145942475!2d74.2437599352934!3d31.520369599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />

            {/* Subtle Bottom Location Tag Over Map */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl border border-border/80 bg-background/95 dark:bg-black/90 backdrop-blur-xl shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-primary-foreground shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-foreground leading-tight">
                    TechNova Innovation Campus
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                HQ Open
              </span>
            </div>

          </div>

          {/* Direct Channels Data Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            
            {/* Direct Email Channel */}
            <a
              href="mailto:contact@technova.com"
              className="
                group flex items-center justify-between p-4 rounded-2xl
                border border-border/60 bg-card/60 dark:bg-white/[0.03]
                backdrop-blur-xl transition-all duration-300
                hover:border-primary/50 hover:-translate-y-0.5 shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    General Inquiries
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    contact@technova.com
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct Phone Line */}
            <a
              href="tel:+923000000000"
              className="
                group flex items-center justify-between p-4 rounded-2xl
                border border-border/60 bg-card/60 dark:bg-white/[0.03]
                backdrop-blur-xl transition-all duration-300
                hover:border-primary/50 hover:-translate-y-0.5 shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Client Hotline
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    +92 (300) 000-0000
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>

        </div>

      </div>
    </Section>
  );
}