"use client";

import React from "react";
import { STATS_ITEMS } from "@/data/features";
import IconHelper from "@/components/shared/IconHelper";
import Badge from "@/components/shared/Badge";

export default function StatsBar() {
  return (
    <section className="py-16 relative bg-gradient-to-b from-[#070B14] via-[#0B1120] to-[#070B14] border-y border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-[#25D366]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="emerald" className="mb-3">
            Industry Benchmark Comparison
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why High-Growth Businesses are Switching to WhatsApp
          </h3>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_ITEMS.map((stat) => (
            <div
              key={stat.id}
              className="relative group p-6 sm:p-8 rounded-2xl bg-[#0F172A]/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Subtle hover top accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-500 to-transparent transition-all duration-500" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-black transition-colors">
                  <IconHelper name={stat.icon} className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  {stat.growth}
                </span>
              </div>

              {/* Bold Number */}
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 flex items-baseline">
                {stat.prefix}
                <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[#25D366] text-3xl font-extrabold ml-0.5">{stat.suffix}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-200">{stat.label}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
