"use client";

import React, { useState, useMemo } from "react";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  Search, 
  Info
} from "lucide-react";

export const DevelopmentStatus: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const features = siteConfig.availableFeatures;
  const { buildPipeline, releaseStatus, isoFileName } = siteConfig;

  // Counts for each status
  const counts = useMemo(() => {
    const map: Record<string, number> = {
      All: features.length,
      Implemented: 0,
      Experimental: 0,
      "In Progress": 0,
      Planned: 0,
      Unverified: 0,
    };
    features.forEach((f) => {
      if (map[f.status] !== undefined) {
        map[f.status]++;
      }
    });
    return map;
  }, [features]);

  // Filtered list
  const filteredFeatures = useMemo(() => {
    return features.filter((item) => {
      const matchesFilter = selectedFilter === "All" || item.status === selectedFilter;
      const matchesQuery = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [features, selectedFilter, searchQuery]);

  return (
    <section id="status" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="07"
          categoryTag="TRANSPARENCY & AUDIT"
          titlePart1="DEVELOPMENT"
          titlePart2="STATUS."
          description="Strict engineering transparency. What is currently working in the development snapshot, what is experimental, and what remains in progress."
        />

        {/* Global Release State Callout */}
        <div className="bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 border-3 border-[#0A0A0A] brutal-shadow-lg mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#FFFFFF]/20 pb-4 gap-2">
            <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>CURRENT PUBLIC RELEASE STATE</span>
            </div>
            <div className="font-mono text-xs text-[#FFFFFF]/60">
              BUILD ARTIFACT: {isoFileName}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#FFFFFF]">
              {releaseStatus}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed max-w-3xl">
              GuruOS maintains an honest snapshot of development progress. We do not fabricate release dates, benchmark results, community metrics, or publish unverified installation promises.
            </p>
          </div>

          {/* 5 Status Taxonomy Legend */}
          <div className="pt-4 border-t border-[#FFFFFF]/15 grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-[11px]">
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-emerald-400">IMPLEMENTED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Present in development snapshot</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF5A1F]">EXPERIMENTAL</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Available in some configs; not guaranteed</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF9B42]">IN PROGRESS</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Incomplete desktop integration</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FFFFFF]">PLANNED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Architecturally queued; not built</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF5A1F]">UNVERIFIED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Requires active release testing</div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Status Filter Buttons */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {["All", "Implemented", "Experimental", "In Progress", "Planned", "Unverified"].map((status) => {
              const count = counts[status] || 0;
              const isActive = selectedFilter === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedFilter(status)}
                  className={`px-3 py-1.5 border-2 transition-all font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A] brutal-shadow"
                      : "bg-[#FFFFFF] text-[#0A0A0A] border-[#0A0A0A] hover:bg-[#F5F3EF]"
                  }`}
                >
                  <span>{status}</span>
                  <span className={`text-[10px] px-1 py-0.2 border ${
                    isActive ? "bg-[#FF5A1F] text-[#0A0A0A] border-[#FF5A1F]" : "bg-[#F5F3EF] text-[#0A0A0A] border-[#0A0A0A]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] px-3 py-1.5 max-w-xs font-mono text-xs">
            <Search className="w-4 h-4 text-[#FF5A1F] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features..."
              className="w-full bg-transparent focus:outline-none text-[#0A0A0A]"
            />
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredFeatures.map((item) => (
            <div 
              key={item.id}
              className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 brutal-card-hover brutal-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Header Row: Category and Status */}
                <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/20">
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]/60 uppercase">
                    {item.category}
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                {/* Feature Name */}
                <h4 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A0A0A]">
                  {item.name}
                </h4>

                {/* Short Description */}
                <p className="font-sans text-sm sm:text-base font-bold text-[#0A0A0A]/90 leading-snug">
                  {item.description}
                </p>

                {/* Technical Audit Detail */}
                <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] font-mono text-xs text-[#0A0A0A]/80 leading-relaxed">
                  <strong>Technical Audit:</strong> {item.details}
                </div>

              </div>

              {/* Bottom Tag */}
              <div className="pt-2 border-t border-[#0A0A0A]/10 font-mono text-[11px] text-[#0A0A0A]/50 flex items-center justify-between">
                <span>AUDIT ID: {item.id}</span>
                <span className="text-[#FF5A1F] font-bold">SNAPSHOT 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Build Pipeline & Rebuildability Audit Card (Section 5) */}
        <div className="border-3 border-[#0A0A0A] bg-[#F5F3EF] p-6 sm:p-8 brutal-shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0A0A0A] pb-4 gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
                PACKAGING & REPRODUCIBILITY // SECTION 05 SPECIFICATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
                ISO Build Pipeline & Tooling
              </h3>
            </div>
            <div className="font-mono text-xs text-[#0A0A0A]/70 bg-[#FFFFFF] border border-[#0A0A0A] px-3 py-1 font-bold">
              DEV ARTIFACT: {buildPipeline.internalIsoArtifact}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 font-mono text-xs space-y-1">
              <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">IMAGE BUILDER</div>
              <div className="font-black text-sm text-[#0A0A0A]">{buildPipeline.builderTool}</div>
              <div className="text-[11px] text-[#0A0A0A]/70">Official Arch Linux image tool</div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 font-mono text-xs space-y-1">
              <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">PACKAGE DEFINITIONS</div>
              <div className="font-black text-sm text-[#0A0A0A]">{buildPipeline.packageDefinitions}</div>
              <div className="text-[11px] text-[#0A0A0A]/70">Standard Arch packaging scripts</div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 font-mono text-xs space-y-1">
              <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">BUILD SCRIPT</div>
              <div className="font-black text-sm text-[#FF5A1F]">{buildPipeline.buildScript}</div>
              <div className="text-[11px] text-[#0A0A0A]/70">Automated orchestrator script</div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 font-mono text-xs space-y-1">
              <div className="text-[10px] text-[#0A0A0A]/60 uppercase font-bold">REPRODUCIBILITY</div>
              <div className="font-black text-sm text-[#0A0A0A]">Mostly Rebuildable</div>
              <div className="text-[11px] text-[#0A0A0A]/70">Complete reproducibility pending</div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A] p-4 font-mono text-xs text-[#0A0A0A]/85 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Build Facts Disclaimer:</strong> The facts above describe the development process used to construct test images. They do not establish that a downloadable ISO is publicly hosted, that bit-for-bit reproducibility has been verified, or that an automated installer has been verified across diverse OEM hardware. Public release details will be published when image verification is complete.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
