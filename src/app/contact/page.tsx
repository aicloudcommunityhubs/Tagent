"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Loader2, 
  Mail, 
  Rocket, 
  Calendar, 
  MessageSquare,
  Clock,
  MapPin,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactOptions = [
  { 
    icon: Mail, 
    title: "General inquiries", 
    email: "hello@tagent.io",
    description: "Questions about Tagent? We're here to help."
  },
  { 
    icon: Rocket, 
    title: "Early access", 
    email: "early-access@tagent.io",
    description: "Get on the list for early access."
  },
  { 
    icon: Calendar, 
    title: "Schedule a demo", 
    email: "demo@tagent.io",
    description: "See Tagent in action."
  },
  { 
    icon: MessageSquare, 
    title: "Partnerships", 
    email: "partners@tagent.io",
    description: "Interested in partnering?"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's talk.
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Have questions about Tagent? Want to see a demo? We'd love to hear 
              from you. Our team typically responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={`mailto:${option.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-colors group"
              >
                <option.icon className="w-5 h-5 text-amber-500 mb-3" />
                <h3 className="text-white font-medium mb-1 group-hover:text-amber-500 transition-colors">
                  {option.title}
                </h3>
                <p className="text-neutral-500 text-sm">
                  {option.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3"
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Send us a message
              </h2>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-lg bg-neutral-900/50 border border-amber-500/20 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message sent
                  </h3>
                  <p className="text-neutral-400">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-11 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-11 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-11 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your Kubernetes challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-amber-500 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto h-11 bg-amber-500 hover:bg-amber-400 text-black font-medium"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-lg bg-neutral-900/50 border border-white/5">
                <h3 className="text-white font-medium mb-4">Quick info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-white text-sm">Response time</div>
                      <div className="text-neutral-500 text-sm">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-white text-sm">Location</div>
                      <div className="text-neutral-500 text-sm">Remote-first, global</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-neutral-900/50 border border-white/5">
                <h3 className="text-white font-medium mb-4">Connect</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, href: "https://github.com/tagent" },
                    { icon: Twitter, href: "https://twitter.com/tagent" },
                    { icon: Linkedin, href: "https://linkedin.com/company/tagent" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Join the early access program
            </h2>
            <p className="text-neutral-400 mb-6">
              Be among the first to experience Tagent. Early access includes 
              direct support from our founding team.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-400 text-black font-medium">
              Request early access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
