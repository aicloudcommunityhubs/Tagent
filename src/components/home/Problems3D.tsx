"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileText, Flame, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "85%",
    statLabel: "of alerts",
    title: "Alert Fatigue",
    description: "SREs receive thousands of alerts daily, leading to burnout and missed critical incidents that actually matter.",
  },
  {
    icon: Clock,
    stat: "4+",
    statLabel: "hours",
    title: "Slow Root Cause",
    description: "Average time to identify root cause exceeds 4 hours for complex microservices incidents across distributed systems.",
  },
  {
    icon: FileText,
    stat: "6+",
    statLabel: "hours",
    title: "Manual Postmortems",
    description: "Teams spend countless hours documenting incidents instead of building and improving systems that drive value.",
  },
  {
    icon: Flame,
    stat: "60%",
    statLabel: "burnout",
    title: "Team Burnout",
    description: "More than half of SREs experience burnout due to on-call stress, alert overload, and incident fatigue.",
  },
];

function StatCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#ef4444] to-[#f97316] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <div className="relative p-8 rounded-2xl glass-card group-hover:border-[#ef4444]/20 transition-colors duration-300">
        {/* Stat */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#f97316]">
            {problem.stat}
          </span>
          <span className="text-lg text-[#71717a]">{problem.statLabel}</span>
        </div>

        {/* Title with icon */}
        <div className="flex items-center gap-2 mb-3">
          <problem.icon className="w-5 h-5 text-[#ef4444]" />
          <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
        </div>

        {/* Description */}
        <p className="text-[#71717a] text-sm leading-relaxed">{problem.description}</p>
      </div>
    </motion.div>
  );
}

export function Problems3D() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ef4444]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#ef4444]/20 mb-6">
            <TrendingUp className="w-4 h-4 text-[#ef4444]" />
            <span className="text-sm text-[#ef4444]">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Kubernetes Incidents Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#f97316]">
              Overwhelming
            </span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Modern microservices create complexity that traditional monitoring can't handle. 
            Your team deserves better than constant firefighting.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <StatCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#a1a1aa] text-lg">
            It doesn't have to be this way.{" "}
            <span className="text-white font-medium">Enter Tagent.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
