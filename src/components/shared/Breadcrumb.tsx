"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs text-slate-400 mb-8 ${className}`}>
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only sm:not-sr-only">Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none focus:outline-none focus-visible:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-emerald-400 font-semibold truncate max-w-[180px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
