import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Box,
  GitBranch,
  Brain,
  Network,
  Shield,
  Database,
  Server,
  Lock,
} from "lucide-react";

const architectureSteps = [
  {
    icon: Box,
    title: "Helm Install",
    description:
      "Deploy Tagent to your cluster with a single Helm command. Namespace-scoped by default for security.",
  },
  {
    icon: Server,
    title: "Controller",
    description:
      "The Tagent Controller orchestrates all operations. It manages collectors, processes data, and coordinates responses.",
  },
  {
    icon: Database,
    title: "Collectors",
    description:
      "Lightweight agents collect metrics, logs, and traces from your workloads. Minimal overhead, no data leaves your cluster.",
  },
  {
    icon: Brain,
    title: "AI Decision Engine",
    description:
      "The core AI engine analyzes incidents, correlates data, and generates recommendations or automated responses.",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "Builds and maintains a real-time map of your system's relationships and dependencies.",
  },
  {
    icon: GitBranch,
    title: "Escalation Engine",
    description:
      "Routes incidents to the right people based on configurable policies. Integrates with PagerDuty, Slack, and more.",
  },
  {
    icon: Shield,
    title: "Remediation Engine",
    description:
      "Executes automated responses based on your rules. Full audit trail and instant rollback capability.",
  },
];

const features = [
  {
    title: "Kubernetes-Native",
    description:
      "Deployed as standard Kubernetes resources. No special privileges required. Works with any CNCF-certified cluster.",
  },
  {
    title: "Namespace-Scoped Access",
    description:
      "Tagent operates only in the namespaces you specify. No cluster-wide permissions needed by default.",
  },
  {
    title: "RBAC Integration",
    description:
      "Full integration with Kubernetes RBAC. Control who can view incidents, approve remediations, and configure rules.",
  },
  {
    title: "Local or External LLM",
    description:
      "Run AI models in your own cluster for maximum privacy, or use external providers for more capabilities.",
  },
  {
    title: "Explainable AI",
    description:
      "Every AI decision comes with a clear explanation. Understand why Tagent recommends or takes specific actions.",
  },
  {
    title: "Air-Gapped Support",
    description:
      "Full offline capability for regulated environments. All processing happens within your network.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">Architecture</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Tagent Works
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              A Kubernetes-native architecture designed for security, privacy,
              and operational simplicity. No black boxes, no magic—just
              transparent AI-powered operations.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Architecture Overview
            </h2>

            <div className="card p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {architectureSteps.slice(0, 4).map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="card p-4 h-full">
                      <div className="feature-icon mb-3">
                        <step.icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-[#71717a] mb-1">
                        Step {index + 1}
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#a1a1aa]">
                        {step.description}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#27272a]">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-6">
                <div className="h-px w-px bg-[#27272a]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {architectureSteps.slice(4).map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="card p-4 h-full">
                      <div className="feature-icon mb-3">
                        <step.icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-[#71717a] mb-1">
                        Step {index + 5}
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#a1a1aa]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section bg-[#0c0c0e] border-t border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Enterprise
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Security and compliance are not afterthoughts. They're core to
              Tagent's architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-6 group">
                <Lock className="w-5 h-5 text-[#10b981] mb-4" />
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

      {/* Installation */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Get Started in Minutes
            </h2>

            <div className="card p-6 mb-8">
              <div className="text-sm text-[#71717a] mb-2">Install with Helm</div>
              <pre className="!bg-transparent !border-0 text-sm text-[#fafafa]">
                <code>{`helm repo add tagent https://charts.tagent.io
helm install tagent tagent/tagent \\
  --namespace tagent \\
  --create-namespace \\
  --set mode=read-only`}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="card p-4">
                <div className="text-2xl font-bold text-[#10b981] mb-1">5 min</div>
                <div className="text-sm text-[#a1a1aa]">Installation time</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-bold text-[#10b981] mb-1">0</div>
                <div className="text-sm text-[#a1a1aa]">Cluster-admin required</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-bold text-[#10b981] mb-1">100%</div>
                <div className="text-sm text-[#a1a1aa]">Open source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[#27272a]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to deploy?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Check out the documentation or contact us for a guided setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Read the Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
