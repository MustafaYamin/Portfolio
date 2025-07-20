"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants"
import Image from "next/image"

const FloatingShape = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm ${className}`}
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = PERSONAL_INFO.resumeUrl
    link.download = 'mustafa_portfolio.pdf'
    link.click()
  }

  return (
    (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 pt-16 sm:pt-24 md:pt-32">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape delay={0} className="w-64 h-64 top-20 left-10" />
        <FloatingShape delay={2} className="w-48 h-48 top-1/2 right-20" />
        <FloatingShape delay={4} className="w-32 h-32 bottom-20 left-1/4" />
        <FloatingShape delay={1} className="w-40 h-40 top-1/3 left-2/3" />
        
        {/* Particle effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-orange-500 bg-clip-text text-transparent mb-4"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6"
            >
              {PERSONAL_INFO.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              {PERSONAL_INFO.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="h-4 w-4" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 text-lg group w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="flex gap-3 justify-center lg:justify-start">
                <Button variant="outline" size="icon" asChild>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/mustafa-yamin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://mail.google.com/mail/?view=cm&to=mustafayamin5@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email via Gmail">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Mustafa Yamin profile photo"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                {/* <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-muted-foreground bg-background/70 rounded">
                  {PERSONAL_INFO.name}
                </div> */}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      </section>
    )
  )
}