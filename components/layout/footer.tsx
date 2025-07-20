"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Code, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mustafayamin",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mustafa-yamin/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=mustafayamin5@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Code className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Mustafa Yamin
              </span>
            </div>
            <p className="text-muted-foreground">
              Frontend Developer & AI Enthusiast crafting innovative web experiences.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <Button
                  key={link.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground mb-2">Ready to collaborate?</p>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/mustafa-yamin/" target="_blank" rel="noopener noreferrer">
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-muted-foreground"
        >
          <p>
            © {currentYear} Mustafa Yamin. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500" /> using Next.js, TailwindCSS & shadcn/ui
          </p>
        </motion.div>
      </div>
    </footer>
  )
}