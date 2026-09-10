import {
  FaGoogle,
  FaApple,
  FaMicrosoft,
} from "react-icons/fa6";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog.jsx";
import { Button } from "@/src/components/ui/button.jsx";
import Logo from "../navbar/TechNova-Logo.webp";
import { useTheme } from "../../context/ThemeContext";

function GetStartedDialog({ open, onOpenChange }) {
  const { theme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="
          w-[calc(100%-2rem)]
          max-w-[400px]
          p-5 sm:p-6
          overflow-hidden
          rounded-[28px]
          border border-border/80 dark:border-white/[0.12]
          bg-background/95 dark:bg-[#070b14]/90
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)]
          z-[1050]
        "
      >
        {/* Top Specular Rim Reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />

        {/* Ambient Modal Lighting Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-28 bg-primary/20 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* ================= Header ================= */}
        <DialogHeader className="flex flex-col items-center pt-0 pb-3 text-center">
          
          {/* Sizable TechNova Logo with Optical Compensation */}
          <div className="flex items-center justify-center -my-3 h-20 sm:h-24 overflow-hidden">
            <img
              src={Logo}
              alt="TechNova Logo"
              className={`h-full w-auto object-contain transition-all duration-300 scale-125 ${
                theme === "dark" ? "brightness-0 invert opacity-95" : "opacity-90"
              }`}
            />
          </div>

          {/* Dialog Title */}
          <DialogTitle className="text-lg sm:text-xl font-bold tracking-tight text-foreground mt-1">
            Welcome to TechNova
          </DialogTitle>

          {/* Dialog Subtitle */}
          <DialogDescription className="mt-1 max-w-[280px] text-xs text-muted-foreground leading-relaxed">
            Access your client dashboard, review project telemetry, and collaborate with your squad.
          </DialogDescription>
        </DialogHeader>

        {/* ================= Authentication Channels ================= */}
        <div className="flex flex-col gap-2 pt-1 pb-2">
          
          {/* Google SSO */}
          <Button
            type="button"
            variant="outline"
            className="
              group relative flex items-center justify-center gap-2.5
              w-full h-10 rounded-xl
              border border-border/80 dark:border-white/10
              bg-muted/30 dark:bg-white/[0.03]
              text-foreground text-xs font-semibold
              transition-all duration-200
              hover:border-primary/50 hover:bg-muted/60 dark:hover:bg-white/[0.06]
              active:scale-[0.99]
            "
          >
            <FaGoogle className="w-3.5 h-3.5 text-red-500 transition-transform duration-200 group-hover:scale-110" />
            <span>Continue with Google</span>
          </Button>

          {/* Apple SSO */}
          <Button
            type="button"
            variant="outline"
            className="
              group relative flex items-center justify-center gap-2.5
              w-full h-10 rounded-xl
              border border-border/80 dark:border-white/10
              bg-muted/30 dark:bg-white/[0.03]
              text-foreground text-xs font-semibold
              transition-all duration-200
              hover:border-primary/50 hover:bg-muted/60 dark:hover:bg-white/[0.06]
              active:scale-[0.99]
            "
          >
            <FaApple className="w-3.5 h-3.5 text-foreground transition-transform duration-200 group-hover:scale-110" />
            <span>Continue with Apple</span>
          </Button>

          {/* Microsoft SSO */}
          <Button
            type="button"
            variant="outline"
            className="
              group relative flex items-center justify-center gap-2.5
              w-full h-10 rounded-xl
              border border-border/80 dark:border-white/10
              bg-muted/30 dark:bg-white/[0.03]
              text-foreground text-xs font-semibold
              transition-all duration-200
              hover:border-primary/50 hover:bg-muted/60 dark:hover:bg-white/[0.06]
              active:scale-[0.99]
            "
          >
            <FaMicrosoft className="w-3.5 h-3.5 text-blue-500 transition-transform duration-200 group-hover:scale-110" />
            <span>Continue with Microsoft</span>
          </Button>

          {/* Separator */}
          <div className="flex items-center gap-2.5 my-1">
            <span className="flex-1 h-px bg-border/60" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70">
              OR
            </span>
            <span className="flex-1 h-px bg-border/60" />
          </div>

          {/* Work Email Action */}
          <button
            type="button"
            className="
              group relative flex items-center justify-center gap-2
              w-full h-10 rounded-xl
              bg-gradient-to-r from-blue-600 via-primary to-indigo-600
              text-white text-xs font-bold tracking-wide
              shadow-md shadow-primary/25 hover:shadow-primary/40
              hover:opacity-95 active:scale-[0.99]
              transition-all duration-200
              overflow-hidden
            "
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/35 pointer-events-none" />
            <Mail className="w-3.5 h-3.5" />
            <span>Continue with Work Email</span>
            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

        </div>

        {/* ================= Trust & Legal Note ================= */}
        <div className="pt-2 flex flex-col items-center text-center gap-1.5 border-t border-border/50 dark:border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>256-bit Encrypted Enterprise Gateway</span>
          </div>

          <p className="text-[10px] text-muted-foreground/80 leading-tight">
            By proceeding, you agree to our{" "}
            <a href="#" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
              Privacy Policy
            </a>.
          </p>
        </div>

      </DialogContent>
    </Dialog>
  );
}

export default GetStartedDialog;