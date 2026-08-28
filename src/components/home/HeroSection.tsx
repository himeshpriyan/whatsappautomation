"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Play, ArrowRight, Star, Zap, CheckCircle2 } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import InteractiveWhatsAppMockup from "./InteractiveWhatsAppMockup";
import DemoModal from "@/components/shared/DemoModal";

export default function HeroSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Grids & Radial Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill / Kicker */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />} pulse>
                Official Meta Business Tech Partner
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-white/10">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9/5</span>
                <span>(1,200+ Businesses)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Grow Your Business with the Power of{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent underline decoration-[#25D366]/30 decoration-wavy">
                WhatsApp Automation
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              The all-in-one WhatsApp Business API platform. Send high-converting broadcasts with{" "}
              <strong className="text-white">98% open rates</strong>, deploy intelligent GPT-4 AI chatbots, collaborate in a multi-agent inbox, and collect direct in-chat payments.
            </p>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Zero Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Free Green Tick Application</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>5-Minute Meta API Setup</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                onClick={() => setDemoModalOpen(true)}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-[0_0_30px_rgba(37,211,102,0.45)]"
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Start 14-Day Free Trial
              </Button>

              <Button
                onClick={() => setDemoModalOpen(true)}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<Play className="w-4 h-4 text-[#25D366] fill-[#25D366]" />}
              >
                Book a Live Demo
              </Button>
            </div>

            {/* Subtext under CTAs */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> 1,000 Free Monthly Conversations
              </span>
              <span>•</span>
              <span>No Credit Card Required</span>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Preview Mockup */}
          <div className="lg:col-span-5 relative">
            <InteractiveWhatsAppMockup />
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
