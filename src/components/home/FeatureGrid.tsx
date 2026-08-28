"use client";

import React from "react";
import { GRID_FEATURES } from "@/data/features";
import SectionHeader from "@/components/shared/SectionHeader";
import IconHelper from "@/components/shared/IconHelper";
import Badge from "@/components/shared/Badge";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeatureGrid() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="All-In-One Solution"
          title="Everything You Need to Scale Your"
          highlightText="WhatsApp Operations"
          subtitle="Built from the ground up for modern marketing, sales, and support teams wanting to leverage WhatsApp at enterprise scale."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GRID_FEATURES.map((item) => (
            <div
              key={item.id}
              className="relative group p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                    <IconHelper name={item.icon} className="w-6 h-6" />
                  </div>
                  {item.badge && (
                    <Badge variant="cyan" className="text-[10px]">
                      {item.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> {item.metrics}
                </span>
                <Link
                  href={item.href || "/features"}
                  className="text-slate-600 hover:text-emerald-700 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform focus:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] rounded px-1.5 py-1"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
