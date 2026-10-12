"use client";

import React, { useState } from "react";
import { faqList } from "@/data/faqData";
import { SectionHeader } from "./ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          sectionNumber="11"
          categoryTag="FREQUENTLY ASKED QUESTIONS"
          titlePart1="CLARITY &"
          titlePart2="TRANSPARENCY."
          description="Realistic, verified answers regarding GuruOS architecture, data safety, and development status."
        />

        {/* Accordion Component List */}
        <div className="divide-y-2 divide-[#0A0A0A] border-y-2 border-[#0A0A0A]">
          {faqList.map((faq, index) => {
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
