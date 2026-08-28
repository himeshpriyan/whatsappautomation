"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import InteractiveWhatsAppMockup from "@/components/home/InteractiveWhatsAppMockup";
import {
  ShoppingBag,
  Sparkles,
  CreditCard,
  RotateCcw,
  Receipt,
  Truck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function CommerceFeaturePage() {
  const capabilities = [
    {
      icon: ShoppingBag,
      title: "Native In-Chat Product Catalogs",
      description: "Display rich product cards, collections, item variants, and dynamic pricing with real-time stock sync.",
    },
    {
      icon: CreditCard,
      title: "1-Click Direct In-Chat Checkout",
      description: "Collect payments securely via WhatsApp Pay, UPI, Stripe, Razorpay, and credit/debit cards.",
    },
    {
      icon: RotateCcw,
      title: "Automated Cart Recovery Sequences",
      description: "Send automated discount incentives to shoppers who abandoned their cart, recovering up to 38% of sales.",
    },
    {
      icon: Truck,
      title: "Automated Dispatch & Tracking Alerts",
      description: "Trigger real-time tracking links, order updates, and automated PDF tax invoices immediately upon payment.",
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
          <span className="text-emerald-400 font-semibold">WhatsApp Commerce & Payments</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<ShoppingBag className="w-3.5 h-3.5" />} pulse>
              In-Chat Conversational Commerce
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Turn WhatsApp into Your{" "}
              <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                #1 Sales Storefront
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Enable your customers to browse product catalogs, select variants, and complete secure 1-click purchases without ever leaving their WhatsApp conversation.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">+38%</div>
                <div className="text-xs text-slate-400 mt-1">Cart Recovery Rate</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">1-Click</div>
                <div className="text-xs text-slate-400 mt-1">Frictionless Checkout</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Encrypted Payments</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Start Selling on WhatsApp
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Schedule Commerce Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <InteractiveWhatsAppMockup initialTab="payments" />
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Zero-Friction Sales Funnel</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Native WhatsApp Commerce Capabilities
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From catalog discovery to instant checkout and post-purchase tracking, eliminate website drop-offs entirely.
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
            Connect Your Catalog and Start Collecting Payments
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Sync with Shopify, WooCommerce, or upload custom catalogs in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=enterprise" variant="outline" size="lg">
              Talk to Commerce Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
