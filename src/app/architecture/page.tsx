"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Box,
  Layers,
  Database,
  Brain,
  Network,
  GitBranch,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle,
  Server,
  Lock,
  Cpu,
  Activity,
  Zap,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA3D } from "@/components/home/CTA3D";

const architectureFlow = [
  { icon: Box, title: "Helm Install", description: "Deploy Tagent with a single Helm command." },
  { icon: Layers, title: "Tagent Controller", description: "The central brain orchestrating all operations." },
  { icon: Database, title: "Collectors", description: "Gather telemetry from your cluster." },
  { icon: Brain, title: "AI Decision Engine", description: "LLM-powered reasoning and analysis." },
  { icon: Network, title: "Knowledge Graph", description: "Living map of system relationships." },
  { icon: GitBranch, title: "Escalation Engine", description: "Smart routing with full context." },
  { icon: Shield, title: "Remediation Engine", description: "Safe automated fixes." },
  { icon: FileText, title: "Documentation", description: "Auto-generated postmortems." },
];

const principles = [
  {
    icon: Server,
    title: "Kubernetes-Native",
    description: "Runs entirely within your cluster as native controllers and operators. No external dependencies required.",
    features: ["Helm chart deployment", "Custom Resource Definitions", "Operator pattern", "Zero external dependencies"],
  },
  {
    icon: Lock,
    title: "Namespace-Scoped Access",
    description: "Operates within namespaces you specify. Cannot access resources outside its designated scope.",
    features: ["Namespace-level permissions", "Resource quotas respected", "Multi-tenant safe", "Scope-limited operations"],
  },
  {
    icon: Cpu,
    title: "RBAC Integration",
    description: "Full integration with Kubernetes RBAC. Every action governed by permissions you grant.",
    features: ["Native RBAC integration", "ClusterRole customization", "Service account isolation", "Permission audits"],
  },
  {
    icon: Brain,
    title: "LLM Flexibility",
    description: "Choose your AI backend. Run models locally for privacy or connect to external providers.",
    features: ["Ollama integration", "OpenAI / Azure OpenAI", "Anthropic Claude", "Custom endpoints"],
  },
  {
    icon: Activity,
    title: "Explainable AI",
    description: "Every AI decision logged with full reasoning traces. Understand why each action was taken.",
    features: ["Decision reasoning logs", "Confidence scores", "Alternative actions", "Audit-ready exports"],
  },
  {
    icon: Zap,
    title: "Low Resource Footprint",
    description: "Designed for production with minimal overhead. Efficient collectors keep usage low.",
    features: ["< 100MB base memory", "Configurable limits", "Efficient processing", "Graceful degradation"],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Layers className="w-4 h-4 text-[#22d3ee]" />
              <span className="text-sm text-[#a1a1aa]">Architecture</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Built <span className="gradient-text">Kubernetes-Native</span>
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto">
              Tagent is designed from the ground up to run safely within your Kubernetes 
              cluster, respecting its conventions, permissions, and operational patterns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow */}
      <section className="relative py-24 bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How <span className="gradient-text">Tagent Works</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              From installation to automated incident response, understand the data flow 
              and components that power Tagent.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#818cf8] via-[#a78bfa] to-[#22d3ee] opacity-30" />

            <div className="space-y-8">
              {architectureFlow.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block p-6 rounded-2xl glass-card ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-[#71717a] text-sm max-w-md">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] items-center justify-center flex-shrink-0 z-10 glow-sm">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Design <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Every architectural decision is driven by safety, transparency, and 
              enterprise-grade operational requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px mb-6">
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-[#71717a] text-sm mb-6">{principle.description}</p>

                  <ul className="space-y-2">
                    {principle.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                        <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="relative py-24 bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="gradient-text">Deployment</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Get started in minutes with our Helm chart.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl border-gradient overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <span className="ml-2 text-sm text-[#52525b]">Terminal</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto bg-[#0a0a0f]/80">
                <code className="text-[#71717a]">
                  <span className="text-[#22d3ee]">$</span> helm repo add tagent https://charts.tagent.io
                  {"\n"}
                  <span className="text-[#22d3ee]">$</span> helm install tagent tagent/tagent {"\\"}
                  {"\n"}  --namespace tagent-system {"\\"}
                  {"\n"}  --create-namespace {"\\"}
                  {"\n"}  --set mode=readonly {"\\"}
                  {"\n"}  --set llm.provider=openai
                  {"\n\n"}
                  <span className="text-[#22c55e]">✓</span> Tagent installed successfully!
                </code>
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link href="/docs">
              <Button variant="outline" className="h-12 px-6 btn-glass border-0">
                View Full Installation Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA3D />
    </div>
  );
}
