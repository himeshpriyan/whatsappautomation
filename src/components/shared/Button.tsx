"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  arrow?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isExternal?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  isExternal = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold shadow-lg",
    xl: "text-lg px-8 py-4 gap-3 font-bold shadow-xl",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-semibold shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:shadow-[0_0_32px_rgba(37,211,102,0.6)] hover:scale-[1.02] active:scale-[0.98] border border-[#25D366]/40",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-transparent text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10 hover:border-emerald-400 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    glass:
      "bg-[#0F172A]/80 hover:bg-[#1E293B]/90 text-slate-200 border border-white/10 backdrop-blur-xl shadow-lg hover:border-emerald-500/40 hover:text-white",
    danger: "bg-red-600/80 hover:bg-red-600 text-white border border-red-500/30 shadow-md",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {arrow && (
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-current" />
          )}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
