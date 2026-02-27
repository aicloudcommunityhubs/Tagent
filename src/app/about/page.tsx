import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Target,
  Users,
  Heart,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Production First",
    description:
      "Every feature is designed with production safety in mind. We build tools we'd want to use ourselves.",
  },
  {
    icon: Rocket,
    title: "Intelligent Automation",
    description:
      "AI should augment human capabilities, not replace them. We build systems that make engineers more effective.",
  },
  {
    icon: Heart,
    title: "Engineer Wellbeing",
    description:
      "Sustainable operations matter. We're here to eliminate burnout and give teams their nights and weekends back.",
  },
  {
    icon: Users,
    title: "Open by Default",
    description:
      "We believe in transparent, explainable systems. No black boxes, no magic—just understandable AI.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Founded",
    description:
      "Tagent was founded by engineers who lived through the pain of Kubernetes incident management.",
  },
  {
    year: "2024",
    title: "Alpha Launch",
    description:
      "Released our alpha to select design partners. Learned invaluable lessons from real production incidents.",
  },
  {
    year: "2024",
    title: "Night Guardian Mode",
    description:
      "Introduced our flagship feature that lets SREs sleep while Tagent handles routine incidents.",
  },
  {
    year: "2025",
    title: "Open Source Launch",
    description:
      "Released Tagent as open source. The future of autonomous operations is here.",
  },
];

const careers = [
  {
    title: "Senior Software Engineer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "ML Engineer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Developer Advocate",
    location: "Remote",
    type: "Full-time",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">About</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building the{" "}
              <span className="gradient-text">AI Nervous System</span> for
              Cloud Infrastructure
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              We're on a mission to make Kubernetes operations autonomous, safe,
              and sustainable. Because engineers deserve to build, not just put
              out fires.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-4">Our Mission</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Autonomous Operations for Kubernetes
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Modern Kubernetes environments generate overwhelming complexity.
                Teams are drowning in alerts, spending hours on root cause
                analysis, and burning out from on-call rotations. It doesn't have
                to be this way.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                Tagent is building the AI-native SRE layer that observes,
                understands, and acts on incidents—giving teams superhuman
                operational capabilities while maintaining full control and
                transparency.
              </p>
              <p className="text-[#fafafa] leading-relaxed">
                We believe the future of operations is{" "}
                <span className="text-[#10b981]">autonomous but not automatic</span>.
                AI handles the routine, humans handle the novel. Together,
                they're unstoppable.
              </p>
            </div>

            <div className="card p-8">
              <div className="text-5xl mb-4">🚀</div>
              <blockquote className="text-xl text-white font-medium mb-6">
                "We're not just building another monitoring tool. We're building
                the intelligent layer that makes all your existing tools work
                better together."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#10b981] flex items-center justify-center text-[#09090b] font-bold">
                  T
                </div>
                <div>
                  <div className="font-medium text-white">The Tagent Team</div>
                  <div className="text-sm text-[#71717a]">Founders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Our values guide every product decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card card-hover p-6 group">
                <div className="feature-icon mb-4">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              From pain point to product. Building the future of Kubernetes
              operations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year + item.title} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-[#10b981] flex items-center justify-center text-[#09090b] text-sm font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#27272a]" />
                  )}
                </div>
                <div className="card p-4 flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="section border-b border-[#27272a]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="badge mb-4">Careers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Team
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              We're looking for engineers who are passionate about making
              operations better. Remote-first, mission-driven, and building
              something that matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {careers.map((job) => (
              <div key={job.title} className="card card-hover p-6 group">
                <Briefcase className="w-5 h-5 text-[#10b981] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[#71717a] mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full h-10 border-[#27272a] text-white hover:bg-[#18181b]"
                  >
                    Apply
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#a1a1aa]">
              Don't see a role that fits?{" "}
              <Link href="/contact" className="text-[#10b981] hover:underline">
                Reach out anyway
              </Link>
              —we're always looking for exceptional people.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section bg-[#0c0c0e]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-4">Open Source</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built in the Open
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Tagent is open source under the Apache 2.0 license. Contribute,
              customize, and build on top of it. Join our community of engineers
              making operations better.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/tagent-dev/tagent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8">
                  Star on GitHub
                </Button>
              </a>
              <Link href="/docs">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-[#27272a] text-white hover:bg-[#18181b]"
                >
                  Read the Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Learn More?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              We'd love to share our vision for the future of Kubernetes
              operations.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-12 px-8"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
