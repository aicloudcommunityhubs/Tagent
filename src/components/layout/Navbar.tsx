"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Architecture", href: "/architecture" },
  { name: "Security", href: "/security" },
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a] bg-[#09090b]/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10b981] text-[#09090b] font-bold text-sm">
            T
          </div>
          <span className="text-lg font-semibold text-white">Tagent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="https://github.com/tagent-dev/tagent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link href="/contact">
            <Button className="bg-[#10b981] hover:bg-[#059669] text-[#09090b]">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden text-[#a1a1aa] hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#27272a] bg-[#09090b]">
          <div className="container py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                  pathname === item.href
                    ? "text-white bg-[#18181b]"
                    : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/tagent-dev/tagent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-[#10b981] hover:bg-[#059669] text-[#09090b]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
