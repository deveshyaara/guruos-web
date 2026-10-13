"use client";

import React from "react";
import { DesktopComponentToggle } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Layers } from "lucide-react";

interface Step7DesktopProps {
  components: DesktopComponentToggle[];
  onChange: (components: DesktopComponentToggle[]) => void;
}

export const Step7Desktop: React.FC<Step7DesktopProps> = ({ components, onChange }) => {
  const toggleComponent = (id: string) => {
    onChange(
      components.map((comp) => {
        if (comp.id === id) {
          if (comp.isCore) return comp; // Core cannot be disabled
          return { ...comp, enabled: !comp.enabled };
        }
        return comp;
      })
    );
  };

  const categories = ["Core Shell", "Integrations", "External Helpers"] as const;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div>
        <div className="font-mono text-xs font-bold text-[#FF5A1F] uppercase mb-1">
          STEP 07 // DESKTOP COMPONENT CUSTOMIZATION
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] tracking-tight">
          CUSTOMIZE THE DESKTOP.
        </h3>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A]/70 mt-1">
          Select desktop components to include in your installation image. Verified components are clearly distinguished from in-progress prototypes.
        </p>
      </div>

      {/* Integration Maturity Notice */}
      <div className="border-2 border-[#0A0A0A] bg-[#F5F3EF] p-4 sm:p-5 flex items-start gap-3 brutal-shadow">
        <Layers className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
        <div className="font-mono text-xs space-y-1">
          <div className="font-black text-[#0A0A0A] uppercase">
            COMPONENT MATURITY AND HELPER AUDIT
          </div>
          <p className="text-[#0A0A0A]/80 font-sans text-xs leading-relaxed">
            Some desktop functionality currently relies on external helper applications (such as <code>nm-connection-editor</code> for network and <code>pavucontrol</code> for audio) while corresponding native GTK4 widgets are in progress within the 15-crate Rust workspace.
          </p>
        </div>
      </div>

      {/* Component Groups */}
      <div className="space-y-6">
        {categories.map((category) => {
          const groupItems = components.filter((c) => c.category === category);
          if (groupItems.length === 0) return null;

          return (
            <div key={category} className="border-3 border-[#0A0A0A] bg-[#FFFFFF] p-5 sm:p-6 brutal-shadow space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2">
                <span className="font-mono text-xs font-bold uppercase text-[#0A0A0A] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
                  <span>{category.toUpperCase()} STACK</span>
                </span>
                <span className="font-mono text-[11px] text-[#0A0A0A]/60">
                  {groupItems.filter((i) => i.enabled).length} OF {groupItems.length} ENABLED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                {groupItems.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => toggleComponent(comp.id)}
                    className={`border-2 p-3.5 transition-all flex flex-col justify-between space-y-2 cursor-pointer ${
                      comp.enabled
                        ? "bg-[#FFFFFF] border-[#0A0A0A] hover:border-[#FF5A1F] brutal-shadow"
                        : "bg-[#F5F3EF] border-[#0A0A0A]/30 opacity-70"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-1.5 border-b border-[#0A0A0A]/10">
                        <span className="font-bold text-xs uppercase text-[#0A0A0A] flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={comp.enabled}
                            disabled={comp.isCore}
                            onChange={() => toggleComponent(comp.id)}
                            className="accent-[#FF5A1F] w-4 h-4 cursor-pointer"
                          />
                          <span>{comp.name}</span>
                        </span>
                        <StatusBadge status={comp.status} />
                      </div>

                      <p className="text-[11px] text-[#0A0A0A]/80 font-sans pt-1 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[10px] text-[#0A0A0A]/50">
                      <span>{comp.isCore ? "CORE MANDATORY" : "OPTIONAL MODULE"}</span>
                      <span className={comp.enabled ? "text-[#FF5A1F] font-bold" : "text-[#0A0A0A]/40"}>
                        {comp.enabled ? "ACTIVE" : "EXCLUDED"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
