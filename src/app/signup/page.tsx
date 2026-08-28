"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Sparkles, CheckCircle2, ShieldCheck, User, Mail, Phone, Lock, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import confetti from "canvas-confetti";

function SignupFormContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "pro";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    plan: initialPlan,
    agreeTerms: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setErrorMessage("Please complete all required fields.");
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMessage("Please agree to the Terms of Service.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    // Simulated signup process
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#25D366", "#10B981", "#06B6D4", "#ffffff"],
      });
    }, 900);
  };

  return (
    <div className="pt-8 pb-24 relative overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#25D366]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-3" pulse>
            14-Day Free Trial
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Create Your Zechsoft Account
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            No credit card required • Instant access to WhatsApp API automation & AI bots
          </p>
        </div>

        <div className="bg-[#0F172A] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#06B6D4]" />

          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome to Zechsoft, {formData.name}!</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                Your 14-day free trial on the <strong className="text-[#25D366] uppercase">{formData.plan}</strong> plan is now active. We&apos;ve sent an onboarding link to <strong className="text-white">{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <Button href="/" variant="primary" size="lg" className="w-full">
                  Go to Platform Dashboard
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp / Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Create Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-[#090D16] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Selected Plan</label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full bg-[#090D16] border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#25D366]"
                >
                  <option value="starter">Starter Growth ($29/mo - 14 Days Free)</option>
                  <option value="pro">Scale & Automate Pro ($79/mo - 14 Days Free)</option>
                  <option value="enterprise">Enterprise Custom ($199/mo)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="rounded accent-[#25D366] bg-slate-900 border-white/20"
                />
                <label htmlFor="terms" className="text-xs text-slate-400">
                  I agree to the{" "}
                  <Link href="/about" className="text-[#25D366] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/about" className="text-[#25D366] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Create Account & Start Trial
              </Button>

              <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Secure • 256-Bit Data Encryption</span>
              </div>
            </form>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          Already have a Zechsoft account?{" "}
          <Link href="/contact?type=login" className="text-[#25D366] font-semibold hover:underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading signup...</div>}>
      <SignupFormContent />
    </Suspense>
  );
}
