"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Zap, Star } from "lucide-react"
import type { Skills as SkillsType } from "@/types"
import { efficientTransformVariants, efficientContainerVariants } from "@/lib/animation-utils"

interface SkillsProps {
  skills: SkillsType
}

const Skills = ({ skills }: SkillsProps) => {
  const getCategoryIcon = (category: string) => {
    const iconClass = "w-5 h-5 skills-accent"
    switch (category.toLowerCase()) {
      case "frontend":
      case "front-end":
        return <Globe className={iconClass} />
      case "backend":
      case "back-end":
        return <Database className={iconClass} />
      case "mobile":
        return <Smartphone className={iconClass} />
      case "tools":
      case "devops":
        return <Zap className={iconClass} />
      default:
        return <Code className={iconClass} />
    }
  }

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={efficientContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={efficientTransformVariants}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            variants={efficientTransformVariants}
            className="w-20 h-1 skills-bg mx-auto mb-8 rounded-full"
            style={{ backgroundColor: `oklch(var(--skills-color))` }}
          />
          <motion.p variants={efficientTransformVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I&apos;ve developed throughout my journey as a developer.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skills.technical.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }} // Reduced y
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }} // Reduced duration and delay
              viewport={{ once: true }}
              className="bg-card/50 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 skills-bg rounded-lg"
                  style={{ backgroundColor: `oklch(var(--skills-color) / 0.1)` }}
                >
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium flex items-center gap-2">
                        <Star className="w-4 h-4 skills-accent" />
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm font-mono">{skill.level}%</span>
                    </div>

                    {/* Simplified skill bar */}
                    <div className="relative w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.04 }} // Reduced duration and delay
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{
                          background: `oklch(var(--skills-color))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} // Reduced y
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Reduced duration
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 skills-accent" />
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.soft.map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }} // Adjusted initial scale
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }} // Reduced duration
                viewport={{ once: true }}
                className="px-4 py-2 skills-bg skills-accent rounded-full font-medium border"
                style={{
                  backgroundColor: `oklch(var(--skills-color) / 0.1)`,
                  borderColor: `oklch(var(--skills-color) / 0.2)`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
