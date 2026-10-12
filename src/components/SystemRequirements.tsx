import React from "react";
import { systemSpecifications } from "@/data/specificationsData";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";

export const SystemRequirements: React.FC = () => {
  return (
    <section id="specs" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="06"
          categoryTag="TECHNICAL SPECIFICATIONS"
          titlePart1="SYSTEM"
          titlePart2="SPECIFICATIONS."
          description="Brutalist technical audit. Verified parameters are distinguished from specifications pending active testing."
        />

        {/* Technical Specification Table */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] brutal-shadow-lg overflow-hidden">
          
          {/* Table Header Row */}
          <div className="bg-[#0A0A0A] text-[#FFFFFF] px-6 py-3.5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>CORE ARCHITECTURAL MATRIX</span>
            </div>
            <div className="hidden sm:block text-[#FFFFFF]/50 text-[11px]">
              AUDIT PROTOCOL: X86_64 // ARCH-WAYLAND
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-[#0A0A0A]">
            {systemSpecifications.map((row, index) => (
              <div
                key={row.spec}
                className={`grid grid-cols-1 sm:grid-cols-12 px-6 py-4 items-center transition-colors hover:bg-[#F5F3EF] ${
                  index % 2 === 1 ? "bg-[#FAF9F6]" : "bg-[#FFFFFF]"
                }`}
              >
                {/* Specification Name (5 cols) */}
                <div className="sm:col-span-5 font-mono text-xs sm:text-sm font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
                  <span className="text-[#FF5A1F] font-mono text-xs">{(index + 1).toString().padStart(2, '0')}.</span>
                  <span>{row.spec}</span>
                </div>

                {/* Value (5 cols) */}
                <div className="sm:col-span-5 font-mono text-xs sm:text-sm text-[#0A0A0A] py-1 sm:py-0">
                  <span className={row.type === "unverified" ? "text-[#0A0A0A]/70 italic" : "font-bold text-[#0A0A0A]"}>
                    {row.value}
                  </span>
                </div>

                {/* Verification Status (2 cols) */}
                <div className="sm:col-span-2 flex sm:justify-end">
                  <StatusBadge status={row.status} />
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Banner */}
          <div className="bg-[#F5F3EF] px-6 py-4 border-t-2 border-[#0A0A0A] font-mono text-xs text-[#0A0A0A]/80 space-y-1">
            <div className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#FF5A1F]" />
              <span>TESTING CRITERIA HONESTY CLAUSE</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              We deliberately refrain from publishing unverified RAM, CPU tier, discrete GPU, storage, or Secure Boot benchmarks until they have completed testing across our hardware test matrix.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
