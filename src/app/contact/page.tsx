"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const emails = [
  { label: "General", address: "hello@tagent.io" },
  { label: "Early access", address: "early@tagent.io" },
  { label: "Demo", address: "demo@tagent.io" },
  { label: "Partnerships", address: "partners@tagent.io" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("done");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            Say hello.
          </h1>
          <p className="text-lg text-[#666666]">
            Questions? Want a demo? Just want to chat about Kubernetes ops? 
            We read everything and respond within a day or two.
          </p>
        </div>
      </section>

      {/* Email addresses */}
      <section className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#666666] mb-4">Or email us directly:</p>
          <div className="flex flex-wrap gap-4">
            {emails.map((e) => (
              <a 
                key={e.label}
                href={`mailto:${e.address}`}
                className="text-sm border border-[#1a1a1a] px-3 py-2 text-[#666666] hover:text-[#fafafa] hover:border-[#22c55e]"
              >
                {e.label}: <span className="text-[#fafafa]">{e.address}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-[#fafafa] mb-6">
            Send a message
          </h2>

          {status === "done" ? (
            <div className="border border-[#22c55e] p-6">
              <p className="text-[#fafafa] font-medium mb-1">Got it.</p>
              <p className="text-[#666666] text-sm">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#666666] mb-2">Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-10 bg-[#0a0a0a] border-[#1a1a1a] text-[#fafafa] rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#666666] mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-10 bg-[#0a0a0a] border-[#1a1a1a] text-[#fafafa] rounded-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#666666] mb-2">Company</label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="h-10 bg-[#0a0a0a] border-[#1a1a1a] text-[#fafafa] rounded-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] mb-2">Message</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-[#0a0a0a] border-[#1a1a1a] text-[#fafafa] rounded-none resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-medium rounded-none"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Info */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">Response time</h3>
              <p className="text-[#666666] text-sm">Usually within 24 hours. Sometimes faster.</p>
            </div>
            <div>
              <h3 className="text-[#fafafa] font-medium mb-2">Location</h3>
              <p className="text-[#666666] text-sm">Remote-first. Team members in US, EU, and APAC.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
