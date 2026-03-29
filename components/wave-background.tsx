"use client"

import { useEffect, useRef } from "react"

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      opacity: number,
      lineWidth: number
    ) => {
      ctx.beginPath()
      ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`
      ctx.lineWidth = lineWidth

      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.7) * (amplitude * 0.5)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple wave layers
      drawWave(canvas.height * 0.3, 50, 0.003, 0.8, 0.15, 2)
      drawWave(canvas.height * 0.4, 60, 0.002, 0.6, 0.1, 1.5)
      drawWave(canvas.height * 0.5, 40, 0.004, 1, 0.2, 2.5)
      drawWave(canvas.height * 0.6, 55, 0.0025, 0.7, 0.12, 1.8)
      drawWave(canvas.height * 0.7, 45, 0.0035, 0.9, 0.08, 1.2)

      time += 0.02
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "transparent" }}
    />
  )
}
