'use client'

import { useState, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const roles = [
  "Full Stack Developer",
  "UI/UX Designer", 
  "React Specialist",
  "Problem Solver"
]

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  animateX: number;
  animateY: number;
  duration: number;
}

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  useLayoutEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        animateX: Math.random() * window.innerWidth,
        animateY: Math.random() * window.innerHeight,
        duration: Math.random() * 10 + 20,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    // Optional: regenerate on resize, but can be costly.
    // window.addEventListener('resize', generateParticles);
    // return () => window.removeEventListener('resize', generateParticles);
  }, []);


  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentText = roles[currentRole]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        // Move to next role
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      } else {
        // Type or delete character
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentText.slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: p.initialX,
              y: p.initialY,
            }}
            animate={{
              x: p.animateX,
              y: p.animateY,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
            Your Name
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono h-8 mb-6">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            I craft beautiful and functional web experiences. Let's build something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/path-to-your-cv.pdf" download>
                <Download className="mr-2 h-5 w-5" /> Download CV
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button onClick={() => scrollToSection('about')} className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      </motion.div>
    </section>
  )
}

