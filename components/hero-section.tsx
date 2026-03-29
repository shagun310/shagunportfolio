"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-16"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We Build High-Performance Websites{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            That Grow Your Business
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Custom websites designed for speed, conversion, and real impact.
          Let us help you stand out online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-primary text-primary-foreground shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]"
          >
            <Link href="#contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border bg-transparent text-foreground hover:border-primary hover:bg-primary/10"
          >
            <Link href="#work">
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/50 pt-10 sm:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-primary sm:text-4xl">100+</div>
            <div className="text-sm text-muted-foreground">Websites Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary sm:text-4xl">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary sm:text-4xl">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary sm:text-4xl">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
    </section>
  )
}
