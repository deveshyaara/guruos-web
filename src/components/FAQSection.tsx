"use client";

import React, { useState } from "react";
import { SparkIcon } from "./icons/SparkIcon";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is GuruOS?",
      answer: "GuruOS is an independent Linux operating system project built on an Arch Linux foundation. It pairs the Hyprland Wayland compositor with a custom GTK4 desktop shell written in Rust and integrates an experimental AI-assisted desktop interface called Ask GURUOS. It is designed to deliver a high-performance, transparent desktop environment for developers and power users.",
      tag: "CORE IDENTITY",
    },
    {
      id: "faq-2",
      question: "Is GuruOS based on Arch Linux?",
      answer: "Yes. GuruOS uses Arch Linux as its underlying base. This provides direct access to rolling-release packages, the Arch User Repository (AUR), and standard pacman package management, without adding an artificial layer of abstraction over core system files.",
      tag: "SYSTEM BASE",
    },
    {
      id: "faq-3",
      question: "Who is GuruOS designed for?",
      answer: "GuruOS is created for developers, Linux enthusiasts, system experimenters, and curious power users who want a responsive, keyboard-driven Wayland desktop with native system controls. It is not intended as a locked-down consumer appliance, but as an open system meant to be understood and customized.",
      tag: "AUDIENCE",
    },
    {
      id: "faq-4",
      question: "How do I download GuruOS?",
      answer: "During the initial prototype and pre-release development phase, public ISO images are actively being built and tested internally. You can register for launch notifications in the Download section above or monitor the official GitHub repository for published releases and signed images.",
      tag: "DISTRIBUTION",
    },
    {
      id: "faq-5",
      question: "How do I install GuruOS?",
      answer: "Once the ISO build is released, you will flash the image to a USB flash drive (using tools like Balena Etcher or Rufus), boot from the USB using your computer's boot menu, and follow the step-by-step installer. Exact installer behavior, partitioning tools, and post-install configuration scripts depend on the specific build and are documented in the release notes.",
      tag: "INSTALLATION",
    },
    {
      id: "faq-6",
      question: "Will installing GuruOS erase my existing files?",
      answer: "If you choose to erase your entire drive during installation, yes — all existing partitions and files on that disk will be permanently removed. If you configure manual partitioning or a separate disk, other drives can be preserved. However, because partitioning and filesystem operations carry inherent risk, you must always back up all critical files to an external location before starting.",
      tag: "DATA SAFETY",
    },
    {
      id: "faq-7",
      question: "Can I try GuruOS without replacing my current operating system?",
      answer: "In typical Linux releases, live USB sessions and virtualization tools (such as QEMU/KVM, VirtualBox, or VMware) allow testing the system without altering disk drives. Whether a fully functioning live desktop session or dual-boot wizard is supported depends on the specific build image, so please verify live session capabilities in the release notes for your version.",
      tag: "TRIAL & VIRTUALIZATION",
    },
    {
      id: "faq-8",
      question: "Where can I report bugs or contribute?",
      answer: "You can track development, submit bug reports, and join technical conversations through the official GitHub repository and discussions once open. As an open-source-minded project, feedback and issue triage will follow standard public issue tracking.",
      tag: "CONTRIBUTING",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-[#0A0A0A] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-[#FF5A1F] mb-2">
              <SparkIcon className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>SECTION 09 // FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#0A0A0A]">
              CLARITY & <br />
              <span className="text-[#FF5A1F]">TRANSPARENCY.</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-[#0A0A0A]/70 font-medium">
            Realistic, verified answers regarding GuruOS architecture, data safety, and development status.
          </p>
        </div>

        {/* Accordion Component List */}
        <div className="divide-y-2 divide-[#0A0A0A] border-y-2 border-[#0A0A0A]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="transition-colors hover:bg-[#F5F3EF]">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleAccordion(index);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left py-6 px-4 sm:px-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:bg-[#F5F3EF] cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <span className="font-mono text-sm font-black text-[#FF5A1F] shrink-0 pt-0.5">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-1">
                      <span className="block font-black text-lg sm:text-xl uppercase text-[#0A0A0A] tracking-tight">
                        {faq.question}
                      </span>
                      <span className="inline-block font-mono text-[10px] uppercase font-bold text-[#0A0A0A]/50 bg-[#FFFFFF] border border-[#0A0A0A]/30 px-1.5 py-0.5">
                        {faq.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] shrink-0 text-[#0A0A0A]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#FF5A1F]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-4 sm:px-6 pb-6 pt-1 animate-fadeIn"
                  >
                    <div className="pl-7 sm:pl-9 border-l-2 border-[#FF5A1F]">
                      <p className="text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sub-note */}
        <div className="mt-8 font-mono text-xs text-[#0A0A0A]/60 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF5A1F]" />
          <span>Have an unanswered question? Check the GitHub repository or review the draft installation documentation above.</span>
        </div>

      </div>
    </section>
  );
};
