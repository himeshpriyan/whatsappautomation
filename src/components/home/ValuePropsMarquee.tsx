"use client";

import React from "react";
import { VALUE_PROPS_LIST } from "@/data/features";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function ValuePropsMarquee() {
  const repeatedProps = [...VALUE_PROPS_LIST, ...VALUE_PROPS_LIST, ...VALUE_PROPS_LIST];

  return (
    <div className="py-6 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-emerald-950/40 border-y border-emerald-500/20 relative overflow-hidden">
      {/* Side gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090D16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090D16] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {repeatedProps.map((prop, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>{prop}</span>
            <span className="text-slate-600 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
