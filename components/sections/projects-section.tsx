"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { ExternalLink, Github, Code2, Star, GitFork, Calendar } from "lucide-react"
// import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github"

const FEATURED_PROJECTS = [
  {
    name: "The Brands Bazar",
    description: "A marketplace builder hackathon project for Brands Bazar.",
    github: "https://github.com/MustafaYamin/Marketplace-Builder-Hackathon-Brands-Bazar/",
    live: "https://the-brands-bazar.vercel.app/",
  },
  {
    name: "Static Ecommerce website",
    description: "A static ecommerce website built with modern web technologies.",
    github: "https://github.com/MustafaYamin/ecommerce-static-website/",
    live: "https://ecommerce-static-website.vercel.app/",
  },
  {
    name: "Mommyology",
    description: "A web project for Mommyology.",
    github: "https://github.com/MustafaYamin/Mommyology/",
    live: "https://mommyology.vercel.app/",
  },
  {
    name: "Unit convertor web app",
    description: "A unit converter web app built with Streamlit.",
    github: "https://github.com/MustafaYamin/Unit-Convertor-web-app",
    live: "https://mustafayamin-unit-convertor-web-app-unit-convertor-ticnsd.streamlit.app/",
  },
  {
    name: "Library manager web app",
    description: "A personal library manager web app built with Streamlit.",
    github: "https://github.com/MustafaYamin/Personal-Library-Manager",
    live: "https://mustafayamin-personal-library-manager-library-lohcsi.streamlit.app/",
  },
  {
    name: "Password strength checker",
    description: "A password strength checker app built with Streamlit.",
    github: "https://github.com/MustafaYamin/Password-Strength-Checker",
    live: "https://mustafayamin-password-strength-checker-app-leuzde.streamlit.app/",
  },
  {
    name: "Data Sweeper",
    description: "A data sweeper app built with Streamlit.",
    github: "https://github.com/MustafaYamin/Data_Sweeper",
    live: "https://mustafayamin-data-sweeper-app-hy9n8w.streamlit.app/",
  },
]

const ProjectCard = ({ project, index }: { project: typeof FEATURED_PROJECTS[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card className="h-full bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-blue-500 transition-colors line-clamp-1">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex-1 flex flex-col">
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex gap-3 pt-4 mt-auto">
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {project.live && (
              <Button asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my best work, with links to code and live demos.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.github} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}