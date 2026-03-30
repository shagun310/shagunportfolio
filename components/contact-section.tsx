"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Contact Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it. Send us a message and let&apos;s discuss how we can help your business grow online.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-border bg-background focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-border bg-background focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px] border-border bg-background focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-pretty text-muted-foreground">
                We&apos;re always excited to work on new projects. Whether you need a simple website or a complex web application, we&apos;re here to help bring your vision to life.
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-8 flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Email</span>
                </div>
                <Link
                  href="mailto:elvoraagency.in@gmailcom"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  hello@elvoraagency.com
                </Link>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <MessageSquare className="h-5 w-5" />
                  <span className="font-medium">Response Time</span>
                </div>
                <p className="text-foreground">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
