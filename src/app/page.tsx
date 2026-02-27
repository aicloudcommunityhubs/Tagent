import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Zap,
  Network,
  Moon,
  GitBranch,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    description:
      "Instantly identify root causes across complex microservices with AI-powered correlation of metrics, logs, and traces.",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "Build a living map of system relationships. Visualize dependencies and understand impact chains automatically.",
  },
  {
    icon: Shield,
    title: "Controlled Remediation",
    description:
      "Safely automate fixes with full audit trails and rollback capabilities. Human-in-the-loop by design.",
  },
  {
    icon: Zap,
    title: "Risk Scoring Engine",
    description:
      "Real-time risk assessment for your entire cluster. Prioritize what matters most with intelligent scoring.",
  },
  {
    icon: GitBranch,
    title: "Incident Memory",
    description:
      "Every incident teaches Tagent something new. Build institutional knowledge that stays in the system.",
  },
  {
    icon: Moon,
    title: "Night Guardian Mode",
    description:
      "Sleep through the night. Tagent handles routine incidents autonomously and sends you a morning briefing.",
  },
];

const problems = [
  { metric: "89%", label: "of alerts are noise" },
  { metric: "3.2h", label: "average MTTR" },
  { metric: "4:47 AM", label: "average page time" },
  { metric: "47%", label: "burnout rate for SREs" },
];

const testimonials = [
  {
    quote:
      "Tagent caught a memory leak in our payment service before it became an outage. Worth every penny.",
    author: "Sarah Chen",
    role: "Platform Lead, Series B Fintech",
  },
  {
    quote:
      "Our MTTR dropped from 45 minutes to under 10. The root cause analysis is genuinely useful.",
    author: "Marcus Webb",
    role: "SRE Manager, E-commerce Platform",
  },
  {
    quote:
      "I actually slept through my on-call rotation last week. First time in two years.",
    author: "Priya Sharma",
    role: "Senior SRE, SaaS Company",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>Open Source • Production Ready</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Autonomous AI for{" "}
              <span className="gradient-text">Kubernetes Operations</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#a1a1aa] mb-10 max-w-3xl mx-auto leading-relaxed">
              Tagent is the AI-native SRE layer that monitors, explains,
              escalates, and optionally remediates production incidents—while
              learning from every failure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  Book Founder Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section border-t border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The problem is real
            </h2>
            <p className="text-lg text-[#a1a1aa]">
              Kubernetes operations are breaking teams. Alert fatigue, slow
              root cause analysis, manual postmortems, and on-call burnout are
              the new normal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {problems.map((stat) => (
              <div
                key={stat.label}
                className="card card-hover p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#10b981] mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-[#a1a1aa]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous operations, built for trust
            </h2>
            <p className="text-lg text-[#a1a1aa]">
              Tagent combines AI-powered analysis with production-safe
              remediation. Start read-only, enable automation when ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card card-hover p-6 group"
              >
                <div className="feature-icon mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night Guardian Highlight */}
      <section className="section border-t border-[#27272a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-4">Featured</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Night Guardian Mode
              </h2>
              <p className="text-lg text-[#a1a1aa] mb-6 leading-relaxed">
                Sleep through the night while Tagent handles routine incidents.
                It analyzes, recommends, and remediates based on your
                rules—only waking you for problems that truly need human
                judgment.
              </p>
              <ul className="space-y-3">
                {[
                  "Handles routine incidents automatically",
                  "Morning briefing of all actions taken",
                  "Instant escalation for critical issues",
                  "Full audit trail of every decision",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#a1a1aa]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-sm text-[#a1a1aa]">Night Guardian Active</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[#27272a]">
                  <span className="text-sm text-white">Incidents Resolved</span>
                  <span className="text-sm font-medium text-[#10b981]">12</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#27272a]">
                  <span className="text-sm text-white">Escalated to Human</span>
                  <span className="text-sm font-medium text-white">1</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-white">Uptime Maintained</span>
                  <span className="text-sm font-medium text-[#10b981]">99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-[#0c0c0e]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Production. Designed for Trust.
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Enterprise-grade security with open-source transparency. Start
              read-only, enable automation when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "SOC 2 Ready",
              "Open Source",
              "Kubernetes Native",
              "Production Tested",
              "RBAC Controls",
              "Audit Trails",
              "Self-Hosted Option",
              "No Cluster-Admin",
            ].map((item) => (
              <div
                key={item}
                className="card p-4 text-center text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What teams are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="card p-6">
                <p className="text-sm text-[#fafafa] mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[#71717a]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to sleep better?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Join the waitlist for early access. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  Read the Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
