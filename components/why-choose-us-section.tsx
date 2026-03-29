"use client"

import { Clock, Palette, Smartphone, Search, DollarSign } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Stunning, contemporary designs that stand out from the crowd.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Websites that look perfect on every device and screen size.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description: "Built-in SEO best practices to help you rank higher.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "High-quality websites at competitive, transparent prices.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            What Sets Us Apart
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
