"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Network,
  GitBranch,
  Shield,
  Zap,
  Target,
  FileSearch,
  Clock,
  AlertTriangle,
  MessageSquare,
  Lock,
  FlaskConical,
} from "lucide-react";
import { FeatureGrid } from "@/components/shared/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    description: "Instantly identify root causes across complex microservices with AI-powered correlation of metrics, logs, and traces.",
    gradient: "purple" as const,
    href: "/product#rca",
  },
  {
    icon: Network,
    title: "Incident Knowledge Graph",
    description: "Build a living map of system relationships. Understand dependencies and impact chains automatically.",
    gradient: "cyan" as const,
    href: "/product#knowledge-graph",
  },
  {
    icon: GitBranch,
    title: "Smart Escalation Engine",
    description: "Intelligent routing ensures the right experts are notified at the right time with full context.",
    gradient: "indigo" as const,
    href: "/product#escalation",
  },
  {
    icon: Shield,
    title: "Controlled Auto-Remediation",
    description: "Safely automate fixes for known issues with full audit trails and rollback capabilities.",
    gradient: "purple" as const,
    href: "/product#remediation",
  },
  {
    icon: Target,
    title: "Blast Radius Simulation",
    description: "Predict the impact of changes before deployment. Understand cascading failure patterns.",
    gradient: "cyan" as const,
    href: "/product#blast-radius",
  },
  {
    icon: Zap,
    title: "Risk Scoring Engine",
    description: "Real-time risk assessment for your cluster. Prioritize what matters most.",
    gradient: "mixed" as const,
    href: "/product#risk-scoring",
  },
  {
    icon: FileSearch,
    title: "Automated Postmortems",
    description: "Generate comprehensive incident reports automatically. Never miss a detail.",
    gradient: "indigo" as const,
    href: "/product#postmortems",
  },
  {
    icon: Clock,
    title: "Night Guardian Mode",
    description: "Sleep peacefully while Tagent watches over your cluster and handles routine incidents.",
    gradient: "purple" as const,
    href: "/product#night-guardian",
  },
];

export function Features() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.2)] text-sm text-[#6366f1] font-medium mb-4">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Production Teams</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Every feature is designed with production safety in mind. Enterprise-grade 
              capabilities with startup agility.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <FeatureGrid features={features} columns={4} />

        {/* Additional Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: AlertTriangle, text: "Preventive CI/CD Scanning" },
            { icon: MessageSquare, text: "Natural Language SRE" },
            { icon: Lock, text: "Compliance & Security Mode" },
            { icon: FlaskConical, text: "Chaos Validation" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.15)] text-sm text-[#a1a1aa]"
            >
              <item.icon className="w-4 h-4 text-[#6366f1]" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
