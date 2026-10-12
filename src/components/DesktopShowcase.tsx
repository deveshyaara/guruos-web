"use client";

import React, { useState } from "react";
import { SparkIcon } from "./icons/SparkIcon";
import { BrutalFlame } from "./icons/BrutalFlame";
import { 
  Terminal, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Volume2, 
  Search, 
  ArrowRight, 
  Sparkles,
  Maximize2,
  CheckCircle2
} from "lucide-react";

export const DesktopShowcase: React.FC = () => {
  const [activePrompt, setActivePrompt] = useState<string>(
    "Reorganize workspace: split terminal left and open Neovim with Rust LSP"
  );
  const [activeOutput, setActiveOutput] = useState<{
    action: string;
    detail: string;
    status: string;
  }>({
    action: "Hyprland dispatch exec [workspace 1] alacritty -e nvim",
    detail: "Arranged tiling layout: 60/40 horizontal split. Rust analyzer initialized.",
    status: "COMPLETED (42ms)",
  });

  const promptPresets = [
    {
      label: "Rust Dev Layout",
      prompt: "Reorganize workspace: split terminal left and open Neovim with Rust LSP",
      action: "hyprctl dispatch workspace 1; splitv; alacritty -e nvim",
      detail: "Configured dual pane tiling. Wayland scale 1.0. Zero frame latency.",
      status: "EXECUTED",
    },
    {
      label: "Diagnose Network",
      prompt: "Check network connectivity and ping Arch Linux mirrors",
      action: "guru-net --check-mirrors --rank-by-speed",
      detail: "Mirror rank updated: Fastest mirror selected (latency 14ms).",
      status: "VERIFIED",
    },
    {
      label: "Fire Brutal Theme",
      prompt: "Switch desktop shell accent to High-Contrast Fire Orange",
      action: "gtk4-theme-daemon --set-accent '#FF5A1F' --borders heavy",
      detail: "Applied #FF5A1F accents across GTK4 panel, Wayland borders, and Alacritty.",
      status: "APPLIED",
    },
    {
      label: "AUR Packages Status",
      prompt: "List recently updated AUR packages and system kernel version",
      action: "pacman -Qe; uname -r",
      detail: "Arch Linux 6.12.1-arch1-1-zen // 12 packages up-to-date.",
      status: "READY",
    },
  ];

  const handleSelectPreset = (preset: (typeof promptPresets)[0]) => {
    setActivePrompt(preset.prompt);
    setActiveOutput({
      action: preset.action,
      detail: preset.detail,
      status: preset.status,
    });
  };

  return (
    <section id="showcase" className="relative bg-[#0A0A0A] text-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A] overflow-hidden">
      {/* Background dark grid lines */}
      <div className="absolute inset-0 bg-grid-lines-dark pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#FFFFFF]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#FF5A1F] mb-2">
              <SparkIcon className="w-3.5 h-3.5" color="#FF5A1F" />
              <span>SECTION 04 // DESKTOP INTERFACE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#FFFFFF]">
              TAKE A LOOK <span className="text-[#FF5A1F]">INSIDE.</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-[#FFFFFF]/70">
            A preview of the imagined GuruOS desktop experience. Built for keyboard-driven focus, Wayland precision, and immediate system feedback.
          </p>
        </div>

        {/* Large Desktop Mockup Stage */}
        <div className="border-3 border-[#FFFFFF]/30 bg-[#121212] brutal-shadow-orange-lg overflow-hidden">
          
          {/* Top Panel (Native GTK4 Shell Bar) */}
          <div className="bg-[#181818] border-b-2 border-[#0A0A0A] px-4 py-2.5 flex items-center justify-between font-mono text-xs select-none">
            
            {/* Left: Brand and Workspace Selectors */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-black text-sm text-[#FFFFFF] tracking-tight">
                <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
                <span>GURUOS</span>
              </div>
              <div className="h-4 w-[1px] bg-[#FFFFFF]/20" />
              <div className="flex items-center gap-1 font-bold text-[11px]">
                <span className="px-2 py-0.5 bg-[#FF5A1F] text-[#0A0A0A]">1:MAIN</span>
                <span className="px-2 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80 hover:bg-[#FFFFFF]/20 cursor-pointer">2:CODE</span>
                <span className="px-2 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80 hover:bg-[#FFFFFF]/20 cursor-pointer">3:TERM</span>
                <span className="px-2 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80 hover:bg-[#FFFFFF]/20 cursor-pointer">4:MEDIA</span>
              </div>
            </div>

            {/* Center: Active Window Title */}
            <div className="hidden md:flex items-center gap-2 text-[#FFFFFF]/80 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>alacritty — guru@arch-box: ~</span>
            </div>

            {/* Right: System Status Tray */}
            <div className="flex items-center gap-4 text-[11px] text-[#FFFFFF]/80 font-mono">
              <span className="hidden sm:inline flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-[#FF5A1F]" /> 12%
              </span>
              <span className="hidden sm:inline flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-[#FF9B42]" /> 2.1 GB
              </span>
              <span className="flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-[#FF5A1F]" /> 5G
              </span>
              <span className="font-bold text-[#FFFFFF]">10:47 AM</span>
            </div>
          </div>

          {/* Desktop Desktop Workspace Interior */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#0D0D0D] space-y-6">
            
            {/* Ask GURUOS Spotlight / HUD Component */}
            <div className="max-w-3xl mx-auto border-2 border-[#FF5A1F] bg-[#16120F] p-4 sm:p-5 brutal-shadow-orange">
              <div className="flex items-center justify-between border-b border-[#FF5A1F]/30 pb-3 mb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF9B42] uppercase tracking-wider">
                  <SparkIcon className="w-4 h-4 text-[#FF5A1F]" />
                  <span>ASK GURUOS // AI DESKTOP HUD</span>
                </div>
                <span className="font-mono text-[10px] bg-[#FF5A1F] text-[#0A0A0A] font-bold px-2 py-0.5 uppercase">
                  SIMULATION MODE
                </span>
              </div>

              {/* Natural language input bar */}
              <div className="flex items-center gap-3 bg-[#0A0A0A] border border-[#FFFFFF]/20 p-3">
                <Search className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                <input
                  type="text"
                  value={activePrompt}
                  onChange={(e) => setActivePrompt(e.target.value)}
                  className="bg-transparent border-none text-[#FFFFFF] text-xs sm:text-sm font-mono w-full focus:outline-none"
                  placeholder="Type a system command or natural language instruction..."
                />
                <span className="shrink-0 font-mono text-[10px] bg-[#FFFFFF]/10 text-[#FFFFFF]/70 px-2 py-1 border border-[#FFFFFF]/20">
                  RETURN ↵
                </span>
              </div>

              {/* Sample Quick Action Presets */}
              <div className="pt-3">
                <div className="text-[10px] font-mono uppercase text-[#FFFFFF]/50 mb-2">
                  Try asking a preset system command:
                </div>
                <div className="flex flex-wrap gap-2">
                  {promptPresets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`text-[11px] font-mono px-2.5 py-1 border transition-all cursor-pointer ${
                        activePrompt === preset.prompt
                          ? "bg-[#FF5A1F] text-[#0A0A0A] border-[#FF5A1F] font-bold"
                          : "bg-[#1A1A1A] text-[#FFFFFF]/80 border-[#FFFFFF]/20 hover:border-[#FF5A1F]"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Split Tiling Windows: Terminal + System State */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Window 1: Terminal with Active Execution (8 cols) */}
              <div className="lg:col-span-8 border-2 border-[#FFFFFF]/20 bg-[#0A0A0A] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-2 text-[11px] text-[#FFFFFF]/60">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    <span>alacritty — hyprland-client:0</span>
                  </div>
                  <span className="text-[#FF9B42]">SHELL: RUST-GTK4</span>
                </div>

                {/* Simulated live execution log */}
                <div className="space-y-2 text-[11px] sm:text-xs">
                  <div className="text-[#FFFFFF]/50">
                    guruos@machine:~$ <span className="text-[#FFFFFF]">{activeOutput.action}</span>
                  </div>
                  <div className="p-2.5 bg-[#171717] border-l-2 border-[#FF5A1F] text-[#FFFFFF]/90 space-y-1">
                    <div className="text-[#FF9B42] font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                      <span>{activeOutput.status}</span>
                    </div>
                    <div className="text-[#FFFFFF]/80">{activeOutput.detail}</div>
                  </div>
                  <div className="text-[#FF5A1F] pt-2">
                    <span>guruos@machine:~$ </span>
                    <span className="inline-block w-2 h-3.5 bg-[#FF5A1F] animate-cursor-blink align-middle" />
                  </div>
                </div>
              </div>

              {/* Window 2: Hyprland Workspace Monitor (4 cols) */}
              <div className="lg:col-span-4 border-2 border-[#FFFFFF]/20 bg-[#141414] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-2 text-[11px] text-[#FFFFFF]/60">
                  <span>HYPRCTL MONITORS</span>
                  <span className="text-[#FF5A1F]">WAYLAND</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#FFFFFF]/80">
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Output:</span>
                    <span className="font-bold text-[#FFFFFF]">eDP-1 (2560x1600@165Hz)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Scale:</span>
                    <span>1.25x (Integer fractional)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#FFFFFF]/10 pb-1">
                    <span className="text-[#FFFFFF]/50">Window Manager:</span>
                    <span className="text-[#FF9B42]">Hyprland Master</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FFFFFF]/50">Ask Engine:</span>
                    <span className="text-emerald-400 font-bold">READY (LOCAL)</span>
                  </div>
                </div>

                <div className="p-2 bg-[#0A0A0A] border border-[#FF5A1F]/30 text-[10px] text-[#FF9B42]">
                  [HOTKEY] Mod + Space: Toggle Ask GURUOS HUD
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Desktop Showcase Bar */}
          <div className="bg-[#171717] border-t-2 border-[#0A0A0A] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-[#FFFFFF]/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A1F]" />
              <span className="text-[#FFFFFF] font-bold">DESKTOP COMPOSITION PREVIEW</span>
            </div>
            <div className="text-[11px] text-[#FFFFFF]/40 italic">
              [CONCEPT PREVIEW // EXPERIMENTAL GTK4 SHELL DESIGN]
            </div>
          </div>

        </div>

        {/* Three Technical Callouts below preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="border-2 border-[#FFFFFF]/30 bg-[#121212] p-6 brutal-card-hover">
            <div className="font-mono text-xs text-[#FF5A1F] font-bold mb-1">01 // SHELL</div>
            <h3 className="text-xl font-black uppercase text-[#FFFFFF] mb-2">Native GTK4 Shell</h3>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed font-mono">
              Written from the ground up in Rust using GTK4 and Libadwaita. Lightweight, memory-safe, and designed without bloated web runtimes.
            </p>
          </div>

          <div className="border-2 border-[#FFFFFF]/30 bg-[#121212] p-6 brutal-card-hover">
            <div className="font-mono text-xs text-[#FF5A1F] font-bold mb-1">02 // COMPOSITOR</div>
            <h3 className="text-xl font-black uppercase text-[#FFFFFF] mb-2">Hyprland Compositor</h3>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed font-mono">
              Leverages modern Wayland protocols with buttery-smooth physics animations, zero screen tearing, and comprehensive dynamic tiling rules.
            </p>
          </div>

          <div className="border-2 border-[#FFFFFF]/30 bg-[#121212] p-6 brutal-card-hover">
            <div className="font-mono text-xs text-[#FF5A1F] font-bold mb-1">03 // CORE</div>
            <h3 className="text-xl font-black uppercase text-[#FFFFFF] mb-2">Arch Linux Foundation</h3>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed font-mono">
              Unrestricted access to the rolling Arch Linux repositories, cutting-edge kernel patches, and the complete Arch User Repository (AUR).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
