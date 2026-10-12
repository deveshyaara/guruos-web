import React from "react";
import { SparkIcon } from "./icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";

export const ProductIntro: React.FC = () => {
  return (
    <section id="explore" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical Section Header Monospace Badge */}
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#0A0A0A]">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>SECTION 02 // IDENTITY & PHILOSOPHY</span>
          </div>
          <div className="font-mono text-xs text-[#0A0A0A]/60 hidden sm:block">
            {"// STATUS: DEVELOPMENT PREVIEW // ARCH-BASED"}
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Editorial Heading */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-[#0A0A0A] leading-[0.92]">
              NOT JUST <br />
              <span className="text-[#FF5A1F]">A THEME.</span> <br />
              A SHELL.
            </h2>

            <div className="border-l-4 border-[#0A0A0A] pl-4 py-1 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#FF5A1F] font-bold">
                DISTINCT LINUX IDENTITY // NO FORCED DEFAULTS
              </p>
              <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-medium">
                The project focuses on creating a recognizable, customizable Linux desktop experience rather than simply applying a theme to a stock desktop environment.
              </p>
            </div>

            {/* Small Brutalist Graphic Box */}
            <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] brutal-shadow space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                <SparkIcon className="w-4 h-4 text-[#FF5A1F]" />
                <span>ARCHITECTURAL SNAPSHOT</span>
              </div>
              <ul className="font-mono text-xs text-[#0A0A0A]/80 space-y-1">
                <li>• Base: Arch Linux rolling-release foundation</li>
                <li>• Compositor: Hyprland (Wayland display protocol)</li>
                <li>• Desktop Shell: Native Rust (GTK4 + libadwaita)</li>
                <li>• Workflow: Experimental Ask GURUOS assistant</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative & Three Bold Statements */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview Explanation */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-[#0A0A0A] font-medium leading-relaxed">
                Meet <strong className="font-black text-[#0A0A0A]">{siteConfig.productName}</strong> — {siteConfig.supportingStatement}
              </p>
              <p className="text-base text-[#0A0A0A]/70 leading-relaxed">
                GuruOS is built for developers, Linux enthusiasts, students, contributors, and technically curious users. It is an independent engineering project with an expressive aesthetic, an open-source mindset, and honest technical boundaries.
              </p>
            </div>

            <hr className="border-t-2 border-[#0A0A0A]" />

            {/* Three Bold Feature Statements */}
            <div className="space-y-8">
              
              {/* Statement 01 */}
              <div className="group relative border-2 border-[#0A0A0A] p-6 bg-[#FFFFFF] hover:bg-[#F5F3EF] transition-all brutal-shadow hover:translate-x-1">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#FF5A1F]">
                    01
                  </span>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#0A0A0A] flex items-center justify-between">
                      <span>NATIVE GTK4 SHELL</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        RUST + LAYER-SHELL
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      A custom top panel written in Rust using GTK4, libadwaita, and gtk4-layer-shell. Integrates desktop branding, dynamic workspace buttons, and native system controls with zero bloated web runtimes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Statement 02 */}
              <div className="group relative border-2 border-[#0A0A0A] p-6 bg-[#FFFFFF] hover:bg-[#F5F3EF] transition-all brutal-shadow hover:translate-x-1">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#FF5A1F]">
                    02
                  </span>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#0A0A0A] flex items-center justify-between">
                      <span>HYPRLAND WORKSPACES</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        WAYLAND PROTOCOL
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      Hyprland powers dynamic workspace management and fluid window tiling over the Wayland display protocol. Panel workspace buttons synchronize directly with Hyprland workspace state.
                    </p>
                  </div>
                </div>
              </div>

              {/* Statement 03 */}
              <div className="group relative border-2 border-[#0A0A0A] p-6 bg-[#FFFFFF] hover:bg-[#F5F3EF] transition-all brutal-shadow hover:translate-x-1">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#FF5A1F]">
                    03
                  </span>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-[#0A0A0A] flex items-center justify-between">
                      <span>ASK GURUOS WORKFLOW</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        EXPERIMENTAL AI
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      A native text-entry field in the top panel triggers an interactive chat workflow upon pressing Enter. Tested in development with Ollama and a separate GuruOS MCP service for local agent experimentation.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Disclaimer on experimental nature */}
            <div className="font-mono text-xs text-[#0A0A0A]/70 bg-[#F5F3EF] border border-[#0A0A0A] p-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A1F]" />
              <span>HONEST SCOPE: GuruOS is an Arch-based desktop experience, not a proprietary kernel or a finished commercial appliance.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
