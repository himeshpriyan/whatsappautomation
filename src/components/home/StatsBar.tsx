"use client";

import React from "react";
import { STATS_ITEMS } from "@/data/features";
import IconHelper from "@/components/shared/IconHelper";
import Badge from "@/components/shared/Badge";

export default function StatsBar() {
  return (
    <section className="py-16 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="emerald" className="mb-3">
            Industry Benchmark Comparison
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why High-Growth Businesses are Switching to WhatsApp
          </h3>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_ITEMS.map((stat) => (
            <div
              key={stat.id}
              className="relative group p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-slate-950 transition-colors">
                  <IconHelper name={stat.icon} className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                  {stat.growth}
                </span>
              </div>

              {/* Bold Number */}
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2 flex items-baseline">
                {stat.prefix}
                <span className="text-slate-900">
                  {stat.value}
                </span>
                <span className="text-emerald-600 text-3xl font-extrabold ml-0.5">{stat.suffix}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900">{stat.label}</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
