"use client";

import React from "react";
import { SparkIcon } from "./icons/SparkIcon";
import { Cpu, Terminal, Shield, Check, Clock } from "lucide-react";

export const SystemRequirements: React.FC = () => {
  const specs = [
    {
      spec: "Architecture",
      value: "x86_64",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Base",
      value: "Arch Linux",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Desktop environment",
      value: "Hyprland",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Display protocol",
      value: "Wayland",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Desktop shell",
      value: "Native GTK4-based shell",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Installation method",
      value: "Follow release-specific instructions",
      status: "Verified",
      isUnverified: false,
    },
    {
      spec: "Hardware requirements",
      value: "To be confirmed for the selected release",
      status: "To be confirmed",
      isUnverified: true,
    },
  ];

  return (
    <section id="specs" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-[#0A0A0A] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#FF5A1F] mb-2">
              <SparkIcon className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>SECTION 07 // TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#0A0A0A]">
              SYSTEM <span className="text-[#FF5A1F]">SPECIFICATIONS.</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-[#0A0A0A]/70 font-medium">
            Brutalist technical audit. Verified parameters are distinguished from specifications pending active testing.
          </p>
        </div>

        {/* Compact Brutalist Technical Specification Table */}
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
            {specs.map((row, index) => (
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
                  <span className={row.isUnverified ? "text-[#0A0A0A]/70 italic" : "font-bold text-[#0A0A0A]"}>
                    {row.value}
                  </span>
                </div>

                {/* Verification Status (2 cols) */}
                <div className="sm:col-span-2 flex sm:justify-end">
                  {row.isUnverified ? (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-[#0A0A0A] bg-[#F5F3EF] text-[#FF5A1F]">
                      <Clock className="w-3 h-3 text-[#FF5A1F]" />
                      <span>TO BE CONFIRMED</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF]">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>CONFIRMED</span>
                    </span>
                  )}
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
