"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./WaitlistForm";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showWaitlist?: boolean;
  variant?: "default" | "compact";
}

export function CTASection({
  title = "Ready to Transform Your Kubernetes Operations?",
  subtitle = "Join the waitlist for early access and be among the first to experience autonomous incident management.",
  primaryCta = { text: "Request Early Access", href: "/contact" },
  secondaryCta = { text: "Book Founder Call", href: "/contact" },
  showWaitlist = false,
  variant = "default",
}: CTASectionProps) {
  if (variant === "compact") {
    return (
      <div className="text-center py-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryCta.href}>
            <Button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0 glow-primary">
              {primaryCta.text}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button variant="outline" className="border-[rgba(99,102,241,0.3)] text-[#a1a1aa] hover:text-white hover:bg-[#16161e]">
              {secondaryCta.text}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a855f7]/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title.split(" ").map((word, i) => (
              <span key={i}>
                {word === "Kubernetes" || word === "Transform" || word === "Operations?" ? (
                  <span className="gradient-text">{word} </span>
                ) : (
                  `${word} `
                )}
              </span>
            ))}
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          {showWaitlist ? (
            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={primaryCta.href}>
                <Button size="lg" className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0 glow-primary h-14 px-8">
                  {primaryCta.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="border-[rgba(99,102,241,0.3)] text-[#a1a1aa] hover:text-white hover:bg-[#16161e] h-14 px-8">
                  {secondaryCta.text}
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
