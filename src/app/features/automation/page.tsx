"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  GitFork,
  Sparkles,
  Workflow,
  Zap,
  Clock,
  Filter,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AutomationFeaturePage() {
  const capabilities = [
    {
      icon: Workflow,
      title: "Visual Drag-and-Drop Canvas",
      description: "Construct multi-branch customer journeys with conditional triggers, message delays, and decision nodes without writing code.",
    },
    {
      icon: Zap,
      title: "Event-Triggered Drip Campaigns",
      description: "Trigger automated follow-ups based on customer actions such as link clicks, tag additions, cart abandonments, or order updates.",
    },
    {
      icon: Filter,
      title: "Dynamic Audience Branching",
      description: "Segment incoming leads instantly based on responses, customer VIP tier, location, or past purchase history.",
    },
    {
      icon: Clock,
      title: "Smart Working Hours & Delays",
      description: "Configure business hour conditions and human agent escalation rules so your team responds when available.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <span>/</span>
          <span className="text-emerald-400 font-semibold">No-Code Flow Builder & Automation</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<GitFork className="w-3.5 h-3.5" />} pulse>
              Visual Workflow Automation
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Automate Customer Journeys with{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                No-Code Flow Builder
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Design complex conversational workflows, automated lead nurturing sequences, and multi-step customer journeys on a visual drag-and-drop canvas.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">0 Code</div>
                <div className="text-xs text-slate-400 mt-1">Visual Drag & Drop</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">24/7</div>
                <div className="text-xs text-slate-400 mt-1">Autonomous Execution</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">Multi-Branch</div>
                <div className="text-xs text-slate-400 mt-1">Smart Decision Trees</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Build Automations Free
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule Workflow Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs font-bold text-white">Visual Automation Canvas</span>
              </div>
              <Badge variant="cyan" className="text-[10px]">Flow Active</Badge>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="text-emerald-400 font-semibold">Trigger: Inbound Message</span>
                  <span>Keyword: #PRICING</span>
                </div>
                <p className="text-white font-medium">Detect intent and retrieve matching customer subscription record.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#005C4B]/40 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center justify-between text-emerald-300 text-[11px]">
                  <span className="font-bold">Condition Check: Is Existing Customer?</span>
                  <span className="text-[#25D366]">Yes / No Branch</span>
                </div>
                <p className="text-slate-200">If YES ➔ Send upgrade coupon. If NO ➔ Send pricing brochure PDF.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="text-cyan-400 font-semibold">Action: Schedule 24h Follow-up</span>
                  <span>Delay Node</span>
                </div>
                <p className="text-slate-300">If customer hasn&apos;t checked out within 24h, trigger automated cart recovery message.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Flow Engineering</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Unleash the Power of Automated Conversational Logic
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Replace rigid chatbots with fluid, personalized customer journeys that adapt to every user action in real time.
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
            Ready to Automate Your WhatsApp Workflows?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Set up your first automated customer flow in under 5 minutes. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=demo" variant="outline" size="lg">
              Book Live Workflow Walkthrough
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
