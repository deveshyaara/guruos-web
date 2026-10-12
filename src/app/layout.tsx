import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.productName} — ${siteConfig.headline} ${siteConfig.tagline}`,
  description: siteConfig.supportingStatement,
  metadataBase: new URL(siteConfig.siteUrl),
  authors: [{ name: "GuruOS Project Team" }],
  keywords: [
    "GuruOS",
    "Arch Linux",
    "Hyprland",
    "Wayland",
    "GTK4 Desktop Shell",
    "Rust Shell",
    "Ask GURUOS",
    "Independent Operating System",
    "Linux Desktop",
  ],
  openGraph: {
    title: `${siteConfig.productName} — ${siteConfig.headline}`,
    description: siteConfig.supportingStatement,
    url: siteConfig.siteUrl,
    siteName: siteConfig.productName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.productName} — ${siteConfig.headline}`,
    description: siteConfig.supportingStatement,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] selection:bg-[#FF5A1F] selection:text-[#0A0A0A] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
