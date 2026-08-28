"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import InteractiveWhatsAppMockup from "@/components/home/InteractiveWhatsAppMockup";
import {
  Bot,
  Sparkles,
  Workflow,
  BrainCircuit,
  Headphones,
  Languages,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function ChatbotFeaturePage() {
  const capabilities = [
    {
      icon: Workflow,
      title: "Drag-and-Drop Visual Flow Canvas",
      description: "Build custom multi-step journeys with decision branching, buttons, delays, and dynamic API lookups.",
    },
    {
      icon: BrainCircuit,
      title: "GPT-4o Custom Knowledge Bases",
      description: "Upload PDFs, product manuals, or website URLs. The AI answers customer questions with accurate context.",
    },
    {
      icon: Headphones,
      title: "Human Agent Handover",
      description: "When complex issues arise, smoothly hand over conversations to human agents with full transcript history.",
    },
    {
      icon: Languages,
      title: "100+ Global Languages",
      description: "Support international customers natively with automatic language detection and real-time translation.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#06B6D4]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">AI Chatbot Builder</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" icon={<Bot className="w-3.5 h-3.5" />} pulse>
              Autonomous AI Chatbots
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Self-Driving AI Agents for{" "}
              <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#25D366] bg-clip-text text-transparent">
                24/7 Sales & Support
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Automate customer support, qualify leads, and close deals around the clock on WhatsApp. Train intelligent GPT-4o bots on your business knowledge base in under 10 minutes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">&lt; 4s</div>
                <div className="text-xs text-slate-400 mt-1">Average Response Time</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">70%+</div>
                <div className="text-xs text-slate-400 mt-1">Automated Resolution</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">24/7/365</div>
                <div className="text-xs text-slate-400 mt-1">Zero Downtime Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Build Your Bot for Free
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule AI Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <InteractiveWhatsAppMockup initialTab="chatbot" />
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="emerald">Zero Coding Required</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Powerful Conversational AI at Your Fingertips
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Combine visual drag-and-drop rule logic with generative AI intelligence for unbeatable flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0F172A] border border-white/10 hover:border-cyan-500/40 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
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
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-cyan-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="cyan">Instant Onboarding</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Automate 70% of Routine Inquiries?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Test our visual flow builder free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=demo" variant="outline" size="lg">
              Book a 1-on-1 Walkthrough
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
