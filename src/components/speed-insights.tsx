"use client"

import { useEffect } from "react"

// This component monitors web vitals for performance tracking
export function SpeedInsights() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      // Try to import and use web-vitals, but don't break if it fails
      import("web-vitals")
        .then((webVitals) => {
          // Check if functions exist before calling them (different versions have different APIs)
          if (typeof webVitals.onCLS === "function") {
            webVitals.onCLS(sendToAnalytics)
          }

          // Use onINP (newer versions) or try onFID (older versions) if available
          if (typeof webVitals.onINP === "function") {
            webVitals.onINP(sendToAnalytics)
          } else if ('onFID' in webVitals) {
            // @ts-expect-error - Handle older versions that might have onFID
            webVitals.onFID(sendToAnalytics)
          }

          if (typeof webVitals.onFCP === "function") {
            webVitals.onFCP(sendToAnalytics)
          }

          if (typeof webVitals.onLCP === "function") {
            webVitals.onLCP(sendToAnalytics)
          }

          if (typeof webVitals.onTTFB === "function") {
            webVitals.onTTFB(sendToAnalytics)
          }
        })
        .catch((err) => {
          // Silently fail if web-vitals is not available
          console.warn("Web vitals monitoring not available:", err.message)
        })
    }
  }, [])

  const sendToAnalytics = (metric: {
    name: string;
    value: number;
    id: string;
    rating: 'good' | 'needs-improvement' | 'poor' | undefined;
  }) => {
    // In production, send to your analytics service
    // For now, we'll just log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vital:", {
        name: metric.name,
        value: metric.value,
        id: metric.id,
        rating: metric.rating,
      })
    }

    // In production, you would send this to your analytics service:
    // gtag('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_category: 'Web Vitals',
    //   event_label: metric.id,
    //   non_interaction: true,
    // });
  }

  return null
}
