import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tagent - Autonomous AI for Kubernetes Operations",
  description: "Tagent is an AI-powered Kubernetes incident intelligence and remediation platform. Automate root cause analysis, incident response, and preventive operations with AI-native SRE capabilities.",
  keywords: ["Kubernetes", "AI", "SRE", "Incident Management", "Root Cause Analysis", "Auto-Remediation", "DevOps", "Cloud Native", "Observability"],
  authors: [{ name: "Tagent Team" }],
  icons: {
    icon: "/tagent-logo.png",
  },
  openGraph: {
    title: "Tagent - Autonomous AI for Kubernetes Operations",
    description: "AI-powered Kubernetes incident intelligence and remediation platform. Built for production. Designed for trust.",
    url: "https://tagent.io",
    siteName: "Tagent",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "Tagent - AI for Kubernetes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tagent - Autonomous AI for Kubernetes Operations",
    description: "AI-powered Kubernetes incident intelligence and remediation platform",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
