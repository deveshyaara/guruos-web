"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ChecksumModal } from "./modals/ChecksumModal";
import { LaunchNotifyModal } from "./modals/LaunchNotifyModal";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { 
  ArrowUpRight, 
  FileCode, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  Bell, 
  Disc, 
  Terminal,
  Sliders,
  HelpCircle,
  Clock
} from "lucide-react";

export const DownloadSection: React.FC = () => {
  const [checksumModalOpen, setChecksumModalOpen] = useState(false);
  const [launchModalOpen, setLaunchModalOpen] = useState(false);

  const { 
    release, 
    isIsoAvailable, 
    releaseStatus, 
    isoFileName, 
    architecture, 
    buildPipeline 
  } = siteConfig;

  return (
    <section id="download" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A] overflow-hidden">
      
      {/* Background stipple texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="08"
          categoryTag="RELEASE INFRASTRUCTURE"
          titlePart1="RELEASE STATUS &"
          titlePart2="DISTRIBUTION."
          description="Honest release status. Maintainers configure public images upon successful build verification; no simulated or fake downloads."
          className="text-center md:items-center"
        />

        {/* Central Release Status Panel */}
        <div className="max-w-3xl mx-auto">
          <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] brutal-shadow-lg relative overflow-hidden">
            
            {/* Top Bar of Release Panel */}
            <div className="bg-[#0A0A0A] text-[#FFFFFF] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#0A0A0A] gap-3">
              <div className="flex items-center gap-3">
                <Disc className="w-5 h-5 text-[#FF5A1F]" />
                <span className="font-mono text-sm font-black uppercase tracking-wider">
                  OFFICIAL RELEASE PANEL
                </span>
              </div>
              
              {/* Release Channel Badge */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#FFFFFF]/60">CHANNEL:</span>
                <span className="bg-[#FF5A1F] text-[#0A0A0A] font-bold px-2 py-0.5 uppercase tracking-wide">
                  {release.channel}
                </span>
              </div>
            </div>

            {/* Release Specifications Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Current Release State Notice */}
              <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div className="font-mono text-xs space-y-1">
                  <div className="font-black uppercase text-[#0A0A0A]">
                    {releaseStatus}
                  </div>
                  <div className="text-[#0A0A0A]/80 leading-relaxed">
                    Test image artifact: <code className="bg-[#FFFFFF] border border-[#0A0A0A] px-1.5 py-0.2 font-bold text-[#FF5A1F]">{isoFileName}</code>. The source repository is private and the ISO build pipeline is undergoing verification after a recent CI build step failure.
                  </div>
                </div>
              </div>

              {/* Product Metadata Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                
                <div className="border-2 border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">PRODUCT</div>
                  <div className="font-black text-sm text-[#0A0A0A] truncate">{siteConfig.productName}</div>
                </div>

                <div className="border-2 border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">ARCHITECTURE</div>
                  <div className="font-black text-sm text-[#FF5A1F]">{architecture}</div>
                </div>

                <div className="border-2 border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">IMAGE ARTIFACT</div>
                  <div className="font-bold text-xs text-[#0A0A0A] truncate">{isoFileName}</div>
                </div>

                <div className="border-2 border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">DOWNLOAD STATUS</div>
                  <div className="font-black text-xs text-[#D83B12]">
                    {isIsoAvailable ? "HOSTED" : "UNAVAILABLE"}
                  </div>
                </div>

              </div>

              {/* Build Pipeline Infrastructure Banner */}
              <div className="p-4 border border-[#0A0A0A] bg-[#FFFFFF] font-mono text-xs space-y-2">
                <div className="font-bold uppercase text-[#0A0A0A] flex items-center justify-between border-b border-[#0A0A0A]/10 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    IMAGE PACKAGING &amp; CI REALITY
                  </span>
                  <span className="text-[#FF5A1F] text-[10px]">MKARCHISO</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-[#0A0A0A]/80">
                  <div>• Builder: <strong>{buildPipeline.builderTool}</strong></div>
                  <div>• Last CI Run: <strong>Run {buildPipeline.lastCiRunId}</strong></div>
                  <div>• CI Result: <strong className="text-[#D83B12]">{buildPipeline.lastCiRunStatus}</strong></div>
                </div>
              </div>

              {/* Primary Action: Configurable Release Gate */}
              <div className="pt-2 space-y-3">
                {isIsoAvailable && release.isoDownloadUrl ? (
                  <Button
                    variant="primary"
                    size="lg"
                    href={release.isoDownloadUrl}
                    className="w-full py-5 text-center text-sm sm:text-base"
                  >
                    <span>DOWNLOAD GURUOS ISO ({release.version})</span>
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-4 text-center font-mono text-xs space-y-2">
                      <div className="font-black uppercase text-[#0A0A0A] text-sm">
                        DOWNLOAD NOT YET AVAILABLE
                      </div>
                      <p className="text-[#0A0A0A]/70 text-[11px] max-w-lg mx-auto">
                        Official ISO downloads will be enabled here automatically once GitHub Actions build runs pass and maintainers sign release artifacts. No fake files or broken links are provided.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/install"
                        className="flex-1 brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3.5 text-center font-mono text-xs font-black uppercase tracking-wider brutal-shadow flex items-center justify-center gap-2"
                      >
                        <Sliders className="w-4 h-4" />
                        <span>OPEN CUSTOM INSTALLATION PLANNER ↗</span>
                      </Link>

                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => setLaunchModalOpen(true)}
                        className="py-3.5 text-xs font-mono"
                      >
                        <Bell className="w-4 h-4 mr-1.5" />
                        <span>REGISTER FOR LAUNCH ALERT</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Links Row */}
              <div className="pt-4 border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold uppercase">
                
                <span className="flex items-center gap-1.5 text-[#0A0A0A]/50">
                  <FileText className="w-4 h-4" />
                  <span>Release Notes (Pending Tag)</span>
                </span>

                <span className="text-[#0A0A0A]/50">
                  Repo: Private Development
                </span>

                <button
                  type="button"
                  onClick={() => setChecksumModalOpen(true)}
                  className="flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#FF5A1F] underline decoration-[#0A0A0A] underline-offset-4 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Model &amp; Image Verification</span>
                </button>

              </div>

            </div>

            {/* Bottom Footer Note of Release Card */}
            <div className="bg-[#F5F3EF] border-t-2 border-[#0A0A0A] px-6 py-2.5 font-mono text-[11px] text-[#0A0A0A]/70 flex items-center justify-between">
              <span>CONFIG: siteConfig.releaseStatus</span>
              <span>HONEST LINUX ENGINEERING</span>
            </div>

          </div>
        </div>

      </div>

      {/* Verification Checksum Modal */}
      <ChecksumModal
        isOpen={checksumModalOpen}
        onClose={() => setChecksumModalOpen(false)}
      />

      {/* Pre-Release Notification Modal */}
      <LaunchNotifyModal
        isOpen={launchModalOpen}
        onClose={() => setLaunchModalOpen(false)}
      />
    </section>
  );
};
