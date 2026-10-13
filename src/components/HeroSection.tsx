"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SparkIcon } from "./icons/SparkIcon";
import { GeometricFireSun } from "./icons/BrutalFlame";
import { ArrowUpRight, ArrowDown, Terminal, Sliders, Disc, ShieldAlert, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "./ui/Button";

export const HeroSection: React.FC = () => {
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  return (
    <section className="relative bg-[#FFFFFF] border-b-2 border-[#0A0A0A] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background subtle technical grid lines */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-60" />

      {/* Floating technical corner coordinates */}
      <div className="hidden xl:flex absolute top-4 left-6 font-mono text-[11px] text-[#0A0A0A]/40 tracking-widest uppercase">
        {"// ARCH-BASED // HYPRLAND (WAYLAND) // RUST GTK4 SHELL // OLLAMA"}
      </div>
      <div className="hidden xl:flex absolute top-4 right-6 font-mono text-[11px] text-[#0A0A0A]/40 tracking-widest uppercase">
        {`COMMIT: ${siteConfig.mainCommit.substring(0, 8)} // AUDIT: ${siteConfig.auditDate}`}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow Label with Spark & Exact Prompt Copy */}
            <div className="inline-flex items-center gap-2 self-start bg-[#0A0A0A] text-[#FFFFFF] px-3 py-1.5 border border-[#0A0A0A] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase brutal-shadow">
              <SparkIcon className="w-3.5 h-3.5" color="#FF5A1F" />
              <span>LOCAL-FIRST AI DESKTOP · EXPERIMENTAL BUILD</span>
            </div>

            {/* Main Headline (Exact Prompt Copy) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[0.92] font-black tracking-tighter uppercase text-[#0A0A0A]">
              <span className="block text-[#0A0A0A]">A DIFFERENT</span>
              <span className="block text-[#FF5A1F] drop-shadow-[2px_2px_0px_#0A0A0A]">KIND OF DESKTOP.</span>
            </h1>

            {/* Tagline & Supporting Paragraph (Exact Prompt Copy) */}
            <div className="space-y-4 max-w-xl">
              <p className="font-mono text-sm sm:text-base font-black text-[#FF5A1F] uppercase tracking-wide">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <p className="text-lg sm:text-xl text-[#0A0A0A] leading-relaxed font-medium">
                {siteConfig.supportingStatement}
              </p>
            </div>

            {/* Brutalist Callouts Bar */}
            <div className="grid grid-cols-3 gap-2 py-2 max-w-lg font-mono text-[11px] sm:text-xs">
              <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-2 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 bg-[#FF5A1F]" />
                <span>ARCH LINUX</span>
              </div>
              <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-2 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 bg-[#FF5A1F]" />
                <span>HYPRLAND</span>
              </div>
              <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-2 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 bg-[#FF5A1F]" />
                <span>RUST GTK4</span>
              </div>
            </div>

            {/* Action Buttons (Three CTAs required by Prompt Section 4) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Primary CTA */}
              <Link
                href="/#explore"
                className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-6 py-4 font-mono text-xs font-black tracking-wider brutal-shadow flex items-center justify-center gap-2"
              >
                <span>EXPLORE GURUOS</span>
                <ArrowDown className="w-4 h-4 ml-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/install"
                className="brutal-btn bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-6 py-4 font-mono text-xs font-black tracking-wider brutal-shadow flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-[#FF5A1F]" />
                <span>CUSTOM INSTALLATION</span>
              </Link>

              {/* Third Action: ISO Status */}
              <button
                type="button"
                onClick={() => setStatusModalOpen(true)}
                className="brutal-btn bg-[#F5F3EF] hover:bg-[#0A0A0A] hover:text-[#FFFFFF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-4 font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-1.5"
              >
                <Disc className="w-4 h-4 text-[#FF5A1F]" />
                <span>ISO STATUS</span>
              </button>
            </div>

            {/* Honest Status Label */}
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#0A0A0A]/80">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F] animate-pulse" />
              <span className="font-bold text-[#0A0A0A]">STATUS:</span>
              <span className="bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 font-bold text-[#FF5A1F]">
                {siteConfig.statusLabel}
              </span>
            </div>
          </div>

          {/* Right Column: Stylized Desktop Composition (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Graphic: Orange Geometric Flame Sun */}
            <div className="absolute -top-10 -right-6 pointer-events-none opacity-85 scale-90 sm:scale-100">
              <GeometricFireSun className="w-80 h-80 sm:w-96 sm:h-96" />
            </div>

            {/* Foreground: Stylized Desktop Mockup Card */}
            <div className="relative w-full max-w-lg bg-[#0A0A0A] border-3 border-[#0A0A0A] text-[#FFFFFF] brutal-shadow-lg z-20">
              
              {/* Window Header / Wayland Top Bar Simulation */}
              <div className="bg-[#171717] px-3 py-2 border-b-2 border-[#0A0A0A] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
                  <span className="font-bold text-[#FF9B42]">guruos-shell</span>
                  <span className="text-[#FFFFFF]/40">{"// hyprland:ws1"}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#FFFFFF]/70">
                  <span className="hidden sm:inline">ARCH X86_64</span>
                  <span className="text-[#FF5A1F] font-bold">WAYLAND</span>
                  <span className="w-2 h-2 bg-[#FF5A1F]" />
                </div>
              </div>

              {/* Mockup Desktop Screen Interior */}
              <div className="p-4 space-y-3 font-mono text-xs bg-[#0A0A0A]">
                
                {/* Terminal Window Mockup */}
                <div className="border border-[#FFFFFF]/20 bg-[#111111] p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 pb-1.5 text-[10px] text-[#FFFFFF]/50">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#FF5A1F]" />
                      alacritty — guru@machine:~
                    </span>
                    <span className="text-[#FF9B42]">DEV SNAPSHOT 2026</span>
                  </div>

                  {/* Terminal ASCII Art & Fastfetch */}
                  <div className="text-[11px] leading-tight text-[#FFFFFF] space-y-1">
                    <div className="text-[#FF5A1F] font-bold">
                      {"  /\\       GURUOS // EXPERIMENTAL BUILD"}
                    </div>
                    <div className="text-[#FF5A1F] font-bold">
                      {" /  \\      BASE: Arch Linux (Rolling)"}
                    </div>
                    <div className="text-[#FF9B42]">
                      {"/ /\\ \\     SHELL: Rust 2021 + GTK4 (15 Crates)"}
                    </div>
                    <div className="text-[#FF9B42]">
                      {"\\ \\/ /     WM: Hyprland (Wayland IPC)"}
                    </div>
                    <div className="text-[#FFFFFF]/80">
                      {" \\  /      AI: Ollama (os-agent / Qwen2.5-3B)"}
                    </div>
                    <div className="text-[#FFFFFF]/80">
                      {"  \\/       BACKEND: Python MCP daemon (:8000)"}
                    </div>
                  </div>

                  <div className="pt-1 text-[#FF5A1F] text-[11px]">
                    <span className="text-[#FFFFFF]/50">guru@machine:~$ </span>
                    <span>guruos-status --audit</span>
                    <span className="inline-block w-2 h-3.5 bg-[#FF5A1F] ml-1 animate-cursor-blink align-middle" />
                  </div>
                </div>

                {/* Ask GURUOS Overlay Simulation Bar */}
                <div className="border-2 border-[#FF5A1F] bg-[#1a1410] p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#FF5A1F] flex items-center justify-center text-[#0A0A0A] font-black text-[10px]">
                      AI
                    </div>
                    <div>
                      <div className="text-[10px] text-[#FF9B42] font-bold uppercase tracking-wider">
                        Ask GURUOS Desktop Assistant
                      </div>
                      <div className="text-[11px] text-[#FFFFFF]/90 truncate">
                        &quot;Inspect git log &amp; systemctl status guruos-mcp&quot;
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#FF5A1F] text-[#0A0A0A] font-bold uppercase">
                    BOUNDED TOOL
                  </span>
                </div>

                {/* Workspace Indicators */}
                <div className="flex items-center justify-between pt-1 text-[10px] text-[#FFFFFF]/60">
                  <div className="flex items-center gap-1 font-bold">
                    <span className="px-1.5 py-0.5 bg-[#FF5A1F] text-[#0A0A0A]">01:DEV</span>
                    <span className="px-1.5 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80">02:DOC</span>
                    <span className="px-1.5 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80">03:SYS</span>
                    <span className="px-1.5 py-0.5 bg-[#FFFFFF]/10 text-[#FFFFFF]/80">04:WEB</span>
                  </div>
                  <span className="text-[#FF9B42]">GTK4 LAYER ACTIVE</span>
                </div>
              </div>

              {/* Bottom System Label and Disclaimer */}
              <div className="bg-[#171717] px-3 py-2 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-[#FFFFFF]/60 gap-1">
                <span className="text-[#FF5A1F] font-bold">
                  ARCH-BASED // HYPRLAND // NATIVE SHELL
                </span>
                <span className="text-white/40 italic">
                  [CONCEPT PREVIEW // REPOSITORY AUDITED]
                </span>
              </div>
            </div>

            {/* Brutalist Decorative Crosses & Labels */}
            <div className="hidden sm:block absolute -bottom-5 -left-4 bg-[#FFFFFF] border-2 border-[#0A0A0A] px-2 py-1 font-mono text-[10px] font-black text-[#0A0A0A] brutal-shadow z-30">
              FIG_01 // DESKTOP_COMPOSITION
            </div>
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#FF5A1F] border-2 border-[#0A0A0A] px-2 py-1 font-mono text-[10px] font-black text-[#FFFFFF] brutal-shadow z-30">
              FIRE BRUTALISM
            </div>
          </div>

        </div>
      </div>

      {/* ISO Status Modal (Prompt requirement: Display real release status without fake downloads) */}
      {statusModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-xs animate-fadeIn"
        >
          <div className="relative w-full max-w-xl bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg">
            <button
              type="button"
              onClick={() => setStatusModalOpen(false)}
              className="absolute top-4 right-4 p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5A1F] uppercase">
                <Disc className="w-4 h-4 text-[#FF5A1F]" />
                <span>OFFICIAL ISO RELEASE STATUS ({siteConfig.auditDate})</span>
              </div>

              <h3 className="text-2xl font-black uppercase text-[#0A0A0A]">
                NO PUBLIC ISO DOWNLOAD HOSTED YET.
              </h3>

              <div className="p-4 bg-[#F5F3EF] border border-[#0A0A0A] font-mono text-xs space-y-2 text-[#0A0A0A]/85">
                <p>
                  <strong>Development Reality:</strong> The GuruOS source repository is currently private and no public releases are published. A recent GitHub Actions CI ISO build run (Run 38157947896 on October 11, 2026) failed at the build step.
                </p>
                <p>
                  The current documented ArchISO profile serves as a test-image foundation rather than a production installer. We do not provide non-functional download links or simulate fake downloads.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/install"
                  onClick={() => setStatusModalOpen(false)}
                  className="brutal-btn bg-[#FF5A1F] text-[#FFFFFF] border-2 border-[#0A0A0A] p-3 text-xs font-bold uppercase tracking-wider text-center"
                >
                  OPEN INSTALLATION PLANNER ↗
                </Link>
                <button
                  type="button"
                  onClick={() => setStatusModalOpen(false)}
                  className="brutal-btn bg-[#FFFFFF] text-[#0A0A0A] border-2 border-[#0A0A0A] p-3 text-xs font-bold uppercase tracking-wider"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
