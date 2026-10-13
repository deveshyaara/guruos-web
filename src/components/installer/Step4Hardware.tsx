"use client";

import React from "react";
import { UserHardwareInput } from "@/types";
import { 
  Cpu, 
  HardDrive, 
  Monitor, 
  Wifi, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Info
} from "lucide-react";

interface Step4HardwareProps {
  hardware: UserHardwareInput;
  onChange: (hw: UserHardwareInput) => void;
}

export const Step4Hardware: React.FC<Step4HardwareProps> = ({ hardware, onChange }) => {
  const isRamAdequateForAi = hardware.ramGb >= 8;
  const isStorageAdequate = hardware.storageGb >= 32;

  const updateField = <K extends keyof UserHardwareInput>(field: K, value: UserHardwareInput[K]) => {
    onChange({
      ...hardware,
      [field]: value,
      isUserProvided: true,
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 04 // HARDWARE COMPATIBILITY & CAPABILITIES
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          HARDWARE COMPATIBILITY CHECKLIST.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Review the intended hardware detection pipeline and enter your target machine specifications to evaluate local inference feasibility.
        </p>
      </div>

      {/* Mandatory Disclaimer: Browser cannot probe physical hardware */}
      <div className="border-2 border-[#0A0A0A] bg-[#FFF8F3] p-4 sm:p-5 brutal-shadow flex items-start gap-3">
        <Info className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
        <div className="font-mono text-xs space-y-1">
          <div className="font-black text-[#0A0A0A] uppercase">
            USER-REPORTED SPECIFICATION PROTOCOL
          </div>
          <p className="text-[#0A0A0A]/80 leading-relaxed font-sans text-xs">
            Web browsers execute in an isolated sandbox and cannot query physical PCI buses, EDID registers, or system RAM tables. <strong>The checklist below reflects user-entered specifications.</strong> Real hardware probing will occur automatically during live ISO boot via the native installer and first-boot daemon.
          </p>
        </div>
      </div>

      {/* User Hardware Input Form */}
      <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 brutal-shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3">
          <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>ENTER YOUR TARGET SYSTEM SPECIFICATIONS</span>
          </div>
          <span className="font-mono text-[10px] bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-0.5 font-bold uppercase text-[#FF5A1F]">
            TAG: USER-PROVIDED DATA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 font-mono text-xs">
          
          {/* CPU Architecture */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>CPU Architecture:</span>
            </label>
            <select
              value={hardware.cpuArch}
              onChange={(e) => updateField("cpuArch", e.target.value)}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="x86_64">x86_64 (64-bit AMD / Intel) [Supported]</option>
              <option value="aarch64">aarch64 (ARM64) [Untested / Experimental]</option>
              <option value="other">Other / 32-bit [Unsupported]</option>
            </select>
          </div>

          {/* CPU Core Count */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>CPU Cores:</span>
            </label>
            <select
              value={hardware.cpuCores}
              onChange={(e) => updateField("cpuCores", Number(e.target.value))}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value={2}>2 Cores (Basic Desktop)</option>
              <option value={4}>4 Cores (Reference Machine Tier)</option>
              <option value={8}>8 Cores (Recommended for AI)</option>
              <option value={16}>16+ Cores (High Performance)</option>
            </select>
          </div>

          {/* Installed RAM */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>System RAM (GiB):</span>
            </label>
            <select
              value={hardware.ramGb}
              onChange={(e) => updateField("ramGb", Number(e.target.value))}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value={4}>4 GiB (Low RAM - AI Deferral Recommended)</option>
              <option value={6}>6-7 GiB (Developer Reference Machine ~6.7 GiB)</option>
              <option value={8}>8 GiB (Recommended Baseline for Qwen2.5-3B)</option>
              <option value={16}>16 GiB (Comfortable Desktop + Ollama)</option>
              <option value={32}>32+ GiB (Power User / Multitasking)</option>
            </select>
          </div>

          {/* GPU Vendor */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Graphics / GPU Vendor:</span>
            </label>
            <select
              value={hardware.gpuVendor}
              onChange={(e) => updateField("gpuVendor", e.target.value as UserHardwareInput["gpuVendor"])}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="intel">Intel (Iris Xe / UHD - Mesa driver)</option>
              <option value="amd">AMD (Radeon / RADV open-source driver)</option>
              <option value="nvidia">NVIDIA (Wayland proprietary / Nouveau)</option>
              <option value="other">Integrated / Virtual (virtio-gpu)</option>
            </select>
          </div>

          {/* Target Disk Space */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Storage Allocation (GB):</span>
            </label>
            <select
              value={hardware.storageGb}
              onChange={(e) => updateField("storageGb", Number(e.target.value))}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value={20}>20 GB (Tight / Core Desktop Only)</option>
              <option value={32}>32 GB (Recommended Minimum with 1 Model)</option>
              <option value={64}>64 GB (Comfortable Standard)</option>
              <option value={128}>128+ GB (Development & Multiple Models)</option>
            </select>
          </div>

          {/* Network Connection */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Network Connectivity:</span>
            </label>
            <select
              value={hardware.networkType}
              onChange={(e) => updateField("networkType", e.target.value as UserHardwareInput["networkType"])}
              className="w-full bg-[#F5F3EF] border-2 border-[#0A0A0A] p-2.5 font-mono text-xs font-bold text-[#0A0A0A] focus:outline-none"
            >
              <option value="both">Ethernet & Wi-Fi available</option>
              <option value="wifi">Wi-Fi only (NetworkManager / iwd)</option>
              <option value="ethernet">Ethernet only</option>
              <option value="offline">Offline installation (Requires pre-bundled image)</option>
            </select>
          </div>

        </div>

        {/* Dynamic Capability Assessment Banner */}
        <div className="pt-4 border-t-2 border-[#0A0A0A]">
          <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="font-black uppercase text-[#0A0A0A] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5A1F]" />
                <span>DYNAMIC CAPABILITY EVALUATION:</span>
              </div>
              <span className="font-bold text-[11px] text-[#0A0A0A]/70">
                BASED ON USER INPUT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs pt-1">
              {/* RAM Assessment */}
              <div className={`p-2.5 border ${isRamAdequateForAi ? "bg-[#FFFFFF] border-emerald-500/50" : "bg-[#FFF5F0] border-[#FF5A1F]"}`}>
                <div className="font-bold flex items-center gap-1.5">
                  {isRamAdequateForAi ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-[#FF5A1F]" />
                  )}
                  <span>RAM for Local Inference: {hardware.ramGb} GiB</span>
                </div>
                <div className="text-[11px] text-[#0A0A0A]/70 pt-0.5">
                  {isRamAdequateForAi
                    ? "Adequate memory for Qwen2.5-3B-Instruct quantized model (~2.1 GB weight footprint + context buffer)."
                    : "Low RAM: Local inference may experience high memory pressure. You can choose to defer or disable the model in Step 08 while keeping the desktop shell fully responsive."}
                </div>
              </div>

              {/* Storage Assessment */}
              <div className={`p-2.5 border ${isStorageAdequate ? "bg-[#FFFFFF] border-emerald-500/50" : "bg-[#FFF5F0] border-[#FF5A1F]"}`}>
                <div className="font-bold flex items-center gap-1.5">
                  {isStorageAdequate ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-[#FF5A1F]" />
                  )}
                  <span>Storage Allocation: {hardware.storageGb} GB</span>
                </div>
                <div className="text-[11px] text-[#0A0A0A]/70 pt-0.5">
                  {isStorageAdequate
                    ? "Sufficient space for Arch base system, Hyprland, GTK4 shell, and the Ollama model cache."
                    : "Constrained storage: Arch base + model cache requires ~20 GB. Consider expanding allocated partition."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intended Native Detection Procedure Reference (Prompt Section 4 & 6) */}
      <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-5 space-y-3 font-mono text-xs">
        <div className="font-bold uppercase text-[#0A0A0A] flex items-center justify-between border-b border-[#0A0A0A]/15 pb-2">
          <span>FUTURE NATIVE INSTALLER: AUTOMATED DETECTION PROCEDURE</span>
          <span className="text-[#FF5A1F] text-[11px]">HARDWARE_DESIGN.MD</span>
        </div>
        <p className="text-[#0A0A0A]/80 font-sans text-xs leading-relaxed">
          The planned native installer will execute automated hardware enumeration across 9 subsystems before generating machine-specific configuration:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-[#0A0A0A]/85">
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">1. CPU Arch & Flags (AVX2/NEON)</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">2. GPU Driver & DRI Capabilities</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">3. Monitor Layout & EDID Scaling</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">4. Keyboard & Wayland Inputs</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">5. NetworkManager Devices & Wi-Fi</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">6. BlueZ Bluetooth Controller</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">7. PipeWire Audio Interfaces</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">8. Block Storage & Free Space</div>
          <div className="border border-[#0A0A0A]/20 p-2 bg-[#F5F3EF]">9. Free RAM for Model Quantization</div>
        </div>
      </div>
    </div>
  );
};
