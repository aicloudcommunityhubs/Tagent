"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Bot, 
  Shield, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  Zap,
  Brain,
  Moon,
  GitBranch
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Root cause analysis in seconds",
    description: "Our AI understands your system's relationships. It correlates metrics, logs, and traces to find the actual problem—not just the symptoms."
  },
  {
    icon: Shield,
    title: "Safe auto-remediation",
    description: "Start in recommendation mode. When you're confident, enable automated actions. Full audit trails, instant rollbacks."
  },
  {
    icon: GitBranch,
    title: "Learns from every incident",
    description: "Every resolved incident makes Tagent smarter. Build institutional knowledge without the wiki nobody updates."
  },
  {
    icon: Moon,
    title: "Night Guardian mode",
    description: "Sleep through the night. Tagent handles routine incidents autonomously and sends you a morning briefing."
  },
];

const problems = [
  { metric: "4:47 AM", label: "Average page response time" },
  { metric: "89%", label: "of alerts are noise" },
  { metric: "3.2 hours", label: "Average incident resolution" },
  { metric: "2.5x", label: "More incidents per on-call rotation" },
];

const logos = [
  "Kubernetes", "Prometheus", "Grafana", "Datadog", "PagerDuty", "Slack"
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-sm text-amber-500">Early access available</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your on-call rotation
              <br />
              <span className="text-neutral-400">just got a lot quieter.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl">
              Tagent is an AI-powered SRE platform that understands your Kubernetes 
              infrastructure. It finds root causes, suggests fixes, and can even 
              resolve incidents while you sleep.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-black font-medium h-12 px-6">
                  Start free trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/product">
                <Button size="lg" variant="outline" className="h-12 px-6 border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/5">
                  See how it works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              We've been there.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              3 AM pages. Cascading failures. Dashboards that tell you something's wrong 
              but not what. Tagent was built by engineers who lived through the pain.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {problems.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-neutral-900/50 border border-white/5"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Tagent actually does
            </h2>
            <p className="text-neutral-400 max-w-2xl">
              No magic, no black boxes. Just practical AI that makes your team more effective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
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
              How it works
            </h2>
            <p className="text-neutral-400">
              From alert to resolution in three steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                description: "Link Tagent to your Kubernetes clusters, observability tools, and incident management platforms. Takes about 15 minutes."
              },
              {
                step: "02",
                title: "Learn",
                description: "Tagent builds a knowledge graph of your system. It learns dependencies, understands normal behavior, and identifies patterns."
              },
              {
                step: "03",
                title: "Act",
                description: "When incidents happen, Tagent analyzes, recommends, and—when you're ready—resolves. You stay in control."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-neutral-800 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              Works with your stack
            </h2>
            <p className="text-neutral-500 text-sm">
              Tagent integrates with the tools you already use.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo) => (
              <div 
                key={logo} 
                className="text-neutral-600 font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "Tagent caught a memory leak in our payment service before it became an outage. Worth every penny.",
                author: "Sarah Chen",
                role: "Platform Lead, Fintech startup"
              },
              {
                quote: "Our MTTR dropped from 45 minutes to under 10. The root cause analysis is genuinely useful.",
                author: "Marcus Webb",
                role: "SRE Manager, E-commerce"
              },
              {
                quote: "I actually slept through my on-call rotation last week. First time in two years.",
                author: "Priya Sharma",
                role: "Senior SRE, SaaS company"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-neutral-900/50 border border-white/5"
              >
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-white text-sm font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to sleep better?
            </h2>
            <p className="text-neutral-400 mb-8">
              Start with our free tier. No credit card required. 
              Set up takes about 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-black font-medium h-12 px-8">
                  Get started free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 px-8 border-neutral-800 text-neutral-300">
                  Talk to sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
