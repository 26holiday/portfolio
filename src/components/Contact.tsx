'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { PersonalInfo } from '@/types';
import { useState } from 'react';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact = ({ personalInfo }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${personalInfo?.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;  };
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting projects. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[hsl(var(--pastel-blue)/0.2)] rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-[hsl(var(--pastel-blue))]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-[hsl(var(--pastel-blue))] transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[hsl(var(--pastel-green)/0.2)] rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-[hsl(var(--pastel-green))]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-muted-foreground hover:text-[hsl(var(--pastel-green))] transition-colors duration-200"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[hsl(var(--pastel-purple)/0.2)] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-[hsl(var(--pastel-purple))]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border text-foreground rounded-lg flex items-center justify-center hover-lift transition-all duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[hsl(var(--pastel-blue)/0.2)] border border-[hsl(var(--pastel-blue)/0.3)] text-[hsl(var(--pastel-blue))] rounded-lg flex items-center justify-center hover-lift transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-[hsl(var(--pastel-blue))] focus:border-transparent transition-colors duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-[hsl(var(--pastel-blue))] focus:border-transparent transition-colors duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-[hsl(var(--pastel-blue))] focus:border-transparent transition-colors duration-200 resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] text-background py-3 px-6 rounded-lg font-medium hover-lift transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
