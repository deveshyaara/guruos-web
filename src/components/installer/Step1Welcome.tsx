"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { 
  ShieldAlert, 
  Terminal, 
  ArrowRight,
  BookOpen
} from "lucide-react";

interface Step1WelcomeProps {
  onStart: () => void;
  onReadSpecs: () => void;
}

export const Step1Welcome: React.FC<Step1WelcomeProps> = ({ onStart, onReadSpecs }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner with Fire & Status */}
      <div className="bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] p-6 sm:p-8 brutal-shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#FFFFFF]/20 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
              GURUOS SETUP PLANNER // BUILD {siteConfig.releaseVersion}
            </span>
          </div>
          <span className="font-mono text-xs text-[#0A0A0A] bg-[#FF5A1F] px-2 py-0.5 font-bold uppercase self-start sm:self-auto">
            {siteConfig.statusLabel}
          </span>
        </div>

        <div className="pt-6 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FFFFFF] tracking-tight leading-none">
            WELCOME TO <br />
            <span className="text-[#FF5A1F]">GURUOS SETUP.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed max-w-2xl">
            This interactive 10-step wizard prepares and validates an installation profile for a future GuruOS deployment. You will configure your target environment, hardware capability preferences, storage blueprint, user environment, desktop components, and local AI preferences.
          </p>
        </div>

        {/* Process Overview Pills */}
        <div className="pt-6 border-t border-[#FFFFFF]/15 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
          <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">10 STEPS</div>
            <div className="text-[#FFFFFF]/60">Guided OS Wizard</div>
          </div>
          <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">ZERO SYSTEM WRITES</div>
            <div className="text-[#FFFFFF]/60">Safe Browser Preview</div>
          </div>
          <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">LOCAL AI CONFIG</div>
            <div className="text-[#FFFFFF]/60">Ollama & os-agent</div>
          </div>
          <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
            <div className="text-[#FF5A1F] font-bold">EXPORT SPEC</div>
            <div className="text-[#FFFFFF]/60">Portable JSON Profile</div>
          </div>
        </div>
      </div>

      {/* Critical Safety Notice (Mandatory Prompt Requirement) */}
      <div className="border-3 border-[#0A0A0A] bg-[#FFF8F3] p-5 sm:p-6 brutal-shadow flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-[#FF5A1F] shrink-0 mt-0.5" />
        <div className="space-y-1.5 font-mono text-xs">
          <div className="font-black text-sm uppercase text-[#0A0A0A] flex items-center gap-2">
            <span>BROWSER ENVIRONMENT SAFETY GUARANTEE</span>
            <span className="bg-[#0A0A0A] text-[#FFFFFF] px-1.5 py-0.2 text-[10px]">READ-ONLY</span>
          </div>
          <p className="text-[#0A0A0A]/80 leading-relaxed">
            This web-based installation wizard operates entirely in your browser. <strong>It cannot and will not modify your computer, repartition disks, format filesystems, or execute root shell commands.</strong> Real disk partitioning occurs only within the future native OS installer after explicit drive selection and user confirmation.
          </p>
        </div>
      </div>

      {/* Current Project & ISO Availability Reality Check */}
      <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#0A0A0A]/20 pb-3">
          <div className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#FF5A1F]" />
            <span>CURRENT ISO & RELEASE STATUS ({siteConfig.auditDate})</span>
          </div>
          <span className="font-mono text-[11px] text-[#0A0A0A]/60">
            AUDIT REF: {siteConfig.mainCommit.substring(0, 8)}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-[#FFFFFF] border border-[#0A0A0A] p-3 space-y-1">
            <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">SOURCE REPOSITORY</div>
            <div className="font-bold text-[#0A0A0A]">Private Development</div>
            <div className="text-[11px] text-[#0A0A0A]/70">Public releases to be hosted upon verification</div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#0A0A0A] p-3 space-y-1">
            <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">ISO PROFILE</div>
            <div className="font-bold text-[#FF5A1F]">Test-Image Foundation</div>
            <div className="text-[11px] text-[#0A0A0A]/70">Not yet a complete production disk installer</div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#0A0A0A] p-3 space-y-1">
            <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">CI BUILD STATUS</div>
            <div className="font-bold text-[#D83B12]">Build Step Verification Pending</div>
            <div className="text-[11px] text-[#0A0A0A]/70">GitHub Actions run 38157947896 failed at ISO build</div>
          </div>
        </div>
      </div>

      {/* Wizard Action Controls */}
      <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t-2 border-[#0A0A0A]">
        <button
          type="button"
          onClick={onReadSpecs}
          className="brutal-btn bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-[#FF5A1F]" />
          <span>READ HARDWARE REQUIREMENTS</span>
        </button>

        <button
          type="button"
          onClick={onStart}
          className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-8 py-3.5 font-mono text-xs font-black uppercase tracking-wider brutal-shadow flex items-center justify-center gap-2"
        >
          <span>START SETUP WIZARD</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};
