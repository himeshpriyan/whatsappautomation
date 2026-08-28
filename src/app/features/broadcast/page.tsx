"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import InteractiveWhatsAppMockup from "@/components/home/InteractiveWhatsAppMockup";
import {
  Megaphone,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Filter,
  MousePointerClick,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function BroadcastFeaturePage() {
  const capabilities = [
    {
      icon: MousePointerClick,
      title: "Interactive CTA & Quick Reply Buttons",
      description: "Embed single-tap buttons that direct customers to your store checkout, customer service, or website.",
    },
    {
      icon: Filter,
      title: "Smart Audience Segmentation",
      description: "Filter contacts by custom attributes, past purchase history, engagement score, or Shopify tags.",
    },
    {
      icon: Zap,
      title: "Dynamic Variable Personalization",
      description: "Inject personalized fields like {{customer_name}}, {{discount_code}}, and {{cart_total}} in real time.",
    },
    {
      icon: ShieldCheck,
      title: "Meta Pre-Approved Template Manager",
      description: "Submit and manage WhatsApp message templates directly with instant status sync and error guidance.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <span>/</span>
          <span className="text-emerald-400 font-semibold">Broadcast Marketing</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<Megaphone className="w-3.5 h-3.5" />} pulse>
              WhatsApp Broadcast Marketing
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Broadcast Campaigns with{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                98% Open Rates
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Send personalized promotional campaigns, festival drops, back-in-stock alerts, and newsletter updates directly to opted-in customer WhatsApp chats with high deliverability via WhatsApp Cloud API.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">98%</div>
                <div className="text-xs text-slate-400 mt-1">Average Open Rate</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">5.4x</div>
                <div className="text-xs text-slate-400 mt-1">ROI vs Standard Email</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">45-60%</div>
                <div className="text-xs text-slate-400 mt-1">Button Click-Through</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Start 14-Day Free Trial
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule Live Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <InteractiveWhatsAppMockup initialTab="broadcast" />
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Engineered for Revenue</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Built for High-Converting Customer Outreach
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Every tool you need to draft, segment, schedule, and analyze bulk promotional broadcasts compliant with Meta Cloud API policies.
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

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-emerald-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">Instant Setup</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Launch Your First WhatsApp Broadcast?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Get started in under 5 minutes with 1,000 free API conversations and full template support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Create Account & Start Free
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Pricing Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
