"use client"

import { Globe, ShoppingCart, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    description: "Professional, responsive websites tailored to your brand. We create custom solutions that represent your business perfectly online.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Sell your products with fast and secure online stores. We build conversion-optimized storefronts that drive sales.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern and user-focused designs that convert visitors into customers. Beautiful interfaces that users love.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Improve speed, SEO, and performance for better results. We optimize every aspect for maximum impact.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need to Succeed Online
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            We offer comprehensive web development services to help your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
