import React from "react";
import Link from "next/link";
import { SparkIcon } from "./icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";
import { 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Workflow, 
  Layers, 
  Lock,
  ArrowRight
} from "lucide-react";

export const ProductIntro: React.FC = () => {
  const designGoals = [
    {
      num: "01",
      title: "Integrating AI Closer to the Operating System",
      description:
        "Rather than relegating AI to an isolated browser tab or Electron window, GuruOS integrates Ask GURUOS directly into the native Rust/GTK4 top panel, establishing an immediate desktop entrypoint.",
      tag: "SHELL INTEGRATION",
      icon: Terminal,
    },
    {
      num: "02",
      title: "Exploring Local Inference",
      description:
        "Running local models (Ollama serving Qwen2.5-3B-Instruct quantized) to test latency, resource limits, and developer workflows directly on the machine without mandatory cloud subscriptions.",
      tag: "LOCAL INFERENCE",
      icon: Cpu,
    },
    {
      num: "03",
      title: "Useful System & Developer Context",
      description:
        "Providing read-only developer context—including git log, git status, service status, system statistics, and directory trees—to assist programmers in their daily terminal and editor workflow.",
      tag: "DEVELOPER CONTEXT",
      icon: Workflow,
    },
    {
      num: "04",
      title: "Separating LLM Output from Executable System Actions",
      description:
        "Language model outputs are never executed as arbitrary shell strings. Requests pass through strict Pydantic validation and an allow-listed tool registry to enforce clear boundaries against unintended modifications.",
      tag: "BOUNDED TOOLS",
      icon: ShieldCheck,
    },
    {
      num: "05",
      title: "Explicit, Reproducible Deployment Process",
      description:
        "Building an explicit, auditable ArchISO pipeline and first-boot setup workflow that eliminates brittle manual scripts and packages configurations in clean, portable system schemas.",
      tag: "REPRODUCIBLE OS",
      icon: Layers,
    },
  ];

  return (
    <section id="explore" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Monospace Header */}
        <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#0A0A0A]">
            <span className="w-2.5 h-2.5 bg-[#FF5A1F]" />
            <span>SECTION 02 // WHY GURUOS & DESIGN GOALS</span>
          </div>
          <div className="font-mono text-xs text-[#0A0A0A]/60 hidden sm:block">
            {`// STATUS: ${siteConfig.statusLabel}`}
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Big Editorial Heading */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-[#0A0A0A] leading-[0.92]">
              WHY <br />
              <span className="text-[#FF5A1F]">GURUOS?</span> <br />
              DESIGN GOALS.
            </h2>

            <div className="border-l-4 border-[#0A0A0A] pl-4 py-1 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#FF5A1F] font-bold">
                EXPERIMENT IN DESKTOP INTELLIGENCE
              </p>
              <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-medium">
                GuruOS explores how a Linux desktop can combine system information, developer assistance, local inference, and controlled OS interactions without sacrificing transparency or control.
              </p>
            </div>

            {/* Privacy & Security Design Goal Box */}
            <div className="p-5 bg-[#F5F3EF] border-2 border-[#0A0A0A] brutal-shadow space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 font-bold uppercase text-[#0A0A0A]">
                <Lock className="w-4 h-4 text-[#FF5A1F]" />
                <span>PRIVACY & SECURITY BOUNDARIES</span>
              </div>
              <p className="text-[#0A0A0A]/85 font-sans leading-relaxed text-xs">
                We frame privacy and security as <strong>design goals supported by implementation boundaries</strong>, not absolute marketing guarantees. GuruOS bounds model execution through an allow-listed tool layer, but package downloads, setup fetching, and web browsing use standard network connections.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Design Goals Cards */}
          <div className="lg:col-span-7 space-y-4">
            {designGoals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.num}
                  className="group relative border-2 border-[#0A0A0A] p-5 bg-[#FFFFFF] hover:bg-[#F5F3EF] transition-all brutal-shadow hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-black text-[#FF5A1F]">
                      {goal.num}
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase text-[#0A0A0A]">
                          {goal.title}
                        </h3>
                        <span className="font-mono text-[10px] text-[#0A0A0A]/60 font-bold uppercase border border-[#0A0A0A]/30 px-1.5 py-0.5">
                          {goal.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-sans">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
