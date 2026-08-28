"use client";

import React, { useState } from "react";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ToastNotification from "@/components/shared/ToastNotification";
import {
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Loader2,
  MessageCircle,
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

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<{
    isOpen: boolean;
    type: "success" | "error" | "info";
    message: string;
  }>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const validateField = (field: string, value: string) => {
    let err = "";
    if (field === "name" && !value.trim()) {
      err = "Please enter your full name.";
    }
    if (field === "email" && (!value.trim() || !value.includes("@") || !value.includes("."))) {
      err = "Please enter a valid work email address.";
    }
    if (field === "phone" && (!value.trim() || value.trim().length < 7)) {
      err = "Please enter a valid WhatsApp/phone number.";
    }
    if (field === "message" && !value.trim()) {
      err = "Please share a brief note about your requirements.";
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return !err;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof typeof formData]);
  };

  const validateAll = () => {
    const validName = validateField("name", formData.name);
    const validEmail = validateField("email", formData.email);
    const validPhone = validateField("phone", formData.phone);
    const validMessage = validateField("message", formData.message);

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    return validName && validEmail && validPhone && validMessage;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      setToast({
        isOpen: true,
        type: "error",
        message: "Please complete all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setToast({
          isOpen: true,
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
      } else {
        setIsSuccess(true);
        setToast({
          isOpen: true,
          type: "success",
          message: "Message received! Our team will contact you shortly.",
        });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#25D366", "#10B981", "#06B6D4", "#ffffff"],
        });
      }
    } catch {
      setToast({
        isOpen: true,
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact & Consultation" }]} />

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
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about Meta Cloud API setup, high-volume broadcast plans, or migrating from other platforms? We reply within minutes.
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
                      setTouched({});
                      setErrors({});
                    }}
                    variant="outline"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                      onBlur={() => handleBlur("name")}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (touched.name) validateField("name", e.target.value);
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus-visible:ring-2 ${
                        touched.name && errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-white/15 focus-visible:ring-[#25D366] focus:border-[#25D366]"
                      }`}
                    />
                    {touched.name && errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onBlur={() => handleBlur("email")}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (touched.email) validateField("email", e.target.value);
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus-visible:ring-2 ${
                        touched.email && errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-white/15 focus-visible:ring-[#25D366] focus:border-[#25D366]"
                      }`}
                    />
                    {touched.email && errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
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
                      onBlur={() => handleBlur("phone")}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (touched.phone) validateField("phone", e.target.value);
                      }}
                      className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus-visible:ring-2 ${
                        touched.phone && errors.phone
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-white/15 focus-visible:ring-[#25D366] focus:border-[#25D366]"
                      }`}
                    />
                    {touched.phone && errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
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
                      className="w-full bg-[#090D16] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus:border-[#25D366]"
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
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus:border-[#25D366]"
                  >
                    <option value="Sales & Demo">Book a Live 1-on-1 Product Demo</option>
                    <option value="Green Tick Verification">Green Tick Verification Guidance</option>
                    <option value="Enterprise Custom High Volume">Enterprise Custom High Volume Architecture</option>
                    <option value="Migration from Competitor">Migration from Other Platforms</option>
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
                    onBlur={() => handleBlur("message")}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (touched.message) validateField("message", e.target.value);
                    }}
                    className={`w-full bg-[#090D16] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus-visible:ring-2 ${
                      touched.message && errors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-white/15 focus-visible:ring-[#25D366] focus:border-[#25D366]"
                    }`}
                  />
                  {touched.message && errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full min-h-[48px]"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  rightIcon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  Send Message & Request Consultation
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Chat Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#005C4B] to-[#0A382C] border border-emerald-400/40 text-white shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shadow-lg font-black text-xl">
                  <MessageCircle className="w-7 h-7 fill-black text-black" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">Online Help Desk</h4>
                  <p className="text-xs text-emerald-100">Live support available 24/7</p>
                </div>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                Connect with our onboarding team to ask questions regarding API compliance, template approvals, and pricing plans.
              </p>
              <Button
                href="/signup"
                variant="primary"
                size="md"
                className="w-full text-black font-bold min-h-[44px]"
              >
                Start Free Trial for 14 Days
              </Button>
            </div>

            {/* Direct Contact Details */}
            <div className="p-6 rounded-3xl bg-[#0F172A] border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white">Direct Channels</h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Support & Inquiries</div>
                    <a href="mailto:support@zechsoft.com" className="font-bold text-white hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] rounded">
                      support@zechsoft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Response Time</div>
                    <div className="font-bold text-white">Typically under 1 hour</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Online Operations */}
            <div className="p-6 rounded-3xl bg-[#0F172A] border border-white/10 space-y-3 text-xs">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-400" /> Cloud Platform Operations
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Zechsoft Technologies Cloud Infrastructure<br />
                Global 24/7 Digital Support & Monitoring
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastNotification
        isOpen={toast.isOpen}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
