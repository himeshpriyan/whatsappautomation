"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface SectionHeaderProps {
  kicker?: string;
  kickerIcon?: React.ReactNode;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  kicker,
  kickerIcon,
  title,
  highlightText,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const alignClass = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass, className)}>
      {kicker && (
        <div className="mb-4">
          <Badge variant="emerald" icon={kickerIcon} pulse>
            {kicker}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]",
          titleClassName
        )}
      >
        {title}{" "}
        {highlightText && (
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
