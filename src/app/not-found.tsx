"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030305] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[200px] md:text-[300px] font-bold text-white/5 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                  <Sparkles className="w-4 h-4 text-[#a78bfa]" />
                  <span className="text-sm text-[#a1a1aa]">Page Not Found</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Lost in <span className="gradient-text">Space</span>
                </h1>
                <p className="text-[#71717a] max-w-md mx-auto mb-8">
                  The page you're looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#818cf8] text-white border-0 glow-sm"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="h-14 px-8 btn-glass border-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
