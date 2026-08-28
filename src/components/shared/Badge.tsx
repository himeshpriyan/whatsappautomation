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
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    gold: "bg-amber-500/10 text-amber-300 border-amber-500/25 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    slate: "bg-slate-800/80 text-slate-300 border-slate-700/50",
    outline: "bg-transparent text-slate-300 border-white/15",
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
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
