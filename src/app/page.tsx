import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductIntro } from "@/components/ProductIntro";
import { FeatureGrid } from "@/components/FeatureGrid";
import { DesktopShowcase } from "@/components/DesktopShowcase";
import { DownloadSection } from "@/components/DownloadSection";
import { InstallationGuide } from "@/components/InstallationGuide";
import { SystemRequirements } from "@/components/SystemRequirements";
import { CommunitySection } from "@/components/CommunitySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0A0A0A]">
      {/* 01: Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Hero: The Fire Launch */}
        <HeroSection />

        {/* 03: Product Introduction (Two-Column Editorial) */}
        <ProductIntro />

        {/* 04: Feature Grid (Asymmetrical Brutalist 4-Card Grid) */}
        <FeatureGrid />

        {/* 05: Desktop Showcase (Immersive Dark Shell & Ask GURUOS HUD) */}
        <DesktopShowcase />

        {/* 06: Download GuruOS (Official Release Panel & Status Guard) */}
        <DownloadSection />

        {/* 07: Installation Guide (From Zero to Guru 4-Step Setup) */}
        <InstallationGuide />

        {/* 08: System Requirements (Brutalist Technical Specs Matrix) */}
        <SystemRequirements />

        {/* 09: Open Source & Community (Built to Be Explored) */}
        <CommunitySection />

        {/* 10: FAQ (Accordion Component with Cautious Draft Answers) */}
        <FAQSection />
      </main>

      {/* 11: Footer (Large Black Footer with Dynamic Year & Back to Top) */}
      <Footer />
    </div>
  );
}
