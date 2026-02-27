import Link from "next/link";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Root cause analysis",
    description: "Stop digging through dashboards at 2 AM. Tagent correlates metrics, logs, and traces to tell you what's actually broken.",
    details: [
      "Multi-signal correlation",
      "Service dependency awareness",
      "Historical pattern matching",
      "Actually useful suggestions"
    ]
  },
  {
    title: "Incident memory",
    description: "Every resolved incident makes Tagent smarter. The next time something similar happens, it knows what to do.",
    details: [
      "Pattern extraction from past incidents",
      "Team knowledge capture",
      "Cross-cluster learning",
      "No wiki required"
    ]
  },
  {
    title: "Knowledge graph",
    description: "A living map of your system. See dependencies, track impact chains, understand what connects to what.",
    details: [
      "Real-time service topology",
      "Dependency visualization",
      "Impact chain analysis",
      "Version tracking"
    ]
  },
  {
    title: "Smart escalation",
    description: "The right person gets notified with full context. No more \"what's happening?\" ping-pong.",
    details: [
      "Context-aware routing",
      "PagerDuty/Opsgenie integration",
      "Rich notifications",
      "Escalation policies that make sense"
    ]
  },
  {
    title: "Auto-remediation",
    description: "Start read-only. When you trust it, enable automated fixes for known issues. You control the blast radius.",
    details: [
      "Human-in-the-loop by default",
      "Rollback on failure",
      "Blast radius constraints",
      "Approval workflows"
    ]
  },
  {
    title: "Risk scoring",
    description: "Real-time risk assessment for your cluster. Know what's likely to break before it does.",
    details: [
      "Continuous evaluation",
      "Business impact weighting",
      "Trend analysis",
      "Proactive alerts"
    ]
  },
  {
    title: "CI/CD gates",
    description: "Catch issues before they reach production. Integrate risk checks into your deployment pipeline.",
    details: [
      "Pre-flight checks",
      "Deployment gates",
      "Rollback probability",
      "Resource conflict detection"
    ]
  },
  {
    title: "Auto postmortems",
    description: "Generate incident reports automatically. Timeline, root cause, action items—without the manual work.",
    details: [
      "Auto-generated timelines",
      "Contributing factor analysis",
      "Action item suggestions",
      "Custom templates"
    ]
  },
  {
    title: "Natural language queries",
    description: "Ask questions about your infrastructure in plain English. Get real answers from your actual data.",
    details: [
      "Conversational interface",
      "Runbook integration",
      "Knowledge base search",
      "Multi-turn reasoning"
    ]
  },
  {
    title: "Night Guardian",
    description: "Off-hours mode. Tagent handles routine incidents and sends you a summary in the morning. Sleep happens.",
    details: [
      "Off-hours automation",
      "Smart alert filtering",
      "Morning briefings",
      "Safety guardrails"
    ]
  },
  {
    title: "Compliance logging",
    description: "Audit trails for everything. Meet regulatory requirements without extra work.",
    details: [
      "Full audit log",
      "Compliance dashboards",
      "Access control",
      "Regulatory reporting"
    ]
  },
  {
    title: "Chaos validation",
    description: "Test your resilience with controlled failure injection. Verify that detection and remediation actually work.",
    details: [
      "Controlled experiments",
      "Resilience scoring",
      "Recovery validation",
      "Game day automation"
    ]
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            Everything you need for
            <br />
            Kubernetes operations.
          </h1>
          <p className="text-lg text-[#666666] mb-8 max-w-xl">
            Tagent observes, understands, and acts on incidents. 
            Your team focuses on building instead of firefighting.
          </p>
          <div className="flex gap-3">
            <Link href="/contact">
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none">
                Request access
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" className="border-[#1a1a1a] text-[#fafafa] hover:bg-[#141414] rounded-none">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fafafa] mb-2">
            What's included
          </h2>
          <p className="text-[#666666] mb-8">
            Built for production. Designed to be trusted.
          </p>
          
          <div className="space-y-8">
            {capabilities.map((cap, index) => (
              <div 
                key={cap.title} 
                className={`py-8 ${index < capabilities.length - 1 ? 'border-b border-[#1a1a1a]' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold text-[#fafafa]">
                      {cap.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-[#666666] mb-4">
                      {cap.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {cap.details.map((detail) => (
                        <li key={detail} className="text-sm text-[#666666] flex items-center gap-2">
                          <span className="text-[#22c55e]">+</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section className="py-16 px-6 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fafafa] mb-6">
            How it's built
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#666666] text-sm">
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">Architecture</h3>
              <p>
                Tagent runs in your cluster as a set of controllers and agents. 
                It observes resources, collects metrics, and maintains a knowledge graph. 
                No data leaves your environment unless you want it to.
              </p>
            </div>
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">Security model</h3>
              <p>
                Read-only by default. Write permissions are scoped to specific namespaces 
                and resources. Every action is logged. You can audit everything Tagent does 
                and roll back any change.
              </p>
            </div>
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">AI approach</h3>
              <p>
                We use a combination of rule-based reasoning and LLMs. Rules handle the 
                deterministic stuff. LLMs handle the fuzzy, contextual interpretation. 
                Every AI decision is explainable.
              </p>
            </div>
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">Data handling</h3>
              <p>
                Metrics, logs, and traces stay in your stack. Tagent builds its knowledge 
                graph locally. For LLM features, you can use our hosted models or bring 
                your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fafafa] mb-4">
            See it in action
          </h2>
          <p className="text-[#666666] mb-6">
            We'll show you how Tagent works with your specific setup. 
            No generic demos—just your stack, your problems, real solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none">
              Schedule a demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
