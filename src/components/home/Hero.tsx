"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Bot, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBanner } from "@/components/shared/TrustBanner";

// Animated particles for background
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Create particles
    const colors = ["#6366f1", "#a855f7", "#22d3ee", "#818cf8"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      // Draw and update particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
}

// Kubernetes node visualization
function KubeVisualization() {
  const nodes = [
    { x: 50, y: 50, label: "Pod", icon: Bot },
    { x: 150, y: 30, label: "Service", icon: Zap },
    { x: 100, y: 120, label: "Node", icon: Brain },
    { x: 200, y: 100, label: "Deploy", icon: Sparkles },
  ];

  return (
    <div className="relative w-64 h-40 hidden lg:block">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 150">
        {/* Connection lines */}
        <line x1="50" y1="50" x2="150" y2="30" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="50" x2="100" y2="120" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="30" x2="200" y2="100" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="120" x2="200" y2="100" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="30" x2="100" y2="120" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          className="absolute flex flex-col items-center"
          style={{ left: node.x - 20, top: node.y - 20 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-1">
            <node.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs text-[#71717a]">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <ParticlesBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#22d3ee]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16161e] border border-[rgba(99,102,241,0.2)] mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#a855f7]" />
            <span className="text-sm text-[#a1a1aa]">AI-Native SRE Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Autonomous AI for</span>
            <br />
            <span className="gradient-text">Kubernetes Operations</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#71717a] max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Tagent is the AI-native SRE layer that automatically detects, diagnoses, and remediates 
            Kubernetes incidents. <span className="text-[#a1a1aa]">Reduce MTTR by 80%, eliminate alert fatigue, and ship with confidence.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#818cf8] hover:to-[#c084fc] text-white border-0 glow-primary h-14 px-8 text-lg">
                Request Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[rgba(99,102,241,0.3)] text-[#a1a1aa] hover:text-white hover:bg-[#16161e] h-14 px-8 text-lg">
                Book Founder Call
              </Button>
            </Link>
          </motion.div>

          {/* Trust Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TrustBanner />
          </motion.div>

          {/* Video Demo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[rgba(99,102,241,0.2)] bg-[#111119]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/10 to-transparent pointer-events-none" />
              
              {/* Video placeholder */}
              <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-[#0d0d14] to-[#111119]">
                <KubeVisualization />
                
                {/* Play button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] glow-primary"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.button>
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-sm text-[#71717a]">2-minute product demo</span>
                  <span className="text-sm text-[#71717a]">Watch how it works</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
