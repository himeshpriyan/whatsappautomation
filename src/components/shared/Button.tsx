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
    sm: "text-xs px-3.5 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold shadow-md",
    xl: "text-lg px-8 py-4 gap-3 font-bold shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] border border-[#25D366]",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm hover:border-slate-400 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    glass:
      "bg-white/90 hover:bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md",
    danger: "bg-red-600 hover:bg-red-700 text-white shadow-sm",
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
