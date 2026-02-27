"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Node type definition
interface NodeData {
  position: [number, number, number];
  scale: number;
  speed: number;
}

// Neural Network Nodes with connections
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  // Create nodes in a more structured pattern
  const nodes = useMemo<NodeData[]>(() => {
    const temp: NodeData[] = [];
    // Create hexagonal-ish pattern
    for (let ring = 0; ring < 4; ring++) {
      const count = ring === 0 ? 1 : ring * 6;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = ring * 2.5;
        temp.push({
          position: [
            Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5,
            Math.sin(angle) * radius + (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 3 - 2
          ],
          scale: 0.08 + Math.random() * 0.06,
          speed: 0.5 + Math.random() * 1,
        });
      }
    }
    return temp;
  }, []);

  // Create connections between nearby nodes
  const connections = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        
        if (dist < 3.5) {
          positions.push(
            nodes[i].position[0], nodes[i].position[1], nodes[i].position[2],
            nodes[j].position[0], nodes[j].position[1], nodes[j].position[2]
          );
          const opacity = 1 - dist / 3.5;
          colors.push(0.5, 0.56, 0.97, opacity * 0.3);
          colors.push(0.5, 0.56, 0.97, opacity * 0.3);
        }
      }
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, [nodes]);

  // Animate
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections.positions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.2}
          linewidth={1}
        />
      </lineSegments>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={0} floatIntensity={0.3}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.scale, 16, 16]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#818cf8"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Ambient floating orbs
function AmbientOrbs() {
  const orbs = useMemo(() => [
    { position: [-6, 2, -8] as [number, number, number], scale: 2.5, color: "#818cf8", speed: 0.3 },
    { position: [5, -3, -10] as [number, number, number], scale: 3, color: "#a78bfa", speed: 0.25 },
    { position: [-4, -4, -12] as [number, number, number], scale: 2, color: "#22d3ee", speed: 0.35 },
    { position: [7, 4, -15] as [number, number, number], scale: 4, color: "#818cf8", speed: 0.2 },
  ], []);

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={0} floatIntensity={1}>
          <mesh position={orb.position}>
            <sphereGeometry args={[orb.scale, 32, 32]} />
            <MeshDistortMaterial
              color={orb.color}
              transparent
              opacity={0.15}
              distort={0.3}
              speed={2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Subtle particle dust
function ParticleDust() {
  const points = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < 100; i++) {
      temp.push(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 10
      );
    }
    return new Float32Array(temp);
  }, []);

  const sizes = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < 100; i++) {
      temp.push(Math.random() * 2 + 0.5);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#818cf8"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 5]} intensity={0.8} color="#818cf8" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#a78bfa" />
      
      {/* Components */}
      <NeuralNetwork />
      <AmbientOrbs />
      <ParticleDust />
    </>
  );
}

// Animated gradient background (CSS fallback/overlay)
function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#030305]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#818cf8]/20 to-[#a78bfa]/10 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#22d3ee]/15 to-[#818cf8]/10 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#a78bfa]/10 via-[#818cf8]/10 to-[#22d3ee]/10 blur-[120px]"
      />
    </div>
  );
}

export function Hero3D() {
  // Check WebGL support on mount
  const isWebGLSupported = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      return !!gl;
    } catch {
      return false;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* CSS Gradient Background (always visible) */}
      <GradientBackground />
      
      {/* 3D Canvas (if WebGL supported) */}
      {isWebGLSupported && (
        <div className="absolute inset-0 z-[1]">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
          >
            <Scene />
          </Canvas>
        </div>
      )}

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030305_70%)] z-[2] pointer-events-none" />
      
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030305] to-transparent z-[3] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-10"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            </div>
            <span className="text-sm text-[#a1a1aa] font-medium tracking-wide">AI-Native SRE Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] mb-8 leading-[1.05]">
              <span className="text-white">Autonomous AI</span>
              <br />
              <span className="bg-gradient-to-r from-[#818cf8] via-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                for Kubernetes
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#71717a] max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            The AI-native SRE layer that monitors, explains, escalates, and optionally 
            remediates production incidents — while learning from every failure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="relative h-14 px-8 text-base font-medium bg-gradient-to-r from-[#818cf8] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#818cf8] text-white border-0 shadow-[0_0_30px_rgba(129,140,248,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(129,140,248,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Request Early Access
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-medium bg-white/[0.03] border-white/[0.1] text-[#a1a1aa] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              >
                Book Founder Call
              </Button>
            </Link>
          </motion.div>

          {/* Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Border gradient */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/[0.15] via-white/[0.05] to-transparent rounded-2xl" />
              
              <div className="relative aspect-video bg-[#050508] rounded-2xl flex items-center justify-center border border-white/[0.05]">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#818cf8]/5 to-transparent rounded-2xl" />
                
                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm group-hover:border-[#818cf8]/30 group-hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#818cf8]/20 to-[#a78bfa]/20 group-hover:from-[#818cf8]/30 group-hover:to-[#a78bfa]/30 transition-all duration-300" />
                  <Play className="w-8 h-8 text-white ml-1 relative z-10" fill="white" />
                </motion.button>

                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-[#52525b]">
                  <span>2-minute product demo</span>
                  <span className="flex items-center gap-1">
                    Watch how it works
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Logos/Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[#3f3f46]"
          >
            {["SOC 2 Ready", "Kubernetes Native", "Production Tested", "Enterprise Grade"].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#818cf8]/50" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
