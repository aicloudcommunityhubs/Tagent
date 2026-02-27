"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle, Shield, Users, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Explore Tagent's capabilities",
    features: [
      "Read-only observation mode",
      "AI root cause analysis",
      "Slack integration",
      "Basic incident timeline",
      "Community support",
      "1 cluster"
    ],
    cta: { text: "Get started", href: "/contact" },
  },
  {
    name: "Pro",
    price: "$499",
    period: "/month",
    description: "For teams ready to operationalize AI",
    features: [
      "Everything in Starter",
      "Smart escalation workflows",
      "Risk scoring engine",
      "Automated postmortems",
      "Incident knowledge graph",
      "CI/CD integration",
      "Up to 5 clusters",
      "Email support"
    ],
    highlighted: true,
    cta: { text: "Start trial", href: "/contact" },
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Controlled auto-remediation",
      "Compliance & security mode",
      "Chaos validation",
      "Unlimited clusters",
      "Dedicated support",
      "Custom integrations",
      "Private deployment"
    ],
    cta: { text: "Contact sales", href: "/contact" },
  },
];

const faqs = [
  { 
    q: "Can I try before committing?", 
    a: "Yes. The Starter plan is free and lets you explore Tagent's core capabilities. For Pro and Enterprise features, we offer trial periods." 
  },
  { 
    q: "How does cluster counting work?", 
    a: "A cluster is a single Kubernetes cluster. If you have multiple clusters in different environments, each counts separately. We offer volume pricing for larger fleets." 
  },
  { 
    q: "What's included in auto-remediation?", 
    a: "Auto-remediation includes safe, pre-approved actions like restarting failed pods, scaling deployments, and clearing stuck resources. You maintain full control through approval workflows." 
  },
  { 
    q: "Do you offer startup discounts?", 
    a: "Yes. We offer special pricing for early-stage startups and open source projects. Contact us to learn more." 
  },
  { 
    q: "What about LLM costs?", 
    a: "LLM costs depend on your incident volume and chosen provider. For typical production environments, expect $20-100/month in additional LLM API costs." 
  },
  { 
    q: "Can I self-host?", 
    a: "Yes, Enterprise plans include self-hosted deployment options. Run Tagent entirely within your infrastructure." 
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple pricing.
              <br />
              <span className="text-neutral-400">No surprises.</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Start free, scale as you grow. No hidden fees, no credit card 
              required for the Starter plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-8 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SOC 2", desc: "Compliant" },
              { icon: Users, title: "Team", desc: "Collaboration" },
              { icon: Clock, title: "99.9%", desc: "SLA" },
              { icon: Heart, title: "Expert", desc: "Support" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <feature.icon className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="text-sm font-medium text-white">{feature.title}</div>
                  <div className="text-xs text-neutral-500">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg border ${
                  plan.highlighted 
                    ? "bg-neutral-900 border-amber-500/30" 
                    : "bg-neutral-900/50 border-white/5"
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-neutral-500">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={plan.cta.href} className="block">
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? "bg-amber-500 hover:bg-amber-400 text-black font-medium" 
                        : "bg-neutral-800 hover:bg-neutral-700 text-white"
                    }`}
                  >
                    {plan.cta.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Fine print */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center text-sm text-neutral-500"
          >
            <p>
              All plans include core observability features.{" "}
              <Link href="/contact" className="text-amber-500 hover:underline">
                Contact us
              </Link>{" "}
              for custom requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Enterprise scale
              </h2>
              <p className="text-neutral-400 mb-6">
                Enterprise plans are customized for your organization's specific needs. 
                Get dedicated support, custom integrations, and deployment options.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Private cloud or on-premise deployment",
                  "SSO/SAML integration",
                  "Custom RBAC configurations",
                  "Dedicated customer success manager",
                  "Priority support with SLA",
                  "Custom training and onboarding"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Check className="w-4 h-4 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
                  Contact enterprise sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-lg bg-neutral-900/50 border border-white/5"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Clusters", value: "Unlimited" },
                  { label: "Team members", value: "Unlimited" },
                  { label: "Data retention", value: "Custom" },
                  { label: "Support", value: "24/7" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded bg-neutral-800/50">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Common questions
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
                className="p-6 rounded-lg bg-neutral-900/50 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                    <p className="text-neutral-400 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-neutral-400 mb-8">
              Start with our free tier. No credit card required.
            </p>
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
                Get started free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
