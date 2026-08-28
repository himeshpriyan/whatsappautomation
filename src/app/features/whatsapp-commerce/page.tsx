"use client";

import React from "react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  ShoppingBag,
  Sparkles,
  CreditCard,
  RotateCcw,
  Package,
  Layers,
  ArrowRight,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function WhatsAppCommerceFeaturePage() {
  const capabilities = [
    {
      icon: Layers,
      title: "Interactive In-Chat Catalogs",
      description: "Showcase multi-product collections with images, variants, descriptions, and dynamic real-time inventory sync.",
    },
    {
      icon: CreditCard,
      title: "1-Click Direct In-Chat Checkout",
      description: "Accept payments via WhatsApp Pay, UPI, credit/debit cards, Stripe, and Razorpay directly inside customer chats.",
    },
    {
      icon: RotateCcw,
      title: "Automated Abandoned Cart Recovery",
      description: "Recover lost checkouts automatically with personalized discount incentives sent 30 minutes after abandonment.",
    },
    {
      icon: Package,
      title: "Live Order Tracking & Automated Receipts",
      description: "Deliver instant PDF invoice receipts, courier dispatch alerts, and live tracking links automatically.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "WhatsApp Commerce & Payments" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="emerald" icon={<ShoppingBag className="w-3.5 h-3.5" />} pulse>
              Conversational Commerce Suite
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Turn WhatsApp Chats into Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Highest Converting Storefront
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Showcase native product catalogs, recover abandoned checkouts, and accept 1-click in-chat payments. Provide frictionless shopping where your customers already spend their time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">35%</div>
                <div className="text-xs text-slate-500 mt-1">Cart Recovery Rate</div>
              </div>
              <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">1-Click</div>
                <div className="text-xs text-slate-500 mt-1">In-Chat Checkout</div>
              </div>
              <div className="p-4 rounded-3xl bg-white border border-slate-200 col-span-2 sm:col-span-1 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-700">Sync</div>
                <div className="text-xs text-slate-500 mt-1">Shopify & WooCommerce</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Start Selling on WhatsApp
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Book Commerce Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">WhatsApp Storefront Live</span>
              </div>
              <Badge variant="emerald" className="text-[10px]">Instant Pay</Badge>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">Organic Silk Face Serum (50ml)</span>
                <span className="text-emerald-700 font-bold">$48.00</span>
              </div>
              <p className="text-[11px] text-slate-600">Hydrating botanical formula with Hyaluronic Acid & Vitamin C.</p>

              <div className="pt-2 flex gap-2">
                <button className="flex-1 bg-[#25D366] text-slate-950 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-xs cursor-pointer">
                  <CreditCard className="w-3.5 h-3.5" /> Pay with WhatsApp Pay
                </button>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
              <span>Payment Gateway: <strong className="text-slate-900">Stripe / UPI Connected</strong></span>
              <span className="text-emerald-700 font-bold">Zero Redirection</span>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Full Commerce Lifecycle</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Everything You Need to Sell on WhatsApp
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From catalog discovery to instant checkout and post-purchase tracking, eliminate website drop-offs entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 border border-emerald-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl">
          <Badge variant="emerald">14-Day Free Trial</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Ready to Multiply Your E-Commerce Sales on WhatsApp?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Sync your Shopify, WooCommerce, or custom store catalog in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=enterprise" variant="outline" size="lg">
              Contact Commerce Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
