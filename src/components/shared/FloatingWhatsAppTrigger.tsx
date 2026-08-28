"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles, CheckCheck } from "lucide-react";

export default function FloatingWhatsAppTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string; time: string }[]>([
    {
      sender: "bot",
      text: "👋 Hi there! Welcome to Zecsoft. How can we help automate your WhatsApp business growth today?",
      time: "Just now",
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userText = message;
    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMessages((prev) => [...prev, { sender: "user", text: userText, time: timeStr }]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "🚀 That sounds fantastic! You can start a 14-day free trial right now or book a live product demo. Would you like our specialist to reach out via WhatsApp?",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-[#111B21] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#005C4B] px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-black font-bold flex items-center justify-center text-sm shadow-md">
                  Z
                </div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full absolute bottom-0 right-0 border-2 border-[#005C4B]" />
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1.5">
                  Zecsoft AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
                  Online • Typically replies instantly
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#0B141A]/90 bg-[radial-gradient(#202c33_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="text-center my-1">
              <span className="text-[10px] bg-[#182229] text-slate-400 px-2.5 py-1 rounded-full">
                Encrypted via Official WhatsApp API
              </span>
            </div>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#005C4B] text-white rounded-tr-none"
                      : "bg-[#202C33] text-slate-100 rounded-tl-none border border-white/5"
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-[9px] mt-1 flex items-center justify-end gap-1 ${
                      msg.sender === "user" ? "text-emerald-200" : "text-slate-400"
                    }`}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-2.5 bg-[#202C33] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Zecsoft..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-[#111B21] border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#25D366]"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center hover:bg-[#008f6f] disabled:opacity-40 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Pill/Circle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-semibold px-4 py-3 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#25D366]/40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-black text-black" />
        <span className="text-sm font-bold tracking-tight hidden sm:inline">Chat with AI</span>
      </button>
    </div>
  );
}
