"use client";

import { motion } from "framer-motion";
import { Brain, Search, Sparkles, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Search,
    title: "Autonomous Monitoring",
    description: "AI continuously observes your cluster, understanding patterns and detecting anomalies before they become incidents.",
  },
  {
    icon: Brain,
    title: "AI Reasoning Engine",
    description: "Advanced LLM-powered analysis correlates metrics, logs, and traces to identify root causes in seconds, not hours.",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Operations",
    description: "Controlled auto-remediation fixes common issues automatically while you maintain full oversight and control.",
  },
  {
    icon: Shield,
    title: "Preventive Intelligence",
    description: "Learn from every incident. Tagent builds knowledge to prevent similar issues from happening again.",
  },
];

export function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6366f1]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(34,197,94,0.2)] text-sm text-[#22c55e] font-medium mb-4">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              AI-Native <span className="gradient-text">SRE Layer</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Tagent acts as an intelligent layer on top of your Kubernetes infrastructure, 
              autonomously handling incidents so your team can focus on building.
            </p>
          </motion.div>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 lg:p-8 bg-[#111119] rounded-xl border border-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#6366f1] p-[1px] flex-shrink-0">
                  <div className="w-full h-full rounded-lg bg-[#111119] flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#22d3ee] transition-all duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-[#71717a]">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/product">
            <Button variant="outline" className="border-[rgba(99,102,241,0.3)] text-[#a1a1aa] hover:text-white hover:bg-[#16161e]">
              Explore All Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
