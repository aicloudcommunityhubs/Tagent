"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Docs", href: "/docs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#fafafa]">Tagent_</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[#666666] hover:text-[#fafafa] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <span className="text-sm text-[#666666] hover:text-[#fafafa] transition-colors">
                Sign in
              </span>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium text-sm h-8 px-4 rounded-none">
                Get started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#666666] hover:text-[#fafafa] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a]">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#666666] hover:text-[#fafafa] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#1a1a1a]">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
