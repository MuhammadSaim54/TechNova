import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Send,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { toast } from "sonner";

import FooterData from "./FooterData";
import Logo from "./TechNova-Logo.png";
import { useTheme } from "../../context/ThemeContext";
import { Badge } from "@/src/components/ui/badge";

function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid work email.");
      return;
    }
    setSubscribed(true);
    toast.success("Subscribed to TechNova Architecture Briefs.");
    setEmail("");
  };

  return (
    <footer aria-label="Site Footer" className="relative w-full border-t border-border/70 bg-background/95 dark:bg-[#060a12] backdrop-blur-3xl overflow-hidden transition-colors duration-300">

      {/* ================= Specular Lighting & Depth Overlays ================= */}

      {/* Top Hairline Specular Reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none z-20" aria-hidden="true" />

      {/* Calibrated Blueprint Grid for Both Themes */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          pointer-events-none -z-10
        "
      />

      {/* Ambient Lighting Halos */}
      <div aria-hidden="true" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] sm:w-[700px] h-[280px] bg-primary/10 dark:bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div aria-hidden="true" className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ================= Master Content Container ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 z-10">

        {/* Top Intelligence & Newsletter Header */}
        <div className="pb-14 mb-14 border-b border-border/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="brand" className="gap-1.5 px-3 py-1 text-[11px]">
              <Sparkles className="w-3 h-3 text-primary" aria-hidden="true" />
              <span>Intelligence Dispatches</span>
            </Badge>
            <h3 id="newsletter-heading" className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Subscribe to Architecture & Product Briefs
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed">
              Curated breakdowns on enterprise system designs, modern frontend engineering, and high-converting UX principles. Zero spam.
            </p>
          </div>

          {/* Interactive Terminal Subscribe Form */}
          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubscribe} aria-labelledby="newsletter-heading" className="relative flex items-center w-full max-w-md lg:ml-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Work Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="work@enterprise.com"
                className="w-full h-12 pl-4 pr-32 rounded-2xl bg-muted/40 dark:bg-white/[0.03] border border-border/80 dark:border-white/10 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="
                  absolute right-1.5 h-9 px-4 rounded-xl
                  bg-gradient-to-r from-blue-600 to-primary
                  text-white text-xs font-semibold
                  shadow-md shadow-primary/25 hover:shadow-primary/40
                  flex items-center gap-1.5 transition-all duration-200
                  hover:opacity-95 active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
                "
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" aria-hidden="true" />
              </button>
            </form>
            <div className="mt-2.5 flex items-center gap-3 text-[11px] font-medium text-muted-foreground/80 lg:justify-end">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" aria-hidden="true" />
                Confidentiality Guaranteed
              </span>
              <span aria-hidden="true">•</span>
              <span>Bi-weekly Delivery</span>
            </div>
          </div>
        </div>

        {/* 4-Column Structured Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 text-left">

          {/* Brand & Corporate Overview (5 Columns) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <NavLink
              to="/"
              aria-label="TechNova Homepage"
              className="inline-flex mb-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            >
              <img
                src={Logo}
                alt="TechNova Logo"
                className={`
                  h-14 sm:h-16 md:h-18
                  w-auto object-contain
                  transition-all duration-300
                  ${theme === "dark" ? "brightness-0 invert opacity-95" : "opacity-90"}
                `}
              />
            </NavLink>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              TechNova is an engineering studio dedicated to crafting digital infrastructure, high-fidelity user experiences, and scalable web software for visionary brands worldwide.
            </p>

            {/* Live Operational Status Telemetry Box */}
            <div 
              role="status" 
              aria-live="polite" 
              className="mt-6 flex flex-col gap-2 p-3.5 rounded-2xl border border-border/70 dark:border-white/10 bg-muted/30 dark:bg-white/[0.02] backdrop-blur-xl w-full max-w-xs"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-foreground uppercase tracking-wider">Network Status</span>
                <Badge variant="live" className="px-2 py-0.5 text-[10px]">
                  All Systems Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/70 pt-1 border-t border-border/40">
                <span>Latency: 24ms</span>
                <span>Uptime: 99.98%</span>
                <span>Version 2.4.0</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Columns) */}
          <nav aria-label="Footer Quick Links" className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5">
              // Navigation
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none text-xs sm:text-sm">
              {FooterData.quickLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary" aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Capabilities (2 Columns) */}
          <section aria-label="Footer Capabilities" className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5">
              // Capabilities
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none text-xs sm:text-sm">
              {FooterData.services.map((service) => (
                <li key={service.id}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 4: Transmission / Coordinates (3 Columns) */}
          <section aria-label="Footer Contact Coordinates" className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5">
              // Transmission
            </h4>
            <ul className="space-y-4 p-0 m-0 list-none text-xs sm:text-sm">
              {FooterData.contact.map((item) => (
                <li key={item.id} className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* ================= Bottom Sub-Footer ================= */}
        <div className="w-full h-px mt-16 mb-8 bg-border/60" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} TechNova Engineering Collective.</p>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Security</a>
            </div>
          </div>

          {/* Specular Social Chips */}
          <div className="flex items-center gap-2">
            {FooterData.socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.title || "Social channel"} (opens in new tab)`}
                  className="
                    flex items-center justify-center
                    w-8 h-8 rounded-xl
                    border border-border/70 dark:border-white/10
                    bg-muted/40 dark:bg-white/[0.03]
                    text-muted-foreground
                    transition-all duration-300 ease-out
                    hover:border-primary hover:!bg-primary hover:text-primary-foreground
                    hover:scale-105 hover:shadow-[0_0_12px_rgba(0,81,251,0.4)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  "
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              );
            })}
          </div>

        </div>

      </div>

      {/* Giant Watermark with Dual Theme Contrast */}
      <div
        aria-hidden="true"
        className="
          absolute -bottom-10 left-1/2 -translate-x-1/2 
          text-[13vw] font-black tracking-tighter uppercase 
          select-none pointer-events-none -z-10 whitespace-nowrap
          text-black/[0.05] dark:text-white/[0.035]
        "
      >
        TECHNOVA
      </div>

    </footer>
  );
}

export default Footer;