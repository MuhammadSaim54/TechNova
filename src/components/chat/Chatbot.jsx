import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, X, ArrowUp, Bot } from "lucide-react";
// Direct Shadcn imports using proper alias
import { Button } from "@/src/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";

export default function Chatbot({ isOpen, setIsOpen }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! You're speaking with TechNova Assistant. I'm ready to assist you.",
      time: "Just now",
    },
    {
      id: 2,
      sender: "bot",
      text: "How can I help you today?",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated assistant reply (V1 UI preview)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thank you for reaching out! Our team has received your message.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 600);
  };

  return (
    <aside
      aria-label="Support Chat"
      className=" right-4 fixed bottom-5 z-1000"
    >
      {/* Floating Trigger Button: TechNova Brand Primary */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-primary/20"
          aria-label="Open chat"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Floating Chat Container */}
      {isOpen && (
        <Card className="w-[calc(100vw-2.5rem)] sm:w-[380px] h-[530px] flex flex-col shadow-2xl rounded-3xl border border-border bg-card overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <CardHeader className="p-4 border-b border-border flex flex-row items-center justify-between space-y-0 shrink-0 bg-background/50">
            <div className="flex items-center gap-2.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground -ml-1"
                onClick={() => setIsOpen(false)}
                aria-label="Back"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="h-9 w-9 rounded-xl bg-accent flex items-center justify-center border border-border/40">
                <Bot className="h-5 w-5 text-primary" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-foreground leading-none">TechNova Bot</span>
                <span className="text-xs text-muted-foreground mt-1">The team can also help</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          {/* Messages Feed */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-card">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-2.5 text-sm leading-relaxed ${isUser
                        ? "bg-primary text-primary-foreground rounded-2xl rounded-br-xs font-medium shadow-xs"
                        : "bg-muted text-foreground rounded-2xl rounded-bl-xs border border-border/40"
                      }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-1 px-1">
                    {msg.sender === "bot" ? `TechNova • ${msg.time}` : msg.time}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Footer Input Bar */}
          <CardFooter className="p-3.5 border-t border-border bg-background/50 shrink-0">
            <form
              onSubmit={handleSend}
              className="w-full flex items-center gap-2 rounded-2xl border border-input bg-muted/40 px-3 py-1.5 focus-within:ring-2 focus-within:ring-ring/40 focus-within:border-primary transition-all"
            >
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message..."
                className="flex-1 border-0 shadow-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 px-0 h-9"
                autoFocus
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="h-8 w-8 rounded-full bg-primary text-primary-foreground disabled:opacity-40 flex items-center justify-center shrink-0 hover:bg-primary/90 transition-colors cursor-pointer"
                aria-label="Send"
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