"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Target,
  Sparkles,
  Zap,
  TrendingDown,
  UserCheck,
  Share2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function CTWAFeaturePage() {
  const capabilities = [
    {
      icon: UserCheck,
      title: "Zero-Friction Verified Lead Capture",
      description: "Capture verified WhatsApp phone numbers directly from Facebook & Instagram ad clicks without messy web forms.",
    },
    {
      icon: Zap,
      title: "Instant AI Greeting & Qualification",
      description: "Trigger automated conversational qualifiers immediately upon ad click to score intent and book calls in seconds.",
    },
    {
      icon: Share2,
      title: "Meta Pixel & CAPI Conversion Sync",
      description: "Feed WhatsApp conversion events back into Meta Ads Manager to optimize algorithm targeting and ROAS automatically.",
    },
    {
      icon: TrendingDown,
      title: "Up to 45% Lower Customer Acquisition Cost",
      description: "By removing slow landing page loads, convert mobile social traffic into conversational leads at higher velocity.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "Click-to-WhatsApp Ads (CTWA)" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<Target className="w-3.5 h-3.5" />} pulse>
              Meta Ads Automation
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Supercharge Meta Ads with{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                Click-to-WhatsApp (CTWA)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Route high-intent Facebook and Instagram ad traffic straight into an automated WhatsApp sales funnel. Convert clicks into verified prospects with zero drop-off.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Verified Mobile Numbers</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">-45%</div>
                <div className="text-xs text-slate-400 mt-1">Lower Cost-Per-Lead</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">3.8x</div>
                <div className="text-xs text-slate-400 mt-1">Higher Conversion Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Launch CTWA Ads Free
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule Ads Strategy Session
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs font-bold text-white">Meta Ad ➔ WhatsApp Funnel</span>
              </div>
              <Badge variant="emerald" className="text-[10px]">CAPI Connected</Badge>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>1. Instagram Sponsored Ad Click</span>
                  <span className="text-cyan-400">0s Latency</span>
                </div>
                <p className="text-white font-medium">User clicks &ldquo;Send Message&rdquo; button on Instagram Feed.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#005C4B]/40 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-emerald-300 text-[11px]">
                  <span>2. Instant Conversational Greeting</span>
                  <span className="text-[#25D366] font-bold">Auto-Trigger</span>
                </div>
                <p className="text-slate-200">Bot greets Alex, captures intent, and offers 15% first-time discount code.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>3. Conversion Event Sent to Meta</span>
                  <span className="text-emerald-400">Synced</span>
                </div>
                <p className="text-slate-300">Purchase event logged into Meta Pixel & CAPI for algorithmic ad optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Performance Marketing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Maximize Every Dollar of Your Ad Spend
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Eliminate friction, boost speed-to-lead, and achieve maximum return on ad spend (ROAS) on Meta platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0F172A] border border-white/10 hover:border-emerald-500/40 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cap.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-emerald-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">14-Day Free Trial</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Lower Your CAC with Click-to-WhatsApp?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Connect your Meta Ad Account and start qualifying leads automatically.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=demo" variant="outline" size="lg">
              Talk to Paid Ads Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
