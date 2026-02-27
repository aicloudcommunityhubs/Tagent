"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "SOC 2 Compliant" },
  { icon: Lock, text: "Enterprise-Ready" },
  { icon: Award, text: "Kubernetes Native" },
  { icon: CheckCircle, text: "Production Tested" },
];

export function TrustBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-6"
    >
      <span className="text-[#71717a] text-sm">Backed by Engineers. Built for Production.</span>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {trustItems.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.15)]"
          >
            <item.icon className="w-4 h-4 text-[#6366f1]" />
            <span className="text-sm text-[#a1a1aa]">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
