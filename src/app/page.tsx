import { Suspense } from "react";
import dynamic from "next/dynamic";
import { generatePersonSchema } from "@/lib/seo-utils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LazySection } from "@/components/lazy-section";
import { ScrollProgress } from "@/components/scroll-progress";
import Footer from "@/components/Footer";
import { getPersonalInfo, getProjects, getSkills, getExperience } from '@/lib/data';

// Dynamically import components for better performance
const About = dynamic(() => import("@/components/About"), {
  ssr: true,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default async function Home() {
  // Load all data server-side
  const [personalInfo, projects, skills, experience] = await Promise.all([
    getPersonalInfo(),
    getProjects(),
    getSkills(),
    getExperience()
  ]);

  // Generate structured data for SEO
  const personSchema = generatePersonSchema(personalInfo);

  return (
    <>
      {/* Add structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Fixed header */}
      <Header />

      {/* Main content with optimized loading */}
      <div className="min-h-screen bg-background text-foreground">
        <Hero personalInfo={personalInfo} />

        <Suspense fallback={<div className="h-screen"></div>}>
          <LazySection id="about" className="py-20 bg-background relative overflow-hidden">
            <About personalInfo={personalInfo} />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <LazySection id="experience" className="py-20 bg-background relative overflow-hidden">
            <Experience experience={experience} />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <LazySection id="projects" className="py-20 bg-background relative overflow-hidden">
            <Projects projects={projects} />
          </LazySection>
        </Suspense>

        <Suspense fallback={<div className="h-screen"></div>}>
          <LazySection id="skills" className="py-20 bg-background relative overflow-hidden">
            <Skills skills={skills} />
          </LazySection>
        </Suspense>


        <Suspense fallback={<div className="h-screen"></div>}>
          <LazySection id="contact" className="py-20 bg-background relative overflow-hidden">
            <Contact personalInfo={personalInfo} />
          </LazySection>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
