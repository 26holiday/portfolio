'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PersonalInfo } from '@/types';
import { Button } from '@/components/ui/button';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero = ({ personalInfo }: HeroProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary/90 mb-4 font-medium">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 hover-lift"
          >
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-border bg-card/50 text-foreground hover:bg-card font-medium px-8 py-3 hover-lift backdrop-blur-sm"
          >
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {personalInfo.social.github && (
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {personalInfo.social.linkedin && (
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 hover-lift"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Scroll to about section"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
