import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPersonalInfo, getProjects, getSkills, getExperience } from '@/lib/data';

export default async function Home() {
  // Load all data server-side
  const [personalInfo, projects, skills, experience] = await Promise.all([
    getPersonalInfo(),
    getProjects(),
    getSkills(),
    getExperience()
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer />
    </div>
  );
}
