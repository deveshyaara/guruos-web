"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SparkIcon } from "./icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenInstallModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "Features", href: "#features" },
    { label: "Showcase", href: "#showcase" },
    { label: "Download", href: "#download" },
    { label: "Installation", href: "#installation" },
    { label: "System Specs", href: "#specs" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark with Spark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            aria-label="GuruOS Home"
          >
            <div className="w-8 h-8 bg-[#0A0A0A] flex items-center justify-center border border-[#0A0A0A] group-hover:bg-[#FF5A1F] transition-colors">
              <SparkIcon className="w-5 h-5 transition-transform group-hover:rotate-45" color="#FFFFFF" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-2xl tracking-tighter uppercase text-[#0A0A0A]">
                {siteConfig.siteName}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest font-semibold px-1.5 py-0.5 bg-[#F5F3EF] border border-[#0A0A0A] uppercase">
                ARCH / HYPRLAND
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 hover:bg-[#F5F3EF] hover:text-[#FF5A1F] transition-colors border-b-2 border-transparent hover:border-[#FF5A1F]"
              >
                {link.label}
              </a>
            ))}
            {siteConfig.documentationUrl && (
              <a
                href={siteConfig.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 flex items-center gap-0.5 hover:bg-[#F5F3EF] hover:text-[#FF5A1F] transition-colors"
              >
                Docs
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A1F]" />
              </a>
            )}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#download"
              className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-5 py-2.5 text-xs font-black tracking-wider brutal-shadow hover:text-[#FFFFFF]"
            >
              <span>GET GURUOS</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t-2 border-[#0A0A0A] bg-[#FFFFFF] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 font-mono text-sm font-bold uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 border-b border-[#0A0A0A]/10 hover:bg-[#F5F3EF] hover:text-[#FF5A1F] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#FF5A1F]">→</span>
              </a>
            ))}
            {siteConfig.documentationUrl && (
              <a
                href={siteConfig.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 border-b border-[#0A0A0A]/10 hover:bg-[#F5F3EF] flex items-center justify-between text-[#0A0A0A]"
              >
                <span>Documentation</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5A1F]" />
              </a>
            )}
            <div className="pt-4">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3 text-center text-xs font-black tracking-widest brutal-shadow"
              >
                GET GURUOS ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
