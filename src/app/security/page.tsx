"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Key,
  Building2,
  CheckCircle,
  ArrowRight,
  BadgeCheck,
  UserCheck,
  Database,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA3D } from "@/components/home/CTA3D";

const securityFeatures = [
  { icon: Eye, title: "Default Read-Only", description: "Start in observation mode. Enable write operations only when ready.", highlight: "Safety First" },
  { icon: Key, title: "Explicit Permissions", description: "Every remediation action requires explicit permission grants through RBAC.", highlight: "Granular Control" },
  { icon: FileText, title: "Explainable Logs", description: "Every action logged with full reasoning context for auditing.", highlight: "Full Transparency" },
  { icon: Database, title: "Full Audit Trail", description: "Comprehensive logging of all operations for compliance.", highlight: "Compliance Ready" },
  { icon: Server, title: "Namespace Isolation", description: "Operates only within namespaces you explicitly designate.", highlight: "Tenant Safe" },
  { icon: UserCheck, title: "RBAC Control", description: "Deep integration with Kubernetes RBAC for every action.", highlight: "Native Integration" },
  { icon: Key, title: "No Cluster-Admin", description: "Never requires cluster-admin privileges for basic operation.", highlight: "Least Privilege" },
  { icon: Lock, title: "Encrypted Secrets", description: "All sensitive data encrypted at rest and in transit.", highlight: "Data Protected" },
  { icon: Building2, title: "Self-Hosted Option", description: "Deploy entirely within your infrastructure for sovereignty.", highlight: "Full Control" },
  { icon: Globe, title: "LLM Flexibility", description: "Choose your AI backend - local or external providers.", highlight: "AI Sovereignty" },
];

const compliance = [
  { name: "SOC 2 Type II", description: "Security and availability controls" },
  { name: "HIPAA", description: "Healthcare data protection" },
  { name: "GDPR", description: "EU data protection compliance" },
  { name: "ISO 27001", description: "Information security management" },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#22c55e]/20 mb-8">
              <Shield className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm text-[#22c55e]">Enterprise Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Built for Production.
              <br />
              <span className="gradient-text">Designed for Trust.</span>
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto">
              Security isn't an afterthought at Tagent—it's foundational. Every architectural 
              decision prioritizes safety, transparency, and enterprise-grade control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-[#030305] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Audit Coverage" },
              { value: "0", label: "Hidden Actions" },
              { value: "24/7", label: "Security Monitoring" },
              { value: "< 24h", label: "Security Response" },
            ].map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-1">{signal.value}</div>
                <div className="text-sm text-[#52525b]">{signal.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Security <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Every layer of Tagent is designed with security in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl glass-card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#818cf8] p-px flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-[#71717a] text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
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
              Compliance <span className="gradient-text">Ready</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Tagent is designed to help you meet regulatory requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card text-center"
              >
                <BadgeCheck className="w-10 h-10 text-[#22c55e] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-1">{standard.name}</h3>
                <p className="text-sm text-[#52525b]">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Lock className="w-4 h-4 text-[#a78bfa]" />
                <span className="text-sm text-[#a78bfa]">Zero Trust</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trust Nothing.
                <br />
                <span className="gradient-text">Verify Everything.</span>
              </h2>
              <p className="text-lg text-[#71717a] mb-8">
                Tagent follows zero trust principles. Every action requires explicit permission, 
                every decision is logged, and every access is scoped to minimum necessary.
              </p>
              <ul className="space-y-4">
                {[
                  "No implicit trust based on network location",
                  "Every API call authenticated and authorized",
                  "All actions require explicit permission grants",
                  "Full audit trail for every operation",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#818cf8] to-[#22c55e] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#a1a1aa]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl border-gradient overflow-hidden">
                <div className="p-8 bg-[#0a0a0f]/80 backdrop-blur-xl">
                  {/* Dashboard */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <span className="text-sm font-medium text-white">Security Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                      <span className="text-sm text-[#22c55e]">Protected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-6">
                    {[
                      { label: "Audit Events", value: "12,847" },
                      { label: "Failed Auth", value: "0" },
                      { label: "Active Sessions", value: "3" },
                      { label: "Last Scan", value: "2m ago" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-white/[0.02]">
                        <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-[#52525b]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-2">
                    {[
                      { time: "2m ago", event: "Permission check: READ pods" },
                      { time: "15m ago", event: "RBAC validation" },
                      { time: "1h ago", event: "Audit log exported" },
                    ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-[#52525b]">{log.time}</span>
                          <span className="text-[#a1a1aa]">{log.event}</span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#030305] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Have questions about our security approach?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="h-12 px-6 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-sm">
                  Request Security Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="h-12 px-6 btn-glass border-0">
                  View Security Docs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA3D />
    </div>
  );
}
