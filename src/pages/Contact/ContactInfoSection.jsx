import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { 
  Send, 
  Loader2, 
  MapPin, 
  ShieldCheck, 
  Mail, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  User,
  AtSign,
  Terminal,
  CornerDownLeft
} from "lucide-react";

import { Section } from "@/src/components/layout/Section";
import { Label } from "@/src/components/ui/label";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { id: "fullstack", label: "Full-Stack Web", tag: "Next.js / React" },
  { id: "uiux", label: "Product Design", tag: "Design Systems" },
  { id: "mobile", label: "Mobile Apps", tag: "iOS & Android" },
  { id: "cloud", label: "Cloud & DevOps", tag: "High Scale" },
];

const BUDGET_TIERS = [
  { id: "tier1", label: "<$5k", desc: "MVP Sprint" },
  { id: "tier2", label: "$5k - $15k", desc: "Growth Scale" },
  { id: "tier3", label: "$15k - $30k", desc: "Enterprise" },
  { id: "tier4", label: "$30k+", desc: "Flagship" },
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
  const [focusedField, setFocusedField] = useState(null);

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
    if (!formData.fullName.trim()) newErrors.fullName = "Identifier required";
    if (!formData.email.trim()) {
      newErrors.email = "Transmission address required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid transmission address syntax";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Specification brief required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Specification brief must exceed 10 characters";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Mutual NDA consent required to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) {
      toast.error("Form transmission rejected. Verify marked fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      toast.success("Payload accepted! Senior architect dispatching technical SOW in 24 hours.");
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch {
      toast.error("Transmission interruption. Retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keyboard shortcut: Cmd/Ctrl + Enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [formData]);

  return (
    <Section
      id="contact-form"
      className="py-14 md:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* Dynamic Blueprint Grid Texture for Both Themes */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:3rem_3rem] 
          [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Atmospheric Central Radiance */}
      <motion.div 
        aria-hidden="true" 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[420px] sm:w-[650px] h-[420px] bg-primary rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* ================= 2-Column Split Console ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* LEFT COLUMN: Intake Console */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div
            className="
              group relative w-full overflow-hidden
              rounded-[28px] p-[1.5px]
              shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "
          >
            {/* Rotating Conic Laser Beam Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
              className="
                absolute -inset-[150%] 
                bg-[conic-gradient(from_0deg,transparent_0_300deg,#0051fb_330deg,#38bdf8_355deg,transparent_360deg)]
                pointer-events-none z-0
              "
            />

            {/* Adaptive Console Surface */}
            <div
              className="
                relative w-full h-full
                rounded-[26.5px] p-6 sm:p-9 lg:p-10
                bg-card dark:bg-[#070b14]
                overflow-hidden z-10
                border border-border/80 dark:border-white/[0.08]
                transition-colors duration-300
              "
            >
              {/* Telemetry Header */}
              <div className="mb-8 flex flex-col items-start text-left">
                {/* 👉 TELEMETRY BADGE (Single-Line No-Wrap Snug Pill) */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full border border-border/80 dark:border-white/[0.12] bg-background/80 dark:bg-white/[0.04] backdrop-blur-xl shadow-xs max-w-full overflow-x-auto no-scrollbar">
                  <span className="relative flex h-2 w-2 shrink-0 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-muted-foreground uppercase whitespace-nowrap shrink-0">
                    ARCHITECT GATEWAY // SOW_READY
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground dark:text-white leading-tight">
                  Deploy Your Vision.
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed font-normal">
                  Skip account managers. Connect directly with senior full-stack architects and receive technical specifications within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Input Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name Field */}
                  <div className="space-y-2 text-left w-full">
                    <Label 
                      htmlFor="fullName" 
                      className={`text-xs font-mono tracking-tight transition-colors duration-200 flex items-center gap-1.5 ${
                        errors.fullName 
                          ? "text-destructive" 
                          : focusedField === "fullName" 
                            ? "text-primary dark:text-cyan-400 font-semibold" 
                            : "text-muted-foreground"
                      }`}
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>CLIENT_NAME</span>
                      <span className="text-primary">*</span>
                    </Label>

                    <div className="relative">
                      <input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`
                          w-full h-12 rounded-xl px-4 text-sm outline-none transition-all duration-200
                          bg-muted/40 dark:bg-[#050811] 
                          text-foreground dark:text-white 
                          placeholder:text-muted-foreground/40
                          border
                          ${errors.fullName 
                            ? "border-destructive shadow-[0_0_15px_rgba(239,68,68,0.25)]" 
                            : focusedField === "fullName"
                              ? "border-primary dark:border-cyan-400 shadow-[0_0_18px_rgba(0,81,251,0.25)] dark:shadow-[0_0_18px_rgba(56,189,248,0.3)] ring-1 ring-primary/40 dark:ring-cyan-400/50"
                              : "border-border/80 dark:border-white/[0.08] hover:border-border dark:hover:border-white/[0.18]"
                          }
                        `}
                      />
                    </div>

                    <AnimatePresence>
                      {errors.fullName && (
                        <motion.p
                          initial={{ opacity: 0, y: -4, x: -6 }}
                          animate={{ opacity: 1, y: 0, x: [0, -4, 4, -2, 0] }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs font-mono text-destructive pt-0.5"
                        >
                          ! {errors.fullName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Business Email Field */}
                  <div className="space-y-2 text-left w-full">
                    <Label 
                      htmlFor="email" 
                      className={`text-xs font-mono tracking-tight transition-colors duration-200 flex items-center gap-1.5 ${
                        errors.email 
                          ? "text-destructive" 
                          : focusedField === "email" 
                            ? "text-primary dark:text-cyan-400 font-semibold" 
                            : "text-muted-foreground"
                      }`}
                    >
                      <AtSign className="w-3.5 h-3.5" />
                      <span>ENTERPRISE_EMAIL</span>
                      <span className="text-primary">*</span>
                    </Label>

                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={handleChange}
                        placeholder="sarah@enterprise.com"
                        className={`
                          w-full h-12 rounded-xl px-4 text-sm outline-none transition-all duration-200
                          bg-muted/40 dark:bg-[#050811] 
                          text-foreground dark:text-white 
                          placeholder:text-muted-foreground/40
                          border
                          ${errors.email 
                            ? "border-destructive shadow-[0_0_15px_rgba(239,68,68,0.25)]" 
                            : focusedField === "email"
                              ? "border-primary dark:border-cyan-400 shadow-[0_0_18px_rgba(0,81,251,0.25)] dark:shadow-[0_0_18px_rgba(56,189,248,0.3)] ring-1 ring-primary/40 dark:ring-cyan-400/50"
                              : "border-border/80 dark:border-white/[0.08] hover:border-border dark:hover:border-white/[0.18]"
                          }
                        `}
                      />
                    </div>

                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4, x: -6 }}
                          animate={{ opacity: 1, y: 0, x: [0, -4, 4, -2, 0] }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs font-mono text-destructive pt-0.5"
                        >
                          ! {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Scope Selection Pills */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-mono tracking-tight text-muted-foreground flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>ARCHITECTURE_FOCUS</span>
                    </Label>
                    <span className="text-[10px] font-mono text-muted-foreground/60">
                      [SELECT ONE]
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {SERVICES.map((srv) => {
                      const active = formData.service === srv.label;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => handleSelectField("service", srv.label)}
                          className={`
                            group/btn relative p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer outline-none overflow-hidden
                            ${active 
                              ? "border-primary dark:border-cyan-400/80 text-white shadow-[0_0_15px_rgba(0,81,251,0.25)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                              : "border-border/80 dark:border-white/[0.08] bg-muted/40 dark:bg-[#050811] text-muted-foreground hover:border-border dark:hover:border-white/[0.18] hover:text-foreground dark:hover:text-white"
                            }
                          `}
                        >
                          {active && (
                            <motion.div
                              layoutId="activeServiceVercelPill"
                              transition={{ type: "spring", stiffness: 450, damping: 32 }}
                              className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 via-primary to-indigo-600 shadow-[0_0_20px_rgba(0,81,251,0.5)] -z-10"
                            />
                          )}

                          <div className="relative z-10 flex flex-col">
                            <span className="text-xs font-bold leading-tight tracking-tight">
                              {srv.label}
                            </span>
                            <span className={`text-[10px] font-mono mt-1 ${active ? "text-blue-100 dark:text-cyan-200" : "text-muted-foreground/60"}`}>
                              {srv.tag}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Pills */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-mono tracking-tight text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>ESTIMATED_CAPITAL_ALLOCATION</span>
                    </Label>
                    <span className="text-[10px] font-mono text-muted-foreground/60">
                      [USD]
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {BUDGET_TIERS.map((tier) => {
                      const active = formData.budget === tier.label;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => handleSelectField("budget", tier.label)}
                          className={`
                            relative p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer outline-none overflow-hidden
                            ${active 
                              ? "border-primary dark:border-cyan-400/80 text-white shadow-[0_0_15px_rgba(0,81,251,0.25)] dark:shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                              : "border-border/80 dark:border-white/[0.08] bg-muted/40 dark:bg-[#050811] text-muted-foreground hover:border-border dark:hover:border-white/[0.18] hover:text-foreground dark:hover:text-white"
                            }
                          `}
                        >
                          {active && (
                            <motion.div
                              layoutId="activeBudgetVercelPill"
                              transition={{ type: "spring", stiffness: 450, damping: 32 }}
                              className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 via-primary to-indigo-600 shadow-[0_0_20px_rgba(0,81,251,0.5)] -z-10"
                            />
                          )}

                          <div className="relative z-10 flex flex-col">
                            <span className="text-xs font-bold leading-tight">
                              {tier.label}
                            </span>
                            <span className={`text-[9px] font-mono mt-0.5 ${active ? "text-blue-100 dark:text-cyan-200" : "text-muted-foreground/60"}`}>
                              {tier.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Specification Brief Textarea */}
                <div className="space-y-2 text-left w-full">
                  <Label 
                    htmlFor="message" 
                    className={`text-xs font-mono tracking-tight transition-colors duration-200 flex items-center gap-1.5 ${
                      errors.message 
                        ? "text-destructive" 
                        : focusedField === "message" 
                          ? "text-primary dark:text-cyan-400 font-semibold" 
                          : "text-muted-foreground"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>PROJECT_SPECIFICATION_BRIEF</span>
                    <span className="text-primary">*</span>
                  </Label>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      placeholder="Outline key system capabilities, performance thresholds, target integrations, or launch milestones..."
                      className={`
                        w-full rounded-xl p-4 text-sm outline-none resize-none font-sans leading-relaxed transition-all duration-200
                        bg-muted/40 dark:bg-[#050811] 
                        text-foreground dark:text-white 
                        placeholder:text-muted-foreground/40
                        border
                        ${errors.message 
                          ? "border-destructive shadow-[0_0_15px_rgba(239,68,68,0.25)]" 
                          : focusedField === "message"
                            ? "border-primary dark:border-cyan-400 shadow-[0_0_18px_rgba(0,81,251,0.25)] dark:shadow-[0_0_18px_rgba(56,189,248,0.3)] ring-1 ring-primary/40 dark:ring-cyan-400/50"
                            : "border-border/80 dark:border-white/[0.08] hover:border-border dark:hover:border-white/[0.18]"
                        }
                      `}
                    />
                  </div>

                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4, x: -6 }}
                        animate={{ opacity: 1, y: 0, x: [0, -4, 4, -2, 0] }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs font-mono text-destructive pt-0.5"
                      >
                        ! {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Terms Consent */}
                <div className="pt-1 text-left">
                  <div className="flex items-start space-x-2.5">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleSelectField("termsAccepted", !!checked)}
                      className="mt-0.5 border-border/80 dark:border-white/[0.2] data-[state=checked]:bg-primary"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-xs text-muted-foreground leading-snug cursor-pointer select-none font-sans"
                    >
                      Authorize transmission under standard bilateral mutual non-disclosure and intellectual property protection guidelines.
                    </Label>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-xs font-mono text-destructive pt-1">
                      ! {errors.termsAccepted}
                    </p>
                  )}
                </div>

                {/* Submit Dock */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group relative h-13 px-8 rounded-xl
                      bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                      text-white font-semibold text-sm tracking-wide
                      shadow-[0_4px_25px_rgba(0,81,251,0.35)] hover:shadow-[0_6px_35px_rgba(0,81,251,0.6)]
                      active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer
                      flex items-center justify-center gap-3 w-full sm:w-auto
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute -inset-full top-0 w-1/2 h-full
                        bg-gradient-to-r from-transparent via-white/35 to-transparent
                        -skew-x-12 opacity-0 group-hover:opacity-100
                        group-hover:animate-[shimmer_1.4s_infinite]
                        pointer-events-none
                      "
                    />

                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="font-mono">TRANSMITTING_PAYLOAD...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Specification</span>
                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                          <Send className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" />
                          <Send className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-white" />
                        </div>
                      </>
                    )}
                  </Button>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span>Press</span>
                    <kbd className="px-2 py-1 rounded bg-muted dark:bg-white/[0.06] border border-border dark:border-white/[0.1] text-[10px] text-foreground dark:text-white flex items-center gap-1 font-mono">
                      <span>⌘ / Ctrl</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </kbd>
                    <span>to submit</span>
                  </div>
                </div>

                {/* Proof Strip */}
                <div className="pt-4 border-t border-border/80 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left font-mono">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>MUTUAL_NDA_ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>24H_TURNAROUND</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>SENIOR_ENGINEERING</span>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Terminal Command Map & Direct Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          
          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[320px] rounded-[28px] overflow-hidden border border-border/80 dark:border-white/[0.1] bg-card dark:bg-[#070b14] shadow-xl flex flex-col group">
            <div 
              aria-hidden="true" 
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none" 
            />

            <iframe
              title="TechNova Global HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54145942475!2d74.2437599352934!3d31.520369599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0 contrast-125 opacity-90 dark:grayscale dark:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl border border-border/80 dark:border-white/[0.12] bg-background/95 dark:bg-[#070b14]/95 backdrop-blur-2xl shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  aria-hidden="true" 
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white shrink-0 shadow-[0_0_15px_rgba(0,81,251,0.4)]"
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-foreground dark:text-white leading-tight">
                    TechNova Innovation Campus
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground leading-tight mt-0.5">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
              </div>
              <Badge variant="live" className="px-2.5 py-0.5 text-[10px]">
                HQ Active
              </Badge>
            </div>
          </div>

          {/* Channels Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            <a
              href="mailto:contact@technova.com"
              className="
                group flex items-center justify-between p-4.5 rounded-2xl
                border border-border/80 dark:border-white/[0.08] 
                bg-card dark:bg-[#070b14]/90
                backdrop-blur-xl transition-all duration-300
                hover:border-primary/60 hover:-translate-y-1
                shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              "
            >
              <div className="flex items-center gap-3">
                <div 
                  aria-hidden="true" 
                  className="p-2.5 rounded-xl bg-primary/10 dark:bg-white/[0.05] border border-primary/20 dark:border-white/[0.12] text-primary dark:text-cyan-400 group-hover:!bg-primary group-hover:!text-white group-hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Direct Inquiries
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
                    contact@technova.com
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-cyan-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="tel:+923000000000"
              className="
                group flex items-center justify-between p-4.5 rounded-2xl
                border border-border/80 dark:border-white/[0.08] 
                bg-card dark:bg-[#070b14]/90
                backdrop-blur-xl transition-all duration-300
                hover:border-primary/60 hover:-translate-y-1
                shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              "
            >
              <div className="flex items-center gap-3">
                <div 
                  aria-hidden="true" 
                  className="p-2.5 rounded-xl bg-primary/10 dark:bg-white/[0.05] border border-primary/20 dark:border-white/[0.12] text-primary dark:text-cyan-400 group-hover:!bg-primary group-hover:!text-white group-hover:scale-110 transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Client Hotline
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
                    +92 (300) 000-0000
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-cyan-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

        </div>

      </div>
    </Section>
  );
}