"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface IconHelperProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number;
}

export default function IconHelper({ name, className = "w-5 h-5", size = 20, ...props }: IconHelperProps) {
  // @ts-expect-error - dynamic indexing of Lucide icons
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles;
  return <IconComponent className={className} size={size} {...props} />;
}
