"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import DemoModal from "@/components/shared/DemoModal";

export default function SecondaryCtaBanner() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(37,211,102,0.15)] text-center overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#25D366]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#06B6D4]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />} pulse>
              Zero Commitment • Cancel Anytime
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Turn WhatsApp into Your{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                #1 Revenue Channel?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join 1,200+ brands growing faster with automated WhatsApp broadcasts, AI chatbots, and 1-click in-chat checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => setDemoModalOpen(true)}
                variant="primary"
                size="xl"
                className="w-full sm:w-auto shadow-[0_0_35px_rgba(37,211,102,0.6)]"
                rightIcon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial for 14 Days
              </Button>

              <Button
                onClick={() => setDemoModalOpen(true)}
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto"
              >
                Schedule VIP Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> 1,000 Free API Messages
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> 5-Min Assisted Onboarding
              </span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </section>
  );
}
