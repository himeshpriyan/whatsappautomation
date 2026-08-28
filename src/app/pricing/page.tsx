"use client";

import React, { useState } from "react";
import { PRICING_PLANS, CONVERSATION_RATES } from "@/data/pricing";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import DemoModal from "@/components/shared/DemoModal";
import FaqAccordion from "@/components/home/FaqAccordion";
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Calculator,
} from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  // Interactive ROI & Message Cost Calculator
  const [calcContacts, setCalcContacts] = useState(10000);
  const [calcBroadcastsPerMonth, setCalcBroadcastsPerMonth] = useState(4);

  const totalMonthlyMessages = calcContacts * calcBroadcastsPerMonth;
  const estimatedRevenueLift = Math.round(totalMonthlyMessages * 0.03 * 45); // 3% conversion * $45 avg order

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start Free, Scale as You Grow with{" "}
            <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Zero Hidden Fees
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Enjoy 14 days of free unlimited testing. Choose the plan that fits your growth stage, with official Meta Cloud API pass-through rates.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-[#0F172A] border border-white/10 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? "bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-black font-extrabold uppercase tracking-wide">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0F172A] border-2 border-[#25D366] shadow-[0_0_40px_rgba(37,211,102,0.2)] lg:-translate-y-3"
                    : "bg-[#0F172A]/70 border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-extrabold text-xs px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-black" /> Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <Badge variant={plan.popular ? "emerald" : "slate"}>
                      {plan.userSeats}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white">${price}</span>
                      <span className="text-slate-400 text-sm font-medium">/ month</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold mt-1">
                      {isAnnual ? "Billed annually ($" + price * 12 + "/yr)" : "Billed monthly"}
                    </div>
                    <div className="mt-3 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 font-medium">
                      🎁 {plan.freeCredits}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2">
                        {plan.notIncluded.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                            <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-3 h-3" />
                            </div>
                            <span className="line-through">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button Wired */}
                <div>
                  <Button
                    href={plan.ctaHref}
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full shadow-md"
                  >
                    {plan.ctaText}
                  </Button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    14-day trial • No credit card needed
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI & Campaign Revenue Calculator Widget */}
        <div className="mb-24 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#0A1120] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="cyan" icon={<Calculator className="w-3.5 h-3.5" />} className="mb-2">
              Interactive ROI Estimator
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Estimate Your Potential WhatsApp Revenue Growth
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              See what happens when you switch from standard email open rates to WhatsApp engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-200 mb-2">
                  <span>Number of Customer Contacts:</span>
                  <span className="text-[#25D366] font-bold text-base">
                    {calcContacts.toLocaleString()} Contacts
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={calcContacts}
                  onChange={(e) => setCalcContacts(Number(e.target.value))}
                  className="w-full accent-[#25D366] bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-200 mb-2">
                  <span>Broadcast Campaigns per Month:</span>
                  <span className="text-[#25D366] font-bold text-base">
                    {calcBroadcastsPerMonth} Campaigns / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={calcBroadcastsPerMonth}
                  onChange={(e) => setCalcBroadcastsPerMonth(Number(e.target.value))}
                  className="w-full accent-[#25D366] bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>Total Projected Monthly Broadcasts:</span>
                  <span className="font-bold text-white">{totalMonthlyMessages.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Message Views (Up to 98% Open Rate):</span>
                  <span className="font-bold text-emerald-400">
                    {Math.round(totalMonthlyMessages * 0.98).toLocaleString()} Views
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#070B14] p-6 rounded-2xl border border-emerald-500/40 text-center space-y-4">
              <div className="text-xs text-slate-400 uppercase font-semibold">
                Estimated Monthly Sales Lift
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white bg-gradient-to-r from-[#25D366] to-[#06B6D4] bg-clip-text text-transparent">
                ${estimatedRevenueLift.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Illustrative estimate based on typical 3% purchase conversion at $45 basket size.
              </p>
              {/* Item 3 fix: Renamed from "Unlock This Revenue Now" to "Start 14-Day Free Trial" */}
              <Button
                href="/signup"
                variant="primary"
                size="md"
                className="w-full"
              >
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* WhatsApp Official Conversation Pricing Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Official WhatsApp Cloud API Rates
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Standard WhatsApp Conversation Category Rates
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Meta charges for 24-hour conversation sessions. Every business gets 1,000 free Service conversations every month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONVERSATION_RATES.map((rate) => (
              <div
                key={rate.category}
                className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <h3 className="text-base font-bold text-white mb-1">{rate.category}</h3>
                <div className="text-lg font-extrabold text-[#25D366] mb-2">{rate.rateUSD}</div>
                <div className="text-xs text-slate-400 mb-3">{rate.rateINR}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{rate.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FaqAccordion />
      </div>

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
