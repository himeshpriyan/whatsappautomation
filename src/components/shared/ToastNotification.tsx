"use client";

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function ToastNotification({
  type,
  message,
  isOpen,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl max-w-md ${
          type === "success"
            ? "bg-[#0B1528]/95 border-emerald-500/50 text-white"
            : type === "error"
            ? "bg-[#280B11]/95 border-rose-500/50 text-white"
            : "bg-[#0F172A]/95 border-cyan-500/50 text-white"
        }`}
      >
        {type === "success" && <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />}
        {type === "error" && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {type === "info" && <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />}

        <span className="text-sm font-medium">{message}</span>

        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1 focus:outline-none"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
