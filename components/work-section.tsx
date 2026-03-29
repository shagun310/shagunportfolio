"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Restaurant Website",
    description: "A modern, elegant website for a fine dining restaurant with online reservations and menu showcase.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website for a freelance photographer with gallery and contact features.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    tech: ["React", "Framer Motion", "Cloudinary"],
    demo: "#",
  },
  {
    title: "E-commerce Store",
    description: "A full-featured online store with product catalog, cart, checkout, and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    demo: "#",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Take a look at some of the websites we&apos;ve built for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-pretty text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Preview
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
