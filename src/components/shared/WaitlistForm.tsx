"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WaitlistFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function WaitlistForm({ variant = "default", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setEmail("");
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-[#16161e] border-[rgba(99,102,241,0.3)] text-white placeholder:text-[#71717a] focus:border-[#6366f1]"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-3 p-4 bg-[#111119] rounded-lg border border-[rgba(34,197,94,0.3)]"
          >
            <div className="p-2 rounded-full bg-[#111119]">
              <CheckCircle className="w-6 h-6 text-[#22c55e]" />
            </div>
            <div>
              <p className="font-medium text-white">You&apos;re on the list!</p>
              <p className="text-sm text-[#71717a]">We&apos;ll notify you when early access is available.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717a]" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 pl-12 pr-4 bg-[#16161e] border-[rgba(99,102,241,0.3)] text-white placeholder:text-[#71717a] focus:border-[#6366f1] text-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-14 px-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0 text-lg font-medium glow-primary"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Request Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      <p className="mt-3 text-sm text-[#71717a]">
        Join 500+ engineers on the waitlist. No spam, ever.
      </p>
    </div>
  );
}
