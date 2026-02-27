import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For teams getting started with AI-powered operations.",
    features: [
      { text: "Read-only mode", included: true },
      { text: "AI root cause analysis", included: true },
      { text: "Slack integration", included: true },
      { text: "Up to 3 clusters", included: true },
      { text: "Community support", included: true },
      { text: "7-day incident history", included: true },
      { text: "Escalation workflows", included: false },
      { text: "Auto-remediation", included: false },
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For teams ready to automate their operations.",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Escalation workflows", included: true },
      { text: "Risk scoring engine", included: true },
      { text: "Automated postmortems", included: true },
      { text: "Knowledge graph", included: true },
      { text: "CI/CD scanning", included: true },
      { text: "Unlimited clusters", included: true },
      { text: "Email support", included: true },
    ],
    cta: "Start Free Trial",
    ctaLink: "/contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring advanced capabilities.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Auto-remediation", included: true },
      { text: "Compliance mode", included: true },
      { text: "Chaos testing", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom integrations", included: true },
      { text: "Private deployment", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I self-host Tagent?",
    a: "Yes. Tagent is open source and can be self-hosted. The Pro and Enterprise tiers include additional features, integrations, and support.",
  },
  {
    q: "What's included in the free tier?",
    a: "The Starter tier includes read-only AI analysis, root cause identification, Slack integration, and community support—everything you need to evaluate Tagent.",
  },
  {
    q: "How does pricing work for multiple clusters?",
    a: "Starter supports up to 3 clusters. Pro and Enterprise include unlimited clusters. Pricing is per organization, not per cluster.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes. Start a 14-day free trial of Pro with full access to all features. No credit card required.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">Pricing</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start free. Scale when ready.
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
              Tagent is open source and free to self-host. Cloud tiers include
              managed infrastructure, premium features, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card p-6 flex flex-col ${
                  tier.highlight
                    ? "border-[#10b981] relative"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#10b981] text-[#09090b] text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-[#71717a]">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[#a1a1aa] mt-2">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3 text-sm"
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-[#52525b] flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? "text-white" : "text-[#52525b]"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.ctaLink}>
                  <Button
                    className={`w-full h-10 ${
                      tier.highlight
                        ? "bg-[#10b981] hover:bg-[#059669] text-[#09090b]"
                        : "bg-[#18181b] hover:bg-[#27272a] text-white border border-[#27272a]"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Banner */}
      <section className="section bg-[#0c0c0e] border-t border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Open Source Core
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-6">
              Tagent's core functionality is open source under the Apache 2.0
              license. Self-host for free, contribute to the project, or build
              on top of it.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/tagent-dev/tagent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-12 px-6 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  View on GitHub
                </Button>
              </a>
              <Link href="/docs">
                <Button
                  variant="outline"
                  className="h-12 px-6 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  Self-Host Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Start with the free tier or talk to our team about your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
                >
                  Start Free Trial
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
