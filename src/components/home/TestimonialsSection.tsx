"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS, REVIEW_PLATFORMS } from "@/data/testimonials";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#06B6D4]/5 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Customer Success Stories"
          title="Loved by Growth Leaders &"
          highlightText="E-Commerce Founders"
          subtitle="Discover how fast-growing businesses scale revenues and achieve 5x faster support resolutions with Zecsoft."
        />

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative group p-8 rounded-3xl bg-[#0F172A]/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <Quote className="w-12 h-12 text-white/5 absolute top-6 right-6 pointer-events-none group-hover:text-emerald-500/10 transition-colors" />

              <div>
                {/* Rating & Industry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Badge variant="emerald" className="text-[10px]">
                    {item.industry}
                  </Badge>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Highlight metric stat box */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between mb-6">
                  <span className="text-xs text-slate-400">{item.stats.label}</span>
                  <span className="text-sm font-extrabold text-[#25D366]">{item.stats.value}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-slate-400">
                      {item.role}, <span className="text-emerald-300">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platform Badges */}
        <div className="p-6 rounded-2xl bg-[#090D16] border border-white/10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {REVIEW_PLATFORMS.map((platform) => (
              <div key={platform.name} className="space-y-1">
                <div className="text-xs text-slate-400 font-semibold">{platform.name}</div>
                <div className="text-lg font-black text-white flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {platform.rating}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">{platform.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
