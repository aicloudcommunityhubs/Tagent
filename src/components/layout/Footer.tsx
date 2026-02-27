import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

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
    { name: "GitHub", href: "https://github.com/tagent-dev/tagent" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/about#careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tagent-dev/tagent", icon: Github },
  { name: "Twitter", href: "https://twitter.com/tagent_dev", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/tagent", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090b]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10b981] text-[#09090b] font-bold text-sm">
                T
              </div>
              <span className="text-lg font-semibold text-white">Tagent</span>
            </Link>
            <p className="text-sm text-[#a1a1aa] mb-4 max-w-xs">
              Autonomous AI-powered Kubernetes incident intelligence and remediation. 
              Open source. Production-ready.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717a]">
            © {new Date().getFullYear()} Tagent. Open source under Apache 2.0.
          </p>
          <div className="flex items-center gap-2">
            <span className="badge">Open Source</span>
            <span className="badge">SOC 2 Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
