"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, User, Code, Users, Lightbulb } from "lucide-react"
import type { PersonalInfo } from "@/types"

interface AboutProps {
  personalInfo: PersonalInfo
}

const About = ({ personalInfo }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -25,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      rotateY: 25,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateZ: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 250,
        mass: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      rotateZ: 1,
      y: -8,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 400,
        mass: 0.5,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 500,
      },
    },
  }

  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
        mass: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      y: -4,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 600,
        mass: 0.3,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 700,
      },
    },
  }

  return (
    <section id="about" className="py-10 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 about-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 about-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 about-bg mx-auto rounded-full"
            style={{ backgroundColor: `oklch(var(--about-color))` }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div
              className="aspect-square bg-gradient-to-br from-card to-secondary/50 rounded-2xl flex items-center justify-center border border-border/50 hover-lift about-hover relative overflow-hidden group cursor-pointer"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 300,
                },
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 500,
                },
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 about-bg opacity-10"
                animate={{
                  background: [
                    `oklch(var(--about-color) / 0.05)`,
                    `oklch(var(--about-color) / 0.15)`,
                    `oklch(var(--about-color) / 0.05)`,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Profile placeholder with icon */}
              <motion.div
                className="text-6xl about-accent z-10"                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                    type: "keyframes", // Explicitly set to keyframes for multi-value arrays
                  },
                }}
              >
                <User className="w-24 h-24" />
              </motion.div>

              {/* Enhanced floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 about-accent rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-2 about-accent rounded-full"
                animate={{
                  y: [0, -12, 0],
                  x: [0, -3, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 right-8 w-1 h-1 about-accent rounded-full"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-card/50 p-4 rounded-lg border border-border/50 hover-lift about-hover backdrop-blur-sm group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  >
                    <MapPin className="w-4 h-4 about-accent" />
                  </motion.div>
                  <h3 className="font-semibold about-accent">Location</h3>
                </div>
                <p className="text-foreground">{personalInfo.location}</p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-card/50 p-4 rounded-lg border border-border/50 hover-lift about-hover backdrop-blur-sm group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.4, ease: "easeInOut" },
                    }}
                  >
                    <Mail className="w-4 h-4 about-accent" />
                  </motion.div>
                  <h3 className="font-semibold about-accent">Email</h3>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground hover:about-accent transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[
                { icon: Code, text: "Full-Stack Development" },
                { icon: Lightbulb, text: "Problem Solving" },
                { icon: Users, text: "Team Collaboration" },
              ].map((item, index) => (
                <motion.span
                  key={item.text}
                  variants={tagVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-4 py-2 about-bg about-accent rounded-full text-sm font-medium border hover-lift about-hover flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: `oklch(var(--about-color) / 0.1)`,
                    borderColor: `oklch(var(--about-color) / 0.2)`,
                  }}
                  custom={index}
                >                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, 0],
                      transition: { 
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "keyframes", // Explicitly set to keyframes for multi-value arrays
                      },
                    }}
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
