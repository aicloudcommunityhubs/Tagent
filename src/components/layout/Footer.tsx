import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold text-[#fafafa]">
              Tagent_
            </Link>
            <p className="text-sm text-[#666666] mt-2">
              AI for Kubernetes ops. Sleep better.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-medium text-[#fafafa] mb-3">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-sm text-[#666666] hover:text-[#fafafa]">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-[#666666] hover:text-[#fafafa]">Pricing</Link></li>
              <li><Link href="/docs" className="text-sm text-[#666666] hover:text-[#fafafa]">Docs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-[#fafafa] mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[#666666] hover:text-[#fafafa]">About</Link></li>
              <li><Link href="/contact" className="text-sm text-[#666666] hover:text-[#fafafa]">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-[#fafafa] mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-[#666666] hover:text-[#fafafa]">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-[#666666] hover:text-[#fafafa]">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-[#666666]">
            © {new Date().getFullYear()} Tagent. Built by engineers, for engineers.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/tagent" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#fafafa]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/tagent" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#fafafa]">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
