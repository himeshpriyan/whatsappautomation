"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Sales & Demo",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please enter a valid work email.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Please enter a valid phone/WhatsApp number.";
    }
    if (!formData.message.trim()) errs.message = "Please share a brief note about your requirements.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#25D366", "#10B981", "#06B6D4", "#ffffff"],
      });
    }, 800);
  };

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-4" pulse>
            We&apos;re Here to Help
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Get in Touch with our{" "}
            <span className="bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              WhatsApp Growth Experts
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have questions about Meta API setup, volume broadcast pricing, or migration from AiSensy / Wati? Our team replies within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4]" />

            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A dedicated WhatsApp Solutions Specialist will contact you via WhatsApp at{" "}
                  <strong className="text-[#25D366]">{formData.phone}</strong> and email within 1 business hour.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        inquiryType: "Sales & Demo",
                        message: "",
                      });
                    }}
                    variant="outline"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-[#25D366]"
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-[#25D366]"
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-[#25D366]"
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#090D16] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#25D366]"
                  >
                    <option value="Sales & Demo">Book a Live 1-on-1 Product Demo</option>
                    <option value="Green Tick Verification">Green Tick Official Verification Assistance</option>
                    <option value="Enterprise Custom High Volume">Enterprise Custom High Volume SLA</option>
                    <option value="Migration from Competitor">Migration from AiSensy / Wati / Twilio</option>
                    <option value="Partnership & Agency Reseller">Agency & Reseller Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message / Goal Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your audience size, broadcast frequency, or chatbot use case..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/15 focus:border-[#25D366]"
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Send Message & Get Free Consultation
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Chat Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#005C4B] to-[#0A382C] border border-emerald-400/40 text-white shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shadow-lg font-black text-xl">
                  <MessageCircle className="w-7 h-7 fill-black text-black" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">Chat Live on WhatsApp</h4>
                  <p className="text-xs text-emerald-100">Average response time: &lt; 2 minutes</p>
                </div>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                Skip the email queue! Chat directly with a senior Zecsoft onboarding specialist right now on WhatsApp.
              </p>
              <a
                href="https://wa.me/18005559327"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" /> Start WhatsApp Chat Now
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="p-6 rounded-3xl bg-[#0F172A] border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white">Direct Contacts</h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Sales & Enterprise</div>
                    <a href="mailto:sales@zecsoft.com" className="font-bold text-white hover:underline">
                      sales@zecsoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Toll Free Phone</div>
                    <a href="tel:+18005559327" className="font-bold text-white hover:underline">
                      +1 (800) 555-ZECSOFT
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Support Hours</div>
                    <div className="font-bold text-white">24/7 Global Live Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="p-6 rounded-3xl bg-[#0F172A] border border-white/10 space-y-3 text-xs">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-400" /> Global Headquarters
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Zecsoft Technologies Inc.<br />
                548 Market St, Suite 48201<br />
                San Francisco, CA 94104, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
