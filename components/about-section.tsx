'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Download, Code, Palette, Zap, Users } from 'lucide-react'

const skills = [
  { name: 'React/Next.js', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '🔷' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'Python', level: 80, icon: '🐍' },
  { name: 'UI/UX Design', level: 75, icon: '🎨' },
  { name: 'AWS/Cloud', level: 70, icon: '☁️' },
]

const experiences = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2021 - 2023',
    title: 'Frontend Developer',
    company: 'Digital Solutions Co.',
    description: 'Built responsive web applications and improved user experience for 50+ client projects.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Developer',
    company: 'StartUp Labs',
    description: 'Developed and maintained web applications while learning modern development practices.',
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Bachelor of Science in Computer Science with focus on software engineering and web development.',
  },
]

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Design-Focused',
    description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, accessibility, and search engine visibility.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver projects on time.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions 
            that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into web development started during college when I built my first 
                website using HTML and CSS. What began as curiosity quickly became a passion 
                for creating digital experiences that solve real-world problems.
              </p>
              <p>
                Over the years, I've had the privilege of working with startups and established 
                companies, helping them bring their visions to life through code. I believe in 
                the power of technology to make life better and more efficient.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Experience & Education</h3>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-6 w-0.5 h-full bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                
                <div className="ml-4">
                  <Badge variant="secondary" className="mb-2">
                    {exp.year}
                  </Badge>
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
