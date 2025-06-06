'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Project } from '@/types';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card/50 rounded-xl border border-border/50 overflow-hidden hover-lift backdrop-blur-sm"
      whileHover={{ y: -4 }}
    >
      <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-4xl text-primary/70 z-10">🎨</div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
            project.type === 'Personal Project' 
              ? 'bg-primary/10 text-primary border-primary/20' 
              : 'bg-accent/10 text-accent border-accent/20'
          }`}>
            {project.type}
          </span>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(project.completedAt).toLocaleDateString()}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-sm border border-border/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-sm border border-border/30">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, ranging from personal experiments to client work.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 border ${
                filter === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/50 text-muted-foreground hover:text-foreground border-border/50 hover:border-primary/50 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
