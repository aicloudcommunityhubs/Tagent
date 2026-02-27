"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA3D() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818cf8]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a78bfa]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#22d3ee]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border-gradient overflow-hidden"
        >
          {/* Inner content */}
          <div className="relative p-12 md:p-16 text-center bg-[#0a0a0f]/80 backdrop-blur-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-sm text-[#a1a1aa]">Join 500+ teams on the waitlist</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Transform Your{" "}
              <span className="gradient-text">Kubernetes Operations?</span>
            </h2>

            <p className="text-lg text-[#71717a] max-w-2xl mx-auto mb-10">
              Join the waitlist for early access and be among the first to experience 
              autonomous incident management.
            </p>

            {/* Form */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-center gap-4 p-6 rounded-2xl glass-card border-[#22c55e]/20 max-w-lg mx-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22c55e] to-[#818cf8] flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">You're on the list!</p>
                    <p className="text-sm text-[#71717a]">We'll notify you when early access is available.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#52525b]" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 pl-12 pr-4 bg-white/[0.03] border-white/10 text-white placeholder:text-[#52525b] focus:border-[#818cf8] focus:bg-white/[0.05] rounded-xl text-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-14 px-8 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#818cf8] text-white border-0 glow-sm rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <span className="flex items-center gap-2">
                        Request Access
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-6 text-sm text-[#52525b]">
              No spam, ever. We respect your inbox.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
