import React from "react";
import { FeatureStatus } from "@/types";
import { CheckCircle2, Sparkles, Hourglass, CalendarClock, AlertTriangle } from "lucide-react";

export interface StatusBadgeProps {
  status: FeatureStatus | string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = "" }) => {
  switch (status) {
    case "Implemented":
    case "Verified":
    case "Confirmed":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 bg-[#0A0A0A] text-emerald-400 border border-[#0A0A0A] ${className}`}
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>{status === "Verified" || status === "Confirmed" ? "CONFIRMED" : "IMPLEMENTED"}</span>
        </span>
      );
    case "Experimental":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 bg-[#FF5A1F] text-[#0A0A0A] border border-[#0A0A0A] ${className}`}
        >
          <Sparkles className="w-3 h-3 text-[#0A0A0A]" />
          <span>EXPERIMENTAL</span>
        </span>
      );
    case "In Progress":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 bg-[#FF9B42] text-[#0A0A0A] border border-[#0A0A0A] ${className}`}
        >
          <Hourglass className="w-3 h-3 text-[#0A0A0A]" />
          <span>IN PROGRESS</span>
        </span>
      );
    case "Planned":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 bg-[#FFFFFF] text-[#0A0A0A] border-2 border-[#0A0A0A] ${className}`}
        >
          <CalendarClock className="w-3 h-3 text-[#0A0A0A]" />
          <span>PLANNED</span>
        </span>
      );
    case "Unverified":
    case "To be confirmed":
    default:
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 bg-[#F5F3EF] text-[#FF5A1F] border-2 border-[#FF5A1F] ${className}`}
        >
          <AlertTriangle className="w-3 h-3 text-[#FF5A1F]" />
          <span>{status === "To be confirmed" ? "TO BE CONFIRMED" : "UNVERIFIED"}</span>
        </span>
      );
  }
};
