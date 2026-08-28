"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Sparkles, PhoneCall } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import IconHelper from "@/components/shared/IconHelper";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("Product");

  if (!isOpen) return null;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop with fade */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer with slide */}
      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0B1120] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-black font-extrabold text-lg shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                Z
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Zechsoft<span className="text-[#25D366]">.</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2">
            {NAV_LINKS.map((item) => {
              const isItemActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || (item.children && item.children.some((child) => pathname === child.href));

              return (
                <div key={item.label} className="border-b border-white/5 pb-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className={`w-full min-h-[44px] flex items-center justify-between py-2 text-base font-semibold transition-colors cursor-pointer ${
                          isItemActive ? "text-[#25D366]" : "text-slate-200 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openSubmenu === item.label ? "rotate-180 text-[#25D366]" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {openSubmenu === item.label && (
                        <div className="pl-2 py-2 space-y-1.5 bg-slate-900/60 rounded-xl mt-1 border border-white/5">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;

                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={onClose}
                                className={`flex items-start gap-3 p-2.5 min-h-[44px] rounded-lg transition-colors text-sm ${
                                  isSubActive
                                    ? "bg-emerald-500/20 text-[#25D366] font-semibold"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {subItem.icon && (
                                  <IconHelper
                                    name={subItem.icon}
                                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                                      isSubActive ? "text-[#25D366]" : "text-slate-400"
                                    }`}
                                  />
                                )}
                                <div>
                                  <div className="font-medium flex items-center gap-2">
                                    {subItem.label}
                                    {subItem.badge && (
                                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block min-h-[44px] py-2.5 text-base font-semibold transition-colors flex items-center ${
                        isItemActive ? "text-[#25D366]" : "text-slate-200 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Meta Cloud API Ready
            </span>
            <Badge variant="emerald">14-Day Free Trial</Badge>
          </div>

          <Button
            href="/contact?subject=demo"
            variant="secondary"
            className="w-full min-h-[44px]"
            leftIcon={<PhoneCall className="w-4 h-4 text-emerald-400" />}
          >
            Book a Demo
          </Button>

          <Button
            href="/signup"
            variant="primary"
            className="w-full min-h-[44px]"
            rightIcon={<Sparkles className="w-4 h-4" />}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
