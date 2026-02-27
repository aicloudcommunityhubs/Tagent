import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Book,
  Rocket,
  Settings,
  Shield,
  Zap,
  Moon,
  Code,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const docSections = [
  {
    icon: Rocket,
    title: "Installation",
    href: "#installation",
    description: "Get Tagent up and running in your cluster.",
  },
  {
    icon: Settings,
    title: "Configuration",
    href: "#configuration",
    description: "Configure Tagent to match your environment.",
  },
  {
    icon: Shield,
    title: "Escalation Setup",
    href: "#escalation",
    description: "Set up alert routing and escalation policies.",
  },
  {
    icon: Zap,
    title: "Active Mode",
    href: "#active-mode",
    description: "Enable automated remediation safely.",
  },
  {
    icon: Code,
    title: "API Reference",
    href: "#api",
    description: "Integrate with Tagent programmatically.",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    href: "#faq",
    description: "Common questions and answers.",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">Documentation</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              Everything you need to install, configure, and operate Tagent.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docSections.map((section) => (
              <a
                key={section.title}
                href={section.href}
                className="card card-hover p-6 group"
              >
                <div className="feature-icon mb-4">
                  <section.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-[#a1a1aa]">{section.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-6 h-6 text-[#10b981]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Installation
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Install Tagent using Helm. The default installation runs in
                read-only mode, which is safe for production environments.
              </p>

              <h3 className="text-lg font-semibold text-white mb-4">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside text-[#a1a1aa] space-y-2 mb-6">
                <li>Kubernetes 1.24 or later</li>
                <li>Helm 3.0 or later</li>
                <li>kubectl configured to access your cluster</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Install
              </h3>
              <pre className="mb-6">
                <code>{`# Add the Tagent Helm repository
helm repo add tagent https://charts.tagent.io
helm repo update

# Install Tagent in read-only mode
helm install tagent tagent/tagent \\
  --namespace tagent \\
  --create-namespace \\
  --set mode=read-only

# Verify installation
kubectl get pods -n tagent`}</code>
              </pre>

              <h3 className="text-lg font-semibold text-white mb-4">
                Configuration Options
              </h3>
              <pre className="mb-6">
                <code>{`# values.yaml
mode: read-only  # Start with read-only
namespace: tagent

# Enable specific namespaces
watchNamespaces:
  - production
  - staging

# Configure LLM backend
llm:
  provider: local  # or openai, anthropic
  model: llama-3`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-[#10b981]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Configuration
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Configure Tagent to match your environment and operational
                preferences.
              </p>

              <h3 className="text-lg font-semibold text-white mb-4">
                Core Settings
              </h3>
              <pre className="mb-6">
                <code>{`# config.yaml
tagent:
  # Operational mode
  mode: read-only  # read-only | recommend | active
  
  # Logging level
  logLevel: info
  
  # Data retention
  retention:
    incidents: 30d
    metrics: 7d
    logs: 3d
  
  # Notification channels
  notifications:
    slack:
      enabled: true
      webhookUrl: \${SLACK_WEBHOOK_URL}
    pagerduty:
      enabled: true
      routingKey: \${PAGERDUTY_ROUTING_KEY}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Escalation */}
      <section id="escalation" className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#10b981]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Escalation Setup
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Define escalation policies to route incidents to the right
                people at the right time.
              </p>

              <h3 className="text-lg font-semibold text-white mb-4">
                Example Policy
              </h3>
              <pre className="mb-6">
                <code>{`# escalation.yaml
policies:
  - name: production-critical
    match:
      namespace: production
      severity: critical
    steps:
      - notify: "#sre-critical"
        wait: 5m
      - notify: "@sre-oncall"
        wait: 10m
      - notify: "@engineering-manager"
        
  - name: default
    match:
      namespace: "*"
    steps:
      - notify: "#incidents"
        wait: 15m
      - notify: "@sre-oncall"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Active Mode */}
      <section id="active-mode" className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#10b981]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Active Mode
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Active mode enables Tagent to take automated remediation
                actions. Enable this only after you're confident in Tagent's
                recommendations.
              </p>

              <div className="card p-4 mb-6 border-[#f59e0b]/50 bg-[#f59e0b]/5">
                <p className="text-sm text-[#fafafa]">
                  <strong>Warning:</strong> Active mode grants Tagent
                  permissions to modify your cluster. Always start with
                  read-only mode and review recommendations before enabling.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">
                Remediation Rules
              </h3>
              <pre className="mb-6">
                <code>{`# remediation.yaml
rules:
  - name: restart-crashloop-pod
    match:
      reason: CrashLoopBackOff
      namespace: production
    action:
      type: restart-pod
      requiresApproval: true
      
  - name: scale-on-high-cpu
    match:
      metric: cpu_utilization
      threshold: 90
      duration: 5m
    action:
      type: scale-deployment
      maxReplicas: 10
      requiresApproval: false`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-[#10b981]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">FAQ</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Does Tagent require cluster-admin permissions?",
                  a: "No. Tagent operates with namespace-scoped permissions by default. You can grant additional permissions as needed, following the principle of least privilege.",
                },
                {
                  q: "Where does my data go?",
                  a: "All data stays in your cluster by default. Tagent processes metrics, logs, and traces locally. External integrations (Slack, PagerDuty) only receive incident summaries.",
                },
                {
                  q: "Can I use Tagent in air-gapped environments?",
                  a: "Yes. Tagent can run completely offline with local LLM models. No internet connection required.",
                },
                {
                  q: "How do I enable automated remediation?",
                  a: "Start in read-only mode, review Tagent's recommendations, then enable active mode with specific remediation rules. Every action requires explicit configuration.",
                },
                {
                  q: "What Kubernetes versions are supported?",
                  a: "Tagent supports Kubernetes 1.24 and later, including all major managed Kubernetes services (EKS, GKE, AKS).",
                },
              ].map((item) => (
                <div key={item.q} className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[#27272a]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need more help?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Our team is here to help you get started with Tagent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8">
                  Contact Support
                </Button>
              </Link>
              <a
                href="https://github.com/tagent-dev/tagent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  GitHub Issues
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
