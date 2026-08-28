"use client";

import React, { useState } from "react";
import { INDUSTRY_USE_CASES } from "@/data/industries";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import DemoModal from "@/components/shared/DemoModal";
import IconHelper from "@/components/shared/IconHelper";
import {
  Sparkles,
  ShieldCheck,
  Info,
} from "lucide-react";

export default function IndustriesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("ecommerce");

  const current =
    INDUSTRY_USE_CASES.find((item) => item.id === selectedIndustry) || INDUSTRY_USE_CASES[0];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Tailored Industry Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WhatsApp Growth Playbooks Built for{" "}
            <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Your Industry
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See how modern companies in your vertical deploy automated WhatsApp broadcast templates, AI bots, and workflows.
          </p>
        </div>

        {/* Illustrative Use Cases Disclaimer Badge */}
        <div className="flex items-center justify-center gap-2 mb-10 -mt-6">
          <Badge variant="slate" icon={<Info className="w-3 h-3 text-cyan-400" />}>
            Illustrative Industry Playbooks & Sample Templates
          </Badge>
        </div>

        {/* Industry Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16 max-w-5xl mx-auto">
          {INDUSTRY_USE_CASES.map((item) => {
            const isSelected = selectedIndustry === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndustry(item.id)}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#0F172A] border-[#25D366] shadow-[0_0_25px_rgba(37,211,102,0.25)] -translate-y-1"
                    : "bg-[#0F172A]/50 border-white/10 hover:border-white/20 hover:bg-[#0F172A]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? "bg-[#25D366] text-black" : "bg-white/5 text-slate-300"
                  }`}
                >
                  <IconHelper name={item.icon} className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs font-bold ${
                    isSelected ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.name.split("&")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] border border-emerald-500/30 shadow-2xl mb-24 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="emerald">{current.badge}</Badge>
                <Badge variant="cyan">{current.stats}</Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{current.headline}</h2>
            </div>
            <Button
              href="/signup"
              variant="primary"
              size="md"
              rightIcon={<Sparkles className="w-4 h-4" />}
            >
              Get {current.name} Templates
            </Button>
          </div>

          <p className="text-sm sm:text-base text-slate-300 mb-10 max-w-3xl leading-relaxed">
            {current.description}
          </p>

          {/* Benefits & Pre-approved Template Message Previews */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {current.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B1120] border border-white/10 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      {benefit.metric}
                    </span>
                    <span className="text-xs text-slate-500">Playbook #{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {benefit.description}
                  </p>

                  {/* Simulated WhatsApp Message Template Bubble */}
                  <div className="bg-[#005C4B] rounded-2xl rounded-tr-none p-3.5 text-xs text-white shadow-md space-y-2 border border-emerald-400/20">
                    <div className="font-bold text-emerald-100">{benefit.templateMessage.header}</div>
                    <div className="text-[11px] text-emerald-50 leading-relaxed">
                      {benefit.templateMessage.body}
                    </div>
                    <div className="pt-1">
                      <div className="bg-[#111B21] text-[#25D366] font-bold text-[11px] py-1.5 px-3 rounded-lg text-center border border-emerald-500/30">
                        {benefit.templateMessage.cta}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#25D366]" /> Standard Cloud API Format
                  </span>
                  <span className="text-emerald-400 font-semibold">1-Click Clone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">
            Don&apos;t see your specific industry listed?
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Zecsoft works seamlessly for any business needing broadcast outreach, automated support, and lead qualification.
          </p>
          <Button href="/contact?subject=industry" variant="secondary" size="lg">
            Consult with an Industry Solutions Expert
          </Button>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
