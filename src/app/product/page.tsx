"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  Database,
  BookOpen,
  Cpu,
  ArrowRight,
  CheckCircle,
  Activity,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA3D } from "@/components/home/CTA3D";

const capabilities = [
  {
    id: "rca",
    icon: Brain,
    title: "AI Root Cause Analysis",
    description: "Instantly identify root causes across complex microservices with AI-powered correlation of metrics, logs, and traces. Our advanced reasoning engine understands causal relationships and surfaces the actual problem in seconds, not hours.",
    features: [
      "Multi-signal correlation (metrics, logs, traces)",
      "Causal chain reconstruction",
      "Service dependency awareness",
      "Historical pattern matching",
    ],
    gradient: "from-[#818cf8] to-[#a78bfa]",
  },
  {
    id: "memory",
    icon: Database,
    title: "Incident Memory & Learning Engine",
    description: "Every incident teaches Tagent something new. The learning engine captures remediation patterns, team decisions, and system behaviors to improve future responses automatically.",
    features: [
      "Pattern extraction from resolved incidents",
      "Team knowledge capture",
      "Continuous learning pipeline",
      "Cross-cluster knowledge sharing",
    ],
    gradient: "from-[#22d3ee] to-[#818cf8]",
  },
  {
    id: "knowledge-graph",
    icon: Network,
    title: "Incident Knowledge Graph",
    description: "Build a living map of your system's relationships. The knowledge graph visualizes dependencies, tracks impact chains, and helps teams understand complex system interactions at a glance.",
    features: [
      "Real-time service topology",
      "Dependency visualization",
      "Impact chain analysis",
      "Version-aware relationships",
    ],
    gradient: "from-[#a78bfa] to-[#818cf8]",
  },
  {
    id: "escalation",
    icon: GitBranch,
    title: "Smart Escalation Engine",
    description: "Intelligent routing ensures the right experts are notified at the right time. Full context is delivered with every escalation, eliminating the 'what's happening?' back-and-forth.",
    features: [
      "Context-aware routing",
      "On-call integration",
      "Escalation policy automation",
      "Rich notification payloads",
    ],
    gradient: "from-[#818cf8] to-[#22d3ee]",
  },
  {
    id: "remediation",
    icon: Shield,
    title: "Controlled Auto-Remediation",
    description: "Safely automate fixes for known issues with full audit trails and rollback capabilities. Start in recommendation mode, graduate to automated actions when you're confident.",
    features: [
      "Human-in-the-loop options",
      "Rollback mechanisms",
      "Blast radius constraints",
      "Approval workflows",
    ],
    gradient: "from-[#22d3ee] to-[#a78bfa]",
  },
  {
    id: "blast-radius",
    icon: Target,
    title: "Blast Radius Simulation",
    description: "Predict the impact of changes before deployment. Understand cascading failure patterns and identify single points of failure before they cause outages.",
    features: [
      "Pre-deployment impact analysis",
      "Failure mode simulation",
      "Risk scoring for changes",
      "Dependency risk assessment",
    ],
    gradient: "from-[#a78bfa] to-[#22d3ee]",
  },
  {
    id: "risk-scoring",
    icon: Zap,
    title: "Risk Scoring Engine",
    description: "Real-time risk assessment for your entire cluster. Prioritize what matters most with intelligent scoring that considers severity, likelihood, and business impact.",
    features: [
      "Continuous risk monitoring",
      "Business impact weighting",
      "Trend analysis",
      "Proactive alerting",
    ],
    gradient: "from-[#818cf8] to-[#a78bfa]",
  },
  {
    id: "cicd",
    icon: AlertTriangle,
    title: "Preventive CI/CD Risk Scanning",
    description: "Catch potential issues before they reach production. Tagent integrates with your pipeline to analyze deployment risks and suggest preventive measures.",
    features: [
      "Pre-flight risk checks",
      "Deployment gate integration",
      "Rollback probability scoring",
      "Resource conflict detection",
    ],
    gradient: "from-[#22d3ee] to-[#818cf8]",
  },
  {
    id: "postmortems",
    icon: FileSearch,
    title: "Automated Postmortem Generator",
    description: "Generate comprehensive incident reports automatically. Capture timeline, root cause, impact, and action items without the manual documentation burden.",
    features: [
      "Auto-generated timelines",
      "Contributing factor analysis",
      "Action item extraction",
      "Template customization",
    ],
    gradient: "from-[#a78bfa] to-[#818cf8]",
  },
  {
    id: "docs-qa",
    icon: BookOpen,
    title: "Interactive AI Documentation Q&A",
    description: "Ask questions about your infrastructure in plain English. Tagent's AI understands your system and can answer questions about configurations, runbooks, and best practices.",
    features: [
      "Natural language queries",
      "Context-aware responses",
      "Runbook integration",
      "Knowledge base search",
    ],
    gradient: "from-[#818cf8] to-[#22d3ee]",
  },
  {
    id: "compliance",
    icon: Lock,
    title: "Compliance & Security Mode",
    description: "Meet regulatory requirements with comprehensive audit logging, access controls, and compliance reporting. SOC 2, HIPAA, and custom framework support.",
    features: [
      "Audit log retention",
      "Compliance dashboards",
      "Access control integration",
      "Regulatory reporting",
    ],
    gradient: "from-[#22d3ee] to-[#a78bfa]",
  },
  {
    id: "chaos",
    icon: FlaskConical,
    title: "Chaos Validation Mode",
    description: "Validate your system's resilience with controlled chaos experiments. Tagent can safely inject failures to verify detection and remediation pathways work as expected.",
    features: [
      "Controlled failure injection",
      "Resilience scoring",
      "Recovery validation",
      "Game day automation",
    ],
    gradient: "from-[#a78bfa] to-[#22d3ee]",
  },
  {
    id: "nl-sre",
    icon: MessageSquare,
    title: "Natural Language SRE Interaction",
    description: "Interact with Tagent using natural language. Ask questions, request actions, or get explanations without learning complex query languages or CLIs.",
    features: [
      "Conversational interface",
      "Action execution",
      "Explanation generation",
      "Multi-turn reasoning",
    ],
    gradient: "from-[#818cf8] to-[#a78bfa]",
  },
  {
    id: "night-guardian",
    icon: Clock,
    title: "Night Guardian Mode",
    description: "Sleep peacefully while Tagent watches over your cluster. Enable autonomous handling of routine incidents during off-hours with comprehensive morning reports.",
    features: [
      "Off-hours automation",
      "Smart alert filtering",
      "Morning briefing generation",
      "Safety guardrails",
    ],
    gradient: "from-[#22d3ee] to-[#818cf8]",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Cpu className="w-4 h-4 text-[#818cf8]" />
              <span className="text-sm text-[#a1a1aa]">Product Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Complete <span className="gradient-text">AI-Native SRE</span> Platform
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto mb-12">
              Tagent provides a comprehensive suite of AI-powered capabilities designed 
              for production Kubernetes environments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-md">
                  Request Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="h-14 px-8 btn-glass border-0">
                  View Documentation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-24 bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                id={cap.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${cap.gradient} bg-opacity-10 mb-6`}>
                    <cap.icon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{cap.title}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{cap.title}</h2>
                  <p className="text-lg text-[#71717a] mb-8 leading-relaxed">{cap.description}</p>

                  <ul className="space-y-4">
                    {cap.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${cap.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#a1a1aa]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl border-gradient overflow-hidden">
                    <div className="relative p-8 bg-[#0a0a0f]/80 backdrop-blur-xl">
                      {/* Mock Dashboard */}
                      <div className="flex items-center justify-between pb-6 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cap.gradient} flex items-center justify-center`}>
                            <cap.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{cap.title}</h4>
                            <p className="text-xs text-[#52525b]">Active</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                          <span className="text-sm text-[#22c55e]">Running</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 py-6">
                        {[
                          { label: "Processed", value: "1.2M" },
                          { label: "Success Rate", value: "99.9%" },
                          { label: "Avg Time", value: "<1s" },
                        ].map((stat) => (
                          <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02]">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-[#52525b]">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Activity */}
                      <div className="pt-6 border-t border-white/5 space-y-2">
                        {["Analyzing patterns...", "Correlating signals...", "Generating insights"].map((activity, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Activity className="w-4 h-4 text-[#818cf8]" />
                            <span className="text-[#71717a]">{activity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Tagent in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Watch how Tagent handles a real incident from detection to resolution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl border-gradient overflow-hidden group">
              <div className="relative aspect-video bg-[#0a0a0f] flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center w-20 h-20 rounded-full glass-card"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#818cf8] to-[#a78bfa] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Play className="w-8 h-8 text-white ml-1 relative z-10" fill="white" />
                </motion.button>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-[#52525b]">
                  <span>Product Demo</span>
                  <span>5 min</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA3D />
    </div>
  );
}
