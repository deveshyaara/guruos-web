"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InstallerWizardState } from "@/types";
import { siteConfig } from "@/config/siteConfig";
import { 
  Terminal, 
  ArrowLeft, 
  BookOpen, 
  Server, 
  RotateCcw
} from "lucide-react";

interface Step10NextStepsProps {
  state: InstallerWizardState;
  onRestart: () => void;
}

export const Step10NextSteps: React.FC<Step10NextStepsProps> = ({ state, onRestart }) => {
  const [showQemuCommand, setShowQemuCommand] = useState(false);

  const qemuCommand = `qemu-system-x86_64 \\
  -enable-kvm -m ${state.hardware.ramGb * 1024} -smp ${state.hardware.cpuCores} \\
  -cpu host \\
  -drive file=guruos-test.qcow2,if=virtio,format=qcow2 \\
  -cdrom ${siteConfig.isoFileName || "guruos-0.1.0-dev-x86_64.iso"} \\
  -boot d -vga virtio -display default`;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 10 // EXECUTION STATUS & NEXT STEPS
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          CONTINUE TO INSTALLATION.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Review the current status of the GuruOS installation pipeline and follow available manual test instructions.
        </p>
      </div>

      {/* Mandatory Prompt Requirement: Honest Unreleased Installer Callout */}
      <div className="border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#FFFFFF]/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
              NATIVE INSTALLER STATUS // TRUTH PROTOCOL
            </span>
          </div>
          <span className="font-mono text-[10px] bg-[#141414] border border-[#FF5A1F] text-[#FF9B42] px-2 py-0.5 font-bold uppercase">
            EARLY DEVELOPMENT
          </span>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FFFFFF] leading-snug">
            &ldquo;The guided installer is under development. You can review your configuration and follow the available test-image instructions.&rdquo;
          </h4>
          <p className="font-mono text-xs text-[#FFFFFF]/80 leading-relaxed max-w-2xl">
            As documented in the repository audit, the current ArchISO profile is a test-image foundation rather than an automated disk installer. The disk-writing installation implementation is still under development. We do not provide fake download buttons or simulate disk partition writes.
          </p>
        </div>

        <div className="pt-3 border-t border-[#FFFFFF]/15 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px]">
          <div className="border border-[#FFFFFF]/10 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">PUBLIC DOWNLOAD</div>
            <div className="text-[#FFFFFF]/60">Not Yet Available (Private Repo)</div>
          </div>
          <div className="border border-[#FFFFFF]/10 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">AUTOMATED DISK WRITES</div>
            <div className="text-[#FFFFFF]/60">Incomplete in Current Phase</div>
          </div>
          <div className="border border-[#FFFFFF]/10 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">RECOMMENDED PATH</div>
            <div className="text-[#FFFFFF]/60">Follow Test-Image Build Docs</div>
          </div>
        </div>
      </div>

      {/* Real Available Next Steps Grid */}
      <div className="space-y-4">
        <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-2">
          <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
          <span>WHAT YOU CAN DO RIGHT NOW</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          
          {/* Card 1: VM Testing Guidance */}
          <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 font-bold uppercase text-[#0A0A0A] pb-2 border-b border-[#0A0A0A]/15">
                <Server className="w-4 h-4 text-[#FF5A1F]" />
                <span>QEMU / KVM TESTING</span>
              </div>
              <p className="text-[11px] text-[#0A0A0A]/85 font-sans pt-2 leading-relaxed">
                When you obtain an internal test image, run it safely inside a virtual machine using Linux KVM.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowQemuCommand(!showQemuCommand)}
              className="brutal-btn bg-[#F5F3EF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] border-2 border-[#0A0A0A] p-2 text-[10px] font-bold uppercase tracking-wider text-center"
            >
              {showQemuCommand ? "HIDE QEMU SNIPPET" : "VIEW QEMU COMMAND ↗"}
            </button>
          </div>

          {/* Card 2: Developer Setup Guide */}
          <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 font-bold uppercase text-[#0A0A0A] pb-2 border-b border-[#0A0A0A]/15">
                <Terminal className="w-4 h-4 text-[#FF5A1F]" />
                <span>LOCAL DEV SETUP</span>
              </div>
              <p className="text-[11px] text-[#0A0A0A]/85 font-sans pt-2 leading-relaxed">
                Build the native Rust GTK4 top panel and run the Python AI backend in a local virtual environment on existing Arch Linux.
              </p>
            </div>
            <Link
              href="/#status"
              className="brutal-btn bg-[#F5F3EF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] border-2 border-[#0A0A0A] p-2 text-[10px] font-bold uppercase tracking-wider text-center"
            >
              READ DEV INSTRUCTIONS ↗
            </Link>
          </div>

          {/* Card 3: Issue Tracker & Audit */}
          <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 brutal-shadow flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 font-bold uppercase text-[#0A0A0A] pb-2 border-b border-[#0A0A0A]/15">
                <BookOpen className="w-4 h-4 text-[#FF5A1F]" />
                <span>KNOWN LIMITATIONS</span>
              </div>
              <p className="text-[11px] text-[#0A0A0A]/85 font-sans pt-2 leading-relaxed">
                Inspect known GitHub issues #1 through #5, Polkit hardening roadmap, and build reproducibility status.
              </p>
            </div>
            <Link
              href="/#specs"
              className="brutal-btn bg-[#F5F3EF] hover:bg-[#FF5A1F] hover:text-[#FFFFFF] border-2 border-[#0A0A0A] p-2 text-[10px] font-bold uppercase tracking-wider text-center"
            >
              AUDIT ROADMAP & SPECS ↗
            </Link>
          </div>

        </div>

        {/* QEMU Command Snippet Display */}
        {showQemuCommand && (
          <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-4 font-mono text-xs space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between text-[#FF9B42] text-[11px] font-bold">
              <span>QEMU TEST RUNNER (BASED ON YOUR {state.hardware.ramGb} GiB RAM & {state.hardware.cpuCores} CORES):</span>
              <span className="text-[#FFFFFF]/50">CLI // LINUX HOST</span>
            </div>
            <pre className="bg-[#141414] p-3 border border-[#FFFFFF]/20 text-[11px] text-[#FFFFFF] overflow-x-auto select-all">
              {qemuCommand}
            </pre>
            <div className="text-[10px] text-[#FFFFFF]/50">
              * Creates an isolated VM session. Host storage and partition tables remain completely untouched.
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
        <button
          type="button"
          onClick={onRestart}
          className="brutal-btn bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-[#FF5A1F]" />
          <span>RESTART SETUP WIZARD</span>
        </button>

        <Link
          href="/"
          className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-6 py-3 font-bold uppercase tracking-wider brutal-shadow flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO LAUNCH HOMEPAGE</span>
        </Link>
      </div>
    </div>
  );
};
