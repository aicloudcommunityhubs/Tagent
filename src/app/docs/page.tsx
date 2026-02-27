"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Terminal,
  Settings,
  GitBranch,
  AlertTriangle,
  Moon,
  Key,
  HelpCircle,
  ChevronRight,
  Search,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const docSections = [
  { icon: Terminal, title: "Installation via Helm", description: "Get Tagent up and running in your cluster.", href: "#installation", time: "5 min" },
  { icon: Settings, title: "Configuration Guide", description: "Customize Tagent for your environment.", href: "#configuration", time: "10 min" },
  { icon: GitBranch, title: "Escalation Setup", description: "Configure intelligent escalation policies.", href: "#escalation", time: "8 min" },
  { icon: Zap, title: "Active Mode", description: "Enable write operations safely.", href: "#active-mode", time: "15 min" },
  { icon: AlertTriangle, title: "CI/CD Integration", description: "Integrate into your deployment pipeline.", href: "#cicd", time: "12 min" },
  { icon: Key, title: "Risk Scoring", description: "Understand how risk scores are calculated.", href: "#risk-scoring", time: "7 min" },
  { icon: Moon, title: "Night Guardian", description: "Configure autonomous overnight operations.", href: "#night-guardian", time: "10 min" },
  { icon: Key, title: "API Reference", description: "Complete API documentation.", href: "#api", time: "Reference" },
];

const faqs = [
  { q: "Does Tagent require cluster-admin privileges?", a: "No. Tagent is designed to operate with minimal permissions. Basic monitoring only requires read access to pods, deployments, services, and events." },
  { q: "Can I run Tagent in read-only mode?", a: "Yes, and it's the default! Tagent starts in read-only mode where it observes and provides recommendations without making any changes to your cluster." },
  { q: "Where does Tagent store its data?", a: "Tagent stores all data within your cluster using Kubernetes native resources. No data leaves your cluster unless you explicitly configure external integrations." },
  { q: "Which LLM providers does Tagent support?", a: "Tagent supports OpenAI, Azure OpenAI, Anthropic Claude, and self-hosted models via Ollama. You can choose different providers for different capabilities." },
  { q: "How does Night Guardian Mode work?", a: "Night Guardian Mode enables Tagent to autonomously handle routine incidents during specified hours. You maintain full control over which actions are pre-approved." },
  { q: "Can Tagent integrate with my existing tools?", a: "Yes! Tagent integrates with popular observability tools (Prometheus, Grafana, Datadog), incident management platforms (PagerDuty, Opsgenie), and communication tools (Slack, Teams)." },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <BookOpen className="w-4 h-4 text-[#22d3ee]" />
              <span className="text-sm text-[#a1a1aa]">Documentation</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Start Building with <span className="gradient-text">Tagent</span>
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto mb-12">
              Everything you need to get Tagent up and running in your Kubernetes cluster.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#52525b]" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="h-14 pl-12 pr-4 bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] rounded-xl text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-[#030305] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Terminal, text: "Quick Start", href: "#installation" },
              { icon: Key, text: "API Reference", href: "#api" },
              { icon: GitBranch, text: "GitHub", href: "https://github.com/tagent" },
            ].map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-[#a1a1aa] hover:text-white hover:border-[#818cf8]/30 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Doc Sections */}
      <section className="py-24 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Getting <span className="gradient-text">Started</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docSections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl glass-card-hover h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px">
                      <div className="w-full h-full rounded-lg bg-[#0a0a0f] flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="text-xs text-[#52525b] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {section.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[#71717a] mb-4">{section.description}</p>
                  <div className="flex items-center gap-1 text-sm text-[#818cf8]">
                    Read more
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-24 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Terminal className="w-4 h-4 text-[#818cf8]" />
                <span className="text-sm text-[#a1a1aa]">Quick Start</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Installation via <span className="gradient-text">Helm</span>
              </h2>
              <p className="text-lg text-[#71717a] mb-8">
                Get Tagent running in your cluster in under 5 minutes. Default configuration is safe and read-only.
              </p>
              <ul className="space-y-3 text-[#a1a1aa]">
                {["Add the Tagent Helm repository", "Install with default configuration", "Configure your LLM provider", "Start receiving insights"].map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white">{i + 1}</span>
                    </div>
                    {item}
                  </li>
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
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  <span className="ml-2 text-sm text-[#52525b]">Terminal</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-[#0a0a0f]/80">
                  <code className="text-[#71717a]">
                    <span className="text-[#22d3ee]"># Add Tagent Helm repository</span>
                    {"\n"}
                    <span className="text-[#22d3ee]">$</span> helm repo add tagent https://charts.tagent.io
                    {"\n"}
                    <span className="text-[#22d3ee]">$</span> helm repo update
                    {"\n\n"}
                    <span className="text-[#22d3ee]"># Install Tagent in read-only mode</span>
                    {"\n"}
                    <span className="text-[#22d3ee]">$</span> helm install tagent tagent/tagent {"\\"}
                    {"\n"}  --namespace tagent-system {"\\"}
                    {"\n"}  --create-namespace {"\\"}
                    {"\n"}  --set mode=readonly {"\\"}
                    {"\n"}  --set llm.provider=openai {"\\"}
                    {"\n"}  --set llm.apiKey=YOUR_API_KEY
                    {"\n\n"}
                    <span className="text-[#22c55e]">✓</span> Tagent installed successfully!
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#030305]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-[#818cf8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-[#71717a]">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="py-24 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Key className="w-12 h-12 text-[#818cf8] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            API <span className="gradient-text">Reference</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto mb-8">
            Complete API documentation for programmatic access. Coming soon with detailed endpoint documentation and examples.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-[#71717a]">
            <Clock className="w-4 h-4" />
            API Documentation Coming Soon
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#030305] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Need help getting started?</h3>
          <p className="text-[#71717a] mb-6">Our team is here to help you get Tagent running in your environment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="h-12 px-6 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-sm">
                Contact Support
              </Button>
            </Link>
            <Link href="https://github.com/tagent" target="_blank">
              <Button variant="outline" className="h-12 px-6 btn-glass border-0">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
