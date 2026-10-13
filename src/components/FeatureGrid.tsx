"use client";

import React from "react";
import Link from "next/link";
import { coreFeaturePillars } from "@/data/featuresData";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  Layers, 
  Bot, 
  TerminalSquare, 
  ArrowUpRight, 
  LayoutGrid,
  ShieldCheck,
  Cpu
} from "lucide-react";

export const FeatureGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "LayoutGrid":
        return (
          <div className="w-12 h-12 bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#FF5A1F] transition-colors">
            <LayoutGrid className="w-6 h-6 text-[#FFFFFF]" />
          </div>
        );
      case "Layers":
        return (
          <div className="w-12 h-12 bg-[#FF5A1F] text-[#0A0A0A] border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#FFFFFF] transition-colors">
            <Layers className="w-6 h-6 text-[#0A0A0A]" />
          </div>
        );
      case "Bot":
        return (
          <div className="w-12 h-12 bg-[#0A0A0A] text-[#FF5A1F] border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#FF5A1F] group-hover:text-[#FFFFFF] transition-colors">
            <Bot className="w-6 h-6" />
          </div>
        );
      case "Cpu":
        return (
          <div className="w-12 h-12 bg-[#FF5A1F] text-[#FFFFFF] border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors">
            <Cpu className="w-6 h-6 text-[#FFFFFF]" />
          </div>
        );
      case "ShieldCheck":
        return (
          <div className="w-12 h-12 bg-[#0A0A0A] text-emerald-400 border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#FF5A1F] group-hover:text-[#FFFFFF] transition-colors">
            <ShieldCheck className="w-6 h-6" />
          </div>
        );
      case "TerminalSquare":
      default:
        return (
          <div className="w-12 h-12 bg-[#FF5A1F] text-[#FFFFFF] border-2 border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors">
            <TerminalSquare className="w-6 h-6 text-[#FFFFFF]" />
          </div>
        );
    }
  };

  return (
    <section id="features" className="bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="04"
          categoryTag="SIX CORE CAPABILITY GROUPS"
          titlePart1="THE SIX"
          titlePart2="PILLARS."
          description="Technically honest overview of the six core architectural feature groups: Native desktop shell, Ask GURUOS, local AI inference, bounded developer tools, system integration, and custom installation."
        />

        {/* 6-Item Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeaturePillars.map((feature) => {
            const isDark = feature.theme === "dark";
            const isSoft = feature.theme === "soft";
            const isOrange = feature.theme === "orange";

            return (
              <div
                key={feature.num}
                className={`group relative border-3 border-[#0A0A0A] p-6 sm:p-7 brutal-card-hover flex flex-col justify-between min-h-[420px] ${
                  isDark
                    ? "bg-[#0A0A0A] text-[#FFFFFF] brutal-shadow"
                    : isOrange
                    ? "bg-[#FFF8F3] text-[#0A0A0A] border-[#FF5A1F] brutal-shadow-orange"
                    : isSoft
                    ? "bg-[#F5F3EF] text-[#0A0A0A] brutal-shadow"
                    : "bg-[#FFFFFF] text-[#0A0A0A] brutal-shadow"
                }`}
              >
                {/* Top Row: Number, Tag, and Status */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-current/20">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-2xl font-black text-[#FF5A1F]">
                        {feature.num}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                          isDark
                            ? "bg-[#171717] border-[#FFFFFF]/20 text-[#FF9B42]"
                            : "bg-[#FFFFFF] border-[#0A0A0A] text-[#0A0A0A]"
                        }`}
                      >
                        {feature.tag}
                      </span>
                    </div>

                    {feature.status && <StatusBadge status={feature.status} />}
                  </div>

                  {/* Icon & Title */}
                  <div className="pt-6 space-y-3">
                    {getIcon(feature.iconName)}
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase leading-snug">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed ${
                        isDark ? "text-[#FFFFFF]/80" : "text-[#0A0A0A]/80"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Technical badges & Links */}
                <div className="pt-6 border-t border-current/15 mt-6 space-y-3">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {feature.techSpecs.map((spec) => (
                      <span
                        key={spec}
                        className={`px-2 py-0.5 border font-semibold ${
                          isDark
                            ? "border-[#FFFFFF]/20 bg-[#171717] text-[#FFFFFF]/80"
                            : "border-[#0A0A0A]/30 bg-[#FFFFFF] text-[#0A0A0A]/90"
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {feature.num === "06" && (
                    <div className="pt-1">
                      <Link
                        href="/install"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#FF5A1F] hover:underline uppercase"
                      >
                        <span>OPEN CUSTOM INSTALLER WIZARD</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
