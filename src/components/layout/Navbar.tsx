"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Architecture", href: "/architecture" },
  { name: "Security", href: "/security" },
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#030305]/80 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px"
            >
              <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                <Image
                  src="/tagent-logo.png"
                  alt="Tagent"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </motion.div>
            <span className="text-xl font-semibold text-white">Tagent</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-[#71717a] hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-[#818cf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com/tagent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#52525b] hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link href="/docs">
              <Button variant="ghost" className="h-10 px-4 text-[#71717a] hover:text-white hover:bg-white/5">
                Docs
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="h-10 px-5 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] hover:from-[#a78bfa] hover:to-[#818cf8] text-white border-0 glow-sm transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#71717a] hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#030305]/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-[#71717a] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/docs" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full h-12 justify-center btn-glass border-0">
                    Documentation
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-12 justify-center bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white border-0">
                    Get Started
                  </Button>
                </Link>
              </div>
              {/* Social */}
              <div className="pt-4 flex items-center justify-center gap-6">
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
                    className="text-[#52525b] hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
