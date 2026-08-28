"use client";

import React from "react";
import Badge from "@/components/shared/Badge";
import SectionHeader from "@/components/shared/SectionHeader";
import { Sparkles, UserPlus, PhoneCall, Rocket, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "1. Create Free Account",
      badge: "Instant Setup",
      description: "Sign up in 30 seconds with no credit card required. Unlock instant access to our automation studio.",
    },
    {
      step: "02",
      icon: PhoneCall,
      title: "2. Connect WhatsApp Cloud API",
      badge: "Official Meta API",
      description: "Link your official WhatsApp phone number or get a dedicated number configured in minutes.",
    },
    {
      step: "03",
      icon: Rocket,
      title: "3. Launch & Scale Conversions",
      badge: "Go Live",
      description: "Deploy AI chatbots, schedule broadcast campaigns, and accept payments with 98% open rates.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Frictionless Onboarding"
          title="Go Live with WhatsApp Automation in"
          highlightText="3 Simple Steps"
          subtitle="Start engaging your customers on their favorite messaging app in under 10 minutes."
        />

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="relative group p-8 rounded-3xl bg-[#0F172A]/70 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Header: Step Number and Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-emerald-400/30 group-hover:text-emerald-400 transition-colors font-mono">
                      {item.step}
                    </span>
                    <Badge variant="cyan" className="text-[10px]">
                      {item.badge}
                    </Badge>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-black transition-all duration-300 shadow-md mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-600 group-hover:text-emerald-400 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
