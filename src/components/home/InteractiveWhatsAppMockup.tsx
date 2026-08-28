"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCheck,
  ShoppingBag,
  Bot,
  Zap,
  ShieldCheck,
  CreditCard,
  Percent,
} from "lucide-react";
import Badge from "@/components/shared/Badge";

interface InteractiveWhatsAppMockupProps {
  initialTab?: "broadcast" | "chatbot" | "payments";
}

export default function InteractiveWhatsAppMockup({
  initialTab = "broadcast",
}: InteractiveWhatsAppMockupProps) {
  const [activeTab, setActiveTab] = useState<"broadcast" | "chatbot" | "payments">(initialTab);
  const [interactiveStep, setInteractiveStep] = useState<number>(0);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative Glow behind mockup */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#25D366]/30 to-[#06B6D4]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      {/* Mockup Frame */}
      <div className="relative rounded-2xl bg-[#0C1317] border border-white/20 shadow-2xl overflow-hidden text-slate-100">
        {/* Top Control Bar with Tabs */}
        <div className="bg-[#1F2C34] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
          {/* WhatsApp Header info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-black font-bold flex items-center justify-center text-xs shadow-md">
              Z
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                Zechsoft Storefront
                <span className="w-3.5 h-3.5 rounded-full bg-[#25D366] text-black flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
              </div>
              <div className="text-[10px] text-emerald-400 font-medium">Official Business Account</div>
            </div>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#111B21] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => {
                setActiveTab("broadcast");
                setInteractiveStep(0);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                activeTab === "broadcast"
                  ? "bg-[#25D366] text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Broadcast
            </button>
            <button
              onClick={() => {
                setActiveTab("chatbot");
                setInteractiveStep(0);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                activeTab === "chatbot"
                  ? "bg-[#25D366] text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Bot
            </button>
            <button
              onClick={() => {
                setActiveTab("payments");
                setInteractiveStep(0);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                activeTab === "payments"
                  ? "bg-[#25D366] text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Commerce
            </button>
          </div>
        </div>

        {/* Chat Screen Wallpaper Container */}
        <div className="p-4 sm:p-5 min-h-[360px] bg-[#0B141A] bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between">
          {/* TAB 1: BROADCAST CAMPAIGN PREVIEW */}
          {activeTab === "broadcast" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-center">
                <span className="text-[10px] bg-[#182229] text-slate-400 px-3 py-0.5 rounded-full border border-white/5">
                  SAMPLE BROADCAST (ILLUSTRATIVE PREVIEW)
                </span>
              </div>

              {/* Broadcast Card Message */}
              <div className="max-w-[92%] sm:max-w-[85%] bg-[#005C4B] rounded-2xl rounded-tr-none p-3.5 shadow-lg border border-emerald-500/20 ml-auto space-y-2.5">
                {/* Simulated Campaign Banner Image */}
                <div className="w-full h-32 rounded-xl bg-gradient-to-tr from-emerald-950 to-teal-800 border border-emerald-500/30 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Percent className="w-20 h-20 text-emerald-300" />
                  </div>
                  <Badge variant="gold" className="w-fit">
                    FLASH SALE • 40% OFF
                  </Badge>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">VIP Summer Drop is Live 🔥</h4>
                    <p className="text-[10px] text-emerald-100">Use code: SUMMER40 at checkout</p>
                  </div>
                </div>

                <div className="text-xs text-emerald-50 leading-relaxed">
                  <p>
                    Hey <strong>Alex</strong>! Your favorite items are back in stock with an exclusive 40% VIP discount valid for the next 4 hours only.
                  </p>
                </div>

                {/* Clickable Quick Reply CTAs */}
                <div className="space-y-1.5 pt-1">
                  <button
                    onClick={() => setInteractiveStep(1)}
                    className="w-full bg-[#111B21]/90 hover:bg-[#111B21] text-[#25D366] font-bold text-xs py-2 rounded-xl border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Claim 40% Discount & Shop
                  </button>
                  <button
                    onClick={() => setInteractiveStep(2)}
                    className="w-full bg-[#111B21]/60 hover:bg-[#111B21] text-slate-300 text-xs py-2 rounded-xl border border-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    💬 Ask Support on WhatsApp
                  </button>
                </div>

                <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-200">
                  <span>10:45 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                </div>
              </div>

              {interactiveStep === 1 && (
                <div className="max-w-[85%] bg-[#202C33] rounded-2xl rounded-tl-none p-3 shadow-md border border-white/5 animate-in slide-in-from-bottom-2">
                  <p className="text-xs text-slate-100">
                    🎉 <strong>Discount applied!</strong> Redirecting to checkout. Open rate for this broadcast template is up to <span className="text-[#25D366] font-bold">98%</span>.
                  </p>
                </div>
              )}

              {interactiveStep === 2 && (
                <div className="max-w-[85%] bg-[#202C33] rounded-2xl rounded-tl-none p-3 shadow-md border border-white/5 animate-in slide-in-from-bottom-2">
                  <p className="text-xs text-slate-100">
                    💬 <strong>Live Support Connected:</strong> &ldquo;Hi Alex! How can we assist you with today&apos;s VIP drop?&rdquo;
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: AI CHATBOT LIVE PREVIEW */}
          {activeTab === "chatbot" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-center">
                <span className="text-[10px] bg-[#182229] text-slate-400 px-3 py-0.5 rounded-full border border-white/5">
                  SAMPLE AI WORKFLOW (ILLUSTRATIVE PREVIEW)
                </span>
              </div>

              {/* User message */}
              <div className="max-w-[75%] bg-[#005C4B] rounded-2xl rounded-tr-none p-3 ml-auto text-xs text-white shadow">
                <p>Do you ship internationally to Canada, and what are the delivery charges?</p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-200 mt-1">
                  <span>11:02 AM</span>
                  <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                </div>
              </div>

              {/* AI response */}
              <div className="max-w-[85%] bg-[#202C33] rounded-2xl rounded-tl-none p-3 text-xs text-slate-100 shadow border border-white/10 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                  <Bot className="w-3.5 h-3.5" /> AI Automated Response
                </div>
                <p className="leading-relaxed">
                  Yes! We ship to all Canadian provinces via DHL Express 🇨🇦. Orders over $100 qualify for <strong>FREE express shipping</strong> (3-5 business days).
                </p>

                <div className="pt-1 flex gap-2">
                  <button
                    onClick={() => setInteractiveStep(1)}
                    className="flex-1 bg-[#111B21] hover:bg-slate-900 text-[#25D366] text-[11px] py-1.5 rounded-lg border border-emerald-500/30 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    📦 Track an Order
                  </button>
                  <button
                    onClick={() => setInteractiveStep(2)}
                    className="flex-1 bg-[#111B21] hover:bg-slate-900 text-slate-300 text-[11px] py-1.5 rounded-lg border border-white/10 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    👤 Live Agent
                  </button>
                </div>
                <div className="text-[9px] text-slate-400 text-right">11:02 AM</div>
              </div>

              {interactiveStep === 1 && (
                <div className="max-w-[80%] bg-[#202C33] rounded-2xl rounded-tl-none p-2.5 text-xs text-emerald-300 border border-emerald-500/20 animate-in slide-in-from-bottom-2">
                  ✨ Enter your 6-digit Order ID to get real-time GPS courier status!
                </div>
              )}

              {interactiveStep === 2 && (
                <div className="max-w-[80%] bg-[#202C33] rounded-2xl rounded-tl-none p-2.5 text-xs text-emerald-300 border border-emerald-500/20 animate-in slide-in-from-bottom-2">
                  👤 <strong>Agent Assigned:</strong> Sarah from customer support is reviewing your conversation history.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: COMMERCE & PAYMENTS PREVIEW */}
          {activeTab === "payments" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-center">
                <span className="text-[10px] bg-[#182229] text-slate-400 px-3 py-0.5 rounded-full border border-white/5">
                  SAMPLE COMMERCE & 1-CLICK PAY (ILLUSTRATIVE PREVIEW)
                </span>
              </div>

              <div className="max-w-[85%] bg-[#202C33] rounded-2xl rounded-tr-none p-3.5 shadow-lg border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs pb-1 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-emerald-400" /> Order Summary #8410
                  </span>
                  <span className="text-emerald-400 font-semibold">$89.00</span>
                </div>

                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>1x Organic Glow Elixir (50ml)</span>
                    <span className="text-white font-medium">$59.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x Vitamin C Radiance Mist</span>
                    <span className="text-white font-medium">$30.00</span>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setInteractiveStep(1)}
                    className="w-full bg-[#00A884] hover:bg-[#008f6f] text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" /> Pay $89.00 via WhatsApp Pay / UPI
                  </button>
                </div>
              </div>

              {interactiveStep === 1 && (
                <div className="max-w-[85%] bg-[#005C4B] rounded-2xl p-3 text-xs text-white border border-emerald-400/40 ml-auto animate-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-2 text-emerald-200 font-bold mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#25D366]" /> Payment Confirmed!
                  </div>
                  <p className="text-[11px]">Invoice #ZECH-9041 generated & tracking link sent automatically.</p>
                </div>
              )}
            </div>
          )}

          {/* Chat Simulator Input Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
            <div className="flex-1 bg-[#202C33] rounded-full px-3.5 py-1.5 text-xs text-slate-400 flex items-center justify-between">
              <span>Type a message...</span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <Zap className="w-3 h-3" /> Auto-Sync
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#00A884] text-white flex items-center justify-center shrink-0">
              <Send className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Bottom Banner - Relabeled for compliance */}
        <div className="bg-[#111B21] px-4 py-2.5 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-white/10">
          {/* Compliance fix: removed unverified claim, see audit notes */}
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" /> WhatsApp Cloud API Integration
          </span>
          {/* Compliance fix: relabeled demo to preview */}
          <span className="text-slate-400 font-medium">
            Interactive Product Preview
          </span>
        </div>
      </div>

      {/* Caption under widget */}
      <p className="text-[11px] text-center text-slate-400 mt-2">
        Preview only — not connected to live AI
      </p>
    </div>
  );
}
