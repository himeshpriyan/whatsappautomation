"use client";

import React from "react";
import Link from "next/link";
import { FEATURE_HIGHLIGHTS } from "@/data/features";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import IconHelper from "@/components/shared/IconHelper";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  ShoppingBag,
  Megaphone,
  CreditCard,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function FeatureHighlightBlocks() {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#25D366]/5 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Core Platform Capabilities"
          title="Engineered to Scale Revenue & Automate Support on"
          highlightText="WhatsApp"
          subtitle="Everything you need to acquire leads, engage customers, broadcast promotions, and collect direct payments in one seamless unified platform."
        />

        <div className="space-y-24 sm:space-y-32">
          {FEATURE_HIGHLIGHTS.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.id}
                id={feature.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="emerald">{feature.badgeText}</Badge>
                    <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* 3 Sub-features list */}
                  <div className="space-y-4 pt-2">
                    {feature.subFeatures.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                          <IconHelper name={sub.icon} className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{sub.title}</h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      href={feature.ctaHref}
                      variant="primary"
                      size="md"
                      arrow
                      className="shadow-[0_0_20px_rgba(37,211,102,0.25)]"
                    >
                      {feature.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Graphic / Visual Card Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group">
                    {/* Glowing Backdrop */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#25D366]/20 to-[#06B6D4]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

                    <div className="relative rounded-2xl bg-[#0F172A] border border-white/15 p-6 shadow-2xl overflow-hidden">
                      {/* Top Header Card */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          <span className="text-xs text-slate-400 font-mono ml-2">
                            zechsoft.com{feature.ctaHref}
                          </span>
                        </div>
                        <Badge variant="cyan" icon={<Sparkles className="w-3 h-3" />}>
                          Interactive Preview (Illustrative)
                        </Badge>
                      </div>

                      {/* Visual UI Presentation based on block type */}
                      {feature.imageType === "broadcast" && (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0B1120] to-[#1E293B] border border-emerald-500/30">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-bold text-white flex items-center gap-2">
                                <Megaphone className="w-4 h-4 text-[#25D366]" /> Campaign: Festival VIP Drop 🚀
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                                Example Data
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                              <div className="p-2 bg-slate-900/80 rounded-lg border border-white/5">
                                <div className="text-[10px] text-slate-400">Total Sent</div>
                                <div className="text-base font-bold text-white">45,000</div>
                              </div>
                              <div className="p-2 bg-slate-900/80 rounded-lg border border-white/5">
                                <div className="text-[10px] text-slate-400">Read Rate</div>
                                <div className="text-base font-bold text-emerald-400">98.1%</div>
                              </div>
                              <div className="p-2 bg-slate-900/80 rounded-lg border border-white/5">
                                <div className="text-[10px] text-slate-400">Orders Placed</div>
                                <div className="text-base font-bold text-cyan-400">3,420</div>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-[#0B141A] rounded-xl border border-white/10 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Dynamic Variable Personalization (
                              <code className="text-emerald-400">&#123;&#123;name&#125;&#125;</code>,{" "}
                              <code className="text-emerald-400">&#123;&#123;discount&#125;&#125;</code>)
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Instant Click-Through Retargeting Funnel
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.imageType === "chatbot" && (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0B1120] to-[#1E293B] border border-cyan-500/30">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-bold text-white flex items-center gap-2">
                                <Bot className="w-4 h-4 text-cyan-400" /> AI Visual Canvas Workflow
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">
                                GPT-4o Connected
                              </span>
                            </div>

                            {/* Visual Nodes representation */}
                            <div className="flex flex-col gap-2 relative">
                              <div className="p-2.5 bg-slate-900 rounded-lg border border-emerald-500/40 text-xs flex items-center justify-between">
                                <span className="font-semibold text-emerald-300">Trigger: Inbound WhatsApp Inquiry</span>
                                <span className="text-[10px] text-slate-400">Step 1</span>
                              </div>
                              <div className="w-0.5 h-3 bg-emerald-500 mx-auto" />
                              <div className="p-2.5 bg-slate-900 rounded-lg border border-cyan-500/40 text-xs flex items-center justify-between">
                                <span className="font-semibold text-cyan-300">AI Logic: Query Product Knowledge Base</span>
                                <span className="text-[10px] text-slate-400">Step 2 (Auto)</span>
                              </div>
                              <div className="w-0.5 h-3 bg-cyan-500 mx-auto" />
                              <div className="p-2.5 bg-slate-900 rounded-lg border border-purple-500/40 text-xs flex items-center justify-between">
                                <span className="font-semibold text-purple-300">Action: Offer 1-Click Booking or Checkout</span>
                                <span className="text-[10px] text-slate-400">Step 3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.imageType === "payments" && (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0B1120] to-[#1E293B] border border-emerald-500/30">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-bold text-white flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-[#25D366]" /> WhatsApp Payments & UPI Gateway
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                                Instant Settlement
                              </span>
                            </div>

                            <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 space-y-2">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Average Checkout Time:</span>
                                <span className="font-bold text-emerald-400">22 Seconds</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Payment Gateway Fees:</span>
                                <span className="font-bold text-white">0% Platform Mark-up</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Supported Rails:</span>
                                <span className="font-bold text-cyan-400">WhatsApp Pay, UPI, Stripe, Razorpay</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
