import React from "react";
import { coreFeaturePillars } from "@/data/featuresData";
import { SectionHeader } from "./ui/SectionHeader";
import { 
  Layers, 
  Bot, 
  TerminalSquare, 
  ArrowUpRight, 
  LayoutGrid
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
          categoryTag="CORE CAPABILITIES"
          titlePart1="BUILT FOR CONTROL."
          titlePart2="SHAPED BY FIRE."
          description="Every layer of GuruOS is assembled with intent: native Rust shell, Hyprland Wayland compositor, Arch Linux rolling foundation, and experimental AI workflows."
        />

        {/* Asymmetrical Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeaturePillars.map((feature) => {
            const isDark = feature.theme === "dark";
            const isSoft = feature.theme === "soft";

            return (
              <div
                key={feature.num}
                className={`group relative border-3 border-[#0A0A0A] p-8 brutal-card-hover flex flex-col justify-between min-h-[380px] ${
                  isDark
                    ? "bg-[#0A0A0A] text-[#FFFFFF] brutal-shadow"
                    : isSoft
                    ? "bg-[#F5F3EF] text-[#0A0A0A] brutal-shadow"
                    : "bg-[#FFFFFF] text-[#0A0A0A] brutal-shadow"
                }`}
              >
                {/* Top Row: Number, Tag, and Arrow */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-current/20">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-black text-[#FF5A1F]">
                        {feature.num}
                      </span>
                      <span
                        className={`font-mono text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                          isDark
                            ? "bg-[#171717] border-[#FFFFFF]/20 text-[#FF9B42]"
                            : "bg-[#FFFFFF] border-[#0A0A0A] text-[#0A0A0A]"
                        }`}
                      >
                        {feature.tag}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 border-2 border-current flex items-center justify-center transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        isDark ? "group-hover:bg-[#FF5A1F] group-hover:text-[#0A0A0A]" : "group-hover:bg-[#0A0A0A] group-hover:text-[#FFFFFF]"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 text-current group-hover:text-inherit" />
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="pt-6 space-y-4">
                    {getIcon(feature.iconName)}
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? "text-[#FFFFFF]/75" : "text-[#0A0A0A]/75"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Technical badges */}
                <div className="pt-8 border-t border-current/15 mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
                  {feature.techSpecs.map((spec) => (
                    <span
                      key={spec}
                      className={`px-2 py-1 border font-semibold ${
                        isDark
                          ? "border-[#FFFFFF]/20 bg-[#171717] text-[#FFFFFF]/80"
                          : "border-[#0A0A0A]/30 bg-[#FFFFFF] text-[#0A0A0A]/90"
                      }`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
