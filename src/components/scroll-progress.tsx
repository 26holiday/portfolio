"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("hero")
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "contact"]

      // Find the current section in view
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section in view when its top is near the top of the viewport
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // More aggressive throttling for better performance
    let ticking = false
    let lastScrollTime = 0
    const throttleDelay = 16 // ~60fps

    const scrollListener = () => {
      const now = Date.now()
      
      if (!ticking && now - lastScrollTime > throttleDelay) {
        window.requestAnimationFrame(() => {
          handleScroll()
          lastScrollTime = now
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    return () => window.removeEventListener("scroll", scrollListener)
  }, [activeSection])

  // Get the color for the progress bar based on active section
  const getProgressColor = () => {
    switch (activeSection) {
      case "hero":
        return "oklch(var(--hero-color))"
      case "about":
        return "oklch(var(--about-color))"
      case "projects":
        return "oklch(var(--projects-color))"
      case "skills":
        return "oklch(var(--skills-color))"
      case "experience":
        return "oklch(var(--experience-color))"
      case "contact":
        return "oklch(var(--contact-color))"
      default:        return "oklch(var(--hero-color))"
    }
  }
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left gpu-accelerated"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: getProgressColor(),
        willChange: "transform",
        transform: "translateZ(0)", // Force hardware acceleration
      }}
    />
  )
}
