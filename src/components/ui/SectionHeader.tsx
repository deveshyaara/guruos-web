import React from "react";
import { SparkIcon } from "@/components/icons/SparkIcon";

export interface SectionHeaderProps {
  sectionNumber: string;
  categoryTag: string;
  titlePart1: string;
  titlePart2?: string;
  description?: string;
  className?: string;
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  categoryTag,
  titlePart1,
  titlePart2,
  description,
  className = "",
  isDark = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 gap-4 ${
        isDark ? "border-b border-[#FFFFFF]/20 text-[#FFFFFF]" : "border-b-2 border-[#0A0A0A] text-[#0A0A0A]"
      } ${className}`}
    >
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#FF5A1F] mb-2">
          <SparkIcon className="w-3.5 h-3.5 text-[#FF5A1F]" />
          <span>{`SECTION ${sectionNumber} // ${categoryTag}`}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.92]">
          {titlePart1}{" "}
          {titlePart2 && <span className="text-[#FF5A1F]">{titlePart2}</span>}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-md font-mono text-xs sm:text-sm font-medium ${
            isDark ? "text-[#FFFFFF]/70" : "text-[#0A0A0A]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
