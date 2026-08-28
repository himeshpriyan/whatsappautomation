"use client";

import React from "react";
import { VALUE_PROPS_LIST } from "@/data/features";
import { CheckCircle2 } from "lucide-react";

export default function ValuePropsMarquee() {
  const repeatedProps = [...VALUE_PROPS_LIST, ...VALUE_PROPS_LIST, ...VALUE_PROPS_LIST];

  return (
    <div className="py-6 bg-emerald-50/70 border-y border-emerald-200/60 relative overflow-hidden">
      {/* Side gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {repeatedProps.map((prop, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{prop}</span>
            <span className="text-slate-300 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
