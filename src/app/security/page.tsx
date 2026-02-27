import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Key,
  GitBranch,
  Cloud,
  Settings,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Eye,
    title: "Default Read-Only Mode",
    description:
      "Tagent starts in read-only mode by default. It can observe and analyze, but cannot make changes to your cluster without explicit permission.",
  },
  {
    icon: Shield,
    title: "Explicit Remediation Permissions",
    description:
      "Every automated action requires explicit configuration. No surprises, no unexpected changes. You define what Tagent can and cannot do.",
  },
  {
    icon: FileText,
    title: "Explainable Remediation Logs",
    description:
      "Every action is logged with a full explanation of why it was taken. Understand Tagent's reasoning at any time with detailed audit trails.",
  },
  {
    icon: GitBranch,
    title: "Full Audit Trail",
    description:
      "Complete history of all observations, recommendations, and actions. Export logs for compliance and post-incident review.",
  },
  {
    icon: Server,
    title: "Namespace Isolation",
    description:
      "Tagent operates only in namespaces you explicitly grant access to. No cross-namespace visibility or actions by default.",
  },
  {
    icon: Lock,
    title: "RBAC Control",
    description:
      "Full integration with Kubernetes RBAC. Control who can configure Tagent, approve remediations, and access incident data.",
  },
  {
    icon: Key,
    title: "No Cluster-Admin by Default",
    description:
      "Tagent doesn't require cluster-admin privileges. It works with minimal permissions, following the principle of least privilege.",
  },
  {
    icon: Key,
    title: "Encrypted Secrets",
    description:
      "All sensitive data is encrypted at rest and in transit. Integration with external secret management systems supported.",
  },
  {
    icon: Cloud,
    title: "Self-Hosted Option",
    description:
      "Run Tagent entirely within your own infrastructure. No data leaves your cluster unless you explicitly configure external integrations.",
  },
  {
    icon: Settings,
    title: "LLM Provider Flexibility",
    description:
      "Choose your AI backend: run models locally for maximum privacy, or use external providers for enhanced capabilities.",
  },
];

const complianceFeatures = [
  "SOC 2 Type II Ready",
  "GDPR Compliant",
  "Data Residency Options",
  "Role-Based Access Control",
  "Complete Audit Logging",
  "Incident Retention Policies",
  "Data Encryption at Rest",
  "Data Encryption in Transit",
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">Security</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Built for Production.
              <br />
              <span className="gradient-text">Designed for Trust.</span>
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              Security isn't a feature—it's the foundation. Tagent was designed
              from the ground up to be safe enough for production environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Security-First Architecture
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Every design decision in Tagent was made with security in mind.
                We follow the principle of least privilege, require explicit
                consent for automated actions, and provide complete transparency
                into all operations.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Tagent is open source, meaning our security practices are fully
                auditable. No black boxes, no hidden operations—just clear,
                documented behavior.
              </p>
              <div className="flex items-center gap-4">
                <div className="badge">Open Source</div>
                <div className="badge">Auditable</div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "No cluster-admin by default",
                "Namespace-scoped permissions",
                "All actions require explicit configuration",
                "Complete audit trail for every action",
                "Data never leaves your cluster",
              ].map((item) => (
                <div
                  key={item}
                  className="card card-hover p-4 flex items-center gap-3"
                >
                  <Shield className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section bg-[#0c0c0e] border-t border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Security Features
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Comprehensive security controls for the most demanding
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
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

      {/* Compliance */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Ready
              </h2>
              <p className="text-lg text-[#a1a1aa]">
                Built to meet enterprise compliance requirements out of the box.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {complianceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="card p-4 text-center text-sm text-white"
                >
                  {feature}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have security questions?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Our team is ready to discuss your security requirements and help
              you evaluate Tagent for your environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Contact Security Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://github.com/tagent-dev/tagent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  View Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
