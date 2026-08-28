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

import Breadcrumb from "@/components/shared/Breadcrumb";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Pricing & Plans" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Start Free, Scale as You Grow with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Zero Hidden Fees
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Enjoy 14 days of free unlimited testing. Choose the plan that fits your growth stage, with direct Meta Cloud API pass-through rates.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-[#25D366] text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? "bg-[#25D366] text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-white font-extrabold uppercase tracking-wide">
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
                    ? "bg-white border-2 border-emerald-500 shadow-xl lg:-translate-y-3 ring-4 ring-emerald-500/10"
                    : "bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#25D366] text-slate-950 font-black text-xs px-4 py-1.5 rounded-full shadow-md tracking-wide uppercase flex items-center gap-1.5 border border-emerald-600/30">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" /> Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <Badge variant={plan.popular ? "emerald" : "slate"}>
                      {plan.userSeats}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-500 min-h-[36px] mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900">${price}</span>
                      <span className="text-slate-500 text-sm font-medium">/ month</span>
                    </div>
                    <div className="text-xs text-emerald-700 font-semibold mt-1">
                      {isAnnual ? "Billed annually ($" + price * 12 + "/yr)" : "Billed monthly"}
                    </div>
                    <div className="mt-3 p-2 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium">
                      🎁 {plan.freeCredits}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2">
                        {plan.notIncluded.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
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
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full shadow-sm"
                  >
                    {plan.ctaText}
                  </Button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    14-day trial • No credit card needed
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI & Campaign Revenue Calculator Widget */}
        <div className="mb-24 rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="cyan" icon={<Calculator className="w-3.5 h-3.5" />} className="mb-2">
              Interactive ROI Estimator
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Estimate Your Potential WhatsApp Revenue Growth
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              See what happens when you switch from standard email open rates to WhatsApp engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-800 mb-2">
                  <span>Number of Customer Contacts:</span>
                  <span className="text-emerald-700 font-bold text-base">
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
                  className="w-full accent-[#25D366] bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-800 mb-2">
                  <span>Broadcast Campaigns per Month:</span>
                  <span className="text-emerald-700 font-bold text-base">
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
                  className="w-full accent-[#25D366] bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 shadow-xs">
                <div className="flex justify-between">
                  <span>Total Projected Monthly Broadcasts:</span>
                  <span className="font-bold text-slate-900">{totalMonthlyMessages.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Message Views (Up to 98% Open Rate):</span>
                  <span className="font-bold text-emerald-700">
                    {Math.round(totalMonthlyMessages * 0.98).toLocaleString()} Views
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-slate-200 text-center space-y-4 shadow-md">
              <div className="text-xs text-slate-500 uppercase font-semibold">
                Estimated Monthly Sales Lift
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ${estimatedRevenueLift.toLocaleString()}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Illustrative estimate based on typical 3% purchase conversion at $45 basket size.
              </p>
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
              WhatsApp Cloud API Standard Rates
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Standard WhatsApp Conversation Category Rates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Meta charges for 24-hour conversation sessions. Every business gets 1,000 free Service conversations every month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONVERSATION_RATES.map((rate) => (
              <div
                key={rate.category}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-colors shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 mb-1">{rate.category}</h3>
                <div className="text-lg font-extrabold text-emerald-700 mb-2">{rate.rateUSD}</div>
                <div className="text-xs text-slate-500 mb-3">{rate.rateINR}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{rate.description}</p>
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
