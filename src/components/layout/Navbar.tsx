"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import Button from "@/components/shared/Button";
import MobileMenu from "./MobileMenu";
import DemoModal from "@/components/shared/DemoModal";
import IconHelper from "@/components/shared/IconHelper";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090D16]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Top Notification Announcement Bar */}
        {!isScrolled && (
          <div className="hidden md:flex items-center justify-center gap-2 py-1.5 px-4 mb-2 text-xs bg-gradient-to-r from-emerald-950/60 via-slate-900/60 to-emerald-950/60 border-y border-emerald-500/20 text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>🎉 Special Launch Offer: Get 14-Day Free Trial + 1,000 Free WhatsApp API Conversations!</span>
            <Link
              href="/pricing"
              className="text-[#25D366] font-semibold hover:underline flex items-center gap-1 ml-1"
            >
              Claim Offer <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(37,211,102,0.4)] group-hover:scale-105 transition-transform duration-300 border border-[#25D366]/40">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-0.5">
                  Zechsoft
                  <span className="text-[#25D366] inline-block group-hover:translate-x-0.5 transition-transform">
                    .
                  </span>
                </span>
                {/* Compliance fix: removed unverified claim, see audit notes */}
                <span className="text-[10px] text-emerald-400/80 -mt-1 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#25D366]" /> Built for WhatsApp API
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#25D366]`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-[540px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="glass-dropdown rounded-2xl p-4 shadow-2xl border border-white/10">
                        <div className="grid grid-cols-2 gap-2">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-emerald-500/20"
                            >
                              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover/item:bg-[#25D366] group-hover/item:text-black transition-colors duration-200">
                                {subItem.icon && <IconHelper name={subItem.icon} className="w-4 h-4" />}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover/item:text-[#25D366] transition-colors flex items-center gap-2">
                                  {subItem.label}
                                  {subItem.badge && (
                                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                {subItem.description && (
                                  <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Banner */}
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                          <span className="text-slate-400">Looking for custom API webhooks & custom LLMs?</span>
                          <Link
                            href="/contact?subject=enterprise"
                            onClick={() => setActiveDropdown(null)}
                            className="text-[#25D366] font-semibold hover:underline flex items-center gap-1"
                          >
                            Talk to Solution Architect <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/signup?type=login"
                className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                Log In
              </Link>
              {/* TODO: connect to live Calendly link when ready */}
              <Button
                href="/contact?subject=demo"
                variant="secondary"
                size="sm"
                className="hidden xl:inline-flex"
              >
                Book a Demo
              </Button>
              <Button
                href="/signup"
                variant="primary"
                size="sm"
                rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button href="/signup" variant="primary" size="sm">
                Free Trial
              </Button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenDemo={() => {
          setMobileMenuOpen(false);
          setDemoModalOpen(true);
        }}
      />

      {/* Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
