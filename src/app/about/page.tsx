import Link from "next/link";
import { Button } from "@/components/ui/button";

const timeline = [
  { 
    year: "2023", 
    title: "Started", 
    description: "We'd had enough. Three of us, all former SREs, decided to build what we wished existed." 
  },
  { 
    year: "2024", 
    title: "Alpha", 
    description: "Released to a few design partners. Learned a lot from real production incidents. Some things worked, some didn't." 
  },
  { 
    year: "2024", 
    title: "Night Guardian", 
    description: "Shipped the feature people actually wanted—sleeping through on-call rotations." 
  },
  { 
    year: "2025", 
    title: "Now", 
    description: "Opening up to more teams." 
  },
];

const values = [
  "Production first. Every feature is tested in real environments before it ships.",
  "Explainable AI. No black boxes. You should always know why Tagent made a decision.",
  "Human control. AI suggests, humans decide. Escalate to automation only when you're ready.",
  "Sleep is important. We're not here to make engineers work more. We're here to help them work less.",
];

const jobs = [
  { title: "Senior Software Engineer", location: "Remote" },
  { title: "ML Engineer", location: "Remote" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            We've been on-call at 3 AM.
          </h1>
          <p className="text-lg text-[#666666] max-w-xl">
            That's why we built Tagent. Not in a conference room. 
            Not from a slide deck. From actual incidents that ruined actual weekends.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-xl font-bold text-[#fafafa]">The problem</h2>
            <div className="space-y-4 text-[#666666]">
              <p>
                Modern Kubernetes environments are a lot. Teams drown in alerts. 
                Spend hours on root cause analysis. Burn out from on-call rotations.
              </p>
              <p>
                We've been there. The 3 AM pages that could've waited. The cascading 
                failures that took days to understand. The dashboards that showed 
                graphs but not answers.
              </p>
              <p>
                Existing tools were built for a different era. They observe and alert 
                but don't understand. They generate noise instead of signal.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 mt-16 pt-16 border-t border-[#1a1a1a]">
            <h2 className="text-xl font-bold text-[#fafafa]">Our approach</h2>
            <div className="space-y-4 text-[#666666]">
              <p>
                Tagent is AI-native, but not in the buzzword way. It actually understands 
                your infrastructure—connects the dots between metrics, logs, traces, and 
                resource states.
              </p>
              <p>
                We're not building a black box. Every decision Tagent makes is explainable. 
                Every action is auditable. You stay in control while AI handles the routine.
              </p>
              <p className="text-[#fafafa]">
                The goal isn't to replace SREs. It's to give them time for interesting 
                problems instead of repetitive ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-8">
            What we believe
          </h2>
          <ul className="space-y-4">
            {values.map((value, index) => (
              <li key={index} className="flex items-start gap-4 text-[#666666]">
                <span className="text-[#22c55e] font-mono">→</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-8">
            So far
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="w-16 flex-shrink-0">
                  <span className="text-[#22c55e] font-mono text-sm">{item.year}</span>
                </div>
                <div className={index < timeline.length - 1 ? 'pb-6 border-b border-[#1a1a1a]' : ''}>
                  <h3 className="text-[#fafafa] font-medium mb-1">{item.title}</h3>
                  <p className="text-[#666666] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-2">
            Join us
          </h2>
          <p className="text-[#666666] mb-8">
            Remote-first. Building something that actually helps people.
          </p>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.title} className="border border-[#1a1a1a] p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-[#fafafa] font-medium">{job.title}</h3>
                  <p className="text-[#666666] text-sm">{job.location}</p>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#1a1a1a] text-[#fafafa] hover:bg-[#141414] rounded-none">
                    Apply
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[#666666] text-sm mt-6">
            Don't see a fit? <Link href="/contact" className="text-[#22c55e] hover:underline">Reach out anyway</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#fafafa] mb-4">
            Questions?
          </h2>
          <p className="text-[#666666] mb-6">
            We're happy to talk about what we're building, how we're building it, 
            or whether it might work for your team.
          </p>
          <Link href="/contact">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
