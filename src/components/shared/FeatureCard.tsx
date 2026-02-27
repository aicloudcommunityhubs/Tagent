"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  gradient?: "purple" | "cyan" | "indigo" | "mixed";
  index?: number;
}

const gradientMap = {
  purple: "from-[#a855f7] to-[#6366f1]",
  cyan: "from-[#22d3ee] to-[#6366f1]",
  indigo: "from-[#6366f1] to-[#4f46e5]",
  mixed: "from-[#6366f1] via-[#a855f7] to-[#22d3ee]",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  gradient = "purple",
  index = 0,
}: FeatureCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative h-full p-6 bg-[#111119] rounded-xl border border-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.4)] transition-all duration-300 overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${gradientMap[gradient]} p-[1px] mb-4`}>
        <div className="w-full h-full rounded-lg bg-[#111119] flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#22d3ee] transition-all duration-300">
        {title}
      </h3>
      <p className="text-[#71717a] text-sm leading-relaxed mb-3">
        {description}
      </p>

      {/* Arrow for linked cards */}
      {href && (
        <div className="flex items-center gap-1 text-sm text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

interface FeatureGridProps {
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
    gradient?: "purple" | "cyan" | "indigo" | "mixed";
  }>;
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
}
