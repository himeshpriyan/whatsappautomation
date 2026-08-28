"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS, REVIEW_PLATFORMS } from "@/data/testimonials";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { Star, Quote, Info } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Customer Success Stories"
          title="Loved by Growth Leaders &"
          highlightText="E-Commerce Founders"
          subtitle="Discover how modern businesses scale revenues and achieve faster support resolutions with WhatsApp automation."
        />

        {/* Illustrative Disclaimer Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 -mt-6">
          <Badge variant="slate" icon={<Info className="w-3 h-3 text-cyan-700" />}>
            Sample Customer Story — Illustrative Use Cases
          </Badge>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative group p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <Quote className="w-12 h-12 text-slate-100 absolute top-6 right-6 pointer-events-none group-hover:text-emerald-50 transition-colors" />

              <div>
                {/* Rating & Industry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Badge variant="emerald" className="text-[10px]">
                    {item.industry}
                  </Badge>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Highlight metric stat box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-6">
                  <span className="text-xs text-slate-500 font-medium">{item.stats.label}</span>
                  <span className="text-sm font-extrabold text-emerald-600">{item.stats.value}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0 shadow-xs">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">
                      {item.role}, <span className="text-emerald-700 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platform Badges */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto shadow-xs">
          <div className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-4">
            Platform Satisfaction Benchmarks (Illustrative Example)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {REVIEW_PLATFORMS.map((platform) => (
              <div key={platform.name} className="space-y-1">
                <div className="text-xs text-slate-500 font-semibold">{platform.name}</div>
                <div className="text-lg font-black text-slate-900 flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  {platform.rating}
                </div>
                <div className="text-[11px] text-emerald-700 font-bold">{platform.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
