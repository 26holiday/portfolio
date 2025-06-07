"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase, Building, GraduationCap, Users, Award } from "lucide-react"
import type { Experience as ExperienceType } from "@/types"

interface ExperienceProps {
  experience: ExperienceType[]
}

const Experience = ({ experience }: ExperienceProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      rotateX: 15,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
  }

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      rotateY: index % 2 === 0 ? -15 : 15,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 250,
        mass: 0.6,
      },
    },
    hover: {
      scale: 1.02,
      y: -8,
      rotateY: 2,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 400,
        mass: 0.5,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 500,
      },
    },
  }

  const getTypeColor = (type: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300"
    switch (type) {
      case "Full-time":
        return `${baseClasses} experience-bg experience-accent`
      case "Part-time":
        return `${baseClasses} experience-bg experience-accent`
      case "Freelance":
        return `${baseClasses} experience-bg experience-accent`
      case "Internship":
        return `${baseClasses} experience-bg experience-accent`
      case "Education":
        return `${baseClasses} experience-bg experience-accent`
      default:
        return `${baseClasses} bg-muted text-muted-foreground border-border`
    }
  }

  const getTypeIcon = (type: string) => {
    const iconClass = "w-4 h-4 experience-accent"
    switch (type) {
      case "Education":
        return <GraduationCap className={iconClass} />
      case "Freelance":
        return <Users className={iconClass} />
      default:
        return <Building className={iconClass} />
    }
  }

  const ExperienceCard = ({ exp, index }: { exp: ExperienceType; index: number }) => (
    <motion.div variants={cardVariants} custom={index} className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-8 top-16 bottom-0 w-0.5 experience-accent hidden md:block"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 0.3 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          delay: index * 0.1,
        }}
        style={{ transformOrigin: "top", backgroundColor: `oklch(var(--experience-color) / 0.3)` }}
      />

      {/* Flowing effect on timeline */}
      <motion.div
        className="absolute left-8 top-16 w-0.5 h-20 experience-accent hidden md:block"
        style={{ backgroundColor: `oklch(var(--experience-color))` }}
        animate={{
          y: [0, 100, 200, 300],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-6 top-8 w-4 h-4 experience-accent rounded-full hidden md:block border-2 border-background z-10"
        style={{ backgroundColor: `oklch(var(--experience-color))` }}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 400,
          delay: index * 0.15,
        }}
        whileHover={{
          scale: 1.5,
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 600,
          },
        }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 experience-accent rounded-full"
          style={{ backgroundColor: `oklch(var(--experience-color) / 0.4)` }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      </motion.div>

      <motion.div
        className="md:ml-16 bg-card/50 rounded-xl border border-border/50 p-6 hover-lift experience-hover backdrop-blur-sm relative overflow-hidden group cursor-pointer"
        whileHover="hover"
        whileTap="tap"
      >
        {/* Card background glow */}
        <motion.div
          className="absolute inset-0 experience-bg opacity-5"
          whileHover={{
            opacity: 0.1,
            transition: { duration: 0.3 },
          }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold text-foreground mb-1 flex items-center gap-2"
              whileHover={{
                color: `oklch(var(--experience-color))`,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                {getTypeIcon(exp.type)}
              </motion.div>
              {exp.title}
            </motion.h3>
            <motion.p
              className="text-lg experience-accent font-medium mb-2"
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                },
              }}
            >
              {exp.company}
            </motion.p>
          </div>
          <motion.span
            className={getTypeColor(exp.type)}
            style={{
              backgroundColor: `oklch(var(--experience-color) / 0.1)`,
              borderColor: `oklch(var(--experience-color) / 0.2)`,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: `oklch(var(--experience-color) / 0.2)`,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 400,
              },
            }}
          >
            {exp.type}
          </motion.span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-muted-foreground">
          <motion.div
            className="flex items-center"
            whileHover={{
              scale: 1.05,
              color: `oklch(var(--experience-color))`,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
            </motion.div>
            <span className="text-sm font-mono">{exp.duration}</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            whileHover={{
              scale: 1.05,
              color: `oklch(var(--experience-color))`,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              whileHover={{
                scale: [1, 1.2, 1],
                transition: { duration: 0.4 },
              }}
            >
              <MapPin className="w-4 h-4 mr-2" />
            </motion.div>
            <span className="text-sm">{exp.location}</span>
          </motion.div>
        </div>

        <motion.p
          className="text-muted-foreground mb-4 leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
        >
          {exp.description}
        </motion.p>

        {exp.achievements.length > 0 && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 },
                }}
              >
                <Award className="w-4 h-4 experience-accent" />
              </motion.div>
              <h4 className="font-semibold text-foreground">Key Achievements:</h4>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  whileHover={{
                    color: `oklch(var(--experience-color))`,
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="w-1 h-1 experience-accent rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: `oklch(var(--experience-color))` }}
                    whileHover={{
                      scale: 1.5,
                      transition: { duration: 0.2 },
                    }}
                  />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm border border-border/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1 + techIndex * 0.05,
                type: "spring",
                damping: 20,
                stiffness: 400,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: `oklch(var(--experience-color) / 0.1)`,
                color: `oklch(var(--experience-color))`,
                borderColor: `oklch(var(--experience-color) / 0.3)`,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 experience-accent rounded-full"
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      </motion.div>
    </motion.div>
  )

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-32 right-16 w-36 h-36 experience-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-28 h-28 experience-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 experience-bg mx-auto mb-8 rounded-full"
            style={{ backgroundColor: `oklch(var(--experience-color))` }}
          />
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in computer science and software development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </motion.div>

        {experience.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="text-center py-12"
          >            <motion.div
              className="experience-accent mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                type: "keyframes", // Explicitly set to keyframes for multi-value arrays
              }}
            >
              <Briefcase className="w-16 h-16 mx-auto" />
            </motion.div>
            <p className="text-muted-foreground">Experience information will be loaded here.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Experience
