"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { 
    icon: Shield, 
    title: "Production first", 
    description: "Every feature is designed with production safety in mind. We build tools we'd want to use ourselves." 
  },
  { 
    icon: Zap, 
    title: "Intelligent automation", 
    description: "AI should augment human capabilities, not replace them. We build systems that make engineers more effective." 
  },
  { 
    icon: Heart, 
    title: "Engineer wellbeing", 
    description: "Sustainable operations matter. We're here to eliminate burnout and give teams their nights and weekends back." 
  },
  { 
    icon: Globe, 
    title: "Open by default", 
    description: "We believe in transparent, explainable systems. No black boxes, no magic—just understandable AI." 
  },
];

const timeline = [
  { 
    year: "2023", 
    title: "Founded", 
    description: "Tagent was founded by engineers who lived through the pain of Kubernetes incident management." 
  },
  { 
    year: "2024", 
    title: "Alpha launch", 
    description: "Released our alpha to select design partners. Learned invaluable lessons from real production incidents." 
  },
  { 
    year: "2024", 
    title: "Night Guardian mode", 
    description: "Introduced our flagship feature that lets SREs sleep while Tagent handles routine incidents." 
  },
  { 
    year: "2025", 
    title: "General availability", 
    description: "Opening Tagent to the broader community." 
  },
];

const careers = [
  { title: "Senior Software Engineer", location: "Remote", type: "Full-time" },
  { title: "ML Engineer", location: "Remote", type: "Full-time" },
  { title: "Developer Advocate", location: "Remote", type: "Full-time" },
];

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We've been on-call at 3 AM.
              <br />
              <span className="text-neutral-400">That's why we built Tagent.</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Tagent was founded by engineers who lived through the pain of Kubernetes 
              incident management. We're building the tool we wished we had.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                The problem we're solving
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Modern Kubernetes environments are overwhelming. Teams drown in alerts, 
                  spend hours on root cause analysis, and burn out from on-call rotations.
                </p>
                <p>
                  We've been there. The 3 AM pages for issues that could have waited. The 
                  cascading failures that took days to fully understand. The dashboards that 
                  told us something was wrong but not what.
                </p>
                <p>
                  Existing tools were built for a different era. They observe and alert but 
                  don't understand. They generate noise instead of signal. They require humans 
                  to do the heavy lifting.
                </p>
                <p className="text-white font-medium">
                  We thought: what if AI could actually help?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Our approach
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Tagent is an AI-native SRE platform that actually understands your 
                  infrastructure. It observes, learns, and acts—augmenting your team 
                  rather than replacing it.
                </p>
                <p>
                  We're not building a black box. Every decision Tagent makes is 
                  explainable. Every action is auditable. You stay in control while 
                  AI handles the routine.
                </p>
                <p>
                  The goal isn't to eliminate SREs. It's to make SREs more effective. 
                  To give them time to focus on the interesting problems instead of 
                  the repetitive ones.
                </p>
                <p className="text-white font-medium">
                  AI handles the routine. Humans handle the novel. Together, they're 
                  unstoppable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What we believe
            </h2>
            <p className="text-neutral-400">
              Our values guide every product decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-neutral-900/50 border border-white/5"
              >
                <value.icon className="w-5 h-5 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our journey
            </h2>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-neutral-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-amber-500 mb-1">{item.year}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Join us
            </h2>
            <p className="text-neutral-400 max-w-2xl">
              We're looking for engineers who are passionate about making operations 
              better. Remote-first, mission-driven, and building something that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {careers.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-neutral-900/50 border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/5">
                    Apply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-neutral-500 text-sm">
            Don't see a role that fits?{" "}
            <Link href="/contact" className="text-amber-500 hover:underline">
              Reach out anyway
            </Link>
            —we're always looking for exceptional people.
          </p>
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
              Let's talk
            </h2>
            <p className="text-neutral-400 mb-8">
              Have questions? Want to learn more about our mission? 
              We'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
