import React, { useRef, useEffect, useState } from "react";
import { 
  X, 
  ArrowUp, 
  Bot, 
  Sparkles, 
  CheckCheck
} from "lucide-react";

import { Card, CardHeader, CardContent, CardFooter } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";

const QUICK_PROMPTS = [
  "Scope an estimate",
  "Engineering stack",
  "Book consultation",
];

export default function Chatbot({ isOpen, setIsOpen }) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Welcome to TechNova. I'm your architectural assistant. How can we elevate your digital product today?",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
          text: "Transmission received. A senior technical lead has been notified. You can also request an architectural scope via our intake form.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 750);
  };

  const handleSend = (e) => {
    e?.preventDefault();
    sendMessage();
  };

  return (
    <aside aria-label="TechNova Client Assistant" className="fixed bottom-5 right-5 z-[1000]">
      {/* ================= Clean Floating Launcher Button ================= */}
      {!isOpen && (
        <div className="relative inline-flex">
          <button
            onClick={() => setIsOpen(true)}
            className="
              group relative flex items-center justify-center
              h-14 w-14 rounded-full
              bg-gradient-to-tr from-blue-600 via-primary to-indigo-500
              text-white
              shadow-[0_8px_30px_rgba(0,81,251,0.45)]
              hover:shadow-[0_12px_40px_rgba(0,81,251,0.65)]
              hover:scale-105 active:scale-95
              transition-all duration-300 ease-out
              border border-white/20
            "
            aria-label="Open support chat"
          >
            <Bot className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </button>

          {/* Clean Status Dot Positioned Perfectly on the Rim */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-background shadow-xs" />
          </span>
        </div>
      )}

      {/* ================= Floating Chat Window ================= */}
      {isOpen && (
        <Card
          className="
            w-[calc(100vw-2.5rem)] sm:w-[390px] h-[550px]
            flex flex-col
            rounded-[28px]
            border border-border/80 dark:border-white/[0.12]
            bg-background/95 dark:bg-[#070b14]/95
            backdrop-blur-3xl
            shadow-[0_25px_70px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.85)]
            overflow-hidden
            animate-in fade-in-0 zoom-in-95 duration-200
            relative
          "
        >
          {/* Top Hairline Specular Reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none z-20" />

          {/* ================= Header ================= */}
          <CardHeader className="px-5 py-4 border-b border-border/60 dark:border-white/[0.08] flex flex-row items-center justify-between space-y-0 shrink-0 bg-background/60 dark:bg-black/30 backdrop-blur-xl z-10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-b from-primary to-blue-700 text-white shadow-md shadow-primary/25 border border-white/20">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-foreground leading-tight">
                    TechNova Assistant
                  </span>
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online // Avg reply &lt; 1s
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                flex items-center justify-center
                w-8 h-8 rounded-xl
                border border-border/60 dark:border-white/10
                bg-muted/40 dark:bg-white/[0.04]
                text-muted-foreground hover:text-foreground
                hover:border-primary/40 transition-all duration-200
              "
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </CardHeader>

          {/* ================= Message Feed ================= */}
          <CardContent className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} text-left`}
                >
                  <div
                    className={`
                      max-w-[84%] px-4 py-2.5 text-xs sm:text-sm leading-relaxed
                      ${
                        isUser
                          ? "bg-gradient-to-r from-blue-600 via-primary to-indigo-600 text-white rounded-2xl rounded-br-xs shadow-md shadow-primary/20 font-medium"
                          : "bg-card/70 dark:bg-white/[0.04] text-foreground rounded-2xl rounded-bl-xs border border-border/70 dark:border-white/[0.08] backdrop-blur-md"
                      }
                    `}
                  >
                    {msg.text}
                  </div>

                  <div className="flex items-center gap-1 mt-1 px-1 text-[10px] font-mono text-muted-foreground/70">
                    <span>{msg.time}</span>
                    {isUser && <CheckCheck className="w-3 h-3 text-primary ml-0.5" />}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-bl-xs bg-card/70 dark:bg-white/[0.04] border border-border/60 dark:border-white/[0.08] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* ================= Quick Action Chips (With Clean Scroll & End Padding) ================= */}
          <div className="px-4 pb-2.5 flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="
                  whitespace-nowrap px-3 py-1.5 rounded-full
                  border border-border/70 dark:border-white/10
                  bg-muted/40 dark:bg-white/[0.04]
                  text-[11px] font-medium text-muted-foreground
                  hover:text-foreground hover:border-primary/50 hover:bg-muted/70
                  transition-all duration-200 shrink-0
                "
              >
                {prompt}
              </button>
            ))}
            {/* Invisible spacer ensuring the last chip is never clipped */}
            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>

          {/* ================= Input Dock ================= */}
          <CardFooter className="p-3 sm:p-4 border-t border-border/60 dark:border-white/[0.08] bg-background/70 dark:bg-black/40 backdrop-blur-xl shrink-0">
            <form
              onSubmit={handleSend}
              className="
                w-full flex items-center gap-2
                rounded-2xl border border-border/80 dark:border-white/10
                bg-muted/30 dark:bg-black/40
                px-3 py-1.5
                focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20
                transition-all duration-200
              "
            >
              <Input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about architecture, rates, timeline..."
                className="flex-1 border-0 shadow-none bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0 px-0 h-9"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="
                  flex items-center justify-center
                  h-8 w-8 rounded-xl
                  bg-gradient-to-r from-blue-600 via-primary to-indigo-600
                  text-white
                  disabled:opacity-40 disabled:cursor-not-allowed
                  shrink-0 shadow-sm
                  hover:opacity-90 active:scale-95
                  transition-all duration-200
                "
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
          </CardFooter>
        </Card>
      )}
    </aside>
  );
}