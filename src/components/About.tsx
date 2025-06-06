'use client';

import { motion } from 'framer-motion';
import { PersonalInfo } from '@/types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About = ({ personalInfo }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-card to-secondary/50 rounded-2xl flex items-center justify-center border border-border/50 hover-lift relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              {/* Placeholder for profile image */}
              <div className="text-6xl text-primary/70 z-10">👤</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card/50 p-4 rounded-lg border border-border/50 hover-lift backdrop-blur-sm">
                <h3 className="font-semibold text-primary mb-2">Location</h3>
                <p className="text-foreground">{personalInfo.location}</p>
              </div>
              
              <div className="bg-card/50 p-4 rounded-lg border border-border/50 hover-lift backdrop-blur-sm">
                <h3 className="font-semibold text-accent mb-2">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover-lift">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover-lift">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/30 hover-lift">
                Team Collaboration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
