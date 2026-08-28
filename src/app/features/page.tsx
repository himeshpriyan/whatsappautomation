"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import DemoModal from "@/components/shared/DemoModal";
import InteractiveWhatsAppMockup from "@/components/home/InteractiveWhatsAppMockup";
import {
  Megaphone,
  Bot,
  Users,
  ShoppingBag,
  Target,
  Boxes,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Workflow,
  Cpu,
  BarChart3,
  Send,
} from "lucide-react";

export default function FeaturesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("broadcast");

  const featureTabs = [
    {
      id: "broadcast",
      label: "Broadcast Marketing",
      icon: Megaphone,
      badge: "98% Open Rate",
      title: "Hyper-Targeted WhatsApp Broadcast Campaigns",
      description:
        "Reach thousands of opted-in customers instantly with personalized offers, product drops, and festive greetings. Experience 5.4x higher engagement than traditional email marketing.",
      points: [
        "Dynamic custom parameter tags: {{customer_name}}, {{coupon_code}}, {{expiry_date}}",
        "Pre-approved Meta template manager with zero compliance hassle",
        "Clickable Quick Reply & Call-to-Action buttons driving instant conversions",
        "Detailed delivery reports: Sent, Delivered, Read, Clicked & Order Conversions",
      ],
      mockupType: "broadcast" as const,
    },
    {
      id: "chatbot",
      label: "AI Chatbot Builder",
      icon: Bot,
      badge: "GPT-4o Powered",
      title: "No-Code Visual Conversational Flow Builder",
      description:
        "Build autonomous AI agents that qualify leads, handle product queries, guide buyers to checkout, and resolve 80% of customer support queries instantly.",
      points: [
        "Drag-and-drop visual logic canvas: conditions, delays, branching, and API calls",
        "Upload PDFs, docs, and website URLs to create a context-aware AI knowledge base",
        "Seamless fallback handover to human support agents whenever requested",
        "Multi-language support for 100+ global languages",
      ],
      mockupType: "chatbot" as const,
    },
    {
      id: "inbox",
      label: "Shared Team Inbox",
      icon: Users,
      badge: "Unlimited Agents",
      title: "Collaborative Multi-Agent Support Suite",
      description:
        "Empower your entire support and sales team to manage customer conversations collaboratively on a single official WhatsApp Business phone number.",
      points: [
        "Smart auto-assignment of incoming chats based on agent availability & skills",
        "Internal agent notes, private tagging, and conversation transfer with history",
        "Canned responses, quick templates, and keyboard shortcuts for lightning-fast replies",
        "Role-based permissions for Admins, Managers, and Agents",
      ],
      mockupType: "broadcast" as const,
    },
    {
      id: "payments",
      label: "In-Chat Commerce",
      icon: ShoppingBag,
      badge: "1-Click Checkout",
      title: "Native WhatsApp Catalog & In-Chat Payments",
      description:
        "Turn WhatsApp into your most lucrative storefront. Allow customers to browse multi-product catalogs, select variants, and complete secure 1-click checkout.",
      points: [
        "Interactive product catalogs with images, descriptions, prices, and inventory sync",
        "Direct payment collection via WhatsApp Pay, UPI, Stripe, and Razorpay",
        "Automated abandoned cart recovery workflows triggered within 30 minutes",
        "Instant automated PDF invoice generation & dispatch tracking updates",
      ],
      mockupType: "payments" as const,
    },
    {
      id: "ads",
      label: "Click-to-WhatsApp Ads",
      icon: Target,
      badge: "Lower CAC",
      title: "Supercharge Meta Ads ROI (CTWA)",
      description:
        "Route high-intent Facebook and Instagram ad clicks straight into a conversational WhatsApp funnel. Capture verified phone numbers and auto-qualify leads.",
      points: [
        "Zero friction lead capture: 100% verified mobile numbers without lengthy web forms",
        "Instant greeting & AI qualification sequence triggered on ad click",
        "Meta Pixel & Conversion API (CAPI) sync for optimal ad algorithm learning",
        "Achieve up to 45% lower Cost-Per-Acquisition (CAC) than standard landing pages",
      ],
      mockupType: "chatbot" as const,
    },
    {
      id: "integrations",
      label: "API & Integrations",
      icon: Boxes,
      badge: "100+ Apps",
      title: "Enterprise REST APIs, Webhooks & 1-Click Apps",
      description:
        "Connect Zecsoft with your existing CRM, ERP, e-commerce store, and marketing stack. Automate transactional alerts with high-throughput API queues.",
      points: [
        "Native Shopify, WooCommerce, Magento & BigCommerce plugins",
        "HubSpot, Salesforce, Zoho CRM, and LeadSquared two-way contact sync",
        "Zapier, Make (Integromat), Pabbly, and Google Sheets connectors",
        "Ultra-reliable REST Webhooks with 80+ Messages Per Second (MPS) throughput",
      ],
      mockupType: "broadcast" as const,
    },
  ];

  const currentTab = featureTabs.find((t) => t.id === activeTab) || featureTabs[0];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Comprehensive Platform Features
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Enterprise Operating System for{" "}
            <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              WhatsApp Growth
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore our end-to-end suite designed to accelerate sales funnels, automate 24/7 support, and power conversational commerce.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-[#0F172A] border border-white/10 rounded-2xl max-w-5xl mx-auto shadow-xl">
          {featureTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A]/90 border border-emerald-500/30 shadow-2xl mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="cyan">{currentTab.badge}</Badge>
                <span className="text-xs text-slate-400 font-mono">Module: {currentTab.id}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentTab.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentTab.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setDemoModalOpen(true)}
                  variant="primary"
                  size="md"
                  rightIcon={<Sparkles className="w-4 h-4" />}
                >
                  Try {currentTab.label} for Free
                </Button>
                <Button
                  onClick={() => setDemoModalOpen(true)}
                  variant="secondary"
                  size="md"
                >
                  Request Technical Demo
                </Button>
              </div>
            </div>

            {/* Right Interactive Mockup Column */}
            <div className="lg:col-span-6">
              <InteractiveWhatsAppMockup initialTab={currentTab.mockupType} />
            </div>
          </div>
        </div>

        {/* Technical Architecture & API Infrastructure */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="emerald" icon={<Cpu className="w-3.5 h-3.5" />}>
              Enterprise Architecture
            </Badge>
            <h2 className="text-3xl font-bold text-white mt-2">
              High-Throughput, Low-Latency Infrastructure
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Built on Meta&apos;s direct Cloud API to guarantee 99.99% uptime and zero message queuing bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">80+ MPS Throughput</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send up to 80 messages per second with real-time queue management and instant fallback mechanisms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">SOC 2 Type II & GDPR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise data isolation, 256-bit encryption in transit and at rest, plus compliance-ready audit trails.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Custom Webhook Events</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stream real-time message status, customer opt-ins, chatbot responses, and payment settlements to your servers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
