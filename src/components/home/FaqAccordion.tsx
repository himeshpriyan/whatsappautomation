"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/shared/Button";

export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Pricing", "API & Setup", "Features"];

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQS_DATA
      : FAQS_DATA.filter((faq) => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Got Questions?"
          title="Frequently Asked"
          highlightText="Questions"
          subtitle="Everything you need to know about Zecsoft, WhatsApp Business API rules, green tick verification, and billing."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                  : "bg-[#0F172A] text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0F172A]/80 border border-white/10 overflow-hidden transition-all duration-200 hover:border-emerald-500/30"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#25D366]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1120] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a custom question or enterprise setup?</h4>
              <p className="text-xs text-slate-400">Our solution engineers are available 24/7 on WhatsApp.</p>
            </div>
          </div>
          <Button href="/contact" variant="outline" size="sm" arrow>
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
