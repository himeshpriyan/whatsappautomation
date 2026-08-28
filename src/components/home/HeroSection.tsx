"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Play, Star, Zap, CheckCircle2 } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import InteractiveWhatsAppMockup from "./InteractiveWhatsAppMockup";
import DemoModal from "@/components/shared/DemoModal";

export default function HeroSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Grids & Radial Accents for Light Theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill / Kicker */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />} pulse>
                Built for WhatsApp Business API
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">4.9/5</span>
                <span className="text-slate-500">Customer Satisfaction</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Grow Your Business with the Power of{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                WhatsApp Automation
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              The all-in-one WhatsApp Business API platform. Send high-converting broadcasts with{" "}
              <strong className="text-slate-900 font-semibold">98% open rates</strong>, deploy intelligent GPT-4 AI chatbots, collaborate in a multi-agent inbox, and collect direct in-chat payments.
            </p>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fast-track Meta API Setup</span>
              </div>
            </div>

            {/* Dual CTAs - Wired to real destinations */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                href="/signup"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-md"
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Start 14-Day Free Trial
              </Button>

              <Button
                href="/contact?subject=demo"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />}
              >
                Book a Live Demo
              </Button>
            </div>

            {/* Subtext under CTAs */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Zap className="w-3.5 h-3.5 text-emerald-600" /> 1,000 Free Monthly Conversations
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
