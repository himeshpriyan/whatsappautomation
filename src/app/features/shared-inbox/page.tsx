"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Users,
  Sparkles,
  UserCheck,
  Tag,
  MessageSquare,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function SharedInboxFeaturePage() {
  const capabilities = [
    {
      icon: UserCheck,
      title: "Smart Auto-Routing & Assignment",
      description: "Automatically route incoming chats based on agent workload, availability, tags, or spoken language.",
    },
    {
      icon: Tag,
      title: "Internal Notes & Private Mentions",
      description: "Collaborate silently with teammates within customer threads without the customer seeing private remarks.",
    },
    {
      icon: MessageSquare,
      title: "Canned Responses & Quick Templates",
      description: "Speed up response times with pre-saved snippets, keyboard shortcuts, and verified media templates.",
    },
    {
      icon: Shield,
      title: "Role-Based Access & Permissions",
      description: "Granular permissions for Admins, Managers, and Agents to control contact exports, deletions, and broadcasts.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "Shared Team Inbox" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<Users className="w-3.5 h-3.5" />} pulse>
              Multi-Agent Collaboration
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              One WhatsApp Number.{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                Unlimited Team Power.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Equip your sales and customer support teams with a unified multi-agent WhatsApp Business workspace. Collaborate seamlessly, assign conversations, and never drop a lead again.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">1 Number</div>
                <div className="text-xs text-slate-400 mt-1">Official Brand Presence</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">100%</div>
                <div className="text-xs text-slate-400 mt-1">Chat History Retention</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">3x Faster</div>
                <div className="text-xs text-slate-400 mt-1">First Response Time</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Try Shared Inbox Free
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule Team Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-white">Live Support Queue</span>
              </div>
              <Badge variant="slate" className="text-[10px]">12 Agents Active</Badge>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Johnathan Reed</div>
                  <div className="text-slate-400 text-[11px]">Assigned to: Sarah (VIP Tier)</div>
                </div>
                <Badge variant="emerald">In Progress</Badge>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Maria Garcia</div>
                  <div className="text-slate-400 text-[11px]">Assigned to: Alex (Technical)</div>
                </div>
                <span className="text-slate-400 text-[10px]">Resolved (2m ago)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Devon Vance</div>
                  <div className="text-slate-400 text-[11px]">Unassigned (New Lead)</div>
                </div>
                <Badge variant="cyan">Auto-Routing</Badge>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex justify-between items-center">
              <span>Avg First Response: <strong className="text-emerald-400">42 seconds</strong></span>
              <span className="text-[#25D366] font-semibold">99.8% CSAT</span>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Team Collaboration</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Everything Your Support Team Needs
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Stop juggling multiple phones or web tabs. Streamline customer operations in one centralized platform.
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
            Unite Your Customer Team on WhatsApp Today
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Set up team seats in minutes and connect your official WhatsApp Business number.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Get Started for Free
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Compare Team Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
