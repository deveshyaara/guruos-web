"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SparkIcon } from "./icons/SparkIcon";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, ArrowUpRight, Sliders, Disc } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "/#explore" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Features", href: "/#features" },
    { label: "Desktop HUD", href: "/#showcase" },
    { label: "Status & Audit", href: "/#status" },
    { label: "Specs", href: "/#specs" },
    { label: "Release State", href: "/#download" },
    { label: "FAQ", href: "/#faq" },
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
          <nav className="hidden xl:flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2 py-1.5 hover:bg-[#F5F3EF] hover:text-[#FF5A1F] transition-colors border-b-2 border-transparent hover:border-[#FF5A1F]"
              >
                {link.label}
              </Link>
            ))}

            {/* Custom Install Wizard Route Link */}
            <Link
              href="/install"
              className="ml-2 px-3 py-1 bg-[#F5F3EF] border-2 border-[#0A0A0A] text-[#FF5A1F] hover:bg-[#0A0A0A] hover:text-[#FFFFFF] transition-all flex items-center gap-1.5 brutal-shadow hover:translate-x-0.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>CUSTOM INSTALL</span>
              <span className="bg-[#FF5A1F] text-[#FFFFFF] text-[9px] px-1 py-0.2 font-black">WIZARD</span>
            </Link>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/install"
              className="brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] px-4 py-2 text-xs font-black tracking-wider brutal-shadow hover:text-[#FFFFFF] flex items-center gap-1.5"
            >
              <Sliders className="w-4 h-4" />
              <span>INSTALLATION WIZARD</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] cursor-pointer"
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
        <div className="xl:hidden border-t-2 border-[#0A0A0A] bg-[#FFFFFF] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 font-mono text-xs font-bold uppercase">
            <Link
              href="/install"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 bg-[#FFF5F0] border-2 border-[#FF5A1F] text-[#FF5A1F] flex items-center justify-between font-black"
            >
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>CUSTOM INSTALLATION WIZARD</span>
              </span>
              <span>→</span>
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 border-b border-[#0A0A0A]/10 hover:bg-[#F5F3EF] hover:text-[#FF5A1F] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#FF5A1F]">→</span>
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/install"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full brutal-btn bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-2 border-[#0A0A0A] py-3 text-center text-xs font-black tracking-widest brutal-shadow flex items-center justify-center gap-2"
              >
                <span>LAUNCH INSTALLER WIZARD</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
