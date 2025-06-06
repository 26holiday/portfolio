'use client';

import { motion } from 'framer-motion';
import { Skills as SkillsType } from '@/types';

interface SkillsProps {
  skills: SkillsType;
}

const Skills = ({ skills }: SkillsProps) => {
  const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground text-sm">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I&apos;ve developed throughout my journey as a developer.
          </p>
        </motion.div>        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skills.technical.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl border border-border hover-lift"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={skillIndex}
                />
              ))}
            </motion.div>
          ))}
        </div>        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.soft.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--pastel-blue))] to-[hsl(var(--pastel-purple))] text-background rounded-full font-medium shadow-lg hover:shadow-xl hover-lift transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
