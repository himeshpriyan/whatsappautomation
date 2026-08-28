"use client";

import React from "react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  BarChart3,
  Sparkles,
  TrendingUp,
  LineChart,
  FileSpreadsheet,
  ArrowRight,
  Activity,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function AnalyticsFeaturePage() {
  const capabilities = [
    {
      icon: LineChart,
      title: "Real-Time Message Delivery Metrics",
      description: "Monitor exact counts of messages Sent, Delivered, Read, Clicked, and Failed with immediate error diagnostics.",
    },
    {
      icon: TrendingUp,
      title: "Revenue & Conversion Attribution",
      description: "Attribute every generated sale and checkout back to specific broadcast campaigns, ads, or chatbot flows.",
    },
    {
      icon: Activity,
      title: "Agent Performance & SLA Tracking",
      description: "Track first-response times, resolution rates, conversation durations, and individual CSAT customer ratings.",
    },
    {
      icon: FileSpreadsheet,
      title: "Automated Reports & CSV Exports",
      description: "Schedule daily/weekly email reports and export complete campaign performance data with a single click.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Features", href: "/features" }, { label: "Deep Analytics & Reports" }]} />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" icon={<BarChart3 className="w-3.5 h-3.5" />} pulse>
              Real-Time Campaign Intelligence
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Actionable Insights for Every{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                WhatsApp Campaign
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Track delivery rates, button click-throughs, agent response benchmarks, and customer revenue attribution in real time with intuitive visual dashboards.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-700">100%</div>
                <div className="text-xs text-slate-500 mt-1">Real-Time Event Sync</div>
              </div>
              <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">ROI</div>
                <div className="text-xs text-slate-500 mt-1">Direct Revenue Attribution</div>
              </div>
              <div className="p-4 rounded-3xl bg-white border border-slate-200 col-span-2 sm:col-span-1 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">1-Click</div>
                <div className="text-xs text-slate-500 mt-1">Exportable CSV Reports</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/signup" variant="primary" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                Explore Analytics Free
              </Button>
              <Button href="/contact?subject=demo" variant="secondary" size="lg">
                Request Custom Dashboard Demo
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-700" />
                <span className="text-xs font-bold text-slate-900">Campaign Performance Live</span>
              </div>
              <Badge variant="cyan" className="text-[10px]">Example Data (Illustrative)</Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                <span className="text-slate-500 text-[11px]">Messages Sent</span>
                <div className="text-xl font-black text-slate-900">48,200</div>
                <span className="text-[10px] text-emerald-700 font-semibold">99.4% Delivered</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                <span className="text-slate-500 text-[11px]">Read Rate</span>
                <div className="text-xl font-black text-emerald-700">97.8%</div>
                <span className="text-[10px] text-slate-500">47,139 Opened</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                <span className="text-slate-500 text-[11px]">Button CTR</span>
                <div className="text-xl font-black text-cyan-700">54.2%</div>
                <span className="text-[10px] text-slate-500">25,549 Clicks</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 shadow-2xs">
                <span className="text-slate-500 text-[11px]">Revenue Generated</span>
                <div className="text-xl font-black text-emerald-600">$32,840</div>
                <span className="text-[10px] text-emerald-700 font-semibold">4.8x ROI</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Top Channel: <strong className="text-slate-900">Summer Drop VIP</strong></span>
              <span className="text-emerald-700 font-bold">+18% vs Last Month</span>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan">Deep Business Intelligence</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Optimize Every Customer Touchpoint
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Comprehensive analytics that connect marketing broadcasts, chatbot interactions, and team resolution times directly to bottom-line results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-cyan-500/40 transition-all space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
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
        <div className="rounded-3xl bg-gradient-to-r from-cyan-50 via-white to-emerald-50 border border-cyan-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl">
          <Badge variant="cyan">14-Day Free Trial</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Unlock Full Campaign Transparency Today
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Test real-time analytics with no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/signup" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Free Trial
            </Button>
            <Button href="/contact?subject=demo" variant="outline" size="lg">
              Book Live Walkthrough
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
