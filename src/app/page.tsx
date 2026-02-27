import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Root cause analysis",
    description: "Tagent reads your metrics, logs, and traces. It tells you what's broken and why—not just that something's wrong."
  },
  {
    title: "Incident memory",
    description: "Every incident makes it smarter. No more wiki pages nobody updates. The knowledge stays in the system."
  },
  {
    title: "Safe auto-remediation",
    description: "Start read-only. When you trust it, let it fix common issues. Full audit trail, instant rollback."
  },
  {
    title: "Night Guardian mode",
    description: "Sleep. Tagent handles the routine stuff and sends you a morning summary. Only wake you for real problems."
  },
];

const integrations = [
  "Kubernetes", "Prometheus", "Grafana", "Datadog", "PagerDuty", "Slack"
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fafafa] mb-6 leading-tight">
            Your pager can
            <br />
            shut up now.
          </h1>
          <p className="text-lg text-[#666666] mb-8 max-w-xl">
            Tagent is an AI SRE that actually understands your Kubernetes cluster. 
            It finds root causes, fixes what it can, and only bothers you when it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact">
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium h-10 px-6 rounded-none">
                Try it free
              </Button>
            </Link>
            <Link href="/product">
              <Button variant="outline" className="h-10 px-6 border-[#1a1a1a] text-[#fafafa] hover:bg-[#141414] rounded-none">
                Read the docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-6">
            We've been there.
          </h2>
          <p className="text-[#666666] mb-8 max-w-xl">
            3 AM pages. Cascading failures. Dashboards showing you graphs but not answers. 
            We built Tagent because we were tired of the same problems every week.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-[#1a1a1a]">
              <div className="text-2xl font-bold text-[#22c55e]">4:47 AM</div>
              <div className="text-xs text-[#666666]">Average page time</div>
            </div>
            <div className="p-4 border border-[#1a1a1a]">
              <div className="text-2xl font-bold text-[#22c55e]">89%</div>
              <div className="text-xs text-[#666666]">Alerts are noise</div>
            </div>
            <div className="p-4 border border-[#1a1a1a]">
              <div className="text-2xl font-bold text-[#22c55e]">3.2hr</div>
              <div className="text-xs text-[#666666]">Avg MTTR</div>
            </div>
            <div className="p-4 border border-[#1a1a1a]">
              <div className="text-2xl font-bold text-[#22c55e]">2.5x</div>
              <div className="text-xs text-[#666666]">Incidents per rotation</div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-4">
            What Tagent actually does
          </h2>
          <p className="text-[#666666] mb-8">
            No magic. No black boxes. Just AI that makes your team more effective.
          </p>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="border-l-2 border-[#22c55e] pl-4">
                <h3 className="text-lg font-semibold text-[#fafafa] mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-8">
            Three steps
          </h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-[80px_1fr] gap-4">
              <div className="text-5xl font-bold text-[#1a1a1a]">01</div>
              <div>
                <h3 className="text-lg font-semibold text-[#fafafa] mb-2">Connect your stack</h3>
                <p className="text-[#666666] text-sm">
                  Link Tagent to your Kubernetes clusters and observability tools. Takes about 15 minutes. 
                  We don't need much—read access to start.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[80px_1fr] gap-4">
              <div className="text-5xl font-bold text-[#1a1a1a]">02</div>
              <div>
                <h3 className="text-lg font-semibold text-[#fafafa] mb-2">Let it learn</h3>
                <p className="text-[#666666] text-sm">
                  Tagent builds a knowledge graph of your system. Learns dependencies, understands normal behavior, 
                  spots patterns. A few days and it knows your stack better than most of your team.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[80px_1fr] gap-4">
              <div className="text-5xl font-bold text-[#1a1a1a]">03</div>
              <div>
                <h3 className="text-lg font-semibold text-[#fafafa] mb-2">Get your life back</h3>
                <p className="text-[#666666] text-sm">
                  When incidents happen, Tagent analyses, recommends, and—when you say it's okay—fixes. 
                  You stay in control. You just have fewer 3 AM wakeups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#666666] mb-4">Works with:</p>
          <div className="flex flex-wrap gap-4">
            {integrations.map((name) => (
              <span key={name} className="text-sm text-[#fafafa] border border-[#1a1a1a] px-3 py-1">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#1a1a1a] p-4">
              <p className="text-sm text-[#fafafa] mb-3">
                "Caught a memory leak before it became an outage. Worth it."
              </p>
              <p className="text-xs text-[#666666]">— Sarah Chen, Platform Lead</p>
            </div>
            <div className="border border-[#1a1a1a] p-4">
              <p className="text-sm text-[#fafafa] mb-3">
                "MTTR dropped from 45 minutes to under 10. The RCA is actually useful."
              </p>
              <p className="text-xs text-[#666666]">— Marcus Webb, SRE Manager</p>
            </div>
            <div className="border border-[#1a1a1a] p-4">
              <p className="text-sm text-[#fafafa] mb-3">
                "Slept through my on-call rotation last week. First time in two years."
              </p>
              <p className="text-xs text-[#666666]">— Priya Sharma, Senior SRE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-4">
            Want to sleep better?
          </h2>
          <p className="text-[#666666] mb-6">
            Start with the free tier. No credit card. Set up takes about 15 minutes.
          </p>
          <Link href="/contact">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium h-10 px-6 rounded-none">
              Get started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
