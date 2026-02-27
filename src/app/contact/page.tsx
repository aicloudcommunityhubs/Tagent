"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Calendar,
  Rocket,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Loader2,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactOptions = [
  { icon: Mail, title: "General Inquiries", description: "Questions about Tagent? We're here to help.", email: "hello@tagent.io", action: "Email Us" },
  { icon: Rocket, title: "Early Access", description: "Get on the list for early access to Tagent.", email: "early-access@tagent.io", action: "Request Access" },
  { icon: Calendar, title: "Founder Call", description: "Schedule a call with our founding team.", email: "founders@tagent.io", action: "Book a Call" },
  { icon: MessageSquare, title: "Partnerships", description: "Interested in partnering with Tagent?", email: "partners@tagent.io", action: "Partner With Us" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#030305]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <MessageSquare className="w-4 h-4 text-[#22d3ee]" />
              <span className="text-sm text-[#a1a1aa]">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl text-[#71717a] max-w-3xl mx-auto">
              Have questions about Tagent? Want to see a demo? We'd love to hear from you. 
              Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-[#030305] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={`mailto:${option.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl glass-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px mb-4">
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {option.title}
                  </h3>
                  <p className="text-[#71717a] text-sm mb-3">{option.description}</p>
                  <span className="text-[#818cf8] text-sm flex items-center gap-1">
                    {option.action}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-24 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-[#71717a] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-2xl glass-card border-[#22c55e]/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22c55e] to-[#818cf8] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#71717a]">Thanks for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Your Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Company</label>
                    <Input
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-12 bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your Kubernetes challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-12 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-sm rounded-xl"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-6">
                {/* Quick Info */}
                <div className="p-6 rounded-2xl glass-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#818cf8]" />
                      </div>
                      <div>
                        <div className="text-white">Response Time</div>
                        <div className="text-sm text-[#71717a]">Within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#818cf8]" />
                      </div>
                      <div>
                        <div className="text-white">Location</div>
                        <div className="text-sm text-[#71717a]">Remote-first, Global</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo */}
                <div className="p-6 rounded-2xl border-gradient">
                  <h3 className="text-lg font-semibold text-white mb-2">Request a Demo</h3>
                  <p className="text-[#71717a] text-sm mb-4">
                    See Tagent in action with a personalized demo from our team.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0">
                    Schedule Demo
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Social */}
                <div className="p-6 rounded-2xl glass-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Github, href: "https://github.com/tagent" },
                      { icon: Twitter, href: "https://twitter.com/tagent" },
                      { icon: Linkedin, href: "https://linkedin.com/company/tagent" },
                    ].map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[#71717a] hover:text-white hover:border-[#818cf8]/30 transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-16 bg-[#030305] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-12 h-12 text-[#a78bfa] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join the Early Access Program
          </h2>
          <p className="text-[#71717a] mb-6 max-w-2xl mx-auto">
            Be among the first to experience Tagent's AI-powered Kubernetes operations. 
            Early access includes direct support from our founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-14 px-8 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0 glow-md">
              Request Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <span className="text-sm text-[#71717a]">No commitment required</span>
          </div>
        </div>
      </section>
    </div>
  );
}
