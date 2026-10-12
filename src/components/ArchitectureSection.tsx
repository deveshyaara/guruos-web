"use client";

import React, { useState } from "react";
import { architectureLayers, panelItems } from "@/data/architectureData";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  ShieldAlert, 
  Workflow, 
  ChevronRight, 
  Info 
} from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(3); // Default to Layer 3 (Native Shell)

  const selected = architectureLayers.find((l) => l.level === activeLayer) || architectureLayers[2];

  return (
    <section id="architecture" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Section Header */}
        <SectionHeader
          sectionNumber="03"
          categoryTag="DESKTOP ARCHITECTURE"
          titlePart1="THE FOUR"
          titlePart2="LAYERS."
          description="Accurate architectural breakdown: Arch Linux foundation, Hyprland Wayland compositor, native Rust GTK4 desktop shell, and experimental Ask GURUOS AI workflow."
        />

        {/* Technical Architectural Flow Banner (Visual 4-Stage Hierarchy) */}
        <div className="mb-12 bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] p-4 sm:p-6 brutal-shadow-lg">
          <div className="font-mono text-xs text-[#FF5A1F] font-bold uppercase mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#FF5A1F]" />
              SYSTEM PIPELINE ARCHITECTURE (STACK DIAGRAM)
            </span>
            <span className="text-[#FFFFFF]/50 hidden sm:inline text-[11px]">
              DATA FLOW: BASE → COMPOSITOR → SHELL → WORKFLOW
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {architectureLayers.map((l, idx) => {
              const isSelected = activeLayer === l.level;
              return (
                <button
                  key={l.level}
                  type="button"
                  onClick={() => setActiveLayer(l.level)}
                  className={`text-left p-4 border-2 transition-all cursor-pointer relative ${
                    isSelected
                      ? "bg-[#FFFFFF] text-[#0A0A0A] border-[#FF5A1F] brutal-shadow-orange"
                      : "bg-[#141414] text-[#FFFFFF] border-[#FFFFFF]/20 hover:border-[#FF5A1F]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                    <span className={`font-black ${isSelected ? "text-[#FF5A1F]" : "text-[#FF9B42]"}`}>
                      0{l.level}
                    </span>
                    <span className="text-[10px] uppercase font-bold opacity-75">
                      {l.tag.split(" // ")[1]}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-base sm:text-lg uppercase leading-tight mb-1">
                    {l.shortTitle}
                  </h3>

                  <div className="font-mono text-[11px] opacity-75 truncate">
                    {l.protocol}
                  </div>

                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#FF5A1F]">
                      <ChevronRight className="w-5 h-5 bg-[#0A0A0A]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Layer Inspection Card */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg mb-16 space-y-6">
          {/* Layer Title Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b-2 border-[#0A0A0A] gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
                {`LAYER 0${selected.level} SPECIFICATION // ${selected.tag}`}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
                {selected.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#0A0A0A]/60 font-bold uppercase">CONNECTS TO:</span>
              <span className="bg-[#0A0A0A] text-[#FFFFFF] font-bold px-2.5 py-1 uppercase text-[11px]">
                {selected.flowTarget}
              </span>
            </div>
          </div>

          {/* Layer Narrative */}
          <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-medium leading-relaxed">
            {selected.description}
          </p>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {selected.components.map((comp) => (
              <div key={comp.label} className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-4 font-mono text-xs space-y-1">
                <div className="font-bold text-[#FF5A1F] uppercase text-[11px]">
                  {comp.label}
                </div>
                <div className="font-bold text-[#0A0A0A]">
                  {comp.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Factual Disclaimer Banner */}
          <div className="p-4 bg-[#F5F3EF] border-l-4 border-[#FF5A1F] border-t border-r border-b border-[#0A0A0A] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
            <div className="font-mono text-xs text-[#0A0A0A]/85 leading-relaxed">
              {selected.disclaimer}
            </div>
          </div>
        </div>

        {/* Layer 3 Special Detail: The 9 Primary Top Panel Components */}
        <div className="border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 brutal-shadow-orange-lg space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FFFFFF]/20 pb-4 gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
                LAYER 03 DEEP DIVE // PRIMARY PANEL ARCHITECTURE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#FFFFFF] tracking-tight">
                The 9 Native Panel Components
              </h3>
            </div>
            <p className="font-mono text-xs text-[#FFFFFF]/70 max-w-md">
              A custom desktop panel written in Rust using GTK4, libadwaita, and gtk4-layer-shell. Each item has explicit development status.
            </p>
          </div>

          {/* 9 Component Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {panelItems.map((item) => (
              <div 
                key={item.index} 
                className="border-2 border-[#FFFFFF]/20 bg-[#141414] p-4 hover:border-[#FF5A1F] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#FF5A1F] font-bold">
                      PANEL_0{item.index}
                    </span>
                    <StatusBadge status={item.status} />
                  </div>

                  <h4 className="font-sans font-black text-base text-[#FFFFFF] uppercase">
                    {item.title}
                  </h4>

                  <p className="font-mono text-xs text-[#FFFFFF]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#FFFFFF]/10 font-mono text-[10px] text-[#FFFFFF]/50 flex items-center justify-between">
                  <span>STATUS: {item.status.toUpperCase()}</span>
                  <span className="text-[#FF5A1F]">GTK4 LAYER</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Note on Panel Integrity */}
          <div className="bg-[#181818] border border-[#FFFFFF]/20 p-4 font-mono text-xs text-[#FFFFFF]/80 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Technical Honesty Note:</strong> Features are not marked as completed merely because an icon or UI stub exists in the panel. Network launches <code>nm-connection-editor</code>, audio launches <code>pavucontrol</code>, battery uses asynchronous UPower discovery, notifications run through SwayNC, and Bluetooth is marked In Progress due to absence of active BlueZ in the documented development snapshot.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
