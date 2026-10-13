import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InstallationWizard } from "@/components/installer/InstallationWizard";
import { FutureInstallerDocs } from "@/components/installer/FutureInstallerDocs";
import { SparkIcon } from "@/components/icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";
import { 
  ArrowLeft, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  HardDrive 
} from "lucide-react";

export const metadata: Metadata = {
  title: `Custom Installation Experience — ${siteConfig.productName}`,
  description:
    "Interactive 10-step guided installation wizard for configuring GuruOS profiles, hardware review, partition planning, user setup, and local AI preferences.",
};

export default function InstallPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0A0A0A]">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1 pb-20">
        
        {/* Editorial Wizard Header Banner */}
        <section className="relative bg-[#FFFFFF] border-b-2 border-[#0A0A0A] pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-50" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            
            {/* Top Navigation Anchor & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#0A0A0A] hover:text-[#FF5A1F] transition-colors uppercase self-start"
              >
                <ArrowLeft className="w-4 h-4 text-[#FF5A1F]" />
                <span>BACK TO LAUNCH OVERVIEW</span>
              </Link>

              <div className="inline-flex items-center gap-2 font-mono text-[11px] bg-[#0A0A0A] text-[#FFFFFF] px-2.5 py-1 font-bold uppercase self-start sm:self-auto brutal-shadow">
                <span className="w-2 h-2 bg-[#FF5A1F] animate-pulse" />
                <span>{siteConfig.statusLabel}</span>
              </div>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#F5F3EF] border border-[#0A0A0A] px-2.5 py-1 font-mono text-xs font-bold uppercase text-[#FF5A1F]">
                <SparkIcon className="w-3.5 h-3.5" color="#FF5A1F" />
                <span>MULTI-STEP GUIDED WIZARD // WINDOWS-STYLE SETUP EXPERIENCE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] tracking-tighter leading-[0.92]">
                CUSTOM INSTALLATION <br />
                <span className="text-[#FF5A1F]">EXPERIENCE.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#0A0A0A]/85 font-medium leading-relaxed max-w-3xl">
                Plan your installation profile, review hardware capabilities, configure user and system settings, customize desktop components, and set local AI preferences.
              </p>
            </div>

            {/* Factual Disclaimer Banner */}
            <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] font-mono text-xs text-[#0A0A0A]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5A1F]" />
                <span>
                  <strong>PREVIEW ONLY:</strong> Runs client-side in browser. Does not modify physical drives or execute root commands.
                </span>
              </div>
              <span className="text-[11px] text-[#0A0A0A]/60">
                RELEASE STATUS: {siteConfig.releaseStatus}
              </span>
            </div>

          </div>
        </section>

        {/* Primary Interactive 10-Step Wizard Section */}
        <section className="py-12 lg:py-16 bg-[#FAF9F6] border-b-2 border-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InstallationWizard />
          </div>
        </section>

        {/* Deep Dive Section: Planned Native OS Installer & First-Boot Sequence */}
        <section className="py-16 lg:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl space-y-2">
              <div className="font-mono text-xs font-bold uppercase text-[#FF5A1F] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF5A1F]" />
                <span>NATIVE LINUX DESKTOP INSTALLATION ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A] tracking-tight">
                HOW GURUOS INSTALLATION WILL WORK.
              </h2>
              <p className="text-sm sm:text-base text-[#0A0A0A]/80 font-medium leading-relaxed">
                We clearly separate this web-based configuration planner from the actual native installer. Below is the documented engineering specification for the future bootable ArchISO installation workflow.
              </p>
            </div>

            <FutureInstallerDocs />
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
