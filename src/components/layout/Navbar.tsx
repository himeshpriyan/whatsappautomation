"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import Button from "@/components/shared/Button";
import MobileMenu from "./MobileMenu";
import DemoModal from "@/components/shared/DemoModal";
import IconHelper from "@/components/shared/IconHelper";

export default function Navbar() {
  const pathname = usePathname();
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Top Notification Announcement Bar */}
        {!isScrolled && (
          <div className="hidden md:flex items-center justify-center gap-2 py-1.5 px-4 mb-2 text-xs bg-emerald-50 border-y border-emerald-200/60 text-emerald-900">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>🎉 Special Launch Offer: Get 14-Day Free Trial + 1,000 Free WhatsApp API Conversations!</span>
            <Link
              href="/pricing"
              className="text-emerald-700 font-bold hover:underline flex items-center gap-1 ml-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] rounded"
            >
              Claim Offer <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] rounded-xl p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-300 border border-[#25D366]/40">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 flex items-center gap-0.5">
                  Zechsoft
                  <span className="text-[#25D366] inline-block group-hover:translate-x-0.5 transition-transform">
                    .
                  </span>
                </span>
                <span className="text-[10px] text-emerald-700 -mt-1 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" /> Built for WhatsApp API
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((item) => {
                const isItemActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || (item.children && item.children.some((child) => pathname === child.href)) || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
                          isItemActive
                            ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                        aria-expanded={activeDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                            isItemActive ? "text-emerald-600" : "text-slate-500 group-hover:text-emerald-600"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
                          isItemActive
                            ? "text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-sm"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mega Menu Dropdown */}
                    {item.children && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-[540px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200">
                          <div className="grid grid-cols-2 gap-2">
                            {item.children.map((subItem) => {
                              const isSubActive = pathname === subItem.href;

                              return (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`group/item flex items-start gap-3 p-3 rounded-xl transition-all duration-200 border ${
                                    isSubActive
                                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                      : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                                  }`}
                                >
                                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                                    isSubActive
                                      ? "bg-[#25D366] text-slate-950"
                                      : "bg-emerald-100/70 text-emerald-700 group-hover/item:bg-[#25D366] group-hover/item:text-slate-950"
                                  }`}>
                                    {subItem.icon && <IconHelper name={subItem.icon} className="w-4 h-4" />}
                                  </div>
                                  <div>
                                    <div className={`text-sm font-semibold transition-colors flex items-center gap-2 ${
                                      isSubActive ? "text-emerald-800" : "text-slate-900 group-hover/item:text-emerald-700"
                                    }`}>
                                      {subItem.label}
                                      {subItem.badge && (
                                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                                          {subItem.badge}
                                        </span>
                                      )}
                                    </div>
                                    {subItem.description && (
                                      <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Dropdown Banner */}
                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                            <span className="text-slate-500">Looking for custom API webhooks & custom LLMs?</span>
                            <Link
                              href="/contact?subject=enterprise"
                              onClick={() => setActiveDropdown(null)}
                              className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
                            >
                              Talk to Solution Architect <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/signup?type=login"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                Log In
              </Link>
              <Button
                href="/contact?subject=demo"
                variant="outline"
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
                className="min-w-[44px] min-h-[44px] p-2.5 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] flex items-center justify-center cursor-pointer"
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
