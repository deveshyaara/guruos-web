"use client";

import React, { useState, useMemo } from "react";
import { siteConfig } from "@/config/siteConfig";
import { roadmapCategories } from "@/data/roadmapData";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  Search, 
  Info, 
  AlertTriangle, 
  ShieldCheck, 
  Terminal, 
  ExternalLink,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";

export const DevelopmentStatus: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"features" | "roadmap" | "issues" | "ci">("roadmap");

  const features = siteConfig.availableFeatures;
  const { buildPipeline, releaseStatus, isoFileName, knownIssues } = siteConfig;

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
          titlePart1="PROJECT HEALTH &"
          titlePart2="ROADMAP."
          description="Strict engineering transparency. What is currently working in the audited codebase, what remains in progress, known limitations, and CI build verification status."
        />

        {/* Global Release State Callout */}
        <div className="bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 border-3 border-[#0A0A0A] brutal-shadow-lg mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#FFFFFF]/20 pb-4 gap-2">
            <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>CURRENT PUBLIC RELEASE STATE // AUDITED {siteConfig.auditDate}</span>
            </div>
            <div className="font-mono text-xs text-[#FFFFFF]/60">
              MAIN COMMIT: {siteConfig.mainCommit.substring(0, 8)}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#FFFFFF]">
              {releaseStatus}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed max-w-3xl">
              GuruOS maintains an honest snapshot of development progress. The source repository is private and no public releases are published. We do not fabricate release dates, benchmark results, or publish unverified installer claims.
            </p>
          </div>

          {/* 5 Status Taxonomy Legend */}
          <div className="pt-4 border-t border-[#FFFFFF]/15 grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-[11px]">
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-emerald-400">IMPLEMENTED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Present in audited codebase</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF5A1F]">EXPERIMENTAL</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Tested in dev; unbenchmarked</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF9B42]">IN PROGRESS</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Incomplete shell integration</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FFFFFF]">PLANNED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Architecturally queued</div>
            </div>
            <div className="border border-[#FFFFFF]/20 p-2.5 bg-[#141414]">
              <div className="font-bold text-[#FF5A1F]">UNVERIFIED</div>
              <div className="text-[10px] text-[#FFFFFF]/60">Requires release verification</div>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs: Roadmap Categories vs Features Matrix vs Known Issues vs CI Build */}
        <div className="flex border-b-2 border-[#0A0A0A] mb-8 font-mono text-xs font-bold uppercase overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("roadmap")}
            className={`px-4 py-3 border-r-2 border-[#0A0A0A] transition-colors cursor-pointer ${
              activeTab === "roadmap" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            01 / 3-Tier Roadmap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("issues")}
            className={`px-4 py-3 border-r-2 border-[#0A0A0A] transition-colors cursor-pointer ${
              activeTab === "issues" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            02 / Known Limitations (Issues #1-#5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ci")}
            className={`px-4 py-3 border-r-2 border-[#0A0A0A] transition-colors cursor-pointer ${
              activeTab === "ci" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            03 / CI Pipeline &amp; Testing Reality
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("features")}
            className={`px-4 py-3 transition-colors cursor-pointer ${
              activeTab === "features" ? "bg-[#0A0A0A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F5F3EF]"
            }`}
          >
            04 / Granular Feature Matrix
          </button>
        </div>

        {/* TAB 1: 3-TIER ROADMAP (Prompt Section 4 & 11 requirement) */}
        {activeTab === "roadmap" && (
          <div className="space-y-10 animate-fadeIn">
            {roadmapCategories.map((cat, idx) => (
              <div key={idx} className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#0A0A0A] gap-2">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase">{cat.tag}</span>
                    <h3 className="text-2xl font-black uppercase text-[#0A0A0A]">{cat.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-[#0A0A0A]/60 bg-[#F5F3EF] border border-[#0A0A0A] px-2 py-1 font-bold">
                    {cat.items.length} ITEMS
                  </span>
                </div>

                <p className="font-mono text-xs text-[#0A0A0A]/80 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {cat.items.map((item) => (
                    <div key={item.id} className="border-2 border-[#0A0A0A] bg-[#FAF9F6] p-4 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span className="font-bold text-[#FF5A1F] uppercase">{item.category}</span>
                          <StatusBadge status={item.status} />
                        </div>
                        <h4 className="font-black text-base uppercase text-[#0A0A0A]">{item.title}</h4>
                        <p className="font-sans text-xs text-[#0A0A0A]/85 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="pt-2 border-t border-[#0A0A0A]/10 font-mono text-[10px] text-[#0A0A0A]/70">
                        <strong>Audit Note:</strong> {item.auditDetail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: KNOWN ISSUES (#1 to #5) */}
        {activeTab === "issues" && (
          <div className="space-y-6 animate-fadeIn font-mono text-xs">
            <div className="bg-[#FFF8F3] border-2 border-[#0A0A0A] p-4 space-y-1">
              <div className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#FF5A1F]" />
                <span>ACTIVE REPOSITORY ISSUE AUDIT (SOURCE REPOSITORY)</span>
              </div>
              <p className="text-[#0A0A0A]/80 font-sans text-xs">
                The issues below were tracked in the repository during the audited commit (5a6e2cb). Privileged operations and marketing claims are strictly constrained until these remediation efforts land.
              </p>
            </div>

            <div className="space-y-4">
              {knownIssues.map((issue) => (
                <div key={issue.id} className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 sm:p-6 brutal-shadow space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#0A0A0A]/15 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm bg-[#0A0A0A] text-[#FFFFFF] px-2 py-0.5">
                        ISSUE #{issue.number}
                      </span>
                      <h4 className="font-black text-base uppercase text-[#0A0A0A]">{issue.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 border border-[#0A0A0A] bg-[#F5F3EF]">
                        {issue.category}
                      </span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[#FF5A1F] text-[#0A0A0A]">
                        {issue.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                    {issue.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-[11px]">
                    <div className="bg-[#F5F3EF] border border-[#0A0A0A] p-2.5">
                      <strong className="text-[#D83B12] uppercase block pb-0.5">Impact:</strong>
                      <span className="text-[#0A0A0A]/80">{issue.impact}</span>
                    </div>
                    <div className="bg-[#F5F3EF] border border-[#0A0A0A] p-2.5">
                      <strong className="text-emerald-700 uppercase block pb-0.5">Current Mitigation:</strong>
                      <span className="text-[#0A0A0A]/80">{issue.workaroundOrMitigation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Software License Reality Note */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-5 space-y-2">
              <div className="font-bold uppercase text-[#0A0A0A] flex items-center justify-between border-b border-[#0A0A0A]/15 pb-1.5">
                <span>PROJECT SOFTWARE LICENSING STATUS</span>
                <span className="text-[#FF5A1F]">ISSUE #4 CONTEXT</span>
              </div>
              <p className="font-sans text-xs text-[#0A0A0A]/80 leading-relaxed">
                The repository documentation states that there is no top-level LICENSE file committed. The Rust workspace declares <code>GPL-3.0-or-later</code> in Cargo.toml manifests, while the Python backend licensing status is currently undeclared. GuruOS does not advertise a definitive project-wide software license until maintainers finalize and commit the top-level resolution.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: CI PIPELINE & TESTING REALITY */}
        {activeTab === "ci" && (
          <div className="space-y-6 animate-fadeIn font-mono text-xs">
            {/* CI Status Callout */}
            <div className="border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 brutal-shadow-orange space-y-4">
              <div className="flex items-center justify-between border-b border-[#FFFFFF]/20 pb-3">
                <div className="font-bold text-[#FF5A1F] uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF5A1F]" />
                  <span>GITHUB ACTIONS CI RUN 38157947896 AUDIT</span>
                </div>
                <span className="bg-[#D83B12] text-[#FFFFFF] px-2 py-0.5 font-bold uppercase text-[10px]">
                  BUILD STEP FAILED
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/85 leading-relaxed">
                A GitHub Actions ISO build run on October 11, 2026 failed at the build step. <strong>We do not present the overall operating system build process as passing based on earlier test runs.</strong> Public release artifacts will only be made downloadable after successful, reproducible CI validation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px]">
                <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3">
                  <div className="text-[#FFFFFF]/50 uppercase font-bold text-[10px]">CI RUN DATE</div>
                  <div className="font-bold text-sm text-[#FFFFFF]">{buildPipeline.lastCiRunDate}</div>
                </div>
                <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3">
                  <div className="text-[#FFFFFF]/50 uppercase font-bold text-[10px]">OUTCOME</div>
                  <div className="font-bold text-sm text-[#D83B12]">{buildPipeline.lastCiRunStatus}</div>
                </div>
                <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3">
                  <div className="text-[#FFFFFF]/50 uppercase font-bold text-[10px]">TOOLING</div>
                  <div className="font-bold text-sm text-[#FF5A1F]">{buildPipeline.builderTool}</div>
                </div>
              </div>
            </div>

            {/* Test Script Reality Check (Prompt Section 11 requirement) */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-5 space-y-3">
              <div className="font-bold uppercase text-[#0A0A0A] flex items-center justify-between border-b border-[#0A0A0A]/15 pb-2">
                <span>TEST SUITE SEPARATION &amp; AUTOMATION REALITY</span>
                <span className="text-[#FF5A1F]">SCRIPTS/TEST.SH</span>
              </div>
              <p className="font-sans text-xs text-[#0A0A0A]/85 leading-relaxed">
                The repository README reports prior verification of 44 Python tests across <code>test_phase2.py</code> and <code>test_phase7.py</code>, along with Rust formatting and workspace checks.
              </p>
              <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] space-y-1">
                <strong>Important CI Discrepancy:</strong> The inspected <code>scripts/test.sh</code> implementation runs Cargo tests but does NOT invoke the Python suite, despite example commands in documentation. Python and Rust CI workflows run separately.
              </div>
              <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] space-y-1">
                <strong>Graphical Acceptance Tests:</strong> A test plan exists for UEFI/BIOS boot, branding, SDDM, Hyprland, physical keyboard interaction, workspaces, AI errors, and first boot (<code>GRAPHICAL_ACCEPTANCE_TEST.md</code>). The existence of a test plan document is not proof that graphical tests passed.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GRANULAR FEATURE MATRIX */}
        {activeTab === "features" && (
          <div className="space-y-6 animate-fadeIn">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFeatures.map((item) => (
                <div 
                  key={item.id}
                  className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-6 brutal-card-hover brutal-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#0A0A0A]/20">
                      <span className="font-mono text-xs font-bold text-[#0A0A0A]/60 uppercase">
                        {item.category}
                      </span>
                      <StatusBadge status={item.status} />
                    </div>

                    <h4 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A0A0A]">
                      {item.name}
                    </h4>

                    <p className="font-sans text-sm sm:text-base font-bold text-[#0A0A0A]/90 leading-snug">
                      {item.description}
                    </p>

                    <div className="p-3 bg-[#F5F3EF] border border-[#0A0A0A] font-mono text-xs text-[#0A0A0A]/80 leading-relaxed">
                      <strong>Technical Audit:</strong> {item.details}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#0A0A0A]/10 font-mono text-[11px] text-[#0A0A0A]/50 flex items-center justify-between">
                    <span>AUDIT ID: {item.id}</span>
                    <span className="text-[#FF5A1F] font-bold">SNAPSHOT 2026</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
