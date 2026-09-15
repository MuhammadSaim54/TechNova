import React, { useRef, useEffect, useState } from "react";
import {
  X,
  ArrowUp,
  CheckCheck,
  Cpu,
  Layers,
  Calendar,
  RotateCcw,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function TechNovaMark({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="url(#nova-grad-top)"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="url(#nova-grad-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />
      <circle cx="12" cy="7" r="1.5" fill="#38bdf8" />
      <defs>
        <linearGradient id="nova-grad-top" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0051fb" stopOpacity="0.8" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="nova-grad-stroke" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0051fb" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const QUICK_PROMPTS = [
  { label: "Scope & Pricing", detail: "Timeline & tier estimate", icon: Layers },
  { label: "Engineering Stack", detail: "React, Vite, Cloud native", icon: Cpu },
  { label: "Book Consultation", detail: "30-min strategy call", icon: Calendar },
];

export default function Chatbot({ isOpen, setIsOpen }) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Welcome to TechNova Core. I'm your digital architecture assistant. How can we elevate your digital product today?",
      time: "Just now",
    },
  ]);

  const scrollContainerRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isTyping]);

  const sendMessage = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thanks for reaching out! Our team specializes in high-performance web products, SaaS platforms, and enterprise solutions. Would you like to schedule an intake review or view our case studies?",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 600);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    sendMessage();
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Session refreshed. How can we assist your next build?",
        time: "Just now",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex items-end justify-end">
      {/* 1. Launcher Button: Hamesha apni jagah par lock rahega */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open support assistant"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
        transition={{ duration: 0.15 }}
        className="
          relative flex items-center justify-center
          h-14 w-14 rounded-2xl
          bg-card/90 dark:bg-[#070b14]/90 
          border border-border/80 dark:border-primary/40
          shadow-[0_10px_35px_rgba(0,81,251,0.25)] dark:shadow-[0_10px_35px_rgba(0,81,251,0.45)]
          hover:border-primary/60 dark:hover:border-cyan-400/60 
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-cyan-400/20 opacity-70 group-hover:opacity-100 transition-opacity" />
        <TechNovaMark className="h-7 w-7 text-primary dark:text-cyan-300" />

        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary border-2 border-background dark:border-[#070b14] shadow-[0_0_8px_#0051fb]" />
        </span>
      </motion.button>

      {/* 2. AnimatePresence sirf aur sirf Console Box ko handle karega */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-console"
            role="dialog"
            aria-modal="false"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right" }}
            className="
              absolute bottom-0 right-0
              w-[calc(100vw-3rem)] sm:w-[390px] h-[520px] max-h-[85vh]
              grid grid-rows-[auto_1fr_auto]
              rounded-[24px]
              border border-border/80 dark:border-white/[0.12]
              bg-background/95 dark:bg-[#070b14]
              backdrop-blur-2xl
              shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.85)]
              overflow-hidden text-foreground z-10
            "
          >
            {/* Top Laser Accent */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary dark:via-cyan-400 to-transparent pointer-events-none z-30" />

            {/* Row 1: Header */}
            <header className="px-5 py-3.5 border-b border-border/60 dark:border-white/[0.08] flex items-center justify-between bg-card/70 dark:bg-[#0a0f1d] relative z-20">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 dark:bg-gradient-to-br dark:from-primary/25 dark:via-blue-900/20 dark:to-transparent border border-primary/25 dark:border-cyan-400/40 shadow-[0_0_15px_rgba(0,81,251,0.2)] dark:shadow-[0_0_15px_rgba(0,81,251,0.3)]">
                  <TechNovaMark className="h-5 w-5 text-primary dark:text-cyan-300" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-card dark:ring-[#070b14]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold tracking-tight text-foreground dark:text-white/95">TechNova Copilot</span>
                    <span className="px-1.5 py-0.2 rounded-md bg-primary/10 dark:bg-primary/20 text-[9px] font-mono text-primary dark:text-cyan-300 border border-primary/30 dark:border-primary/40 font-medium">v2.0</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground dark:text-white/45 flex items-center gap-1 mt-0.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Sync // Ultra-Low Latency
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title="Restart chat session"
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:text-white/45 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat dialog"
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:text-white/45 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            {/* Row 2: Messages Scroll Area */}
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto px-4 py-4 space-y-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-background/50 dark:bg-[#070b14]"
            >
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    {!isUser && (
                      <div className="flex items-center gap-1.5 mb-1 px-1">
                        <Sparkles className="w-2.5 h-2.5 text-primary dark:text-cyan-400" />
                        <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/80 dark:text-white/40">Architectural Core</span>
                      </div>
                    )}

                    <div
                      className={`
                        max-w-[85%] px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed
                        ${isUser
                          ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm shadow-[0_4px_14px_rgba(0,81,251,0.25)] font-medium text-left"
                          : "bg-card dark:bg-[#0d1322] text-card-foreground dark:text-white/90 rounded-2xl rounded-tl-sm border border-border/70 dark:border-white/[0.08] shadow-sm text-left"
                        }
                      `}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground/70 dark:text-white/35 mt-1 px-1 flex items-center gap-0.5">
                      {msg.time} {isUser && <CheckCheck className="inline h-2.5 w-2.5 text-primary dark:text-cyan-400" />}
                    </span>
                  </div>
                );
              })}

              {/* Quick Inquiries */}
              {messages.length === 1 && !isTyping && (
                <div className="pt-2 pb-1 space-y-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/80 dark:text-white/40 px-1">Quick Inquiries</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_PROMPTS.map((prompt) => {
                      const Icon = prompt.icon;
                      return (
                        <button
                          key={prompt.label}
                          type="button"
                          onClick={() => sendMessage(prompt.label)}
                          className="
                            group flex items-center justify-between p-2.5 rounded-xl
                            bg-muted/40 hover:bg-muted/80 dark:bg-white/[0.02] dark:hover:bg-white/[0.06]
                            border border-border/60 hover:border-primary/40 dark:border-white/[0.06]
                            text-left transition-all duration-150
                          "
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-background dark:bg-white/[0.04] text-muted-foreground group-hover:text-primary dark:group-hover:text-cyan-300 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-foreground dark:text-white/85 group-hover:text-primary dark:group-hover:text-white">{prompt.label}</div>
                              <div className="text-[10px] text-muted-foreground dark:text-white/40">{prompt.detail}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-card dark:bg-white/[0.04] border border-border/70 dark:border-white/[0.08] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 animate-pulse [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 animate-pulse [animation-delay:300ms]" />
                </div>
              )}
            </div>

            {/* Row 3: Bottom Dock */}
            <footer className="p-3 border-t border-border/60 dark:border-white/[0.08] bg-card/70 dark:bg-[#0a0f1d] relative z-20 m-0">
              <form
                onSubmit={handleSend}
                className="
                  flex items-center gap-2
                  rounded-xl border border-border/80 dark:border-white/10
                  bg-background dark:bg-[#050811] px-3 py-1.5
                  focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/40
                  transition-all
                "
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about architecture, rates..."
                  className="flex-1 bg-transparent text-xs text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/30 focus:outline-none h-8"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="
                    flex items-center justify-center
                    h-7 w-7 rounded-lg
                    bg-primary text-primary-foreground
                    disabled:opacity-20 disabled:cursor-not-allowed
                    hover:scale-105 active:scale-95 transition-transform
                  "
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}