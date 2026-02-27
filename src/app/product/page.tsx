"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Clock, 
  Database, 
  Network, 
  GitBranch,
  Target,
  Zap,
  AlertTriangle,
  FileSearch,
  BookOpen,
  Lock,
  FlaskConical,
  MessageSquare,
  Moon,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    description: "Stop digging through dashboards. Tagent correlates metrics, logs, and traces to find the actual problem in seconds.",
    features: [
      "Multi-signal correlation",
      "Causal chain reconstruction",
      "Service dependency awareness",
      "Historical pattern matching"
    ]
  },
  {
    icon: Database,
    title: "Incident Memory",
    description: "Every resolved incident makes Tagent smarter. Build institutional knowledge automatically.",
    features: [
      "Pattern extraction",
      "Team knowledge capture",
      "Continuous learning",
      "Cross-cluster knowledge sharing"
    ]
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description: "A living map of your system's relationships. See dependencies, track impact chains, understand your infrastructure.",
    features: [
      "Real-time service topology",
      "Dependency visualization",
      "Impact chain analysis",
      "Version-aware relationships"
    ]
  },
  {
    icon: GitBranch,
    title: "Smart Escalation",
    description: "The right experts get notified with full context. No more 'what's happening?' back-and-forth.",
    features: [
      "Context-aware routing",
      "On-call integration",
      "Escalation policies",
      "Rich notifications"
    ]
  },
  {
    icon: Shield,
    title: "Controlled Auto-Remediation",
    description: "Safely automate fixes for known issues. Start in recommendation mode, graduate to automated when you're ready.",
    features: [
      "Human-in-the-loop options",
      "Rollback mechanisms",
      "Blast radius constraints",
      "Approval workflows"
    ]
  },
  {
    icon: Target,
    title: "Blast Radius Simulation",
    description: "Predict the impact of changes before deployment. Identify single points of failure before they cause outages.",
    features: [
      "Pre-deployment analysis",
      "Failure mode simulation",
      "Risk scoring",
      "Dependency assessment"
    ]
  },
  {
    icon: Zap,
    title: "Risk Scoring Engine",
    description: "Real-time risk assessment for your entire cluster. Prioritize what matters most.",
    features: [
      "Continuous monitoring",
      "Business impact weighting",
      "Trend analysis",
      "Proactive alerting"
    ]
  },
  {
    icon: AlertTriangle,
    title: "CI/CD Risk Scanning",
    description: "Catch potential issues before they reach production. Integrate with your pipeline for deployment gates.",
    features: [
      "Pre-flight checks",
      "Deployment gates",
      "Rollback probability",
      "Resource conflict detection"
    ]
  },
  {
    icon: FileSearch,
    title: "Automated Postmortems",
    description: "Generate comprehensive incident reports automatically. Timeline, root cause, and action items without the manual work.",
    features: [
      "Auto-generated timelines",
      "Contributing factor analysis",
      "Action item extraction",
      "Template customization"
    ]
  },
  {
    icon: BookOpen,
    title: "Interactive Documentation Q&A",
    description: "Ask questions about your infrastructure in plain English. Get answers from your runbooks and documentation.",
    features: [
      "Natural language queries",
      "Context-aware responses",
      "Runbook integration",
      "Knowledge base search"
    ]
  },
  {
    icon: Lock,
    title: "Compliance & Security Mode",
    description: "Meet regulatory requirements with comprehensive audit logging and access controls.",
    features: [
      "Audit log retention",
      "Compliance dashboards",
      "Access control",
      "Regulatory reporting"
    ]
  },
  {
    icon: FlaskConical,
    title: "Chaos Validation",
    description: "Validate your system's resilience with controlled chaos experiments. Verify detection and remediation work.",
    features: [
      "Controlled failure injection",
      "Resilience scoring",
      "Recovery validation",
      "Game day automation"
    ]
  },
  {
    icon: MessageSquare,
    title: "Natural Language SRE",
    description: "Interact with Tagent using plain English. Ask questions, request actions, get explanations.",
    features: [
      "Conversational interface",
      "Action execution",
      "Explanation generation",
      "Multi-turn reasoning"
    ]
  },
  {
    icon: Moon,
    title: "Night Guardian Mode",
    description: "Sleep peacefully. Tagent handles routine incidents during off-hours and sends a morning briefing.",
    features: [
      "Off-hours automation",
      "Smart alert filtering",
      "Morning briefings",
      "Safety guardrails"
    ]
  }
];

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Everything you need for
              <br />
              <span className="text-neutral-400">Kubernetes operations.</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl">
              Tagent is a complete AI-powered SRE platform. It observes, understands, 
              and acts on incidents—so your team can focus on building.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
                  Request access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="border-neutral-800 text-neutral-300">
                  Documentation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Platform capabilities
            </h2>
            <p className="text-neutral-400">
              Built for production. Designed for trust.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <cap.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {cap.description}
                  </p>
                  <ul className="space-y-2">
                    {cap.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-500">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} p-6 rounded-lg bg-neutral-900/50 border border-white/5`}>
                  <div className="aspect-video rounded bg-neutral-800/50 flex items-center justify-center">
                    <span className="text-neutral-600 text-sm">Interface preview</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              See Tagent in action
            </h2>
            <p className="text-neutral-400 mb-8">
              Get a personalized demo from our team. We'll show you how Tagent 
              can help with your specific challenges.
            </p>
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
                Schedule a demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
