"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Phone, Mail, User, Building, Send } from "lucide-react";
import confetti from "canvas-confetti";
import Button from "./Button";
import Badge from "./Badge";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export default function DemoModal({ isOpen, onClose, defaultPlan }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    useCase: "WhatsApp Broadcast & Marketing",
    teamSize: "1-10",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#25D366", "#10B981", "#06B6D4", "#ffffff"],
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#0F172A] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-slate-100 overflow-hidden">
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4]" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#25D366]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle className="w-9 h-9" />
            </div>
            <Badge variant="emerald" className="mb-3">
              VIP Demo Booked!
            </Badge>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re All Set, {formData.name || "friend"}!</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              Our WhatsApp Growth Specialist has received your details. We have sent a confirmation message to{" "}
              <strong className="text-emerald-400">{formData.phone || "your WhatsApp"}</strong> and email invitation.
            </p>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-white/10 text-left text-xs text-slate-300 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Plan:</span>
                <span className="font-semibold text-emerald-400 uppercase">{defaultPlan || "Pro Trial"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Primary Goal:</span>
                <span className="font-semibold text-white">{formData.useCase}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Meta API Setup:</span>
                <span className="font-semibold text-cyan-400">Assisted (Free)</span>
              </div>
            </div>
            <Button onClick={handleReset} variant="primary" className="w-full">
              Back to Website
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <Badge variant="emerald" icon={<Sparkles className="w-3 h-3" />} className="mb-2">
                14-Day Free Trial + 1-on-1 Demo
              </Badge>
              <h3 className="text-2xl font-bold text-white">Experience Zecsoft in Action</h3>
              <p className="text-slate-400 text-sm mt-1">
                See how top brands automate WhatsApp broadcasts, AI chatbots, and payments.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company Name</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Acme Retail"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Goal</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                  >
                    <option value="WhatsApp Broadcast & Marketing">WhatsApp Broadcasts</option>
                    <option value="AI Chatbot & Flow Automation">AI Chatbots (GPT-4)</option>
                    <option value="Multi-Agent Shared Inbox">Customer Support Inbox</option>
                    <option value="WhatsApp Payments & Commerce">In-Chat Checkout & Commerce</option>
                    <option value="Click-to-WhatsApp Ads">Meta Ad Lead Generation</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Schedule VIP Demo & Start Free Trial
                </Button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  🔒 No credit card required. Official Meta API Cloud connection within 5 minutes.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
