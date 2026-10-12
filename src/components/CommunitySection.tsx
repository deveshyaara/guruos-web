"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { SparkIcon, StarburstSpark } from "./icons/SparkIcon";
import { BrutalFlame } from "./icons/BrutalFlame";
import { GithubIcon } from "./icons/GithubIcon";
import { 
  BookOpen, 
  MessageSquare, 
  ArrowUpRight, 
  Terminal, 
  Code,
  Users
} from "lucide-react";

export const CommunitySection: React.FC = () => {
  return (
    <section className="relative bg-[#0A0A0A] text-[#FFFFFF] py-20 lg:py-28 border-b-2 border-[#0A0A0A] overflow-hidden">
      {/* Subtle fire glow background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FF5A1F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Container */}
        <div className="border-3 border-[#FFFFFF]/30 bg-[#121212] p-8 sm:p-12 lg:p-16 brutal-shadow-orange-lg">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase bg-[#FF5A1F] text-[#0A0A0A] px-3 py-1">
              <SparkIcon className="w-3.5 h-3.5" color="#0A0A0A" />
              <span>SECTION 08 // COMMUNITY & SOURCE</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#FFFFFF] leading-[0.92]">
              BUILT TO BE <br />
              <span className="text-[#FF5A1F]">EXPLORED.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#FFFFFF]/85 font-medium leading-relaxed">
              Linux is more than an operating system. It&apos;s an invitation to learn, build, and make computing your own. Follow the development of GuruOS, explore the source, and help shape what comes next.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {siteConfig.githubRepoUrl && (
                <a
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-[#FF5A1F] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] text-[#FFFFFF] border-2 border-[#FF5A1F] px-8 py-4 text-xs sm:text-sm font-black tracking-wider brutal-shadow-white"
                >
                  <GithubIcon className="w-4 h-4 mr-2" />
                  <span>VIEW SOURCE ON GITHUB</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </a>
              )}

              {siteConfig.documentationUrl && (
                <a
                  href={siteConfig.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-[#181818] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] text-[#FFFFFF] border-2 border-[#FFFFFF]/40 px-6 py-4 text-xs sm:text-sm font-bold tracking-wider"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-[#FF5A1F]" />
                  <span>READ THE DOCUMENTATION</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#FF5A1F]" />
                </a>
              )}
            </div>

            {/* Active Community Links (Explicitly configured only) */}
            <div className="pt-8 border-t border-[#FFFFFF]/15 flex flex-wrap items-center gap-6 font-mono text-xs text-[#FFFFFF]/70">
              {siteConfig.discussionsUrl && (
                <a
                  href={siteConfig.discussionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF5A1F]" />
                  <span>GitHub Discussions ↗</span>
                </a>
              )}

              {siteConfig.communityDiscordUrl ? (
                <a
                  href={siteConfig.communityDiscordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
                >
                  <Users className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Discord Community ↗</span>
                </a>
              ) : (
                <span className="text-[#FFFFFF]/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#FF5A1F]/50" />
                  <span>Chat Channels (Opening Post-Alpha)</span>
                </span>
              )}

              <span className="text-[#FFFFFF]/40 font-mono text-[11px]">
                // LICENSED UNDER OPEN SOURCE PRINCIPLES
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
