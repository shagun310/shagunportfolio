"use client"

import Image from "next/image"
import { Users, Target, Rocket } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our priority.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We measure success by your growth.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Scalable solutions that grow with you.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Meet Elvora Agency
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team working together"
                fill
                className="object-cover"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border border-primary/30" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We are a passionate team focused on building modern, scalable, and visually stunning websites for businesses and individuals. Our goal is to help you stand out online and grow faster.
            </p>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              With years of experience in web development and design, we understand what it takes to create digital experiences that not only look great but also deliver real results for your business.
            </p>

            {/* Values */}
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-xl border border-border bg-card/50 p-4 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                >
                  <value.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-1 font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
