import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Network,
  Shield,
  Zap,
  AlertTriangle,
  Target,
  GitBranch,
  Moon,
  FileSearch,
  Clock,
  Activity,
  MessageSquare,
  Cpu,
  ArrowRight,
} from "lucide-react";

const coreFeatures = [
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    description:
      "Tagent's AI understands your system's architecture and relationships. When incidents occur, it automatically correlates metrics, logs, and traces to identify the actual root cause—not just symptoms. Get explanations in plain English, not just charts.",
    highlights: [
      "Correlates metrics, logs, and traces automatically",
      "Understands service dependencies",
      "Explains findings in natural language",
      "Learns from past incidents",
    ],
  },
  {
    icon: GitBranch,
    title: "Incident Memory & Learning Engine",
    description:
      "Every resolved incident makes Tagent smarter. Build institutional knowledge without the wiki nobody updates. The learning engine captures patterns, successful remediations, and team decisions.",
    highlights: [
      "Captures incident patterns automatically",
      "Builds knowledge graph from resolutions",
      "No manual documentation required",
      "Improves with every incident",
    ],
  },
  {
    icon: Network,
    title: "Incident Knowledge Graph",
    description:
      "Tagent builds and maintains a living map of your system's relationships. Visualize dependencies, understand impact chains, and see how changes propagate through your infrastructure.",
    highlights: [
      "Auto-generated service topology",
      "Dependency visualization",
      "Impact chain analysis",
      "Historical relationship tracking",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Smart Escalation Engine",
    description:
      "Not every incident needs a human. Tagent's escalation engine knows when to handle things automatically and when to wake someone up. Configurable rules ensure the right people get notified at the right time.",
    highlights: [
      "Configurable escalation policies",
      "Intelligent severity assessment",
      "Reduces alert fatigue by 89%",
      "Context-rich notifications",
    ],
  },
];

const advancedFeatures = [
  {
    icon: Shield,
    title: "Controlled Auto-Remediation",
    description:
      "Start in recommendation mode. When you're confident, enable automated actions. Full audit trails, instant rollbacks, and human-in-the-loop by design.",
  },
  {
    icon: Target,
    title: "Blast Radius Simulation",
    description:
      "Predict the impact of changes before deployment. Understand cascading failure patterns and identify single points of failure proactively.",
  },
  {
    icon: Zap,
    title: "Risk Scoring Engine",
    description:
      "Real-time risk assessment for your entire cluster. Prioritize what matters most with intelligent scoring based on system health, recent changes, and historical patterns.",
  },
  {
    icon: Activity,
    title: "Preventive CI/CD Scanning",
    description:
      "Scan deployments before they go live. Identify potential risks, configuration drift, and compliance violations in your pipeline.",
  },
  {
    icon: FileSearch,
    title: "Automated Postmortems",
    description:
      "Generate comprehensive postmortem reports automatically. Include timeline, root cause, impact analysis, and actionable recommendations.",
  },
  {
    icon: Cpu,
    title: "Chaos Validation Mode",
    description:
      "Validate your remediation playbooks with controlled chaos experiments. Ensure your automated responses work when you need them.",
  },
  {
    icon: MessageSquare,
    title: "Interactive AI Documentation Q&A",
    description:
      "Ask questions about your infrastructure in natural language. Tagent can explain configurations, recent changes, and incident history.",
  },
  {
    icon: Moon,
    title: "Night Guardian Mode",
    description:
      "Sleep through the night. Tagent handles routine incidents autonomously and sends you a morning briefing. Only wake for critical issues.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">Product</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Core Capabilities
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              Tagent combines AI-powered analysis with production-safe
              automation. Every feature is designed with one goal: make your
              team more effective without sacrificing control.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="feature-icon mb-4">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-[#a1a1aa] leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 text-sm text-[#a1a1aa]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card p-8">
                    <div className="h-48 bg-gradient-to-br from-[#18181b] to-[#0c0c0e] rounded-lg flex items-center justify-center border border-[#27272a]">
                      <feature.icon className="w-16 h-16 text-[#10b981] opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="section bg-[#0c0c0e] border-t border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Enterprise features that scale with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature) => (
              <div key={feature.title} className="card card-hover p-6 group">
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Tagent in action
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Get a personalized demo and see how Tagent can transform your
              Kubernetes operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/architecture">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  View Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
