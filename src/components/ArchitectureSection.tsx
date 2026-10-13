"use client";

import React, { useState } from "react";
import { architectureLayers, panelItems, requestFlowSteps } from "@/data/architectureData";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  ShieldAlert, 
  Workflow, 
  ChevronRight, 
  Info,
  Cpu,
  Layers,
  Terminal,
  ArrowDown,
  ArrowRight
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
          titlePart1="THE SYSTEM"
          titlePart2="PIPELINE."
          description="Accurate architectural breakdown: Arch Linux foundation, Hyprland Wayland compositor, native Rust GTK4 desktop shell (15 crates), and bounded local AI inference."
        />

        {/* 1. Request Flow & Inference Pipeline Diagram (Exact Prompt Flow) */}
        <div className="mb-14 border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#FFFFFF]/20 gap-2">
            <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#FF5A1F]" />
              <span>REQUEST FLOW &amp; LOCAL INFERENCE ARCHITECTURE</span>
            </div>
            <span className="font-mono text-[11px] text-[#FFFFFF]/60">
              LOOPBACK PORT BINDINGS // 127.0.0.1:8000 &amp; 127.0.0.1:11434
            </span>
          </div>

          {/* Visual Step-by-Step Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
            
            {/* Box 1: Rust/GTK4 Top-Panel */}
            <div className="border-2 border-[#FFFFFF]/30 bg-[#141414] p-4 flex flex-col justify-between space-y-3 relative">
              <div className="space-y-1">
                <div className="text-[10px] text-[#FF5A1F] font-bold uppercase">ENTRYPOINT</div>
                <div className="font-black text-sm text-[#FFFFFF]">Rust/GTK4 Top-Panel</div>
                <div className="text-[11px] text-[#FFFFFF]/70 font-sans">
                  Native Ask GURUOS text entry in panel triggers HTTP request on Enter.
                </div>
              </div>
              <div className="text-[10px] text-[#FF9B42]">Wayland Layer-Shell</div>
            </div>

            {/* Box 2: Python AI Backend */}
            <div className="border-2 border-[#FF5A1F] bg-[#1a1410] p-4 flex flex-col justify-between space-y-3 relative">
              <div className="space-y-1">
                <div className="text-[10px] text-[#FF5A1F] font-bold uppercase">DISPATCHER DAEMON</div>
                <div className="font-black text-sm text-[#FFFFFF]">Python AI Backend</div>
                <div className="text-[11px] text-[#FFFFFF]/70 font-sans">
                  FastAPI service on <code>127.0.0.1:8000</code> (/v1/agent, /v1/chat).
                </div>
              </div>
              <div className="text-[10px] text-[#FF5A1F]">Port 8000 (Localhost)</div>
            </div>

            {/* Box 3: Request Validation */}
            <div className="border-2 border-[#FFFFFF]/30 bg-[#141414] p-4 flex flex-col justify-between space-y-3 relative">
              <div className="space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase">SECURITY GATE</div>
                <div className="font-black text-sm text-[#FFFFFF]">Request Validation</div>
                <div className="text-[11px] text-[#FFFFFF]/70 font-sans">
                  Structured Pydantic schema validation rejects arbitrary execution.
                </div>
              </div>
              <div className="text-[10px] text-emerald-400">Strict Sanitization</div>
            </div>

            {/* Box 4: Agent Dispatcher & Tool Registry */}
            <div className="border-2 border-[#FFFFFF]/30 bg-[#141414] p-4 flex flex-col justify-between space-y-3 relative">
              <div className="space-y-1">
                <div className="text-[10px] text-[#FF9B42] font-bold uppercase">BOUNDED EXECUTION</div>
                <div className="font-black text-sm text-[#FFFFFF]">Allow-Listed Tools</div>
                <div className="text-[11px] text-[#FFFFFF]/70 font-sans">
                  Maps approved commands: system stats, git log, file search, service logs.
                </div>
              </div>
              <div className="text-[10px] text-[#FF9B42]">Read-Only Dev Scopes</div>
            </div>

            {/* Box 5: Ollama Local Inference */}
            <div className="border-2 border-[#FF5A1F] bg-[#141414] p-4 flex flex-col justify-between space-y-3 relative">
              <div className="space-y-1">
                <div className="text-[10px] text-[#FF5A1F] font-bold uppercase">INFERENCE ENGINE</div>
                <div className="font-black text-sm text-[#FFFFFF]">Ollama (:11434)</div>
                <div className="text-[11px] text-[#FFFFFF]/70 font-sans">
                  Runs <code>os-agent</code> model (Qwen2.5-3B-Instruct quantized).
                </div>
              </div>
              <div className="text-[10px] text-[#FF5A1F]">Local CPU/GPU Execution</div>
            </div>

          </div>

          {/* Additional System Interconnects Bar */}
          <div className="pt-3 border-t border-[#FFFFFF]/15 grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-[11px] text-[#FFFFFF]/80">
            <div className="bg-[#141414] p-2.5 border border-[#FFFFFF]/10">
              <span className="text-[#FF5A1F] font-bold">• Hyprland IPC: </span>
              <span>UNIX domain sockets for real-time workspace button synchronization.</span>
            </div>
            <div className="bg-[#141414] p-2.5 border border-[#FFFFFF]/10">
              <span className="text-[#FF5A1F] font-bold">• D-Bus System Bus: </span>
              <span>UPower asynchronous battery state discovery &amp; SwayNC notification dispatch.</span>
            </div>
            <div className="bg-[#141414] p-2.5 border border-[#FFFFFF]/10">
              <span className="text-[#FF5A1F] font-bold">• SSE Note: </span>
              <span>Current API emits an SSE-shaped response; token live streaming is pending verification.</span>
            </div>
          </div>
        </div>

        {/* 2. Four-Layer Stack Inspection Selector */}
        <div className="mb-12 bg-[#F5F3EF] border-3 border-[#0A0A0A] p-4 sm:p-6 brutal-shadow-lg">
          <div className="font-mono text-xs text-[#0A0A0A] font-bold uppercase mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>THE 4 SYSTEM LAYERS (CLICK TO INSPECT)</span>
            </span>
            <span className="text-[#0A0A0A]/60 hidden sm:inline text-[11px]">
              DATA FLOW: BASE → COMPOSITOR → SHELL → AI
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
                      ? "bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A] brutal-shadow"
                      : "bg-[#FFFFFF] text-[#0A0A0A] border-[#0A0A0A] hover:bg-[#F5F3EF]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                    <span className={`font-black ${isSelected ? "text-[#FF5A1F]" : "text-[#FF5A1F]"}`}>
                      0{l.level}
                    </span>
                    <span className={`text-[10px] uppercase font-bold ${isSelected ? "text-[#FFFFFF]/70" : "text-[#0A0A0A]/60"}`}>
                      {l.tag.split(" // ")[1]}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-base sm:text-lg uppercase leading-tight mb-1">
                    {l.shortTitle}
                  </h3>

                  <div className={`font-mono text-[11px] truncate ${isSelected ? "text-[#FFFFFF]/75" : "text-[#0A0A0A]/70"}`}>
                    {l.protocol}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Layer Inspection Card */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg mb-16 space-y-6">
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

          <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-medium leading-relaxed font-sans">
            {selected.description}
          </p>

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

          <div className="p-4 bg-[#F5F3EF] border-l-4 border-[#FF5A1F] border-t border-r border-b border-[#0A0A0A] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
            <div className="font-mono text-xs text-[#0A0A0A]/85 leading-relaxed">
              {selected.disclaimer}
            </div>
          </div>
        </div>

        {/* 3. Deep Dive: 15 Rust Workspace Crates */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 brutal-shadow mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-4 gap-3">
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
                RUST 2021 WORKSPACE ARCHITECTURE // 15 DECLARED MEMBERS
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
                Modular Shell Crates
              </h3>
            </div>
            <p className="font-mono text-xs text-[#0A0A0A]/70 max-w-md">
              Stack: Rust 2021, GTK4, libadwaita, gtk4-layer-shell, tokio, serde, tracing, zbus, futures. Implementation completeness varies across crates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {siteConfig.rustWorkspace.map((crateMember) => (
              <div
                key={crateMember.name}
                className="border-2 border-[#0A0A0A] p-3.5 bg-[#FAF9F6] flex flex-col justify-between space-y-2 hover:bg-[#F5F3EF] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-1 border-b border-[#0A0A0A]/10">
                    <span className="font-bold text-xs text-[#0A0A0A]">
                      crate: {crateMember.name}
                    </span>
                    <StatusBadge status={crateMember.status} />
                  </div>
                  <p className="text-[11px] text-[#0A0A0A]/75 font-sans pt-1 leading-relaxed">
                    {crateMember.description}
                  </p>
                </div>
                <div className="pt-1.5 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/50 flex justify-between">
                  <span>MEMBER</span>
                  <span className="text-[#FF5A1F] font-bold">RUST 2021</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. The 9 Primary Top Panel Components */}
        <div className="border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 brutal-shadow-orange-lg space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FFFFFF]/20 pb-4 gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
                LAYER 03 INTEGRATION // TOP-PANEL SURFACE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#FFFFFF] tracking-tight">
                The 9 Native Panel Components
              </h3>
            </div>
            <p className="font-mono text-xs text-[#FFFFFF]/70 max-w-md">
              Custom top panel rendered via gtk4-layer-shell. Each element connects to a native subsystem or helper application.
            </p>
          </div>

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
        </div>

      </div>
    </section>
  );
};
