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
    <section className="py-20 lg:py-32 relative">
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
              className="relative group p-6 sm:p-8 rounded-2xl bg-[#0F172A]/70 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-black transition-all duration-300 shadow-md">
                    <IconHelper name={item.icon} className="w-6 h-6" />
                  </div>
                  {item.badge && (
                    <Badge variant="cyan" className="text-[10px]">
                      {item.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {item.metrics}
                </span>
                <Link
                  href="/features"
                  className="text-slate-400 hover:text-white flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform"
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
