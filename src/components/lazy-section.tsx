"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { efficientScrollVariants } from "@/lib/animation-utils"

interface LazySectionProps {
  id: string
  className?: string
  threshold?: number
  children: React.ReactNode
}

// Component that only animates when in viewport
export function LazySection({ id, className = "", threshold = 0.1, children }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, no need to observe anymore
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold },
    )

    // Store a reference to the current DOM node
    const currentRef = ref.current

    if (currentRef) observer.observe(currentRef)

    return () => {
      // Use the stored reference in the cleanup function
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [threshold])

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={efficientScrollVariants}>
        {children}
      </motion.div>
    </section>
  )
}
