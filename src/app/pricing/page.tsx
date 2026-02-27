import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Try it out",
    features: [
      "Read-only observation",
      "AI root cause analysis",
      "Slack integration",
      "Basic incident timeline",
      "Community support",
      "1 cluster"
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$499",
    period: "/month",
    description: "For real teams",
    features: [
      "Everything in Starter",
      "Smart escalation",
      "Risk scoring",
      "Automated postmortems",
      "Knowledge graph",
      "CI/CD integration",
      "Up to 5 clusters",
      "Email support"
    ],
    cta: "Start trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger orgs",
    features: [
      "Everything in Pro",
      "Auto-remediation",
      "Compliance mode",
      "Chaos validation",
      "Unlimited clusters",
      "Dedicated support",
      "Custom integrations",
      "Self-hosted option"
    ],
    cta: "Contact us",
  },
];

const faqs = [
  { 
    q: "Can I try before paying?", 
    a: "Yes. Starter is free. For Pro/Enterprise features, we offer trials." 
  },
  { 
    q: "How do clusters work?", 
    a: "Each Kubernetes cluster counts separately. We have volume pricing for fleets." 
  },
  { 
    q: "What can auto-remediation do?", 
    a: "Restart failed pods, scale deployments, clear stuck resources. You approve actions first." 
  },
  { 
    q: "Startup pricing?", 
    a: "Yes. Discounted rates for early-stage startups and open source projects." 
  },
  { 
    q: "LLM costs?", 
    a: "Depends on incident volume. Typically $20-100/month in API costs for production environments." 
  },
  { 
    q: "Self-hosted?", 
    a: "Enterprise plans can run entirely in your infrastructure." 
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            Simple pricing.
          </h1>
          <p className="text-lg text-[#666666]">
            Start free. Scale when you're ready. No hidden fees.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`p-6 border ${plan.highlight ? 'border-[#22c55e]' : 'border-[#1a1a1a]'}`}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#fafafa]">{plan.name}</h3>
                  <p className="text-[#666666] text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#fafafa]">{plan.price}</span>
                  {plan.period && <span className="text-[#666666]">{plan.period}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-[#666666] flex items-start gap-2">
                      <span className="text-[#22c55e]">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button 
                    className={`w-full rounded-none ${
                      plan.highlight 
                        ? 'bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a]' 
                        : 'bg-[#141414] hover:bg-[#1a1a1a] text-[#fafafa]'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise extras */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">
            Enterprise includes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Private cloud / on-premise",
              "SSO/SAML",
              "Custom RBAC",
              "Dedicated success manager",
              "Priority support SLA",
              "Custom training"
            ].map((item) => (
              <div key={item} className="text-[#666666] text-sm flex items-center gap-2">
                <span className="text-[#22c55e]">+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-8">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-[#fafafa] font-medium mb-1">{faq.q}</h3>
                <p className="text-[#666666] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fafafa] mb-4">
            Ready?
          </h2>
          <p className="text-[#666666] mb-6">
            Start with free. No credit card. 15 minutes to set up.
          </p>
          <Link href="/contact">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none">
              Get started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
