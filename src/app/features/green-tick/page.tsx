"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  FileText,
  HelpCircle,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function GreenTickFeaturePage() {
  const requirements = [
    {
      icon: Building,
      title: "Meta Business Manager Verification",
      description: "Your business must have a verified Meta Business Manager account with legal documentation (GST/Tax ID, registration certificate).",
    },
    {
      icon: ShieldCheck,
      title: "Tier 2+ Messaging Tier & High Quality Rating",
      description: "An active WhatsApp Business Cloud API account maintaining a Green Quality Rating and adhering to Meta messaging guidelines.",
    },
    {
      icon: FileText,
      title: "Organic Brand Notability",
      description: "Meta requires proof of brand presence such as organic news articles, press mentions, and active social profiles (paid PR does not count).",
    },
    {
      icon: UserCheck,
      title: "Official Brand Website & Matching Domain Email",
      description: "A functional corporate website matching your legal business name and an official business email address.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Eligibility Pre-Assessment",
      description: "Our compliance team reviews your brand presence, business documentation, and Meta Business Manager setup to evaluate readiness.",
    },
    {
      step: "02",
      title: "Documentation & Profile Preparation",
      description: "We help structure your official Meta submission with verified press links, website references, and matching business assets.",
    },
    {
      step: "03",
      title: "Direct Application Submission",
      description: "Submit the Official Business Account (OBA) application directly to Meta through the WhatsApp Business API portal.",
    },
    {
      step: "04",
      title: "Meta Review & Badge Activation",
      description: "Meta reviews your submission. Once approved, the official Green Verified Tick badge appears automatically next to your brand name.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "Green Tick Verification Guidance" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<CheckCircle2 className="w-3.5 h-3.5" />} pulse>
              Official Brand Identity
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              WhatsApp Green Tick{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                Verification Guidance
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Build instant credibility and customer trust. Display your official brand name with Meta&apos;s verified Green Tick badge on WhatsApp — even if contacts haven&apos;t saved your phone number.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">Trust</div>
                <div className="text-xs text-slate-400 mt-1">Verified Brand Name</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">100%</div>
                <div className="text-xs text-slate-400 mt-1">Direct Meta Submission</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">Assisted</div>
                <div className="text-xs text-slate-400 mt-1">Prerequisite Review</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/contact?subject=green-tick" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Request Green Tick Assessment
              </Button>
              <Button href="/signup" variant="secondary" size="lg">
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs font-bold text-white">Verified Business Profile Preview</span>
              </div>
              <Badge variant="emerald" className="text-[10px]">Verified Badge</Badge>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-black font-bold flex items-center justify-center text-lg">
                  Z
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                    Your Business Name
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] fill-[#25D366] text-black" />
                  </div>
                  <div className="text-xs text-emerald-400 font-medium">Official Business Account</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Brand name displays prominently in WhatsApp chat headers, search results, and contact info cards with verified authenticity.
              </p>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Approval Authority: <strong className="text-white">Meta (Direct Decision)</strong></span>
              <span className="text-cyan-400 font-semibold">Policy Compliant</span>
            </div>
          </div>
        </div>

        {/* Prerequisites Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Meta Eligibility Criteria</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Prerequisites for Green Tick Approval
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Meta grants the Official Business Account badge based on specific verification and notability standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, idx) => {
              const Icon = req.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#0F172A] border border-white/10 hover:border-emerald-500/40 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{req.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{req.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="emerald">Step-by-Step Workflow</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              How the Verification Process Works
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We guide you through preparation and submission to maximize approval likelihood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-emerald-500/30 transition-all space-y-3"
              >
                <div className="text-2xl font-black text-emerald-400 font-mono">{s.step}</div>
                <h4 className="text-base font-bold text-white">{s.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-emerald-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">Assisted Onboarding</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Check Your WhatsApp Green Tick Eligibility
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Talk to our team to assess your brand presence and prepare your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact?subject=green-tick" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Get Free Eligibility Check
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View Supported Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
