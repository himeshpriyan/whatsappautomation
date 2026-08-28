"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  Mail,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { FOOTER_LINKS } from "@/data/navigation";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";

// TODO: replace with verified business contact details before launch
export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to subscribe. Please try again.");
      } else {
        setIsSubscribed(true);
      }
    } catch {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#060911] border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#25D366]/5 blur-[160px] pointer-events-none -z-0" />

      {/* Top Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              {/* Compliance fix: removed unverified claim, see audit notes */}
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                Built for WhatsApp Business API
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Get the WhatsApp Growth Playbook
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-lg">
              Join founders and marketers receiving our actionable weekly guides on broadcast templates and AI chatbot strategies.
            </p>
          </div>

          <div className="lg:col-span-6">
            {isSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">You&apos;re subscribed to Zecsoft Growth Weekly!</p>
                  <p className="text-xs text-slate-300">Check your inbox for our 50+ high-converting WhatsApp templates pack.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0F172A] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isLoading}
                  rightIcon={isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  Subscribe
                </Button>
              </form>
            )}
            {errorMessage && (
              <p className="text-xs text-red-400 mt-2">{errorMessage}</p>
            )}
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
              <span>🔒 Zero spam guarantee</span>
              <span>•</span>
              <span>1-click unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-black font-extrabold text-lg shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                Z
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Zecsoft<span className="text-[#25D366]">.</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise WhatsApp Business Cloud API platform. High-volume broadcast marketing, zero-code AI chatbots, shared team inbox, and 1-click in-chat commerce.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <a
                href="mailto:support@zecsoft.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#25D366]" /> support@zecsoft.com
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Online Help Desk & Contact
              </Link>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.platform.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.industries.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Legal & Trust</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Compliance fix: removed unverified claim, see audit notes */}
            <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-500">
              <p className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> WhatsApp Cloud API Compliant
              </p>
              <p className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 256-Bit Encrypted Data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Social Media */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <p className="text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} Zecsoft Technologies Inc. All rights reserved. WhatsApp is a registered trademark of Meta Platforms, Inc.
        </p>

        {/* Social Icons (Clean Inline SVGs) */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-1"
            aria-label="Twitter X"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-1"
            aria-label="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors p-1"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
