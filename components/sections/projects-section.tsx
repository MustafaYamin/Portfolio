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

const FEATURED_PROJECTS: { name: string; description: string; github: string; live?: string; tags: string[] }[] = [
  {
    name: "Personal AI FTE",
    description: "A local-first personal AI employee powered by Qwen Code and Obsidian that automates personal and business tasks 24/7.",
    github: "https://github.com/MustafaYamin/Personal-AI-FTE",
    tags: ["AI Agents", "Python", "Automation"],
  },
  {
    name: "100 Free MCP Servers",
    description: "A curated, documented collection of 100 free and open-source Model Context Protocol servers. My most-starred open-source project.",
    github: "https://github.com/MustafaYamin/100-free-mcp-servers",
    tags: ["MCP", "Open Source", "AI Tooling"],
  },
  {
    name: "AI Event Planner",
    description: "A conversational AI assistant that plans events, searches venues, manages Google Calendar and sends invitations, with real-time streaming responses.",
    github: "https://github.com/MustafaYamin/AI-Event-Planner-Frontend",
    tags: ["Next.js", "FastAPI", "OpenAI", "Function Calling"],
  },
  {
    name: "AI Mustaqbil 2.0",
    description: "Multi-agent systems hackathon build: autonomous AI pipelines where multiple agents think, collaborate and act together to solve real problems.",
    github: "https://github.com/MustafaYamin/AI-Mustaqbil-2.0",
    tags: ["Multi-Agent", "LLMs", "Hackathon"],
  },
  {
    name: "Logistics CRM",
    description: "A full-stack freight and agent management system with role-based access control, Excel bulk import and automated email workflows.",
    github: "https://github.com/MustafaYamin/logistics-crm-nextjs",
    tags: ["Next.js 14", "Prisma", "MySQL", "RBAC"],
  },
  {
    name: "HandLoom",
    description: "Real-time two-hand tracking that threads a glowing, animated web of light between your hands, right in the browser.",
    github: "https://github.com/MustafaYamin/handLoom",
    tags: ["Computer Vision", "JavaScript", "Creative Coding"],
  },
  {
    name: "The Brands Bazar",
    description: "An e-commerce marketplace built for the Marketplace Builder Hackathon with Next.js, TypeScript and a headless CMS.",
    github: "https://github.com/MustafaYamin/Marketplace-Builder-Hackathon-Brands-Bazar",
    live: "https://the-brands-bazar.vercel.app/",
    tags: ["Next.js", "E-commerce", "Hackathon"],
  },
  {
    name: "Mommyology",
    description: "A professional website redesign for Mommyology, a nature-based educational organisation for children.",
    github: "https://github.com/MustafaYamin/Mommyology",
    live: "https://mommyology.vercel.app/",
    tags: ["Next.js", "TypeScript", "Client Project"],
  },
  {
    name: "KnowledgeHub",
    description: "A blog platform with a dashboard for publishing and reading articles.",
    github: "https://github.com/MustafaYamin/KnowledgeHub",
    live: "https://knowledge-hub-smoky.vercel.app/",
    tags: ["Next.js", "TypeScript", "Blog"],
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
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
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
            AI agents, open-source tooling and full-stack products, with links to code and live demos.
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