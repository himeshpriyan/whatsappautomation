"use client";

import React, { useState, useEffect } from "react";
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
  ShieldCheck,
  Workflow,
  Cpu,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function FeaturesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("broadcast");

  const featureTabs = [
    {
      id: "broadcast",
      anchorId: "broadcast",
      label: "Broadcast Marketing",
      icon: Megaphone,
      badge: "98% Open Rate",
      title: "Hyper-Targeted WhatsApp Broadcast Campaigns",
      description:
        "Reach thousands of opted-in customers instantly with personalized offers, product drops, and festive greetings. Experience 5.4x higher engagement than traditional email marketing.",
      points: [
        "Dynamic custom parameter tags: {{customer_name}}, {{coupon_code}}, {{expiry_date}}",
        "Pre-approved Meta template manager with compliance safeguards",
        "Clickable Quick Reply & Call-to-Action buttons driving instant conversions",
        "Detailed delivery reports: Sent, Delivered, Read, Clicked & Order Conversions",
      ],
      mockupType: "broadcast" as const,
    },
    {
      id: "chatbot",
      anchorId: "ai-chatbot",
      label: "AI Chatbot Builder",
      icon: Bot,
      badge: "GPT-4o Powered",
      title: "No-Code Visual Conversational Flow Builder",
      description:
        "Build autonomous AI agents that qualify leads, handle product queries, guide buyers to checkout, and resolve routine customer support queries instantly.",
      points: [
        "Drag-and-drop visual logic canvas: conditions, delays, branching, and API calls",
        "Upload PDFs, docs, and website URLs to create a context-aware AI knowledge base",
        "Seamless fallback handover to human support agents whenever requested",
        "Multi-language conversational support across global languages",
      ],
      mockupType: "chatbot" as const,
    },
    {
      id: "inbox",
      anchorId: "shared-inbox",
      label: "Shared Team Inbox",
      icon: Users,
      badge: "Team Collaboration",
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
      anchorId: "commerce",
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
      anchorId: "ctwa",
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
      anchorId: "integrations",
      label: "API & Integrations",
      icon: Boxes,
      badge: "Ecosystem Connectors",
      title: "Enterprise REST APIs, Webhooks & 1-Click Apps",
      description:
        "Connect Zechsoft with your existing CRM, ERP, e-commerce store, and marketing stack. Automate transactional alerts with high-throughput API queues.",
      points: [
        "Native Shopify, WooCommerce, Magento & BigCommerce plugins",
        "HubSpot, Salesforce, Zoho CRM, and LeadSquared two-way contact sync",
        "Zapier, Make (Integromat), Pabbly, and Google Sheets connectors",
        "Reliable REST Webhooks with high throughput message queues",
      ],
      mockupType: "broadcast" as const,
    },
  ];

  // Listen for hash changes to select tab and scroll
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matchingTab = featureTabs.find(
          (t) => t.anchorId === hash || t.id === hash
        );
        if (matchingTab) {
          setActiveTab(matchingTab.id);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const currentTab = featureTabs.find((t) => t.id === activeTab) || featureTabs[0];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Platform Features" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Comprehensive Platform Features
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Enterprise Operating System for{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              WhatsApp Growth
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore our end-to-end suite designed to accelerate sales funnels, automate 24/7 support, and power conversational commerce.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-2 bg-slate-100 border border-slate-200 rounded-2xl max-w-5xl mx-auto shadow-xs">
          {featureTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <a
                key={tab.id}
                href={`#${tab.anchorId}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#25D366] text-slate-950 shadow-sm font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/70"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>

        {/* Anchor point IDs for direct deep-linking */}
        <div id="broadcast" className="scroll-mt-32" />
        <div id="ai-chatbot" className="scroll-mt-32" />
        <div id="shared-inbox" className="scroll-mt-32" />
        <div id="commerce" className="scroll-mt-32" />
        <div id="ctwa" className="scroll-mt-32" />
        <div id="integrations" className="scroll-mt-32" />

        {/* Active Feature Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="cyan">{currentTab.badge}</Badge>
                <span className="text-xs text-slate-500 font-mono">Module: {currentTab.id}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentTab.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentTab.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Wired CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/signup"
                  variant="primary"
                  size="md"
                  rightIcon={<Sparkles className="w-4 h-4" />}
                >
                  Start Free Trial for {currentTab.label}
                </Button>
                <Button
                  href="/contact?subject=demo"
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
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              High-Throughput, Reliable Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Built directly on WhatsApp Cloud API protocols to deliver reliable message queuing and instant delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Built to Scale With You</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated rate-limit balancing with real-time queue management and instant retry mechanisms.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">End-to-End Encryption & Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encrypted communications in transit and at rest, plus role-based access control for team members.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Custom Webhook Events</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
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
