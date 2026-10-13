"use client";

import React, { useState } from "react";
import { FUTURE_INSTALLER_SEQUENCE, FIRST_BOOT_SEQUENCE } from "@/data/installerData";
import { 
  Terminal, 
  ShieldCheck, 
  AlertTriangle, 
  RotateCcw
} from "lucide-react";

export const FutureInstallerDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"installer" | "firstboot" | "recovery">("installer");

  return (
    <section className="bg-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0A0A0A] pb-4 gap-3">
        <div>
          <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
            SPECIFICATION REFERENCE // INSTALLER & ONBOARDING ARCHITECTURE
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
            FUTURE NATIVE INSTALLER & FIRST-BOOT FLOW.
          </h3>
        </div>
        <div className="flex font-mono text-xs border-2 border-[#0A0A0A] self-start md:self-auto overflow-hidden">
          <button
            type="button"
            onClick={() => setActiveTab("installer")}
            className={`px-3 py-1.5 font-bold uppercase transition-colors cursor-pointer ${
              activeTab === "installer" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            01 / Native Installer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("firstboot")}
            className={`px-3 py-1.5 font-bold uppercase transition-colors cursor-pointer border-l-2 border-[#0A0A0A] ${
              activeTab === "firstboot" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            02 / First Boot
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("recovery")}
            className={`px-3 py-1.5 font-bold uppercase transition-colors cursor-pointer border-l-2 border-[#0A0A0A] ${
              activeTab === "recovery" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            03 / Recovery
          </button>
        </div>
      </div>

      {/* Tab 1: Future Native Installer Flow */}
      {activeTab === "installer" && (
        <div className="space-y-6 animate-fadeIn font-mono text-xs">
          <p className="text-sm text-[#0A0A0A]/85 font-sans leading-relaxed">
            The future native installer is designed as a standalone GTK4 application running inside the bootable live ArchISO session. All disk-writing operations are scoped strictly to the user-confirmed destination mount point (<code>/mnt</code>) and executed with transaction logging.
          </p>

          <div className="border-2 border-[#0A0A0A] divide-y divide-[#0A0A0A] overflow-hidden">
            <div className="bg-[#0A0A0A] text-[#FFFFFF] px-4 py-2 text-[11px] font-bold uppercase grid grid-cols-12">
              <div className="col-span-1">Step</div>
              <div className="col-span-3">Phase & Action</div>
              <div className="col-span-5">Operation Details</div>
              <div className="col-span-3">Safety Boundary</div>
            </div>
            {FUTURE_INSTALLER_SEQUENCE.map((s) => (
              <div key={s.stepNumber} className="px-4 py-3 grid grid-cols-12 items-start bg-[#FFFFFF] hover:bg-[#F5F3EF] gap-2">
                <div className="col-span-1 font-black text-[#FF5A1F]">{(s.stepNumber).toString().padStart(2, "0")}</div>
                <div className="col-span-3 font-bold text-[#0A0A0A]">
                  <div>{s.phase}</div>
                  <div className="text-[10px] text-[#FF5A1F]">{s.action}</div>
                </div>
                <div className="col-span-5 text-[#0A0A0A]/80 font-sans text-xs">{s.description}</div>
                <div className="col-span-3 text-[11px] text-[#0A0A0A]/70 font-semibold">{s.safetyBoundary}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#F5F3EF] border-2 border-[#0A0A0A] p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-[#0A0A0A] uppercase">PORTABLE CONFIGURATION ISOLATION</div>
              <p className="text-[#0A0A0A]/80 font-sans text-xs leading-relaxed">
                The native installer uses the project&apos;s clean packaged runtime (<code>/etc/guruos/</code>) and portable configuration schemas. It will never copy the developer&apos;s personal <code>$HOME</code> directory or machine-specific monitor mappings to the user&apos;s installation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: First-Boot Setup Flow */}
      {activeTab === "firstboot" && (
        <div className="space-y-6 animate-fadeIn font-mono text-xs">
          <p className="text-sm text-[#0A0A0A]/85 font-sans leading-relaxed">
            The planned first-boot setup wizard runs upon initial login. It detects physical hardware, generates a portable Hyprland configuration, checks Ollama, and optionally downloads and verifies the <code>os-agent</code> model artifact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FIRST_BOOT_SEQUENCE.map((fb) => (
              <div key={fb.stepNumber} className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-2 brutal-shadow">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/15">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#FF5A1F]">PHASE 0{fb.stepNumber}</span>
                    <span className="font-bold uppercase text-[#0A0A0A]">{fb.task}</span>
                  </div>
                </div>
                <p className="text-xs text-[#0A0A0A]/85 font-sans leading-relaxed">
                  {fb.details}
                </p>
                <div className="pt-2 border-t border-[#0A0A0A]/10 text-[10px] text-emerald-700 font-bold">
                  Fault Tolerance: {fb.faultTolerance}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8F3] border-2 border-[#0A0A0A] p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-[#0A0A0A] uppercase">NON-FATAL DESKTOP INITIALIZATION GUARANTEE</div>
              <p className="text-[#0A0A0A]/80 font-sans text-xs leading-relaxed">
                If model download fails, if network is unavailable, or if Ollama encounters a runtime error, the desktop shell does not freeze or terminate. Hyprland and the Rust GTK4 top panel remain completely functional, reporting AI status as &ldquo;Offline / Pending Download&rdquo;.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Recovery Design */}
      {activeTab === "recovery" && (
        <div className="space-y-6 animate-fadeIn font-mono text-xs">
          <p className="text-sm text-[#0A0A0A]/85 font-sans leading-relaxed">
            GuruOS documents an explicit system recovery design (<code>RECOVERY_DESIGN.MD</code>) to handle failed updates, driver regressions, and inference daemon issues without requiring complete OS reinstallation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-2">
              <div className="font-bold uppercase text-[#FF5A1F] flex items-center gap-1.5 pb-2 border-b border-[#0A0A0A]/15">
                <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                <span>Safe Hyprland Fallback</span>
              </div>
              <p className="text-xs text-[#0A0A0A]/80 font-sans leading-relaxed">
                If the Rust shell or Python AI backend fails on boot, the system falls back to a clean minimal Hyprland configuration with standard Alacritty terminal access.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-2">
              <div className="font-bold uppercase text-[#FF5A1F] flex items-center gap-1.5 pb-2 border-b border-[#0A0A0A]/15">
                <RotateCcw className="w-4 h-4 text-[#FF5A1F]" />
                <span>Model Checksum Re-Fetch</span>
              </div>
              <p className="text-xs text-[#0A0A0A]/80 font-sans leading-relaxed">
                Corrupted GGUF model files can be safely flushed and re-fetched using the verified SHA-256 digest via <code>guruos-ai --repair-model</code>.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FFFFFF] space-y-2">
              <div className="font-bold uppercase text-[#FF5A1F] flex items-center gap-1.5 pb-2 border-b border-[#0A0A0A]/15">
                <Terminal className="w-4 h-4 text-[#FF5A1F]" />
                <span>Secret-Free Diagnostics</span>
              </div>
              <p className="text-xs text-[#0A0A0A]/80 font-sans leading-relaxed">
                System export tool collects journalctl logs, Hyprland socket status, and hardware enumeration while automatically redacting passwords and encryption keys.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
