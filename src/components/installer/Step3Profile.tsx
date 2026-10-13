"use client";

import React from "react";
import { BootMode, SystemProfileType } from "@/types";
import { Terminal } from "lucide-react";

interface Step3ProfileProps {
  bootMode: BootMode;
  profile: SystemProfileType;
  onBootModeChange: (mode: BootMode) => void;
  onProfileChange: (prof: SystemProfileType) => void;
}

export const Step3Profile: React.FC<Step3ProfileProps> = ({
  bootMode,
  profile,
  onBootModeChange,
  onProfileChange,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 03 // FIRMWARE & FLAVOR
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          BOOT MODE & SYSTEM PROFILE.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Configure how the system initializes firmware bootloaders and select the initial package footprint for your desktop environment.
        </p>
      </div>

      {/* 1. Boot Mode Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2">
          <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>FIRMWARE BOOT MODE SPECIFICATION</span>
          </span>
          <span className="font-mono text-[11px] text-[#0A0A0A]/60">
            FIRMWARE TARGET
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* UEFI Option */}
          <div
            onClick={() => onBootModeChange("uefi")}
            className={`border-3 p-4 sm:p-5 transition-all cursor-pointer ${
              bootMode === "uefi"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <div className="font-black text-base uppercase text-[#0A0A0A]">
                UEFI (SYSTEMD-BOOT)
              </div>
              <input
                type="radio"
                name="boot-mode"
                checked={bootMode === "uefi"}
                onChange={() => onBootModeChange("uefi")}
                className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                aria-label="UEFI (systemd-boot)"
              />
            </div>
            <div className="pt-2 space-y-2 font-mono text-xs">
              <span className="inline-block bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 text-[10px] font-bold text-[#FF5A1F] uppercase">
                RECOMMENDED FOR MODERN HARDWARE
              </span>
              <p className="text-[#0A0A0A]/80 font-sans text-xs">
                Modern 64-bit UEFI firmware targeting <code>systemd-boot</code>. Uses standard EFI System Partition (ESP) mounted at <code>/boot</code>. Fast, lightweight, and cleanly handles NVMe and SATA drives.
              </p>
            </div>
          </div>

          {/* BIOS Option */}
          <div
            onClick={() => onBootModeChange("bios")}
            className={`border-3 p-4 sm:p-5 transition-all cursor-pointer ${
              bootMode === "bios"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <div className="font-black text-base uppercase text-[#0A0A0A]">
                LEGACY BIOS (SYSLINUX)
              </div>
              <input
                type="radio"
                name="boot-mode"
                checked={bootMode === "bios"}
                onChange={() => onBootModeChange("bios")}
                className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                aria-label="Legacy BIOS (Syslinux)"
              />
            </div>
            <div className="pt-2 space-y-2 font-mono text-xs">
              <span className="inline-block bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 text-[10px] font-bold text-[#0A0A0A]/70 uppercase">
                FALLBACK COMPATIBILITY
              </span>
              <p className="text-[#0A0A0A]/80 font-sans text-xs">
                Legacy MBR/BIOS bootloader using Syslinux. Supported by the source ArchISO profile for older machines or virtual machines configured without OVMF/UEFI firmware.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] font-mono text-[11px] text-[#0A0A0A]/80 flex items-start gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
          <span>
            <strong>ArchISO Design Reference:</strong> The source ISO profile documents dual UEFI (systemd-boot) and BIOS (Syslinux) support. The actual availability of each boot mode must be confirmed against the selected release artifact once built.
          </span>
        </div>
      </div>

      {/* 2. System Profile Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2">
          <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>DESKTOP INSTALLATION PROFILE</span>
          </span>
          <span className="font-mono text-[11px] text-[#0A0A0A]/60">
            FLAVOR SPEC
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Profile: Recommended */}
          <div
            onClick={() => onProfileChange("recommended")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              profile === "recommended"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
                <span className="font-black text-lg uppercase text-[#0A0A0A]">
                  RECOMMENDED
                </span>
                <input
                  type="radio"
                  name="system-profile"
                  checked={profile === "recommended"}
                  onChange={() => onProfileChange("recommended")}
                  className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                  aria-label="Recommended Profile"
                />
              </div>

              <div className="font-mono text-[11px] text-[#FF5A1F] font-bold">
                Standard Desktop & Guided Setup
              </div>

              <p className="text-xs text-[#0A0A0A]/85 font-sans leading-relaxed">
                Standard documented GuruOS experience: Arch Linux base, Hyprland Wayland compositor, native Rust/GTK4 top panel, SwayNC, UPower, PipeWire audio, and guided first-boot AI model configuration.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0A0A0A]/10 mt-4 font-mono text-[10px] space-y-1">
              <div className="text-[#0A0A0A]/60 uppercase font-bold">INCLUDED:</div>
              <div className="text-[#0A0A0A] font-semibold">• Rust GTK4 Shell + Ask GURUOS</div>
              <div className="text-[#0A0A0A] font-semibold">• Hyprland Compositor</div>
              <div className="text-[#0A0A0A] font-semibold">• Ollama + os-agent (first-boot)</div>
            </div>
          </div>

          {/* Profile: Minimal */}
          <div
            onClick={() => onProfileChange("minimal")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              profile === "minimal"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg uppercase text-[#0A0A0A]">
                    MINIMAL
                  </span>
                  <span className="bg-[#0A0A0A] text-[#FFFFFF] font-mono text-[9px] px-1 py-0.2 font-bold uppercase">
                    CONCEPT PREVIEW
                  </span>
                </div>
                <input
                  type="radio"
                  name="system-profile"
                  checked={profile === "minimal"}
                  onChange={() => onProfileChange("minimal")}
                  className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                  aria-label="Minimal Profile"
                />
              </div>

              <div className="font-mono text-[11px] text-[#0A0A0A]/70 font-bold">
                Reduced Footprint (AI Deferred)
              </div>

              <p className="text-xs text-[#0A0A0A]/85 font-sans leading-relaxed">
                A reduced base installation for constrained systems or users who prefer a clean tiling desktop without downloading local LLM weights. Retains core GTK4 shell and Hyprland while deferring AI initialization.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0A0A0A]/10 mt-4 font-mono text-[10px] space-y-1">
              <div className="text-[#0A0A0A]/60 uppercase font-bold">INCLUDED:</div>
              <div className="text-[#0A0A0A] font-semibold">• Core Hyprland Tiling</div>
              <div className="text-[#0A0A0A] font-semibold">• Basic GTK4 Panel</div>
              <div className="text-[#FF5A1F] font-semibold">• AI Model: Deferred / Disabled</div>
            </div>
          </div>

          {/* Profile: Custom */}
          <div
            onClick={() => onProfileChange("custom")}
            className={`border-3 p-5 transition-all cursor-pointer flex flex-col justify-between ${
              profile === "custom"
                ? "bg-[#FFFFFF] border-[#FF5A1F] brutal-shadow-orange"
                : "bg-[#FFFFFF] border-[#0A0A0A] hover:bg-[#F5F3EF] brutal-shadow"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
                <span className="font-black text-lg uppercase text-[#0A0A0A]">
                  CUSTOM
                </span>
                <input
                  type="radio"
                  name="system-profile"
                  checked={profile === "custom"}
                  onChange={() => onProfileChange("custom")}
                  className="w-4 h-4 accent-[#FF5A1F] cursor-pointer"
                  aria-label="Custom Profile"
                />
              </div>

              <div className="font-mono text-[11px] text-[#FF5A1F] font-bold">
                Granular Component Selection
              </div>

              <p className="text-xs text-[#0A0A0A]/85 font-sans leading-relaxed">
                Review and toggle individual components in Step 07 and tailor your AI setup choices in Step 08. Customizes partition layouts and enables/disables auxiliary daemons based on hardware availability.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0A0A0A]/10 mt-4 font-mono text-[10px] space-y-1">
              <div className="text-[#0A0A0A]/60 uppercase font-bold">INCLUDED:</div>
              <div className="text-[#0A0A0A] font-semibold">• Granular Component Toggles</div>
              <div className="text-[#0A0A0A] font-semibold">• Custom Storage Layout</div>
              <div className="text-[#0A0A0A] font-semibold">• Configurable AI Endpoints</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
