/**
 * SEO Utilities
 *
 * This file contains utilities for optimizing SEO across the portfolio site.
 */

import type { Metadata } from "next"
import type { PersonalInfo, Project } from "@/types"

export interface SeoProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "profile"
  twitterCard?: "summary" | "summary_large_image"
  canonicalUrl?: string
  noIndex?: boolean
}

// Generate consistent metadata for all pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
}: SeoProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
  }
}

// Schema.org structured data for a person/portfolio
export function generatePersonSchema(personalInfo: PersonalInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    sameAs: [personalInfo.social.github, personalInfo.social.linkedin].filter(Boolean),
  }
}

// Schema.org structured data for projects
export function generateProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    datePublished: project.completedAt,
    url: project.demoUrl || project.githubUrl,
    author: {
      "@type": "Person",
      name: "Your Name", // Replace with actual name
    },
    keywords: project.technologies.join(", "),
  }
}

// Helper to generate semantic section IDs
export function generateSectionId(sectionName: string): string {
  return sectionName.toLowerCase().replace(/\s+/g, "-")
}

// Helper to ensure proper heading hierarchy
export function getHeadingLevel(level: number): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" {
  if (level < 1) return "h1"
  if (level > 6) return "h6"
  return `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
