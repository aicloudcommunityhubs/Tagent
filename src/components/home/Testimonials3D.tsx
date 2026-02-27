"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tagent transformed our incident response. What used to take hours now takes minutes. The AI-powered root cause analysis is incredibly accurate and has saved us countless sleepless nights.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    initials: "SC",
  },
  {
    quote: "The Night Guardian mode alone is worth it. Our team actually gets sleep now. Tagent handles the routine incidents while we focus on building features that matter to our customers.",
    author: "Marcus Rodriguez",
    role: "Platform Lead",
    company: "CloudScale",
    initials: "MR",
  },
  {
    quote: "Finally, an AI tool that understands Kubernetes deeply. The knowledge graph feature has become our go-to for understanding system dependencies and explaining incidents to stakeholders.",
    author: "Emily Watson",
    role: "SRE Team Lead",
    company: "DataPipe",
    initials: "EW",
  },
  {
    quote: "The security model gave our compliance team peace of mind. Read-only by default with full audit trails - exactly what enterprises need for regulatory compliance.",
    author: "David Kim",
    role: "CTO",
    company: "FinSecure",
    initials: "DK",
  },
  {
    quote: "Tagent's blast radius simulation saved us from a major outage. It caught a cascading failure pattern we hadn't even considered during our architecture reviews.",
    author: "Alex Thompson",
    role: "Principal Engineer",
    company: "StreamingCo",
    initials: "AT",
  },
  {
    quote: "The automated postmortems are game-changing. They capture all the context we need without the manual documentation burden that everyone hates doing.",
    author: "Priya Sharma",
    role: "DevOps Manager",
    company: "AppForge",
    initials: "PS",
  },
];

export function Testimonials3D() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by{" "}
            <span className="gradient-text">Engineering Teams</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            See what engineering leaders are saying about Tagent's impact on their operations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass-card-hover">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#818cf8]/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#a1a1aa] leading-relaxed mb-6 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a78bfa] flex items-center justify-center text-white font-medium text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{testimonial.author}</p>
                    <p className="text-xs text-[#52525b]">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
