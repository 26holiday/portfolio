"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)

          // Update active section based on scroll position
          const sections = ["hero", "about", "projects", "skills", "experience", "contact"]
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })

          if (currentSection) {
            setActiveSection(currentSection)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero", colorClass: "hero-accent", bgClass: "hero-bg" },
    { label: "About", id: "about", colorClass: "about-accent", bgClass: "about-bg" },
    { label: "Experience", id: "experience", colorClass: "experience-accent", bgClass: "experience-bg" },
    { label: "Projects", id: "projects", colorClass: "projects-accent", bgClass: "projects-bg" },
    { label: "Skills", id: "skills", colorClass: "skills-accent", bgClass: "skills-bg" },
    { label: "Contact", id: "contact", colorClass: "contact-accent", bgClass: "contact-bg" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-glow backdrop-blur-xl border-b border-border/30 shadow-2xl shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced effects */}
          <div className="relative group">
            <div className="text-2xl font-bold hero-accent floating-animation glow-effect cursor-pointer flex items-center gap-2">
              <Sparkles className="w-5 h-5 hero-accent animate-pulse" />
              Portfolio
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? `${item.colorClass} ${item.bgClass} shadow-lg`
                    : `text-muted-foreground hover:${item.colorClass} hover:bg-accent/50`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}

                {/* Active indicator */}
                <span
                  className={`absolute inset-x-2 -bottom-1 h-0.5 ${item.colorClass} rounded-full transition-all duration-300 ${
                    activeSection === item.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                  style={{ backgroundColor: `oklch(var(--${item.id}-color))` }}
                ></span>

                {/* Hover glow effect */}
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `oklch(var(--${item.id}-color) / 0.05)` }}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover-lift glow-effect rounded-lg hover:bg-accent/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/30 backdrop-glow backdrop-blur-sm rounded-b-xl mx-2 slide-down">
            <nav className="flex flex-col space-y-2 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`stagger-animation text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? `${item.colorClass} ${item.bgClass} shadow-lg`
                      : `text-muted-foreground hover:${item.colorClass} hover:bg-accent/50`
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Mobile active indicator */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full transition-all duration-300 ${
                      activeSection === item.id ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ backgroundColor: `oklch(var(--${item.id}-color))` }}
                  ></span>

                  {/* Mobile hover effect */}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `oklch(var(--${item.id}-color) / 0.05)` }}
                  ></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
