import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { SparkIcon } from "./icons/SparkIcon";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A0A0A] text-[#FFFFFF] border-t-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Left Column: Massive Wordmark & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF5A1F] border-2 border-[#FFFFFF] flex items-center justify-center">
                <SparkIcon className="w-6 h-6" color="#0A0A0A" />
              </div>
              <span className="font-black text-3xl sm:text-4xl uppercase tracking-tighter text-[#FFFFFF]">
                {siteConfig.siteName}
              </span>
            </div>

            <div className="space-y-2">
              <p className="font-black text-xl sm:text-2xl text-[#FF5A1F] uppercase tracking-tight">
                {siteConfig.tagline}
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed max-w-sm">
                {siteConfig.supportingStatement}
              </p>
            </div>

            <div className="inline-block p-2 border border-[#FFFFFF]/20 bg-[#141414] font-mono text-[11px] text-[#FFFFFF]/70">
              {`ARCHITECTURE: ${siteConfig.architecture} // BASE: ARCH LINUX // WM: HYPRLAND`}
            </div>
          </div>

          {/* Right Columns: Navigation Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs">
            
            {/* Column 1: Explore */}
            <div className="space-y-4">
              <div className="font-bold uppercase text-[#FF5A1F] tracking-wider border-b border-[#FFFFFF]/20 pb-2">
                ARCHITECTURE
              </div>
              <ul className="space-y-2.5 text-[#FFFFFF]/80 uppercase">
                <li>
                  <a href="#explore" className="hover:text-[#FF5A1F] transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-[#FF5A1F] transition-colors">
                    The 4 Layers
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#FF5A1F] transition-colors">
                    Core Shell
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="hover:text-[#FF5A1F] transition-colors">
                    Desktop HUD
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Status & Specs */}
            <div className="space-y-4">
              <div className="font-bold uppercase text-[#FF5A1F] tracking-wider border-b border-[#FFFFFF]/20 pb-2">
                TRANSPARENCY
              </div>
              <ul className="space-y-2.5 text-[#FFFFFF]/80 uppercase">
                <li>
                  <a href="#status" className="hover:text-[#FF5A1F] transition-colors">
                    Dev Status
                  </a>
                </li>
                <li>
                  <a href="#specs" className="hover:text-[#FF5A1F] transition-colors">
                    System Specs
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-[#FF5A1F] transition-colors">
                    Release State
                  </a>
                </li>
                <li>
                  <a href="#status" className="hover:text-[#FF5A1F] transition-colors">
                    Build Pipeline
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Documentation */}
            <div className="space-y-4">
              <div className="font-bold uppercase text-[#FF5A1F] tracking-wider border-b border-[#FFFFFF]/20 pb-2">
                RESOURCES
              </div>
              <ul className="space-y-2.5 text-[#FFFFFF]/80 uppercase">
                <li>
                  <a href="/install" className="text-[#FF5A1F] hover:text-[#FF9B42] font-bold flex items-center gap-1 transition-colors">
                    <span>Install Planner</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#installation" className="hover:text-[#FF5A1F] transition-colors">
                    Install Guide
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#FF5A1F] transition-colors">
                    FAQ
                  </a>
                </li>
                {siteConfig.documentationUrl ? (
                  <li>
                    <a
                      href={siteConfig.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF5A1F] flex items-center gap-1 transition-colors"
                    >
                      <span>Docs Site</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FF5A1F]" />
                    </a>
                  </li>
                ) : (
                  <li>
                    <span className="text-[#FFFFFF]/40">Docs (In-App)</span>
                  </li>
                )}
                <li>
                  <a
                    href="https://wiki.archlinux.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5A1F] flex items-center gap-1 transition-colors"
                  >
                    <span>Arch Wiki</span>
                    <ArrowUpRight className="w-3 h-3 text-[#FF5A1F]" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Community */}
            <div className="space-y-4">
              <div className="font-bold uppercase text-[#FF5A1F] tracking-wider border-b border-[#FFFFFF]/20 pb-2">
                PROJECT
              </div>
              <ul className="space-y-2.5 text-[#FFFFFF]/80 uppercase">
                <li>
                  <a href="#status" className="hover:text-[#FF5A1F] transition-colors">
                    Known Issues (1-5)
                  </a>
                </li>
                {siteConfig.githubRepoUrl ? (
                  <li>
                    <a
                      href={siteConfig.githubRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF5A1F] flex items-center gap-1 transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FF5A1F]" />
                    </a>
                  </li>
                ) : (
                  <li>
                    <span className="text-[#FFFFFF]/40">GitHub (Pending)</span>
                  </li>
                )}
                {siteConfig.discussionsUrl ? (
                  <li>
                    <a
                      href={siteConfig.discussionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF5A1F] flex items-center gap-1 transition-colors"
                    >
                      <span>Discussions</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FF5A1F]" />
                    </a>
                  </li>
                ) : (
                  <li>
                    <span className="text-[#FFFFFF]/40">Forum (Pending)</span>
                  </li>
                )}
                <li>
                  <a href="#download" className="hover:text-[#FF5A1F] transition-colors">
                    Checksums &amp; CI
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Thin Orange Divider */}
        <div className="h-[2px] bg-gradient-to-r from-[#FF5A1F] via-[#FF9B42] to-transparent my-6" />

        {/* Bottom Metadata & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#FFFFFF]/70">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 bg-[#FF5A1F]" />
            <span className="font-bold text-[#FFFFFF]">
              GURUOS / ARCH LINUX EXPERIMENTAL
            </span>
            <span className="text-[#FF9B42] bg-[#1a1a1a] px-2 py-0.5 text-[10px] border border-[#FFFFFF]/10">
              {siteConfig.releaseStatus}
            </span>
            <span className="text-[#FFFFFF]/40">© {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#FFFFFF]/50 hidden sm:inline">
              DEV PREVIEW // {siteConfig.isoFileName}
            </span>
            
            <a
              href="#"
              className="brutal-btn bg-[#181818] hover:bg-[#FF5A1F] hover:text-[#0A0A0A] text-[#FFFFFF] border border-[#FFFFFF]/30 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
