"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Heart } from "lucide-react"
import type { PersonalInfo } from "@/types"
import { useState } from "react"

interface ContactProps {
  personalInfo: PersonalInfo
}

const Contact = ({ personalInfo }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 100,
      rotateY: direction * 15,
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
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -50,
      rotateY: direction * -10,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    }),
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 300,
        mass: 0.6,
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic email validation
    if (!formData.email || !formData.email.includes('@')) {
      // Consider adding user feedback here, e.g., a state for error message
      console.error("Invalid email address");
      return;
    }
    if (!personalInfo || !personalInfo.email) {
      console.error("Recipient email not configured.");
      // Optionally, provide user feedback that the form cannot be submitted currently.
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Attempt to open mailto link
    if (typeof window !== "undefined") {
      window.location.href = mailtoLink;
    } else {
      console.warn("Cannot open mailto link: window is not defined (not in a browser environment).");
    }
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "contact-accent",
    },
    ...(personalInfo.phone
      ? [
          {
            icon: Phone,
            label: "Phone",
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            color: "contact-accent",
          },
        ]
      : []),
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "contact-accent",
    },
  ]

  return (
    <section id="contact" className="py-10 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-16 w-40 h-40 contact-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-32 h-32 contact-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 contact-bg mx-auto mb-8 rounded-full"
            style={{ backgroundColor: `oklch(var(--contact-color))` }}
          />
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting projects. Let&apos;s connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={slideVariants}
            custom={-1}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
                whileHover={{
                  color: `oklch(var(--contact-color))`,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 },
                  }}
                >
                  <MessageCircle className="w-6 h-6 contact-accent" />
                </motion.div>
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                      delay: index * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 contact-bg rounded-lg flex items-center justify-center mr-4 border border-border/50 hover-lift contact-hover"
                      style={{
                        backgroundColor: `oklch(var(--contact-color) / 0.1)`,
                        borderColor: `oklch(var(--contact-color) / 0.2)`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: `oklch(var(--contact-color) / 0.2)`,
                        transition: {
                          type: "spring",
                          damping: 15,
                          stiffness: 400,
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <item.icon className="w-6 h-6 contact-accent" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground group-hover:contact-accent transition-colors duration-200">
                        {item.label}
                      </p>
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          className="text-muted-foreground hover:contact-accent transition-colors duration-200"
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {item.value}
                        </motion.a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                delay: 0.4,
              }}
            >
              <motion.h4
                className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2"
                whileHover={{
                  color: `oklch(var(--contact-color))`,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.4 },
                  }}
                >
                  <Heart className="w-5 h-5 contact-accent" />
                </motion.div>
                Follow Me
              </motion.h4>
              <div className="flex space-x-4">
                {personalInfo.social.github && (
                  <motion.a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/50 border border-border/50 text-foreground rounded-lg flex items-center justify-center hover-lift contact-hover backdrop-blur-sm transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `oklch(var(--contact-color) / 0.1)`,
                      borderColor: `oklch(var(--contact-color) / 0.3)`,
                      color: `oklch(var(--contact-color))`,
                      transition: {
                        type: "spring",
                        damping: 15,
                        stiffness: 400,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                )}
                {personalInfo.social.linkedin && (
                  <motion.a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/50 border border-border/50 text-foreground rounded-lg flex items-center justify-center hover-lift contact-hover backdrop-blur-sm transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `oklch(var(--contact-color) / 0.1)`,
                      borderColor: `oklch(var(--contact-color) / 0.3)`,
                      color: `oklch(var(--contact-color))`,
                      transition: {
                        type: "spring",
                        damping: 15,
                        stiffness: 400,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            className="bg-card/50 p-8 rounded-xl border border-border/50 hover-lift contact-hover backdrop-blur-sm relative overflow-hidden"
          >
            {/* Form background glow */}
            <motion.div
              className="absolute inset-0 contact-bg opacity-5"
              whileHover={{
                opacity: 0.1,
                transition: { duration: 0.3 },
              }}
            />

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg transition-all duration-300 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                  placeholder="Enter your name"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: `oklch(var(--contact-color) / 0.5)`,
                    boxShadow: `0 0 0 3px oklch(var(--contact-color) / 0.1)`,
                    transition: {
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                    },
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg transition-all duration-300 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                  placeholder="Enter your email"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: `oklch(var(--contact-color) / 0.5)`,
                    boxShadow: `0 0 0 3px oklch(var(--contact-color) / 0.1)`,
                    transition: {
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                    },
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                  placeholder="Tell me about your project or just say hello!"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: `oklch(var(--contact-color) / 0.5)`,
                    boxShadow: `0 0 0 3px oklch(var(--contact-color) / 0.1)`,
                    transition: {
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                    },
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full contact-bg contact-accent py-3 px-6 rounded-lg font-medium hover-lift contact-hover flex items-center justify-center border transition-all duration-300"
                style={{
                  backgroundColor: `oklch(var(--contact-color) / 0.1)`,
                  borderColor: `oklch(var(--contact-color) / 0.3)`,
                }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: `oklch(var(--contact-color) / 0.2)`,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 400,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 500,
                  },
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{
                    x: 2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 45,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                  Send Message
                </motion.div>
              </motion.button>
            </motion.form>

            {/* Floating particles */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 contact-accent rounded-full"
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-6 left-6 w-1 h-1 contact-accent rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
