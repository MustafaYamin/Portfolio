"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, FileText, Heart, Rocket, Brain, Code2, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "AI Engineer",
    company: "Inseyab Consulting & Information Solutions",
    period: "Apr 2026 – Present · Full-time · Karachi (NASTP)",
    description: "Building and deploying AI systems for enterprise clients across Pakistan and the Middle East. Helped deliver an intent-routed multi-agent sales analytics system on Azure & Microsoft Fabric (SAP HANA → Fabric) with incremental RAG, natural-language Power BI dashboards, daily C-suite email and audio briefings, and voice + chat interfaces. Built the FastAPI backend, PostgreSQL and Odoo integration for a smart-warehouse computer-vision platform that counts sacks in real time (~90% accuracy).",
    icon: Brain,
    highlights: ["Multi-Agent Systems", "OpenAI Agents SDK", "RAG", "Computer Vision", "FastAPI", "PostgreSQL", "Azure / Microsoft Fabric", "Docker"]
  },
  {
    title: "Junior Full Stack Developer",
    company: "E-services and Technologies",
    period: "Oct 2025 – Apr 2026 · Full-time",
    description: "Built responsive web applications and integrated generative and agentic AI features into client products. Developed production UIs in React, Next.js and Angular, built Node.js APIs on SQL and NoSQL databases, integrated LLM-powered features with the OpenAI Agents SDK, and containerised services with Docker.",
    icon: Code2,
    highlights: ["React", "Next.js", "Angular", "TypeScript", "Node.js", "OpenAI Agents SDK", "Docker"]
  },
  {
    title: "Web Development Intern",
    company: "E-services and Technologies",
    period: "Feb 2025 – Oct 2025 · Karachi",
    description: "Built front-end features in Angular and learned production workflows within the development team. Promoted to Junior Full Stack Developer in October 2025.",
    icon: Briefcase,
    highlights: ["Angular", "Frontend Development", "Team Workflows"]
  },
  {
    title: "AI & Aerospace Coordinator",
    company: "Stream Academy International",
    period: "May 2024 – Apr 2026 · Part-time",
    description: "Coordinated AI, web development and aerospace learning programmes. Researched and implemented AI learning projects, mentored students through hands-on web and AI projects, and led workshops on High-Altitude Balloons and CubeSats.",
    icon: GraduationCap,
    highlights: ["AI Education", "Mentoring", "High-Altitude Balloons", "CubeSats", "Team Coordination"]
  },
  {
    title: "Content Research & Writer",
    company: "Engagex Digital",
    period: "Mar 2024 – Sep 2024 · Part-time · Remote",
    description: "Researched topics and keywords, and wrote SEO-optimised blogs, articles and product reviews for tech and business niches, from draft through publishing.",
    icon: FileText,
    highlights: ["SEO Strategy", "Keyword Research", "Content Writing", "Digital Marketing"]
  },
  {
    title: "Frontend Developer",
    company: "NASA Space Apps Challenge",
    period: "Hackathon",
    description: "Designed frontend interfaces for a space-tech hackathon project, collaborating with a cross-functional team on solutions to space-related challenges.",
    icon: Rocket,
    highlights: ["Frontend Development", "Space Technology", "Hackathon", "Team Collaboration"]
  },
  {
    title: "Volunteer Challenge Master",
    company: "Destination Imagination Pakistan",
    period: "2023 · National Competition",
    description: "Served as a Challenge Master and Appraiser at the national creativity tournament, facilitating creative problem-solving challenges for participating teams.",
    icon: Users,
    highlights: ["Creative Mentorship", "Judging", "Problem Solving", "Event Management"]
  },
  {
    title: "Volunteer",
    company: "Mommyology",
    period: "Community Service",
    description: "Assisted in nature-based learning events for children and later redesigned the organisation's website.",
    icon: Heart,
    highlights: ["Nature Education", "Event Support", "Community Engagement"]
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const IconComponent = experience.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 transform -translate-x-1/2 z-10" />
      )}
      
      <Card className="relative bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2 hover:border-blue-500/50 transition-all duration-300 group">
        {/* Timeline dot */}
        <div className="absolute left-1/2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20" />
        
        <CardHeader className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-teal-500/20 group-hover:from-blue-500/30 group-hover:to-teal-500/30 transition-all duration-300">
              <IconComponent className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                {experience.title}
              </CardTitle>
              <p className="text-lg font-semibold text-muted-foreground">
                {experience.company}
              </p>
              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From web development intern to AI Engineer: building production AI, full-stack products and learning programmes along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`${experience.title}-${experience.company}`} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}