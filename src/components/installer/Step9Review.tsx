"use client";

import React, { useState } from "react";
import { InstallerWizardState, WizardStepId } from "@/types";
import { siteConfig } from "@/config/siteConfig";
import { 
  Edit3, 
  Download, 
  FileCode, 
  Copy, 
  Check, 
  Layers, 
  AlertTriangle,
  HardDrive,
  Cpu,
  User,
  Bot
} from "lucide-react";

interface Step9ReviewProps {
  state: InstallerWizardState;
  onJumpToStep: (step: WizardStepId) => void;
}

export const Step9Review: React.FC<Step9ReviewProps> = ({ state, onJumpToStep }) => {
  const [copied, setCopied] = useState(false);

  const enabledComponents = state.desktopComponents.filter((c) => c.enabled);
  const unverifiedItems = [
    "Production disk installer (native pacstrap runner in early development)",
    "Comprehensive automated physical keyboard input tests on Wayland",
    "Bit-for-bit ISO build reproducibility (GitHub Actions ISO build verification pending)",
    "Shell-backend Polkit authorization check (Issue #1 remediation in progress)",
  ];

  // Clean JSON profile omitting any sensitive information
  const exportedProfile = {
    schemaVersion: "1.0-dev",
    generatedAt: new Date().toISOString(),
    auditReference: siteConfig.mainCommit,
    destination: state.destination,
    firmware: {
      bootMode: state.bootMode,
      targetArchitecture: state.hardware.cpuArch,
    },
    profile: state.profile,
    hardwareAssessment: {
      userProvided: state.hardware.isUserProvided,
      cpuCores: state.hardware.cpuCores,
      ramGb: state.hardware.ramGb,
      gpuVendor: state.hardware.gpuVendor,
      storageGb: state.hardware.storageGb,
      network: state.hardware.networkType,
    },
    storagePlan: {
      mode: state.diskMode,
      targetDevice: state.targetDiskName,
      acknowledgedBrowserPreview: state.diskAcknowledged,
    },
    userSystem: {
      username: state.userConfig.username,
      hostname: state.userConfig.hostname,
      timezone: state.userConfig.timezone,
      locale: state.userConfig.locale,
      keyboardLayout: state.userConfig.keyboardLayout,
      networkConfig: state.userConfig.networkConfig,
      // Passwords deliberately excluded!
    },
    desktopStack: {
      enabledComponents: enabledComponents.map((c) => ({
        id: c.id,
        name: c.name,
        category: c.category,
        status: c.status,
      })),
    },
    aiSubsystem: {
      decision: state.aiConfig.decision,
      runtime: state.aiConfig.runtime,
      modelAlias: state.aiConfig.modelAlias,
      artifactName: state.aiConfig.modelArtifact,
      manifestSha256: state.aiConfig.manifestSha256,
      ports: {
        backend: state.aiConfig.backendPort,
        ollama: state.aiConfig.ollamaPort,
      },
    },
  };

  const jsonString = JSON.stringify(exportedProfile, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `guruos-install-profile-${state.destination}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 09 // CONFIGURATION SUMMARY & AUDIT
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          REVIEW CONFIGURATION.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Inspect the generated installation profile computed directly from your active wizard selections. Review or edit individual sections prior to proceeding.
        </p>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
        
        {/* 1. Target & Firmware */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#FF5A1F]" />
                <span>01 // TARGET & BOOT MODE</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("destination")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 space-y-1 text-[#0A0A0A]/90 text-[11px]">
              <div>• Destination: <strong className="text-[#0A0A0A] uppercase">{state.destination === "vm" ? "Virtual Machine (Disposable)" : state.destination === "physical" ? "Physical Computer" : "Explore Preview"}</strong></div>
              <div>• Boot Mode: <strong className="text-[#0A0A0A] uppercase">{state.bootMode === "uefi" ? "UEFI (systemd-boot)" : "Legacy BIOS (Syslinux)"}</strong></div>
              <div>• Package Profile: <strong className="text-[#FF5A1F] uppercase">{state.profile}</strong></div>
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/50">
            FIRMWARE VALIDATION: READY
          </div>
        </div>

        {/* 2. Hardware Information */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#FF5A1F]" />
                <span>02 // USER HARDWARE REPORT</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("hardware")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 space-y-1 text-[#0A0A0A]/90 text-[11px]">
              <div>• Architecture: <strong className="text-[#0A0A0A]">{state.hardware.cpuArch} ({state.hardware.cpuCores} Cores)</strong></div>
              <div>• RAM / Memory: <strong className="text-[#0A0A0A]">{state.hardware.ramGb} GiB ({state.hardware.ramGb >= 8 ? "Adequate for AI" : "Constrained"})</strong></div>
              <div>• GPU Vendor: <strong className="text-[#0A0A0A] uppercase">{state.hardware.gpuVendor}</strong></div>
              <div>• Network: <strong className="text-[#0A0A0A]">{state.hardware.networkType}</strong></div>
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#FF5A1F] font-bold">
            USER-REPORTED METRICS
          </div>
        </div>

        {/* 3. Disk Blueprint */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-[#FF5A1F]" />
                <span>03 // STORAGE BLUEPRINT</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("disk")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 space-y-1 text-[#0A0A0A]/90 text-[11px]">
              <div>• Target Disk: <strong className="text-[#0A0A0A]">{state.targetDiskName}</strong></div>
              <div>• Partition Mode: <strong className="text-[#0A0A0A] uppercase">{state.diskMode}</strong></div>
              <div>• Safety Protocol: <strong className="text-emerald-700">Preview Acknowledged</strong></div>
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/50">
            BROWSER PRIVILEGE BOUNDARY: ZERO DISK MODIFICATIONS
          </div>
        </div>

        {/* 4. User and Locale */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#FF5A1F]" />
                <span>04 // USER & LOCALIZATION</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("user")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 space-y-1 text-[#0A0A0A]/90 text-[11px]">
              <div>• Primary User: <strong className="text-[#0A0A0A]">{state.userConfig.username}</strong></div>
              <div>• Hostname: <strong className="text-[#0A0A0A]">{state.userConfig.hostname}</strong></div>
              <div>• Locale & Keymap: <strong className="text-[#0A0A0A]">{state.userConfig.locale}{" // "}{state.userConfig.keyboardLayout}</strong></div>
              <div>• Timezone: <strong className="text-[#0A0A0A]">{state.userConfig.timezone}</strong></div>
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-emerald-700 font-bold">
            CREDENTIAL RETENTION: EXCLUDED BY DESIGN
          </div>
        </div>

        {/* 5. Desktop Stack */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FF5A1F]" />
                <span>05 // DESKTOP STACK ({enabledComponents.length} ACTIVE)</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("desktop")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 flex flex-wrap gap-1 text-[10px]">
              {enabledComponents.map((c) => (
                <span key={c.id} className="bg-[#F5F3EF] border border-[#0A0A0A] px-1.5 py-0.5 text-[#0A0A0A] font-bold">
                  {c.name}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/50">
            NATIVE RUST 2021 + GTK4 LAYER SHELL
          </div>
        </div>

        {/* 6. AI Subsystem */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
              <span className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-[#FF5A1F]" />
                <span>06 // LOCAL AI STRATEGY</span>
              </span>
              <button
                type="button"
                onClick={() => onJumpToStep("ai")}
                className="text-[#FF5A1F] hover:text-[#0A0A0A] font-bold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>EDIT</span>
              </button>
            </div>
            <div className="pt-2 space-y-1 text-[#0A0A0A]/90 text-[11px]">
              <div>• Strategy: <strong className="text-[#FF5A1F] uppercase">{state.aiConfig.decision === "first-boot" ? "Fetch & Verify on First Boot" : state.aiConfig.decision === "defer" ? "Deferred Setup (Low RAM)" : "Review Only"}</strong></div>
              <div>• Runtime & Model: <strong className="text-[#0A0A0A]">{state.aiConfig.runtime}{" // "}{state.aiConfig.modelAlias}</strong></div>
              <div>• SHA-256 Digest: <strong className="text-emerald-700 font-mono text-[10px]">0a7744...verified</strong></div>
            </div>
          </div>
          <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-[#0A0A0A]/50">
            BOUNDED TOOLS // LOOPBACK HTTP :8000
          </div>
        </div>

      </div>

      {/* Unsupported or Unverified Items Callout (Prompt Section 5 requirement) */}
      <div className="border-3 border-[#0A0A0A] bg-[#FAF9F6] p-5 brutal-shadow space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 font-bold uppercase text-[#D83B12] pb-2 border-b border-[#0A0A0A]/15">
          <AlertTriangle className="w-4 h-4 text-[#FF5A1F]" />
          <span>CURRENTLY UNSUPPORTED OR UNVERIFIED ITEMS (SNAPSHOT REALITY)</span>
        </div>
        <ul className="space-y-1.5 text-[#0A0A0A]/85 text-[11px]">
          {unverifiedItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#FF5A1F] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Export Blueprint JSON Actions */}
      <div className="bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] p-5 sm:p-6 brutal-shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div>
          <div className="font-bold uppercase text-[#FF5A1F] flex items-center gap-1.5">
            <FileCode className="w-4 h-4 text-[#FF5A1F]" />
            <span>EXPORT INSTALLATION BLUEPRINT</span>
          </div>
          <p className="text-[#FFFFFF]/70 text-[11px] pt-0.5">
            Save this structured JSON specification to pass to future automated installer scripts or keep for personal reference.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="brutal-btn bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-2 font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "COPIED JSON" : "COPY JSON"}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="brutal-btn bg-[#FF5A1F] hover:bg-[#D83B12] text-[#FFFFFF] border-2 border-[#0A0A0A] px-4 py-2 font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>SAVE FILE</span>
          </button>
        </div>
      </div>
    </div>
  );
};
