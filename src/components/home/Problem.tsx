"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileText, Flame } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "85%",
    title: "Alert Fatigue",
    description: "SREs receive thousands of alerts daily, leading to burnout and missed critical incidents.",
  },
  {
    icon: Clock,
    stat: "4+ hrs",
    title: "Slow RCA",
    description: "Average time to identify root cause exceeds 4 hours for complex microservices incidents.",
  },
  {
    icon: FileText,
    stat: "6+ hrs",
    title: "Manual Postmortems",
    description: "Teams spend hours documenting incidents instead of building and improving systems.",
  },
  {
    icon: Flame,
    stat: "60%",
    title: "Burnout Rate",
    description: "More than half of SREs experience burnout due to on-call stress and incident overload.",
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(239,68,68,0.2)] text-sm text-[#ef4444] font-medium mb-4">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Kubernetes Incidents Are <span className="text-[#ef4444]">Overwhelming</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Modern microservices create complexity that traditional monitoring can&apos;t handle. 
              Your team deserves better.
            </p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-[#111119] rounded-xl border border-[rgba(239,68,68,0.1)] hover:border-[rgba(239,68,68,0.3)] transition-all duration-300"
            >
              {/* Stat */}
              <div className="text-4xl font-bold text-[#ef4444] mb-2">
                {problem.stat}
              </div>
              
              {/* Icon and Title */}
              <div className="flex items-center gap-2 mb-2">
                <problem.icon className="w-5 h-5 text-[#ef4444]" />
                <h3 className="font-semibold text-white">{problem.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-sm text-[#71717a]">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#a1a1aa]">
            It doesn&apos;t have to be this way. <span className="text-white font-medium">Enter Tagent.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
