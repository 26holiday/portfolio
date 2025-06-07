/**
 * Animation Utilities for Performance Optimization
 *
 * This file contains optimized animation variants and utilities
 * designed to reduce stuttering and improve performance.
 */

// Efficient transform-only animations that avoid layout thrashing
export const efficientTransformVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 }, // Reduced y, slightly increased scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      // Faster spring
      stiffness: 150, // Increased from 100
      damping: 20,  // Reduced from 25
      mass: 0.4,    // Reduced from 0.5
    },
  },
  exit: {
    opacity: 0,
    y: -15, // Reduced y
    transition: {
      type: "tween",
      duration: 0.15, // Reduced from 0.2
      ease: "easeOut",
    },
  },
}

// Optimized container variants with reduced staggering
export const efficientContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.07
      delayChildren: 0.08, // Reduced from 0.1
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03, // Reduced from 0.05
      staggerDirection: -1,
    },
  },
}

// Optimized hover variants that use GPU-accelerated properties
export const efficientHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      // Faster spring
      stiffness: 350, // Increased from 300
      damping: 15,  // Reduced from 20
      mass: 0.4,    // Reduced from 0.5
    },
  },
  tap: {
    scale: 0.97,
    transition: {
      type: "spring",
      // Faster spring
      stiffness: 550, // Increased from 500
      damping: 20,  // Reduced from 25
    },
  },
}

// Reduced motion variants for accessibility - keep these relatively quick but not jarring
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 }, // Reduced from 0.2
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.08 }, // Reduced from 0.1
  },
  hover: {
    opacity: 0.8,
    transition: { duration: 0.08 }, // Reduced from 0.1
  },
}

// Optimized scroll-based animations
export const efficientScrollVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 }, // Reduced from 0.3
  },
}

// Utility to determine if reduced motion is preferred
export const isReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
}

// Optimized floating animation that uses transform only
export const efficientFloatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    ease: "easeInOut",
  },
}

// Optimized pulse animation that uses transform and opacity only
export const efficientPulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    ease: "easeInOut",
  },
}

// Helper to add will-change CSS property for hardware acceleration
export const withHardwareAcceleration = (className: string) => `${className} will-change-transform`

// Optimized timeline for scroll-triggered animations
export const createScrollTimeline = (delay = 0) => ({
  opacity: [0, 1],
  y: [50, 0],
  transition: {
    duration: 0.5,
    delay,
    ease: "easeOut",
  },
})
