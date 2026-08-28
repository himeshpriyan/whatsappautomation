"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "cyan" | "gold" | "slate" | "outline";
  className?: string;
  icon?: React.ReactNode;
  pulse?: boolean;
}

export default function Badge({
  children,
  variant = "emerald",
  className,
  icon,
  pulse = false,
}: BadgeProps) {
  const variantStyles = {
    emerald:
      "bg-emerald-50 text-emerald-800 border-emerald-200 shadow-sm",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200 shadow-sm",
    gold: "bg-amber-50 text-amber-900 border-amber-200 shadow-sm",
    slate: "bg-slate-100 text-slate-700 border-slate-200 shadow-sm",
    outline: "bg-white text-slate-700 border-slate-300 shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md select-none",
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
