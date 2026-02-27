"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Network,
  GitBranch,
  Shield,
  Zap,
  Target,
  FileSearch,
  Clock,
  ArrowRight,
  Activity,
  Cpu,
  Database,
} from "lucide-react";

interface FeatureCard3DProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

function FeatureCard3D({ icon: Icon, title, description, gradient, index }: FeatureCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group perspective-1000"
    >
      <div className="relative p-8 rounded-2xl glass-card-hover h-full overflow-hidden">
        {/* Gradient Glow */}
        <div
          className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient}`}
          style={{ filter: "blur(20px)" }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className={`relative w-14 h-14 rounded-xl mb-6 ${gradient} p-px`}>
            <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            {/* Glow */}
            <div className={`absolute inset-0 rounded-xl ${gradient} opacity-50 blur-xl -z-10`} />
          </div>

          {/* Text */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#71717a] leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-5 h-5 text-[#818cf8]" />
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 animate-shimmer" />
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: Brain,
    title: "AI Root Cause Analysis",
    description: "Instantly identify root causes across complex microservices with AI-powered correlation of metrics, logs, and traces.",
    gradient: "bg-gradient-to-br from-[#818cf8] to-[#a78bfa]",
  },
  {
    icon: Database,
    title: "Incident Memory Engine",
    description: "Every incident teaches Tagent something new. The learning engine captures patterns and improves future responses.",
    gradient: "bg-gradient-to-br from-[#22d3ee] to-[#818cf8]",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description: "Build a living map of system relationships. Visualize dependencies and understand impact chains automatically.",
    gradient: "bg-gradient-to-br from-[#a78bfa] to-[#818cf8]",
  },
  {
    icon: Shield,
    title: "Controlled Remediation",
    description: "Safely automate fixes with full audit trails and rollback capabilities. Human-in-the-loop by design.",
    gradient: "bg-gradient-to-br from-[#818cf8] to-[#22d3ee]",
  },
  {
    icon: Target,
    title: "Blast Radius Simulation",
    description: "Predict the impact of changes before deployment. Understand cascading failure patterns proactively.",
    gradient: "bg-gradient-to-br from-[#22d3ee] to-[#a78bfa]",
  },
  {
    icon: Zap,
    title: "Risk Scoring Engine",
    description: "Real-time risk assessment for your entire cluster. Prioritize what matters most with intelligent scoring.",
    gradient: "bg-gradient-to-br from-[#a78bfa] to-[#22d3ee]",
  },
];

export function Features3D() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#050508] to-[#030305]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a78bfa]/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Cpu className="w-4 h-4 text-[#818cf8]" />
            <span className="text-sm text-[#a1a1aa]">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Built for <span className="gradient-text">Production</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Every feature is designed with production safety in mind. Enterprise-grade 
            capabilities with startup agility.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={feature.title} href="/product" className="block">
              <FeatureCard3D {...feature} index={index} />
            </Link>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Activity, text: "Preventive CI/CD Scanning" },
              { icon: FileSearch, text: "Automated Postmortems" },
              { icon: Clock, text: "Night Guardian Mode" },
              { icon: GitBranch, text: "Smart Escalation" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-[#a1a1aa] hover:text-white hover:border-[#818cf8]/30 transition-colors cursor-pointer"
              >
                <item.icon className="w-4 h-4 text-[#818cf8]" />
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Explore More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-[#818cf8] hover:text-white transition-colors group"
          >
            <span>Explore all features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
