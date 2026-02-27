"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Rocket } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/product" },
    { name: "Architecture", href: "/architecture" },
    { name: "Security", href: "/security" },
    { name: "Pricing", href: "/pricing" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs#api" },
    { name: "Blog", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/about#careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tagent", icon: Github },
  { name: "Twitter", href: "https://twitter.com/tagent", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/tagent", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030305] border-t border-white/5">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#a78bfa] p-px">
                  <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                    <Image
                      src="/tagent-logo.png"
                      alt="Tagent"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <span className="text-xl font-semibold text-white">Tagent</span>
              </Link>
              <p className="text-[#52525b] text-sm leading-relaxed mb-6 max-w-xs">
                Autonomous AI-powered Kubernetes incident intelligence and remediation platform. 
                Built for production. Designed for trust.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg glass-card text-[#52525b] hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: "Product", links: footerLinks.product },
              { title: "Resources", links: footerLinks.resources },
              { title: "Company", links: footerLinks.company },
              { title: "Legal", links: footerLinks.legal },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#52525b] hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525b]">
              © {new Date().getFullYear()} Tagent. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#52525b]">
              <Rocket className="w-4 h-4 text-[#818cf8]" />
              <span>Built for production. Designed for trust.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
