"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Calendar, Sparkles, Code2, Zap } from "lucide-react"
import type { Project } from "@/types"
import { useState } from "react"
import Image from "next/image"

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Reduced from 60
      scale: 0.85, // Slightly increased from 0.8
      rotateX: -10, // Reduced from -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18, // Reduced from 20
        stiffness: 350, // Increased from 300
        mass: 0.7, // Reduced from 0.8
      },
    },
    exit: {
      opacity: 0,
      y: -30, // Reduced from -40
      scale: 0.92, // Slightly increased from 0.9
      rotateX: 10, // Reduced from 15
      transition: {
        type: "spring",
        damping: 20, // Reduced from 25
        stiffness: 450, // Increased from 400
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35, // Reduced from 50
      scale: 0.92, // Slightly increased from 0.9
      rotateY: -7, // Reduced from -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15, // Reduced from 18
        stiffness: 300, // Increased from 250
        mass: 0.5, // Reduced from 0.6
      },
    },
    hover: {
      y: -10, // Reduced from -12
      scale: 1.03,
      rotateY: 1.5, // Reduced from 2
      transition: {
        type: "spring",
        damping: 12, // Reduced from 15
        stiffness: 450, // Increased from 400
        mass: 0.4, // Reduced from 0.5
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 500,
      },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 }, // Reduced y, slightly increased scale
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18, // Reduced from 20
        stiffness: 450, // Increased from 400
        mass: 0.35, // Reduced from 0.4
      },
    },
    hover: {
      scale: 1.05,
      y: -1.5, // Reduced from -2
      transition: {
        type: "spring",
        damping: 10, // Reduced from 12
        stiffness: 650, // Increased from 600
        mass: 0.25, // Reduced from 0.3
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        damping: 20, // Reduced from 25
        stiffness: 750, // Increased from 700
      },
    },
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="bg-card/50 rounded-xl border border-border/50 overflow-hidden hover-lift projects-hover backdrop-blur-sm group cursor-pointer"
      custom={index}
    >
      <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 projects-bg opacity-20"
          whileHover={{
            opacity: 0.3,
            transition: { duration: 0.2 }, // Reduced from 0.3
          }}
        ></motion.div>
        {project.image ? (
          <motion.div
            className="relative w-full h-full"
            whileHover={{
              scale: 1.08, // Slightly reduced from 1.1
              transition: {
                type: "spring",
                damping: 18, // Reduced from 20
                stiffness: 350, // Increased from 300
              },
            }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          <motion.div
            className="text-4xl projects-accent z-10"            whileHover={{
              scale: 1.15, // Reduced from 1.2
              rotate: [0, -8, 8, 0], // Reduced rotation range
              transition: {
                duration: 0.6, // Reduced from 0.7
                ease: "easeInOut",
                type: "keyframes", // Explicitly set to keyframes for multi-value arrays
              },
            }}
          >
            <Code2 className="w-16 h-16" />
          </motion.div>
        )}

        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 projects-accent rounded-full"
          animate={{
            y: [0, -8, 0], // Reduced y range
            opacity: [0.4, 0.9, 0.4], // Adjusted opacity
            scale: [1, 1.4, 1], // Adjusted scale
          }}
          transition={{
            duration: 2.5, // Reduced from 3
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <motion.span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              project.type === "Personal Project"
                ? "projects-bg projects-accent border"
                : "bg-accent/10 text-accent border-accent/20"
            }`}
            style={{
              backgroundColor: project.type === "Personal Project" ? `oklch(var(--projects-color) / 0.1)` : undefined,
              borderColor: project.type === "Personal Project" ? `oklch(var(--projects-color) / 0.2)` : undefined,
            }}
            whileHover={{
              scale: 1.04, // Reduced from 1.05
              transition: { type: "spring", damping: 18, stiffness: 450 }, // Adjusted spring
            }}
          >
            {project.type}
          </motion.span>
          <div className="flex items-center text-muted-foreground text-sm">
            <motion.div
              whileHover={{
                rotate: 360,
                transition: { duration: 0.5 }, // Reduced from 0.6
              }}
            >
              <Calendar className="w-4 h-4 mr-1" />
            </motion.div>
            {new Date(project.completedAt).toLocaleDateString()}
          </div>
        </div>

        <motion.h3
          className="text-xl font-bold text-foreground mb-2"
          whileHover={{
            color: `oklch(var(--projects-color))`,
            transition: { duration: 0.15 }, // Reduced from 0.2
          }}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-sm border border-border/30"
              whileHover={{
                scale: 1.04, // Reduced from 1.05
                backgroundColor: `oklch(var(--projects-color) / 0.1)`,
                color: `oklch(var(--projects-color))`,
                borderColor: `oklch(var(--projects-color) / 0.3)`,
                transition: {
                  type: "spring",
                  damping: 18, // Reduced from 20
                  stiffness: 450, // Increased from 400
                },
              }}
              initial={{ opacity: 0, scale: 0.85 }} // Adjusted initial scale
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: techIndex * 0.08, // Reduced delay
                type: "spring",
                damping: 18, // Reduced from 20
                stiffness: 450, // Increased from 400
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <motion.span
              className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-sm border border-border/30"
              whileHover={{
                scale: 1.04, // Reduced from 1.05
                backgroundColor: `oklch(var(--projects-color) / 0.1)`,
                color: `oklch(var(--projects-color))`,
                transition: { type: "spring", damping: 18, stiffness: 450 }, // Adjusted spring
              }}
            >
              +{project.technologies.length - 3} more
            </motion.span>
          )}
        </div>

        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center projects-accent hover:projects-accent/80 transition-colors duration-200 font-medium"
              whileHover={{
                scale: 1.04, // Reduced from 1.05
                x: 1.5, // Reduced x offset
                transition: { type: "spring", damping: 18, stiffness: 450 }, // Adjusted spring
              }}
              whileTap={{ scale: 0.96 }} // Adjusted tap scale
            >
              <motion.div
                whileHover={{
                  rotate: 45,
                  transition: { duration: 0.25 }, // Reduced from 0.3
                }}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
              </motion.div>
              Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center projects-accent hover:projects-accent/80 transition-colors duration-200 font-medium"
              whileHover={{
                scale: 1.04, // Reduced from 1.05
                x: 1.5, // Reduced x offset
                transition: { type: "spring", damping: 18, stiffness: 450 }, // Adjusted spring
              }}
              whileTap={{ scale: 0.96 }} // Adjusted tap scale
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.5 }, // Reduced from 0.6
                }}
              >
                <Github className="w-4 h-4 mr-1" />
              </motion.div>
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-32 right-20 w-40 h-40 projects-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1], // Reduced scale range
            opacity: [0.3, 0.55, 0.3], // Adjusted opacity
          }}
          transition={{
            duration: 4.5, // Reduced from 5
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-20 w-32 h-32 projects-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1], // Reduced scale range
            opacity: [0.2, 0.45, 0.2], // Adjusted opacity
          }}
          transition={{
            duration: 3.5, // Reduced from 4
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5, // Reduced delay
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 projects-bg mx-auto mb-8 rounded-full"
            style={{ backgroundColor: `oklch(var(--projects-color))` }}
          ></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, ranging from personal experiments to client work.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={filterVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 border flex items-center gap-2 ${
                filter === category
                  ? "projects-bg projects-accent border"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border-border/50 hover:border-projects/50 backdrop-blur-sm"
              }`}
              style={{
                backgroundColor: filter === category ? `oklch(var(--projects-color) / 0.1)` : undefined,
                borderColor: filter === category ? `oklch(var(--projects-color) / 0.3)` : undefined,
                color: filter === category ? `oklch(var(--projects-color))` : undefined,
              }}
              custom={index}
            >
              {filter === category && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    damping: 12, // Reduced from 15
                    stiffness: 450, // Increased from 400
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 18, // Reduced from 20
              stiffness: 350, // Increased from 300
            }}
            className="text-center py-12"
          >
            <motion.div
              className="projects-accent mb-4"
              animate={{
                rotate: [0, 8, -8, 0], // Reduced rotation range
              }}
              transition={{
                duration: 1.8, // Reduced from 2
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                type: "keyframes", // Explicitly set type
              }}
            >
              <Zap className="w-12 h-12 mx-auto" />
            </motion.div>
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
