"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Target,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  Shield,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA3D } from "@/components/home/CTA3D";

const values = [
  { icon: Shield, title: "Production First", description: "Every feature is designed with production safety in mind. We build tools we'd want to use ourselves." },
  { icon: Zap, title: "Intelligent Automation", description: "AI should augment human capabilities, not replace them. We build systems that make engineers more effective." },
  { icon: Heart, title: "Engineer Wellbeing", description: "Sustainable operations matter. We're here to eliminate burnout and give teams their nights and weekends back." },
  { icon: Globe, title: "Open by Default", description: "We believe in transparent, explainable systems. No black boxes, no magic—just understandable AI." },
];

const timeline = [
  { year: "2023", title: "Founded", description: "Tagent was founded by engineers who lived through the pain of Kubernetes incident management." },
  { year: "2024", title: "Alpha Launch", description: "Released our alpha to select design partners. Learned invaluable lessons from real production incidents." },
  { year: "2024", title: "Night Guardian Mode", description: "Introduced our flagship feature that lets SREs sleep while Tagent handles routine incidents." },
  { year: "2025", title: "General Availability", description: "Opening Tagent to the broader community. The future of autonomous operations is here." },
];

const careers = [
  { title: "Senior Software Engineer", location: "Remote", type: "Full-time" },
  { title: "ML Engineer", location: "Remote", type: "Full-time" },
  { title: "Developer Advocate", location: "Remote", type: "Full-time" },
];

export default function AboutPage() {
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
              <Rocket className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-sm text-[#a1a1aa]">About Tagent</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Building the{" "}
              <span className="gradient-text">AI Nervous System</span>
              <br />
              for Cloud Infrastructure
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto">
              We're on a mission to make Kubernetes operations autonomous, safe, and sustainable. 
              Because engineers deserve to build, not just put out fires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Target className="w-4 h-4 text-[#22d3ee]" />
                <span className="text-sm text-[#a1a1aa]">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Operations for{" "}
                <span className="gradient-text">Kubernetes</span>
              </h2>
              <p className="text-lg text-[#71717a] mb-6">
                Modern Kubernetes environments generate overwhelming complexity. Teams are 
                drowning in alerts, spending hours on root cause analysis, and burning out 
                from on-call rotations. It doesn't have to be this way.
              </p>
              <p className="text-lg text-[#71717a] mb-6">
                Tagent is building the AI-native SRE layer that observes, understands, and 
                acts on incidents—giving teams superhuman operational capabilities while 
                maintaining full control and transparency.
              </p>
              <p className="text-lg text-[#a1a1aa]">
                We believe the future of operations is autonomous but not autonomous. AI 
                handles the routine, humans handle the novel. Together, they're unstoppable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl border-gradient overflow-hidden">
                <div className="relative p-8 bg-[#0a0a0f]/80 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#818cf8]/10 to-transparent" />
                  <div className="text-5xl mb-4">🚀</div>
                  <blockquote className="text-xl text-white font-medium mb-6">
                    "We're not just building another monitoring tool. We're building 
                    the intelligent layer that makes all your existing tools work better together."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex items-center justify-center text-white font-bold">
                      T
                    </div>
                    <div>
                      <div className="font-medium text-white">The Tagent Team</div>
                      <div className="text-sm text-[#71717a]">Founders</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We <span className="gradient-text">Believe</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              Our values guide every product decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px mb-6">
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#71717a]">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 bg-[#030305]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              From pain point to product. Building the future of Kubernetes operations.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#818cf8] via-[#a78bfa] to-[#22d3ee] opacity-30" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block p-6 rounded-2xl glass-card ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] text-sm text-[#a78bfa] font-medium mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-[#71717a]">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex-shrink-0 z-10 glow-sm" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Users className="w-4 h-4 text-[#22d3ee]" />
              <span className="text-sm text-[#22d3ee]">Careers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              We're looking for engineers who are passionate about making operations better. 
              Remote-first, mission-driven, and building something that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {careers.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl glass-card-hover">
                  <Briefcase className="w-8 h-8 text-[#818cf8] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-[#71717a] mb-6">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full h-12 btn-glass border-0 group-hover:border-[#818cf8]/30 group-hover:text-[#818cf8] transition-all">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-[#71717a]">
              Don't see a role that fits?{" "}
              <Link href="/contact" className="text-[#818cf8] hover:underline">
                Reach out anyway
              </Link>
              —we're always looking for exceptional people.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA3D
        title="Want to Learn More?"
        subtitle="We'd love to share our vision for the future of Kubernetes operations."
      />
    </div>
  );
}
