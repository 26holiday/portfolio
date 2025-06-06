'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '@/types';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience = ({ experience }: ExperienceProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-[hsl(var(--pastel-green)/0.2)] text-[hsl(var(--pastel-green))] border border-[hsl(var(--pastel-green)/0.3)]';
      case 'Part-time':
        return 'bg-[hsl(var(--pastel-blue)/0.2)] text-[hsl(var(--pastel-blue))] border border-[hsl(var(--pastel-blue)/0.3)]';
      case 'Freelance':
        return 'bg-[hsl(var(--pastel-purple)/0.2)] text-[hsl(var(--pastel-purple))] border border-[hsl(var(--pastel-purple)/0.3)]';
      case 'Internship':
        return 'bg-[hsl(var(--pastel-orange)/0.2)] text-[hsl(var(--pastel-orange))] border border-[hsl(var(--pastel-orange)/0.3)]';
      case 'Education':
        return 'bg-[hsl(var(--pastel-pink)/0.2)] text-[hsl(var(--pastel-pink))] border border-[hsl(var(--pastel-pink)/0.3)]';
      default:
        return 'bg-muted text-muted-foreground border border-border';
    }
  };

  const ExperienceCard = ({ exp, index }: { exp: ExperienceType; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] rounded-full hidden md:block" />
      
      <div className="md:ml-16 bg-card rounded-xl border border-border p-6 hover-lift transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
            <p className="text-lg text-[hsl(var(--pastel-blue))] font-medium mb-2">{exp.company}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)} self-start`}>
            {exp.type}
          </span>
        </div>        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{exp.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{exp.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{exp.description}</p>

        {exp.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in computer science and software development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>        {experience.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Experience information will be loaded here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
