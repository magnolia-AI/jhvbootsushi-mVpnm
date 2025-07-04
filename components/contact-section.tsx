'use client'

import { createMessage } from '@/app/actions/messages'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'john.doe@example.com',
    href: 'mailto:john.doe@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Availability',
    value: 'Open to opportunities',
    href: '#'
  }
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-blue-400'
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} className="flex items-center space-x-4 group">
                    <item.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`text-muted-foreground transition-colors ${link.color}`}>
                        <link.icon className="w-6 h-6" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={createMessage} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message" required className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

