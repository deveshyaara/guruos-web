"use client";

import React from "react";
import { SparkIcon } from "./icons/SparkIcon";
import { Terminal, Cpu, Sparkles } from "lucide-react";

export const ProductIntro: React.FC = () => {
  return (
    <section id="explore" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical Section Header Monospace Badge */}
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#0A0A0A]">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>SECTION 02 // ARCHITECTURE & VISION</span>
          </div>
          <div className="font-mono text-xs text-[#0A0A0A]/60 hidden sm:block">
            // STATUS: EXPERIMENTAL PROTOCOL
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Editorial Heading */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-[#0A0A0A] leading-[0.92]">
              NOT JUST <br />
              <span className="text-[#FF5A1F]">ANOTHER</span> <br />
              DESKTOP.
            </h2>

            <div className="border-l-4 border-[#0A0A0A] pl-4 py-1 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#FF5A1F] font-bold">
                BUILT FROM SCRATCH // NO BLOAT
              </p>
              <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-medium">
                Modern desktop operating systems have become opaque silos that hide how things work. GuruOS brings back raw transparency, high performance, and deep command over your machine.
              </p>
            </div>

            {/* Small Brutalist Graphic Box */}
            <div className="p-4 bg-[#F5F3EF] border-2 border-[#0A0A0A] brutal-shadow space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#0A0A0A]">
                <SparkIcon className="w-4 h-4 text-[#FF5A1F]" />
                <span>CORE FOUNDATION SPECS</span>
              </div>
              <ul className="font-mono text-xs text-[#0A0A0A]/80 space-y-1">
                <li>• Linux Kernel: 6.x (Arch-rolling)</li>
                <li>• Compositor: Hyprland (Wayland)</li>
                <li>• Desktop Shell: Native GTK4 (Rust-based)</li>
                <li>• Intelligence: Ask GURUOS Engine</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative & Three Bold Statements */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview Explanation */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-[#0A0A0A] font-medium leading-relaxed">
                Meet <strong className="font-black text-[#0A0A0A]">GuruOS</strong> — an Arch Linux-based desktop experience built around a distinctive native shell and an integrated AI-assisted workflow. Take control of your desktop, explore the system, and make it yours.
              </p>
              <p className="text-base text-[#0A0A0A]/70 leading-relaxed">
                Rather than treating the user as a passive consumer, GuruOS provides intuitive native system controls alongside open configuration files. Every component is designed to be inspected, understood, and reshaped. Planned capabilities are being built iteratively in the open.
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
                      <span>YOUR WORKSPACE</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        GTK4 + HYPRLAND
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      A desktop experience built around dynamic workspaces and a custom native panel. Smooth Wayland gestures, ultra-responsive tiling, and zero unnecessary background processes.
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
                      <span>YOUR COMMAND CENTER</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        ASK GURUOS
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      Ask GURUOS brings an AI-assisted interaction concept directly into the desktop workflow. Ask questions about your setup, manage system configuration with natural language, and get instant technical assistance without leaving your terminal.
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
                      <span>YOUR SYSTEM</span>
                      <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase border border-[#FF5A1F] px-2 py-0.5">
                        ARCH LINUX
                      </span>
                    </h3>
                    <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
                      An Arch Linux-based foundation for people interested in customizing and exploring their computing environment. Tap into the official Arch repositories and the AUR with bleeding-edge packages and total user sovereignty.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Disclaimer on experimental nature */}
            <div className="font-mono text-xs text-[#0A0A0A]/60 bg-[#F5F3EF] border border-[#0A0A0A] p-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A1F]" />
              <span>NOTE: Features in development prototype stages are actively being shaped. We do not make claims of unverified stability or features not yet in the build.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
