"use client";

import { motion } from "framer-motion";
import { Moon, Bell, CheckCircle, Shield, Sparkles, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NightGuardian3D() {
  const features = [
    { icon: Bell, text: "Smart alert filtering reduces noise by 90%" },
    { icon: CheckCircle, text: "Auto-resolution for known incident patterns" },
    { icon: Shield, text: "Safety guardrails prevent runaway actions" },
    { icon: Sparkles, text: "Morning reports with full context delivered" },
  ];

  const activities = [
    { time: "3:42 AM", action: "Auto-scaled payment-api", status: "resolved" },
    { time: "2:15 AM", action: "Restarted stale cron-job", status: "resolved" },
    { time: "1:30 AM", action: "Cleared stuck pods", status: "resolved" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Stars effect */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-transparent to-[#030305]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#a78bfa]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#a78bfa]/20 mb-6">
              <Moon className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-sm text-[#a78bfa]">Night Guardian Mode</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Sleep Peacefully.
              <br />
              <span className="gradient-text">Tagent Watches.</span>
            </h2>

            <p className="text-lg text-[#71717a] mb-10 leading-relaxed max-w-lg">
              Enable Night Guardian Mode and let Tagent autonomously handle routine incidents 
              while your team rests. Wake up to resolved issues and comprehensive reports, 
              not 3 AM pages.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a78bfa] to-[#818cf8] p-px">
                    <div className="w-full h-full rounded-lg bg-[#0a0a0f] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-[#a1a1aa]">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/product#night-guardian">
              <Button className="h-12 px-6 bg-gradient-to-r from-[#a78bfa] to-[#818cf8] hover:from-[#818cf8] hover:to-[#a78bfa] text-white border-0 glow-sm transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Learn More About Night Guardian
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Moon Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#818cf8] flex items-center justify-center glow-md z-10"
            >
              <Moon className="w-8 h-8 text-white" />
            </motion.div>

            <div className="relative rounded-2xl border-gradient overflow-hidden">
              <div className="relative p-8 bg-[#0a0a0f]/80 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a78bfa] to-[#818cf8] flex items-center justify-center">
                      <Moon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Night Guardian</h4>
                      <p className="text-xs text-[#52525b]">Active since 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#22c55e]"
                    />
                    <span className="text-sm text-[#22c55e]">Active</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  {[
                    { value: "12", label: "Incidents Handled" },
                    { value: "0", label: "Wake-ups Required" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-[#52525b]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Activity Log */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#71717a]">Recent Activity</span>
                    <Eye className="w-4 h-4 text-[#52525b]" />
                  </div>
                  <div className="space-y-2">
                    {activities.map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-[#52525b] font-mono">{activity.time}</span>
                          <span className="text-sm text-white">{activity.action}</span>
                        </div>
                        <span className="text-xs text-[#22c55e] px-2 py-0.5 rounded-full bg-[#22c55e]/10">
                          {activity.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
