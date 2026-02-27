"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Building2, HelpCircle, Shield, Users, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA3D } from "@/components/home/CTA3D";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring Tagent's capabilities",
    features: ["Read-only observation mode", "AI root cause analysis", "Slack integration", "Basic incident timeline", "Community support", "1 cluster"],
    cta: { text: "Get Started Free", href: "/contact" },
  },
  {
    name: "Pro",
    price: "$499",
    description: "For teams ready to operationalize AI-driven incident management",
    features: ["Everything in Starter", "Smart escalation workflows", "Risk scoring engine", "Automated postmortems", "Incident knowledge graph", "CI/CD integration", "Up to 5 clusters", "Email support"],
    highlighted: true,
    badge: "Most Popular",
    cta: { text: "Start Pro Trial", href: "/contact" },
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring advanced capabilities and support",
    features: ["Everything in Pro", "Controlled auto-remediation", "Compliance & security mode", "Chaos validation", "Unlimited clusters", "Dedicated support", "Custom integrations", "Private deployment", "SLA guarantee"],
    cta: { text: "Contact Sales", href: "/contact" },
  },
];

const faqs = [
  { q: "Can I try Tagent before committing?", a: "Yes! The Starter plan is free and lets you explore Tagent's core capabilities. For Pro and Enterprise features, we offer trial periods." },
  { q: "How does cluster counting work?", a: "A cluster is a single Kubernetes cluster. If you have multiple clusters in different environments, each counts separately. We offer volume pricing for larger fleets." },
  { q: "What's included in auto-remediation?", a: "Auto-remediation includes safe, pre-approved actions like restarting failed pods, scaling deployments, and clearing stuck resources. You maintain full control through approval workflows." },
  { q: "Do you offer discounts for startups?", a: "Yes! We offer special pricing for early-stage startups and open source projects. Contact us to learn more about our startup program." },
  { q: "What LLM costs should I expect?", a: "LLM costs depend on your incident volume and chosen provider. For typical production environments, expect $20-100/month in additional LLM API costs." },
  { q: "Can I self-host Tagent?", a: "Yes, Enterprise plans include self-hosted deployment options. This allows you to run Tagent entirely within your infrastructure." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-sm text-[#a1a1aa]">Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-[#030305] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SOC 2 Compliant", desc: "Enterprise security" },
              { icon: Users, title: "Team Collaboration", desc: "Built for SRE teams" },
              { icon: Clock, title: "99.9% SLA", desc: "Enterprise reliability" },
              { icon: Heart, title: "Expert Support", desc: "Dedicated success team" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px">
                  <div className="w-full h-full rounded-lg bg-[#030305] flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{feature.title}</div>
                  <div className="text-xs text-[#52525b]">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Highlight glow */}
                {plan.highlighted && (
                  <div className="absolute -inset-px bg-gradient-to-b from-[#818cf8] to-[#a78bfa] rounded-2xl opacity-20 blur-xl" />
                )}
                
                <div className={`relative h-full p-8 rounded-2xl ${plan.highlighted ? "border-gradient" : "glass-card"}`}>
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white text-sm font-medium">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-[#71717a] text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.price !== "Custom" && plan.price !== "Free" && (
                        <span className="text-[#52525b]">/month</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-gradient-to-br from-[#818cf8] to-[#a78bfa]" : "bg-white/5"}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#a1a1aa] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={plan.cta.href} className="block">
                    <Button className={`w-full h-12 ${plan.highlighted ? "bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-sm" : "btn-glass border-0"}`}>
                      {plan.cta.text}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-[#71717a] mb-4">
              All plans include core observability features. Need something custom?{" "}
              <Link href="/contact" className="text-[#818cf8] hover:underline">
                Talk to us
              </Link>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#52525b]">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22c55e]" />
                No credit card required for Starter
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22c55e]" />
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-24 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Building2 className="w-4 h-4 text-[#22d3ee]" />
                <span className="text-sm text-[#a1a1aa]">Enterprise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for <span className="gradient-text">Enterprise Scale</span>
              </h2>
              <p className="text-lg text-[#71717a] mb-8">
                Enterprise plans are customized for your organization's specific needs. 
                Get dedicated support, custom integrations, and deployment options.
              </p>
              <ul className="space-y-3 mb-8">
                {["Private cloud or on-premise deployment", "SSO/SAML integration", "Custom RBAC configurations", "Dedicated customer success manager", "Priority support with SLA", "Custom training and onboarding"].map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#a1a1aa]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="h-12 px-6 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-sm">
                  Contact Enterprise Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl border-gradient overflow-hidden">
                <div className="p-8 bg-[#0a0a0f]/80 backdrop-blur-xl">
                  <Building2 className="w-12 h-12 text-[#818cf8] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Ready</h3>
                  <p className="text-[#71717a] mb-6">Trusted by engineering teams at leading technology companies.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Clusters", value: "Unlimited" },
                      { label: "Team Members", value: "Unlimited" },
                      { label: "Data Retention", value: "Custom" },
                      { label: "Support", value: "24/7" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-white/[0.02]">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-[#52525b]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#030305]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-[#818cf8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-[#71717a]">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA3D />
    </div>
  );
}
