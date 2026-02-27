"use client";

import { motion } from "framer-motion";
import { Brain, Search, Sparkles, Shield, ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Search,
    title: "Autonomous Monitoring",
    description: "AI continuously observes your cluster, understanding patterns and detecting anomalies before they become incidents. No more reactive firefighting.",
    gradient: "from-[#818cf8] to-[#a78bfa]",
  },
  {
    icon: Brain,
    title: "AI Reasoning Engine",
    description: "Advanced LLM-powered analysis correlates metrics, logs, and traces to identify root causes in seconds. Understand the why, not just the what.",
    gradient: "from-[#22d3ee] to-[#818cf8]",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Operations",
    description: "Controlled auto-remediation fixes common issues automatically while you maintain full oversight. Let AI handle the routine, humans handle the novel.",
    gradient: "from-[#a78bfa] to-[#22d3ee]",
  },
  {
    icon: Shield,
    title: "Preventive Intelligence",
    description: "Learn from every incident. Tagent builds institutional knowledge to prevent similar issues from happening again. Prevention over cure.",
    gradient: "from-[#818cf8] to-[#22d3ee]",
  },
];

export function Solution3D() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#818cf8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#22d3ee]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#22c55e]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#22c55e]" />
            <span className="text-sm text-[#22c55e]">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            AI-Native{" "}
            <span className="gradient-text">SRE Layer</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Tagent acts as an intelligent layer on top of your Kubernetes infrastructure, 
            autonomously handling incidents so your team can focus on building.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl glass-card-hover h-full">
                {/* Glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                
                <div className="relative flex gap-6">
                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} p-px flex-shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-[#71717a] leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/product">
            <Button variant="outline" className="h-12 px-6 btn-glass border-0">
              <span className="flex items-center gap-2">
                Explore All Features
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
