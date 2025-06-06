'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PersonalInfo } from '@/types';

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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&aposm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href={personalInfo.resume}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {personalInfo.social.github && (
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {personalInfo.social.linkedin && (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
