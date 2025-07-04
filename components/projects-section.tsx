'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Github, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The application is fully responsive and optimized for performance.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order tracking and management',
      'Admin dashboard for inventory management'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'A modern task management application that enables teams to collaborate effectively. Built with React and Firebase, it features real-time synchronization, drag-and-drop functionality, team collaboration tools, and comprehensive project tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time collaboration',
      'Drag and drop task management',
      'Team member assignment',
      'Project progress tracking',
      'File attachments and comments',
      'Mobile-responsive design'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and data visualization.',
    longDescription: 'An elegant weather dashboard that provides comprehensive weather information with beautiful data visualizations. Features location-based forecasts, interactive charts, weather maps, and historical data analysis.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Location-based weather forecasts',
      'Interactive weather charts',
      'Weather map integration',
      'Historical weather data',
      'Severe weather alerts',
      'Customizable dashboard widgets'
    ]
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with authentication and real-time features.',
    longDescription: 'A robust RESTful API built for a social media platform. Includes user authentication, post management, real-time messaging, friend connections, and comprehensive security measures. Built with scalability and performance in mind.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'User authentication with JWT',
      'Post creation and management',
      'Real-time messaging',
      'Friend/follower system',
      'Image upload and processing',
      'Rate limiting and security'
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing modern design and smooth animations.',
    longDescription: 'A stunning portfolio website built with Next.js and Framer Motion. Features smooth animations, responsive design, contact forms, and optimized performance. Showcases modern web development practices and design principles.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Smooth scroll animations',
      'Responsive design',
      'Contact form integration',
      'SEO optimization',
      'Performance optimization',
      'Modern UI/UX design'
    ]
  },
  {
    id: 6,
    title: 'Data Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization.',
    longDescription: 'A powerful analytics dashboard that processes and visualizes large datasets in real-time. Built with React and D3.js, it provides interactive charts, customizable reports, and data export functionality for business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time data processing',
      'Interactive data visualizations',
      'Customizable dashboard widgets',
      'Data export functionality',
      'User role management',
      'Automated report generation'
    ]
  }
]

const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, APIs, and creative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                      >
                        View Details
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div 
                    className="w-full h-64 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${selectedProject.image})` }}
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}


