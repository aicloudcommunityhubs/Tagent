"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Users, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const trustFeatures = [
  {
    icon: Shield,
    title: "Read-Only by Default",
    description: "Start in safe observation mode. Enable write operations only when you're ready.",
  },
  {
    icon: Lock,
    title: "RBAC Integration",
    description: "Full integration with Kubernetes RBAC for granular permission control.",
  },
  {
    icon: Eye,
    title: "Complete Audit Trail",
    description: "Every action is logged with full context for compliance and debugging.",
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description: "Deploy on your infrastructure for maximum data sovereignty.",
  },
];

const customerTypes = [
  {
    icon: Users,
    title: "Platform Teams",
    description: "Build internal platforms with AI-powered reliability built-in.",
    features: ["Multi-cluster support", "Custom integrations", "Team management"],
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Meet compliance requirements while reducing operational overhead.",
    features: ["SOC 2 ready", "Private deployment", "Dedicated support"],
  },
  {
    icon: Server,
    title: "Startups",
    description: "Move fast without breaking things. AI SRE for lean teams.",
    features: ["Quick setup", "Affordable pricing", "Free tier available"],
  },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.2)] text-sm text-[#6366f1] font-medium mb-4">
              Enterprise Ready
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Security and control are not afterthoughts. They&apos;re foundational to how Tagent works.
            </p>
          </motion.div>
        </div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#111119] rounded-xl border border-[rgba(99,102,241,0.15)] text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-[1px] mx-auto mb-4">
                <div className="w-full h-full rounded-lg bg-[#111119] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#71717a]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Customer Types */}
        <div className="border-t border-[rgba(99,102,241,0.1)] pt-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Built for Teams of All Sizes
              </h2>
              <p className="text-[#71717a]">
                Whether you&apos;re a startup or enterprise, Tagent scales with you.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {customerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 bg-[#111119] rounded-xl border border-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <type.icon className="w-8 h-8 text-[#6366f1] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-[#71717a] mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/security">
            <Button variant="outline" className="border-[rgba(99,102,241,0.3)] text-[#a1a1aa] hover:text-white hover:bg-[#16161e]">
              Learn About Our Security Approach
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
