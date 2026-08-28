"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Boxes,
  Sparkles,
  Webhook,
  Database,
  Code2,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function IntegrationsFeaturePage() {
  const integrationsList = [
    {
      category: "E-Commerce & Storefronts",
      items: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Stores"],
      description: "Auto-sync products, recover carts, and push tracking updates automatically.",
    },
    {
      category: "CRMs & Sales Platforms",
      items: ["HubSpot", "Salesforce", "Zoho CRM", "LeadSquared", "Pipedrive"],
      description: "Two-way contact synchronization, deal stage automations, and custom properties.",
    },
    {
      category: "Workflow Automation",
      items: ["Zapier", "Make (Integromat)", "Pabbly Connect", "Google Sheets"],
      description: "Trigger WhatsApp messages from popular business applications with zero code.",
    },
    {
      category: "Payment Gateways",
      items: ["Stripe", "Razorpay", "PayPal", "WhatsApp Pay", "Custom Gateways"],
      description: "Collect payments in chats and trigger instant webhook receipts.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "Integrations & REST APIs" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<Boxes className="w-3.5 h-3.5" />} pulse>
              Seamless Business Integrations
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Seamlessly Connect with{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                Your Existing Tech Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Plug Zechsoft directly into your CRM, e-commerce store, payment gateway, and marketing automation stack with 1-click plugins or enterprise REST APIs & Webhooks.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">Ecosystem</div>
                <div className="text-xs text-slate-400 mt-1">Popular App Connectors</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">&lt; 100ms</div>
                <div className="text-xs text-slate-400 mt-1">Webhook Latency</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">REST API</div>
                <div className="text-xs text-slate-400 mt-1">Developer-First Docs</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Explore Integrations Free
              </Button>
              <Button href="/contact?subject=enterprise" variant="secondary" size="lg">
                Request Custom API Integration
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs font-bold text-white">REST API Code Snippet</span>
              </div>
              <Badge variant="cyan" className="text-[10px]">POST /v1/messages</Badge>
            </div>

            <div className="bg-[#090D16] p-4 rounded-xl font-mono text-[11px] text-slate-300 border border-white/5 overflow-x-auto space-y-1">
              <div className="text-emerald-400">curl -X POST https://api.zechsoft.com/v1/messages \</div>
              <div className="text-slate-400">&nbsp;&nbsp;-H &quot;Authorization: Bearer YOUR_API_KEY&quot; \</div>
              <div className="text-slate-400">&nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \</div>
              <div className="text-slate-400">&nbsp;&nbsp;-d &#39;&#123;</div>
              <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&quot;to&quot;: &quot;+1234567890&quot;,</div>
              <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&quot;template&quot;: &quot;order_confirmed&quot;,</div>
              <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&quot;variables&quot;: &#123; &quot;order_id&quot;: &quot;9841&quot; &#125;</div>
              <div className="text-slate-400">&nbsp;&nbsp;&#125;&#39;</div>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Status: <strong className="text-emerald-400">200 OK</strong> (Queue Dispatched)</span>
              <span className="text-cyan-400 font-semibold">42ms Latency</span>
            </div>
          </div>
        </div>

        {/* Integration Categories Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Ecosystem & Connectivity</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Popular Supported Integrations
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Connect your favorite business tools in just a few clicks or write custom integrations using our REST API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationsList.map((category, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0F172A] border border-white/10 hover:border-emerald-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-900 border border-white/10 rounded-lg text-xs font-semibold text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#082E20] border border-emerald-500/30 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">14-Day Free Trial</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Connect Your Apps & Automate WhatsApp in Minutes
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Get instant access to API keys and pre-built connectors with our free trial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=enterprise" variant="outline" size="lg">
              Contact Developer Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
