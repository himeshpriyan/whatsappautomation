"use client";

import React from "react";
import { TRUSTED_BRANDS } from "@/data/features";
import { Building2, Sparkles } from "lucide-react";

export default function LogoMarquee() {
  // Duplicate array to enable seamless infinite scroll
  const marqueeItems = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="py-12 border-y border-white/10 bg-[#070B14]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
          Trusted by 500+ Innovative Fast-Growing Brands & Enterprise Leaders
        </p>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070B14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070B14] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all duration-300 group cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-black text-emerald-400 group-hover:text-white group-hover:border-emerald-500/50 transition-colors">
                {brand.logo.slice(0, 2)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">{brand.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
