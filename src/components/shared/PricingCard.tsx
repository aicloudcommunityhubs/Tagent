"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: {
    text: string;
    href: string;
  };
  badge?: string;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  cta = { text: "Get Started", href: "/contact" },
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`relative h-full p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-b from-[#111119] to-[#0d0d14] border-2 border-[#6366f1] glow-primary"
          : "bg-[#111119] border border-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.3)]"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-[#71717a] text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Custom" && price !== "Free" && (
            <span className="text-[#71717a]">/month</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-start gap-3"
          >
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              highlighted
                ? "bg-gradient-to-br from-[#6366f1] to-[#a855f7]"
                : "bg-[#16161e]"
            }`}>
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-[#a1a1aa] text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={cta.href} className="block">
        <Button
          className={`w-full h-12 ${
            highlighted
              ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0"
              : "bg-[#16161e] hover:bg-[#1f1f2e] text-white border border-[rgba(99,102,241,0.3)]"
          }`}
        >
          {cta.text}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </motion.div>
  );
}

interface PricingGridProps {
  plans: Array<{
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    cta?: {
      text: string;
      href: string;
    };
    badge?: string;
  }>;
}

export function PricingGrid({ plans }: PricingGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.name} {...plan} />
      ))}
    </div>
  );
}
