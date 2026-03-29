"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Bloom Boutique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Great service and amazing design. My business grew significantly after launching the website! The team was professional and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, TechStart",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Elvora Agency transformed our online presence. The website is fast, beautiful, and our conversion rates have doubled. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Owner, Fresh Bites Cafe",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Working with this team was a pleasure. They understood our vision perfectly and created exactly what we needed. Our customers love the new website!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-pretty text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
