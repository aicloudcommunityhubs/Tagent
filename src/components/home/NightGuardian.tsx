"use client";

import { motion } from "framer-motion";
import { Moon, Shield, Bell, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NightGuardian() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6366f1]/5 to-transparent" />
      
      {/* Stars effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.2)] text-sm text-[#a855f7] font-medium mb-6">
              <Moon className="w-4 h-4" />
              Night Guardian Mode
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sleep Peacefully.{" "}
              <span className="gradient-text">Tagent Watches.</span>
            </h2>
            
            <p className="text-lg text-[#71717a] mb-8 leading-relaxed">
              Enable Night Guardian Mode and let Tagent autonomously handle routine incidents 
              while your team rests. Wake up to resolved issues and comprehensive reports, 
              not 3 AM pages.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Bell, text: "Smart alert filtering reduces noise by 90%" },
                { icon: CheckCircle, text: "Auto-resolution for known incident patterns" },
                { icon: Shield, text: "Safety guardrails prevent runaway actions" },
                { icon: Sparkles, text: "Morning reports with full context" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#a1a1aa]">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/product#night-guardian">
              <Button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0 glow-primary">
                Learn More About Night Guardian
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-[#111119] rounded-2xl border border-[rgba(99,102,241,0.2)] p-6 lg:p-8">
              {/* Moon icon */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center glow-purple">
                <Moon className="w-6 h-6 text-white" />
              </div>

              {/* Mock dashboard */}
              <div className="space-y-4">
                {/* Status bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(99,102,241,0.1)]">
                  <span className="text-sm text-[#71717a]">Night Guardian Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-sm text-[#22c55e]">Active</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "12", label: "Incidents Handled" },
                    { value: "0", label: "Wake-ups Required" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-[#71717a]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Activity log */}
                <div className="space-y-2 pt-4 border-t border-[rgba(99,102,241,0.1)]">
                  <span className="text-sm text-[#71717a]">Recent Activity</span>
                  {[
                    { time: "3:42 AM", action: "Auto-scaled payment-api", status: "resolved" },
                    { time: "2:15 AM", action: "Restarted stale cron-job", status: "resolved" },
                    { time: "1:30 AM", action: "Cleared stuck pods", status: "resolved" },
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between py-2 px-3 bg-[#16161e] rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#71717a]">{activity.time}</span>
                        <span className="text-sm text-white">{activity.action}</span>
                      </div>
                      <span className="text-xs text-[#22c55e]">{activity.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
