"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import DemoModal from "@/components/shared/DemoModal";

export default function SecondaryCtaBanner() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80 border border-emerald-200 p-8 sm:p-12 lg:p-16 shadow-xl text-center overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />} pulse>
              Zero Commitment • Cancel Anytime
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Turn WhatsApp into Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                #1 Revenue Channel?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Join brands growing faster with automated WhatsApp broadcasts, AI chatbots, and in-chat checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                href="/signup"
                variant="primary"
                size="xl"
                className="w-full sm:w-auto shadow-md"
                rightIcon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial for 14 Days
              </Button>

              <Button
                href="/contact?subject=demo"
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto"
              >
                Schedule VIP Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-700 pt-4 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1,000 Free API Messages
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fast Assisted Onboarding
              </span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
