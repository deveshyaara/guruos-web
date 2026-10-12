"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { SparkIcon } from "./icons/SparkIcon";
import { FullInstallModal } from "./modals/FullInstallModal";
import { 
  Download, 
  Usb, 
  Power, 
  Sliders, 
  ArrowUpRight, 
  AlertTriangle, 
  ExternalLink,
  BookOpen
} from "lucide-react";

export const InstallationGuide: React.FC = () => {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "DOWNLOAD",
      summary: "Get the official GuruOS ISO from the download section.",
      description: "Acquire the latest development build image directly from our official channels. Keep the checksum handy for image integrity verification.",
      actionText: "GO TO DOWNLOAD ↓",
      actionHref: "#download",
      isExternal: false,
      icon: <Download className="w-5 h-5 text-[#FF5A1F]" />,
      tag: "STEP_01 // MEDIA",
    },
    {
      num: "02",
      title: "CREATE A BOOTABLE USB",
      summary: "Use a compatible tool such as Balena Etcher or Rufus to write the ISO to a USB drive.",
      description: "Flash the downloaded image onto an 8GB+ USB flash drive using Balena Etcher or Rufus in DD mode. Writing an image erases all existing data on the target USB.",
      warning: "WARNING: Writing an image will permanently erase all existing data on the selected USB drive. Confirm device selection.",
      actionText: "TOOL DOCUMENTATION ↗",
      actionHref: siteConfig.balenaEtcherUrl,
      isExternal: true,
      icon: <Usb className="w-5 h-5 text-[#FF5A1F]" />,
      tag: "STEP_02 // FLASHING",
    },
    {
      num: "03",
      title: "BOOT INTO GURUOS",
      summary: "Back up important files, confirm hardware compatibility, and boot from the prepared USB using the computer's boot menu.",
      description: "Insert the USB, power on your machine, and press your BIOS/UEFI boot menu key (typically F12, F9, or Del). Boot behavior depends on your motherboard firmware.",
      actionText: "BOOT KEY MATRIX ↗",
      actionClick: () => setGuideModalOpen(true),
      icon: <Power className="w-5 h-5 text-[#FF5A1F]" />,
      tag: "STEP_03 // FIRMWARE",
    },
    {
      num: "04",
      title: "INSTALL AND CONFIGURE",
      summary: "Follow the release-specific installation documentation and post-install setup instructions.",
      description: "Launch the installer, select your keyboard layout, and configure storage partitions. Read disk partition instructions carefully before committing changes.",
      warning: "CRITICAL: Back up all personal files and double-check your drive selection to avoid accidental data loss.",
      actionText: "READ FULL GUIDE ↗",
      actionClick: () => setGuideModalOpen(true),
      icon: <Sliders className="w-5 h-5 text-[#FF5A1F]" />,
      tag: "STEP_04 // DISK_CONFIG",
    },
  ];

  return (
    <section id="installation" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-[#0A0A0A] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#FF5A1F] mb-2">
              <SparkIcon className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>SECTION 06 // FIRST-TIME SETUP</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#0A0A0A]">
              FROM ZERO <br />
              <span className="text-[#FF5A1F]">TO GURU.</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-sm text-[#0A0A0A]/80 font-bold uppercase">
            Four steps. One new desktop. Built for people taking ownership of their hardware.
          </p>
        </div>

        {/* Four Large Numbered Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 brutal-card-hover brutal-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0A0A0A]/20">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-4xl font-black text-[#FF5A1F]">
                      {step.num}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]/60">
                      {step.tag}
                    </span>
                  </div>
                  <div className="p-2 border border-[#0A0A0A] bg-[#F5F3EF]">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Body */}
                <div className="pt-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0A0A0A] tracking-tight">
                    STEP {step.num} — {step.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#0A0A0A] leading-snug">
                    {step.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#0A0A0A]/70 leading-relaxed font-mono">
                    {step.description}
                  </p>

                  {/* Warning Callout if present */}
                  {step.warning && (
                    <div className="p-3 bg-[#F5F3EF] border-l-4 border-[#FF5A1F] text-xs font-mono text-[#0A0A0A]/90 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{step.warning}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#0A0A0A]/15 mt-6">
                {step.actionClick ? (
                  <button
                    type="button"
                    onClick={step.actionClick}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A] hover:text-[#FF5A1F] transition-colors cursor-pointer"
                  >
                    <span>{step.actionText}</span>
                  </button>
                ) : step.isExternal ? (
                  <a
                    href={step.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A] hover:text-[#FF5A1F] transition-colors"
                  >
                    <span>{step.actionText}</span>
                  </a>
                ) : (
                  <a
                    href={step.actionHref}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A] hover:text-[#FF5A1F] transition-colors"
                  >
                    <span>{step.actionText}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Verification Notice Callout Banner */}
        <div className="bg-[#F5F3EF] border-2 border-[#0A0A0A] p-6 brutal-shadow mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF5A1F] uppercase">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>HARDWARE & TESTING NOTICE</span>
            </div>
            <p className="text-xs sm:text-sm text-[#0A0A0A] font-medium leading-relaxed max-w-2xl">
              Exact installation steps, boot behavior, system requirements, and installer capabilities must be verified against the actual GuruOS build image upon release. We do not claim support for features that have not been tested.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setGuideModalOpen(true)}
            className="brutal-btn bg-[#0A0A0A] hover:bg-[#FF5A1F] text-[#FFFFFF] border-2 border-[#0A0A0A] px-6 py-3.5 text-xs font-black uppercase tracking-widest shrink-0 brutal-shadow"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            <span>READ FULL INSTALLATION GUIDE ↗</span>
          </button>
        </div>

      </div>

      {/* Full Guide Walkthrough Modal */}
      <FullInstallModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </section>
  );
};
