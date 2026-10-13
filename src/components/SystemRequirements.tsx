import React from "react";
import { systemSpecifications } from "@/data/specificationsData";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeader } from "./ui/SectionHeader";
import { StatusBadge } from "./ui/StatusBadge";
import { 
  Cpu, 
  Layers, 
  HardDrive, 
  AlertTriangle, 
  Info, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const SystemRequirements: React.FC = () => {
  const { referenceHardware } = siteConfig;

  return (
    <section id="specs" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="06"
          categoryTag="TECHNICAL SPECIFICATIONS & AUDIT"
          titlePart1="SYSTEM"
          titlePart2="SPECIFICATIONS."
          description="Factual technical matrix. System requirements remain under active evaluation; developer reference hardware is documented below without fabricated minimum claims."
        />

        {/* Known Developer Reference Machine Banner (Prompt Requirement) */}
        <div className="mb-12 border-3 border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF] p-6 sm:p-8 brutal-shadow-lg space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#FFFFFF]/20 gap-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#FF5A1F]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
                DOCUMENTED DEVELOPER HARDWARE REFERENCE (NOT OFFICIAL MINIMUMS)
              </span>
            </div>
            <span className="font-mono text-[10px] bg-[#141414] border border-[#FF5A1F] text-[#FF9B42] px-2 py-0.5 font-bold uppercase">
              AUDITED BENCHMARK RIG
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3.5 space-y-1">
              <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">CPU & CORES</div>
              <div className="font-bold text-sm text-[#FFFFFF]">{referenceHardware.cpu}</div>
              <div className="text-[10px] text-[#FF5A1F] font-bold">{referenceHardware.cpuCores} Physical Cores</div>
            </div>

            <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3.5 space-y-1">
              <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">MEMORY ALLOCATION</div>
              <div className="font-bold text-sm text-[#FFFFFF]">~{referenceHardware.ramGb} GiB RAM</div>
              <div className="text-[10px] text-[#FFFFFF]/70">DDR3 System Memory</div>
            </div>

            <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3.5 space-y-1">
              <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">GRAPHICS & DRIVERS</div>
              <div className="font-bold text-xs text-[#FFFFFF]">{referenceHardware.graphics}</div>
              <div className="text-[10px] text-[#FF9B42]">CUDA/ROCm: {referenceHardware.gpuAcceleration}</div>
            </div>

            <div className="bg-[#141414] border border-[#FFFFFF]/15 p-3.5 space-y-1">
              <div className="text-[10px] text-[#FFFFFF]/50 uppercase font-bold">WI-FI & INFERENCE</div>
              <div className="font-bold text-xs text-[#FFFFFF]">{referenceHardware.wifiCard}</div>
              <div className="text-[10px] text-emerald-400 font-bold">{referenceHardware.inferenceMode}</div>
            </div>
          </div>

          <div className="p-3 bg-[#171717] border border-[#FFFFFF]/20 font-mono text-xs text-[#FFFFFF]/80 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Technical Honesty Clause:</strong> {referenceHardware.statusNotes} Local AI performance depends on CPU speed, memory bandwidth, model size, quantization format (Q4_K_M), context window length, and available hardware acceleration. We do not invent official minimum specifications.
            </p>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="border-3 border-[#0A0A0A] bg-[#FFFFFF] brutal-shadow-lg overflow-hidden mb-12">
          
          {/* Table Header Row */}
          <div className="bg-[#0A0A0A] text-[#FFFFFF] px-6 py-3.5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
              <span>CORE ARCHITECTURAL MATRIX</span>
            </div>
            <div className="hidden sm:block text-[#FFFFFF]/50 text-[11px]">
              TARGET: X86_64 // ARCH-WAYLAND
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-[#0A0A0A]">
            {systemSpecifications.map((row, index) => (
              <div
                key={row.spec}
                className={`grid grid-cols-1 sm:grid-cols-12 px-6 py-4 items-center transition-colors hover:bg-[#F5F3EF] ${
                  index % 2 === 1 ? "bg-[#FAF9F6]" : "bg-[#FFFFFF]"
                }`}
              >
                {/* Specification Name (5 cols) */}
                <div className="sm:col-span-5 font-mono text-xs sm:text-sm font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
                  <span className="text-[#FF5A1F] font-mono text-xs">{(index + 1).toString().padStart(2, '0')}.</span>
                  <span>{row.spec}</span>
                </div>

                {/* Value (5 cols) */}
                <div className="sm:col-span-5 font-mono text-xs sm:text-sm text-[#0A0A0A] py-1 sm:py-0">
                  <span className={row.type === "unverified" ? "text-[#0A0A0A]/70 italic" : "font-bold text-[#0A0A0A]"}>
                    {row.value}
                  </span>
                </div>

                {/* Verification Status (2 cols) */}
                <div className="sm:col-span-2 flex sm:justify-end">
                  <StatusBadge status={row.status} />
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Banner */}
          <div className="bg-[#F5F3EF] px-6 py-4 border-t-2 border-[#0A0A0A] font-mono text-xs text-[#0A0A0A]/85 space-y-1">
            <div className="font-bold text-[#0A0A0A] uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>LOW-MEMORY DEFERRAL CAPABILITY</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Low-memory systems (&lt;8 GB RAM) are supported through capability profiles: users can defer or disable local LLM execution in the installation planner, retaining a fast, responsive Wayland desktop experience without out-of-memory pressure.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
