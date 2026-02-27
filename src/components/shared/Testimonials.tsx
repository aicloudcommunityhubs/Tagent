"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tagent transformed our incident response. What used to take hours now takes minutes. The AI-powered root cause analysis is incredibly accurate.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "The Night Guardian mode alone is worth it. Our team actually gets sleep now. Tagent handles the routine incidents while we focus on building.",
    author: "Marcus Rodriguez",
    role: "Platform Lead",
    company: "CloudScale",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "Finally, an AI tool that understands Kubernetes deeply. The knowledge graph feature has become our go-to for understanding system dependencies.",
    author: "Emily Watson",
    role: "SRE Team Lead",
    company: "DataPipe",
    avatar: "EW",
    rating: 5,
  },
  {
    quote: "The security model gave our compliance team peace of mind. Read-only by default with full audit trails - exactly what enterprises need.",
    author: "David Kim",
    role: "CTO",
    company: "FinSecure",
    avatar: "DK",
    rating: 5,
  },
  {
    quote: "Tagent's blast radius simulation saved us from a major outage. It caught a cascading failure pattern we hadn't even considered.",
    author: "Alex Thompson",
    role: "Principal Engineer",
    company: "StreamingCo",
    avatar: "AT",
    rating: 5,
  },
  {
    quote: "The automated postmortems are game-changing. They capture all the context we need without the manual documentation burden.",
    author: "Priya Sharma",
    role: "DevOps Manager",
    company: "AppForge",
    avatar: "PS",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.2)] text-sm text-[#a855f7] font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by <span className="gradient-text">Engineering Teams</span>
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              See what engineering leaders are saying about Tagent&apos;s impact on their operations.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 bg-[#111119] rounded-xl border border-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#6366f1] opacity-20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-[#71717a]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
