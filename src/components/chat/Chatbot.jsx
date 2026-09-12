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

  // Scoped scroll: prevents the entire widget dialog from shifting up or down
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
    <aside aria-label="TechNova Assistant" className="fixed bottom-6 right-6 z-[1000]">
      {/* Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open support assistant"
          className="
            group relative flex items-center justify-center
            h-14 w-14 rounded-2xl
            bg-[#070b14]/90 border border-primary/40
            shadow-[0_10px_35px_rgba(0,81,251,0.45)]
            hover:border-cyan-400/60 hover:shadow-[0_12px_45px_rgba(0,81,251,0.65)]
            hover:-translate-y-0.5 active:translate-y-0
            backdrop-blur-xl transition-all duration-300
          "
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-cyan-400/20 opacity-80 group-hover:opacity-100 transition-opacity" />
          <TechNovaMark className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 text-cyan-300" />
          
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary border-2 border-[#070b14] shadow-[0_0_8px_#0051fb]" />
          </span>
        </button>
      )}

      {/* Main Console Box (Grid Layout) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          className="
            w-[calc(100vw-2.5rem)] sm:w-[390px] h-[520px] max-h-[85vh]
            grid grid-rows-[auto_1fr_auto]
            rounded-[24px]
            border border-white/10 dark:border-white/[0.12]
            bg-[#070b14]
            shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)]
            overflow-hidden
            animate-in fade-in-0 zoom-in-95 duration-200
            relative text-white
          "
        >
          {/* Top Laser Accent */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-30" />

          {/* Row 1: Fixed Header */}
          <header className="px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between bg-[#0a0f1d] relative z-20">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/25 via-blue-900/20 to-transparent border border-cyan-400/40 shadow-[0_0_15px_rgba(0,81,251,0.3)]">
                <TechNovaMark className="h-5 w-5 text-cyan-300" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070b14]" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold tracking-tight text-white/95">TechNova Copilot</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-primary/20 text-[9px] font-mono text-cyan-300 border border-primary/40 font-medium">v2.0</span>
                </div>
                <p className="text-[10px] text-white/45 flex items-center gap-1 mt-0.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync // Ultra-Low Latency
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Restart chat session"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat dialog"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* Row 2: Strictly Confined Scroll Area */}
          <div 
            ref={scrollContainerRef}
            className="overflow-y-auto px-4 py-4 space-y-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#070b14]"
          >
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-in fade-in duration-200`}
                >
                  {!isUser && (
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                      <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Architectural Core</span>
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[85%] px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed
                      ${
                        isUser
                          ? "bg-gradient-to-r from-blue-600 via-primary to-indigo-600 text-white rounded-2xl rounded-tr-sm shadow-[0_4px_18px_rgba(0,81,251,0.35)] border border-white/20 font-medium text-left"
                          : "bg-[#0d1322] text-white/90 rounded-2xl rounded-tl-sm border border-white/[0.08] shadow-sm text-left"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-mono text-white/35 mt-1 px-1 flex items-center gap-0.5">
                    {msg.time} {isUser && <CheckCheck className="inline h-2.5 w-2.5 text-cyan-400" />}
                  </span>
                </div>
              );
            })}

            {/* Quick Inquiries (Shown on fresh load) */}
            {messages.length === 1 && !isTyping && (
              <div className="pt-2 pb-1 space-y-1.5 animate-in fade-in duration-300">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 px-1">Quick Inquiries</span>
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
                          bg-white/[0.02] hover:bg-white/[0.06]
                          border border-white/[0.06] hover:border-primary/40
                          text-left transition-all duration-150
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-white/[0.04] text-white/60 group-hover:text-cyan-300 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white/85 group-hover:text-white">{prompt.label}</div>
                            <div className="text-[10px] text-white/40">{prompt.detail}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {/* Row 3: Absolute Bottom-Anchored Dock */}
          <footer className="p-3 border-t border-white/[0.08] bg-[#0a0f1d] relative z-20 m-0">
            <form
              onSubmit={handleSend}
              className="
                flex items-center gap-2
                rounded-xl border border-white/10
                bg-[#050811] px-3 py-1.5
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
                className="flex-1 bg-transparent text-xs text-white placeholder:text-white/30 focus:outline-none h-8"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="
                  flex items-center justify-center
                  h-7 w-7 rounded-lg
                  bg-gradient-to-r from-blue-600 to-cyan-500 text-white
                  disabled:opacity-20 disabled:cursor-not-allowed
                  hover:scale-105 active:scale-95 transition-transform
                "
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </form>
          </footer>
        </div>
      )}
    </aside>
  );
}