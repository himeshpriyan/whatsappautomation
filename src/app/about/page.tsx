"use client";

import React, { useState } from "react";
import Image from "next/image";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import DemoModal from "@/components/shared/DemoModal";
import {
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  Lock,
} from "lucide-react";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function AboutPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const team = [
    {
      name: "David Vance",
      role: "Co-Founder & CEO",
      bio: "Conversational software architect. Passionate about empowering businesses with messaging automation.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      bio: "AI Systems Researcher. Leads Zechsoft's low-latency GPT-4 chatbot workflows and reliable message queues.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    },
    {
      name: "Marcus Thorne",
      role: "VP of Product",
      bio: "10+ years in SaaS product design. Focused on friction-free workflows and enterprise integrations.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-Obsessed Impact",
      description: "We measure our success exclusively by the engagement lift and time saved for our business partners.",
    },
    {
      icon: Lock,
      title: "Bank-Grade Privacy & Encryption",
      description: "WhatsApp Cloud API adherence with zero compromise on customer data protection or encryption.",
    },
    {
      icon: Zap,
      title: "Radical Speed & Innovation",
      description: "We ship cutting-edge AI features, WhatsApp updates, and workflow integrations continuously.",
    },
  ];

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About Us & Mission" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            Our Mission & Vision
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Democratizing Conversational Commerce for{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Every Business
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            At Zechsoft, we believe customer communication should be as immediate, personal, and interactive as chatting with a trusted friend. We are building the next generation of WhatsApp-native marketing, AI chatbots, and payments infrastructure.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">Direct</div>
            <div className="text-xs text-slate-500 mt-1">Cloud API Integration</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">98%</div>
            <div className="text-xs text-slate-500 mt-1">Average Open Rate</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-700">24/7</div>
            <div className="text-xs text-slate-500 mt-1">Automated Operations</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-700">180+</div>
            <div className="text-xs text-slate-500 mt-1">Countries Reachable</div>
          </div>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="cyan">The Zechsoft Story</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Built to Solve the Modern Engagement Crisis
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Email open rates have plummeted below 18%, SMS messages are ignored as spam, and legacy phone support costs millions. Meanwhile, 2.8+ billion people check WhatsApp over 20 times a day.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We founded Zechsoft to give every brand — from fast-growing D2C stores to enterprise service leaders — the tools to broadcast personalized campaigns, automate conversational AI, and collect payments on WhatsApp in a compliant, scalable environment.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-7 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <div>
                <h4 className="text-base font-bold text-slate-900">Built for WhatsApp Business API</h4>
                <p className="text-xs text-slate-500">Standard WhatsApp Cloud API Integration</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2 shadow-xs">
              <div className="flex justify-between">
                <span>Architecture:</span>
                <span className="text-emerald-700 font-bold">Cloud-Native (Next.js & API Queues)</span>
              </div>
              <div className="flex justify-between">
                <span>Security Standard:</span>
                <span className="text-slate-900 font-semibold">256-Bit TLS & Data Encryption</span>
              </div>
              <div className="flex justify-between">
                <span>Hosting:</span>
                <span className="text-cyan-700 font-semibold">Global Cloud CDN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="emerald">What Drives Us</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Our Guiding Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-colors space-y-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="cyan">Leadership</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all text-center space-y-4 shadow-sm"
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-sm">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5">{member.role}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Wired to /signup */}
        <div className="text-center">
          <Button href="/signup" variant="primary" size="xl">
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </div>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
