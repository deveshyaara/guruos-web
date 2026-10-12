"use client";

import React, { useState } from "react";
import { installationSteps } from "@/data/installationData";
import { FullInstallModal } from "./modals/FullInstallModal";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { 
  Download, 
  Usb, 
  Power, 
  Sliders, 
  AlertTriangle, 
  BookOpen
} from "lucide-react";

export const InstallationGuide: React.FC = () => {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Download className="w-5 h-5 text-[#FF5A1F]" />;
      case "02":
        return <Usb className="w-5 h-5 text-[#FF5A1F]" />;
      case "03":
        return <Power className="w-5 h-5 text-[#FF5A1F]" />;
      case "04":
      default:
        return <Sliders className="w-5 h-5 text-[#FF5A1F]" />;
    }
  };

  return (
    <section id="installation" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="09"
          categoryTag="FIRST-TIME SETUP"
          titlePart1="FROM ZERO"
          titlePart2="TO GURU."
          description="Four steps. One new desktop. Built for people taking ownership of their hardware."
        />

        {/* Four Large Numbered Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {installationSteps.map((step) => (
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
                    {getStepIcon(step.num)}
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
                {step.actionType === "boot-modal" || step.actionType === "guide-modal" ? (
                  <button
                    type="button"
                    onClick={() => setGuideModalOpen(true)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A] hover:text-[#FF5A1F] transition-colors cursor-pointer"
                  >
                    <span>{step.actionText}</span>
                  </button>
                ) : step.actionType === "external-tool" ? (
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

          <Button
            variant="dark"
            size="md"
            onClick={() => setGuideModalOpen(true)}
            className="shrink-0"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            <span>READ FULL INSTALLATION GUIDE ↗</span>
          </Button>
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
