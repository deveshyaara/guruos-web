import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductIntro } from "@/components/ProductIntro";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { DesktopShowcase } from "@/components/DesktopShowcase";
import { SystemRequirements } from "@/components/SystemRequirements";
import { DevelopmentStatus } from "@/components/DevelopmentStatus";
import { DownloadSection } from "@/components/DownloadSection";
import { InstallationGuide } from "@/components/InstallationGuide";
import { CommunitySection } from "@/components/CommunitySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0A0A0A]">
      {/* 01: Global Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Hero: The Fire Launch */}
        <HeroSection />

        {/* 03: Product Identity & Philosophy (Editorial Overview) */}
        <ProductIntro />

        {/* 04: Visual Desktop Architecture (The 4 Layers & 9 Panel Items) */}
        <ArchitectureSection />

        {/* 05: Feature Grid (Asymmetrical Brutalist Pillars) */}
        <FeatureGrid />

        {/* 06: Desktop Showcase (Interactive HUD, 9 Panel Items, Ask GURUOS Chat) */}
        <DesktopShowcase />

        {/* 07: System Requirements (Brutalist Technical Specs Matrix) */}
        <SystemRequirements />

        {/* 08: Development Status & Known Limitations (Explicit 5-Badge Taxonomy) */}
        <DevelopmentStatus />

        {/* 09: Download GuruOS (Official Release Panel & Status Guard) */}
        <DownloadSection />

        {/* 10: Installation Guide (From Zero to Guru 4-Step Setup) */}
        <InstallationGuide />

        {/* 11: Open Source & Community (Built to Be Explored) */}
        <CommunitySection />

        {/* 12: FAQ (Accordion Component with Transparent Answers) */}
        <FAQSection />
      </main>

      {/* 13: Footer (Brutalist Black Footer with Dynamic Year & Navigation) */}
      <Footer />
    </div>
  );
}
