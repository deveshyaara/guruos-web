"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { SparkIcon, StarburstSpark } from "./icons/SparkIcon";
import { BrutalFlame } from "./icons/BrutalFlame";
import { ChecksumModal } from "./modals/ChecksumModal";
import { LaunchNotifyModal } from "./modals/LaunchNotifyModal";
import { 
  Download, 
  ArrowUpRight, 
  FileCode, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  Bell, 
  Cpu, 
  Disc, 
  Clock 
} from "lucide-react";

export const DownloadSection: React.FC = () => {
  const [checksumModalOpen, setChecksumModalOpen] = useState(false);
  const [launchModalOpen, setLaunchModalOpen] = useState(false);

  const { release, isIsoAvailable, statusNotice } = siteConfig;

  return (
    <section id="download" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A] overflow-hidden">
      
      {/* Background stipple texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase bg-[#0A0A0A] text-[#FFFFFF] px-3 py-1 border border-[#0A0A0A] brutal-shadow">
            <SparkIcon className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>SECTION 05 // SYSTEM DISTRIBUTION</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-[#0A0A0A] leading-[0.9]">
            READY TO <span className="text-[#FF5A1F]">IGNITE?</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#0A0A0A]/80 font-medium">
            Get the build, prepare your installation media, and start exploring GuruOS.
          </p>
        </div>

        {/* Central Prominent Product Release Panel */}
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
              
              {/* Status Alert Banner */}
              <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div className="font-mono text-xs space-y-1">
                  <div className="font-bold uppercase text-[#0A0A0A]">
                    PROTOTYPE & DEVELOPMENT NOTICE
                  </div>
                  <div className="text-[#0A0A0A]/80 leading-relaxed">
                    {statusNotice}
                  </div>
                </div>
              </div>

              {/* Product Metadata Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                
                <div className="border border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">PRODUCT</div>
                  <div className="font-black text-sm text-[#0A0A0A] truncate">{release.productName}</div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">ARCHITECTURE</div>
                  <div className="font-black text-sm text-[#FF5A1F]">{release.architecture}</div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">IMAGE FORMAT</div>
                  <div className="font-black text-sm text-[#0A0A0A]">{release.format}</div>
                </div>

                <div className="border border-[#0A0A0A] p-3 bg-[#FFFFFF]">
                  <div className="text-[#0A0A0A]/50 text-[10px] uppercase font-bold">STATUS</div>
                  <div className="font-black text-sm text-[#FF5A1F]">
                    {isIsoAvailable ? "READY" : "IN PROGRESS"}
                  </div>
                </div>

              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                {isIsoAvailable && release.isoDownloadUrl ? (
                  <a
                    href={release.isoDownloadUrl}
                    className="w-full brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] py-5 text-center text-sm sm:text-base font-black tracking-widest brutal-shadow-lg"
                  >
                    <span>DOWNLOAD GURUOS ISO</span>
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLaunchModalOpen(true)}
                    className="w-full brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] py-5 text-center text-sm sm:text-base font-black tracking-widest brutal-shadow-lg"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    <span>JOIN THE LAUNCH — GET EARLY ACCESS ↗</span>
                  </button>
                )}
              </div>

              {/* Secondary Links Row */}
              <div className="pt-4 border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold uppercase">
                
                {release.releaseNotesUrl ? (
                  <a
                    href={release.releaseNotesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#FF5A1F] underline decoration-[#0A0A0A] underline-offset-4"
                  >
                    <FileText className="w-4 h-4 text-[#FF5A1F]" />
                    <span>Release Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-[#0A0A0A]/50 cursor-not-allowed">
                    <FileText className="w-4 h-4" />
                    <span>Release Notes (Pending)</span>
                  </span>
                )}

                {siteConfig.githubRepoUrl ? (
                  <a
                    href={siteConfig.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#FF5A1F] underline decoration-[#0A0A0A] underline-offset-4"
                  >
                    <FileCode className="w-4 h-4 text-[#FF5A1F]" />
                    <span>Source on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[#0A0A0A]/50">GitHub Pending</span>
                )}

                <button
                  type="button"
                  onClick={() => setChecksumModalOpen(true)}
                  className="flex items-center gap-1.5 text-[#0A0A0A] hover:text-[#FF5A1F] underline decoration-[#0A0A0A] underline-offset-4 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Checksums / Verification</span>
                </button>

              </div>

            </div>

            {/* Bottom Footer Note of Release Card */}
            <div className="bg-[#F5F3EF] border-t border-[#0A0A0A] px-6 py-2.5 font-mono text-[11px] text-[#0A0A0A]/60 flex items-center justify-between">
              <span>CONFIG REF: siteConfig.release</span>
              <span>NO TRACKING // OPEN COMPLIANCE</span>
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
