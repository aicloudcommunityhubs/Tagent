"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiry",
    description: "Questions about Tagent, partnerships, or anything else.",
    email: "hello@tagent.io",
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "See Tagent in action with a personalized walkthrough.",
    email: "demo@tagent.io",
  },
  {
    icon: MessageSquare,
    title: "Sales",
    description: "Discuss enterprise plans and custom solutions.",
    email: "sales@tagent.io",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="badge mb-4">Contact</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
              Have questions about Tagent? Want to see a demo? We're here to
              help. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section border-b border-[#27272a]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option) => (
              <div key={option.title} className="card card-hover p-6 group">
                <div className="feature-icon mb-4">
                  <option.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] mb-4">
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.email}`}
                  className="text-sm text-[#10b981] hover:underline"
                >
                  {option.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Send a Message
            </h2>

            {submitted ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#10b981]/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-[#10b981]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-[#a1a1aa]">
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell us about your Kubernetes environment, what challenges you're facing, or any questions you have..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#71717a]">
                    We'll respond within 24 hours.
                  </p>
                  <Button
                    type="submit"
                    className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-11 px-8"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="section bg-[#0c0c0e] border-t border-[#27272a]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the Early Access Program
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              Be among the first to experience autonomous Kubernetes operations.
              Early access includes priority support and direct access to the
              founding team.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for signing up! We'll be in touch soon.");
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-[#10b981] hover:bg-[#059669] text-[#09090b] font-medium h-11 px-6 whitespace-nowrap">
                Request Access
              </Button>
            </form>
            <p className="text-sm text-[#71717a] mt-4">
              No spam, ever. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
